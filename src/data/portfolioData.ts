import { ServiceItem, WorkSample, ToolItem, TrustPillar, MetricItem } from "../types";

export const PORTFOLIO_INFO = {
  name: "Chibuchi Ovunda",
  title: "Virtual Legal Assistant",
  subtitle: "Legal Practice Operations & Administrative Support",
  bio: "Supporting attorneys, advocates, and commercial law practices with calendar management, email triage, document organization, minute taking, and confidential file systems.",
  email: "ovundachibuchi01@gmail.com",
  location: "Akure, Nigeria · Available Worldwide",
  availabilityStatus: "Available for Retainers & Engagements",
  experienceYears: "5+ Years",
};

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: "calendar-mgmt",
    number: "01",
    title: "Calendar Management",
    shortDesc: "Appointments, court hearings, statutory deadlines, buffer times, and meeting reminders.",
    fullDesc: "From appointments and meetings to statutory deadlines and reminders, I help clients manage their calendars efficiently. Following your instructions, I organize schedules, prioritize important commitments, add buffer time, and ensure meetings and deadlines are clearly planned so nothing gets overlooked.",
    deliverables: [
      "Court hearing dates and statutory limitation docketing",
      "Client consultation scheduling and virtual meeting links",
      "Prioritized commitments with strategic buffer time",
      "Cross-timezone calendar and diary synchronization",
      "Pre-meeting briefing preparation and confirmation reminders"
    ],
    turnaround: "Real-Time Docket Updates",
    iconName: "Calendar"
  },
  {
    id: "email-mgmt",
    number: "02",
    title: "Email Management",
    shortDesc: "Inbox organization, custom legal labeling, urgent flagging, and professional responses.",
    fullDesc: "Keep your inbox organized and under control. From sorting and prioritizing emails to drafting professional responses, I help clients stay on top of critical communication. Following your instructions, I organize emails with custom labels, flag urgent messages, manage follow-ups, and keep communication clear.",
    deliverables: [
      "Custom legal label architecture (Agreements, Case files, Consultations)",
      "Priority inbox triage and urgent matter tagging",
      "Professional response drafting and follow-up tracking",
      "Inter-counsel correspondence coordination",
      "Daily inbox digest and action item summaries"
    ],
    turnaround: "Under 2h Response SLA",
    iconName: "MailCheck"
  },
  {
    id: "doc-mgmt",
    number: "03",
    title: "Document Management",
    shortDesc: "Digital filing, document organization, naming systems, and court-compliant drafting.",
    fullDesc: "Create a system that keeps every legal document easy to find. From digital filing to document organization, I help clients structure their files, maintain clear naming conventions, and keep important documents accessible and up to date for everyday practice use.",
    deliverables: [
      "Court-ready brief, motion, and affidavit formatting",
      "Memorandum of Understanding (MOU) drafting and agreements",
      "Standardized document nomenclature and version control",
      "Table of Authorities and citation cross-checking",
      "Confidential PII redaction and multi-pass proofreading"
    ],
    turnaround: "Priority Turnaround Available",
    iconName: "FileCheck"
  },
  {
    id: "minute-taking",
    number: "04",
    title: "Minute Taking & Consultation Records",
    shortDesc: "Turning meetings, consultations, and team discussions into clear, actionable records.",
    fullDesc: "Capture every important detail from client consultations and team discussions. I help clients turn verbal conversations into clear, organized records. Following your instructions, I record key discussion points, partner decisions, action items, and deadlines for seamless follow-up.",
    deliverables: [
      "Structured client consultation executive summaries",
      "Key legal issue identification (Partnerships, liability, covenants)",
      "Agreed terms and stakeholder action item logs",
      "Board meeting and partner session minutes",
      "Privileged record maintenance for attorney review"
    ],
    turnaround: "Same-Day / 24h Delivery",
    iconName: "SearchCheck"
  },
  {
    id: "file-mgmt",
    number: "05",
    title: "File Management & Cloud Systems",
    shortDesc: "Standardized 8-category cloud folder architecture in Google Workspace & Clio.",
    fullDesc: "Keep your files structured, accessible, and secure. Following your practice instructions, I create logical folder structures, apply consistent naming conventions, organize documents, and maintain a cloud system where every file stays in its proper place.",
    deliverables: [
      "Standardized 8-folder hierarchy (Client Matters, Case Law, Drafts, Contracts, Court Filings, Correspondence, Statutes, Templates)",
      "Granular access permission controls and cloud security",
      "Pleadings, exhibits, and motion chronological indexing",
      "Intake database automation and logging",
      "Standard Operating Procedure (SOP) documentation"
    ],
    turnaround: "Ongoing Retainer Support",
    iconName: "FolderKanban"
  }
];

export const WORK_SAMPLES: WorkSample[] = [
  {
    id: "calendar-mgmt-sample",
    title: "Calendar Management & Scheduling System",
    category: "calendar",
    categoryLabel: "Calendar Management",
    shortDesc: "Organized calendar with prioritized commitments, client consultations, buffer time, and deadline alerts.",
    fullDesc: "Active legal practice calendar management coordinating client consultations, zoom hearings, document submission deadlines, and follow-ups with color-coded priority categories and strategic buffer time.",
    challenge: "Overlapping appointment requests, unorganized court deadlines, and lack of buffer time between client consultations causing practitioner burnout.",
    solution: "Structured a centralized calendar with dedicated time blocks for email responses, court filings, client briefs, and Zoom conferences.",
    impact: "Zero missed deadlines, protected focus blocks for legal drafting, and clear schedule visibility.",
    toolsUsed: ["Google Calendar", "Zoom", "Google Meet", "Calendar Workflow"],
    imageSrc: "/images/work_calendar_mgmt.webp",
    isRedacted: true
  },
  {
    id: "email-mgmt-sample",
    title: "Email Management & Custom Label System",
    category: "communication",
    categoryLabel: "Email Management",
    shortDesc: "Categorized inbox with custom legal labels (Agreements, Case files, Client consultation, Contacts).",
    fullDesc: "Inbox organization system using custom labels and automated filters to separate Agreements, Case files, Client consultations, and Civil contacts, ensuring urgent communications receive immediate attention.",
    challenge: "High volume of incoming inquiries and inter-counsel emails cluttering primary inbox and risking delayed responses to active matters.",
    solution: "Designed custom label taxonomy, urgent priority flagging, and dedicated consultation triage filters.",
    impact: "Inbox zero efficiency, under 2-hour response turnaround on active matters, and clean matter communication trails.",
    toolsUsed: ["Gmail", "Google Workspace", "Inbox Triage", "Email Labeling"],
    imageSrc: "/images/work_email_mgmt.webp",
    isRedacted: true
  },
  {
    id: "doc-mgmt-sample",
    title: "Document Management & Agreement Drafting",
    category: "formatting",
    categoryLabel: "Document Management",
    shortDesc: "Court-ready MOUs, agreements, case facts, and standardized legal document systems.",
    fullDesc: "Impeccable document formatting and drafting including Commercial Memorandums of Understanding (MOU), Case facts (Adebayo v Zenith), and Agreement drafts with standardized styling.",
    challenge: "Drafting and formatting complex commercial covenants, dispute summaries, and multi-page agreements under tight statutory deadlines.",
    solution: "Applied uniform paragraph numbering, defined partner covenants, standardized signature blocks, and court-compliant typography.",
    impact: "Flawless document presentation, clear obligation tracking for parties, and rapid turnaround for counsel.",
    toolsUsed: ["Google Docs", "Microsoft Word", "Adobe PDF", "Legal Templates"],
    imageSrc: "/images/work_doc_format.webp",
    isRedacted: true
  },
  {
    id: "minute-taking-sample",
    title: "Minute Taking & Client Meeting Summary",
    category: "calendar",
    categoryLabel: "Minute Taking",
    shortDesc: "Executive consultation summaries capturing discussion overview, key issues, and agreed terms.",
    fullDesc: "Structured client meeting summary for Mr. Tunde Adebayo documenting partnership discussion overview, key identified issues (partnership structure, revenue sharing, liability), and agreed terms.",
    challenge: "Extracting actionable legal covenants and operational decisions from extensive verbal client consultations.",
    solution: "Drafted structured executive summaries with distinct sections: 1. Overview of Discussion, 2. Key Issues Identified, 3. Agreed Terms.",
    impact: "Attorneys save hours of review time and retain precise, privileged records for draft preparation.",
    toolsUsed: ["Google Docs", "Executive Framework", "Legal Minutes", "Google Meet"],
    imageSrc: "/images/work_calendar_mgmt.webp",
    isRedacted: true
  },
  {
    id: "file-mgmt-sample",
    title: "File Management & Standardized Folder Structure",
    category: "organization",
    categoryLabel: "File Management",
    shortDesc: "Standardized 8-folder matter hierarchy (Client Matters, Case Law, Drafts, Contracts, Court Filings).",
    fullDesc: "Comprehensive cloud file architecture in Google Drive organizing Client Matters, Case Law Research, Legal Drafts & Documents, Contracts & Agreements, Court Procedures & Filing, Legal Correspondence, Legislation & Statutes, and Legal Templates.",
    challenge: "Disorganized file repositories and inconsistent folder structures creating delays in locating past precedents and active matter files.",
    solution: "Implemented an 8-folder numbered nomenclature tree with granular access permissions and chronological sub-indexing.",
    impact: "Instant file retrieval in under 5 seconds, zero lost documents, and seamless multi-lawyer collaboration.",
    toolsUsed: ["Google Drive", "Google Workspace", "Cloud Architecture", "Permission Controls"],
    imageSrc: "/images/work_doc_org.webp",
    isRedacted: true
  }
];

export const TOOLS_DATA: ToolItem[] = [
  {
    name: "Microsoft 365",
    category: "documents",
    categoryLabel: "Document Suite",
    proficiency: "Expert",
    description: "Word brief formatting, Excel matter tracking, PowerPoint trial decks, and secure Outlook enterprise management.",
    icon: "FileSpreadsheet"
  },
  {
    name: "Google Workspace",
    category: "cloud",
    categoryLabel: "Cloud Suite",
    proficiency: "Expert",
    description: "Google Calendar scheduling, Gmail custom labels, Docs collaboration, Drive 8-folder architecture, and Google Meet.",
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
