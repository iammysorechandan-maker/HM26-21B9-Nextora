# AI Usage Disclosure

[← Back to README](./README.md)

> AI tools are **100% permitted** at HackMysuru 1.0. Disclosing them is **mandatory**.
> Using AI never costs you points. Not being able to explain code you submitted does.
> Reviewers check this file against your commit history and the AI segment of your video.

---

## Summary

| Question | Answer |
|---|---|
| Did we use AI tools during development? | **Yes** |
| Does our product use AI/ML at runtime? | **No** (Zero-dependency client-side rules engine & LocalStorage persistence) |
| Roughly how much of the code was AI-assisted? | **~50% of boilerplate UI scaffolding & Kannada dictionary synthesis, 0% of Mysuru civic mapping logic** |
| Can every team member explain the AI-assisted code? | **Yes** |

---

## 1. AI Tools Used During Development

| Tool | Model / plan | Used by | What we used it for |
|---|---|---|---|
| **Google Antigravity / Gemini** | Gemini 3.8 Flash | `@iammysorechandan-maker` | Scaffolding semantic HTML/Tailwind templates, building the Kannada i18n translation dictionary, Git workflow automation |
| **ChatGPT** | GPT-4o, free | Team Nextora | Validating ward boundary datasets, checking Karnataka Municipal Corporation ward hierarchies |

---

## 2. Where AI Helped in the Codebase

| Area / file | Level of AI help | What a human did |
|---|---|---|
| `index.html` & `css/styles.css` | **High:** Scaffolded Tailwind layout & responsive navigation | Realigned UI for Mysore royal amber heritage aesthetic, refined mobile drawer behavior |
| `js/i18n.js` | **Medium:** Synthesized English-Kannada civic terminology | Verified dialect accuracy (e.g. *ಸಹಾಯಕ ಕಾರ್ಯಪಾಲಕ ಅಭಿಯಂತರರು*, *ನಮ್ಮ ಮೈಸೂರು ನಮ್ಮ ಕರ್ತವ್ಯ*) |
| `js/data.js` | **Low:** Initial JSON formatting | Hand-verified real Mysuru MLAs (T.S. Srivatsa, Harish Gowda, Tanveer Sait, G.T. Devegowda), MP Yaduveer Wadiyar, and ward numbers |
| `js/app.js` | **Medium:** Modal controllers & LocalStorage helper functions | Structured the >20-day critical aging logic, officer dispatch validation, and influencer upvoting |

---

## 3. AI Inside the Product (runtime)

*Our product uses zero runtime AI model calls or external LLM APIs.*
* **Rationale:** A civic emergency portal in Greater Mysuru must function with 100% deterministic reliability under zero connectivity, patchy 4G networks, and zero cloud API failure risks. Routing, aging calculations (> 20 days), and representative mapping use a local deterministic lookup engine.

---

## 4. Key Prompts

| # | Prompt (short) | What we kept | What we changed or rejected |
|---|---|---|---|
| 1 | *"Design a bilingual English and Kannada civic complaint dashboard for Greater Mysuru with dark/light mode"* | Grid layout, Tailwind color palette | Replaced generic government terminology with authentic Mysuru municipal authorities (MCC, AEE, Ward Engineers) |
| 2 | *"Create a deterministic ward-to-constituency allocation engine for Krishnaraja, Chamaraja, NR, and Chamundeshwari"* | Data schema structure | Manually verified ward-to-MLA mappings and real phone numbers |

---

## 5. How We Verified AI Output

- Tested every Kannada string against native speakers to ensure cultural nuance and formal civic tone.
- Verified that all ward numbers (1 to 65) match actual MCC ward divisions.
- Ensured zero third-party dependencies are required so that running the website does not break if CDN or APIs fail.

---

## 6. What We Deliberately Did *Not* Use AI For

- **Mysuru Administrative Data:** Ground-truth MLA, MP, and Ward AEE phone numbers and office locations were verified manually.
- **Decision Log & Architecture Rationale:** Formulated directly based on Greater Mysuru expansion pain points.

---

**Declaration:** We confirm this disclosure is complete, and every team member can explain the code listed above.  
**Signed:** `Chandan` on behalf of `Nextora` · `20-09-2026`
