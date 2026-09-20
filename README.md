# Mysuru Macchegalu (ಮೈಸೂರು ಮಚ್ಚೆಗಳು) — "namma mysuru, namma kartavya"

> HackMysuru 1.0 · Phase 1 · Civic Governance & Clean Mysuru  
> Team Nextora (`HM26-21B9`)

| 📎 Submission links | 📋 Templates | 🏗️ Architecture | 🛡️ Hard constraints | ⚙️ Setup | 🤖 AI usage | ⚠️ Limitations |
|---|---|---|---|---|---|---|
| [resource.md](./resource.md) | [resource-templates/](./resource-templates/) | [docs/architecture.md](./docs/architecture.md) | [docs/constraints.md](./docs/constraints.md) | [docs/setup.md](./docs/setup.md) | [ai.md](./ai.md) | [docs/limitations.md](./docs/limitations.md) |

---

## 1. Problem Understanding

**Chosen sub-problem:** Routing, Transparency & Accountability under Greater Mysuru Expansion

- **The gap we saw:** Under the new Greater Mysuru expansion policy, hundreds of newly added layouts (Bogadi, Hootagalli, Dattagalli, Ilavala) fall into jurisdictional cracks between MCC, Gram Panchayats, and MUDA. Citizens register complaints, have no idea whom to contact (MLA, MP, or Ward Engineer), and grievances languish for weeks—becoming stale and completely ignored (> 20 days old).
- **Why it matters:** Severe safety hazards (open storm drains, fatal outer ring road dark spots, drinking water contamination) persist unattended, eroding public trust in civic administration.
- **Why we chose this over the others:** Accountability is the root bottleneck of urban governance. Even if an issue is detected, without automated representative allocation, mandatory field officer contact dispatch, and critical aging alerts, it never gets resolved.
- **What "solved" looks like for us:** A citizen enters their Ward number once; the system automatically allots the MP, MLA, and Ward AEE with direct phone numbers. Any complaint older than 20 days triggers high-priority critical alerts in municipal cockpits, while civic influencers can crowd-amplify neglected emergencies.

---

## 2. Target Users & Mysuru Context

| User | Their situation | What they need from us |
|---|---|---|
| **Greater Mysuru Resident** | Confused by ward boundaries and overlapping jurisdictions; doesn't know who represents their area. | Register issue once, auto-discover MLA/MP & Ward Engineer, get direct officer phone and completion deadline. |
| **Ward Engineer / AEE** | Overwhelmed with incoming unstructured issues with no clear deadline prioritization. | Action queue prioritizing critical stale (> 20 days) grievances, dispatch field workers with phone and deadline. |
| **Civic Influencers & Activists** | High public reach on social media, but no official platform to formalize civic pressure. | **"Influencer's Pick"** spotlighting neglected issues with community voting to force institutional action. |
| **Elected Representatives (MLA / MP)** | Lack constituent-level visibility into unaddressed grievances crossing 20+ days. | Constituency-wide KPI dashboard tracking resolution rates and aging issues in real time. |

**Local context we designed for:** Full Kannada (`ಕನ್ನಡ`) & English bilingual support, Mysuru heritage aesthetic (Palace Amber & Royal Indigo), zero-dependency client architecture for 100% offline & low-bandwidth resilience.

---

## 3. Solution Overview

**Mysuru Macchegalu** (*"namma mysuru, namma kartavya"*) is a dual-portal civic transparency web application designed for Greater Mysuru:

**Core flow:**
1. **Citizen Registers:** Selects Ward Number; the system automatically identifies the constituency and maps the **MP (Yaduveer Wadiyar)**, **MLA (T.S. Srivatsa / K. Harish Gowda / Tanveer Sait / G.T. Devegowda)**, and **Ward AEE** with contact phone numbers.
2. **Citizen Files Grievance:** Specifies location, category (Roads, Sewage, Water, Lights, Waste), and urgency.
3. **Stale Complaint Detection:** Any grievance that crosses **20 days** without resolution is automatically tagged with a **pulsing red warning alert** (`Critical: Stale > 20 Days`).
4. **Official Cockpit:** MCC officers and MLA secretariats view constituency metrics, filter stale grievances, and allot an on-ground officer with **Mandatory Name, Phone Number, and Completion Deadline Date**.
5. **Influencer's Pick:** Activists spotlight critical emergencies with crowd upvoting to escalate public accountability.

---

## 4. Architecture

A zero-dependency, high-performance web architecture running modern semantic HTML5, Tailwind CSS, Lucide Icons, and client-side reactive state management with LocalStorage persistence.

➡️ Full architectural diagrams, components, data model and APIs: **[docs/architecture.md](./docs/architecture.md)**

---

## 5. Tech Stack & AI Usage

* **Frontend:** Semantic HTML5, Tailwind CSS, Lucide Icons, Google Fonts (Plus Jakarta Sans + Noto Sans Kannada)
* **Data & Localization Engine:** Modular JavaScript (`data.js`, `i18n.js`, `app.js`) with client-side state caching
* **Hosting:** 100% compatible with GitHub Pages, Vercel, or local double-click execution

**AI tools used in development:** Antigravity (Gemini 3.8 Flash) for architecture design, bilingual Kannada localization synthesis, and rapid prototyping.

➡️ Full disclosure: **[ai.md](./ai.md)**

---

## 6. Setup & Run

### Instant Local Run (No Installation Required)
Simply double-click `index.html` in your browser!

### Development
```bash
git clone https://github.com/iammysorechandan-maker/HM26-21B9-Nextora.git
cd HM26-21B9-Nextora
# Open index.html in any browser or serve via npx serve
```

➡️ Prerequisites, seed data, and offline testing: **[docs/setup.md](./docs/setup.md)**

---

## 7. Submission Artifacts & Links

* 📎 Submission Index: **[resource.md](./resource.md)**
* 🤖 AI Usage Report: **[ai.md](./ai.md)**
* 🏗️ Architecture: **[docs/architecture.md](./docs/architecture.md)**
* 🛡️ Hard Constraints: **[docs/constraints.md](./docs/constraints.md)**
* ⚙️ Setup & Testing: **[docs/setup.md](./docs/setup.md)**
* ⚠️ Limitations & Roadmap: **[docs/limitations.md](./docs/limitations.md)**

---

## Team Nextora

* **Team Lead:** Chandan (`@iammysorechandan-maker`)
* **Project:** Mysuru Macchegalu (ಮೈಸೂರು ಮಚ್ಚೆಗಳು)
