# Third Spaces · तृतीयांगण

> **"In a city that asks you to spend to exist, here are places where you can simply be."**

A contemplative web directory and discovery engine for zero-cost and low-cost urban sanctuaries—botanical canopies, vintage reading rooms, terraced stepwells, and community courtyards.

---

## 🏛️ The Concept

Coined by urban sociologist **Ray Oldenburg** (*The Great Good Place*, 1989), the **Third Place** represents the public realm:
* **First Place**: Home (Private)
* **Second Place**: Work / College (Productive)
* **Third Place**: Community & Sanctuaries (Public connection, stillness, and conversation)

In modern cities, almost all social spaces are heavily commercialized. **Third Spaces** reclaims the civic sphere by highlighting places where anyone can spend peaceful, reflective time without having to pay for coffee, tickets, or table time.

---

## ✨ Features

- **Mood & Intent Engine**: Filter by what you actually need:
  - 📖 *Solo Reading*
  - 💭 *Quiet Reflection*
  - 💬 *Slow Conversation*
  - 🎨 *Creative Flow*
  - 🧘 *Digital Detox*
- **Transparent Cost Tiers**: Free (`₹0`) • Nominal (`< ₹50`) • Budget-Friendly (`< ₹100`).
- **Mindful Micro-Reflections**: Every location includes a thought prompt to help visitors disconnect from screens and engage with the environment.
- **Practical Public Realities**: Metro and bus walking proximity, restroom availability, drinking water access, shade canopy, and solo/women safety ratings.
- **Native Ambient Soundscape**: A built-in brownian noise synthesizer powered by the browser's Web Audio API to create a calming atmosphere.
- **Serendipity Roulette ("Surprise Me")**: An interactive breathing animation that picks a sanctuary tailored for your current state of mind.
- **Community Submissions**: An open form for citizens, students, and travelers to submit their local hidden havens.
- **The Sanctuary Code**: Principles of leave-no-trace, silence, and civic preservation.

---

## 🛠️ Tech Stack

- **Framework**: [Next.js 15 (App Router)](https://nextjs.org/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Audio Engine**: Web Audio API (native, zero external audio assets)

---

## 🚀 Getting Started

### Prerequisites
Make sure you have Node.js (v18+) installed.

### Installation

1. Clone the repository:
```bash
git clone https://github.com/YOUR_USERNAME/third-spaces.git
cd third-spaces
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 🗺️ Roadmap & Future Scope

- [ ] Supabase PostgreSQL database integration with PostGIS spatial radius queries (e.g. *Find havens within 5km*).
- [ ] Muted monochrome map view with Leaflet and CartoDB Positron tiles.
- [ ] Offline PWA (Progressive Web App) support for field exploration without cellular data.
- [ ] Community verification and voting system.

---

## 📜 License
MIT License. Built for mindful exploration and public good.
