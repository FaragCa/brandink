import {
  LayoutDashboard, FolderKanban, CheckSquare, FolderOpen,
  MessageSquare, CreditCard, Settings,
} from "lucide-react";

export type NavItem = {
  slug: string;
  label: string;
  icon: React.ComponentType<{ size?: number; className?: string }>;
  /** Sub-items used by the generic SectionPage to populate merged sections. */
  items: string[];
};

// A focused, 6-item client portal + Settings. Everything a client actually
// needs, grouped so nothing is more than one click away.
export const nav: NavItem[] = [
  { slug: "dashboard", label: "Overview", icon: LayoutDashboard, items: [] },
  { slug: "project", label: "Project", icon: FolderKanban, items: [] },
  { slug: "approvals", label: "Approvals & Tasks", icon: CheckSquare, items: ["Designs to review", "Requested revisions", "Your tasks", "Required uploads", "Approval history"] },
  { slug: "files", label: "Files & Assets", icon: FolderOpen, items: ["Brand assets", "Logos & source files", "Final deliverables", "Documents & PDFs", "Contracts", "Invoices"] },
  { slug: "messages", label: "Messages", icon: MessageSquare, items: ["Project conversation", "Attachments", "Meeting summaries"] },
  { slug: "billing", label: "Billing", icon: CreditCard, items: [] },
];

export const settingsItem: NavItem = {
  slug: "settings", label: "Settings", icon: Settings,
  items: ["Profile & company", "Team members", "Notifications", "Password & security", "Appearance"],
};

export const navBySlug = Object.fromEntries([...nav, settingsItem].map((n) => [n.slug, n]));
