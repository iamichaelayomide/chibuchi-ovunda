import { ServiceItem, WorkSample, ToolItem, TrustPillar, MetricItem } from "../types";

export const PORTFOLIO_INFO = {
  name: "Chibuchi Ovunda",
  title: "Virtual Legal Assistant",
  subtitle: "Legal Practice Operations & Administrative Support",
  bio: "Supporting attorneys, advocates, and commercial law practices with calendar coordination, structured case file architecture, court-compliant document formatting, client intake systems, and reliable practice operations.",
  email: "ovundachibuchi01@gmail.com",
  location: "Akure, Nigeria · Available Worldwide",
  availabilityStatus: "Available for Retainers & Engagements",
  experienceYears: "5+ Years",
};

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: "calendar-mgmt",
    number: "01",
    title: "Calendar & Hearing Schedule Management",
    shortDesc: "Court docketing, hearing dates, client consultations, and cross-timezone scheduling.",
    fullDesc: "Complete schedule orchestration for busy practitioners. Keep court appearances docketed, client consultations organized across timezones, and statutory deadline reminders triggered well ahead of time.",
    deliverables: [
      "Court hearing dates and statutory limitation docketing",
      "Client consultation booking and virtual conference setup",
      "Deposition, trial prep, and filing calendar coordination",
      "Cross-timezone appointment and diary synchronization",
      "Pre-conference briefing packet preparation"
    ],
    turnaround: "Real-Time Docket Updates",
    iconName: "Calendar"
  },
  {
    id: "legal-admin",
    number: "02",
    title: "Case File & Matter Administration",
    shortDesc: "Folder architecture, pleadings cataloging, docket tracking, and case indexing.",
    fullDesc: "Complete administrative management for litigation and commercial practices. Every matter folder is standardized, pleadings indexed chronologically, and client records organized.",
    deliverables: [
      "Standardized cloud case folder hierarchy",
      "Pleadings, exhibits, motions, and orders indexing",
      "Conflict check logging and party contact records",
      "Matter disbursement and billable hours logging",
      "Secure repository access permission controls"
    ],
    turnaround: "Same-Day to 24h Delivery",
    iconName: "FolderKanban"
  },
  {
    id: "document-support",
    number: "03",
    title: "Legal Drafting & Document Formatting",
    shortDesc: "Court-compliant formatting, agreements, MOUs, notices, and legal templates.",
    fullDesc: "Court-compliant legal document preparation. From commercial agreements and MOUs to trial briefs, every draft follows exact jurisdictional formatting conventions, heading styles, and citation standards.",
    deliverables: [
      "Court-ready brief, motion, and affidavit formatting",
      "Memorandum of Understanding (MOU) drafting",
      "Table of Authorities and Table of Contents compilation",
      "Redaction of confidential and privileged PII",
      "Multi-pass proofreading and citation cross-checking"
    ],
    turnaround: "Priority Turnaround Available",
    iconName: "FileCheck"
  },
  {
    id: "client-communication",
    number: "04",
    title: "Client Intake & Correspondence",
    shortDesc: "Intake database logging, hearing notifications, and structured correspondence.",
    fullDesc: "Ensure prospective clients and active matters receive timely communication. Includes structured intake triage, automated response logging, conference scheduling, and client status updates.",
    deliverables: [
      "Inbox management and matter classification",
      "Client onboarding intake forms and live databases",
      "Hearing and conference confirmation notices",
      "Inter-counsel correspondence coordination",
      "Post-consultation summary distribution"
    ],
    turnaround: "Under 2h Response Standard",
    iconName: "MailCheck"
  },
  {
    id: "research-assistance",
    number: "05",
    title: "Statutory & Case Law Research",
    shortDesc: "Synthesized case precedents, legislative provisions, and factual research summaries.",
    fullDesc: "Thorough legal and factual compilation. Receive structured research memorandums, statutory provisions, and judicial precedents formatted clearly for immediate review by senior counsel.",
    deliverables: [
      "Statutory and regulatory cross-referencing",
      "Judicial precedent and case brief compilation",
      "Consultation minutes and summary extraction",
      "Executive summaries with key citations",
      "Comparative legislative matrixes"
    ],
    turnaround: "24h to 48h Detailed Memos",
    iconName: "SearchCheck"
  },
  {
    id: "operational-support",
    number: "06",
    title: "Practice Operations & Systems",
    shortDesc: "Cloud file workflows, SOP documentation, and practice task management.",
    fullDesc: "Systemize internal firm workflows. From cloud document repository structure and automated intake pipelines to standard operating procedures (SOPs), ensuring day-to-day operations run smoothly.",
    deliverables: [
      "Intake logging and form response automation",
      "Standard Operating Procedure (SOP) manuals",
      "Cloud document storage structure (Google Workspace / Dropbox)",
      "Matter deadline tracking and calendar alerts",
      "Weekly active matter status reports"
    ],
    turnaround: "Ongoing Retainer Support",
    iconName: "Workflow"
  }
];

export const WORK_SAMPLES: WorkSample[] = [
  {
    id: "calendar-mgmt",
    title: "Client Consultation & Calendar Management",
    category: "calendar",
    categoryLabel: "Calendar & Notes",
    shortDesc: "Executive consultation summaries, calendar coordination, and action item tracking.",
    fullDesc: "Structured client consultation summary and calendar management documenting partnership negotiations (Mr. Tunde Adebayo), key identified legal issues (revenue allocation, liability protection), scheduled follow-up conferences, and agreed action items.",
    challenge: "Managing overlapping attorney consultation calendars and extracting actionable legal issues and agreed covenants from verbal meetings.",
    solution: "Scheduled virtual conferences, coordinated calendar slots, and drafted structured executive summaries with distinct sections: Overview of Discussion, Key Issues, and Agreed Terms.",
    impact: "Attorneys save hours of administrative review time and retain precise, privileged records for draft preparation.",
    toolsUsed: ["Google Calendar", "Google Meet", "Google Docs", "Executive Framework"],
    imageSrc: "/images/work_calendar_mgmt.webp",
    isRedacted: true
  },
  {
    id: "doc-org",
    title: "Matter File Systems & Organization",
    category: "organization",
    categoryLabel: "File Systems",
    shortDesc: "Standardized cloud folder hierarchy for rapid document retrieval and confidential file maintenance.",
    fullDesc: "Centralized matter folder architecture in Google Workspace with chronological indexing, clear file nomenclature, and access permission controls across active matters.",
    challenge: "Disorganized matter records and inconsistent folder structures creating delays in retrieving consultation notes and draft agreements.",
    solution: "Designed and implemented a standardized folder tree categorizing Client Summaries, Commercial MOUs, Meeting Minutes, Case Facts, and Execution Drafts.",
    impact: "Instant document access, elimination of duplicate drafts, and seamless multi-counsel collaboration.",
    toolsUsed: ["Google Workspace", "Google Docs", "Drive Storage", "File Architecture"],
    imageSrc: "/images/work_doc_org.webp",
    isRedacted: true
  },
  {
    id: "doc-format",
    title: "Commercial Agreement & MOU Drafting",
    category: "formatting",
    categoryLabel: "Agreements & MOUs",
    shortDesc: "Court-ready Memorandum of Understanding formatting with defined party covenants and indemnities.",
    fullDesc: "Professional formatting of a commercial Memorandum of Understanding (MOU) defining partner responsibilities, scope of services, revenue distribution terms, and liability indemnification clauses.",
    challenge: "Drafting a clean, unambiguous commercial agreement with consistent clause numbering, defined covenants, and standardized signature blocks.",
    solution: "Applied uniform paragraph numbering, hierarchical headings, structured covenant sections, and clean execution blocks.",
    impact: "Clear obligation tracking for contracting parties, court-ready presentation, and expedited execution.",
    toolsUsed: ["Microsoft Word", "Google Docs", "Adobe PDF", "Legal Templates"],
    imageSrc: "/images/work_doc_format.webp",
    isRedacted: true
  },
  {
    id: "email-mgmt",
    title: "Client Intake Database & Triage System",
    category: "communication",
    categoryLabel: "Intake Systems",
    shortDesc: "Automated matter logging tracking prospective clients, dispute categories, and urgency.",
    fullDesc: "Live automated client intake system capturing timestamped form responses, party contact details, dispute categories (such as Contract Disputes), and matter urgency ratings.",
    challenge: "Inquiries arriving via disconnected channels with risk of delayed follow-ups and missed limitation periods.",
    solution: "Implemented an automated intake log spreadsheet with instant email notifications and standardized matter classification fields.",
    impact: "100% inquiry capture, structured triage for attorneys, and immediate follow-up readiness.",
    toolsUsed: ["Google Sheets", "Google Forms", "Gmail", "Intake Automation"],
    imageSrc: "/images/work_email_mgmt.webp",
    isRedacted: true
  }
];

export const TOOLS_DATA: ToolItem[] = [
  {
    name: "Microsoft 365",
    category: "documents",
    categoryLabel: "Document Suite",
    proficiency: "Expert",
    description: "Advanced Word brief formatting, Excel financial tracking, PowerPoint trial presentations, and secure Outlook enterprise management.",
    icon: "FileSpreadsheet"
  },
  {
    name: "Google Workspace",
    category: "cloud",
    categoryLabel: "Cloud Suite",
    proficiency: "Expert",
    description: "Google Calendar scheduling, Docs collaboration, Drive matter repositories, Forms client intake, and Google Meet.",
    icon: "FolderGit2"
  },
  {
    name: "Clio",
    category: "practice",
    categoryLabel: "Practice Management",
    proficiency: "Advanced",
    description: "Matter lifecycle management, time-tracking, billing disbursements, trust accounting sync, and automated intake.",
    icon: "ShieldAlert"
  },
  {
    name: "Dropbox",
    category: "cloud",
    categoryLabel: "Cloud Storage",
    proficiency: "Expert",
    description: "Encrypted matter repository structure, confidential client file transfer, and automated backup synchronization.",
    icon: "HardDrive"
  },
  {
    name: "Canva",
    category: "creative",
    categoryLabel: "Brand & Visuals",
    proficiency: "Advanced",
    description: "Firm letterheads, presentation handouts, legal update graphics, and professional client pitch materials.",
    icon: "Palette"
  },
  {
    name: "DocuSign",
    category: "practice",
    categoryLabel: "Practice Management",
    proficiency: "Expert",
    description: "Digital signatures, retainer agreement workflows, NDA execution, and audit trail verification.",
    icon: "FileSignature"
  }
];

export const TRUST_PILLARS: TrustPillar[] = [
  {
    number: "01",
    title: "Privilege & Confidentiality",
    description: "Client privilege and firm reputation are held to strict standards. Handled with explicit non-disclosure agreements, access restrictions, and encrypted workflows.",
    highlight: "100% NDA Protected & Encrypted"
  },
  {
    number: "02",
    title: "Citation & Formatting Precision",
    description: "In legal practice, accuracy is non-negotiable. Meticulous verification of clause numbering, cross-references, citation styles, and statutory dates.",
    highlight: "Meticulous Verification Protocol"
  },
  {
    number: "03",
    title: "Docket & Deadline Reliability",
    description: "Dependable execution to meet filing deadlines, coordinate court hearing calendars, and anticipate administrative bottlenecks.",
    highlight: "Zero Missed Statutory Deadlines"
  },
  {
    number: "04",
    title: "Dedicated Practice Alignment",
    description: "Supporting your practice and clients with articulate communication, structured status reporting, and seamless integration with your existing workflow.",
    highlight: "Dedicated Practice Support"
  }
];

export const METRICS_DATA: MetricItem[] = [
  {
    value: 99.8,
    suffix: "%",
    label: "On-Time Delivery Rate",
    sublabel: "Strict statutory and docket adherence"
  },
  {
    value: 500,
    prefix: "",
    suffix: "+",
    label: "Legal Documents Prepared",
    sublabel: "MOUs, briefs, minutes, agreements, and records"
  },
  {
    value: 100,
    suffix: "%",
    label: "Confidentiality Record",
    sublabel: "Privileged data integrity and NDA compliance"
  },
  {
    value: 2,
    prefix: "< ",
    suffix: " hrs",
    label: "Priority Response SLA",
    sublabel: "Prompt communication for active matters"
  }
];
