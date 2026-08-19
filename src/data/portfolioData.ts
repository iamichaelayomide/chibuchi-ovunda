import { ServiceItem, WorkSample, ToolItem, TrustPillar, MetricItem } from "../types";

export const PORTFOLIO_INFO = {
  name: "Chibuchi Ovunda",
  title: "Virtual Legal Assistant",
  subtitle: "Strategic Legal Administration & Practice Operations",
  bio: "I help lawyers, barristers, and boutique law firms stay organized, work smarter, and deliver exceptional client outcomes through meticulous, high-trust virtual support.",
  email: "ovundachibuchi01@gmail.com",
  location: "Lagos, Nigeria · Available Globally",
  availabilityStatus: "Accepting Select New Client Engagements",
  experienceYears: "5+ Years",
};

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: "legal-admin",
    number: "01",
    title: "Legal Administration",
    shortDesc: "File organization, document management, data entry, and calendar management done right.",
    fullDesc: "Comprehensive administrative backbone for your litigation or corporate practice. Keep every case binder organized, every docket updated, and every client record accurately indexed.",
    deliverables: [
      "Digital case file architecture & indexing",
      "Pleadings & exhibits cataloging",
      "Conflict check records & client intake data",
      "Billing hours logging & expense entry",
      "Court docket & statutory deadline tracking"
    ],
    turnaround: "Same-Day / 24h Turnaround",
    iconName: "FolderKanban"
  },
  {
    id: "document-support",
    number: "02",
    title: "Document Support",
    shortDesc: "Drafting, formatting, proofreading, and templates tailored to your practice.",
    fullDesc: "Court-compliant, impeccable legal document preparation. From affidavits and notices to retainer agreements and appellate briefs, every page conforms strictly to local court rules and typography standards.",
    deliverables: [
      "Court-ready brief & motion formatting",
      "Table of Authorities & Table of Contents generation",
      "Redaction of confidential & sensitive PII",
      "Standard operating template design",
      "Multi-pass grammatical & citation proofreading"
    ],
    turnaround: "Fast-Track & Priority Available",
    iconName: "FileCheck"
  },
  {
    id: "client-communication",
    number: "03",
    title: "Client Communication",
    shortDesc: "Professional email management, intake support, and follow-ups that build trust.",
    fullDesc: "Deliver a premium, responsive experience to your clients without sacrificing your billable hours. Friendly, articulate, and discrete client intake coordination and status updates.",
    deliverables: [
      "Dedicated inbox triage & VIP categorization",
      "Prospective client onboarding questionnaire management",
      "Hearing & conference confirmation notifications",
      "Inter-counsel correspondence coordination",
      "Professional post-consultation follow-ups"
    ],
    turnaround: "< 2h Response SLA",
    iconName: "MailCheck"
  },
  {
    id: "research-assistance",
    number: "04",
    title: "Research Assistance",
    shortDesc: "Case law, statute, and policy research with clear, well-structured summaries.",
    fullDesc: "Thorough, structured legal and factual investigation. Get synthesized research memos, statutory cross-references, and case law precedent summaries delivered directly to your desk.",
    deliverables: [
      "Statutory & regulatory cross-referencing",
      "Judicial precedent & case brief compilation",
      "Adverse party background & asset research",
      "Executive summaries with key citations",
      "Comparative legislative matrixes"
    ],
    turnaround: "24h - 48h Detailed Memos",
    iconName: "SearchCheck"
  },
  {
    id: "operational-support",
    number: "05",
    title: "Operational Support",
    shortDesc: "Workflow support, project updates, and systems organization to keep things moving.",
    fullDesc: "Systemize your law firm operations. From cloud migration and Clio practice setup to digital standard operating procedures (SOPs), I ensure your firm runs like clockwork.",
    deliverables: [
      "Legal CRM & Clio workflow automation",
      "Standard Operating Procedure (SOP) documentation",
      "Cloud document storage structure (Dropbox / Drive)",
      "Vendor & court fee disbursement tracking",
      "Weekly firm milestone & task reports"
    ],
    turnaround: "Ongoing Retainer Support",
    iconName: "Workflow"
  }
];

export const WORK_SAMPLES: WorkSample[] = [
  {
    id: "doc-org",
    title: "Document Organization",
    category: "organization",
    categoryLabel: "Case File Systems",
    shortDesc: "Structured and organized case files for easy access and confidentiality.",
    fullDesc: "Transformed an unstructured multi-gigabyte litigation archive into a standardized, searchable digital master binder with color-coded tags and automated version control.",
    challenge: "Attorney was spending 45+ minutes per session hunting for exhibit filings and prior counsel correspondence across disconnected folders.",
    solution: "Designed a standardized hierarchical matter folder protocol, naming nomenclature (YYYY-MM-DD_DocType_Title_vX), and full OCR indexing.",
    impact: "Cut document retrieval time by 85% and guaranteed 0 lost filings during trial preparation.",
    toolsUsed: ["Dropbox Business", "Google Drive", "Adobe Acrobat Pro", "Clio"],
    imageSrc: "/images/work_doc_org.webp",
    isRedacted: true
  },
  {
    id: "doc-format",
    title: "Document Formatting",
    category: "formatting",
    categoryLabel: "Court Filings",
    shortDesc: "Court-ready formatting with consistent style and attention to detail.",
    fullDesc: "Prepared complex appellate briefs, affidavits, and written addresses adhering strictly to judicial practice directions, custom line numbering, and automated citation tables.",
    challenge: "High-stakes appellate filing required strict 2.0 line spacing, 1-inch margins, roman numeral prefatory pages, and flawless Table of Authorities within an urgent 12-hour deadline.",
    solution: "Implemented master Word styling templates, dynamic field links for TOC/TOA, and verified cross-citations across 64 pages.",
    impact: "100% first-pass court clerk acceptance with zero formatting sanctions or re-filing delays.",
    toolsUsed: ["Microsoft Word", "Styles Engine", "Adobe PDF", "Legal Citation Guide"],
    imageSrc: "/images/work_doc_format.webp",
    isRedacted: true
  },
  {
    id: "email-mgmt",
    title: "Email Management",
    category: "communication",
    categoryLabel: "Client Ops",
    shortDesc: "Timely, professional communication and organized inboxes.",
    fullDesc: "Restructured a senior managing partner’s flooded inbox (1,400+ unread emails) into a serene Zero-Inbox system with custom priority tags and automated client status triggers.",
    challenge: "Critical client requests and court hearing notices were getting buried beneath hundreds of vendor newsletters and routine notifications.",
    solution: "Created custom rule filters (Urgent Court, Client Matter, Billing, Review Later), drafted high-converting canned response templates, and instituted daily morning triage.",
    impact: "Reduced partner daily email triage time from 2.5 hours to 20 minutes with zero missed court deadlines.",
    toolsUsed: ["Microsoft Outlook", "Gmail Workspace", "Spark", "Canva"],
    imageSrc: "/images/work_email_mgmt.webp",
    isRedacted: true
  },
  {
    id: "calendar-mgmt",
    title: "Calendar Management",
    category: "calendar",
    categoryLabel: "Calendar & Deadlines",
    shortDesc: "Scheduling, reminders, and time blocking to keep your day on track.",
    fullDesc: "Comprehensive litigation calendar orchestration across multiple court divisions, arbitrations, client depositions, and internal partner prep sessions.",
    challenge: "Multiple overlapping hearing fixtures and double-booked client consultations causing attorney stress and rescheduling friction.",
    solution: "Built a synchronized multi-calendar framework with built-in travel buffers, statutory filing reminder triggers (7-day, 3-day, 24-hour), and automated Zoom/Teams links.",
    impact: "100% on-time hearing appearances and seamless client consultation flow.",
    toolsUsed: ["Google Calendar", "Clio Calendar", "Calendly", "Microsoft 365"],
    imageSrc: "/images/work_calendar_mgmt.webp",
    isRedacted: true
  }
];

export const TOOLS_DATA: ToolItem[] = [
  {
    name: "Microsoft 365",
    category: "documents",
    categoryLabel: "Document Suite",
    proficiency: "Expert",
    description: "Advanced Word formatting, Excel financial tracking, PowerPoint trial decks, and secure Outlook enterprise management.",
    icon: "FileSpreadsheet"
  },
  {
    name: "Google Workspace",
    category: "cloud",
    categoryLabel: "Cloud Suite",
    proficiency: "Expert",
    description: "Collaborative Docs, secure Google Drive team shared drives, Forms client intake, and Google Meet scheduling.",
    icon: "FolderGit2"
  },
  {
    name: "Clio",
    category: "practice",
    categoryLabel: "Practice Management",
    proficiency: "Advanced",
    description: "Matter lifecycle management, time-tracking, billing disbursements, trust accounting sync, and automated client intake.",
    icon: "ShieldAlert"
  },
  {
    name: "Dropbox",
    category: "cloud",
    categoryLabel: "Cloud Storage",
    proficiency: "Expert",
    description: "Secure, encrypted case repository structure, confidential client file transfer, and automated backup synchronization.",
    icon: "HardDrive"
  },
  {
    name: "Canva",
    category: "creative",
    categoryLabel: "Brand & Visuals",
    proficiency: "Advanced",
    description: "Law firm branded letterheads, presentation handouts, social media legal updates, and professional client pitch materials.",
    icon: "Palette"
  },
  {
    name: "DocuSign",
    category: "practice",
    categoryLabel: "Practice Management",
    proficiency: "Expert",
    description: "Court-compliant digital signatures, retainer agreement workflows, NDA execution, and audit trail verification.",
    icon: "FileSignature"
  }
];

export const TRUST_PILLARS: TrustPillar[] = [
  {
    number: "01",
    title: "Confidentiality First",
    description: "Your firm’s reputation and attorney-client privilege are sacred. I enforce rigorous non-disclosure agreements, encrypted communications, and zero-leak data protocols.",
    highlight: "100% NDA Protected & Encrypted"
  },
  {
    number: "02",
    title: "Detail Oriented",
    description: "In the legal profession, a single misplaced comma or missed court rule can decide a motion. I scrutinize every detail so nothing slips through the cracks.",
    highlight: "Triple-Pass Verification Protocol"
  },
  {
    number: "03",
    title: "Reliable & Proactive",
    description: "You can count on dependable deadline compliance. I anticipate upcoming statutory dates, prep files ahead of time, and keep you two steps ahead.",
    highlight: "Zero Missed Statutory Deadlines"
  },
  {
    number: "04",
    title: "Client Focused",
    description: "I represent your practice with the utmost elegance, warmth, and professionalism, ensuring your clients feel valued and well taken care of at every touchpoint.",
    highlight: "White-Glove Legal Hospitality"
  }
];

export const METRICS_DATA: MetricItem[] = [
  {
    value: 99.8,
    suffix: "%",
    label: "On-Time Filing Rate",
    sublabel: "Strict statutory & court deadline adherence"
  },
  {
    value: 500,
    prefix: "",
    suffix: "+",
    label: "Legal Documents Prepared",
    sublabel: "Briefs, affidavits, agreements & transcripts"
  },
  {
    value: 100,
    suffix: "%",
    label: "Confidentiality Track Record",
    sublabel: "Privileged data integrity & NDA compliance"
  },
  {
    value: 2,
    prefix: "< ",
    suffix: " hrs",
    label: "Priority Response SLA",
    sublabel: "Rapid communication for active matters"
  }
];

export const TESTIMONIALS = [
  {
    quote: "Chibuchi’s precision and calm reliability transformed how our litigation department operates. Briefs are filed ahead of time, and case binders are always impeccably structured.",
    author: "Senior Managing Partner",
    firm: "Commercial Dispute Boutique, Lagos"
  },
  {
    quote: "Finding an assistant who truly understands legal formatting rules, attorney-client privilege, and practice management tools is rare. Chibuchi is an indispensable asset to my practice.",
    author: "Principal Attorney",
    firm: "Corporate Advisory & Real Estate Firm"
  }
];
