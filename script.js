// ===== BACKEND CONFIG =====
const API_BASE = 'http://localhost:5000';

// ===== PARTICLE BACKGROUND =====
const canvas = document.getElementById('particles');
const ctx = canvas.getContext('2d');

function resizeCanvas() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}
resizeCanvas();
window.addEventListener('resize', resizeCanvas);

const particles = [];
const PARTICLE_COUNT = 60;

for (let i = 0; i < PARTICLE_COUNT; i++) {
  particles.push({
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    size: Math.random() * 2 + 0.5,
    speedX: (Math.random() - 0.5) * 0.3,
    speedY: (Math.random() - 0.5) * 0.3,
    opacity: Math.random() * 0.5 + 0.1
  });
}

function animateParticles() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  
  particles.forEach(p => {
    p.x += p.speedX;
    p.y += p.speedY;
    
    if (p.x < 0) p.x = canvas.width;
    if (p.x > canvas.width) p.x = 0;
    if (p.y < 0) p.y = canvas.height;
    if (p.y > canvas.height) p.y = 0;
    
    ctx.beginPath();
    ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
    ctx.fillStyle = `rgba(0, 245, 255, ${p.opacity})`;
    ctx.fill();
  });
  
  // Verbind lijnen tussen nabije deeltjes
  for (let i = 0; i < particles.length; i++) {
    for (let j = i + 1; j < particles.length; j++) {
      const dx = particles[i].x - particles[j].x;
      const dy = particles[i].y - particles[j].y;
      const dist = Math.sqrt(dx * dx + dy * dy);
      
      if (dist < 120) {
        ctx.beginPath();
        ctx.moveTo(particles[i].x, particles[i].y);
        ctx.lineTo(particles[j].x, particles[j].y);
        ctx.strokeStyle = `rgba(0, 245, 255, ${0.05 * (1 - dist / 120)})`;
        ctx.lineWidth = 0.5;
        ctx.stroke();
      }
    }
  }
  
  requestAnimationFrame(animateParticles);
}
animateParticles();

// ===== TIMESTAMP =====
function updateTimestamp() {
  const now = new Date();
  const timeStr = now.toLocaleTimeString('nl-NL', { hour12: false });
  document.getElementById('timestamp').textContent = `🕒 ${timeStr} UTC+1`;
}
updateTimestamp();
setInterval(updateTimestamp, 1000);

// ===== TAB SWITCHING =====
document.querySelectorAll('.tab-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    document.querySelectorAll('.tab-content').forEach(t => t.classList.remove('active'));
    document.getElementById(btn.dataset.tab).classList.add('active');
  });
});

// ===== API CALLS =====
async function callCrackAPI(endpoint, data) {
  const response = await fetch(`${API_BASE}${endpoint}`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data)
  });
  
  if (!response.ok) {
    throw new Error(`HTTP ${response.status}`);
  }
  
  return await response.json();
}

// ===== CRACKING FUNCTIES =====
async function johnCrack(hash, wordlist) {
  const words = wordlist.split(',').map(w => w.trim()).filter(w => w.length > 0);
  return await callCrackAPI('/crack/john', { hash, wordlist: words });
}

async function bruteCrack(hash, maxLen) {
  return await callCrackAPI('/crack/brute', { hash, maxlen: parseInt(maxLen) || 4 });
}

async function dictCrack(hash, wordlist) {
  const words = wordlist.split('\n').map(w => w.trim()).filter(w => w.length > 0);
  return await callCrackAPI('/crack/dict', { hash, wordlist: words });
}

async function rainbowCrack(hash) {
  return await callCrackAPI('/crack/rainbow', { hash });
}

async function maskCrack(hash, pattern) {
  return await callCrackAPI('/crack/mask', { hash, pattern });
}

// ===== EVENT LISTENERS =====
document.querySelectorAll('.crack-btn').forEach(btn => {
  btn.addEventListener('click', async () => {
    const tool = btn.dataset.tool;
    const output = document.getElementById(tool + '-output');
    
    // Animatie: pulserende tekst
    output.innerHTML = '<span style="color: #00f5ff; animation: pulse 0.8s ease-in-out infinite;">⏳ INITIALISEREN...</span>';
    
    // Voeg pulse keyframe toe als die nog niet bestaat
    if (!document.getElementById('pulse-style')) {
      const style = document.createElement('style');
      style.id = 'pulse-style';
      style.textContent = `
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.3; }
        }
      `;
      document.head.appendChild(style);
    }

    try {
      let result;
      switch(tool) {
        case 'john': {
          const hash = document.getElementById('john-hash').value.trim();
          const wordlist = document.getElementById('john-wordlist').value;
          if (!hash) { output.textContent = '❌ Voer een hash in.'; return; }
          result = await johnCrack(hash, wordlist);
          break;
        }
        case 'brute': {
          const hash = document.getElementById('brute-hash').value.trim();
          const maxLen = document.getElementById('brute-maxlen').value || 4;
          if (!hash) { output.textContent = '❌ Voer een MD5 hash in.'; return; }
          result = await bruteCrack(hash, maxLen);
          break;
        }
        case 'dict': {
          const hash = document.getElementById('dict-hash').value.trim();
          const words = document.getElementById('dict-words').value;
          if (!hash || !words) { output.textContent = '❌ Vul hash en woordenlijst in.'; return; }
          result = await dictCrack(hash, words);
          break;
        }
        case 'rainbow': {
          const hash = document.getElementById('rainbow-hash').value.trim();
          if (!hash) { output.textContent = '❌ Voer een MD5 hash in.'; return; }
          result = await rainbowCrack(hash);
          break;
        }
        case 'mask': {
          const hash = document.getElementById('mask-hash').value.trim();
          const pattern = document.getElementById('mask-pattern').value.trim();
          if (!hash || !pattern) { output.textContent = '❌ Vul hash en masker in.'; return; }
          result = await maskCrack(hash, pattern);
          break;
        }
      }

      if (result.found) {
        output.innerHTML = `
          <span style="color: #00ff88;">✅ GEVONDEN</span>
          <span style="color: #ffffff; font-weight: 700;">"${result.password}"</span>
          <span style="color: #8899bb; font-size: 0.75rem;">[${result.method}]</span>
        `;
      } else {
        output.innerHTML = `
          <span style="color: #ff2d55;">❌ NIET GEVONDEN</span>
          <span style="color: #8899bb; font-size: 0.75rem;">Geen match in deze sessie</span>
        `;
      }
    } catch(error) {
      output.innerHTML = `
        <span style="color: #ff2d55;">❌ CONNECTIE FOUT</span>
        <span style="color: #8899bb; font-size: 0.75rem;">${error.message}</span>
        <span style="color: #667799; font-size: 0.7rem; display: block; margin-top: 4px;">
          Controleer of backend draait op ${API_BASE}
        </span>
      `;
    }
  });
});

// ===== KEYBOARD SHORTCUTS =====
document.addEventListener('keydown', (e) => {
  if (e.key === 'Enter' && e.target.closest('.input-field, textarea')) {
    const btn = e.target.closest('.tab-content')?.querySelector('.crack-btn');
    if (btn) btn.click();
  }
});

console.log('🚀 CRYPTEX v3.0 geladen');
console.log('🔐 Alleen voor geautoriseerd gebruik');