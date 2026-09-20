// data.js - Data source for Mysuru Macchegalu

const MYSURU_REPRESENTATIVES = {
  MP: {
    name: "Yaduveer Krishnadatta Chamaraja Wadiyar",
    name_kn: "ಯದುವೀರ ಕೃಷ್ಣದತ್ತ ಚಾಮರಾಜ ಒಡೆಯರ್",
    constituency: "Mysuru-Kodagu Lok Sabha",
    constituency_kn: "ಮೈಸೂರು-ಕೊಡಗು ಲೋಕಸಭಾ ಕ್ಷೇತ್ರ",
    office: "Jaganmohan Palace / MP Office, Mysuru",
    phone: "+91 821 242 3000",
    email: "mp.mysuru@parliament.nic.in"
  },
  CONSTITUENCIES: {
    KR: {
      id: "KR",
      name: "Krishnaraja (KR)",
      name_kn: "ಕೃಷ್ಣರಾಜ",
      mla: "T. S. Srivatsa",
      mla_kn: "ಟಿ. ಎಸ್. ಶ್ರೀವತ್ಸ",
      mlaPhone: "+91 94480 56789",
      mlaOffice: "KR Constituency Office, Kuvempunagar, Mysuru",
      wards: [42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55],
      notableAreas: "Kuvempunagar, Ashokapuram, Saraswathipuram, Vidyaranyapuram, Ballal Circle, Ramakrishnanagar"
    },
    CHAMARAJA: {
      id: "CHAMARAJA",
      name: "Chamaraja",
      name_kn: "ಚಾಮರಾಜ",
      mla: "K. Harish Gowda",
      mla_kn: "ಕೆ. ಹರೀಶ್ ಗೌಡ",
      mlaPhone: "+91 98451 23456",
      mlaOffice: "Chamaraja MLA Liaison Office, Vontikoppal, Mysuru",
      wards: [16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30],
      notableAreas: "Gokulam, Jayalakshmipuram, Vontikoppal, Vijayanagar 1st-4th Stages, Yadavagiri, Brindavan Extension"
    },
    NR: {
      id: "NR",
      name: "Narasimharaja (NR)",
      name_kn: "ನರಸಿಂಹರಾಜ",
      mla: "Tanveer Sait",
      mla_kn: "ತನ್ವೀರ್ ಸೇಠ್",
      mlaPhone: "+91 98450 11223",
      mlaOffice: "NR MLA Secretariat, Bannimantap, Mysuru",
      wards: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15],
      notableAreas: "Bannimantap, Mandi Mohalla, Udayagiri, Shivarampet, Subhashnagar, Tilaknagar, Kesare"
    },
    CHAMUNDESHWARI: {
      id: "CHAMUNDESHWARI",
      name: "Chamundeshwari (Greater Mysuru)",
      name_kn: "ಚಾಮುಂಡೇಶ್ವರಿ (ಬೃಹತ್ ಮೈಸೂರು)",
      mla: "G. T. Devegowda",
      mla_kn: "ಜಿ. ಟಿ. ದೇವೇಗೌಡ",
      mlaPhone: "+91 94482 99887",
      mlaOffice: "Chamundeshwari Office, Hootagalli / Bogadi Main Rd, Mysuru",
      wards: [56, 57, 58, 59, 60, 61, 62, 63, 64, 65],
      notableAreas: "Bogadi, Hootagalli CMC, Ilavala, Koorgalli, Srirampura, Roopa Nagar, Dattagalli, MUDA Layouts"
    }
  }
};

const MYSURU_WARDS = [
  // Krishnaraja Wards
  { wardNo: 42, name: "Ashokapuram North", name_kn: "ಅಶೋಕಪುರಂ ಉತ್ತರ", constituencyId: "KR", aeeName: "R. Chethan Kumar", aeePhone: "+91 94808 33401" },
  { wardNo: 43, name: "Saraswathipuram", name_kn: "ಸರಸ್ವತೀಪುರಂ", constituencyId: "KR", aeeName: "R. Chethan Kumar", aeePhone: "+91 94808 33401" },
  { wardNo: 44, name: "Kuvempunagar Central", name_kn: "ಕುವೆಂಪುನಗರ ಕೇಂದ್ರ", constituencyId: "KR", aeeName: "M. N. Srinivas", aeePhone: "+91 94808 33402" },
  { wardNo: 45, name: "Kuvempunagar M-Block", name_kn: "ಕುವೆಂಪುನಗರ ಎಂ-ಬ್ಲಾಕ್", constituencyId: "KR", aeeName: "M. N. Srinivas", aeePhone: "+91 94808 33402" },
  { wardNo: 46, name: "Vidyaranyapuram", name_kn: "ವಿದ್ಯಾರಣ್ಯಪುರಂ", constituencyId: "KR", aeeName: "S. Manjunath", aeePhone: "+91 94808 33403" },
  { wardNo: 47, name: "J.P. Nagar", name_kn: "ಜೆ.ಪಿ. ನಗರ", constituencyId: "KR", aeeName: "S. Manjunath", aeePhone: "+91 94808 33403" },
  { wardNo: 48, name: "Krishnamurthypuram", name_kn: "ಕೃಷ್ಣಮೂರ್ತಿಪುರಂ", constituencyId: "KR", aeeName: "K. Ravishankar", aeePhone: "+91 94808 33404" },

  // Chamaraja Wards
  { wardNo: 18, name: "Gokulam 3rd Stage", name_kn: "ಗೋಕುಲಂ ೩ನೇ ಹಂತ", constituencyId: "CHAMARAJA", aeeName: "P. Gururaj", aeePhone: "+91 94808 33410" },
  { wardNo: 19, name: "Jayalakshmipuram", name_kn: "ಜಯಲಕ್ಷ್ಮೀಪುರಂ", constituencyId: "CHAMARAJA", aeeName: "P. Gururaj", aeePhone: "+91 94808 33410" },
  { wardNo: 20, name: "Vontikoppal", name_kn: "ವಂಟಿಕೊಪ್ಪಲ್", constituencyId: "CHAMARAJA", aeeName: "D. Lingaraju", aeePhone: "+91 94808 33411" },
  { wardNo: 23, name: "Vijayanagar 1st Stage", name_kn: "ವಿಜಯನಗರ ೧ನೇ ಹಂತ", constituencyId: "CHAMARAJA", aeeName: "D. Lingaraju", aeePhone: "+91 94808 33411" },
  { wardNo: 24, name: "Vijayanagar 2nd Stage", name_kn: "ವಿಜಯನಗರ ೨ನೇ ಹಂತ", constituencyId: "CHAMARAJA", aeeName: "H. Suresh Babu", aeePhone: "+91 94808 33412" },
  { wardNo: 27, name: "Yadavagiri", name_kn: "ಯಾದವಗಿರಿ", constituencyId: "CHAMARAJA", aeeName: "H. Suresh Babu", aeePhone: "+91 94808 33412" },

  // Narasimharaja Wards
  { wardNo: 5, name: "Bannimantap Extension", name_kn: "ಬನ್ನಿಮಂಟಪ ಬಡಾವಣೆ", constituencyId: "NR", aeeName: "Mohd. Shakeel", aeePhone: "+91 94808 33420" },
  { wardNo: 8, name: "Udayagiri South", name_kn: "ಉದಯಗಿರಿ ದಕ್ಷಿಣ", constituencyId: "NR", aeeName: "Mohd. Shakeel", aeePhone: "+91 94808 33420" },
  { wardNo: 11, name: "Mandi Mohalla", name_kn: "ಮಂಡಿ ಮೊಹಲ್ಲಾ", constituencyId: "NR", aeeName: "T. Shivakumar", aeePhone: "+91 94808 33421" },
  { wardNo: 12, name: "Shivarampet", name_kn: "ಶಿವರಾಂಪೇಟೆ", constituencyId: "NR", aeeName: "T. Shivakumar", aeePhone: "+91 94808 33421" },

  // Chamundeshwari (Greater Mysuru Expansion Wards)
  { wardNo: 56, name: "Bogadi 2nd Stage (Greater Mysuru)", name_kn: "ಬೋಗಾದಿ ೨ನೇ ಹಂತ (ಬೃಹತ್ ಮೈಸೂರು)", constituencyId: "CHAMUNDESHWARI", aeeName: "B. Mahadevaswamy", aeePhone: "+91 94808 33430" },
  { wardNo: 58, name: "Hootagalli Industrial & Resi.", name_kn: "ಹೂಟಗಳ್ಳಿ", constituencyId: "CHAMUNDESHWARI", aeeName: "B. Mahadevaswamy", aeePhone: "+91 94808 33430" },
  { wardNo: 60, name: "Dattagalli / MUDA Layout", name_kn: "ದತ್ತಗಳ್ಳಿ / ಮುಡಾ ಬಡಾವಣೆ", constituencyId: "CHAMUNDESHWARI", aeeName: "G. Puttaswamy", aeePhone: "+91 94808 33431" },
  { wardNo: 62, name: "Srirampura Town Area", name_kn: "ಶ್ರೀರಾಂಪುರ", constituencyId: "CHAMUNDESHWARI", aeeName: "G. Puttaswamy", aeePhone: "+91 94808 33431" }
];

function getDaysElapsed(dateStr) {
  const created = new Date(dateStr);
  const now = new Date();
  const diffTime = Math.abs(now - created);
  return Math.floor(diffTime / (1000 * 60 * 60 * 24));
}

const INITIAL_COMPLAINTS = [
  {
    id: "MMC-2024-0101",
    title: "Caving Ring Road & Potholes near Bogadi Signal",
    title_kn: "ಬೋಗಾದಿ ಸಿಗ್ನಲ್ ಬಳಿ ಕುಸಿಯುತ್ತಿರುವ ರಿಂಗ್ ರಸ್ತೆ ಮತ್ತು ಬೃಹತ್ ಗುಂಡಿಗಳು",
    category: "Roads & Infrastructure",
    category_kn: "ರಸ್ತೆ ಮತ್ತು ಮೂಲಸೌಕರ್ಯ",
    wardNo: 56,
    constituencyId: "CHAMUNDESHWARI",
    address: "Bogadi Outer Ring Road Junction, near petrol pump",
    citizenName: "Darshan Gowda",
    citizenPhone: "+91 98450 44321",
    description: "Deep trenches and asphalt breakdown causing fatal accident risks every night. Expansion work left half-completed without barricades.",
    description_kn: "ರಸ್ತೆ ಮಧ್ಯೆ ಆಳವಾದ ಗುಂಡಿಗಳು ಬಿದ್ದಿದ್ದು ಪ್ರತಿದಿನ ಅಪಘಾತಗಳು ಸಂಭವಿಸುತ್ತಿವೆ. ವಿಸ್ತರಣಾ ಕಾಮಗಾರಿಯನ್ನು ಅರ್ಧಕ್ಕೆ ನಿಲ್ಲಿಸಲಾಗಿದೆ.",
    status: "Pending",
    createdAt: "2026-08-20T10:00:00Z", // 31 days old (> 20 days stale!)
    priority: "High",
    assignedOfficer: null,
    targetDate: null,
    resolutionNotes: null,
    votes: 84
  },
  {
    id: "MMC-2024-0102",
    title: "Open Drainage Overflow & Stagnation in Kuvempunagar M-Block",
    title_kn: "ಕುವೆಂಪುನಗರ ಎಂ-ಬ್ಲಾಕ್‌ನಲ್ಲಿ ತೆರೆದ ಒಳಚರಂಡಿ ನೀರು ಉಕ್ಕಿ ಹರಿಯುವುದು",
    category: "Sewage & Drainage",
    category_kn: "ಒಳಚರಂಡಿ ಮತ್ತು ನೈರ್ಮಲ್ಯ",
    wardNo: 45,
    constituencyId: "KR",
    address: "14th Cross, M-Block, near CITB Park, Kuvempunagar",
    citizenName: "Ananya Rao",
    citizenPhone: "+91 94481 77654",
    description: "Underground drainage line blocked since last month. Foul smell and dengue mosquito breeding; children unable to go out.",
    description_kn: "ಕಳೆದ ಒಂದು ತಿಂಗಳಿಂದ ಒಳಚರಂಡಿ ಉಕ್ಕಿ ರಸ್ತೆಯಲ್ಲಿ ಹರಿಯುತ್ತಿದೆ. ಸೊಳ್ಳೆಗಳ ಕಾಟ ಮತ್ತು ಡೆಂಗ್ಯೂ ಭೀತಿ ಉಂಟಾಗಿದೆ.",
    status: "Assigned",
    createdAt: "2026-08-26T14:30:00Z", // 25 days old (> 20 days stale!)
    priority: "High",
    assignedOfficer: {
      name: "M. N. Srinivas (AEE)",
      phone: "+91 94808 33402",
      allottedTime: "2026-09-25",
      department: "MCC Zone 5 Engineering"
    },
    targetDate: "2026-09-25",
    resolutionNotes: "Jetting machine scheduled for clearance.",
    votes: 112
  },
  {
    id: "MMC-2024-0103",
    title: "Non-functional Streetlights on Gokulam 3rd Stage Main Road",
    title_kn: "ಗೋಕುಲಂ ೩ನೇ ಹಂತದ ಮುಖ್ಯರಸ್ತೆಯಲ್ಲಿ ಬೀದಿದೀಪಗಳು ಬೆಳಗುತ್ತಿಲ್ಲ",
    category: "Street Lighting",
    category_kn: "ಬೀದಿದೀಪಗಳು",
    wardNo: 18,
    constituencyId: "CHAMARAJA",
    address: "Near Doctors Corner, 8th Main, Gokulam 3rd Stage",
    citizenName: "Prasad Kulkarni",
    citizenPhone: "+91 99002 33445",
    description: "Over 12 LED streetlights are dead for the past 24 days. Safety hazard for women and senior citizens during evening walks.",
    description_kn: "ಕಳೆದ ೨೪ ದಿನಗಳಿಂದ ೧೨ಕ್ಕೂ ಹೆಚ್ಚು ಬೀದಿದೀಪಗಳು ಕಾರ್ಯನಿರ್ವಹಿಸುತ್ತಿಲ್ಲ. ಸಂಜೆ ವೇಳೆ ಸಾರ್ವಜನಿಕರಿಗೆ ಸುರಕ್ಷತೆ ಇಲ್ಲದಂತಾಗಿದೆ.",
    status: "Pending",
    createdAt: "2026-08-27T18:00:00Z", // 24 days old (> 20 days stale!)
    priority: "Medium",
    assignedOfficer: null,
    targetDate: null,
    resolutionNotes: null,
    votes: 45
  },
  {
    id: "MMC-2024-0104",
    title: "Drinking Water Pipeline Leakage & Contamination in Udayagiri",
    title_kn: "ಉದಯಗಿರಿಯಲ್ಲಿ ಕುಡಿಯುವ ನೀರಿನ ಪೈಪ್‌ಲೈನ್ ಸೋರಿಕೆ ಮತ್ತು ಕಲುಷಿತ ನೀರು ಸರಬರಾಜು",
    category: "Drinking Water",
    category_kn: "ಕುಡಿಯುವ ನೀರು",
    wardNo: 8,
    constituencyId: "NR",
    address: "Udayagiri 5th Cross, near Water Tank",
    citizenName: "Syed Imran",
    citizenPhone: "+91 97410 88990",
    description: "Fresh water pipeline burst mixing with rainwater runoff. Low pressure and muddy water in houses for the past 6 days.",
    description_kn: "ಕುಡಿಯುವ ನೀರಿನ ಕೊಳವೆ ಒಡೆದು ರಸ್ತೆಯಲ್ಲಿ ನೀರು ಪೋಲಾಗುತ್ತಿದೆ ಹಾಗೂ ಮನೆಗಳಿಗೆ ಕೆಸರು ನೀರು ಬರುತ್ತಿದೆ.",
    status: "In_Progress",
    createdAt: "2026-09-14T09:15:00Z", // 6 days old
    priority: "High",
    assignedOfficer: {
      name: "Mohd. Shakeel (AEE Vani Vilas Water Works)",
      phone: "+91 94808 33420",
      allottedTime: "2026-09-22",
      department: "VVWW Mysore"
    },
    targetDate: "2026-09-22",
    resolutionNotes: "Excavation completed, pipe replacement in progress.",
    votes: 29
  },
  {
    id: "MMC-2024-0105",
    title: "Illegal Garbage Dumping in Newly Expanded Dattagalli Layout",
    title_kn: "ದತ್ತಗಳ್ಳಿ ವಿಸ್ತರಿತ ಬಡಾವಣೆಯ ಖಾಲಿ ನಿವೇಶನಗಳಲ್ಲಿ ಕಸ ಸುರಿಯುವುದು",
    category: "Solid Waste Management",
    category_kn: "ಘನತ್ಯಾಜ್ಯ ನಿರ್ವಹಣೆ",
    wardNo: 60,
    constituencyId: "CHAMUNDESHWARI",
    address: "3rd Cross, MUDA layout, Dattagalli 3rd Stage",
    citizenName: "Venkatesh Murthy",
    citizenPhone: "+91 98860 12399",
    description: "Greater Mysuru waste trucks dumping construction debris and commercial plastic waste on vacant plots right next to houses.",
    description_kn: "ಖಾಲಿ ಸೈಟುಗಳಲ್ಲಿ ಪ್ಲಾಸ್ಟಿಕ್ ಹಾಗೂ ಕಟ್ಟಡ ತ್ಯಾಜ್ಯಗಳನ್ನು ಸುರಿಯಲಾಗುತ್ತಿದೆ. ಸಾಂಕ್ರಾಮಿಕ ರೋಗ ಹರಡುವ ಭೀತಿ ಇದೆ.",
    status: "Pending",
    createdAt: "2026-09-17T11:45:00Z", // 3 days old
    priority: "Medium",
    assignedOfficer: null,
    targetDate: null,
    resolutionNotes: null,
    votes: 67
  },
  {
    id: "MMC-2024-0106",
    title: "Encroached Footpaths & Open Storm Drain on Vijayanagar Main Rd",
    title_kn: "ವಿಜಯನಗರ ಮುಖ್ಯರಸ್ತೆಯಲ್ಲಿ ಪಾದಚಾರಿ ಮಾರ್ಗ ಒತ್ತುವರಿ ಮತ್ತು ತೆರೆದ ಚರಂಡಿ",
    category: "Encroachment & Pavements",
    category_kn: "ಒತ್ತುವರಿ ಮತ್ತು ಫುಟ್‌ಪಾತ್",
    wardNo: 23,
    constituencyId: "CHAMARAJA",
    address: "Near Vijayanagar Water Tank, 1st Stage",
    citizenName: "Shwetha Mahesh",
    citizenPhone: "+91 96111 44556",
    description: "Footpath slab broke open 18 days ago. Pedestrians forced to walk on heavy traffic road.",
    description_kn: "ಪಾದಚಾರಿ ಮಾರ್ಗದ ಕಾಂಕ್ರೀಟ್ ಸ್ಲ್ಯಾಬ್ ಮುರಿದಿದ್ದು ಅಪಾಯಕಾರಿಯಾಗಿದೆ. ಸಾರ್ವಜನಿಕರು ರಸ್ತೆಯಲ್ಲೇ ನಡೆಯಬೇಕಾಗಿದೆ.",
    status: "Resolved",
    createdAt: "2026-08-30T16:20:00Z",
    priority: "High",
    assignedOfficer: {
      name: "D. Lingaraju (Ward Engineer)",
      phone: "+91 94808 33411",
      allottedTime: "2026-09-12",
      department: "MCC Public Works"
    },
    targetDate: "2026-09-12",
    resolutionNotes: "Reinforced cement slabs reinstalled and encroaching boards removed on Sept 12.",
    votes: 38
  }
];

const INFLUENCER_PICKS = [
  {
    id: "INF-01",
    influencerName: "Heritage Mysuru Voice (@heritagemysuru)",
    influencerName_kn: "ಹೆರಿಟೇಜ್ ಮೈಸೂರು ವಾಯ್ಸ್ (@heritagemysuru)",
    influencerHandle: "@heritagemysuru",
    followers: "128K Followers",
    badge: "Verified Civic Activist",
    badge_kn: "ದೃಢೀಕೃತ ನಾಗರಿಕ ಕಾರ್ಯಕರ್ತ",
    title: "Historic Lansdowne Building & Devaraja Market Buffer Zone Dilapidation",
    title_kn: "ಐತಿಹಾಸಿಕ ಲ್ಯಾನ್ಸ್‌ಡೌನ್ ಕಟ್ಟಡ ಮತ್ತು ದೇವರಾಜ ಮಾರುಕಟ್ಟೆ ವಲಯದ ದುಸ್ಥಿತಿ",
    description: "Greater Mysuru policy is ignoring heritage precinct maintenance. Leaking stormwater drain will cause historic arches to collapse if urgent civil repair is not initiated.",
    description_kn: "ಬೃಹತ್ ಮೈಸೂರು ವಿಸ್ತರಣೆಯ ಭರಾಟೆಯಲ್ಲಿ ಪಾರಂಪರಿಕ ಕಟ್ಟಡಗಳ ಸಂರಕ್ಷಣೆ ಸಂಪೂರ್ಣ ಕಡೆಗಣಿಸಲ್ಪಟ್ಟಿದೆ. ತಕ್ಷಣ ದುರಸ್ತಿ ಕೈಗೊಳ್ಳದಿದ್ದರೆ ಗೋಡೆಗಳು ಕುಸಿಯುವ ಅಪಾಯವಿದೆ.",
    constituencyId: "CHAMARAJA",
    wardNo: 27,
    urgencyDays: 32,
    votes: 1420,
    tags: ["#SaveHeritageMysuru", "#GreaterMysuruAccountability", "#MCCNotice"]
  },
  {
    id: "INF-02",
    influencerName: "Mysuru Mitra Reels (@nammamaysooru)",
    influencerName_kn: "ಮೈಸೂರು ಮಿತ್ರ ರೀಲ್ಸ್ (@nammamaysooru)",
    influencerHandle: "@nammamaysooru",
    followers: "245K Followers",
    badge: "Popular Mysuru Creator",
    badge_kn: "ಖ್ಯಾತ ಮೈಸೂರು ಕ್ರಿಯೇಟರ್",
    title: "Outer Ring Road Heavy Vehicle Menace & Lack of High-Mast Lights near Hootagalli",
    title_kn: "ಹೂಟಗಳ್ಳಿ ಬಳಿ ರಿಂಗ್ ರಸ್ತೆಯಲ್ಲಿ ಭಾರೀ ವಾಹನಗಳ ದಟ್ಟಣೆ ಮತ್ತು ಹೈಮಾಸ್ಟ್ ದೀಪಗಳ ಕೊರತೆ",
    description: "3 fatal accidents reported in the last 15 days due to absolute pitch darkness on the Greater Mysuru junction. We demand high-mast lights and speed radar immediately!",
    description_kn: "ಕಳೆದ ೧೫ ದಿನಗಳಲ್ಲಿ ಕತ್ತಲಿನ ಕಾರಣ ೩ ಭೀಕರ ಅಪಘಾತಗಳು ನಡೆದಿವೆ. ಕೂಡಲೇ ಹೈಮಾಸ್ಟ್ ಲೈಟ್‌ಗಳು ಮತ್ತು ಸ್ಪೀಡ್ ಬ್ರೇಕರ್‌ಗಳನ್ನು ಅಳವಡಿಸಬೇಕು.",
    constituencyId: "CHAMUNDESHWARI",
    wardNo: 58,
    urgencyDays: 28,
    votes: 2890,
    tags: ["#RingRoadSafety", "#HootagalliJunction", "#ActionNow"]
  },
  {
    id: "INF-03",
    influencerName: "Clean Kuvempunagar Forum (@kuvempunagar_voice)",
    influencerName_kn: "ಕ್ಲೀನ್ ಕುವೆಂಪುನಗರ ವೇದಿಕೆ (@kuvempunagar_voice)",
    influencerHandle: "@kuvempunagar_voice",
    followers: "54K Followers",
    badge: "Ward Action Group",
    badge_kn: "ವಾರ್ಡ್ ಕ್ರಿಯಾ ವೇದಿಕೆ",
    title: "Neglected Underground Drainage Contaminating Kukkarahalli Lake Feeder Canal",
    title_kn: "ಕುಕ್ಕರಹಳ್ಳಿ ಕೆರೆಗೆ ಕೊಳಚೆ ನೀರು ಸೇರುತ್ತಿರುವುದು: ಕಾಲುವೆ ಶುದ್ಧೀಕರಣಕ್ಕೆ ಆಗ್ರಹ",
    description: "Sewage overflow from Paduvarahalli and Saraswathipuram is seeping into the primary feeder channel of Kukkarahalli Lake. The ecological lifeline of Mysuru is in danger.",
    description_kn: "ಸರಸ್ವತೀಪುರಂ ಹಾಗೂ ಪಡುವಾರಹಳ್ಳಿಯ ಚರಂಡಿ ಕೊಳಚೆ ನೀರು ಕುಕ್ಕರಹಳ್ಳಿ ಕೆರೆಗೆ ಸೇರುತ್ತಿದ್ದು, ಜಲಚರಗಳು ಹಾಗೂ ಪಕ್ಷಿ ಸಂಕುಲ ಸಂಕಷ್ಟದಲ್ಲಿದೆ.",
    constituencyId: "KR",
    wardNo: 43,
    urgencyDays: 21,
    votes: 1985,
    tags: ["#SaveKukkarahalliLake", "#MysuruEcology", "#ZeroSewage"]
  }
];

// Attach to window for standalone execution
if (typeof window !== 'undefined') {
  window.MMC_DATA = {
    MYSURU_REPRESENTATIVES,
    MYSURU_WARDS,
    INITIAL_COMPLAINTS,
    INFLUENCER_PICKS,
    getDaysElapsed
  };
}
