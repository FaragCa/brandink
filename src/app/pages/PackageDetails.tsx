import { useParams, Link } from "react-router";
import { ArrowLeft, CheckCircle2, ArrowUpRight, Star } from "lucide-react";
import { motion } from "motion/react";

import imgFrame from "figma:asset/84f7485d3b3cd8b2f7a0274800f54c2b22f43621.png";

const brandFoundationsIncludes = [
  "Discovery Call",
  "Brand Questionnaire",
  "Creative Direction",
  "Moodboard",
  "Logo Design",
  "Logo Variations",
  "Colour Palette",
  "Typography Selection",
  "Brand Assets",
  "Social Media Profile Graphics",
  "5 Social Media Templates",
  "Business Card Design",
  "Email Signature",
  "Brand Guidelines",
  "Mockups",
  "Export Files",
];

const websiteExperienceIncludes = [
  "Website Strategy Session",
  "Website Planning",
  "Sitemap",
  "Wireframes",
  "Custom Website Design",
  "Responsive Mobile Design",
  "Framer Development",
  "Contact Form",
  "Basic SEO",
  "CMS Setup (where applicable)",
  "Launch Assistance",
  "Training Session",
];

const aiWorkflowIncludes = [
  "Discovery Session",
  "Workflow Audit",
  "Process Mapping",
  "Opportunity Assessment",
  "AI Integration Planning",
  "Workflow Design",
  "Documentation",
  "Staff Guidance",
  "Testing",
  "Implementation Support",
  "Optimization Recommendations",
];

const packagesData = {
  "brand-foundations": {
    number: "01",
    title: "Brand Foundations",
    tagline: "Perfect for businesses launching their first brand or refreshing an existing identity.",
    price: "$549",
    timeline: "Approximately 2–3 weeks",
    color: "bg-[#D7E84C]",
    textColor: "text-[#1b1d1e]",
    overview:
      "A complete brand foundation — logo, colour, type, and brand assets — packaged with guidelines and ready-to-use social and print materials so your brand looks consistent everywhere it shows up.",
    includeSections: [{ items: brandFoundationsIncludes }],
  },
  "website-experience": {
    number: "02",
    title: "Website Experience",
    tagline: "Ideal for businesses with an existing brand looking to establish or improve their online presence.",
    price: "$699",
    color: "bg-[#2E52A4]",
    textColor: "text-white",
    overview:
      "A fully responsive, professionally designed website built in Framer — from strategy and sitemap through to launch — with a working contact form, basic SEO, and a training session so you're confident managing it yourself.",
    includeSections: [{ items: websiteExperienceIncludes }],
    calloutTitle: "Perfect For",
    calloutItems: ["Small businesses", "Consultants", "Personal brands", "Startups", "Service-based businesses"],
  },
  "ai-workflow-integration": {
    number: "03",
    title: "AI & Workflow Integration",
    tagline: "Designed for businesses looking to save time, improve efficiency, and modernize their operations.",
    price: "$599",
    color: "bg-black",
    textColor: "text-white",
    overview:
      "Every automation project begins with understanding your current workflow before recommending tailored solutions. We audit how your business runs today, map out opportunities, and design and implement automation that fits the way you actually work.",
    includeSections: [{ items: aiWorkflowIncludes }],
    calloutTitle: "Examples",
    calloutItems: [
      "Client onboarding workflows",
      "Internal approval systems",
      "Team knowledge hubs",
      "Repetitive task automation",
      "Business process improvements",
      "Customer communication workflows",
      "Operational efficiencies",
    ],
  },
  "complete-business-launch": {
    number: "04",
    title: "Complete Business Launch",
    tagline: "Our most comprehensive package for businesses starting fresh or undergoing a complete transformation.",
    price: "$1,199",
    featured: "Best Value",
    color: "bg-[#1b1d1e]",
    textColor: "text-white",
    overview:
      "Everything in Brand Foundations, Website Experience, and AI & Workflow Integration, combined into a single, fully coordinated launch — plus a project roadmap, priority timeline, and 30 days of post-launch support.",
    includeSections: [
      { heading: "Everything in Brand Foundations", items: brandFoundationsIncludes },
      { heading: "Everything in Website Experience", items: websiteExperienceIncludes },
      { heading: "Everything in AI & Workflow Integration", items: aiWorkflowIncludes },
      { heading: "Plus", items: ["Project Roadmap", "Priority Timeline", "Launch Support", "30 Days of Post-Launch Support"] },
    ],
  },
};

export function PackageDetails() {
  const { id } = useParams();
  const pkgId = id && id in packagesData ? id : "complete-business-launch";
  const pkg = packagesData[pkgId as keyof typeof packagesData];

  return (
    <div className="flex flex-col items-center w-full bg-[#fbfbfb]">
      {/* Hero Section */}
      <motion.section
        layoutId={`package-card-${pkgId}`}
        transition={{ layout: { type: "spring", bounce: 0.15, duration: 0.8 } }}
        className={`w-[calc(100%-2rem)] max-w-[1272px] mx-auto mt-4 rounded-[40px] relative flex flex-col items-start pt-[60px] pb-[100px] bg-top bg-no-repeat bg-cover overflow-hidden ${pkg.textColor} ${pkg.color}`}
        style={{ backgroundImage: pkgId === "brand-foundations" ? `url('${imgFrame}')` : "none" }}
      >
        <div className="max-w-[1000px] w-full px-8 md:px-16 relative z-10 text-left">
          <Link
            to="/services"
            className={`inline-flex items-center gap-2 mb-12 transition-colors ${pkg.textColor === "text-white" ? "text-gray-400 hover:text-white" : "text-gray-500 hover:text-black"}`}
          >
            <ArrowLeft size={20} /> Back to Services
          </Link>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.4 }}>
            <div className="flex items-center gap-3 mb-6 flex-wrap">
              <div className={`text-sm font-medium px-4 py-1.5 rounded-full w-fit ${pkg.textColor === "text-white" ? "bg-white/20" : "bg-black text-white"}`}>
                Package {pkg.number}
              </div>
              {pkg.featured && (
                <div className="flex items-center gap-1.5 text-sm font-medium px-4 py-1.5 rounded-full w-fit bg-[#D7E84C] text-black">
                  <Star size={14} fill="currentColor" /> {pkg.featured}
                </div>
              )}
            </div>
            <h1 className="text-[44px] md:text-[80px] font-medium leading-[1.05] mb-8 tracking-[-0.03em]">
              {pkg.title}
            </h1>
            <p className={`text-[20px] md:text-[24px] max-w-[650px] mb-12 leading-[1.6] ${pkg.textColor === "text-white" ? "text-gray-300" : "text-gray-600"}`}>
              {pkg.tagline}
            </p>
            <div className="flex flex-wrap items-end gap-8">
              <div className="flex items-end gap-2">
                <span className="text-[56px] font-medium leading-none">{pkg.price}</span>
                <span className={`mb-2 text-xl ${pkg.textColor === "text-white" ? "text-gray-400" : "text-gray-500"}`}>CAD</span>
              </div>
              {pkg.timeline && (
                <div className={`mb-2 text-lg ${pkg.textColor === "text-white" ? "text-gray-300" : "text-gray-600"}`}>
                  Timeline: <span className="font-medium">{pkg.timeline}</span>
                </div>
              )}
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* Content Section */}
      <section className="w-full max-w-[900px] mx-auto px-4 py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-[32px] font-medium mb-6">Package Overview</h2>
          <p className="text-gray-600 text-lg leading-relaxed mb-16 max-w-[700px]">{pkg.overview}</p>

          <div className="flex flex-col gap-12">
            {pkg.includeSections.map((section, si) => (
              <div key={si}>
                <h3 className="text-2xl font-medium mb-8">{section.heading || "What's Included"}</h3>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4">
                  {section.items?.map((item, i) => (
                    <motion.li
                      key={i}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: Math.min(i, 10) * 0.05, duration: 0.4 }}
                      className="flex items-start gap-3 text-gray-700"
                    >
                      <CheckCircle2 size={22} className="text-[#2E52A4] shrink-0 mt-0.5" />
                      <span className="text-lg">{item}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {pkg.calloutTitle && (
            <div className="mt-16 bg-white border border-gray-200 rounded-[28px] p-8">
              <h3 className="text-xl font-medium mb-6">{pkg.calloutTitle}</h3>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-3">
                {pkg.calloutItems?.map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-gray-700">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#2E52A4] shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </motion.div>
      </section>

      {/* CTA */}
      <section className="w-full max-w-[1000px] mx-auto px-4 mb-24">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className={`${pkg.color} ${pkg.textColor} rounded-[40px] p-12 md:p-16 flex flex-col md:flex-row justify-between items-center text-left gap-8`}
        >
          <div className="max-w-[400px]">
            <h2 className="text-[36px] md:text-[48px] font-medium leading-tight mb-4">Ready to start your journey?</h2>
            <p className={`text-lg ${pkg.textColor === "text-white" ? "text-gray-300" : "text-gray-700"}`}>
              Let's schedule a call to discuss how this package fits your specific needs.
            </p>
          </div>
          <Link
            to="/contact"
            className={`shrink-0 flex items-center justify-center gap-2 py-4 px-8 rounded-full font-medium transition-colors ${pkg.textColor === "text-white" ? "bg-white text-black hover:bg-gray-100" : "bg-black text-white hover:bg-gray-800"}`}
          >
            Contact Us <ArrowUpRight size={20} />
          </Link>
        </motion.div>
      </section>
    </div>
  );
}
