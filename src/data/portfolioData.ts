import { ServiceItem, WorkSample, ToolItem, TrustPillar, MetricItem } from "../types";

export const PORTFOLIO_INFO = {
  name: "Chibuchi Ovunda",
  title: "Virtual Legal Assistant",
  subtitle: "Strategic Legal Administration & Practice Operations",
  bio: "I partner with attorneys, advocates, and legal teams to organize matter files, prepare court-ready documents, streamline client intake, and safeguard billable hours.",
  email: "ovundachibuchi01@gmail.com",
  location: "Akure, Nigeria · Available Worldwide",
  availabilityStatus: "Accepting Select Engagements",
  experienceYears: "5+ Years",
};

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: "legal-admin",
    number: "01",
    title: "Legal Administration",
    shortDesc: "Case file organization, document indexing, docket tracking, and matter data management.",
    fullDesc: "Complete administrative foundation for litigation and commercial practices. Every case binder stays structured, court dockets remain updated, and client records are indexed accurately.",
    deliverables: [
      "Digital matter folder architecture & indexing",
      "Pleadings, exhibits & motion cataloging",
      "Conflict check logging & client intake data",
      "Court docket & statutory deadline calendars",
      "Billing hours and matter disbursement records"
    ],
    turnaround: "Same-Day / 24h Priority SLA",
    iconName: "FolderKanban"
  },
  {
    id: "document-support",
    number: "02",
    title: "Document Drafting & Formatting",
    shortDesc: "Court-compliant formatting, agreements, MOUs, notices, and legal templates.",
    fullDesc: "Impeccable legal document preparation. From commercial agreements and MOUs to court briefs, every document adheres strictly to judicial formatting conventions and typography guidelines.",
    deliverables: [
      "Court-ready brief & motion formatting",
      "Memorandum of Understanding (MOU) drafting",
      "Table of Authorities & Table of Contents",
      "Redaction of privileged & confidential data",
      "Multi-pass proofreading & citation verification"
    ],
    turnaround: "Fast-Track Turnaround Available",
    iconName: "FileCheck"
  },
  {
    id: "client-communication",
    number: "03",
    title: "Client Communication & Intake",
    shortDesc: "Structured intake databases, hearing notices, and discrete correspondence.",
    fullDesc: "Deliver an executive client experience without consuming trial preparation time. Discrete client intake coordination, automated response logging, and timely hearing confirmations.",
    deliverables: [
      "Dedicated inbox triage & priority tagging",
      "Prospective client onboarding intake logs",
      "Hearing & conference confirmation notices",
      "Inter-counsel correspondence coordination",
      "Post-consultation follow-up summaries"
    ],
    turnaround: "Under 2h Response Standard",
    iconName: "MailCheck"
  },
  {
    id: "research-assistance",
    number: "04",
    title: "Case Law & Statute Research",
    shortDesc: "Synthesized case precedents, statutory cross-referencing, and executive briefs.",
    fullDesc: "Thorough legal and factual compilation. Receive structured research memos, statutory provisions, and judicial precedents formatted clearly for immediate review.",
    deliverables: [
      "Statutory & regulatory cross-referencing",
      "Judicial precedent & case brief compilation",
      "Meeting minutes & summary extraction",
      "Executive summaries with key citations",
      "Comparative legislative matrixes"
    ],
    turnaround: "24h to 48h Detailed Memos",
    iconName: "SearchCheck"
  },
  {
    id: "operational-support",
    number: "05",
    title: "Practice Operations & Systems",
    shortDesc: "Cloud file workflows, SOP documentation, and practice task orchestration.",
    fullDesc: "Systemize practice operations. From cloud repository permissions and intake automation to standard operating procedures (SOPs), ensuring your practice runs with clockwork precision.",
    deliverables: [
      "Intake logging & form response automation",
      "Standard Operating Procedure (SOP) documentation",
      "Cloud document storage structure (Google Workspace / Dropbox)",
      "Matter deadline tracking & calendar alerts",
      "Weekly milestone & active matter reports"
    ],
    turnaround: "Ongoing Retainer Support",
    iconName: "Workflow"
  }
];

export const WORK_SAMPLES: WorkSample[] = [
  {
    id: "doc-org",
    title: "Matter File Systems & Organization",
    category: "organization",
    categoryLabel: "File Systems",
    shortDesc: "Standardized matter folder architecture for instant retrieval and confidential record keeping.",
    fullDesc: "Centralized cloud folder hierarchy in Google Workspace featuring chronological indexing, structured nomenclature, and secure permission controls across client matters.",
    challenge: "Scattered matter files and version confusion leading to wasted billable hours locating consultation notes and draft contracts.",
    solution: "Built a standardized matter architecture categorizing Client Summaries, MOUs, Consultation Minutes, Case Facts, and Execution Drafts.",
    impact: "Instant document retrieval, zero misplaced files, and seamless multi-lawyer collaboration.",
    toolsUsed: ["Google Workspace", "Google Docs", "Drive Storage", "File Architecture"],
    imageSrc: "/images/work_doc_org.webp",
    isRedacted: true
  },
  {
    id: "doc-format",
    title: "Commercial Agreement & MOU Drafting",
    category: "formatting",
    categoryLabel: "Agreements & MOUs",
    shortDesc: "Court-ready Memorandum of Understanding formatting with defined clauses and covenants.",
    fullDesc: "Professional formatting of a commercial Memorandum of Understanding (MOU) establishing partner obligations, scope of services, revenue distribution, and liability indemnification clauses.",
    challenge: "Drafting a clean, legible commercial MOU with defined party covenants, structured execution sections, and clean numbering.",
    solution: "Applied uniform clause numbering, hierarchical headers, defined covenants, and standardized signing blocks.",
    impact: "Flawless legal presentation, clear obligation tracking for contracting parties, and fast turnaround.",
    toolsUsed: ["Microsoft Word", "Google Docs", "Adobe PDF", "Legal Formatting Guidelines"],
    imageSrc: "/images/work_doc_format.webp",
    isRedacted: true
  },
  {
    id: "email-mgmt",
    title: "Client Intake Database & Triage System",
    category: "communication",
    categoryLabel: "Intake Systems",
    shortDesc: "Automated matter logging tracking prospective clients, dispute categories, and urgency.",
    fullDesc: "Live automated client intake system capturing timestamped form responses, party contact details, dispute categories (such as Contract Disputes), and matter urgency.",
    challenge: "Prospective client inquiries arriving via fragmented channels risking delayed triage and missed statutory deadlines.",
    solution: "Implemented an automated intake log spreadsheet with instant notification triggers and structured matter classification fields.",
    impact: "100% inquiry capture, structured triage for attorneys, and immediate follow-up readiness.",
    toolsUsed: ["Google Sheets", "Google Forms", "Gmail", "Intake Workflow Automation"],
    imageSrc: "/images/work_email_mgmt.webp",
    isRedacted: true
  },
  {
    id: "calendar-mgmt",
    title: "Client Consultation & Meeting Record",
    category: "calendar",
    categoryLabel: "Meeting Records",
    shortDesc: "Executive consultation summaries documenting matter discussions, legal issues, and next steps.",
    fullDesc: "Structured client consultation summary documenting partnership negotiations (Mr. Tunde Adebayo), key identified legal issues (revenue allocation, liability protection), and agreed action items.",
    challenge: "Extracting actionable legal points and agreed covenants from lengthy verbal client consultations.",
    solution: "Drafted structured executive summaries with distinct sections: Overview of Discussion, Key Issues, and Agreed Terms.",
    impact: "Attorneys save hours of review time and retain precise, privileged records for draft preparation.",
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
    description: "Advanced Word brief formatting, Excel matter tracking, PowerPoint trial decks, and secure Outlook enterprise management.",
    icon: "FileSpreadsheet"
  },
  {
    name: "Google Workspace",
    category: "cloud",
    categoryLabel: "Cloud Suite",
    proficiency: "Expert",
    description: "Collaborative Docs, secure Google Drive matter repositories, Forms client intake, and Google Meet scheduling.",
    icon: "FolderGit2"
  },
  {
    name: "Clio",
    category: "practice",
    categoryLabel: "Practice Management",
    proficiency: "Advanced",
    description: "Matter lifecycle management, time-tracking, billing disbursements, trust accounting sync, and client intake workflows.",
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
    title: "Confidentiality First",
    description: "Your practice reputation and client privilege are sacred. I uphold strict confidentiality protocols, non-disclosure agreements, and secure data handling.",
    highlight: "100% NDA Protected & Encrypted"
  },
  {
    number: "02",
    title: "Detail Oriented",
    description: "In legal practice, precision is paramount. I enforce meticulous checks across numbering, citations, formatting conventions, and statutory dates.",
    highlight: "Meticulous Verification Protocol"
  },
  {
    number: "03",
    title: "Reliable & Proactive",
    description: "Count on dependable execution to meet deadlines, organize matter files ahead of schedule, and anticipate practice requirements before they become urgent.",
    highlight: "Zero Missed Statutory Deadlines"
  },
  {
    number: "04",
    title: "Client Focused",
    description: "I support your practice and your clients with excellence, ensuring articulate communication, prompt responses, and seamless execution.",
    highlight: "Dedicated Practice Support"
  }
];

export const METRICS_DATA: MetricItem[] = [
  {
    value: 99.8,
    suffix: "%",
    label: "On-Time Delivery Rate",
    sublabel: "Strict statutory & docket adherence"
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
    label: "Confidentiality Record",
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
