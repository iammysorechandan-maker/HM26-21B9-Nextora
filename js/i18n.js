// i18n.js - Kannada and English Localization Dictionary

const TRANSLATIONS = {
  en: {
    // Brand & Header
    brandName: "Mysuru Macchegalu",
    brandSubtitle: "Civic Governance & Accountability Portal",
    tagline: "namma mysuru, namma kartavya",
    citizenPortal: "Citizen Portal",
    officialPortal: "Officials Portal",
    toggleLanguage: "ಕನ್ನಡ",
    lightMode: "Light Mode",
    darkMode: "Dark Mode",
    
    // Citizen Portal
    citizenGreeting: "Welcome to Mysuru Macchegalu",
    citizenSubtitle: "A Greater Mysuru civic initiative. Report issues, get direct representative allotment, and hold authorities accountable.",
    representativeCardTitle: "Your Designated Elected Representatives & Ward Engineers",
    representativeCardDesc: "Automatically mapped based on your registered Ward & Locality under Greater Mysuru Corporation",
    mpLabel: "Member of Parliament (Lok Sabha)",
    mlaLabel: "Member of Legislative Assembly (MLA)",
    aeeLabel: "Ward Assistant Executive Engineer (AEE)",
    officePhone: "Official Contact",
    addressLocality: "Constituency Coverage",
    changeWardBtn: "Update Ward / Profile",
    
    // Citizen Stats & Actions
    fileComplaintBtn: "Register New Complaint",
    activeComplaints: "Active Complaints",
    resolvedComplaints: "Resolved Issues",
    totalInfluencerVotes: "Community Votes Cast",
    
    // Influencer's Pick
    influencersPickTitle: "Influencer's Pick",
    influencersPickSubtitle: "Civic activists & Mysuru influencers spotlighting neglected emergencies. Upvote to escalate community priority!",
    upvotedText: "Upvoted",
    upvoteBtn: "Upvote Issue",
    daysPending: "days unaddressed",
    verifiedBadge: "Verified Activist",
    
    // Complaints List
    recentComplaintsTitle: "My Registered Complaints",
    allComplaintsTitle: "Constituency Complaints Tracker",
    statusAll: "All Complaints",
    statusPending: "Pending Review",
    statusAssigned: "Officer Allotted",
    statusInProgress: "In Progress",
    statusResolved: "Resolved",
    staleBadge: "Critical: Stale (> 20 Days)",
    staleWarning: "Attention: This grievance has crossed 20 days without resolution!",
    allottedOfficerTitle: "Allotted Field Officer",
    targetDeadline: "Target Completion Date",
    contactOfficer: "Call Officer",
    noComplaints: "No complaints found in this category.",
    viewDetails: "View Details",
    
    // Modal: Register Complaint
    modalTitle: "File a Public Grievance",
    modalSubtitle: "Your complaint will be automatically notified to your Ward AEE, MLA, and MP.",
    labelCategory: "Grievance Category",
    labelTitle: "Issue Headline / Summary",
    titlePlaceholder: "e.g., Massive pothole near 8th Main signal causing accidents",
    labelWard: "Select Ward Number",
    labelAddress: "Specific Address / Landmark",
    addressPlaceholder: "e.g., In front of Post Office, 3rd Cross, Kuvempunagar",
    labelDescription: "Detailed Description of the Problem",
    descPlaceholder: "Describe how long this issue has persisted, how it affects residents, and specific hazards...",
    labelPhoto: "Attach Photo / Evidence (Optional)",
    photoHint: "Add photos of road damage, sewage leak, or garbage",
    labelCitizenName: "Your Full Name",
    labelCitizenPhone: "Your Mobile Number (for SMS tracking)",
    submitComplaintBtn: "Submit Complaint to MCC",
    cancelBtn: "Cancel",

    // Profile Modal
    profileModalTitle: "Update Your Citizen Ward & Address",
    profileModalSubtitle: "Setting your ward accurately connects you with your local MLA and Ward Engineer.",
    saveProfileBtn: "Save & Auto-Map Representatives",
    
    // Official Portal
    officialPortalTitle: "Greater Mysuru Municipal & Legislative Action Center",
    officialSubtitle: "Official monitoring portal for MCC Commissioners, Ward Engineers, and MLA/MP Secretariats.",
    filterConstituency: "Filter by Constituency",
    allConstituencies: "All Mysuru Constituencies",
    
    // Official Metrics
    metricTotal: "Total Grievances",
    metricPending: "Pending Action",
    metricStale: "Stale (> 20 Days)",
    metricStaleDesc: "Urgent Escalation Required",
    metricResolved: "Successfully Resolved",
    metricRate: "Resolution Rate",
    
    // Official Actions
    officialsQueueTitle: "Constituency Action Queue",
    filterAll: "All",
    filterStaleOnly: "Critical (> 20 Days)",
    filterPending: "Pending",
    filterResolved: "Resolved",
    assignOfficerBtn: "Assign / Update Officer",
    tableColId: "Complaint ID",
    tableColIssue: "Issue & Category",
    tableColWard: "Ward / Area",
    tableColAge: "Age (Days)",
    tableColStatus: "Current Status",
    tableColOfficer: "Assigned Officer & Deadline",
    tableColAction: "Action",
    
    // Modal: Assign Officer
    assignModalTitle: "Allot Field Officer & Set Deadline",
    assignModalSubtitle: "Provide mandatory officer contact data and time allotted for completion.",
    labelOfficerName: "Designated Field Officer Name",
    officerNamePlaceholder: "e.g., M. N. Srinivas (AEE Civil)",
    labelOfficerPhone: "Officer Official Mobile Number",
    officerPhonePlaceholder: "e.g., +91 94808 33402",
    labelOfficerDept: "Department / Section",
    deptPlaceholder: "e.g., MCC Zone 5 Engineering / VVWW",
    labelDeadline: "Allotted Completion Deadline Date",
    labelStatus: "Update Status",
    labelInternalNotes: "Action Plan / Work Order Notes",
    notesPlaceholder: "e.g., Jetting suction unit dispatched; asphalt batch mix ordered.",
    saveAllotmentBtn: "Confirm Allotment & Notify Citizen",
    
    // Footer
    footerGovtNote: "Greater Mysuru Public Accountability & Transparency Framework",
    footerCopyright: "Mysuru Macchegalu © 2026. Empowering citizens through open civic engagement."
  },
  
  kn: {
    // Brand & Header
    brandName: "ಮೈಸೂರು ಮಚ್ಚೆಗಳು",
    brandSubtitle: "ನಾಗರಿಕ ಆಡಳಿತ ಮತ್ತು ಹೊಣೆಗಾರಿಕೆ ವೇದಿಕೆ",
    tagline: "ನಮ್ಮ ಮೈಸೂರು, ನಮ್ಮ ಕರ್ತವ್ಯ",
    citizenPortal: "ನಾಗರಿಕರ ಪೋರ್ಟಲ್",
    officialPortal: "ಅಧಿಕಾರಿಗಳ ಪೋರ್ಟಲ್",
    toggleLanguage: "English",
    lightMode: "ಬೆಳಕಿನ ಮೋಡ್",
    darkMode: "ಕತ್ತಲೆಯ ಮೋಡ್",
    
    // Citizen Portal
    citizenGreeting: "ಮೈಸೂರು ಮಚ್ಚೆಗಳು ತಾಣಕ್ಕೆ ಸುಸ್ವಾಗತ",
    citizenSubtitle: "ಬೃಹತ್ ಮೈಸೂರು ಮಹಾನಗರ ಪಾಲಿಕೆ ನಾಗರಿಕ ಉಪಕ್ರಮ. ಸಮಸ್ಯೆಗಳನ್ನು ವರದಿ ಮಾಡಿ, ಶಾಸಕರು ಮತ್ತು ಸಂಸದರ ವಿವರಗಳನ್ನು ತಕ್ಷಣ ಪಡೆಯಿರಿ.",
    representativeCardTitle: "ನಿಮ್ಮ ಚುನಾಯಿತ ಜನಪ್ರತಿನಿಧಿಗಳು ಮತ್ತು ವಾರ್ಡ್ ಇಂಜಿನಿಯರ್‌ಗಳು",
    representativeCardDesc: "ನಿಮ್ಮ ನೋಂದಾಯಿತ ವಾರ್ಡ್ ಮತ್ತು ಬಡಾವಣೆಯ ಆಧಾರದ ಮೇಲೆ ಸ್ವಯಂಚಾಲಿತವಾಗಿ ಹಂಚಿಕೆಯಾಗಿದೆ",
    mpLabel: "ಲೋಕಸಭಾ ಸದಸ್ಯರು (ಸಂಸದರು - MP)",
    mlaLabel: "ವಿಧಾನಸಭಾ ಸದಸ್ಯರು (ಶಾಸಕರು - MLA)",
    aeeLabel: "ವಾರ್ಡ್ ಸಹಾಯಕ ಕಾರ್ಯಪಾಲಕ ಅಭಿಯಂತರರು (AEE)",
    officePhone: "ಅಧಿಕೃತ ದೂರವಾಣಿ",
    addressLocality: "ಕ್ಷೇತ್ರದ ವ್ಯಾಪ್ತಿ",
    changeWardBtn: "ವಾರ್ಡ್ / ಪ್ರೊಫೈಲ್ ಬದಲಾಯಿಸಿ",
    
    // Citizen Stats & Actions
    fileComplaintBtn: "ಹೊಸ ದೂರು ದಾಖಲಿಸಿ",
    activeComplaints: "ಸಕ್ರಿಯ ದೂರುಗಳು",
    resolvedComplaints: "ಪರಿಹರಿಸಲಾದ ಸಮಸ್ಯೆಗಳು",
    totalInfluencerVotes: "ಚಲಾಯಿಸಲಾದ ಮತಗಳು",
    
    // Influencer's Pick
    influencersPickTitle: "ಪ್ರಭಾವಿಗಳ ಆಯ್ಕೆ (Influencer's Pick)",
    influencersPickSubtitle: "ನಾಗರಿಕ ಕಾರ್ಯಕರ್ತರು ಮತ್ತು ಮೈಸೂರಿನ ಪ್ರಭಾವಿಗಳು ಬೆಳಕಿಗೆ ತಂದ ಗಂಭೀರ ಸಮಸ್ಯೆಗಳು. ಧ್ವನಿ ಎತ್ತಲು ಮತ ನೀಡಿ!",
    upvotedText: "ಮತ ಚಲಾಯಿಸಲಾಗಿದೆ",
    upvoteBtn: "ಬೆಂಬಲಿಸಿ / ಮತ ನೀಡಿ",
    daysPending: "ದಿನಗಳಿಂದ ಬಾಕಿ ಉಳಿದಿದೆ",
    verifiedBadge: "ದೃಢೀಕೃತ ಕಾರ್ಯಕರ್ತ",
    
    // Complaints List
    recentComplaintsTitle: "ನನ್ನ ನೋಂದಾಯಿತ ದೂರುಗಳು",
    allComplaintsTitle: "ಕ್ಷೇತ್ರವಾರು ದೂರುಗಳ ಸ್ಥಿತಿ",
    statusAll: "ಎಲ್ಲಾ ದೂರುಗಳು",
    statusPending: "ಪರಿಶೀಲನೆಯಲ್ಲಿದೆ",
    statusAssigned: "ಅಧಿಕಾರಿ ನಿಯೋಜಿಸಲಾಗಿದೆ",
    statusInProgress: "ಕಾಮಗಾರಿ ಪ್ರಗತಿಯಲ್ಲಿದೆ",
    statusResolved: "ಪರಿಹರಿಸಲಾಗಿದೆ",
    staleBadge: "ಎಚ್ಚರಿಕೆ: ಬಾಕಿ (> ೨೦ ದಿನಗಳು)",
    staleWarning: "ಗಮನಿಸಿ: ಈ ಸಮಸ್ಯೆಯನ್ನು ದಾಖಲಿಸಿ ೨೦ಕ್ಕೂ ಹೆಚ್ಚು ದಿನಗಳು ಕಳೆದರೂ ಪರಿಹಾರವಾಗಿಲ್ಲ!",
    allottedOfficerTitle: "ನಿಯೋಜಿತ ಕ್ಷೇತ್ರಾಧಿಕಾರಿ",
    targetDeadline: "ಕಾಮಗಾರಿ ಪೂರ್ಣಗೊಳಿಸುವ ಗಡುವು",
    contactOfficer: "ಅಧಿಕಾರಿಗೆ ಕರೆ ಮಾಡಿ",
    noComplaints: "ಈ ವಿಭಾಗದಲ್ಲಿ ಯಾವುದೇ ದೂರುಗಳಿಲ್ಲ.",
    viewDetails: "ವಿವರಗಳನ್ನು ನೋಡಿ",
    
    // Modal: Register Complaint
    modalTitle: "ಸಾರ್ವಜನಿಕ ದೂರು ದಾಖಲಿಸಿ",
    modalSubtitle: "ನಿಮ್ಮ ದೂರನ್ನು ತಕ್ಷಣವೇ ನಿಮ್ಮ ವಾರ್ಡ್ AEE, ಶಾಸಕರು ಮತ್ತು ಸಂಸದರ ಗಮನಕ್ಕೆ ತರಲಾಗುವುದು.",
    labelCategory: "ದೂರಿನ ವರ್ಗ",
    labelTitle: "ಸಮಸ್ಯೆಯ ಸಾರಾಂಶ / ಶೀರ್ಷಿಕೆ",
    titlePlaceholder: "ಉದಾಹರಣೆಗೆ: ೮ನೇ ಮುಖ್ಯರಸ್ತೆಯಲ್ಲಿ ಬೃಹತ್ ಗುಂಡಿ ಬಿದ್ದಿದ್ದು ಅಪಘಾತಗಳು ಸಂಭವಿಸುತ್ತಿವೆ",
    labelWard: "ವಾರ್ಡ್ ಸಂಖ್ಯೆಯನ್ನು ಆರಿಸಿ",
    labelAddress: "ಖಚಿತ ವಿಳಾಸ / ಗುರುತು (ಲ್ಯಾಂಡ್‌ಮಾರ್ಕ್)",
    addressPlaceholder: "ಉದಾಹರಣೆಗೆ: ಅಂಚೆ ಕಚೇರಿ ಎದುರು, ೩ನೇ ಕ್ರಾಸ್, ಕುವೆಂಪುನಗರ",
    labelDescription: "ಸಮಸ್ಯೆಯ ವಿವರವಾದ ವಿವರಣೆ",
    descPlaceholder: "ಸಮಸ್ಯೆ ಎಷ್ಟು ದಿನಗಳಿಂದ ಇದೆ ಮತ್ತು ಸಾರ್ವಜನಿಕರಿಗೆ ಯಾವ ರೀತಿಯ ತೊಂದರೆಯಾಗುತ್ತಿದೆ ಎಂಬುದನ್ನು ವಿವರಿಸಿ...",
    labelPhoto: "ಫೋಟೋ / ಸಾಕ್ಷ್ಯ ಲಗತ್ತಿಸಿ (ಐಚ್ಛಿಕ)",
    photoHint: "ಗುಂಡಿ, ಚರಂಡಿ ಉಕ್ಕಿ ಹರಿಯುವುದು ಅಥವಾ ಕಸದ ರಾಶಿಯ ಫೋಟೋ ಸೇರಿಸಿ",
    labelCitizenName: "ನಿಮ್ಮ ಪೂರ್ಣ ಹೆಸರು",
    labelCitizenPhone: "ನಿಮ್ಮ ಮೊಬೈಲ್ ಸಂಖ್ಯೆ (SMS ಟ್ರ್ಯಾಕಿಂಗ್‌ಗಾಗಿ)",
    submitComplaintBtn: "ದೂರನ್ನು ಪಾಲಿಕೆಗೆ ಸಲ್ಲಿಸಿ",
    cancelBtn: "ರದ್ದುಮಾಡಿ",

    // Profile Modal
    profileModalTitle: "ನಿಮ್ಮ ವಾರ್ಡ್ ಮತ್ತು ವಿಳಾಸವನ್ನು ನವೀಕರಿಸಿ",
    profileModalSubtitle: "ನಿಮ್ಮ ವಾರ್ಡ್ ಆಯ್ಕೆ ಮಾಡುವುದರಿಂದ ನಿಮ್ಮ ಕ್ಷೇತ್ರದ ಶಾಸಕರು ಮತ್ತು ಅಧಿಕಾರಿಗಳು ಸ್ವಯಂಚಾಲಿತವಾಗಿ ನಿಗದಿಯಾಗುತ್ತಾರೆ.",
    saveProfileBtn: "ಉಳಿಸಿ ಮತ್ತು ಪ್ರತಿನಿಧಿಗಳನ್ನು ನಿಗದಿಪಡಿಸಿ",
    
    // Official Portal
    officialPortalTitle: "ಬೃಹತ್ ಮೈಸೂರು ಮಹಾನಗರ ಪಾಲಿಕೆ ಹಾಗೂ ಶಾಸಕರ ಕಾರ್ಯನಿರ್ವಹಣಾ ಕೇಂದ್ರ",
    officialSubtitle: "ಪಾಲಿಕೆ ಆಯುಕ್ತರು, ವಾರ್ಡ್ ಅಭಿಯಂತರರು ಮತ್ತು ಶಾಸಕ/ಸಂಸದರ ಕಚೇರಿಯ ಅಧಿಕೃತ ಮೇಲ್ವಿಚಾರಣಾ ವ್ಯವಸ್ಥೆ.",
    filterConstituency: "ಕ್ಷೇತ್ರದ ಪ್ರಕಾರ ಫಿಲ್ಟರ್ ಮಾಡಿ",
    allConstituencies: "ಮೈಸೂರಿನ ಎಲ್ಲಾ ವಿಧಾನಸಭಾ ಕ್ಷೇತ್ರಗಳು",
    
    // Official Metrics
    metricTotal: "ಒಟ್ಟು ನೋಂದಾಯಿತ ದೂರುಗಳು",
    metricPending: "ಬಾಕಿ ಉಳಿದ ದೂರುಗಳು",
    metricStale: "ಗಂಭೀರ ಬಾಕಿ (> ೨೦ ದಿನಗಳು)",
    metricStaleDesc: "ತಕ್ಷಣದ ಕ್ರಮ ಅಗತ್ಯವಿದೆ",
    metricResolved: "ಪರಿಹರಿಸಲಾದ ದೂರುಗಳು",
    metricRate: "ಪರಿಹಾರ ದರ",
    
    // Official Actions
    officialsQueueTitle: "ದೂರುಗಳ ಪರಿಶೀಲನೆ ಮತ್ತು ನಿಯೋಜನೆ ಪಟ್ಟಿ",
    filterAll: "ಎಲ್ಲಾ",
    filterStaleOnly: "ಗಂಭೀರ ಬಾಕಿ (> ೨೦ ದಿನ)",
    filterPending: "ಬಾಕಿ ಇರುವವು",
    filterResolved: "ಪರಿಹರಿಸಲಾದವು",
    assignOfficerBtn: "ಅಧಿಕಾರಿಯನ್ನು ನಿಯೋಜಿಸಿ",
    tableColId: "ದೂರು ಸಂಖ್ಯೆ",
    tableColIssue: "ಸಮಸ್ಯೆ ಮತ್ತು ವರ್ಗ",
    tableColWard: "ವಾರ್ಡ್ / ಪ್ರದೇಶ",
    tableColAge: "ದಿನಗಳು",
    tableColStatus: "ಪ್ರಸ್ತುತ ಸ್ಥಿತಿ",
    tableColOfficer: "ನಿಯೋಜಿತ ಅಧಿಕಾರಿ ಮತ್ತು ಗಡುವು",
    tableColAction: "ಕ್ರಮ",
    
    // Modal: Assign Officer
    assignModalTitle: "ಕ್ಷೇತ್ರಾಧಿಕಾರಿಯನ್ನು ನಿಯೋಜಿಸಿ ಮತ್ತು ಗಡುವು ನಿಗದಿಪಡಿಸಿ",
    assignModalSubtitle: "ಅಧಿಕಾರಿಯ ಹೆಸರು, ಮೊಬೈಲ್ ಸಂಖ್ಯೆ ಮತ್ತು ಕಾಮಗಾರಿ ಪೂರ್ಣಗೊಳಿಸಲು ನೀಡಿದ ಗಡುವನ್ನು ನಮೂದಿಸಿ.",
    labelOfficerName: "ನಿಯೋಜಿತ ಅಧಿಕಾರಿಯ ಹೆಸರು",
    officerNamePlaceholder: "ಉದಾಹರಣೆಗೆ: ಎಂ. ಎನ್. ಶ್ರೀನಿವಾಸ್ (AEE ಸಿವಿಲ್)",
    labelOfficerPhone: "ಅಧಿಕಾರಿಯ ಅಧಿಕೃತ ಮೊಬೈಲ್ ಸಂಖ್ಯೆ",
    officerPhonePlaceholder: "ಉದಾಹರಣೆಗೆ: +91 94808 33402",
    labelOfficerDept: "ಇಲಾಖೆ / ವಲಯ",
    deptPlaceholder: "ಉದಾಹರಣೆಗೆ: ಪಾಲಿಕೆ ವಲಯ ೫ / ವಾಣಿ ವಿಲಾಸ ನೀರು ಸರಬರಾಜು",
    labelDeadline: "ಕಾಮಗಾರಿ ಪೂರ್ಣಗೊಳಿಸುವ ಅಂತಿಮ ದಿನಾಂಕ",
    labelStatus: "ಸ್ಥಿತಿಯನ್ನು ನವೀಕರಿಸಿ",
    labelInternalNotes: "ಕ್ರಿಯಾ ಯೋಜನೆ / ಟಿಪ್ಪಣಿ",
    notesPlaceholder: "ಉದಾಹರಣೆಗೆ: ಜೆಟ್ಟಿಂಗ್ ಯಂತ್ರ ಕಳುಹಿಸಲಾಗಿದೆ; ಡಾಂಬರು ಕಾಮಗಾರಿ ಅನುಮೋದಿಸಲಾಗಿದೆ.",
    saveAllotmentBtn: "ನಿಯೋಜನೆಯನ್ನು ದೃಢೀಕರಿಸಿ ಮತ್ತು ನಾಗರಿಕರಿಗೆ ತಿಳಿಸಿ",
    
    // Footer
    footerGovtNote: "ಬೃಹತ್ ಮೈಸೂರು ಸಾರ್ವಜನಿಕ ಹೊಣೆಗಾರಿಕೆ ಮತ್ತು ಪಾರದರ್ಶಕತೆಯ ಡಿಜಿಟಲ್ ವೇದಿಕೆ",
    footerCopyright: "ಮೈಸೂರು ಮಚ್ಚೆಗಳು © ೨೦೨೬. ಸ್ವಚ್ಛ ಮತ್ತು ಸಮೃದ್ಧ ಮೈಸೂರಿಗಾಗಿ ನಾಗರಿಕ ಶಕ್ತಿ."
  }
};

if (typeof window !== 'undefined') {
  window.MMC_I18N = { TRANSLATIONS };
}
