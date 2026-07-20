// Shared data for the BrandInk client dashboard.

export const brandProcess = [
  { step: "01", name: "Discover", desc: "We get to know your business, goals, audience, and vision." },
  { step: "02", name: "Strategize", desc: "We develop a clear plan tailored to your project." },
  { step: "03", name: "Design & Build", desc: "We create your brand, website, or digital solution." },
  { step: "04", name: "Refine", desc: "You review the work, provide feedback, and we perfect every detail." },
  { step: "05", name: "Launch & Grow", desc: "We deliver everything you need and support you beyond launch." },
];

export type Journey = {
  id: string;
  title: string;
  blurb: string;
  steps: { name: string; items: string[] }[];
  deliverables: string[];
};

export const journeys: Journey[] = [
  {
    id: "brand-foundations",
    title: "Brand Foundations",
    blurb: "Perfect for businesses ready to establish a professional identity.",
    steps: [
      { name: "Discovery", items: ["Intro call", "Learn about the business", "Goals and vision", "Target audience", "Competitor review", "Brand questionnaire"] },
      { name: "Brand Strategy", items: ["Brand positioning", "Brand personality", "Brand values", "Tone of voice", "Creative direction", "Moodboard"] },
      { name: "Brand Design", items: ["Logo concepts", "Colour palette", "Typography", "Iconography (if needed)"] },
      { name: "Refinement", items: ["Review presentation", "Feedback", "Revisions", "Final approval"] },
      { name: "Delivery", items: ["Logo files (PNG, SVG, PDF, EPS)", "Brand Guide PDF", "Colour codes", "Typography", "Brand assets"] },
    ],
    deliverables: ["Discovery Workshop", "Brand Strategy", "Moodboard", "Primary Logo", "Secondary Logo", "Logo Icon", "Colour Palette", "Typography System", "Brand Guidelines", "Final Brand Files"],
  },
  {
    id: "website-experience",
    title: "Website Experience",
    blurb: "Perfect for businesses needing a professional online presence.",
    steps: [
      { name: "Discovery", items: ["Project goals", "Sitemap", "Required pages", "Features", "Content review"] },
      { name: "Planning", items: ["Website strategy", "User experience", "Wireframes", "Information architecture"] },
      { name: "Design", items: ["Homepage", "Interior pages", "Responsive layouts", "UI Design"] },
      { name: "Development", items: ["Website build", "Mobile optimization", "SEO setup", "Testing"] },
      { name: "Launch", items: ["Domain connection", "Hosting setup", "Analytics", "Final walkthrough", "Training session"] },
    ],
    deliverables: ["Discovery Session", "Website Strategy", "Wireframes", "Responsive Website", "Mobile Optimization", "Basic SEO", "Contact Forms", "CMS Setup", "Analytics", "Website Launch", "Training & Handover"],
  },
  {
    id: "ai-workflow-integration",
    title: "AI & Workflow Integration",
    blurb: "Perfect for businesses looking to save time and automate repetitive work.",
    steps: [
      { name: "Business Audit", items: ["Learn current workflow", "Identify bottlenecks", "Map existing processes"] },
      { name: "AI Strategy", items: ["Identify automation opportunities", "Recommend AI tools", "Design workflow improvements"] },
      { name: "Implementation", items: ["Configure workflows", "Set up automations", "Connect business tools", "Create documentation"] },
      { name: "Testing", items: ["Test workflows", "Optimize", "Staff walkthrough"] },
      { name: "Launch", items: ["Deliver documentation", "Training", "Ongoing support options"] },
    ],
    deliverables: ["Workflow Audit", "AI Strategy", "Process Mapping", "Workflow Automation", "Business Tool Integrations", "Documentation", "Team Training", "Launch Support"],
  },
  {
    id: "complete-business-launch",
    title: "Complete Business Launch",
    blurb: "Everything you need to launch a professional business under one roof.",
    steps: [
      { name: "Discovery", items: ["Business goals", "Vision", "Audience", "Services", "Growth plan"] },
      { name: "Brand Creation", items: ["Strategy", "Logo", "Visual identity", "Brand Guidelines"] },
      { name: "Website Design", items: ["UX Planning", "Website Design", "Development", "Testing"] },
      { name: "Business Systems", items: ["AI workflow recommendations", "Forms", "Contact systems", "Client onboarding setup"] },
      { name: "Launch", items: ["Website goes live", "Final assets delivered", "Training session", "Support handover"] },
    ],
    deliverables: ["Brand Strategy", "Logo Suite", "Colour Palette", "Typography", "Brand Guidelines", "Responsive Website", "CMS", "SEO Setup", "Contact Forms", "Analytics", "AI Workflow Recommendations", "Client Intake Forms", "Business Documentation", "Website Launch", "Final Asset Package", "Training Session", "Support"],
  },
];

// The mock "current client" — everything on the dashboard is scoped to this account.
export const client = {
  name: "Ava Thompson",
  company: "Northwind Studio",
  email: "ava@northwindstudio.com",
  package: "complete-business-launch",
  packageTitle: "Complete Business Launch",
  currentStage: 2, // 0-indexed into brandProcess → "Design & Build"
  progress: 62,
  nextMeeting: { title: "Website Design Review", when: "Tue, 21 Jul · 10:00 AM", link: "#" },
};

export const milestones = [
  { name: "Brand Guidelines delivered", date: "Jul 8", done: true },
  { name: "Homepage design approved", date: "Jul 15", done: true },
  { name: "Interior pages review", date: "Jul 21", done: false },
  { name: "Development handoff", date: "Jul 28", done: false },
  { name: "Website launch", date: "Aug 8", done: false },
];

export const activity = [
  { who: "BrandInk", text: "uploaded Homepage_v3.fig to Website files", when: "2h ago" },
  { who: "You", text: "approved the Brand Guidelines PDF", when: "1d ago" },
  { who: "Liam (Designer)", text: "left a comment on Interior Pages", when: "1d ago" },
  { who: "BrandInk", text: "sent invoice #1042 for milestone 2", when: "3d ago" },
];

export const tasks = [
  { title: "Upload team headshots for the About page", due: "Due Jul 20", priority: "high" },
  { title: "Complete the SEO keyword questionnaire", due: "Due Jul 22", priority: "medium" },
  { title: "Review interior page copy", due: "Due Jul 23", priority: "medium" },
];

export const approvals = [
  { title: "Interior Pages — Design v2", type: "Website", status: "pending" },
  { title: "Contact Form Layout", type: "Website", status: "pending" },
];

export const invoices = [
  { id: "1042", label: "Milestone 2 — Website Design", amount: "$450", status: "Due", date: "Jul 18" },
  { id: "1038", label: "Milestone 1 — Brand Foundations", amount: "$600", status: "Paid", date: "Jul 2" },
  { id: "1031", label: "Project deposit", amount: "$400", status: "Paid", date: "Jun 20" },
];

// ── Course-style onboarding journey ─────────────────────────────
export type ModuleType = "call" | "upload" | "form" | "review" | "info";
export type ModuleStatus = "done" | "current" | "todo";

export type JourneyModule = {
  id: string;
  title: string;
  type: ModuleType;
  action: string;
  desc: string;
  status: ModuleStatus;
  items: string[];
};

export const courseModules: JourneyModule[] = [
  { id: "kickoff", title: "Kickoff Call", type: "call", action: "Book call", status: "done",
    desc: "A 45-min call to align on goals, audience, and vision.",
    items: ["Goals & vision", "Target audience", "Competitor review", "Timeline"] },
  { id: "questionnaire", title: "Brand Questionnaire", type: "form", action: "Start", status: "done",
    desc: "Tell us about your business so we can shape your brand.",
    items: ["Business overview", "Brand personality", "Style preferences", "Do's & don'ts"] },
  { id: "upload-assets", title: "Upload Brand Assets", type: "upload", action: "Upload files", status: "current",
    desc: "Share any existing logos, photos, or reference material.",
    items: ["Current logo (if any)", "Photography", "Inspiration / references", "Team headshots"] },
  { id: "moodboard", title: "Review Moodboard", type: "review", action: "Review", status: "todo",
    desc: "Approve the visual direction before we design.",
    items: ["Colour direction", "Typography feel", "Imagery style"] },
  { id: "logo", title: "Approve Logo Concepts", type: "review", action: "Review", status: "todo",
    desc: "Choose and refine your favourite logo concept.",
    items: ["3 logo concepts", "Feedback round", "Final selection"] },
  { id: "website-content", title: "Website Content", type: "upload", action: "Upload", status: "todo",
    desc: "Add the copy and images for each page of your site.",
    items: ["Page copy", "Images", "Testimonials", "Contact details"] },
  { id: "launch", title: "Final Review & Launch", type: "review", action: "Review", status: "todo",
    desc: "Final walkthrough, then we take your project live.",
    items: ["Full site review", "Final approval", "Go live", "Training session"] },
];

// ── Google Drive-style files ────────────────────────────────────
export type DriveFile = {
  name: string;
  kind: "pdf" | "image" | "vector" | "figma" | "doc" | "font" | "zip";
  size: string;
  modified: string;
};

export const driveFolders = [
  { id: "brand", name: "Brand Assets", count: 24, color: "#2E52A4" },
  { id: "website", name: "Website Files", count: 18, color: "#0EA5E9" },
  { id: "deliverables", name: "Final Deliverables", count: 9, color: "#16A34A" },
  { id: "marketing", name: "Marketing", count: 12, color: "#D97706" },
  { id: "contracts", name: "Contracts", count: 4, color: "#7C3AED" },
  { id: "invoices", name: "Invoices", count: 6, color: "#DC2626" },
];

export const driveFilesByFolder: Record<string, DriveFile[]> = {
  brand: [
    { name: "Logo_Primary.svg", kind: "vector", size: "48 KB", modified: "Jul 15" },
    { name: "Logo_Suite.zip", kind: "zip", size: "3.2 MB", modified: "Jul 15" },
    { name: "Brand_Guidelines.pdf", kind: "pdf", size: "6.1 MB", modified: "Jul 8" },
    { name: "Colour_Palette.png", kind: "image", size: "220 KB", modified: "Jul 8" },
    { name: "Typography.pdf", kind: "pdf", size: "1.1 MB", modified: "Jul 8" },
    { name: "Inter.zip", kind: "font", size: "2.4 MB", modified: "Jul 7" },
  ],
  website: [
    { name: "Homepage_v3.fig", kind: "figma", size: "12 MB", modified: "2h ago" },
    { name: "Interior_Pages.fig", kind: "figma", size: "9 MB", modified: "1d ago" },
    { name: "Hero_Image.png", kind: "image", size: "1.8 MB", modified: "Jul 14" },
    { name: "Sitemap.pdf", kind: "pdf", size: "340 KB", modified: "Jul 3" },
  ],
  deliverables: [
    { name: "Final_Brand_Package.zip", kind: "zip", size: "48 MB", modified: "Jul 16" },
    { name: "Social_Templates.zip", kind: "zip", size: "22 MB", modified: "Jul 12" },
  ],
  marketing: [
    { name: "Instagram_Kit.zip", kind: "zip", size: "18 MB", modified: "Jul 10" },
    { name: "Business_Card.pdf", kind: "pdf", size: "900 KB", modified: "Jul 9" },
  ],
  contracts: [
    { name: "Service_Agreement.pdf", kind: "pdf", size: "280 KB", modified: "Jun 18" },
    { name: "NDA.pdf", kind: "pdf", size: "140 KB", modified: "Jun 18" },
  ],
  invoices: [
    { name: "Invoice_1042.pdf", kind: "pdf", size: "90 KB", modified: "Jul 18" },
    { name: "Invoice_1038.pdf", kind: "pdf", size: "88 KB", modified: "Jul 2" },
  ],
};

// ── Gmail-style message threads ─────────────────────────────────
export type EmailMessage = { from: string; fromEmail: string; me?: boolean; time: string; body: string };
export type EmailThread = {
  id: string;
  subject: string;
  from: string;
  preview: string;
  date: string;
  unread: boolean;
  starred: boolean;
  label?: string;
  messages: EmailMessage[];
};

export const threads: EmailThread[] = [
  {
    id: "t1", subject: "Homepage design — v3 ready for review", from: "Liam · BrandInk",
    preview: "Hi Ava, we've uploaded the latest homepage design. Take a look and let us know…",
    date: "2h ago", unread: true, starred: true, label: "Website",
    messages: [
      { from: "Liam Carter", fromEmail: "liam@brandink.agency", time: "Today, 9:14 AM", body: "Hi Ava,\n\nWe've uploaded the latest homepage design (v3) to your Files. We refined the hero section and tightened the spacing based on your last round of feedback.\n\nCould you take a look and share any thoughts by Wednesday? Once approved, we'll move into the interior pages.\n\nThanks,\nLiam" },
      { from: "Ava Thompson", fromEmail: "ava@northwindstudio.com", me: true, time: "Today, 10:02 AM", body: "Hi Liam,\n\nLooks great — the hero is much stronger now. I'll do a proper review this afternoon and send notes.\n\nAva" },
    ],
  },
  {
    id: "t2", subject: "Invoice #1042 — Milestone 2", from: "BrandInk Billing",
    preview: "Your invoice for milestone 2 (Website Design) is now available in Billing…",
    date: "3d ago", unread: false, starred: false, label: "Billing",
    messages: [
      { from: "BrandInk Billing", fromEmail: "billing@brandink.agency", time: "Jul 15, 8:30 AM", body: "Hi Ava,\n\nYour invoice for Milestone 2 (Website Design) — $450 — is now available in your Billing section. Payment is due Jul 18.\n\nThank you!" },
    ],
  },
  {
    id: "t3", subject: "Brand Guidelines delivered 🎉", from: "Mia · BrandInk",
    preview: "Congrats — your brand guidelines are finalized and delivered to your Files…",
    date: "1w ago", unread: false, starred: true, label: "Brand",
    messages: [
      { from: "Mia Nguyen", fromEmail: "mia@brandink.agency", time: "Jul 8, 4:45 PM", body: "Hi Ava,\n\nYour brand guidelines are finalized! You'll find the PDF plus all logo files in your Files under Brand Assets.\n\nWe're excited to move into the website phase next.\n\nMia" },
      { from: "Ava Thompson", fromEmail: "ava@northwindstudio.com", me: true, time: "Jul 8, 6:10 PM", body: "Thank you Mia — they look beautiful! The team loves them." },
    ],
  },
  {
    id: "t4", subject: "Quick question about your booking system", from: "Noah · BrandInk",
    preview: "For the AI workflow piece, which booking tool are you currently using…",
    date: "1w ago", unread: false, starred: false, label: "AI & Workflow",
    messages: [
      { from: "Noah Reed", fromEmail: "noah@brandink.agency", time: "Jul 6, 11:20 AM", body: "Hi Ava,\n\nFor the workflow automation, which booking / scheduling tool are you currently using? That'll help us map the right integration.\n\nNoah" },
    ],
  },
];
