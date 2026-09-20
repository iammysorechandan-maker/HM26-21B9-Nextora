# Mysuru Macchegalu (ಮೈಸೂರು ಮಚ್ಚೆಗಳು)
> *"namma mysuru, namma kartavya"* (ನಮ್ಮ ಮೈಸೂರು, ನಮ್ಮ ಕರ್ತವ್ಯ)

A modern, citizen-centric civic governance and accountability web application built for Mysuru under the Greater Mysuru Expansion Policy.

---

## 🌟 Key Features

1. **Dual-Interface System:**
   - **Citizen Portal:** Report civic issues, automatically discover designated elected representatives, track allotted field officers, and vote on community priorities.
   - **Officials Portal:** Dedicated operational cockpit for Mysuru City Corporation (MCC) Commissioners, Ward Engineers, and MLA/MP Secretariats.

2. **Smart Auto-Allotment of Representatives:**
   - When a citizen selects their **Ward Number**, the platform instantly and automatically maps and displays:
     - **Member of Parliament (MP):** Yaduveer Krishnadatta Chamaraja Wadiyar
     - **Member of Legislative Assembly (MLA):** Auto-mapped by constituency (Krishnaraja: T.S. Srivatsa, Chamaraja: K. Harish Gowda, Narasimharaja: Tanveer Sait, Chamundeshwari: G.T. Devegowda)
     - **Ward Assistant Executive Engineer (AEE):** Ward engineer's direct official name and phone number.

3. **Critical Stale Complaint Alert (> 20 Days):**
   - Built specifically to tackle the issue of ignored grievances under Greater Mysuru expansion.
   - Any unresolved grievance that has passed **20 days** is highlighted with a **pulsing red alert badge** (`Critical: Stale > 20 Days`), elevating urgency in both the Citizen timeline and the Official dashboard.

4. **Officer Allotment & Full Transparency:**
   - Officials can allot on-ground officers with mandatory fields:
     - **Officer Name**
     - **Official Mobile Phone Number**
     - **Allotted Target Completion Deadline Date**
     - **Department / Internal Notes**
   - Citizens can view the allotted officer's details in real-time and call them directly with one click.

5. **"Influencer's Pick" (ಪ್ರಭಾವಿಗಳ ಆಯ್ಕೆ) Community Collaboration:**
   - Mysuru civic influencers, activists, and youth creators spotlight critical neglected issues (such as outer ring road danger zones, heritage building restoration, or lake pollution).
   - Citizens can **upvote** and amplify issues to drive municipal action.

6. **Full Kannada & English Bilingual Localization (i18n):**
   - 1-click toggle between English and Kannada (ಕನ್ನಡ) across every heading, button, status badge, and input form.

7. **Clean, Minimal UI with Dark & Light Mode:**
   - Designed with Mysuru royal heritage palette (Palace Amber & Royal Indigo) with smooth theme transitions.

---

## 🚀 How to Run Locally

You don't need to install any heavy packages or build tools! The application is zero-dependency.

1. Navigate to this project folder:
   ```
   C:\Users\iammy\.gemini\antigravity\scratch\mysuru-macchegalu
   ```
2. Double-click `index.html` to open it in Google Chrome, Microsoft Edge, or any modern web browser.
3. Switch between **Citizen Portal** and **Officials Portal** using the top navigation bar.
4. Try toggling **ಕನ್ನಡ** for the complete Kannada interface!

---

## 📤 How to Upload this Code to GitHub

### Option 1: Using the Git Command Line (Recommended)

#### Step 1: Install Git (if not already installed)
Open **PowerShell** as Administrator and run:
```powershell
winget install --id Git.Git -e --source winget
```
*(After installation finishes, close and reopen your PowerShell window).*

#### Step 2: Create a New Repository on GitHub
1. Go to [github.com/new](https://github.com/new).
2. Repository name: `mysuru-macchegalu`
3. Visibility: **Public**
4. Do **not** check "Add a README file" (you already have this one).
5. Click **Create repository**.
6. Copy your repository URL (e.g. `https://github.com/YOUR_USERNAME/mysuru-macchegalu.git`).

#### Step 3: Initialize Git and Push Your Project
In PowerShell, run:
```powershell
# 1. Change directory to the project folder
cd "C:\Users\iammy\.gemini\antigravity\scratch\mysuru-macchegalu"

# 2. Initialize git repository
git init

# 3. Add all files
git add .

# 4. Commit files
git commit -m "Initial commit: Mysuru Macchegalu civic governance portal"

# 5. Set branch to main
git branch -M main

# 6. Link to your GitHub repository (replace with your actual URL)
git remote add origin https://github.com/YOUR_USERNAME/mysuru-macchegalu.git

# 7. Push to GitHub
git push -u origin main
```

---

### Option 2: Using GitHub Desktop (Easiest Visual Method)

1. Download and install **GitHub Desktop** from [desktop.github.com](https://desktop.github.com/).
2. Sign in with your GitHub account.
3. Click **File** > **Add Local Repository...**
4. Browse and select `C:\Users\iammy\.gemini\antigravity\scratch\mysuru-macchegalu`.
5. Click **create a repository here** if prompted.
6. Click **Publish repository** to push it to your GitHub account!

---

### Option 3: Direct Web Upload on GitHub.com

1. Go to [github.com/new](https://github.com/new) and create a repository named `mysuru-macchegalu`.
2. Under "Quick setup", click **"uploading an existing file"**.
3. Drag and drop the `index.html`, `README.md`, `css/` folder, and `js/` folder directly into the browser.
4. Click **Commit changes**.

---

## 🌐 Publish Live on the Internet (Free with GitHub Pages)

Once pushed to GitHub, you can make your website live worldwide:
1. In your GitHub repository, go to **Settings** > **Pages** (on the left sidebar).
2. Under **Branch**, select `main` branch and `/ (root)` folder.
3. Click **Save**.
4. In ~60 seconds, your site will be live at:
   `https://YOUR_USERNAME.github.io/mysuru-macchegalu/`
