import { useState } from "react";
import { Link } from "react-router";
import { Plus, Minus, ArrowRight, ArrowUpRight, Check, Star } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { SectionLabel } from "../components/CinematicEffects";

import imgFrame from "figma:asset/84f7485d3b3cd8b2f7a0274800f54c2b22f43621.png";

const brandFoundations = {
  id: "brand-foundations",
  number: "01",
  title: "Brand Foundations",
  tagline: "Perfect for businesses launching their first brand or refreshing an existing identity.",
  price: "$549",
  timeline: "Approximately 2–3 weeks",
  includes: [
    "Discovery Call",
    "Brand Questionnaire",
    "Creative Direction",
    "Moodboard",
    "Logo Design",
    "Logo Variations",
    "Colour Palette",
    "Typography Selection",
  ],
};

const websiteExperience = {
  id: "website-experience",
  number: "02",
  title: "Website Experience",
  tagline: "Ideal for businesses with an existing brand looking to establish or improve their online presence.",
  price: "$699",
  includes: [
    "Website Strategy Session",
    "Custom Website Design",
    "Responsive Mobile Design",
    "Framer Development",
    "Contact Form",
    "Basic SEO",
  ],
};

const aiWorkflow = {
  id: "ai-workflow-integration",
  number: "03",
  title: "AI & Workflow Integration",
  tagline: "Designed for businesses looking to save time, improve efficiency, and modernize their operations.",
  price: "$599",
  includes: [
    "Discovery Session",
    "Workflow Audit",
    "Process Mapping",
    "AI Integration Planning",
    "Workflow Design",
    "Implementation Support",
  ],
  examples: ["Client onboarding", "Approval systems", "Task automation", "Team knowledge hubs"],
};

const completeLaunch = {
  id: "complete-business-launch",
  number: "04",
  title: "Complete Business Launch",
  tagline: "Our most comprehensive package for businesses starting fresh or undergoing a complete transformation.",
  price: "$1,199",
  featured: "Best Value",
  includes: [
    "Everything in Brand Foundations",
    "Everything in Website Experience",
    "Everything in AI & Workflow Integration",
    "Project Roadmap & Priority Timeline",
    "30 Days of Post-Launch Support",
  ],
};

const retainers = [
  {
    name: "Website Care",
    price: "$59",
    tagline: "Ideal for businesses who want peace of mind after launch.",
    includes: [
      "Secure Website Hosting",
      "Routine Maintenance",
      "Website Monitoring",
      "Content Updates",
      "Minor Design Changes",
      "Image Replacements",
      "Performance Monitoring",
      "Technical Support",
      "Priority Response Times",
    ],
    note: "Additional pages, new features, and larger updates can be quoted and added at any time.",
  },
  {
    name: "Brand & Marketing Support",
    price: "$159",
    tagline: "Stay consistent across every customer touchpoint.",
    includes: [
      "Social Media Graphics",
      "Marketing Materials",
      "Website Graphics",
      "Promotional Assets",
      "Brand Consistency Reviews",
      "New Campaign Assets",
      "Design Requests",
      "Priority Design Queue",
    ],
  },
  {
    name: "AI & Digital Support",
    price: "$199",
    tagline: "Keep your AI workflows and business systems optimized as your business grows.",
    includes: [
      "AI Workflow Maintenance",
      "Workflow Improvements",
      "Process Optimization",
      "Documentation Updates",
      "System Health Reviews",
      "Ongoing Consulting",
      "Priority Support",
    ],
    note: "New workflows, automations, and larger enhancements can be scoped and added whenever your business needs evolve.",
  },
];

const services = [
  {
    id: "01",
    title: "Brand Strategy & Identity",
    tagline: "Build a brand that people recognize, trust, and remember.",
    description: "Your brand is more than just a logo—it's the foundation of how customers perceive your business. We work with you to define your identity, develop a cohesive visual system, and create brand assets that ensure consistency across every touchpoint. Whether you're launching a new business or refreshing an existing one, we'll create a brand that reflects your values and supports your long-term goals.",
    points: [
      "Brand Discovery Workshop",
      "Brand Strategy",
      "Market & Competitor Research",
      "Target Audience Definition",
      "Brand Positioning",
      "Mission, Vision & Values",
      "Brand Personality",
      "Messaging & Tone of Voice",
      "Naming Support (optional)",
      "Logo Design",
      "Logo Variations",
      "Colour Palette",
      "Typography System",
      "Iconography",
      "Brand Patterns & Graphic Elements",
      "Business Cards",
      "Email Signatures",
      "Social Media Profile Graphics",
      "Social Media Templates",
      "Presentation Templates",
      "Marketing Collateral",
      "Brand Guidelines",
      "Mockups",
      "Final Export Files",
    ],
  },
  {
    id: "02",
    title: "Website Design & Digital Experiences",
    tagline: "Create digital experiences that leave lasting impressions.",
    description: "Your website is often the first interaction people have with your business. We design and build modern, responsive websites that not only look beautiful but are intuitive, accessible, and built with your users in mind. Every website is tailored to your goals while balancing aesthetics, usability, and performance.",
    points: [
      "Website Discovery",
      "Information Architecture",
      "User Experience (UX)",
      "User Interface (UI)",
      "Wireframing",
      "Responsive Design",
      "Website Development",
      "Landing Pages",
      "CMS Setup",
      "Contact Forms",
      "Booking Integrations",
      "Mobile Optimization",
      "Basic SEO",
      "Accessibility Best Practices",
      "Analytics Setup",
      "Website Launch",
      "Training & Handover",
    ],
  },
  {
    id: "03",
    title: "AI & Workflow Integration",
    tagline: "Work smarter by integrating AI and automation into your business.",
    description: "Many businesses spend hours every week on repetitive tasks that can be simplified through better workflows and intelligent automation. We help identify opportunities to streamline your operations by designing solutions that improve efficiency, reduce manual work, and support long-term growth. Every solution is customized to your existing business processes.",
    points: [
      "Workflow Analysis",
      "Business Process Optimization",
      "AI Workflow Integration",
      "Automation Strategy",
      "Internal Process Design",
      "Client Intake Systems",
      "Approval Workflows",
      "Internal Knowledge Systems",
      "Documentation Systems",
      "Digital Forms",
      "Team Workflows",
      "Customer Experience Improvements",
      "Operational Consulting",
      "Ongoing Optimization",
    ],
  },
  {
    id: "04",
    title: "Ongoing Support",
    tagline: "Your business evolves. Your digital presence should too.",
    description: "We provide ongoing support to keep your brand, website, and business systems performing at their best. Whether it's updating content, designing new assets, improving workflows, or expanding your website, we're here to help long after launch.",
    points: [],
  },
];

export function Services() {
  const [activeService, setActiveService] = useState<string | null>(services[0].id);

  return (
    <div className="flex flex-col items-center w-full bg-[#fbfbfb]">
      {/* Hero Section */}
      <section
        className="w-full relative flex flex-col items-center bg-top bg-no-repeat bg-cover pt-[80px] pb-[60px]"
        style={{ backgroundImage: `url('${imgFrame}')` }}
      >
        <div className="max-w-[800px] text-center px-4">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-[#1b1d1e] text-[50px] md:text-[70px] font-medium leading-[1.1] mb-6"
          >
            What we <span className="font-['Instrument_Serif',serif] italic font-normal tracking-[-2px] text-gray-500">do best</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-[18px] text-[rgba(27,29,30,0.6)] mx-auto leading-[1.6]"
          >
            Comprehensive brand, digital, and workflow solutions tailored to elevate your business and drive meaningful growth.
          </motion.p>
        </div>
      </section>

      {/* Accordion Services Section */}
      <section className="w-full max-w-[1100px] mx-auto px-4 py-20">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="md:col-span-5 flex flex-col gap-6"
          >
            <SectionLabel>Our expertise</SectionLabel>
            <h2 className="text-[40px] font-medium leading-tight">
              Our <span className="font-['Instrument_Serif',serif] italic text-gray-500">expertise</span>
            </h2>
            <p className="text-gray-500 text-lg leading-relaxed max-w-[400px]">
              We offer a holistic approach to brand, digital, and operational growth, combining strategic thinking with exceptional design and smart automation.
            </p>
          </motion.div>

          <div className="md:col-span-7 flex flex-col border-t border-gray-200">
            {services.map((service, i) => (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                key={service.id}
                className="border-b border-gray-200"
              >
                <button
                  onClick={() => setActiveService(activeService === service.id ? null : service.id)}
                  className="w-full py-8 flex items-center justify-between group text-left"
                >
                  <div className="flex items-center gap-6">
                    <span className="text-gray-400 font-medium text-lg w-8">{service.id}</span>
                    <h3 className={`text-2xl md:text-3xl font-medium transition-colors ${activeService === service.id ? "text-black" : "text-gray-500 group-hover:text-black"}`}>
                      {service.title}
                    </h3>
                  </div>
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center transition-colors shrink-0 ml-4 ${activeService === service.id ? "bg-black text-white" : "bg-gray-100 text-black group-hover:bg-gray-200"}`}>
                    {activeService === service.id ? <Minus size={20} /> : <Plus size={20} />}
                  </div>
                </button>

                <AnimatePresence>
                  {activeService === service.id && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.4, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <div className="pb-10 pl-[56px] pr-4 flex flex-col gap-6">
                        <p className="text-lg font-medium text-[#2E52A4]">{service.tagline}</p>
                        <p className="text-gray-600 text-lg leading-relaxed">{service.description}</p>
                        {service.points.length > 0 && (
                          <div>
                            <p className="font-medium text-sm text-gray-400 uppercase tracking-wide mb-4">Services include</p>
                            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-y-3 gap-x-6">
                              {service.points.map((point, idx) => (
                                <li key={idx} className="flex items-center gap-3 text-gray-700">
                                  <div className="w-1.5 h-1.5 rounded-full bg-[#2E52A4] shrink-0" />
                                  {point}
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}
                        <div className="flex flex-wrap gap-6 mt-2">
                          <button
                            onClick={() => document.getElementById("pricing")?.scrollIntoView({ behavior: "smooth" })}
                            className="inline-flex items-center gap-2 text-[#2E52A4] font-medium hover:text-[#24417F] transition-colors w-fit"
                          >
                            View pricing <ArrowRight size={18} />
                          </button>
                          <Link to="/projects" className="inline-flex items-center gap-2 text-[#2E52A4] font-medium hover:text-[#24417F] transition-colors w-fit">
                            View related projects <ArrowRight size={18} />
                          </Link>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="w-full bg-[#1b1d1e] py-24">
        <div className="w-full max-w-[1100px] mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className="md:col-span-4 flex flex-col gap-6 md:sticky md:top-[140px] md:self-start"
            >
              <div className="flex items-center gap-3">
                <span className="font-['JetBrains_Mono',monospace] text-[13px] text-[#D7E84C]">[02]</span>
                <span className="font-['JetBrains_Mono',monospace] text-[12px] tracking-[0.25em] uppercase text-white/40">How we work</span>
              </div>
              <h2 className="text-white text-[40px] font-medium leading-tight">
                From brief to <span className="font-['Instrument_Serif',serif] italic font-normal text-[#D7E84C]">launch</span>
              </h2>
              <p className="text-white/50 text-lg leading-relaxed max-w-[360px]">
                A clear, four-stage process with no guesswork — you'll always know what's happening and what's next.
              </p>
            </motion.div>

            <div className="md:col-span-8 flex flex-col">
              {[
                { step: "01", name: "Discovery", desc: "We start with a call to understand your business, your audience, and what success looks like for this project." },
                { step: "02", name: "Strategy & Design", desc: "We map out the approach and move into design — moodboards, concepts, and iterations, refined with your feedback." },
                { step: "03", name: "Build", desc: "Approved designs get built out — brand assets produced, or your site developed in Framer with clean, responsive code." },
                { step: "04", name: "Launch & Support", desc: "We test, polish, and ship. Every package includes support after launch so you're never on your own." },
              ].map((item, i) => (
                <motion.div
                  key={item.step}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="flex gap-8 py-8 border-b border-white/10 last:border-b-0"
                >
                  <span className="font-['JetBrains_Mono',monospace] text-[15px] text-white/30 pt-1 shrink-0 w-10">{item.step}</span>
                  <div>
                    <h3 className="text-white text-2xl font-medium mb-2">{item.name}</h3>
                    <p className="text-white/50 leading-relaxed max-w-[500px]">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Packages Section */}
      <section id="pricing" className="w-full max-w-[1200px] mx-auto px-4 py-24 flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16 max-w-[700px]"
        >
          <div className="flex justify-center"><SectionLabel>Packages</SectionLabel></div>
          <h2 className="text-[40px] md:text-[48px] font-medium leading-tight mb-4">
            Pick the package that fits <span className="font-['Instrument_Serif',serif] italic font-normal text-[#2E52A4]">where you are</span>
          </h2>
          <p className="text-lg text-gray-500 leading-relaxed">
            Clear, one-time packages priced in CAD — pick the scope that matches where your business is today.
          </p>
        </motion.div>

        <div className="w-full flex flex-col gap-6">
          {/* Brand + Website — two distinct standalone purposes, sized differently */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="md:col-span-7 group relative rounded-[32px] p-8 md:p-10 flex flex-col bg-white border border-gray-200 hover:-translate-y-2 transition-transform duration-300"
            >
              <div className="text-xs font-medium tracking-wide mb-3 text-gray-400">{brandFoundations.number}</div>
              <h3 className="text-2xl font-medium mb-3">{brandFoundations.title}</h3>
              <p className="mb-6 text-sm leading-relaxed text-gray-500 max-w-[420px]">{brandFoundations.tagline}</p>
              <div className="flex items-end gap-2 mb-6">
                <span className="text-[40px] font-medium leading-none">{brandFoundations.price}</span>
                <span className="mb-1 text-sm text-gray-500">CAD</span>
              </div>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2 mb-8 flex-1">
                {brandFoundations.includes.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-sm text-gray-700">
                    <Check size={14} className="shrink-0 mt-0.5 text-[#2E52A4]" />
                    {item}
                  </li>
                ))}
              </ul>
              <Link
                to={`/packages/${brandFoundations.id}`}
                className="py-3.5 px-6 rounded-full font-medium flex items-center justify-between transition-colors bg-black text-white hover:bg-[#2E52A4] w-full sm:w-fit sm:min-w-[220px]"
              >
                View Details <ArrowUpRight size={18} />
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="md:col-span-5 group relative rounded-[32px] p-8 flex flex-col bg-[#D7E84C] hover:-translate-y-2 transition-transform duration-300"
            >
              <div className="text-xs font-medium tracking-wide mb-3 text-black/50">{websiteExperience.number}</div>
              <h3 className="text-xl font-medium mb-3">{websiteExperience.title}</h3>
              <p className="mb-6 text-sm leading-relaxed text-gray-800">{websiteExperience.tagline}</p>
              <div className="flex items-end gap-2 mb-6">
                <span className="text-[36px] font-medium leading-none">{websiteExperience.price}</span>
                <span className="mb-1 text-sm text-gray-700">CAD</span>
              </div>
              <ul className="space-y-2 mb-8 flex-1">
                {websiteExperience.includes.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-sm text-gray-800">
                    <Check size={14} className="shrink-0 mt-0.5 text-black" />
                    {item}
                  </li>
                ))}
              </ul>
              <Link
                to={`/packages/${websiteExperience.id}`}
                className="py-3.5 px-6 rounded-full font-medium flex items-center justify-between transition-colors bg-black text-white hover:bg-gray-800"
              >
                View Details <ArrowUpRight size={18} />
              </Link>
            </motion.div>
          </div>

          {/* AI & Workflow — its own full-width horizontal banner, distinct purpose */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="w-full rounded-[32px] p-8 md:p-10 bg-[#1b1d1e] text-white flex flex-col md:flex-row gap-8 md:gap-16 hover:-translate-y-1 transition-transform duration-300"
          >
            <div className="md:w-[340px] shrink-0 flex flex-col">
              <div className="text-xs font-medium tracking-wide mb-3 text-white/50">{aiWorkflow.number}</div>
              <h3 className="text-2xl font-medium mb-3">{aiWorkflow.title}</h3>
              <p className="mb-6 text-sm leading-relaxed text-white/70">{aiWorkflow.tagline}</p>
              <div className="flex items-end gap-2 mb-6">
                <span className="text-[40px] font-medium leading-none">{aiWorkflow.price}</span>
                <span className="mb-1 text-sm text-white/50">CAD</span>
              </div>
              <Link
                to={`/packages/${aiWorkflow.id}`}
                className="py-3.5 px-6 rounded-full font-medium flex items-center justify-between transition-colors bg-white text-black hover:bg-gray-200 w-fit min-w-[200px]"
              >
                View Details <ArrowUpRight size={18} />
              </Link>
            </div>
            <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 gap-8">
              <div>
                <p className="font-medium text-sm text-white/50 uppercase tracking-wide mb-4">What's Included</p>
                <ul className="space-y-2.5">
                  {aiWorkflow.includes.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-sm text-white/90">
                      <Check size={14} className="shrink-0 mt-0.5 text-[#D7E84C]" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <p className="font-medium text-sm text-white/50 uppercase tracking-wide mb-4">Examples</p>
                <ul className="space-y-2.5">
                  {aiWorkflow.examples.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-sm text-white/90">
                      <div className="w-1.5 h-1.5 rounded-full bg-white/40 shrink-0 mt-2" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>

          {/* Complete Business Launch — the bundle of the three above, treated as its own feature */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="w-full rounded-[32px] p-8 md:p-12 bg-[#2E52A4] text-white flex flex-col lg:flex-row items-start lg:items-center justify-between gap-10 hover:-translate-y-1 transition-transform duration-300"
          >
            <div className="max-w-[480px]">
              <div className="flex items-center gap-3 mb-5 flex-wrap">
                <div className="text-xs font-medium tracking-wide text-white/60">{completeLaunch.number}</div>
                <div className="flex items-center gap-1.5 bg-[#D7E84C] text-black text-xs font-medium px-3 py-1.5 rounded-full">
                  <Star size={12} fill="black" /> {completeLaunch.featured}
                </div>
              </div>
              <h3 className="text-3xl md:text-4xl font-medium mb-4">{completeLaunch.title}</h3>
              <p className="text-white/80 leading-relaxed mb-8">{completeLaunch.tagline}</p>
              <div className="flex items-end gap-2">
                <span className="text-[48px] font-medium leading-none">{completeLaunch.price}</span>
                <span className="mb-2 text-sm text-white/60">CAD</span>
              </div>
            </div>
            <div className="w-full lg:w-auto lg:min-w-[380px] flex flex-col gap-6">
              <ul className="space-y-2.5">
                {completeLaunch.includes.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-sm text-white/90">
                    <Check size={16} className="shrink-0 mt-0.5 text-[#D7E84C]" />
                    {item}
                  </li>
                ))}
              </ul>
              <Link
                to={`/packages/${completeLaunch.id}`}
                className="py-3.5 px-6 rounded-full font-medium flex items-center justify-between transition-colors bg-white text-black hover:bg-gray-200"
              >
                View Details <ArrowUpRight size={18} />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Retainers Section */}
      <section className="w-full max-w-[1200px] mx-auto px-4 py-24 flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16 max-w-[700px]"
        >
          <div className="flex justify-center"><SectionLabel>Retainers</SectionLabel></div>
          <h2 className="text-[40px] md:text-[48px] font-medium leading-tight mb-4">
            Ongoing <span className="font-['Instrument_Serif',serif] italic font-normal text-[#2E52A4]">support</span>
          </h2>
          <p className="text-lg text-gray-500 leading-relaxed">
            Your business evolves. Your digital presence should too. We provide ongoing support to keep your brand, website, and business systems performing at their best.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
          {retainers.map((tier, i) => (
            <motion.div
              key={tier.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-white border border-gray-200 rounded-[28px] p-8 flex flex-col"
            >
              <h4 className="text-lg font-medium mb-2">{tier.name}</h4>
              <p className="text-gray-500 text-sm mb-4 leading-relaxed">{tier.tagline}</p>
              <div className="text-sm text-gray-400 mb-1">Starting at</div>
              <div className="flex items-end gap-1 mb-6">
                <span className="text-[32px] font-medium leading-none">{tier.price}</span>
                <span className="text-gray-500 mb-0.5">/month</span>
              </div>
              <ul className="space-y-2.5 flex-1">
                {tier.includes.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-sm text-gray-700">
                    <Check size={16} className="shrink-0 mt-0.5 text-[#2E52A4]" />
                    {item}
                  </li>
                ))}
              </ul>
              {tier.note && <p className="text-xs text-gray-400 leading-relaxed mt-6 pt-6 border-t border-gray-100">{tier.note}</p>}
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}
