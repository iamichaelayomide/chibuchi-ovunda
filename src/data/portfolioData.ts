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
    fullDesc: "Keep your inbox organized and under control. From sorting and prioritizing emails to drafting professional responses, I help clients stay on top of critical communication. Following your instructions, I organize emails with custom labels, flag urgent messages, manage follow-ups, and keep communication clear so nothing important gets overlooked.",
    deliverables: [
      "Custom legal label architecture (Agreements, Case files, Consultations, Contacts)",
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
    fullDesc: "Tell me what you need organized, and I will create a system that keeps everything easy to find. From digital filing to document organization, I help clients structure their files, maintain clear naming systems, and keep important documents accessible and up to date for everyday practice use.",
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
    title: "Minute Taking",
    shortDesc: "Capturing consultation overviews, key legal issues, covenants, and agreed action items.",
    fullDesc: "Tell me what you need documented, and I will make sure the important details are captured. From client consultations to team discussions, I help clients turn conversations into clear, organized records. Following your instructions, I record key points, decisions, action items, and deadlines.",
    deliverables: [
      "Structured client consultation executive summaries",
      "Key legal issue identification (Partnership structure, revenue sharing)",
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
    title: "File Management",
    shortDesc: "Standardized 8-folder hierarchy across Google Drive, Dropbox, and Clio.",
    fullDesc: "Tell me what you need organized, and I will make sure your files are easy to find and manage. From digital filing systems to document organization, I help clients keep their information structured, accessible, and secure with logical folder structures and consistent naming conventions.",
    deliverables: [
      "Standardized 8-folder hierarchy (Client Matters, Case Law, Drafts, Contracts, Court Procedures, Correspondence, Legislation, Templates)",
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
    title: "Calendar Management & Schedule System",
    category: "calendar",
    categoryLabel: "Calendar Management",
    shortDesc: "Organized monthly calendar with prioritized commitments, client consultations, buffer time, and court reminders.",
    fullDesc: "Tell me what you need scheduled, and I will help keep your time organized. From appointments and meetings to deadlines and reminders, I help clients manage their calendars efficiently with strategic buffer times and color-coded matter categories.",
    challenge: "Overlapping consultation requests, unorganized court deadlines, and lack of buffer time between client meetings causing practitioner fatigue.",
    solution: "Structured a centralized calendar with dedicated time blocks for email responses, court filings, client briefs, and Zoom conferences.",
    impact: "Zero missed deadlines, protected focus blocks for legal drafting, and clear schedule visibility.",
    toolsUsed: ["Google Calendar", "Zoom", "Google Meet", "Calendar Workflow"],
    imageSrc: "/images/work_calendar_mgmt.png",
    isRedacted: true
  },
  {
    id: "email-mgmt-sample",
    title: "Email Management & Custom Label System",
    category: "email",
    categoryLabel: "Email Management",
    shortDesc: "Categorized inbox with custom legal labels (Agreements, Case files, Client consultation, Contacts).",
    fullDesc: "Tell me what you need handled, and I will help keep your inbox organized and under control. From sorting and prioritizing emails to drafting professional responses, I help clients stay on top of important communication with custom labels and urgent flags.",
    challenge: "High volume of incoming inquiries and inter-counsel emails cluttering primary inbox and risking delayed responses to active matters.",
    solution: "Designed custom label taxonomy (Agreements, Case files, Client consultation, Contacts civil), urgent priority flagging, and dedicated consultation triage filters.",
    impact: "Inbox zero efficiency, under 2-hour response turnaround on active matters, and clean communication trails.",
    toolsUsed: ["Gmail", "Google Workspace", "Inbox Triage", "Email Labeling"],
    imageSrc: "/images/work_email_mgmt.png",
    isRedacted: true
  },
  {
    id: "doc-mgmt-sample",
    title: "Document Management & Legal Drafting",
    category: "document",
    categoryLabel: "Document Management",
    shortDesc: "Organized matter files (Client Meeting Summary, MOU, Minutes, Case facts: Adebayo v Zenith, Agreement).",
    fullDesc: "Tell me what you need organized, and I will create a system that keeps everything easy to find. From digital filing to document organization, I help clients structure their files, maintain clear naming systems, and keep important documents accessible.",
    challenge: "Drafting and formatting complex commercial covenants, dispute summaries, and multi-page agreements under tight statutory deadlines.",
    solution: "Structured Google Drive files including Client Meeting Summaries, MOUs, Meeting Minutes, Case facts, and Execution Agreements with uniform nomenclature.",
    impact: "Flawless document presentation, clear obligation tracking for parties, and rapid turnaround for counsel.",
    toolsUsed: ["Google Docs", "Microsoft Word", "Google Drive", "Legal Templates"],
    imageSrc: "/images/work_doc_mgmt.png",
    isRedacted: true
  },
  {
    id: "minute-taking-sample",
    title: "Minute Taking & Client Meeting Summary",
    category: "minutes",
    categoryLabel: "Minute Taking",
    shortDesc: "Executive consultation record for Mr. Tunde Adebayo detailing discussion overview, key issues, and covenants.",
    fullDesc: "Tell me what you need documented, and I will make sure the important details are captured. Structured client meeting summary for Mr. Tunde Adebayo documenting partnership discussion overview, key identified issues (partnership structure, revenue sharing), and agreed terms.",
    challenge: "Extracting actionable legal covenants and operational decisions from extensive verbal client consultations.",
    solution: "Drafted structured executive summaries with distinct sections: 1. Overview of Discussion, 2. Key Issues Identified, 3. Agreed Terms.",
    impact: "Attorneys save hours of review time and retain precise, privileged records for draft preparation.",
    toolsUsed: ["Google Docs", "Executive Framework", "Legal Minutes", "Google Meet"],
    imageSrc: "/images/work_minute_taking.png",
    isRedacted: true
  },
  {
    id: "file-mgmt-sample",
    title: "File Management & Standardized Folder Structure",
    category: "file",
    categoryLabel: "File Management",
    shortDesc: "Standardized 8-folder matter hierarchy (01 Client Matters, 02 Case Law, 03 Drafts, 04 Contracts, 05 Filing).",
    fullDesc: "Tell me what you need organized, and I will make sure your files are easy to find and manage. Comprehensive cloud file architecture in Google Drive organizing Client Matters, Case Law Research, Legal Drafts & Documents, Contracts & Agreements, Court Procedures & Filing, Legal Correspondence, Legislation & Statutes, and Legal Templates.",
    challenge: "Disorganized file repositories and inconsistent folder structures creating delays in locating past precedents and active matter files.",
    solution: "Implemented an 8-folder numbered nomenclature tree with granular access permissions and chronological sub-indexing.",
    impact: "Instant file retrieval in under 5 seconds, zero lost documents, and seamless multi-lawyer collaboration.",
    toolsUsed: ["Google Drive", "Google Workspace", "Cloud Architecture", "Permission Controls"],
    imageSrc: "/images/work_file_mgmt.png",
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
