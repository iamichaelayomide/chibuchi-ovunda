export interface ServiceItem {
  id: string;
  number: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  deliverables: string[];
  turnaround: string;
  iconName: string;
}

export interface WorkSample {
  id: string;
  title: string;
  category: "all" | "organization" | "formatting" | "communication" | "calendar";
  categoryLabel: string;
  shortDesc: string;
  fullDesc: string;
  challenge: string;
  solution: string;
  impact: string;
  toolsUsed: string[];
  imageSrc: string;
  isRedacted: boolean;
}

export interface ToolItem {
  name: string;
  category: "practice" | "documents" | "cloud" | "communication" | "creative";
  categoryLabel: string;
  proficiency: "Expert" | "Advanced" | "Proficient";
  description: string;
  icon: string;
}

export interface TrustPillar {
  number: string;
  title: string;
  description: string;
  highlight: string;
}

export interface MetricItem {
  value: number;
  suffix: string;
  prefix?: string;
  label: string;
  sublabel: string;
}

export interface ContactFormData {
  name: string;
  firm: string;
  email: string;
  services: string[];
  urgency: string;
  message: string;
}
