import { ServiceItem, WorkSample, ToolItem, TrustPillar, MetricItem } from "../types";

export const PORTFOLIO_INFO = {
  name: "Chibuchi Ovunda",
  title: "Virtual Legal Assistant",
  subtitle: "Virtual Assistance & Legal Administrative Support",
  bio: "Helping legal practitioners and busy professionals organize schedules, prioritize inboxes, structure digital filing systems, capture clear meeting minutes, and keep documents accessible.",
  email: "ovundachibuchi01@gmail.com",
  location: "Akure, Nigeria · Available for Remote Support",
  availabilityStatus: "Available for Retainers & Engagements",
};

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: "calendar-mgmt",
    number: "01",
    title: "Calendar Management",
    shortDesc: "Appointments, meetings, deadlines, buffer times, and reminders.",
    fullDesc: "From appointments and meetings to deadlines and reminders, I help my clients manage their calendars efficiently. Following your instructions, I organize schedules, prioritize important commitments, add buffer time, and ensure meetings and deadlines are clearly planned so nothing important gets overlooked.",
    deliverables: [
      "Appointment, hearing, and meeting scheduling",
      "Deadline tracking and timely reminder setups",
      "Prioritizing important commitments and focus blocks",
      "Adding strategic buffer time between engagements",
      "Cross-timezone calendar organization and updates"
    ],
    turnaround: "Prompt Daily Coordination",
    iconName: "Calendar"
  },
  {
    id: "email-mgmt",
    number: "02",
    title: "Email Management",
    shortDesc: "Inbox organization, custom legal labeling, urgent flagging, and professional responses.",
    fullDesc: "From sorting and prioritizing emails to drafting professional responses, I help my clients stay on top of important communication. Following your instructions, I organize emails, flag urgent messages, manage follow-ups, and keep communication clear so nothing important gets overlooked.",
    deliverables: [
      "Sorting and prioritizing incoming correspondence",
      "Custom matter labels (Agreements, Case files, Consultations, Contacts)",
      "Flagging urgent messages for immediate attention",
      "Drafting clear, professional responses",
      "Tracking pending follow-ups and communication logs"
    ],
    turnaround: "Timely Daily Triage",
    iconName: "MailCheck"
  },
  {
    id: "doc-mgmt",
    number: "03",
    title: "Document Management",
    shortDesc: "Digital filing, document organization, naming systems, and accessible records.",
    fullDesc: "From digital filing to document organization, I help clients structure their files, maintain clear naming systems, and keep important documents accessible and up to date. I can organize client records, legal documents, drafts, and final documents into a simple, efficient system designed for everyday use.",
    deliverables: [
      "Structuring client records, drafts, and final documents",
      "Consistent naming conventions and version management",
      "Client Meeting Summaries and MOU preparation",
      "Digital filing for agreements and case facts",
      "Keeping critical practice documents up to date"
    ],
    turnaround: "Dependable Delivery",
    iconName: "FileCheck"
  },
  {
    id: "minute-taking",
    number: "04",
    title: "Minute Taking",
    shortDesc: "Capturing consultation overviews, key legal issues, decisions, and action items.",
    fullDesc: "From meetings and consultations to team discussions, I help my clients turn conversations into clear, organized records. Following your instructions, I record key points, decisions, action items, and deadlines, creating concise meeting minutes that make follow-up simple and effective.",
    deliverables: [
      "Structured meeting and consultation summaries",
      "Overview of discussion and background capture",
      "Key issue and decision identification",
      "Action items, responsibilities, and deadline logs",
      "Concise, privileged records for simple follow-up"
    ],
    turnaround: "Prompt Post-Meeting Turnaround",
    iconName: "SearchCheck"
  },
  {
    id: "file-mgmt",
    number: "05",
    title: "File Management",
    shortDesc: "Standardized 8-folder cloud hierarchy and logical digital filing systems.",
    fullDesc: "From digital filing systems to document organization, I help my clients keep their information structured, accessible, and secure. Following your instructions, I create logical folder structures, apply consistent naming conventions, organize documents, and maintain a system that keeps everything in its proper place.",
    deliverables: [
      "Standardized 8-folder hierarchy (01 Client Matters, 02 Case Law, 03 Drafts, 04 Contracts, 05 Filing, 06 Correspondence, 07 Statutes, 08 Templates)",
      "Logical folder architecture in Google Drive & cloud workspaces",
      "Consistent naming conventions across all matter files",
      "Structured document filing and permission organization",
      "Rapid document retrieval for everyday practice use"
    ],
    turnaround: "Ongoing Retainer Support",
    iconName: "FolderKanban"
  }
];

export const WORK_SAMPLES: WorkSample[] = [
  {
    id: "calendar-mgmt-sample",
    title: "Calendar Management & Scheduling",
    category: "calendar",
    categoryLabel: "Calendar Management",
    shortDesc: "Organized calendar with scheduled commitments, buffer times, client briefs, and deadline reminders.",
    fullDesc: "Calendar management coordinating appointments, Zoom meetings, file submissions, client briefs, and follow-ups with color-coded categories and buffer time.",
    challenge: "Overlapping appointment requests and lack of buffer time between meetings causing scheduling conflicts.",
    solution: "Structured a centralized calendar with dedicated blocks for email responses, court filings, client briefs, and Zoom meetings.",
    impact: "Clear visibility into daily priorities, zero missed appointments, and protected focus time.",
    toolsUsed: ["Google Calendar", "Zoom", "Google Meet"],
    imageSrc: "/images/work_calendar_mgmt.png",
    isRedacted: true
  },
  {
    id: "email-mgmt-sample",
    title: "Email Management & Custom Labels",
    category: "email",
    categoryLabel: "Email Management",
    shortDesc: "Custom matter labels (Agreements, Case files, Client consultation, Contacts civil) with urgent tagging.",
    fullDesc: "Inbox organization system using custom labels and automated filters to sort Agreements, Case files, Client consultations, and Contacts, ensuring urgent communications are prioritized.",
    challenge: "Unsorted inbox making it difficult to spot urgent messages and follow up promptly.",
    solution: "Designed custom label taxonomy (Agreements, Case files, Client consultation, Contacts civil) and flagged high-priority messages.",
    impact: "Clean inbox organization, clear tracking of active conversations, and prompt communication.",
    toolsUsed: ["Gmail", "Google Workspace"],
    imageSrc: "/images/work_email_mgmt.png",
    isRedacted: true
  },
  {
    id: "doc-mgmt-sample",
    title: "Document Management & Organization",
    category: "document",
    categoryLabel: "Document Management",
    shortDesc: "Organized files (Client Meeting Summary, MOU, Minutes, Case facts: Adebayo v Zenith, Agreement).",
    fullDesc: "Structuring and maintaining digital filing for Client Meeting Summaries, Memorandums of Understanding (MOU), Minutes, Case facts, and Execution Agreements.",
    challenge: "Disorganized files and inconsistent naming making documents difficult to locate when needed.",
    solution: "Structured cloud files with consistent naming conventions and clear document categorization.",
    impact: "Instant document access, clear version tracking, and well-organized matter files.",
    toolsUsed: ["Google Docs", "Microsoft Word", "Google Drive"],
    imageSrc: "/images/work_doc_mgmt.png",
    isRedacted: true
  },
  {
    id: "minute-taking-sample",
    title: "Minute Taking & Client Meeting Summary",
    category: "minutes",
    categoryLabel: "Minute Taking",
    shortDesc: "Client consultation record for Mr. Tunde Adebayo detailing discussion overview, key issues, and covenants.",
    fullDesc: "Structured client meeting summary for Mr. Tunde Adebayo documenting discussion overview, key identified issues (partnership structure, revenue sharing), and agreed terms.",
    challenge: "Capturing complex consultation discussions into concise, actionable written records.",
    solution: "Drafted structured summary with distinct sections: 1. Overview of Discussion, 2. Key Issues Identified, 3. Agreed Terms.",
    impact: "Concise written record that makes follow-up simple and provides clear reference for next steps.",
    toolsUsed: ["Google Docs", "Google Meet"],
    imageSrc: "/images/work_minute_taking.png",
    isRedacted: true
  },
  {
    id: "file-mgmt-sample",
    title: "File Management & 8-Folder Structure",
    category: "file",
    categoryLabel: "File Management",
    shortDesc: "Standardized 8-folder directory (01 Client Matters, 02 Case Law, 03 Drafts, 04 Contracts, 05 Filing).",
    fullDesc: "Cloud file architecture in Google Drive organizing Client Matters, Case Law Research, Legal Drafts & Documents, Contracts & Agreements, Court Procedures & Filing, Legal Correspondence, Legislation & Statutes, and Legal Templates.",
    challenge: "Unstructured file storage causing delays when searching for past documents or research.",
    solution: "Implemented an 8-folder numbered hierarchy with uniform folder and file naming.",
    impact: "Simple, efficient file system where every document stays in its proper place and is easy to find.",
    toolsUsed: ["Google Drive", "Google Workspace"],
    imageSrc: "/images/work_file_mgmt.png",
    isRedacted: true
  }
];

export const TOOLS_DATA: ToolItem[] = [
  {
    name: "Google Calendar",
    category: "practice",
    categoryLabel: "Scheduling",
    proficiency: "Proficient",
    description: "Organizing schedules, prioritizing commitments, adding buffer time, and setting meeting reminders.",
    icon: "Calendar"
  },
  {
    name: "Gmail",
    category: "communication",
    categoryLabel: "Email Triage",
    proficiency: "Proficient",
    description: "Sorting and prioritizing inboxes, custom labeling, flagging urgent emails, and managing follow-ups.",
    icon: "MailCheck"
  },
  {
    name: "Google Drive",
    category: "cloud",
    categoryLabel: "Cloud Filing",
    proficiency: "Proficient",
    description: "Standardized 8-folder directory, logical file naming, and maintaining accessible cloud archives.",
    icon: "FolderGit2"
  },
  {
    name: "Google Docs",
    category: "documents",
    categoryLabel: "Documentation",
    proficiency: "Proficient",
    description: "Drafting meeting summaries, MOUs, minutes of meeting, agreements, and case summaries.",
    icon: "FileSpreadsheet"
  },
  {
    name: "Microsoft Word",
    category: "documents",
    categoryLabel: "Document Prep",
    proficiency: "Proficient",
    description: "Document drafting, formatting agreements, briefs, and structured legal records.",
    icon: "FileCheck"
  },
  {
    name: "Zoom & Google Meet",
    category: "practice",
    categoryLabel: "Virtual Meetings",
    proficiency: "Proficient",
    description: "Coordinating virtual consultations, meeting invites, and capturing live consultation minutes.",
    icon: "SearchCheck"
  }
];

export const TRUST_PILLARS: TrustPillar[] = [
  {
    number: "01",
    title: "Strict Confidentiality",
    description: "All client matters, documents, and communications are handled with absolute discretion and non-disclosure.",
    highlight: "100% Confidentiality & Discretion"
  },
  {
    number: "02",
    title: "Detail & Accuracy",
    description: "Careful attention to naming conventions, dates, discussion points, and clear formatting.",
    highlight: "Consistent Naming & Formatting"
  },
  {
    number: "03",
    title: "Punctuality & Reliability",
    description: "Reliable scheduling, timely email follow-ups, and meeting commitments without delay.",
    highlight: "Dependable Daily Support"
  },
  {
    number: "04",
    title: "Clear Communication",
    description: "Organized status updates, articulate message drafting, and smooth remote collaboration.",
    highlight: "Direct & Clear Coordination"
  }
];

export const CORE_CAPABILITY_PILLARS = [
  {
    title: "Calendar Management",
    desc: "Appointments, deadlines, buffer times & reminder tracking.",
    iconName: "Calendar"
  },
  {
    title: "Email Management",
    desc: "Custom labels, inbox sorting, urgent flags & draft replies.",
    iconName: "MailCheck"
  },
  {
    title: "Document & Minutes",
    desc: "Structured meeting summaries, MOUs & agreement files.",
    iconName: "FileCheck"
  },
  {
    title: "8-Folder File System",
    desc: "Logical cloud hierarchy and consistent naming conventions.",
    iconName: "FolderKanban"
  }
];
