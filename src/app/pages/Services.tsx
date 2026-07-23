import { useState } from "react";
import { Link } from "react-router";
import { Plus, Minus, ArrowRight, ArrowUpRight, Check, Star } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { SectionLabel } from "../components/CinematicEffects";

import imgFrame from "figma:asset/84f7485d3b3cd8b2f7a0274800f54c2b22f43621.png";

const services = [
  {
    id: "01",
    title: "Website Design & Development",
    tagline: "A modern website, custom-built for your business.",
    description: "Every website is custom-built to reflect your business and give customers confidence from their very first visit.",
    heading: "Included",
    points: [
      "Custom website design",
      "Mobile responsive layout",
      "Contact forms",
      "Google Maps integration",
      "Basic SEO setup",
      "Domain connection",
      "Website launch",
      "Speed optimization",
      "Security configuration",
    ],
  },
  {
    id: "02",
    title: "Online Payments & Booking",
    tagline: "Let customers pay and book directly through your website.",
    description: "We can integrate secure payment and booking systems such as Stripe so customers can purchase services, pay invoices, or reserve appointments online with confidence.",
    heading: "Perfect for",
    points: [
      "Service businesses",
      "Consultants",
      "Contractors",
      "Online bookings",
      "Deposits",
      "Digital products",
    ],
  },
  {
    id: "03",
    title: "AI Chat Assistant",
    tagline: "Give your business a 24/7 virtual assistant.",
    description: "We can integrate an AI-powered chatbot that answers common customer questions, provides business information, guides visitors through your services, and helps generate leads — even while you're away.",
    heading: "Potential capabilities",
    points: [
      "Answer FAQs",
      "Collect customer inquiries",
      "Recommend services",
      "Book appointments",
      "Direct customers to the right information",
      "Capture leads",
    ],
  },
  {
    id: "04",
    title: "Website Care Plans",
    tagline: "Your site is live — this keeps it working, secure, and current.",
    description: "Ongoing updates, backups, monitoring, and support so you can focus on running your business. Optional, and you can cancel anytime with 30 days notice.",
    heading: "Includes",
    points: [
      "Security monitoring & updates",
      "Weekly backups",
      "Software & plugin updates",
      "Uptime monitoring",
      "Content edits",
      "Priority support",
      "Performance reports",
    ],
  },
];

const howItWorks = [
  { step: "01", name: "Free 15-minute consultation", desc: "You tell me about the business, I tell you honestly what you need." },
  { step: "02", name: "Written proposal", desc: "Fixed price, no surprises." },
  { step: "03", name: "Deposit", desc: "Half up front to book your slot." },
  { step: "04", name: "Onboarding", desc: "A short questionnaire, and I collect your photos, logo and content." },
  { step: "05", name: "Design", desc: "I build the first version." },
  { step: "06", name: "Review", desc: "You see it live and tell me what to change." },
  { step: "07", name: "Revisions", desc: "Two rounds included on every build." },
  { step: "08", name: "Final payment & launch", desc: "The site goes live and it's yours." },
  { step: "09", name: "Ongoing care", desc: "Optional monthly plan if you want me maintaining it." },
];

const builds = [
  {
    name: "Starter",
    price: "$500",
    for: "For businesses with no website who need to exist online.",
    includes: [
      "Up to 4 pages (Home, About, Services, Contact)",
      "Mobile-friendly on all devices",
      "Contact form sent to your email",
      "Google Maps and business hours",
      "Domain setup and first year included",
      "Basic SEO so you appear on Google",
      "Launch and handover",
    ],
    timeline: "1–2 weeks",
    deposit: "$250 to start, $250 at launch",
  },
  {
    name: "Professional",
    price: "$900",
    featured: "Most Popular",
    for: "For businesses taking bookings, orders, or enquiries online.",
    includes: [
      "Everything in Starter",
      "Up to 8 pages",
      "Photo gallery or portfolio",
      "Custom order or booking form",
      "Google Business Profile setup",
      "Social media integration",
      "Basic analytics",
    ],
    timeline: "2–3 weeks",
    deposit: "$450 to start, $450 at launch",
  },
  {
    name: "Complete",
    price: "$1,500",
    for: "For established businesses that need the site to do real work.",
    includes: [
      "Everything in Professional",
      "Online payments (deposits, invoices, products)",
      "Online booking with calendar",
      "Email newsletter signup",
      "Advanced SEO setup",
      "3 months of Care included",
    ],
    timeline: "3–4 weeks",
    deposit: "$750 to start, $750 at launch",
  },
];

const carePlans = [
  {
    name: "Essential",
    price: "$49",
    includes: [
      "Security monitoring and updates",
      "Weekly backups",
      "Software and plugin updates",
      "Uptime monitoring",
      "Email support",
      "Up to 30 minutes of content edits per month",
    ],
  },
  {
    name: "Growth",
    price: "$99",
    featured: true,
    includes: [
      "Everything in Essential",
      "Up to 2 hours of edits and updates monthly",
      "Monthly performance report",
      "Seasonal page updates (holiday hours, promotions)",
      "Priority support, 24-hour response",
      "Ongoing SEO adjustments",
    ],
  },
  {
    name: "Partner",
    price: "$199",
    includes: [
      "Everything in Growth",
      "Up to 5 hours monthly",
      "New pages and landing pages as needed",
      "Google Business Profile management",
      "Quarterly strategy call",
      "First access to new services",
    ],
  },
];

const addOns = [
  { service: "Extra page", price: "$100" },
  { service: "Logo design", price: "$250" },
  { service: "Online booking setup", price: "$200" },
  { service: "Online payments setup", price: "$200" },
  { service: "Copywriting, per page", price: "$75" },
  { service: "Product setup, up to 20 items", price: "$300" },
  { service: "Rush delivery, under 1 week", price: "+25%" },
  { service: "Hourly rate outside a Care Plan", price: "$75/hr" },
];

const alwaysIncluded = [
  "You own your site and domain outright",
  "Two rounds of revisions on every build",
  "30 days of free support after launch",
  "Works on phones, tablets and desktop",
  "No long-term contract on Care Plans",
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
        <div className="max-w-[820px] text-center px-4">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-[#1b1d1e] text-[50px] md:text-[70px] font-medium leading-[1.1] mb-6"
          >
            Everything your business needs to <span className="font-['Instrument_Serif',serif] italic font-normal tracking-[-2px] text-gray-500">win online</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-[18px] text-[rgba(27,29,30,0.6)] mx-auto leading-[1.6]"
          >
            Clear packages, honest pricing, and no long-term contracts. Fast, modern websites built to turn visitors into customers — starting at $500 CAD.
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
            <SectionLabel>Our services</SectionLabel>
            <h2 className="text-[40px] font-medium leading-tight">
              What we <span className="font-['Instrument_Serif',serif] italic text-gray-500">build</span>
            </h2>
            <p className="text-gray-500 text-lg leading-relaxed max-w-[400px]">
              From your website to online payments, booking, and AI assistants — everything is built to help your business look professional and run smoothly.
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
                        <div>
                          <p className="font-medium text-sm text-gray-400 uppercase tracking-wide mb-4">{service.heading}</p>
                          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-y-3 gap-x-6">
                            {service.points.map((point, idx) => (
                              <li key={idx} className="flex items-center gap-3 text-gray-700">
                                <div className="w-1.5 h-1.5 rounded-full bg-[#2E52A4] shrink-0" />
                                {point}
                              </li>
                            ))}
                          </ul>
                        </div>
                        <button
                          onClick={() => document.getElementById("pricing")?.scrollIntoView({ behavior: "smooth" })}
                          className="inline-flex items-center gap-2 text-[#2E52A4] font-medium hover:text-[#24417F] transition-colors w-fit"
                        >
                          View pricing <ArrowRight size={18} />
                        </button>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
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
                <span className="w-1.5 h-1.5 rounded-full bg-[#D7E84C]" />
                <span className="font-['JetBrains_Mono',monospace] text-[12px] tracking-[0.25em] uppercase text-white/40">How it works</span>
              </div>
              <h2 className="text-white text-[40px] font-medium leading-tight">
                Simple from start to <span className="font-['Instrument_Serif',serif] italic font-normal text-[#D7E84C]">finish</span>
              </h2>
              <p className="text-white/50 text-lg leading-relaxed max-w-[360px]">
                From a quick chat to launch day, you'll always know exactly what's happening and what's next.
              </p>
            </motion.div>

            <div className="md:col-span-8 flex flex-col">
              {howItWorks.map((item, i) => (
                <motion.div
                  key={item.step}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5, delay: Math.min(i, 6) * 0.08 }}
                  className="flex gap-8 py-6 border-b border-white/10 last:border-b-0"
                >
                  <span className="font-['JetBrains_Mono',monospace] text-[15px] text-white/30 pt-1 shrink-0 w-10">{item.step}</span>
                  <div>
                    <h3 className="text-white text-xl font-medium mb-1">{item.name}</h3>
                    <p className="text-white/50 leading-relaxed max-w-[500px]">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Website Builds Pricing */}
      <section id="pricing" className="w-full max-w-[1200px] mx-auto px-4 py-24 flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16 max-w-[700px]"
        >
          <div className="flex justify-center"><SectionLabel>Website builds</SectionLabel></div>
          <h2 className="text-[40px] md:text-[48px] font-medium leading-tight mb-4">
            Pick the package that fits <span className="font-['Instrument_Serif',serif] italic font-normal text-[#2E52A4]">your business</span>
          </h2>
          <p className="text-lg text-gray-500 leading-relaxed">
            One-time website builds, priced in CAD. Half up front to book your slot, half at launch.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full items-start">
          {builds.map((b, i) => {
            const featured = Boolean(b.featured);
            return (
              <motion.div
                key={b.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className={`rounded-[32px] p-8 flex flex-col ${featured ? "bg-[#2E52A4] text-white md:-mt-4 md:pb-12" : "bg-white border border-gray-200"}`}
              >
                {featured && (
                  <div className="flex items-center gap-1.5 bg-[#D7E84C] text-black text-xs font-medium px-3 py-1.5 rounded-full w-fit mb-5">
                    <Star size={12} fill="black" /> {b.featured}
                  </div>
                )}
                <h3 className="text-2xl font-medium mb-2">{b.name}</h3>
                <p className={`text-sm mb-6 leading-relaxed ${featured ? "text-white/70" : "text-gray-500"}`}>{b.for}</p>
                <div className="flex items-end gap-2 mb-6">
                  <span className="text-[44px] font-medium leading-none">{b.price}</span>
                  <span className={`mb-1 text-sm ${featured ? "text-white/60" : "text-gray-500"}`}>CAD</span>
                </div>
                <ul className="space-y-2.5 mb-6 flex-1">
                  {b.includes.map((item) => (
                    <li key={item} className={`flex items-start gap-2.5 text-sm ${featured ? "text-white/90" : "text-gray-700"}`}>
                      <Check size={15} className={`shrink-0 mt-0.5 ${featured ? "text-[#D7E84C]" : "text-[#2E52A4]"}`} />
                      {item}
                    </li>
                  ))}
                </ul>
                <div className={`text-xs leading-relaxed mb-6 pt-4 border-t ${featured ? "border-white/15 text-white/60" : "border-gray-100 text-gray-400"}`}>
                  <p><span className="font-medium">Timeline:</span> {b.timeline}</p>
                  <p className="mt-1"><span className="font-medium">Deposit:</span> {b.deposit}</p>
                </div>
                <Link
                  to="/contact"
                  className={`py-3.5 px-6 rounded-full font-medium flex items-center justify-between transition-colors ${featured ? "bg-white text-black hover:bg-gray-100" : "bg-black text-white hover:bg-[#2E52A4]"}`}
                >
                  Get started <ArrowUpRight size={18} />
                </Link>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* Care Plans */}
      <section className="w-full max-w-[1200px] mx-auto px-4 pb-24 flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16 max-w-[700px]"
        >
          <div className="flex justify-center"><SectionLabel>Care plans</SectionLabel></div>
          <h2 className="text-[40px] md:text-[48px] font-medium leading-tight mb-4">
            Keep it running <span className="font-['Instrument_Serif',serif] italic font-normal text-[#2E52A4]">its best</span>
          </h2>
          <p className="text-lg text-gray-500 leading-relaxed">
            Your site is live — these keep it working, secure, and current. Optional, cancel anytime with 30 days notice.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
          {carePlans.map((plan, i) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={`rounded-[28px] p-8 flex flex-col ${plan.featured ? "bg-[#1b1d1e] text-white" : "bg-white border border-gray-200"}`}
            >
              <h4 className="text-lg font-medium mb-2">{plan.name}</h4>
              <div className="flex items-end gap-1 mb-6">
                <span className="text-[32px] font-medium leading-none">{plan.price}</span>
                <span className={`mb-0.5 ${plan.featured ? "text-white/50" : "text-gray-500"}`}>/month</span>
              </div>
              <ul className="space-y-2.5 flex-1">
                {plan.includes.map((item) => (
                  <li key={item} className={`flex items-start gap-2.5 text-sm ${plan.featured ? "text-white/90" : "text-gray-700"}`}>
                    <Check size={15} className={`shrink-0 mt-0.5 ${plan.featured ? "text-[#D7E84C]" : "text-[#2E52A4]"}`} />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Add-Ons + Always Included */}
      <section className="w-full max-w-[1100px] mx-auto px-4 pb-24 grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Add-ons table */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="bg-white border border-gray-200 rounded-[28px] p-8"
        >
          <h3 className="text-xl font-medium mb-1">Add-ons</h3>
          <p className="text-gray-500 text-sm mb-6">Extras you can bolt onto any build.</p>
          <div className="divide-y divide-gray-100">
            {addOns.map((a) => (
              <div key={a.service} className="flex items-center justify-between py-3">
                <span className="text-gray-800 text-sm">{a.service}</span>
                <span className="text-[#2E52A4] font-medium text-sm shrink-0 ml-4">{a.price}</span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Always included */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="bg-[#D7E84C] rounded-[28px] p-8 flex flex-col"
        >
          <h3 className="text-xl font-medium mb-1">What's always included</h3>
          <p className="text-gray-700 text-sm mb-6">Every build, no matter the package.</p>
          <ul className="space-y-3 flex-1">
            {alwaysIncluded.map((item) => (
              <li key={item} className="flex items-start gap-3 text-gray-800">
                <Check size={18} className="shrink-0 mt-0.5 text-[#2E52A4]" />
                {item}
              </li>
            ))}
          </ul>
          <div className="mt-8 pt-6 border-t border-black/10">
            <p className="text-xs text-gray-700 leading-relaxed">
              <span className="font-medium">Payment:</span> E-transfer or credit card. All prices in CAD, no tax charged. Deposits are non-refundable once design work begins.
            </p>
          </div>
        </motion.div>
      </section>

      {/* CTA */}
      <section className="w-full max-w-[1100px] mx-auto px-4 pb-24">
        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-[#1b1d1e] text-white rounded-[40px] p-12 md:p-16 flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left"
        >
          <div className="max-w-[520px]">
            <h2 className="text-[32px] md:text-[42px] font-medium leading-tight mb-3">Start with a free 15-minute consultation</h2>
            <p className="text-white/60">You tell me about the business, I tell you honestly what you need — fixed price, no surprises.</p>
          </div>
          <Link to="/contact" className="shrink-0 bg-white text-black flex items-center gap-3 py-4 px-8 rounded-full font-medium hover:bg-gray-100 transition-colors">
            Book Your Free Consultation <ArrowUpRight size={18} />
          </Link>
        </motion.div>
      </section>
    </div>
  );
}
