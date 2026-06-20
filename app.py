from flask import Flask, request, jsonify
from flask_cors import CORS
import hashlib
import itertools
import string

app = Flask(__name__)
CORS(app)

# ===== JOHN THE RIPPER =====
@app.route('/crack/john', methods=['POST'])
def john_crack():
    data = request.json
    hash_val = data.get('hash', '').strip()
    wordlist = data.get('wordlist', [])
    
    for word in wordlist:
        if (hashlib.sha1(word.encode()).hexdigest() == hash_val or
            hashlib.md5(word.encode()).hexdigest() == hash_val or
            hashlib.sha256(word.encode()).hexdigest() == hash_val):
            return jsonify({'found': True, 'password': word, 'method': 'John (dictionary)'})
    
    chars = string.ascii_lowercase + string.digits
    for length in range(1, 5):
        for combo in itertools.product(chars, repeat=length):
            word = ''.join(combo)
            if (hashlib.sha1(word.encode()).hexdigest() == hash_val or
                hashlib.md5(word.encode()).hexdigest() == hash_val):
                return jsonify({'found': True, 'password': word, 'method': 'John (brute force)'})
    
    return jsonify({'found': False})

# ===== BRUTE FORCE =====
@app.route('/crack/brute', methods=['POST'])
def brute_crack():
    data = request.json
    hash_val = data.get('hash', '').strip()
    max_len = int(data.get('maxlen', 4))
    
    chars = string.ascii_lowercase + string.digits
    for length in range(1, max_len + 1):
        for combo in itertools.product(chars, repeat=length):
            word = ''.join(combo)
            if hashlib.md5(word.encode()).hexdigest() == hash_val:
                return jsonify({'found': True, 'password': word, 'method': f'Brute force (lengte {length})'})
    
    return jsonify({'found': False})

# ===== DICTIONARY ATTACK =====
@app.route('/crack/dict', methods=['POST'])
def dict_crack():
    data = request.json
    hash_val = data.get('hash', '').strip()
    wordlist = data.get('wordlist', [])
    
    for word in wordlist:
        if (hashlib.sha256(word.encode()).hexdigest() == hash_val or
            hashlib.md5(word.encode()).hexdigest() == hash_val or
            hashlib.sha1(word.encode()).hexdigest() == hash_val):
            return jsonify({'found': True, 'password': word, 'method': 'Dictionary'})
    
    return jsonify({'found': False})

# ===== RAINBOW TABLE =====
@app.route('/crack/rainbow', methods=['POST'])
def rainbow_crack():
    data = request.json
    hash_val = data.get('hash', '').strip()
    
    rainbow_table = {
        'e10adc3949ba59abbe56e057f20f883e': '123456',
        '5f4dcc3b5aa765d61d8327deb882cf99': 'password',
        '25f9e794323b453885f5181f1b624d0b': 'geheim',
        '21232f297a57a5a743894a0e4a801fc3': 'admin',
        '5baa61e4c9b93f3f0682250b6cf8331b7ee68fd8': 'wachtwoord',
        '8c6976e5b5410415bde908bd4dee15dfb167a9c873fc4bb8a81f6f2ab448a918': 'admin',
    }
    
    if hash_val in rainbow_table:
        return jsonify({'found': True, 'password': rainbow_table[hash_val], 'method': 'Rainbow table'})
    
    return jsonify({'found': False})

# ===== MASK ATTACK =====
@app.route('/crack/mask', methods=['POST'])
def mask_crack():
    data = request.json
    hash_val = data.get('hash', '').strip()
    pattern = data.get('pattern', '')
    
    pools = []
    i = 0
    while i < len(pattern):
        if pattern[i] == '?' and i + 1 < len(pattern):
            if pattern[i+1] == 'l':
                pools.append(string.ascii_lowercase)
            elif pattern[i+1] == 'd':
                pools.append(string.digits)
            elif pattern[i+1] == 'u':
                pools.append(string.ascii_uppercase)
            else:
                pools.append(pattern[i+1])
            i += 2
        else:
            pools.append(pattern[i])
            i += 1
    
    def generate_combinations(pools, index=0, current=''):
        if index == len(pools):
            if (hashlib.sha1(current.encode()).hexdigest() == hash_val or
                hashlib.md5(current.encode()).hexdigest() == hash_val or
                hashlib.sha256(current.encode()).hexdigest() == hash_val):
                return current
            return None
        
        for char in pools[index]:
            result = generate_combinations(pools, index + 1, current + char)
            if result:
                return result
        return None
    
    result = generate_combinations(pools)
    if result:
        return jsonify({'found': True, 'password': result, 'method': f'Mask attack ({pattern})'})
    
    return jsonify({'found': False})

if __name__ == '__main__':
    print("🚀 CRYPTEX Backend gestart op http://localhost:5000")
    print("⚠️ Alleen voor geautoriseerd gebruik!")
    app.run(debug=True, host='0.0.0.0', port=5000)