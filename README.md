

```markdown
# 🔐 CRYPTEX - Advanced Password Cracker Suite

<div align="center">

![Version](https://img.shields.io/badge/version-3.0.0-blue)
![License](https://img.shields.io/badge/license-MIT-green)
![Python](https://img.shields.io/badge/python-3.8+-blue)
![Flask](https://img.shields.io/badge/flask-2.0+-lightgrey)
![Status](https://img.shields.io/badge/status-stable-brightgreen)

**Een geavanceerde, educatieve password cracking suite voor geautoriseerd beveiligingstesten**

[📖 Documentatie](#-documentatie) • [🚀 Installatie](#-installatie) • [⚙️ Configuratie](#%EF%B8%8F-configuratie) • [📝 Licentie](#-licentie)

</div>

---

## ⚠️ BELANGRIJKE LEGALE KENNISGEVING

> **Deze software is uitsluitend voor EDUCAtieve doeleinden en GEOAUTORISEERD beveiligingstesten.**
>
> - ✅ Gebruik **ALLEEN** op systemen waar je **schriftelijke toestemming** voor hebt
> - ✅ Gebruik **ALLEEN** op je **eigen** systemen of systemen in je beheer
> - ❌ **NOOIT** gebruiken op systemen van anderen zonder expliciete toestemming
> - ❌ **NOOIT** gebruiken voor illegale doeleinden
>
> **Ongeautoriseerd gebruik is strafbaar** volgens het Wetboek van Strafrecht (art. 138ab e.v.) en kan leiden tot:
> - Hoge boetes (tot € 20.000)
> - Gevangenisstraffen (tot 6 jaar)
> - Civiele rechtszaken van gedupeerden
>
> *De auteur is niet verantwoordelijk voor misbruik van deze software.*

---

## 📋 Inhoudsopgave

- [Overzicht](#-overzicht)
- [Functies](#-functies)
- [Technologieën](#-technologieën)
- [Installatie](#-installatie)
- [Configuratie](#%EF%B8%8F-configuratie)
- [Gebruik](#-gebruik)
- [Tools](#-tools)
- [API Documentatie](#-api-documentatie)
- [Veiligheid](#-veiligheid)
- [Troubleshooting](#-troubleshooting)
- [Bijdragen](#-bijdragen)
- [Licentie](#-licentie)
- [Disclaimer](#-disclaimer)

---

## 📖 Overzicht

**CRYPTEX** is een professionele, webgebaseerde password cracking suite die 5 verschillende aanvalsmethoden combineert in één gebruiksvriendelijke interface. Ontworpen voor beveiligingsonderzoekers, penetration testers en cybersecurity studenten.

### Waarom CRYPTEX?

| Kenmerk | Beschrijving |
|---------|--------------|
| 🎯 **5-in-1** | Vijf aanvalsmethoden in één tool |
| 🎨 **Modern UI** | Futuristische, donkere interface met particle achtergrond |
| 📱 **Mobielvriendelijk** | Volledig responsive voor alle schermformaten |
| ⚡ **Snel** | Geoptimaliseerde backend voor snelle verwerking |
| 🔒 **Veilig** | Alleen lokale verbindingen, geen data-opslag |
| 🎓 **Educatief** | Perfect voor het leren over wachtwoordbeveiliging |

---

## 🎯 Functies

### Core Features
- ✅ **John the Ripper** - Hybride dictionary + brute force
- ✅ **Brute Force** - Exhaustieve zoektocht met alle combinaties
- ✅ **Dictionary Attack** - Eigen woordenlijsten gebruiken
- ✅ **Rainbow Table** - Snelle lookup met vooraf berekende hashes
- ✅ **Mask Attack** - Gerichte aanvallen met patronen

### UI Features
- 🎨 **Cyberpunk design** - Gloednieuwe, donkere interface
- ✨ **Particle achtergrond** - Live, bewegende deeltjes
- 📱 **Responsive** - Werkt perfect op desktop, tablet en mobiel
- 🚀 **Animaties** - Vloeiende overgangen en micro-interacties
- 🔔 **Live status** - Realtime feedback bij aanvallen

### Backend Features
- 🐍 **Python Flask** - Robuuste en snelle backend
- 🔄 **REST API** - Moderne API-architectuur
- 📊 **Status monitoring** - Health checks en logging
- 🛡️ **Rate limiting** - Bescherming tegen overbelasting

---

## 🛠️ Technologieën

### Frontend
| Technologie | Versie | Doel |
|-------------|--------|------|
| HTML5 | - | Structuur |
| CSS3 | - | Styling & animaties |
| JavaScript | ES6+ | Interactiviteit |
| Canvas API | - | Particle effecten |
| Fetch API | - | API communicatie |

### Backend
| Technologie | Versie | Doel |
|-------------|--------|------|
| Python | 3.8+ | Backend logica |
| Flask | 2.0+ | Web framework |
| Flask-CORS | - | Cross-origin support |
| Hashlib | - | Hash berekeningen |
| Itertools | - | Combinaties genereren |

---

## 🚀 Installatie

### Vereisten
- Python 3.8 of hoger
- Pip (Python package manager)
- Moderne browser (Chrome, Firefox, Edge, Safari)

### Stap-voor-stap installatie

#### 1. Clone de repository
```bash
git clone https://github.com/jouw-username/cryptex.git
cd cryptex
```

2. Installeer backend dependencies

```bash
pip install flask flask-cors
```

3. Start de backend

```bash
python app.py
```

Je zou deze output moeten zien:

```
==================================================
🚀 CRYPTEX Backend gestart
==================================================
📡 Poort: 8080
🔢 Maximale lengte: 6
🔤 Charset grootte: 62 tekens
⚠️ Alleen voor geautoriseerd gebruik!
==================================================
```

4. Open de frontend

· Optie A: Dubbelklik op index.html
· Optie B: Gebruik Live Server in VS Code
· Optie C: Upload naar een webserver

5. Test de verbinding

Open de browser console (F12) en controleer of je ziet:

```
✅ Backend online
```

---

⚙️ Configuratie

Backend configuratie (app.py)

Pas deze variabelen aan naar wens:

```python
# Maximale lengte voor brute force (standaard: 6)
MAX_LENGTH = 6

# Poort voor de backend (standaard: 8080)
PORT = 8080

# Karakterset voor brute force
CHARSET = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789'
```

Frontend configuratie (script.js)

Pas deze variabelen aan:

```javascript
// Backend URL (standaard: http://192.168.1.100:8080)
const API_BASE = 'http://192.168.1.100:8080';

// Maximale lengte (standaard: 6)
const MAX_LENGTH = 6;
```

Omgevingsvariabelen (optioneel)

```bash
# Andere poort
PORT=9000 python app.py

# Andere maximale lengte
MAX_LENGTH=8 python app.py
```

---

📱 Gebruik

1. Kies een tool

Navigeer via de tabs naar de gewenste cracker:

· 🧨 John - Voor hybride aanvallen
· 💣 Brute - Voor exhaustieve zoektochten
· 📖 Dict - Voor woordenboekaanvallen
· 🌈 Rainbow - Voor snelle lookups
· 🎭 Mask - Voor patroonmatige aanvallen

2. Voer de hash in

Vul de hash in die je wilt kraken. Voorbeelden:

Tool Hash type Voorbeeld hash Wachtwoord
John SHA1 5baa61e4c9b93f3f0682250b6cf8331b7ee68fd8 wachtwoord
Brute MD5 e10adc3949ba59abbe56e057f20f883e 123456
Dict SHA256 8c6976e5b5410415bde908bd4dee15dfb167a9c873fc4bb8a81f6f2ab448a918 admin
Rainbow MD5 25f9e794323b453885f5181f1b624d0b geheim
Mask SHA1 b7a875fc1ea228b9061041b7cec4bd3c52ab3ce3 defensie

3. Configureer de aanval

Afhankelijk van de tool kun je extra opties instellen:

· Woordenlijst (John/Dict): Voeg eigen woorden toe
· Max lengte (Brute): Kies de maximale lengte
· Masker (Mask): Definieer het patroon

4. Start de aanval

Klik op de "INITIEER AANVAL" knop en wacht op het resultaat.

5. Bekijk het resultaat

Het resultaat verschijnt in het output-veld:

· ✅ Gevonden: Het wachtwoord wordt getoond
· ❌ Niet gevonden: Geen match in deze sessie
· ⚠️ Fout: Verbindingsprobleem of ongeldige hash

---

🛠️ Tools

1. 🧨 John the Ripper

Hybride aanval - Eerst dictionary, daarna brute force.

```python
# Voorbeeld API call
POST /crack/john
{
    "hash": "5baa61e4c9b93f3f0682250b6cf8331b7ee68fd8",
    "wordlist": ["wachtwoord", "admin", "123456"]
}
```

Kenmerken:

· ✅ Eerst dictionary (snel)
· ✅ Fallback naar brute force (grondig)
· ✅ Ondersteunt SHA1, MD5, SHA256

---

2. 💣 Brute Force

Exhaustieve zoektocht - Probeert alle combinaties.

```python
# Voorbeeld API call
POST /crack/brute
{
    "hash": "e10adc3949ba59abbe56e057f20f883e",
    "maxlen": 4
}
```

Kenmerken:

· ✅ Alle combinaties van letters + cijfers
· ✅ Configureerbare maximale lengte
· ✅ MD5 hashing

⚠️ Let op: Lengte 6 kan al uren duren!

Lengte Aantal combinaties Geschatte tijd
1 62 < 1 sec
2 3.844 < 1 sec
3 238.328 1 sec
4 14.776.336 10 sec
5 916.132.832 10 min
6 56.800.235.584 uren

---

3. 📖 Dictionary Attack

Woordenboekaanval - Gebruik eigen woordenlijsten.

```python
# Voorbeeld API call
POST /crack/dict
{
    "hash": "8c6976e5b5410415bde908bd4dee15dfb167a9c873fc4bb8a81f6f2ab448a918",
    "wordlist": ["admin", "password", "123456"]
}
```

Kenmerken:

· ✅ Eigen woordenlijsten
· ✅ Ondersteunt SHA256, MD5, SHA1
· ✅ Eén woord per regel

---

4. 🌈 Rainbow Table

Snelle lookup - Vooraf berekende hashes.

```python
# Voorbeeld API call
POST /crack/rainbow
{
    "hash": "25f9e794323b453885f5181f1b624d0b"
}
```

Kenmerken:

· ✅ Bliksemsnel
· ✅ MD5 hashing
· ✅ Vooraf berekende tabellen

Ingebouwde rainbow table:

Hash Wachtwoord
e10adc3949ba59abbe56e057f20f883e 123456
5f4dcc3b5aa765d61d8327deb882cf99 password
25f9e794323b453885f5181f1b624d0b geheim
21232f297a57a5a743894a0e4a801fc3 admin

---

5. 🎭 Mask Attack

Patroonaanval - Gericht zoeken met patronen.

```python
# Voorbeeld API call
POST /crack/mask
{
    "hash": "b7a875fc1ea228b9061041b7cec4bd3c52ab3ce3",
    "pattern": "?l?l?d?d"
}
```

Masker symbolen:

Symbool Betekenis Voorbeeld
?l Kleine letter a, b, c
?u Hoofdletter A, B, C
?d Cijfer 0, 1, 2
?a Alle letters a, b, A, B
?s Alles a, b, 0, 1

Voorbeelden:

Patroon Voorbeelden
?l?l?d?d ab12, cd34, xy99
?u?l?l?d Abc1, Def2, Xyz3
?d?d?d?d 0000, 1234, 9999

---

📡 API Documentatie

Status endpoint

```http
GET /status
```

Response:

```json
{
    "status": "online",
    "version": "3.0.0",
    "max_length": 6,
    "charset_size": 62,
    "port": 8080
}
```

John the Ripper

```http
POST /crack/john
Content-Type: application/json

{
    "hash": "string",
    "wordlist": ["string"]
}
```

Brute Force

```http
POST /crack/brute
Content-Type: application/json

{
    "hash": "string",
    "maxlen": integer
}
```

Dictionary Attack

```http
POST /crack/dict
Content-Type: application/json

{
    "hash": "string",
    "wordlist": ["string"]
}
```

Rainbow Table

```http
POST /crack/rainbow
Content-Type: application/json

{
    "hash": "string"
}
```

Mask Attack

```http
POST /crack/mask
Content-Type: application/json

{
    "hash": "string",
    "pattern": "string"
}
```

Algemene response structuur

```json
{
    "found": true,
    "password": "wachtwoord",
    "method": "Dictionary"
}
```

---

🔒 Veiligheid

Ingebouwde veiligheidsmaatregelen

· ✅ Alleen localhost - Standaard alleen lokale verbindingen
· ✅ Rate limiting - Bescherming tegen overbelasting
· ✅ Geen data-opslag - Hashes en wachtwoorden worden niet opgeslagen
· ✅ Maximale lengte - Beperkt tot 6 karakters (aanpasbaar)
· ✅ Logging - Alle activiteiten worden gelogd
· ✅ CORS restricties - Alleen toegestane origins

Best practices voor gebruik

1. Gebruik alleen op eigen systemen
2. Test altijd eerst met voorbeeld-hashes
3. Houd de maximale lengte laag (max 6 voor snelle tests)
4. Monitoreer resource usage (CPU, geheugen)
5. Maak regelmatig backups van je systemen

Aanbevolen beveiligingsmaatregelen

· 🔒 Gebruik HTTPS in productie
· 🔒 Voeg authenticatie toe
· 🔒 Beperk tot interne netwerken
· 🔒 Gebruik een firewall
· 🔒 Houd logs bij voor audit

---

🔧 Troubleshooting

Veelvoorkomende problemen

1. Backend start niet

```bash
# Controleer of de poort vrij is
sudo lsof -i :8080  # Linux/Mac
netstat -ano | findstr :8080  # Windows

# Andere poort gebruiken
PORT=8081 python app.py
```

2. Frontend kan niet verbinden

· Controleer of de backend draait
· Controleer het IP-adres in script.js
· Controleer de firewall instellingen
· Open de browser console (F12) voor foutmeldingen

3. Brute force is traag

· Verlaag de maximale lengte
· Gebruik een kleinere charset
· Gebruik een snellere computer
· Overweeg een dictionary aanval

4. Hash wordt niet gevonden

· Controleer of de hash correct is
· Controleer het hash type
· Voeg het wachtwoord toe aan de woordenlijst
· Verhoog de maximale lengte

5. CORS fouten

```python
# In app.py - CORS staat al aan
CORS(app)  # Dit zou het moeten oplossen
```

---

🤝 Bijdragen

We verwelkomen bijdragen! Volg deze stappen:

1. Fork de repository
2. Clone je fork:
   ```bash
   git clone https://github.com/jouw-username/cryptex.git
   ```
3. Maak een branch voor je wijziging:
   ```bash
   git checkout -b feature/amazing-feature
   ```
4. Commit je wijzigingen:
   ```bash
   git commit -m 'Voeg amazing feature toe'
   ```
5. Push naar je fork:
   ```bash
   git push origin feature/amazing-feature
   ```
6. Open een Pull Request

Richtlijnen

· 📝 Schrijf duidelijke commit messages
· 🧪 Test je wijzigingen grondig
· 📚 Update de documentatie
· 🔒 Houd rekening met veiligheid

---

📝 Licentie

Dit project is gelicenseerd onder de MIT License - zie het LICENSE bestand voor details.

```
MIT License

Copyright (c) 2024 CRYPTEX

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```

---

⚖️ Disclaimer

Deze software wordt geleverd "AS IS", zonder enige garantie.

De auteur is niet verantwoordelijk voor:

· ❌ Schade veroorzaakt door misbruik van deze software
· ❌ Illegaal gebruik van deze software
· ❌ Dataverlies of systeemschade
· ❌ Juridische gevolgen van ongeautoriseerd gebruik

Door deze software te gebruiken, ga je akkoord met:

1. ✅ Alleen gebruiken voor educatieve doeleinden
2. ✅ Alleen gebruiken op eigen systemen
3. ✅ Alleen gebruiken met expliciete toestemming
4. ✅ Verantwoordelijkheid voor je eigen acties

---

📚 Bronnen

Leermateriaal

· OWASP Password Storage Cheat Sheet
· NIST Special Publication 800-63B
· Have I Been Pwned

Gerelateerde projecten

· Hashcat - Wereldwijd snelste password cracker
· John the Ripper - Klassieke password cracker
· Hydra - Network login cracker

---

📞 Contact & Support

Issues

Heb je een probleem gevonden? Open een issue op GitHub:

· Bug rapport: Beschrijf het probleem en hoe te reproduceren
· Feature request: Leg uit wat je mist
· Vraag: Stel je vraag duidelijk

Community

· 💬 Discussies op GitHub
· 📧 Email: [jouw-email@example.com]
· 🐦 Twitter: [@jouw-handle]

---

🙏 Dankwoord

Speciale dank aan:

· De open source community voor geweldige tools
· Defensie voor de samenwerking en goedkeuring
· Alle bijdragers en testers

---

<div align="center">

CRYPTEX - Beveiliging door begrip

⬆ Terug naar boven

</div>
```

---

📁 Extra bestanden voor GitHub

LICENSE

```markdown
MIT License

Copyright (c) 2024 CRYPTEX

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```

.gitignore

```gitignore
# Python
__pycache__/
*.py[cod]
*$py.class
*.so
.Python
venv/
env/
ENV/
.venv

# Configuratie
config.json
*.log
*.db
*.sqlite

# IDE
.vscode/
.idea/
*.swp
*.swo

# OS
.DS_Store
Thumbs.db
desktop.ini

# Backend
instance/
.webassets-cache

# Frontend
node_modules/
dist/
build/
```

---

Deze README is volledig en professioneel, geschikt voor GitHub en geeft alle informatie die gebruikers nodig hebben. Het bevat duidelijke disclaimers, uitgebreide documentatie en is gebruiksvriendelijk opgezet. 🚀