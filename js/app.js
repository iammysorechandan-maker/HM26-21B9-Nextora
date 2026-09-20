// app.js - State Management & UI Controller for Mysuru Macchegalu

const { MYSURU_REPRESENTATIVES, MYSURU_WARDS, INITIAL_COMPLAINTS, INFLUENCER_PICKS, getDaysElapsed } = window.MMC_DATA;
const { TRANSLATIONS } = window.MMC_I18N;

// Application State
const state = {
  lang: localStorage.getItem('mmc_lang') || 'en',
  theme: localStorage.getItem('mmc_theme') || 'dark',
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
    citizenBtn.classList.add('bg-amber-500', 'text-slate-900', 'shadow-md');
    citizenBtn.classList.remove('text-slate-400', 'hover:text-slate-200');
    officialBtn.classList.remove('bg-amber-500', 'text-slate-900', 'shadow-md');
    officialBtn.classList.add('text-slate-400', 'hover:text-slate-200');
    
    citizenSection.classList.remove('hidden');
    officialSection.classList.add('hidden');
  } else {
    officialBtn.classList.add('bg-amber-500', 'text-slate-900', 'shadow-md');
    officialBtn.classList.remove('text-slate-400', 'hover:text-slate-200');
    citizenBtn.classList.remove('bg-amber-500', 'text-slate-900', 'shadow-md');
    citizenBtn.classList.add('text-slate-400', 'hover:text-slate-200');
    
    officialSection.classList.remove('hidden');
    citizenSection.classList.add('hidden');
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

// Render Representatives Card for Citizen
function renderRepresentativesCard() {
  const container = document.getElementById('representatives-container');
  if (!container) return;

  const { ward, constituency, mp } = getWardDetails(state.userProfile.wardNo);
  const isKn = state.lang === 'kn';
  const t = TRANSLATIONS[state.lang];

  container.innerHTML = `
    <div class="grid grid-cols-1 md:grid-cols-3 gap-5">
      <!-- Member of Parliament -->
      <div class="bg-white/80 dark:bg-slate-800/80 rounded-xl p-5 border border-slate-200 dark:border-slate-700 shadow-sm transition hover:shadow-md">
        <div class="flex items-center gap-3 mb-3">
          <div class="w-12 h-12 rounded-full bg-amber-500/20 text-amber-500 flex items-center justify-center font-bold text-lg">
            MP
          </div>
          <div>
            <span class="text-xs font-semibold text-amber-600 dark:text-amber-400 uppercase tracking-wider block">${t.mpLabel}</span>
            <h4 class="text-base font-bold text-slate-900 dark:text-white leading-snug">${isKn ? mp.name_kn : mp.name}</h4>
          </div>
        </div>
        <div class="text-xs space-y-1.5 text-slate-600 dark:text-slate-300 border-t border-slate-100 dark:border-slate-700/60 pt-3">
          <p class="flex items-center gap-2"><i data-lucide="map-pin" class="w-3.5 h-3.5 text-amber-500"></i> ${isKn ? mp.constituency_kn : mp.constituency}</p>
          <p class="flex items-center gap-2"><i data-lucide="phone" class="w-3.5 h-3.5 text-amber-500"></i> <a href="tel:${mp.phone}" class="hover:underline font-medium text-slate-800 dark:text-slate-200">${mp.phone}</a></p>
          <p class="flex items-center gap-2 truncate"><i data-lucide="building-2" class="w-3.5 h-3.5 text-amber-500"></i> ${mp.office}</p>
        </div>
      </div>

      <!-- Member of Legislative Assembly (MLA) -->
      <div class="bg-white/80 dark:bg-slate-800/80 rounded-xl p-5 border border-slate-200 dark:border-slate-700 shadow-sm transition hover:shadow-md">
        <div class="flex items-center gap-3 mb-3">
          <div class="w-12 h-12 rounded-full bg-indigo-500/20 text-indigo-500 flex items-center justify-center font-bold text-lg">
            MLA
          </div>
          <div>
            <span class="text-xs font-semibold text-indigo-600 dark:text-indigo-400 uppercase tracking-wider block">${t.mlaLabel}</span>
            <h4 class="text-base font-bold text-slate-900 dark:text-white leading-snug">${isKn ? constituency.mla_kn : constituency.mla}</h4>
          </div>
        </div>
        <div class="text-xs space-y-1.5 text-slate-600 dark:text-slate-300 border-t border-slate-100 dark:border-slate-700/60 pt-3">
          <p class="flex items-center gap-2 font-medium text-indigo-600 dark:text-indigo-300"><i data-lucide="shield" class="w-3.5 h-3.5"></i> ${isKn ? constituency.name_kn : constituency.name} Assembly</p>
          <p class="flex items-center gap-2"><i data-lucide="phone" class="w-3.5 h-3.5 text-indigo-500"></i> <a href="tel:${constituency.mlaPhone}" class="hover:underline font-medium text-slate-800 dark:text-slate-200">${constituency.mlaPhone}</a></p>
          <p class="flex items-center gap-2 truncate"><i data-lucide="landmark" class="w-3.5 h-3.5 text-indigo-500"></i> ${constituency.mlaOffice}</p>
        </div>
      </div>

      <!-- Ward Assistant Executive Engineer (AEE) -->
      <div class="bg-white/80 dark:bg-slate-800/80 rounded-xl p-5 border border-slate-200 dark:border-slate-700 shadow-sm transition hover:shadow-md">
        <div class="flex items-center gap-3 mb-3">
          <div class="w-12 h-12 rounded-full bg-emerald-500/20 text-emerald-500 flex items-center justify-center font-bold text-lg">
            AEE
          </div>
          <div>
            <span class="text-xs font-semibold text-emerald-600 dark:text-emerald-400 uppercase tracking-wider block">${t.aeeLabel}</span>
            <h4 class="text-base font-bold text-slate-900 dark:text-white leading-snug">${ward.aeeName}</h4>
          </div>
        </div>
        <div class="text-xs space-y-1.5 text-slate-600 dark:text-slate-300 border-t border-slate-100 dark:border-slate-700/60 pt-3">
          <p class="flex items-center gap-2 font-medium text-emerald-600 dark:text-emerald-400"><i data-lucide="map-pin" class="w-3.5 h-3.5"></i> Ward ${ward.wardNo}: ${isKn ? ward.name_kn : ward.name}</p>
          <p class="flex items-center gap-2"><i data-lucide="phone-call" class="w-3.5 h-3.5 text-emerald-500"></i> <a href="tel:${ward.aeePhone}" class="hover:underline font-bold text-emerald-600 dark:text-emerald-300">${ward.aeePhone}</a></p>
          <p class="flex items-center gap-2"><i data-lucide="building" class="w-3.5 h-3.5 text-emerald-500"></i> Mysuru City Corporation (MCC)</p>
        </div>
      </div>
    </div>

    <!-- Active Profile Sub-bar -->
    <div class="mt-4 pt-3 border-t border-slate-200 dark:border-slate-700 flex flex-wrap items-center justify-between gap-3 text-xs text-slate-600 dark:text-slate-400">
      <div class="flex items-center gap-2">
        <span class="w-2.5 h-2.5 rounded-full bg-emerald-500 inline-block animate-ping"></span>
        <span>${isKn ? 'ನೋಂದಾಯಿತ ನಾಗರಿಕರು' : 'Logged in Citizen'}: <strong class="text-slate-900 dark:text-white">${state.userProfile.name}</strong> (${state.userProfile.phone})</span>
        <span class="text-slate-400">|</span>
        <span>${state.userProfile.address}</span>
      </div>
      <button id="open-profile-btn" class="text-amber-600 dark:text-amber-400 hover:underline font-semibold flex items-center gap-1">
        <i data-lucide="edit-3" class="w-3.5 h-3.5"></i>
        ${t.changeWardBtn}
      </button>
    </div>
  `;

  document.getElementById('open-profile-btn')?.addEventListener('click', openProfileModal);
  initLucideIcons();
}

// Render Influencer's Pick Section
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
      <div class="bg-white dark:bg-slate-800 rounded-2xl border border-slate-200 dark:border-slate-700 p-6 shadow-sm hover:shadow-lg transition flex flex-col justify-between">
        <div>
          <!-- Influencer Meta -->
          <div class="flex items-center justify-between mb-4">
            <div class="flex items-center gap-3">
              <div class="w-10 h-10 rounded-full bg-gradient-to-tr from-amber-500 to-rose-500 text-white flex items-center justify-center font-extrabold text-sm shadow-sm">
                ${pick.influencerHandle.substring(1, 3).toUpperCase()}
              </div>
              <div>
                <h5 class="text-sm font-bold text-slate-900 dark:text-white leading-none">${isKn ? pick.influencerName_kn : pick.influencerName}</h5>
                <span class="text-[11px] text-amber-600 dark:text-amber-400 font-medium">${isKn ? pick.badge_kn : pick.badge} • ${pick.followers}</span>
              </div>
            </div>
            ${isStale ? `
              <span class="inline-flex items-center gap-1 text-[11px] font-bold px-2.5 py-1 rounded-full badge-stale badge-stale-pulse">
                <i data-lucide="alert-triangle" class="w-3 h-3"></i> ${pick.urgencyDays} ${t.daysPending}
              </span>
            ` : ''}
          </div>

          <!-- Title & Description -->
          <h4 class="text-base font-bold text-slate-900 dark:text-white mb-2 leading-snug">
            ${isKn ? pick.title_kn : pick.title}
          </h4>
          <p class="text-xs text-slate-600 dark:text-slate-300 mb-4 leading-relaxed">
            ${isKn ? pick.description_kn : pick.description}
          </p>

          <!-- Hashtags & Ward Info -->
          <div class="flex flex-wrap gap-1.5 mb-4">
            <span class="text-[10px] font-medium bg-slate-100 dark:bg-slate-700/60 text-slate-700 dark:text-slate-300 px-2 py-0.5 rounded">
              Ward ${pick.wardNo} (${wardDetail.constituency.name})
            </span>
            ${pick.tags.map(tag => `<span class="text-[10px] font-semibold text-amber-600 dark:text-amber-400 bg-amber-50 dark:bg-amber-950/30 px-2 py-0.5 rounded">${tag}</span>`).join('')}
          </div>
        </div>

        <!-- Voting Action Footer -->
        <div class="pt-4 border-t border-slate-100 dark:border-slate-700/60 flex items-center justify-between">
          <div>
            <span class="text-lg font-extrabold text-slate-900 dark:text-white block leading-none" id="vote-count-${pick.id}">
              ${pick.votes.toLocaleString()}
            </span>
            <span class="text-[11px] text-slate-500 dark:text-slate-400">${t.totalInfluencerVotes}</span>
          </div>

          <button 
            onclick="window.toggleUpvote('${pick.id}')"
            class="upvote-btn px-4 py-2 rounded-xl text-xs font-bold flex items-center gap-1.5 border transition ${isUpvoted ? 'upvoted' : 'bg-slate-100 dark:bg-slate-700 text-slate-800 dark:text-slate-200 border-slate-300 dark:border-slate-600 hover:bg-rose-500 hover:text-white hover:border-rose-500'}"
          >
            <i data-lucide="heart" class="w-4 h-4 ${isUpvoted ? 'fill-current' : ''}"></i>
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

  // Filter complaints
  let list = state.complaints;
  if (state.citizenStatusFilter !== 'ALL') {
    list = list.filter(c => c.status === state.citizenStatusFilter);
  }

  // Update citizen summary stats
  const activeCount = state.complaints.filter(c => c.status !== 'Resolved').length;
  const resolvedCount = state.complaints.filter(c => c.status === 'Resolved').length;
  const activeEl = document.getElementById('stat-active-count');
  const resolvedEl = document.getElementById('stat-resolved-count');
  if (activeEl) activeEl.textContent = activeCount;
  if (resolvedEl) resolvedEl.textContent = resolvedCount;

  if (list.length === 0) {
    container.innerHTML = `
      <div class="text-center py-12 bg-white dark:bg-slate-800 rounded-2xl border border-slate-200 dark:border-slate-700">
        <i data-lucide="inbox" class="w-10 h-10 text-slate-400 mx-auto mb-2"></i>
        <p class="text-sm text-slate-500 dark:text-slate-400">${t.noComplaints}</p>
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
      <div class="bg-white dark:bg-slate-800 rounded-2xl border border-slate-200 dark:border-slate-700 p-6 shadow-sm transition hover:shadow-md ${isStale ? 'border-l-4 border-l-rose-500' : ''}">
        <div class="flex flex-col md:flex-row md:items-center justify-between gap-3 mb-3">
          <div class="flex flex-wrap items-center gap-2">
            <span class="text-xs font-mono font-bold bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300 px-2.5 py-1 rounded">
              ${c.id}
            </span>
            <span class="text-xs font-semibold px-2.5 py-1 rounded-full ${statusBadgeClass}">
              ${getStatusName(c.status)}
            </span>
            <span class="text-xs font-medium bg-amber-50 dark:bg-amber-950/40 text-amber-700 dark:text-amber-300 px-2.5 py-1 rounded-full">
              ${isKn && c.category_kn ? c.category_kn : c.category}
            </span>
          </div>

          <div class="flex items-center gap-2">
            ${isStale ? `
              <span class="inline-flex items-center gap-1.5 text-xs font-bold px-3 py-1 rounded-full badge-stale badge-stale-pulse">
                <i data-lucide="alert-octagon" class="w-3.5 h-3.5"></i>
                ${t.staleBadge} (${daysOld} ${isKn ? 'ದಿನಗಳು' : 'days'})
              </span>
            ` : `
              <span class="text-xs text-slate-500 dark:text-slate-400 flex items-center gap-1">
                <i data-lucide="clock" class="w-3.5 h-3.5"></i>
                ${daysOld} ${isKn ? 'ದಿನಗಳ ಹಿಂದೆ' : 'days ago'}
              </span>
            `}
          </div>
        </div>

        <h4 class="text-base font-bold text-slate-900 dark:text-white mb-2">
          ${isKn && c.title_kn ? c.title_kn : c.title}
        </h4>
        <p class="text-xs text-slate-600 dark:text-slate-300 mb-4 leading-relaxed">
          ${isKn && c.description_kn ? c.description_kn : c.description}
        </p>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs text-slate-600 dark:text-slate-300 bg-slate-50 dark:bg-slate-900/50 p-4 rounded-xl mb-4 border border-slate-100 dark:border-slate-800">
          <div>
            <p class="font-semibold text-slate-800 dark:text-slate-200 mb-1 flex items-center gap-1.5">
              <i data-lucide="map-pin" class="w-3.5 h-3.5 text-amber-500"></i> ${t.labelAddress}:
            </p>
            <p>${c.address}, Ward ${c.wardNo} (${wardDetail.constituency.name})</p>
          </div>
          <div>
            <p class="font-semibold text-slate-800 dark:text-slate-200 mb-1 flex items-center gap-1.5">
              <i data-lucide="landmark" class="w-3.5 h-3.5 text-indigo-500"></i> ${isKn ? 'ಸಂಬಂಧಿತ ಶಾಸಕರು' : 'Concerned MLA'}:
            </p>
            <p>${wardDetail.constituency.mla} (${wardDetail.constituency.name})</p>
          </div>
        </div>

        <!-- Allotted Officer Card if available -->
        ${c.assignedOfficer ? `
          <div class="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-slate-800 dark:to-indigo-950/40 border border-blue-200 dark:border-blue-900/50 rounded-xl p-4">
            <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div>
                <span class="text-[11px] font-bold uppercase tracking-wider text-blue-700 dark:text-blue-300 block mb-0.5">
                  ${t.allottedOfficerTitle}
                </span>
                <p class="text-sm font-bold text-slate-900 dark:text-white flex items-center gap-2">
                  <i data-lucide="user-check" class="w-4 h-4 text-blue-600 dark:text-blue-400"></i>
                  ${c.assignedOfficer.name}
                  <span class="text-xs font-normal text-slate-600 dark:text-slate-400">(${c.assignedOfficer.department || 'MCC'})</span>
                </p>
                <p class="text-xs text-slate-600 dark:text-slate-300 mt-1">
                  <strong>${t.targetDeadline}:</strong> <span class="font-mono text-indigo-700 dark:text-indigo-300 font-bold">${c.assignedOfficer.allottedTime || c.targetDate}</span>
                </p>
                ${c.resolutionNotes ? `<p class="text-xs text-slate-500 dark:text-slate-400 italic mt-1">"${c.resolutionNotes}"</p>` : ''}
              </div>

              <div class="flex items-center gap-2">
                <a 
                  href="tel:${c.assignedOfficer.phone}" 
                  class="px-3.5 py-2 rounded-lg bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold flex items-center gap-1.5 shadow-sm transition"
                >
                  <i data-lucide="phone-call" class="w-3.5 h-3.5"></i>
                  ${t.contactOfficer}: ${c.assignedOfficer.phone}
                </a>
              </div>
            </div>
          </div>
        ` : `
          <div class="bg-amber-50/70 dark:bg-amber-950/20 border border-amber-200 dark:border-amber-900/40 rounded-xl p-3.5 text-xs text-amber-800 dark:text-amber-300 flex items-center justify-between">
            <span class="flex items-center gap-2">
              <i data-lucide="clock" class="w-4 h-4 text-amber-600"></i>
              ${isKn ? 'ಪಾಲಿಕೆ ವಲಯ ಇಂಜಿನಿಯರ್ ಪರಿಶೀಲಿಸುತ್ತಿದ್ದಾರೆ. ಕ್ಷೇತ್ರಾಧಿಕಾರಿಯನ್ನು ಶೀಘ್ರದಲ್ಲೇ ನಿಯೋಜಿಸಲಾಗುವುದು.' : 'Awaiting Field Officer Assignment by Ward Executive Engineer.'}
            </span>
          </div>
        `}
      </div>
    `;
  }).join('');

  initLucideIcons();
}

// Render Official Dashboard
function renderOfficialDashboard() {
  const t = TRANSLATIONS[state.lang];
  const isKn = state.lang === 'kn';

  // Apply Constituency Filter
  let list = state.complaints;
  if (state.officialConstituencyFilter !== 'ALL') {
    list = list.filter(c => c.constituencyId === state.officialConstituencyFilter);
  }

  // Calculate Metrics
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

  // Apply Status Filter for table
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
        <td colspan="7" class="text-center py-10 text-xs text-slate-500 dark:text-slate-400">
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
      <tr class="border-b border-slate-100 dark:border-slate-800 hover:bg-slate-50/70 dark:hover:bg-slate-800/50 transition">
        <!-- ID & Date -->
        <td class="py-4 px-4 align-top">
          <span class="font-mono text-xs font-bold text-slate-800 dark:text-slate-200 block">${c.id}</span>
          <span class="text-[11px] text-slate-400">${new Date(c.createdAt).toLocaleDateString()}</span>
        </td>

        <!-- Issue & Category -->
        <td class="py-4 px-4 align-top max-w-xs">
          <p class="text-xs font-bold text-slate-900 dark:text-white leading-snug mb-1">
            ${isKn && c.title_kn ? c.title_kn : c.title}
          </p>
          <span class="inline-block text-[10px] font-semibold text-amber-600 dark:text-amber-400 bg-amber-50 dark:bg-amber-950/40 px-2 py-0.5 rounded">
            ${isKn && c.category_kn ? c.category_kn : c.category}
          </span>
        </td>

        <!-- Ward / Area -->
        <td class="py-4 px-4 align-top text-xs text-slate-700 dark:text-slate-300">
          <strong class="text-slate-900 dark:text-white block">Ward ${c.wardNo}</strong>
          <span class="text-[11px] text-slate-500">${wardDetail.constituency.name}</span>
          <p class="text-[11px] text-slate-400 truncate max-w-[160px]">${c.address}</p>
        </td>

        <!-- Age in Days -->
        <td class="py-4 px-4 align-top whitespace-nowrap">
          ${isStale ? `
            <span class="inline-flex items-center gap-1 text-[11px] font-extrabold px-2.5 py-1 rounded-full badge-stale badge-stale-pulse">
              <i data-lucide="alert-triangle" class="w-3 h-3"></i> ${daysOld}d (STALE)
            </span>
          ` : `
            <span class="text-xs font-medium text-slate-600 dark:text-slate-400">
              ${daysOld} days
            </span>
          `}
        </td>

        <!-- Status -->
        <td class="py-4 px-4 align-top whitespace-nowrap">
          <span class="inline-block text-xs font-semibold px-2.5 py-1 rounded-full ${statusBadgeClass}">
            ${getStatusName(c.status)}
          </span>
        </td>

        <!-- Assigned Officer & Deadline -->
        <td class="py-4 px-4 align-top text-xs">
          ${c.assignedOfficer ? `
            <div class="text-slate-800 dark:text-slate-200">
              <strong class="font-bold block">${c.assignedOfficer.name}</strong>
              <span class="text-slate-500 dark:text-slate-400 font-mono text-[11px] block">${c.assignedOfficer.phone}</span>
              <span class="text-[11px] text-indigo-600 dark:text-indigo-400 font-semibold block mt-0.5">
                Target: ${c.assignedOfficer.allottedTime || c.targetDate}
              </span>
            </div>
          ` : `
            <span class="inline-block text-[11px] font-bold text-rose-600 dark:text-rose-400 bg-rose-50 dark:bg-rose-950/40 px-2 py-1 rounded">
              Unassigned
            </span>
          `}
        </td>

        <!-- Action Button -->
        <td class="py-4 px-4 align-top whitespace-nowrap">
          <button 
            onclick="window.openAssignModal('${c.id}')"
            class="px-3 py-1.5 rounded-lg bg-amber-500 hover:bg-amber-600 text-slate-950 text-xs font-bold flex items-center gap-1 shadow-sm transition"
          >
            <i data-lucide="user-plus" class="w-3.5 h-3.5"></i>
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

// Modal Handling: Open Assign Officer Modal
window.openAssignModal = function(complaintId) {
  state.editingComplaintId = complaintId;
  const complaint = state.complaints.find(c => c.id === complaintId);
  if (!complaint) return;

  const modal = document.getElementById('assign-officer-modal');
  document.getElementById('assign-complaint-id-display').textContent = complaint.id;
  document.getElementById('assign-complaint-title-display').textContent = complaint.title;

  // Pre-fill existing data if any
  if (complaint.assignedOfficer) {
    document.getElementById('assign-officer-name').value = complaint.assignedOfficer.name || '';
    document.getElementById('assign-officer-phone').value = complaint.assignedOfficer.phone || '';
    document.getElementById('assign-officer-dept').value = complaint.assignedOfficer.department || '';
    document.getElementById('assign-deadline').value = complaint.assignedOfficer.allottedTime || complaint.targetDate || '';
  } else {
    // Suggest local AEE based on Ward
    const wardDetail = getWardDetails(complaint.wardNo);
    document.getElementById('assign-officer-name').value = `${wardDetail.ward.aeeName} (AEE)`;
    document.getElementById('assign-officer-phone').value = wardDetail.ward.aeePhone;
    document.getElementById('assign-officer-dept').value = `MCC Ward ${complaint.wardNo} Engineering`;
    
    // Default deadline: 7 days from now
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

// Save Allotment
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

// Modal Handling: Citizen File Complaint Modal
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

// Modal Handling: Update Profile
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

// Toast notification helper
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
  // Theme & Language
  document.getElementById('theme-toggle-btn')?.addEventListener('click', toggleTheme);
  document.getElementById('lang-toggle-btn')?.addEventListener('click', toggleLanguage);

  // Portal Navigation
  document.getElementById('nav-citizen-btn')?.addEventListener('click', () => setRole('citizen'));
  document.getElementById('nav-official-btn')?.addEventListener('click', () => setRole('official'));

  // Modals Open/Close
  document.getElementById('open-complaint-modal-btn')?.addEventListener('click', openComplaintModal);
  document.getElementById('close-complaint-modal-btn')?.addEventListener('click', closeComplaintModal);
  document.getElementById('close-assign-modal-btn')?.addEventListener('click', closeAssignModal);
  document.getElementById('close-profile-modal-btn')?.addEventListener('click', closeProfileModal);

  // Forms
  document.getElementById('new-complaint-form')?.addEventListener('submit', handleCreateComplaint);
  document.getElementById('assign-officer-form')?.addEventListener('submit', handleSaveAllotment);
  document.getElementById('update-profile-form')?.addEventListener('submit', handleSaveProfile);

  // Official Filters
  document.getElementById('official-constituency-select')?.addEventListener('change', (e) => {
    state.officialConstituencyFilter = e.target.value;
    renderOfficialDashboard();
  });

  document.querySelectorAll('.official-filter-tab').forEach(btn => {
    btn.addEventListener('click', (e) => {
      document.querySelectorAll('.official-filter-tab').forEach(b => {
        b.classList.remove('bg-amber-500', 'text-slate-950', 'font-bold');
        b.classList.add('text-slate-500', 'hover:text-slate-900', 'dark:text-slate-400');
      });
      e.currentTarget.classList.add('bg-amber-500', 'text-slate-950', 'font-bold');
      e.currentTarget.classList.remove('text-slate-500', 'hover:text-slate-900', 'dark:text-slate-400');
      state.officialStatusFilter = e.currentTarget.getAttribute('data-status');
      renderOfficialDashboard();
    });
  });

  // Citizen Complaint Filter Tabs
  document.querySelectorAll('.citizen-filter-tab').forEach(btn => {
    btn.addEventListener('click', (e) => {
      document.querySelectorAll('.citizen-filter-tab').forEach(b => {
        b.classList.remove('bg-amber-500', 'text-slate-950', 'font-bold');
        b.classList.add('text-slate-500', 'hover:text-slate-900', 'dark:text-slate-400');
      });
      e.currentTarget.classList.add('bg-amber-500', 'text-slate-950', 'font-bold');
      e.currentTarget.classList.remove('text-slate-500', 'hover:text-slate-900', 'dark:text-slate-400');
      state.citizenStatusFilter = e.currentTarget.getAttribute('data-status');
      renderCitizenComplaints();
    });
  });
}

// Master Render Function
function renderAll() {
  applyTranslations();
  renderRepresentativesCard();
  renderInfluencerPicks();
  renderCitizenComplaints();
  renderOfficialDashboard();
  initLucideIcons();
}
