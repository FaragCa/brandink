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
      "Up to 5 pages",
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
    title: "Online Payments",
    tagline: "Let customers pay directly through your website.",
    description: "We can integrate secure payment systems such as Stripe so customers can purchase services, pay invoices, or book appointments online with confidence.",
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
    title: "Website Care Plan",
    tagline: "Your website shouldn't be forgotten after launch. Starting at $20/month.",
    description: "Our Website Care Plan keeps everything running smoothly with ongoing updates, maintenance, backups, and technical support so you can focus on running your business.",
    heading: "Includes",
    points: [
      "Security updates",
      "Website backups",
      "Minor content edits",
      "Performance monitoring",
      "Technical support",
      "Broken link checks",
      "Plugin updates",
    ],
  },
];

const process = [
  { step: "01", name: "Discover", desc: "We learn about your business, goals, customers, and vision." },
  { step: "02", name: "Design", desc: "We create a modern website tailored specifically to your business." },
  { step: "03", name: "Develop", desc: "Your website is built using responsive, high-performance technologies and tested across devices." },
  { step: "04", name: "Launch", desc: "We connect your domain, optimize performance, and publish your website." },
  { step: "05", name: "Support", desc: "Need updates? Want to add new features? We're here to support your business as it grows." },
];

const launchPackage = {
  title: "Website Launch Package",
  price: "$500",
  suffix: "CAD",
  tagline: "Designed for businesses ready to establish a professional online presence.",
  featured: "Most Popular",
  includes: [
    "Custom website",
    "Mobile optimization",
    "Up to 5 pages",
    "Contact form",
    "Basic SEO",
    "Google Maps",
    "Domain setup (first year included)",
    "Website launch",
    "Payment integration (where applicable)",
    "AI chatbot setup (basic configuration)",
  ],
};

const carePlan = {
  title: "Website Care",
  price: "$20",
  suffix: "/month",
  tagline: "Keep your website secure, updated, and performing its best.",
  includes: [
    "Security updates",
    "Website backups",
    "Minor content edits",
    "Performance monitoring",
    "Technical support",
    "Broken link checks",
    "Plugin updates",
  ],
};

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
            A website should do more than exist — it should work for your business. We design fast, modern, mobile-friendly websites built to turn visitors into customers.
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
              From your website to online payments and AI assistants, everything is built to help your business look professional and run smoothly.
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
                <span className="w-1.5 h-1.5 rounded-full bg-[#D7E84C]" />
                <span className="font-['JetBrains_Mono',monospace] text-[12px] tracking-[0.25em] uppercase text-white/40">How we work</span>
              </div>
              <h2 className="text-white text-[40px] font-medium leading-tight">
                Simple from start to <span className="font-['Instrument_Serif',serif] italic font-normal text-[#D7E84C]">finish</span>
              </h2>
              <p className="text-white/50 text-lg leading-relaxed max-w-[360px]">
                A clear, five-step process — you'll always know what's happening and what's next.
              </p>
            </motion.div>

            <div className="md:col-span-8 flex flex-col">
              {process.map((item, i) => (
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

      {/* Pricing Section */}
      <section id="pricing" className="w-full max-w-[1100px] mx-auto px-4 py-24 flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16 max-w-[700px]"
        >
          <div className="flex justify-center"><SectionLabel>Pricing</SectionLabel></div>
          <h2 className="text-[40px] md:text-[48px] font-medium leading-tight mb-4">
            Simple, <span className="font-['Instrument_Serif',serif] italic font-normal text-[#2E52A4]">honest pricing</span>
          </h2>
          <p className="text-lg text-gray-500 leading-relaxed">
            One clear package to launch your website, plus an optional care plan to keep it running its best.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 w-full">
          {/* Launch package — featured */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-7 rounded-[32px] p-8 md:p-10 bg-[#2E52A4] text-white flex flex-col"
          >
            <div className="flex items-center gap-3 mb-5">
              <div className="flex items-center gap-1.5 bg-[#D7E84C] text-black text-xs font-medium px-3 py-1.5 rounded-full">
                <Star size={12} fill="black" /> {launchPackage.featured}
              </div>
            </div>
            <h3 className="text-2xl font-medium mb-2">{launchPackage.title}</h3>
            <p className="text-white/70 mb-6 max-w-[420px]">{launchPackage.tagline}</p>
            <div className="flex items-end gap-2 mb-8">
              <span className="text-sm text-white/60 mb-2">Starting at</span>
              <span className="text-[48px] font-medium leading-none">{launchPackage.price}</span>
              <span className="mb-2 text-sm text-white/60">{launchPackage.suffix}</span>
            </div>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-2.5 mb-8 flex-1">
              {launchPackage.includes.map((item) => (
                <li key={item} className="flex items-start gap-2.5 text-sm text-white/90">
                  <Check size={15} className="shrink-0 mt-0.5 text-[#D7E84C]" />
                  {item}
                </li>
              ))}
            </ul>
            <Link to="/contact" className="bg-white text-black py-3.5 px-6 rounded-full font-medium flex items-center justify-between hover:bg-gray-100 transition-colors w-full sm:w-fit sm:min-w-[280px]">
              Book Your Free Consultation <ArrowUpRight size={18} />
            </Link>
          </motion.div>

          {/* Care plan */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="lg:col-span-5 rounded-[32px] p-8 bg-white border border-gray-200 flex flex-col"
          >
            <h3 className="text-xl font-medium mb-2">{carePlan.title}</h3>
            <p className="text-gray-500 text-sm mb-6">{carePlan.tagline}</p>
            <div className="flex items-end gap-1 mb-8">
              <span className="text-[40px] font-medium leading-none">{carePlan.price}</span>
              <span className="text-gray-500 mb-1">{carePlan.suffix}</span>
            </div>
            <ul className="space-y-2.5 mb-8 flex-1">
              {carePlan.includes.map((item) => (
                <li key={item} className="flex items-start gap-2.5 text-sm text-gray-700">
                  <Check size={15} className="shrink-0 mt-0.5 text-[#2E52A4]" />
                  {item}
                </li>
              ))}
            </ul>
            <Link to="/contact" className="bg-black text-white py-3.5 px-6 rounded-full font-medium flex items-center justify-between hover:bg-[#2E52A4] transition-colors">
              Add to my website <ArrowUpRight size={18} />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
