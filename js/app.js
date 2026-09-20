// app.js - State Management & UI Controller for Mysuru Macchegalu

const { MYSURU_REPRESENTATIVES, MYSURU_WARDS, INITIAL_COMPLAINTS, INFLUENCER_PICKS, getDaysElapsed } = window.MMC_DATA;
const { TRANSLATIONS } = window.MMC_I18N;

// Application State
const state = {
  lang: localStorage.getItem('mmc_lang') || 'en',
  theme: localStorage.getItem('mmc_theme') || 'light', // default to light for the warm linen aesthetic
  role: localStorage.getItem('mmc_role') || 'citizen', // 'citizen' | 'official'
  officialConstituencyFilter: 'ALL',
  officialStatusFilter: 'ALL', // 'ALL' | 'STALE' | 'PENDING' | 'RESOLVED'
  citizenStatusFilter: 'ALL',
  
  userProfile: JSON.parse(localStorage.getItem('mmc_user_profile')) || {
    name: "Darshan Gowda",
    phone: "+91 98450 44321",
    wardNo: 45,
    address: "14th Cross, M-Block, near CITB Park, Kuvempunagar"
  },
  
  complaints: JSON.parse(localStorage.getItem('mmc_complaints')) || INITIAL_COMPLAINTS,
  influencerPicks: JSON.parse(localStorage.getItem('mmc_influencers')) || INFLUENCER_PICKS,
  upvotedPicks: JSON.parse(localStorage.getItem('mmc_upvoted_picks')) || ["INF-01"],
  
  editingComplaintId: null
};

// Initialization on DOM Ready
document.addEventListener('DOMContentLoaded', () => {
  initTheme();
  initLanguage();
  initLucideIcons();
  populateWardDropdowns();
  bindEvents();
  renderAll();
});

function initLucideIcons() {
  if (window.lucide && typeof window.lucide.createIcons === 'function') {
    window.lucide.createIcons();
  }
}

// Theme Handling
function initTheme() {
  if (state.theme === 'dark') {
    document.documentElement.classList.add('dark');
  } else {
    document.documentElement.classList.remove('dark');
  }
  updateThemeToggleButtons();
}

function toggleTheme() {
  state.theme = state.theme === 'dark' ? 'light' : 'dark';
  localStorage.setItem('mmc_theme', state.theme);
  initTheme();
}

function updateThemeToggleButtons() {
  const icon = document.getElementById('theme-icon');
  const label = document.getElementById('theme-label');
  const t = TRANSLATIONS[state.lang];
  
  if (icon && label) {
    if (state.theme === 'dark') {
      icon.setAttribute('data-lucide', 'sun');
      label.textContent = t.lightMode;
    } else {
      icon.setAttribute('data-lucide', 'moon');
      label.textContent = t.darkMode;
    }
    initLucideIcons();
  }
}

// Language Handling
function initLanguage() {
  document.documentElement.lang = state.lang;
  if (state.lang === 'kn') {
    document.body.classList.add('lang-kn');
  } else {
    document.body.classList.remove('lang-kn');
  }
  applyTranslations();
}

function toggleLanguage() {
  state.lang = state.lang === 'en' ? 'kn' : 'en';
  localStorage.setItem('mmc_lang', state.lang);
  initLanguage();
  renderAll();
}

function applyTranslations() {
  const t = TRANSLATIONS[state.lang];
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (t[key]) {
      el.textContent = t[key];
    }
  });

  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
    const key = el.getAttribute('data-i18n-placeholder');
    if (t[key]) {
      el.setAttribute('placeholder', t[key]);
    }
  });

  const langBtnText = document.getElementById('lang-toggle-text');
  if (langBtnText) {
    langBtnText.textContent = state.lang === 'en' ? 'ಕನ್ನಡ' : 'English';
  }

  updateThemeToggleButtons();
}

// Role Switching
function setRole(role) {
  state.role = role;
  localStorage.setItem('mmc_role', role);
  
  const citizenBtn = document.getElementById('nav-citizen-btn');
  const officialBtn = document.getElementById('nav-official-btn');
  const citizenSection = document.getElementById('citizen-portal-section');
  const officialSection = document.getElementById('official-portal-section');
  
  if (role === 'citizen') {
    citizenBtn?.classList.add('bg-primary', 'text-primary-foreground', 'shadow-soft');
    citizenBtn?.classList.remove('text-muted-foreground');
    officialBtn?.classList.remove('bg-primary', 'text-primary-foreground', 'shadow-soft');
    officialBtn?.classList.add('text-muted-foreground');
    
    citizenSection?.classList.remove('hidden');
    officialSection?.classList.add('hidden');
  } else {
    officialBtn?.classList.add('bg-primary', 'text-primary-foreground', 'shadow-soft');
    officialBtn?.classList.remove('text-muted-foreground');
    citizenBtn?.classList.remove('bg-primary', 'text-primary-foreground', 'shadow-soft');
    citizenBtn?.classList.add('text-muted-foreground');
    
    officialSection?.classList.remove('hidden');
    citizenSection?.classList.add('hidden');
  }
  
  renderAll();
}

// Populate Ward Dropdowns
function populateWardDropdowns() {
  const wardSelects = [
    document.getElementById('complaint-ward'),
    document.getElementById('profile-ward')
  ];

  wardSelects.forEach(select => {
    if (!select) return;
    select.innerHTML = '';
    MYSURU_WARDS.forEach(w => {
      const option = document.createElement('option');
      option.value = w.wardNo;
      const wardName = state.lang === 'kn' ? w.name_kn : w.name;
      const constName = MYSURU_REPRESENTATIVES.CONSTITUENCIES[w.constituencyId].name;
      option.textContent = `Ward ${w.wardNo} - ${wardName} (${constName})`;
      select.appendChild(option);
    });
  });
}

// Find Ward Info
function getWardDetails(wardNo) {
  const num = parseInt(wardNo, 10);
  const ward = MYSURU_WARDS.find(w => w.wardNo === num) || MYSURU_WARDS[0];
  const constituency = MYSURU_REPRESENTATIVES.CONSTITUENCIES[ward.constituencyId];
  return {
    ward,
    constituency,
    mp: MYSURU_REPRESENTATIVES.MP
  };
}

// Render Representatives Card for Citizen (CivicTrack Editorial Style)
function renderRepresentativesCard() {
  const container = document.getElementById('representatives-container');
  if (!container) return;

  const { ward, constituency, mp } = getWardDetails(state.userProfile.wardNo);
  const isKn = state.lang === 'kn';
  const t = TRANSLATIONS[state.lang];

  container.innerHTML = `
    <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
      
      <!-- Member of Parliament -->
      <div class="rounded-3xl border border-border bg-card p-6 shadow-soft hover-lift flex flex-col justify-between">
        <div>
          <div class="flex items-center gap-3 mb-4">
            <span class="grid size-11 place-items-center rounded-2xl bg-primary/10 text-primary font-bold text-sm">
              MP
            </span>
            <div>
              <span class="text-[10px] font-bold uppercase tracking-wider text-accent block">${t.mpLabel}</span>
              <h4 class="font-display text-base font-bold text-foreground leading-snug">${isKn ? mp.name_kn : mp.name}</h4>
            </div>
          </div>
          <div class="text-xs space-y-2 text-muted-foreground border-t border-border/60 pt-4">
            <p class="flex items-center gap-2"><i data-lucide="map-pin" class="w-3.5 h-3.5 text-primary"></i> ${isKn ? mp.constituency_kn : mp.constituency}</p>
            <p class="flex items-center gap-2 truncate"><i data-lucide="building-2" class="w-3.5 h-3.5 text-primary"></i> ${mp.office}</p>
          </div>
        </div>
        <div class="mt-5 pt-3 border-t border-border/40 flex items-center justify-between">
          <span class="text-xs font-mono text-foreground font-semibold">${mp.phone}</span>
          <a href="tel:${mp.phone}" class="rounded-full px-3.5 py-1.5 bg-primary/10 hover:bg-primary text-primary hover:text-primary-foreground text-xs font-bold transition flex items-center gap-1">
            <i data-lucide="phone" class="w-3 h-3"></i> Call
          </a>
        </div>
      </div>

      <!-- Member of Legislative Assembly (MLA) -->
      <div class="rounded-3xl border border-border bg-card p-6 shadow-soft hover-lift flex flex-col justify-between">
        <div>
          <div class="flex items-center gap-3 mb-4">
            <span class="grid size-11 place-items-center rounded-2xl bg-accent/15 text-accent font-bold text-sm">
              MLA
            </span>
            <div>
              <span class="text-[10px] font-bold uppercase tracking-wider text-accent block">${t.mlaLabel}</span>
              <h4 class="font-display text-base font-bold text-foreground leading-snug">${isKn ? constituency.mla_kn : constituency.mla}</h4>
            </div>
          </div>
          <div class="text-xs space-y-2 text-muted-foreground border-t border-border/60 pt-4">
            <p class="flex items-center gap-2 text-foreground font-medium"><i data-lucide="shield" class="w-3.5 h-3.5 text-accent"></i> ${isKn ? constituency.name_kn : constituency.name} Assembly</p>
            <p class="flex items-center gap-2 truncate"><i data-lucide="landmark" class="w-3.5 h-3.5 text-accent"></i> ${constituency.mlaOffice}</p>
          </div>
        </div>
        <div class="mt-5 pt-3 border-t border-border/40 flex items-center justify-between">
          <span class="text-xs font-mono text-foreground font-semibold">${constituency.mlaPhone}</span>
          <a href="tel:${constituency.mlaPhone}" class="rounded-full px-3.5 py-1.5 bg-accent/15 hover:bg-accent text-accent hover:text-white text-xs font-bold transition flex items-center gap-1">
            <i data-lucide="phone" class="w-3 h-3"></i> Call
          </a>
        </div>
      </div>

      <!-- Ward Assistant Executive Engineer (AEE) -->
      <div class="rounded-3xl border border-border bg-card p-6 shadow-soft hover-lift flex flex-col justify-between">
        <div>
          <div class="flex items-center gap-3 mb-4">
            <span class="grid size-11 place-items-center rounded-2xl bg-secondary text-secondary-foreground font-bold text-sm">
              AEE
            </span>
            <div>
              <span class="text-[10px] font-bold uppercase tracking-wider text-primary block">${t.aeeLabel}</span>
              <h4 class="font-display text-base font-bold text-foreground leading-snug">${ward.aeeName}</h4>
            </div>
          </div>
          <div class="text-xs space-y-2 text-muted-foreground border-t border-border/60 pt-4">
            <p class="flex items-center gap-2 text-foreground font-medium"><i data-lucide="map-pin" class="w-3.5 h-3.5 text-primary"></i> Ward ${ward.wardNo}: ${isKn ? ward.name_kn : ward.name}</p>
            <p class="flex items-center gap-2"><i data-lucide="building" class="w-3.5 h-3.5 text-primary"></i> Mysuru City Corporation (MCC)</p>
          </div>
        </div>
        <div class="mt-5 pt-3 border-t border-border/40 flex items-center justify-between">
          <span class="text-xs font-mono text-foreground font-semibold">${ward.aeePhone}</span>
          <a href="tel:${ward.aeePhone}" class="rounded-full px-3.5 py-1.5 bg-primary hover:bg-primary/90 text-primary-foreground text-xs font-bold transition flex items-center gap-1 shadow-soft">
            <i data-lucide="phone-call" class="w-3 h-3"></i> Direct
          </a>
        </div>
      </div>

    </div>

    <!-- Active Profile Sub-bar -->
    <div class="mt-4 rounded-2xl border border-border bg-card/60 px-5 py-3.5 flex flex-wrap items-center justify-between gap-3 text-xs text-muted-foreground shadow-soft">
      <div class="flex items-center gap-2.5">
        <span class="size-2.5 rounded-full bg-emerald-500 inline-block animate-pulse"></span>
        <span>${isKn ? 'ನೋಂದಾಯಿತ ನಾಗರಿಕರು' : 'Logged in Resident'}: <strong class="text-foreground">${state.userProfile.name}</strong> (${state.userProfile.phone})</span>
        <span class="text-border">|</span>
        <span class="truncate max-w-sm">${state.userProfile.address}</span>
      </div>
      <button id="open-profile-btn" class="rounded-full px-3.5 py-1 border border-border bg-card text-foreground hover:bg-muted text-xs font-bold flex items-center gap-1.5 transition">
        <i data-lucide="edit-3" class="w-3 h-3 text-accent"></i>
        ${t.changeWardBtn}
      </button>
    </div>
  `;

  document.getElementById('open-profile-btn')?.addEventListener('click', openProfileModal);
  initLucideIcons();
}

// Render Influencer's Pick Section (CivicTrack Editorial Magazine Style)
function renderInfluencerPicks() {
  const container = document.getElementById('influencers-picks-container');
  if (!container) return;

  const isKn = state.lang === 'kn';
  const t = TRANSLATIONS[state.lang];

  container.innerHTML = state.influencerPicks.map(pick => {
    const isUpvoted = state.upvotedPicks.includes(pick.id);
    const wardDetail = getWardDetails(pick.wardNo);
    const isStale = pick.urgencyDays >= 20;

    return `
      <div class="rounded-3xl border border-border bg-card p-6 shadow-soft hover-lift flex flex-col justify-between">
        <div>
          <!-- Influencer Header -->
          <div class="flex items-center justify-between gap-2 mb-4">
            <div class="flex items-center gap-3">
              <span class="grid size-10 place-items-center rounded-2xl bg-secondary text-secondary-foreground font-extrabold text-xs">
                ${pick.influencerHandle.substring(1, 3).toUpperCase()}
              </span>
              <div>
                <h5 class="text-xs font-bold text-foreground leading-none">${isKn ? pick.influencerName_kn : pick.influencerName}</h5>
                <span class="text-[10px] text-accent font-semibold">${isKn ? pick.badge_kn : pick.badge} • ${pick.followers}</span>
              </div>
            </div>

            ${isStale ? `
              <span class="inline-flex items-center gap-1 text-[10px] font-bold px-2.5 py-0.5 rounded-full badge-stale badge-stale-pulse">
                <i data-lucide="alert-triangle" class="w-3 h-3"></i> ${pick.urgencyDays}d
              </span>
            ` : ''}
          </div>

          <!-- Title & Description -->
          <h4 class="font-display text-base font-bold text-foreground mb-2 leading-snug">
            ${isKn ? pick.title_kn : pick.title}
          </h4>
          <p class="text-xs text-muted-foreground mb-4 leading-relaxed line-clamp-3">
            ${isKn ? pick.description_kn : pick.description}
          </p>

          <!-- Ward & Tags -->
          <div class="flex flex-wrap gap-1.5 mb-4">
            <span class="text-[10px] font-semibold rounded-md border border-border bg-muted/40 px-2 py-0.5 text-foreground">
              Ward ${pick.wardNo} (${wardDetail.constituency.name})
            </span>
            ${pick.tags.map(tag => `<span class="text-[10px] font-semibold text-accent rounded-md border border-accent/20 bg-accent/5 px-2 py-0.5">${tag}</span>`).join('')}
          </div>
        </div>

        <!-- Voting Footer -->
        <div class="pt-4 border-t border-border/60 flex items-center justify-between">
          <div>
            <span class="font-display text-lg font-bold text-foreground block leading-none">
              ${pick.votes.toLocaleString()}
            </span>
            <span class="text-[10px] text-muted-foreground uppercase tracking-wider">${t.totalInfluencerVotes}</span>
          </div>

          <button 
            onclick="window.toggleUpvote('${pick.id}')"
            class="upvote-btn rounded-full px-4 py-2 text-xs font-bold flex items-center gap-1.5 border transition ${isUpvoted ? 'upvoted' : 'border-border bg-card text-foreground hover:bg-accent hover:text-white hover:border-accent shadow-soft'}"
          >
            <i data-lucide="heart" class="w-3.5 h-3.5 ${isUpvoted ? 'fill-current' : ''}"></i>
            <span>${isUpvoted ? t.upvotedText : t.upvoteBtn}</span>
          </button>
        </div>
      </div>
    `;
  }).join('');

  initLucideIcons();
}

// Global toggle upvote handler
window.toggleUpvote = function(id) {
  const pick = state.influencerPicks.find(p => p.id === id);
  if (!pick) return;

  const idx = state.upvotedPicks.indexOf(id);
  if (idx > -1) {
    state.upvotedPicks.splice(idx, 1);
    pick.votes -= 1;
  } else {
    state.upvotedPicks.push(id);
    pick.votes += 1;
  }

  localStorage.setItem('mmc_upvoted_picks', JSON.stringify(state.upvotedPicks));
  localStorage.setItem('mmc_influencers', JSON.stringify(state.influencerPicks));
  renderInfluencerPicks();
};

// Render Citizen Complaints List
function renderCitizenComplaints() {
  const container = document.getElementById('citizen-complaints-container');
  if (!container) return;

  const t = TRANSLATIONS[state.lang];
  const isKn = state.lang === 'kn';

  let list = state.complaints;
  if (state.citizenStatusFilter !== 'ALL') {
    list = list.filter(c => c.status === state.citizenStatusFilter);
  }

  if (list.length === 0) {
    container.innerHTML = `
      <div class="text-center py-16 rounded-3xl border border-border bg-card/60 shadow-soft">
        <i data-lucide="inbox" class="w-8 h-8 text-muted-foreground mx-auto mb-2 opacity-60"></i>
        <p class="text-xs text-muted-foreground font-medium">${t.noComplaints}</p>
      </div>
    `;
    initLucideIcons();
    return;
  }

  container.innerHTML = list.map(c => {
    const daysOld = getDaysElapsed(c.createdAt);
    const isStale = daysOld > 20 && c.status !== 'Resolved';
    const wardDetail = getWardDetails(c.wardNo);
    const statusBadgeClass = getStatusBadgeClass(c.status);

    return `
      <div class="rounded-3xl border border-border bg-card p-6 shadow-soft hover-lift ${isStale ? 'border-l-4 border-l-destructive' : ''}">
        
        <div class="flex flex-col md:flex-row md:items-center justify-between gap-3 mb-3">
          <div class="flex flex-wrap items-center gap-2">
            <span class="text-xs font-mono font-bold rounded-full border border-border bg-background px-3 py-0.5 text-foreground">
              ${c.id}
            </span>
            <span class="text-xs font-semibold px-3 py-0.5 rounded-full ${statusBadgeClass}">
              ${getStatusName(c.status)}
            </span>
            <span class="text-xs font-medium rounded-full border border-border bg-muted/40 text-muted-foreground px-3 py-0.5">
              ${isKn && c.category_kn ? c.category_kn : c.category}
            </span>
          </div>

          <div>
            ${isStale ? `
              <span class="inline-flex items-center gap-1.5 text-xs font-bold px-3 py-1 rounded-full badge-stale badge-stale-pulse">
                <i data-lucide="alert-octagon" class="w-3.5 h-3.5"></i>
                ${t.staleBadge} (${daysOld} ${isKn ? 'ದಿನಗಳು' : 'days'})
              </span>
            ` : `
              <span class="text-xs text-muted-foreground flex items-center gap-1 font-medium">
                <i data-lucide="clock" class="w-3.5 h-3.5"></i>
                ${daysOld} ${isKn ? 'ದಿನಗಳ ಹಿಂದೆ' : 'days ago'}
              </span>
            `}
          </div>
        </div>

        <h4 class="font-display text-lg font-bold text-foreground mb-1.5 leading-snug">
          ${isKn && c.title_kn ? c.title_kn : c.title}
        </h4>
        <p class="text-xs text-muted-foreground mb-4 leading-relaxed">
          ${isKn && c.description_kn ? c.description_kn : c.description}
        </p>

        <!-- Location & Representative Details Bar -->
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs rounded-2xl border border-border bg-background/50 p-3.5 mb-4">
          <div>
            <span class="font-semibold text-foreground flex items-center gap-1 mb-0.5">
              <i data-lucide="map-pin" class="w-3 h-3 text-primary"></i> ${t.labelAddress}:
            </span>
            <p class="text-muted-foreground">${c.address}, Ward ${c.wardNo} (${wardDetail.constituency.name})</p>
          </div>
          <div>
            <span class="font-semibold text-foreground flex items-center gap-1 mb-0.5">
              <i data-lucide="landmark" class="w-3 h-3 text-accent"></i> ${isKn ? 'ಸಂಬಂಧಿತ ಶಾಸಕರು' : 'Concerned MLA'}:
            </span>
            <p class="text-muted-foreground">${wardDetail.constituency.mla} (${wardDetail.constituency.name})</p>
          </div>
        </div>

        <!-- Allotted Field Officer Section -->
        ${c.assignedOfficer ? `
          <div class="rounded-2xl border border-primary/20 bg-primary/5 p-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div>
              <span class="text-[10px] font-bold uppercase tracking-wider text-primary block mb-0.5">
                ${t.allottedOfficerTitle}
              </span>
              <p class="text-xs sm:text-sm font-bold text-foreground flex items-center gap-2">
                <i data-lucide="user-check" class="w-4 h-4 text-primary"></i>
                ${c.assignedOfficer.name}
                <span class="text-xs font-normal text-muted-foreground">(${c.assignedOfficer.department || 'MCC'})</span>
              </p>
              <p class="text-xs text-muted-foreground mt-1">
                <strong>${t.targetDeadline}:</strong> <span class="font-mono text-primary font-bold">${c.assignedOfficer.allottedTime || c.targetDate}</span>
              </p>
              ${c.resolutionNotes ? `<p class="text-xs text-muted-foreground italic mt-0.5">"${c.resolutionNotes}"</p>` : ''}
            </div>

            <a 
              href="tel:${c.assignedOfficer.phone}" 
              class="rounded-full px-4 py-2 bg-primary text-primary-foreground text-xs font-semibold shadow-soft hover:-translate-y-0.5 transition flex items-center gap-1.5 self-start sm:self-auto"
            >
              <i data-lucide="phone-call" class="w-3.5 h-3.5"></i>
              ${t.contactOfficer}: ${c.assignedOfficer.phone}
            </a>
          </div>
        ` : `
          <div class="rounded-2xl border border-border bg-muted/30 p-3 text-xs text-muted-foreground flex items-center gap-2">
            <i data-lucide="clock" class="w-3.5 h-3.5 text-accent"></i>
            <span>${isKn ? 'ಪಾಲಿಕೆ ವಲಯ ಇಂಜಿನಿಯರ್ ಪರಿಶೀಲಿಸುತ್ತಿದ್ದಾರೆ. ಕ್ಷೇತ್ರಾಧಿಕಾರಿಯನ್ನು ಶೀಘ್ರದಲ್ಲೇ ನಿಯೋಜಿಸಲಾಗುವುದು.' : 'Awaiting Field Officer Assignment by Ward Executive Engineer.'}</span>
          </div>
        `}

      </div>
    `;
  }).join('');

  initLucideIcons();
}

// Render Official Dashboard Table & Metrics
function renderOfficialDashboard() {
  const t = TRANSLATIONS[state.lang];
  const isKn = state.lang === 'kn';

  let list = state.complaints;
  if (state.officialConstituencyFilter !== 'ALL') {
    list = list.filter(c => c.constituencyId === state.officialConstituencyFilter);
  }

  const total = list.length;
  const pending = list.filter(c => c.status !== 'Resolved').length;
  const stale = list.filter(c => c.status !== 'Resolved' && getDaysElapsed(c.createdAt) > 20).length;
  const resolved = list.filter(c => c.status === 'Resolved').length;
  const rate = total > 0 ? Math.round((resolved / total) * 100) : 0;

  document.getElementById('metric-total-val').textContent = total;
  document.getElementById('metric-pending-val').textContent = pending;
  document.getElementById('metric-stale-val').textContent = stale;
  document.getElementById('metric-resolved-val').textContent = resolved;
  document.getElementById('metric-rate-val').textContent = `${rate}%`;

  let tableList = list;
  if (state.officialStatusFilter === 'STALE') {
    tableList = tableList.filter(c => c.status !== 'Resolved' && getDaysElapsed(c.createdAt) > 20);
  } else if (state.officialStatusFilter === 'PENDING') {
    tableList = tableList.filter(c => c.status !== 'Resolved');
  } else if (state.officialStatusFilter === 'RESOLVED') {
    tableList = tableList.filter(c => c.status === 'Resolved');
  }

  const tableBody = document.getElementById('official-table-body');
  if (!tableBody) return;

  if (tableList.length === 0) {
    tableBody.innerHTML = `
      <tr>
        <td colspan="7" class="text-center py-12 text-xs text-muted-foreground">
          ${t.noComplaints}
        </td>
      </tr>
    `;
    return;
  }

  tableBody.innerHTML = tableList.map(c => {
    const daysOld = getDaysElapsed(c.createdAt);
    const isStale = daysOld > 20 && c.status !== 'Resolved';
    const wardDetail = getWardDetails(c.wardNo);
    const statusBadgeClass = getStatusBadgeClass(c.status);

    return `
      <tr class="hover:bg-muted/30 transition">
        <!-- ID & Date -->
        <td class="py-4 px-4 align-top">
          <span class="font-mono text-xs font-bold text-foreground block">${c.id}</span>
          <span class="text-[10px] text-muted-foreground">${new Date(c.createdAt).toLocaleDateString()}</span>
        </td>

        <!-- Issue & Category -->
        <td class="py-4 px-4 align-top max-w-xs">
          <p class="text-xs font-bold text-foreground leading-snug mb-1">
            ${isKn && c.title_kn ? c.title_kn : c.title}
          </p>
          <span class="inline-block text-[10px] font-semibold text-primary rounded-full border border-primary/20 bg-primary/5 px-2.5 py-0.5">
            ${isKn && c.category_kn ? c.category_kn : c.category}
          </span>
        </td>

        <!-- Ward / Area -->
        <td class="py-4 px-4 align-top text-xs">
          <strong class="text-foreground block">Ward ${c.wardNo}</strong>
          <span class="text-[10px] text-muted-foreground">${wardDetail.constituency.name}</span>
          <p class="text-[10px] text-muted-foreground truncate max-w-[150px]">${c.address}</p>
        </td>

        <!-- Age (Days) -->
        <td class="py-4 px-4 align-top whitespace-nowrap">
          ${isStale ? `
            <span class="inline-flex items-center gap-1 text-[10px] font-extrabold px-2.5 py-1 rounded-full badge-stale badge-stale-pulse">
              <i data-lucide="alert-triangle" class="w-3 h-3"></i> ${daysOld}d (STALE)
            </span>
          ` : `
            <span class="text-xs font-medium text-muted-foreground">
              ${daysOld} days
            </span>
          `}
        </td>

        <!-- Status -->
        <td class="py-4 px-4 align-top whitespace-nowrap">
          <span class="inline-block text-xs font-semibold px-2.5 py-0.5 rounded-full ${statusBadgeClass}">
            ${getStatusName(c.status)}
          </span>
        </td>

        <!-- Assigned Officer & Deadline -->
        <td class="py-4 px-4 align-top text-xs">
          ${c.assignedOfficer ? `
            <div>
              <strong class="font-bold text-foreground block">${c.assignedOfficer.name}</strong>
              <span class="text-muted-foreground font-mono text-[11px] block">${c.assignedOfficer.phone}</span>
              <span class="text-[10px] text-primary font-bold block mt-0.5">
                Target: ${c.assignedOfficer.allottedTime || c.targetDate}
              </span>
            </div>
          ` : `
            <span class="inline-block text-[10px] font-bold text-destructive rounded-full border border-destructive/20 bg-destructive/5 px-2 py-0.5">
              Unassigned
            </span>
          `}
        </td>

        <!-- Action Button -->
        <td class="py-4 px-4 align-top text-right whitespace-nowrap">
          <button 
            onclick="window.openAssignModal('${c.id}')"
            class="rounded-full px-3.5 py-1.5 bg-primary text-primary-foreground text-xs font-bold shadow-soft hover:-translate-y-0.5 transition inline-flex items-center gap-1"
          >
            <i data-lucide="user-plus" class="w-3 h-3"></i>
            ${t.assignOfficerBtn}
          </button>
        </td>
      </tr>
    `;
  }).join('');

  initLucideIcons();
}

function getStatusBadgeClass(status) {
  switch (status) {
    case 'Pending': return 'badge-pending';
    case 'Assigned': return 'badge-assigned';
    case 'In_Progress': return 'badge-progress';
    case 'Resolved': return 'badge-resolved';
    default: return 'badge-pending';
  }
}

function getStatusName(status) {
  const t = TRANSLATIONS[state.lang];
  switch (status) {
    case 'Pending': return t.statusPending;
    case 'Assigned': return t.statusAssigned;
    case 'In_Progress': return t.statusInProgress;
    case 'Resolved': return t.statusResolved;
    default: return status;
  }
}

// Modal: Assign Officer
window.openAssignModal = function(complaintId) {
  state.editingComplaintId = complaintId;
  const complaint = state.complaints.find(c => c.id === complaintId);
  if (!complaint) return;

  const modal = document.getElementById('assign-officer-modal');
  document.getElementById('assign-complaint-id-display').textContent = complaint.id;
  document.getElementById('assign-complaint-title-display').textContent = complaint.title;

  if (complaint.assignedOfficer) {
    document.getElementById('assign-officer-name').value = complaint.assignedOfficer.name || '';
    document.getElementById('assign-officer-phone').value = complaint.assignedOfficer.phone || '';
    document.getElementById('assign-officer-dept').value = complaint.assignedOfficer.department || '';
    document.getElementById('assign-deadline').value = complaint.assignedOfficer.allottedTime || complaint.targetDate || '';
  } else {
    const wardDetail = getWardDetails(complaint.wardNo);
    document.getElementById('assign-officer-name').value = `${wardDetail.ward.aeeName} (AEE)`;
    document.getElementById('assign-officer-phone').value = wardDetail.ward.aeePhone;
    document.getElementById('assign-officer-dept').value = `MCC Ward ${complaint.wardNo} Engineering`;
    
    const nextWeek = new Date();
    nextWeek.setDate(nextWeek.getDate() + 7);
    document.getElementById('assign-deadline').value = nextWeek.toISOString().split('T')[0];
  }

  document.getElementById('assign-status').value = complaint.status;
  document.getElementById('assign-notes').value = complaint.resolutionNotes || '';

  modal.classList.remove('hidden');
  initLucideIcons();
};

function closeAssignModal() {
  document.getElementById('assign-officer-modal').classList.add('hidden');
  state.editingComplaintId = null;
}

function handleSaveAllotment(e) {
  e.preventDefault();
  if (!state.editingComplaintId) return;

  const complaint = state.complaints.find(c => c.id === state.editingComplaintId);
  if (!complaint) return;

  const name = document.getElementById('assign-officer-name').value.trim();
  const phone = document.getElementById('assign-officer-phone').value.trim();
  const dept = document.getElementById('assign-officer-dept').value.trim();
  const deadline = document.getElementById('assign-deadline').value;
  const status = document.getElementById('assign-status').value;
  const notes = document.getElementById('assign-notes').value.trim();

  complaint.assignedOfficer = {
    name,
    phone,
    department: dept,
    allottedTime: deadline
  };
  complaint.targetDate = deadline;
  complaint.status = status;
  complaint.resolutionNotes = notes;

  localStorage.setItem('mmc_complaints', JSON.stringify(state.complaints));
  closeAssignModal();
  renderAll();
  showToast(state.lang === 'kn' ? "ಅಧಿಕಾರಿಯನ್ನು ಯಶಸ್ವಿಯಾಗಿ ನಿಯೋಜಿಸಲಾಗಿದೆ!" : "Field Officer allotted and citizen notified!");
}

// Modal: File Complaint
function openComplaintModal() {
  document.getElementById('file-complaint-modal').classList.remove('hidden');
  document.getElementById('complaint-citizen-name').value = state.userProfile.name;
  document.getElementById('complaint-citizen-phone').value = state.userProfile.phone;
  document.getElementById('complaint-ward').value = state.userProfile.wardNo;
  initLucideIcons();
}

function closeComplaintModal() {
  document.getElementById('file-complaint-modal').classList.add('hidden');
  document.getElementById('new-complaint-form').reset();
}

function handleCreateComplaint(e) {
  e.preventDefault();

  const title = document.getElementById('complaint-title').value.trim();
  const category = document.getElementById('complaint-category').value;
  const wardNo = parseInt(document.getElementById('complaint-ward').value, 10);
  const address = document.getElementById('complaint-address').value.trim();
  const description = document.getElementById('complaint-description').value.trim();
  const citizenName = document.getElementById('complaint-citizen-name').value.trim();
  const citizenPhone = document.getElementById('complaint-citizen-phone').value.trim();

  const wardDetail = getWardDetails(wardNo);
  const newId = `MMC-2026-${Math.floor(1000 + Math.random() * 9000)}`;

  const newComplaint = {
    id: newId,
    title,
    title_kn: title,
    category,
    category_kn: category,
    wardNo,
    constituencyId: wardDetail.ward.constituencyId,
    address,
    citizenName,
    citizenPhone,
    description,
    description_kn: description,
    status: "Pending",
    createdAt: new Date().toISOString(),
    priority: "High",
    assignedOfficer: null,
    targetDate: null,
    resolutionNotes: null,
    votes: 1
  };

  state.complaints.unshift(newComplaint);
  localStorage.setItem('mmc_complaints', JSON.stringify(state.complaints));

  closeComplaintModal();
  renderAll();
  showToast(state.lang === 'kn' ? `ದೂರು #${newId} ಯಶಸ್ವಿಯಾಗಿ ದಾಖಲಾಗಿದೆ!` : `Complaint #${newId} registered successfully!`);
}

// Modal: Profile
function openProfileModal() {
  document.getElementById('update-profile-modal').classList.remove('hidden');
  document.getElementById('profile-name').value = state.userProfile.name;
  document.getElementById('profile-phone').value = state.userProfile.phone;
  document.getElementById('profile-ward').value = state.userProfile.wardNo;
  document.getElementById('profile-address').value = state.userProfile.address;
  initLucideIcons();
}

function closeProfileModal() {
  document.getElementById('update-profile-modal').classList.add('hidden');
}

function handleSaveProfile(e) {
  e.preventDefault();
  state.userProfile.name = document.getElementById('profile-name').value.trim();
  state.userProfile.phone = document.getElementById('profile-phone').value.trim();
  state.userProfile.wardNo = parseInt(document.getElementById('profile-ward').value, 10);
  state.userProfile.address = document.getElementById('profile-address').value.trim();

  localStorage.setItem('mmc_user_profile', JSON.stringify(state.userProfile));
  closeProfileModal();
  renderAll();
  showToast(state.lang === 'kn' ? "ಪ್ರೊಫೈಲ್ ಮತ್ತು ಶಾಸಕರ ಹಂಚಿಕೆಯನ್ನು ನವೀಕರಿಸಲಾಗಿದೆ!" : "Profile and representatives auto-allotted!");
}

function showToast(msg) {
  const toast = document.getElementById('toast');
  if (!toast) return;
  toast.textContent = msg;
  toast.classList.remove('hidden', 'translate-y-10', 'opacity-0');
  toast.classList.add('translate-y-0', 'opacity-100');

  setTimeout(() => {
    toast.classList.add('translate-y-10', 'opacity-0');
    setTimeout(() => toast.classList.add('hidden'), 300);
  }, 3500);
}

// Event Bindings
function bindEvents() {
  document.getElementById('theme-toggle-btn')?.addEventListener('click', toggleTheme);
  document.getElementById('lang-toggle-btn')?.addEventListener('click', toggleLanguage);

  document.getElementById('nav-citizen-btn')?.addEventListener('click', () => setRole('citizen'));
  document.getElementById('nav-official-btn')?.addEventListener('click', () => setRole('official'));

  document.getElementById('open-complaint-modal-btn')?.addEventListener('click', openComplaintModal);
  document.getElementById('close-complaint-modal-btn')?.addEventListener('click', closeComplaintModal);
  document.getElementById('close-assign-modal-btn')?.addEventListener('click', closeAssignModal);
  document.getElementById('close-profile-modal-btn')?.addEventListener('click', closeProfileModal);

  document.getElementById('new-complaint-form')?.addEventListener('submit', handleCreateComplaint);
  document.getElementById('assign-officer-form')?.addEventListener('submit', handleSaveAllotment);
  document.getElementById('update-profile-form')?.addEventListener('submit', handleSaveProfile);

  document.getElementById('official-constituency-select')?.addEventListener('change', (e) => {
    state.officialConstituencyFilter = e.target.value;
    renderOfficialDashboard();
  });

  document.querySelectorAll('.official-filter-tab').forEach(btn => {
    btn.addEventListener('click', (e) => {
      document.querySelectorAll('.official-filter-tab').forEach(b => {
        b.classList.remove('bg-primary', 'text-primary-foreground', 'font-bold');
        b.classList.add('text-muted-foreground', 'hover:text-foreground');
      });
      e.currentTarget.classList.add('bg-primary', 'text-primary-foreground', 'font-bold');
      e.currentTarget.classList.remove('text-muted-foreground', 'hover:text-foreground');
      state.officialStatusFilter = e.currentTarget.getAttribute('data-status');
      renderOfficialDashboard();
    });
  });

  document.querySelectorAll('.citizen-filter-tab').forEach(btn => {
    btn.addEventListener('click', (e) => {
      document.querySelectorAll('.citizen-filter-tab').forEach(b => {
        b.classList.remove('bg-primary', 'text-primary-foreground', 'font-bold');
        b.classList.add('text-muted-foreground', 'hover:text-foreground');
      });
      e.currentTarget.classList.add('bg-primary', 'text-primary-foreground', 'font-bold');
      e.currentTarget.classList.remove('text-muted-foreground', 'hover:text-foreground');
      state.citizenStatusFilter = e.currentTarget.getAttribute('data-status');
      renderCitizenComplaints();
    });
  });
}

function renderAll() {
  applyTranslations();
  renderRepresentativesCard();
  renderInfluencerPicks();
  renderCitizenComplaints();
  renderOfficialDashboard();
  initLucideIcons();
}
