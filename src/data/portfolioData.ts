import { ServiceItem, WorkSample, ToolItem, TrustPillar, MetricItem } from "../types";

export const PORTFOLIO_INFO = {
  name: "Chibuchi Ovunda",
  title: "Virtual Legal Assistant",
  subtitle: "Strategic Legal Administration & Practice Operations",
  bio: "I help lawyers, barristers, and legal teams stay organized, work smarter, and better serve their clients through dependable, high-trust virtual support.",
  email: "ovundachibuchi01@gmail.com",
  location: "Akure, Nigeria · Available Worldwide",
  availabilityStatus: "Accepting Select Legal Engagements",
  experienceYears: "5+ Years",
};

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: "legal-admin",
    number: "01",
    title: "Legal Administration",
    shortDesc: "File organization, document management, data entry, and calendar management done right.",
    fullDesc: "Comprehensive administrative backbone for your litigation or commercial practice. Keep every case binder organized, every docket updated, and every client record accurately indexed.",
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
    fullDesc: "Court-compliant, impeccable legal document preparation. From MOUs, agreements, and notices to briefs and templates, every page conforms strictly to formatting guidelines.",
    deliverables: [
      "Court-ready brief & agreement formatting",
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
    fullDesc: "Deliver a responsive experience to your clients without sacrificing your billable hours. Friendly, articulate, and discrete client intake coordination and status updates.",
    deliverables: [
      "Dedicated inbox triage & priority tagging",
      "Prospective client onboarding intake logs",
      "Hearing & meeting confirmation notifications",
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
      "Meeting minutes & summary extraction",
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
    fullDesc: "Systemize your law practice operations. From cloud document repository structure and intake automation to standard operating procedures (SOPs), I ensure your practice runs smoothly.",
    deliverables: [
      "Intake logging & form response automation",
      "Standard Operating Procedure (SOP) documentation",
      "Cloud document storage structure (Google Workspace / Dropbox)",
      "Task tracking & deadline reminders",
      "Weekly milestone & matter status reports"
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
    categoryLabel: "File Systems",
    shortDesc: "Structured and organized matter files for instant access and confidentiality.",
    fullDesc: "Standardized matter folder architecture in Google Workspace with chronological indexing, clear file naming nomenclature, and secure permission structures.",
    challenge: "Scattered matter files and mixed versions leading to wasted time searching for consultation records and contract drafts.",
    solution: "Structured centralized digital folders categorized by Client Summaries, MOUs, Minutes, Case Facts, and Agreement Drafts.",
    impact: "Instant document retrieval, zero misplaced files, and seamless collaboration.",
    toolsUsed: ["Google Workspace", "Google Docs", "Drive Storage", "File Architecture"],
    imageSrc: "/images/work_doc_org.webp",
    isRedacted: true
  },
  {
    id: "doc-format",
    title: "Legal Drafting & Formatting",
    category: "formatting",
    categoryLabel: "Agreements & MOUs",
    shortDesc: "Clean, consistent agreement formatting with strict attention to legal structure.",
    fullDesc: "Professional formatting of a Memorandum of Understanding (MOU) establishing partnership obligations, scope of services, revenue sharing, and liability provisions.",
    challenge: "Drafting a clean, legible commercial MOU with defined party clauses and structured operational sections.",
    solution: "Applied uniform paragraph numbering, hierarchical headings, and defined covenant structures.",
    impact: "Court-ready clarity, professional presentation for contracting parties, and fast turnaround.",
    toolsUsed: ["Microsoft Word", "Google Docs", "Adobe PDF", "Legal Templates"],
    imageSrc: "/images/work_doc_format.webp",
    isRedacted: true
  },
  {
    id: "email-mgmt",
    title: "Client Intake & Case Logging",
    category: "communication",
    categoryLabel: "Intake Systems",
    shortDesc: "Structured tracking of client inquiries, case details, and contact logs.",
    fullDesc: "Live automated client intake system capturing timestamped form responses, party contact details, type of legal issue (e.g. Contract Disputes), and matter urgency.",
    challenge: "Prospective client inquiries arriving via multiple disjointed channels risking missed deadlines and slow follow-ups.",
    solution: "Implemented an automated intake log spreadsheet with instant notification triggers and structured matter fields.",
    impact: "100% inquiry capture, structured triage for attorneys, and immediate follow-up readiness.",
    toolsUsed: ["Google Sheets", "Google Forms", "Gmail", "Intake Workflow"],
    imageSrc: "/images/work_email_mgmt.webp",
    isRedacted: true
  },
  {
    id: "calendar-mgmt",
    title: "Client Meeting Summary",
    category: "calendar",
    categoryLabel: "Meeting Records",
    shortDesc: "Concise executive summaries of client discussions, issues, and action items.",
    fullDesc: "Structured client consultation summary documenting partnership discussions (Adebayo Logistics), key issues identified (revenue sharing, liability protection), and next steps.",
    challenge: "Extracting actionable legal issues and agreed terms from lengthy verbal client consultations.",
    solution: "Drafted structured executive summaries with clear sections: Overview of Discussion, Key Issues, and Agreed Terms.",
    impact: "Attorneys save hours of review time and retain precise, confidential records for draft preparation.",
    toolsUsed: ["Google Docs", "Executive Summary Framework", "Legal Minutes", "Google Meet"],
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
    description: "Advanced Word formatting, Excel financial and case tracking, PowerPoint trial decks, and secure Outlook enterprise management.",
    icon: "FileSpreadsheet"
  },
  {
    name: "Google Workspace",
    category: "cloud",
    categoryLabel: "Cloud Suite",
    proficiency: "Expert",
    description: "Collaborative Docs, secure Google Drive team folders, Forms client intake, and Google Meet scheduling.",
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
    description: "Letterheads, presentation handouts, social media legal updates, and professional client pitch materials.",
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
    title: "Confidentiality First",
    description: "Your practice’s reputation and client privilege are sacred. I follow strict confidentiality practices, non-disclosure agreements, and secure data handling.",
    highlight: "100% NDA Protected & Encrypted"
  },
  {
    number: "02",
    title: "Detail Oriented",
    description: "In legal work, precision is everything. I pay close attention to details, numbering, citations, and dates so nothing falls through the cracks.",
    highlight: "Meticulous Verification Protocol"
  },
  {
    number: "03",
    title: "Reliable & Proactive",
    description: "You can count on me to meet deadlines, organize matters ahead of time, and anticipate upcoming needs before they become urgent.",
    highlight: "Zero Missed Filing Deadlines"
  },
  {
    number: "04",
    title: "Client Focused",
    description: "I support your practice and your clients with excellence, ensuring clear communication, prompt responses, and dependable execution.",
    highlight: "Dedicated Practice Support"
  }
];

export const METRICS_DATA: MetricItem[] = [
  {
    value: 99.8,
    suffix: "%",
    label: "On-Time Delivery Rate",
    sublabel: "Strict statutory & deadline adherence"
  },
  {
    value: 500,
    prefix: "",
    suffix: "+",
    label: "Legal Documents Prepared",
    sublabel: "MOUs, briefs, minutes, agreements & records"
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
