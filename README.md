<div align="center">

<img src="https://capsule-render.vercel.app/api?type=waving&color=c9a84c&height=200&section=header&text=Sumit%20Damor&fontSize=60&fontColor=ffffff&fontAlignY=38&desc=Operations%20%C2%B7%20Fintech%20%C2%B7%20Revenue&descAlignY=58&descSize=18&descColor=f0ede8" width="100%"/>

<p>
  <a href="https://damorsumit2000-lab.github.io/sumit-damor-portfolio/">
    <img src="https://img.shields.io/badge/Portfolio-Live-c9a84c?style=for-the-badge&logo=githubpages&logoColor=white" />
  </a>
  <a href="mailto:sumitrd22@nsb.edu.in">
    <img src="https://img.shields.io/badge/Email-sumitrd22%40nsb.edu.in-c9a84c?style=for-the-badge&logo=gmail&logoColor=white" />
  </a>
  <a href="https://github.com/damorsumit2000-lab">
    <img src="https://img.shields.io/badge/GitHub-damorsumit2000--lab-c9a84c?style=for-the-badge&logo=github&logoColor=white" />
  </a>
</p>

<p>
  <img src="https://img.shields.io/badge/Role-Revenue%20Operations-1a1a24?style=flat-square&labelColor=c9a84c" />
  <img src="https://img.shields.io/badge/Company-Groww%20Invest--Tech-1a1a24?style=flat-square&labelColor=c9a84c" />
  <img src="https://img.shields.io/badge/MBA-National%20School%20of%20Business-1a1a24?style=flat-square&labelColor=c9a84c" />
  <img src="https://img.shields.io/badge/Location-Bangalore%2C%20India-1a1a24?style=flat-square&labelColor=c9a84c" />
</p>

</div>

---

<div align="center">

## ✦ &nbsp; Personal Portfolio Website &nbsp; ✦

*A dark-luxury, recruiter-ready portfolio built with vanilla HTML, CSS and JavaScript —*
*featuring a live AI assistant, particle canvas animations, and a responsive mobile drawer.*

**[🌐 View Live Site](https://damorsumit2000-lab.github.io/sumit-damor-portfolio/)**

</div>

---

## ⚡ Features

| Feature | Description |
|---|---|
| 🤖 **AI Chatbot** | Live assistant powered by **Groq Llama 3.3 70B** with auto-fallback to **Gemini 2.0 Flash** — trained on full CV |
| 🎨 **Dark / Light Mode** | One-click theme toggle with `localStorage` persistence |
| ✨ **Canvas Animation** | 120-particle physics background with mouse attraction, nebula blobs and gold connection lines |
| ⌨️ **Typewriter Hero** | 5 rotating taglines with smooth character-by-character type and delete cycle |
| 📱 **Mobile Drawer** | Animated slide-in navigation drawer with animated hamburger toggle |
| 🔍 **Scroll Reveal** | `IntersectionObserver` staggered fade-up animations on every section |
| 🏷️ **Dynamic AI Badge** | Chat header updates live — shows `Groq · Llama 3.3` or `Gemini 2.0 Flash` based on which API responded |
| ⚡ **Zero Dependencies** | Pure HTML / CSS / JS — no frameworks, no bundlers, no npm |

---

## 🏗️ Tech Stack

<div align="center">

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![Cloudflare Workers](https://img.shields.io/badge/Cloudflare%20Workers-F38020?style=for-the-badge&logo=cloudflare&logoColor=white)
![GitHub Pages](https://img.shields.io/badge/GitHub%20Pages-222222?style=for-the-badge&logo=githubpages&logoColor=white)

**Fonts** — Cormorant Garamond · Inter · JetBrains Mono
**AI APIs** — Groq Cloud (Llama 3.3 70B) · Google Gemini 2.0 Flash

</div>

---

## 🗂️ Page Structure

```
📄 index.html
│
├── 🏠  Hero           — Name, typewriter tagline, stats strip, scroll indicator
├── 🤖  AI Assistant   — Live chatbot with Groq + Gemini dual-API fallback
├── 👤  About          — Bio paragraphs and skills grouped by category
├── 📅  Experience     — Vertical timeline  (Work Experience + Education)
├── 🚀  Projects       — Likhavat (featured), UPI Analysis, MERN App
├── 📬  Contact        — Email, GitHub, phone pill links
└── 🔗  Footer
```

---

## 🤖 AI Chatbot Architecture

The embedded chatbot routes through a **Cloudflare Worker** that manages API keys, CORS, and fallback logic entirely server-side. No credentials ever touch the frontend.

```
User Message  →  Portfolio Frontend
                        │
                        ▼
          Cloudflare Worker  (Edge Function)
                        │
             ┌──────────┴──────────┐
             ▼                     │
      Groq API                     │  429 rate-limit / error
   Llama 3.3 70B                   │
             │                     ▼
             │            Gemini 2.0 Flash
             │                     │
             └──────────┬──────────┘
                        ▼
               Response  →  Frontend
               (badge auto-updates: Groq or Gemini)
```

> `GROQ_API_KEY` and `GEMINI_API_KEY` are stored as **Cloudflare secret environment variables** — never in source code.

---

## 🎨 Design System

| Token | Value | Usage |
|---|---|---|
| `--bg` | `#050508` | Page background |
| `--bg2` | `#0a0a10` | Alternate section backgrounds |
| `--gold` | `#c9a84c` | Primary accent |
| `--gold2` | `#e8c97a` | Highlights and hover states |
| `--text` | `#f0ede8` | Primary body text |
| `--ff-display` | Cormorant Garamond | Hero name, section headings |
| `--ff-body` | Inter | Paragraphs, descriptions |
| `--ff-mono` | JetBrains Mono | Labels, nav links, badges |

> Light mode toggles a `body.light` class that overrides every CSS custom property. No duplication, single source of truth.

---

## 🚀 Projects Showcased

### ✦ 01 — Likhavat · AI Transliteration Engine `Featured`

> Converts English text into phonetic Roman script for **10 Indian languages** using AI.

Supports Hindi, Gujarati, Tamil, Kannada, Telugu, Bengali, Marathi, Punjabi, Malayalam and Odia — with 3 tone modes (Casual · Standard · Formal), a live quota meter, and automatic API failover.

```
Stack: Gemini 2.5 Flash-Lite  →  Groq Llama 3.3 (fallback)
       Cloudflare Workers + KV Storage
       GitHub Pages · 1,000 req/day · Always live
```

[![Live App](https://img.shields.io/badge/Live%20App-Likhavat-c9a84c?style=for-the-badge&logo=githubpages&logoColor=white)](https://damorsumit2000-lab.github.io/english-to-roman-translator/)
[![GitHub](https://img.shields.io/badge/Source%20Code-GitHub-333?style=for-the-badge&logo=github&logoColor=white)](https://github.com/damorsumit2000-lab/english-to-roman-translator)

---

### ✦ 02 — UPI Market Analysis

> Tableau visualizations of major UPI platforms and market share trends across India's Digital India movement *(Feb–Mar 2022)*

`Tableau` &nbsp; `Data Analysis` &nbsp; `Market Research`

---

### ✦ 03 — MERN News Website

> Full-stack news aggregator — ReactJS + ExpressJS + NodeJS deployed on Heroku *(Nov–Dec 2021)*

`ReactJS` &nbsp; `ExpressJS` &nbsp; `NodeJS` &nbsp; `Heroku`

---

## 📅 Work Experience

```
┌──────────────────────────────────────────────────────────────────────┐
│  Groww Invest-Tech Pvt Ltd · Bangalore                               │
│  Order Processing & Revenue Operations Associate                     │
│  July 2024 — Present                                                 │
├──────────────────────────────────────────────────────────────────────┤
│  ▸ End-to-end corporate client management for Groww Cloud            │
│    subscriptions — brokers, companies & proprietary traders          │
│  ▸ SLA-bound execution issue resolution & subscription lifecycle     │
│  ▸ Cross-functional ops with product, engineering & finance          │
│                                                                      │
│  Tools: Groww Cloud · Freshdesk · Jira · Google Sheets · OMS        │
└──────────────────────────────────────────────────────────────────────┘
```

---

## 🎓 Education

```
┌──────────────────────────────────────────────────────────────────────┐
│  MBA — Marketing                                                     │
│  National School of Business · Bangalore · 2022 – 2024              │
│  🏆 Won AAGMAN Marketing Fest (top prize)                            │
│  🏆 Won Recycle Mania product design competition                     │
│  🎯 Led Annual College Fest team end-to-end                          │
├──────────────────────────────────────────────────────────────────────┤
│  BA — Economics                                                      │
│  Indira Gandhi National Open University · Delhi · 2019 – 2022        │
├──────────────────────────────────────────────────────────────────────┤
│  Certificates — Curtin University (Online)                           │
│  Digital Marketing · CRM for Marketers · Project Management          │
└──────────────────────────────────────────────────────────────────────┘
```

---

## 🛠️ Skills

<div align="center">

**Operations**

![Client Management](https://img.shields.io/badge/Client%20Management-1a1a24?style=flat-square&labelColor=c9a84c)
![Revenue Operations](https://img.shields.io/badge/Revenue%20Operations-1a1a24?style=flat-square&labelColor=c9a84c)
![SLA Management](https://img.shields.io/badge/SLA%20Management-1a1a24?style=flat-square&labelColor=c9a84c)
![Subscription Lifecycle](https://img.shields.io/badge/Subscription%20Lifecycle-1a1a24?style=flat-square&labelColor=c9a84c)

**Tools**

![Freshdesk](https://img.shields.io/badge/Freshdesk-26a96b?style=flat-square&logoColor=white)
![Jira](https://img.shields.io/badge/Jira-0052cc?style=flat-square&logo=jira&logoColor=white)
![Tableau](https://img.shields.io/badge/Tableau-E97627?style=flat-square&logo=tableau&logoColor=white)
![Excel](https://img.shields.io/badge/Excel-217346?style=flat-square&logo=microsoftexcel&logoColor=white)
![Google Sheets](https://img.shields.io/badge/Google%20Sheets-34a853?style=flat-square&logo=googlesheets&logoColor=white)

**Business**

![Data Analysis](https://img.shields.io/badge/Data%20Analysis-555?style=flat-square)
![Market Research](https://img.shields.io/badge/Market%20Research-555?style=flat-square)
![Project Management](https://img.shields.io/badge/Project%20Management-555?style=flat-square)
![Customer Retention](https://img.shields.io/badge/Customer%20Retention-555?style=flat-square)
![Critical Thinking](https://img.shields.io/badge/Critical%20Thinking-555?style=flat-square)

</div>

---

## 📂 Source Code

### `index.html` — Full Portfolio

The entire portfolio lives in a single `index.html` file. Key sections:

```html
<!-- NAV — fixed top bar with links + dark/light toggle + mobile hamburger -->
<nav id="mainNav"> ... </nav>

<!-- MOBILE DRAWER — slides in from right on mobile -->
<div class="drawer" id="drawer"> ... </div>

<!-- HERO — full-viewport with typewriter + particle canvas -->
<section id="home"> ... </section>

<!-- AI CHATBOT — Groq + Gemini via Cloudflare Worker -->
<section id="ai-section"> ... </section>

<!-- ABOUT — bio + skill pills -->
<section id="about-section"> ... </section>

<!-- EXPERIENCE TIMELINE — vertical gold line with dot markers -->
<section id="timeline-section"> ... </section>

<!-- PROJECTS — featured card + 2 smaller cards -->
<section id="projects-section"> ... </section>

<!-- CONTACT — large italic email + link pills -->
<section id="contact-section"> ... </section>
```

---

### `chatbot-worker.js` — Cloudflare Worker

Handles all AI logic server-side. Deploy to **Cloudflare Workers** and set two secret environment variables:

| Variable | Description |
|---|---|
| `GROQ_API_KEY` | Your Groq API key from `console.groq.com` |
| `GEMINI_API_KEY` | Your Google AI Studio key from `aistudio.google.com` |

```js
// Request flow
async function handleRequest(request) {
  // 1. Parse user message from POST body
  // 2. Try Groq (llama-3.3-70b-versatile)
  // 3. On 429 / error → fallback to Gemini (gemini-2.0-flash)
  // 4. Return { reply, api } — frontend reads `api` to update badge
}
```

**CORS** — all origins allowed so GitHub Pages can call the worker freely.

---

### Canvas Particle System

```js
class Particle {
  reset()  { /* random position, speed, size, gold/white colour */ }
  update() { /* drift + subtle mouse attraction within 150px   */ }
  draw()   { /* arc fill — gold 15%, white 85%                 */ }
}
// 120 particles + nebula radial gradients + grid lines + connection lines
requestAnimationFrame(drawBg);
```

---

### Theme Toggle

```js
function applyTheme(light) {
  document.body.classList.toggle('light', light);
  // syncs both desktop toggle button AND mobile drawer button
  localStorage.setItem('theme', light ? 'light' : 'dark');
}
```

---

### Mobile Drawer

```js
function openDrawer()  { hamburger + drawer + overlay → add class 'open'; body overflow hidden }
function closeDrawer() { remove 'open' classes; restore scroll }
// Closes on: overlay click, any nav link tap
```

---

## 📬 Contact

<div align="center">

| | |
|:---|:---|
| 📧 **Email** | [sumitrd22@nsb.edu.in](mailto:sumitrd22@nsb.edu.in) |
| 📱 **Phone** | [+91 82001-68197](tel:+918200168197) |
| 🌐 **Portfolio** | [damorsumit2000-lab.github.io/sumit-damor-portfolio](https://damorsumit2000-lab.github.io/sumit-damor-portfolio/) |
| ⚡ **Likhavat** | [damorsumit2000-lab.github.io/english-to-roman-translator](https://damorsumit2000-lab.github.io/english-to-roman-translator/) |

</div>

---

<div align="center">

<img src="https://capsule-render.vercel.app/api?type=waving&color=c9a84c&height=140&section=footer&text=Open%20to%20New%20Opportunities&fontSize=22&fontColor=ffffff&fontAlignY=65" width="100%"/>

*Built with ♥ in Bangalore &nbsp;·&nbsp; © 2025 Sumit Damor*

</div>
