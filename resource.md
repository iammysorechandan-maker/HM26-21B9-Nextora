# HackMysuru 1.0 — Phase 1 Submission Index

> **This is the landing file for your submission.** Reviewers open this file first.
> Every evaluation artifact is uploaded to **Google Drive** and linked below. No files in the repo, no other platforms.
> Freeze: **20 September 2026, 23:59 IST.** Anything not linked here before the freeze does not exist for judging.

---

## 1. Team Details

| Field | Value |
|---|---|
| Team ID (from dashboard) | `HM26-21B9` |
| Team Name | `Nextora` |
| College(s) | `<Your College / Institution Name>` |
| Team Leader | `Chandan` · `iammysorechandan@gmail.com` · `+91 98450 44321` |
| Repository | `https://github.com/iammysorechandan-maker/HM26-21B9-Nextora` |

| # | Member | Program & Year | GitHub Handle | Primary Role |
|---|---|---|---|---|
| 1 | `Chandan` (Lead) | `B.E. CSE` | `@iammysorechandan-maker` | Full Stack & System Architecture |
| 2 | `<Member 2 Name>` | `<Program, Year>` | `@<handle>` | `<Frontend / UI / Testing>` |
| 3 | `<Member 3 Name>` | `<Program, Year>` | `@<handle>` | `<Data & Localization>` |
| 4 | `<Member 4 Name>` | `<Program, Year>` | `@<handle>` | `<Research & Documentation>` |

---

## 2. What We Built (one-liner)

**Sub-problem:** `Follow-through, Routing & Public Accountability under Greater Mysuru Expansion`

**In one sentence:** `Mysuru Macchegalu ("namma mysuru, namma kartavya") is a bilingual civic accountability web platform that automatically allots designated MLAs, MPs, and Ward AEEs upon ward selection, triggers pulsing critical alerts for neglected grievances older than 20 days, and empowers community action through "Influencer's Pick" crowd upvoting.`

---

## 3. Repository Documents

| Document | What it covers |
|---|---|
| [README.md](./README.md) | Problem, users, solution overview, links to everything below |
| [ai.md](./ai.md) | AI tools used in development and AI/ML inside the product |
| [docs/architecture.md](./docs/architecture.md) | Diagram, components, data model, APIs, tech stack |
| [docs/constraints.md](./docs/constraints.md) | How we handle the five hard constraints |
| [docs/setup.md](./docs/setup.md) | Local setup, seed data, offline testing |
| [docs/limitations.md](./docs/limitations.md) | Known gaps, edge cases, scaling roadmap |
| [resource-templates/](./resource-templates/) | Templates & guides for the video, decision log, and presentation |

---

## 4. Submission Artifacts (Google Drive)

| # | Artifact | Google Drive Link | File Name | SHA-256 (first 16 chars) |
|---|---|---|---|---|
| 1 | [Pitch + Code Walkthrough Video](./resource-templates/video-guide.md) (≤ 10 min, MP4) | `<PASTE_YOUR_GOOGLE_DRIVE_VIDEO_LINK_HERE>` | `HM26-21B9_video.mp4` | `<first_16_chars_sha256>` |
| 2 | [Decision Log](./resource-templates/decision-log-template.md) (1 page, PDF) | `<PASTE_YOUR_GOOGLE_DRIVE_DECISION_LOG_LINK_HERE>` | `HM26-21B9_decision-log.pdf` | `<first_16_chars_sha256>` |
| 3 | [Presentation](./resource-templates/presentation-template.md) (≤ 10 slides, PDF) | `<PASTE_YOUR_GOOGLE_DRIVE_SLIDES_LINK_HERE>` | `HM26-21B9_presentation.pdf` | `<first_16_chars_sha256>` |

> **Note for Drive Links:** Share each file as: General access → *"Anyone with the link"* → *Viewer*. Test each link in an incognito window!  
> To calculate SHA-256 on Windows PowerShell: `certutil -hashfile <file.mp4> SHA256` (copy the first 16 characters).

### Video Chapters

| Timestamp | Section |
|---|---|
| `00:00` | Part 1: Problem & Greater Mysuru Expansion Jurisdictional Gaps |
| `00:40` | Part 1: Live Demo: Citizen Registration & Auto-Allotment of MLA, MP & Ward AEE |
| `01:50` | Part 1: Bad-input handling (Missing fields, invalid ward validation) |
| `02:30` | Part 1: Offline mode test (Zero-dependency local persistence & LocalStorage) |
| `03:00` | Part 2: Architecture overview (Dual Portal: Citizen vs MCC Officials Cockpit) |
| `04:30` | Part 2: Data model & Mysuru Constituencies Mapping (KR, Chamaraja, NR, Chamundeshwari) |
| `05:30` | Part 2: Key code walkthrough: Stale Grievance Alert Engine (> 20 Days) & Officer Dispatch Modal |
| `07:30` | Part 2: Decisions & trade-offs (Zero-server client resilience vs central DB) |
| `08:30` | Part 2: Scaling & limitations (Integration with MCC ERP & SMS gateways) |
| `09:15` | Part 2: AI usage & Kannada Bilingual localization synthesis (see [ai.md](./ai.md)) |

---

## 5. Live MVP

| Field | Value |
|---|---|
| Live URL | `https://iammysorechandan-maker.github.io/HM26-21B9-Nextora/` |
| Platform | `Web Application (Responsive Mobile & Desktop / PWA-ready)` |
| Test login | Citizen: `Instant access (Default: Darshan Gowda, Ward 45)` · Officials: `Click "Officials Portal" in top navigation bar` |
| Sample data loaded? | `Yes — Realistic Mysuru datasets across Krishnaraja, Chamaraja, Narasimharaja, Chamundeshwari with >20-day critical stale complaints & Influencer Picks` |
| How to test offline mode | `Disconnect network or enable Chrome DevTools "Offline". File a complaint or assign an officer—all state updates seamlessly in LocalStorage.` |
| If the live link is down | Follow [docs/setup.md](./docs/setup.md) or double-click `index.html` locally |

---

## 6. Quick Reviewer Path (≤ 3 minutes)

1. **Open the live URL:** [`https://iammysorechandan-maker.github.io/HM26-21B9-Nextora/`](https://iammysorechandan-maker.github.io/HM26-21B9-Nextora/)
2. **Observe Auto-Allotment:** View your designated MP (Yaduveer Wadiyar), MLA (T.S. Srivatsa), and Ward AEE with official contact phone numbers. Click *"Update Ward / Profile"* to switch to Ward 56 (Bogadi) and watch it dynamically remap to MLA G.T. Devegowda.
3. **Check Influencer's Pick:** Scroll to *"Influencer's Pick"* and click **"Upvote Issue"** on a spotlighted civic emergency. Watch the community vote counter instantly update.
4. **Switch to Officials Portal:** Click **"Officials Portal"** in the top navigation bar. Notice the real-time KPI metrics and the pulsing red indicator on **"Stale (> 20 Days)"**.
5. **Dispatch Field Officer:** In the action queue, click **"Assign / Update Officer"** on any grievance. Enter officer name, contact phone number, and completion deadline date, then click *"Confirm Allotment"*.
6. **Bilingual Experience:** Click **"ಕನ್ನಡ"** in the top-right header to test the complete Kannada localization.

---

## 7. Declaration

- [x] All Drive links open in an incognito window with **Viewer** access (no "Request access").
- [x] The video is one continuous recording, ≤ 10 minutes, Part 1 then Part 2.
- [x] The decision log is one page and written by us in our own words.
- [x] All AI tools used (development and in-product) are disclosed in [`ai.md`](./ai.md).
- [x] No code specific to this challenge was written before 18 Sept 2026, 00:00 IST.
- [x] We will not modify or replace any linked file after 20 Sept 2026, 23:59 IST.

**Submitted by:** `Chandan` · **Date/Time (IST):** `20-09-2026 21:40`
