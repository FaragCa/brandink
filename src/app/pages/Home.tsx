import { Link } from "react-router";
import { ArrowUpRight, ArrowRight, Star, Plus, Minus } from "lucide-react";
import { motion, AnimatePresence, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import { useState } from "react";
import { Magnetic, RevealImage, SectionLabel, CountUp, Marquee } from "../components/CinematicEffects";

import imgFrame from "figma:asset/84f7485d3b3cd8b2f7a0274800f54c2b22f43621.png";
import imgAvatar1 from "figma:asset/568840d209936792c12a2ebd812cd31728196caf.png";
import imgAvatar2 from "figma:asset/7a490e70dc1cf31a03ce14e6fcb08206a10c06e2.png";
import imgAvatar3 from "figma:asset/99dd6be0f0f24f3ea3c9a2b3254805c72a0f5f5f.png";
import imgAvatar4 from "figma:asset/077d039f4721c512d22b444b48f33fb735e95411.png";
import imgWork1 from "figma:asset/0755651cdb4df6ce3d64c4fabc2249617f539cbd.png";
import imgWork2 from "figma:asset/4da44da434a9d8ada2cfe8d42f0779a2001223d7.png";
import imgWork3 from "figma:asset/91317cf2c3a6bff9763415bc8bee089461707441.png";
import imgWork4 from "figma:asset/0f74deedbd6d5a1f9c9a4d79d73d4edbbf9e35db.png";
import imgTestimonial from "figma:asset/69c12359fc2eb6c20966e23d77ea6a5b57b34d3f.png";

const faqs = [
  { question: "How long does a project take?", answer: "Most websites are completed within one to two weeks depending on project size." },
  { question: "Can customers pay through my website?", answer: "Yes. We can integrate secure online payment solutions using Stripe when required." },
  { question: "Can you add an AI chatbot?", answer: "Absolutely. We can integrate AI-powered assistants that answer customer questions and improve response times." },
  { question: "Do I need the Website Care Plan?", answer: "It's optional, but recommended to keep your website secure, updated, and running smoothly." },
  { question: "Can my website grow later?", answer: "Yes. We build websites with future growth in mind, making it easy to add additional pages, online stores, booking systems, marketing tools, automation, and more." }
];

const serviceTags = [
  "Website Design",
  "Online Payments",
  "AI Chat Assistant",
  "Mobile Responsive",
  "SEO Setup",
  "Website Care",
];

const Word = ({ word, i, total, progress }: { word: string, i: number, total: number, progress: any }) => {
  const start = i / total;
  const end = start + (1 / total);
  const opacity = useTransform(progress, [start, end], [0.2, 1]);
  return (
    <motion.span style={{ opacity }}>
      {word}
    </motion.span>
  );
};

export function Home() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const textRef = useRef<HTMLHeadingElement>(null);
  const { scrollYProgress } = useScroll({
    target: textRef,
    offset: ["start 80%", "end 50%"]
  });

  const words = "A website should do more than exist — it should work for your business, day and night, turning visitors into customers.".split(" ");

  return (
    <div className="flex flex-col items-center w-full bg-[#fbfbfb] relative">
      {/* Hero Section */}
      <section 
        className="w-full relative flex flex-col items-start bg-top bg-no-repeat bg-cover pt-[120px] pb-[100px] px-[20px] md:px-[84px]"
        style={{ backgroundImage: `url('${imgFrame}')` }}
      >
        <div className="max-w-[1100px] text-left">
          <motion.h1 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, type: "spring", bounce: 0.3 }}
            className="text-[#1b1d1e] text-[56px] md:text-[96px] font-medium leading-[1] mb-6 tracking-[-0.03em]"
          >
            Websites that help local <br /> businesses <span className="font-['Instrument_Serif',serif] italic font-normal tracking-[-2px] text-[#2E52A4]">grow</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-[18px] md:text-[20px] text-[rgba(27,29,30,0.6)] max-w-[650px] mb-12 leading-[1.6]"
          >
            More than just a beautiful website. BrandInk creates modern, high-performing websites that help businesses build credibility, attract customers, accept payments, and streamline their operations — all in one place.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col sm:flex-row items-center justify-start gap-8"
          >
            <Magnetic>
              <Link
                to="/contact"
                className="bg-[#2E52A4] text-white flex items-center justify-between gap-4 h-[64px] pl-[28px] pr-[12px] rounded-[32px] hover:bg-[#24417F] transition-colors w-[300px]"
              >
                <span className="font-medium text-[16px]">Book Your Free Consultation</span>
                <div className="bg-white text-[#2E52A4] w-[40px] h-[40px] rounded-full flex items-center justify-center shrink-0">
                  <ArrowUpRight size={20} strokeWidth={2.5} />
                </div>
              </Link>
            </Magnetic>

            <div className="flex items-center gap-4">
              <div className="flex -space-x-3">
                <img src={imgAvatar1} className="w-10 h-10 rounded-full border-2 border-white object-cover" alt="User" />
                <img src={imgAvatar2} className="w-10 h-10 rounded-full border-2 border-white object-cover" alt="User" />
                <img src={imgAvatar3} className="w-10 h-10 rounded-full border-2 border-white object-cover" alt="User" />
                <img src={imgAvatar4} className="w-10 h-10 rounded-full border-2 border-white object-cover" alt="User" />
              </div>
              <div className="flex flex-col items-start">
                <div className="flex text-amber-500">
                  <Star size={16} fill="currentColor" className="stroke-none" />
                  <Star size={16} fill="currentColor" className="stroke-none" />
                  <Star size={16} fill="currentColor" className="stroke-none" />
                  <Star size={16} fill="currentColor" className="stroke-none" />
                  <Star size={16} fill="currentColor" className="stroke-none" />
                </div>
                <span className="text-[14px] text-gray-500 font-medium mt-1">Starting at $500 CAD</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Marquee Ticker */}
      <section className="w-full py-8 border-y border-gray-100 mb-32">
        <Marquee items={serviceTags} />
      </section>

      {/* Stats Section */}
      <section className="w-full max-w-[1272px] mx-auto px-4 mb-32 flex flex-col items-center text-center relative">
        <SectionLabel>Why BrandInk</SectionLabel>
        <h2
          ref={textRef}
          className="text-[32px] md:text-[48px] leading-[1.2] font-medium max-w-[900px] flex flex-wrap justify-center gap-[0.3em]"
        >
          {words.map((word, i) => (
            <Word key={i} word={word} i={i} total={words.length} progress={scrollYProgress} />
          ))}
        </h2>
      </section>

      {/* Features Grid */}
      <section className="w-full max-w-[1272px] mx-auto px-4 mb-32 flex flex-col items-center text-center">
        <SectionLabel>Our services</SectionLabel>
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
          className="text-[40px] md:text-[48px] font-medium mb-16 leading-tight"
        >
          Everything your business <br /> needs to <span className="font-['Instrument_Serif',serif] italic font-normal text-[#2E52A4]">win online</span>
        </motion.h2>

        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.1 } }
          }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 w-full mb-16"
        >
          {[
            { title: "Website Design\n& Development", bg: "bg-[#eaf4ff]" },
            { title: "Online\nPayments", bg: "bg-[#e8f7ea]" },
            { title: "AI Chat\nAssistant", bg: "bg-[#f3efff]" },
            { title: "Website\nCare Plan", bg: "bg-[#ffefe3]" }
          ].map((item, i) => (
            <motion.div 
              key={i}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 }
              }}
              className={`${item.bg} p-6 rounded-3xl flex flex-col items-start text-left justify-end h-[180px] hover:-translate-y-1 transition-transform`}
            >
              <span className="font-medium text-[#1b1d1e] text-[16px] whitespace-pre-line">{item.title}</span>
            </motion.div>
          ))}
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-[#1b1d1e] rounded-[40px] w-full py-6 px-10 flex flex-col sm:flex-row items-center justify-between text-left"
        >
           <div>
             <h3 className="text-white font-medium text-lg">Ready for a website that works for you?</h3>
             <p className="text-gray-400 mt-1">See our services and simple pricing</p>
           </div>
           <Link to="/services" className="bg-white text-black px-8 py-4 rounded-full flex items-center gap-3 mt-4 sm:mt-0 font-medium hover:bg-gray-100 transition-colors">
             View Services <ArrowRight size={18} />
           </Link>
        </motion.div>
      </section>

      {/* Work Section */}
      <section className="w-full max-w-[1272px] mx-auto px-4 mb-32 flex flex-col items-center">
        <SectionLabel>Recent work</SectionLabel>
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
          className="text-[40px] md:text-[48px] font-medium text-center mb-16 max-w-[600px] leading-tight"
        >
          Websites that give businesses a professional <span className="font-['Instrument_Serif',serif] italic font-normal text-[#2E52A4]">online presence</span>
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-12 w-full">
          {[
            { id: 1, title: "Flowbank", cat: "Brand Strategy • Web Design", img: imgWork1 },
            { id: 2, title: "Academy HQ", cat: "UI/UX Design • App Development", img: imgWork2 },
            { id: 3, title: "Genome", cat: "Identity • Digital Marketing", img: imgWork3 },
            { id: 4, title: "Hotto", cat: "Brand Strategy • Packaging", img: imgWork4 },
          ].map((work, i) => (
            <motion.div
              key={work.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
            >
              <Link to={`/projects/${work.id}`} className="group flex flex-col gap-6">
                <RevealImage>
                  <div className="relative rounded-[32px] overflow-hidden aspect-[4/3] bg-gray-100">
                    <img src={work.img} alt={work.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-500 flex items-center justify-center">
                      <span className="bg-white text-black px-6 py-3 rounded-full font-medium opacity-0 translate-y-3 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500">
                        View Case Study
                      </span>
                    </div>
                  </div>
                </RevealImage>
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-2xl font-medium mb-2">{work.title}</h3>
                    <p className="text-gray-500">{work.cat}</p>
                  </div>
                  <div className="w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center group-hover:bg-black group-hover:text-white transition-colors">
                    <ArrowUpRight size={20} />
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Value / Stats Banner */}
      <section className="w-full bg-[#1b1d1e] py-24 mb-32 overflow-hidden relative">
        <div className="absolute inset-0 opacity-40" style={{ backgroundImage: "radial-gradient(circle at 20% 20%, rgba(46,82,164,0.4), transparent 40%), radial-gradient(circle at 80% 80%, rgba(215,232,76,0.15), transparent 40%)" }} />
        <div className="w-full max-w-[1272px] mx-auto px-4 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <div className="flex justify-center">
              <span className="flex items-center gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-[#D7E84C]" />
                <span className="font-['JetBrains_Mono',monospace] text-[12px] tracking-[0.25em] uppercase text-white/40">By the numbers</span>
              </span>
            </div>
            <h2 className="text-white text-[32px] md:text-[40px] font-medium mt-5 leading-tight">
              Fast, modern, mobile-friendly. <span className="font-['Instrument_Serif',serif] italic font-normal text-[#D7E84C]">Built to convert.</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4">
            {[
              { to: 500, prefix: "$", label: "Starting price (CAD)" },
              { to: 2, suffix: " wk", label: "Typical turnaround" },
              { to: 5, label: "Pages included" },
              { to: 24, suffix: "/7", label: "AI assistant uptime" },
            ].map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="flex flex-col items-center text-center border-l border-white/10 first:border-l-0 md:first:border-l-0"
              >
                <div className="text-white text-[40px] md:text-[56px] font-medium leading-none mb-3">
                  <CountUp to={stat.to} prefix={stat.prefix} suffix={stat.suffix} decimals={stat.decimals} />
                </div>
                <p className="text-white/40 text-sm">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="w-full max-w-[1272px] mx-auto px-4 mb-32 flex flex-col items-center">
        <SectionLabel>Testimonials</SectionLabel>
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
          className="text-[40px] md:text-[48px] font-medium text-center mb-16 max-w-[600px] mx-auto leading-tight"
        >
          What business owners say <span className="font-['Instrument_Serif',serif] italic font-normal text-[#2E52A4]">about us</span>
        </motion.h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="md:col-span-2 bg-[#1b1d1e] rounded-[32px] p-10 text-white flex flex-col justify-between relative overflow-hidden min-h-[400px]"
          >
            <img src={imgTestimonial} alt="Background" className="absolute inset-0 w-full h-full object-cover opacity-40 mix-blend-overlay" />
            <div className="relative z-10 flex flex-col h-full justify-between">
              <div className="flex gap-1 mb-8">
                {[1,2,3,4,5].map(i => <Star key={i} size={20} fill="#F59E0B" className="text-[#F59E0B]" />)}
              </div>
              <div>
                <p className="text-2xl md:text-3xl font-medium leading-tight mb-8">"BrandInk's expertise transformed my vision into reality with creativity, precision, and a deep understanding of my goals."</p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gray-500 rounded-full overflow-hidden">
                    <img src={imgAvatar1} className="w-full h-full object-cover" alt="User" />
                  </div>
                  <div>
                    <p className="font-medium">Sarah M.</p>
                    <p className="text-gray-400 text-sm">CEO of StartupX</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
          
          <div className="flex flex-col gap-4">
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="bg-[#D7E84C] text-[#2E52A4] rounded-[32px] p-8 flex flex-col justify-between flex-1"
            >
              <p className="font-medium mb-4">Customer Satisfaction</p>
              <div className="text-[64px] font-medium leading-none mb-4"><CountUp to={91} suffix="%" /></div>
              <p className="text-sm">Clients recommend our design services.</p>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white border border-gray-200 rounded-[32px] p-8 flex flex-col justify-between flex-1"
            >
              <p className="text-xl font-medium leading-tight mb-8">"BrandInk Design Agency brought our ideas to life with exceptional creativity, precision, exceeding expectations."</p>
              <div>
                <p className="font-medium">Tony Stark</p>
                <p className="text-gray-500 text-sm">Product Manager</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="w-full max-w-[800px] mx-auto px-4 mb-32 flex flex-col items-center">
        <SectionLabel>FAQ</SectionLabel>
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
          className="text-[40px] md:text-[48px] font-medium text-center mb-16 leading-tight"
        >
          Got questions? <br /> We've got <span className="font-['Instrument_Serif',serif] italic font-normal text-[#2E52A4]">answers</span>
        </motion.h2>

        <div className="flex flex-col gap-4 w-full">
          {faqs.map((faq, i) => (
            <motion.div 
              key={i} 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="border-b border-gray-200 pb-4"
            >
              <button 
                onClick={() => setOpenFaq(openFaq === i ? null : i)}
                className="flex items-center justify-between w-full py-4 text-left font-medium text-lg"
              >
                {faq.question}
                {openFaq === i ? <Minus size={20} className="text-gray-400" /> : <Plus size={20} className="text-gray-400" />}
              </button>
              <AnimatePresence>
                {openFaq === i && (
                  <motion.div 
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <p className="text-gray-500 pb-4 pr-12">{faq.answer}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </section>
      
      {/* Footer CTA */}
      <section className="w-full max-w-[1272px] mx-auto px-4 mb-16">
         <motion.div 
           initial={{ opacity: 0, scale: 0.95 }}
           whileInView={{ opacity: 1, scale: 1 }}
           viewport={{ once: true }}
           transition={{ duration: 0.6 }}
           className="bg-gradient-to-br from-[#e7edfb] to-[#eef6bd] rounded-[40px] p-16 flex flex-col items-center text-center"
         >
            <h2 className="text-[40px] md:text-[48px] font-medium mb-4">Ready to give your business a <span className="font-['Instrument_Serif',serif] italic font-normal text-[#2E52A4]">professional online presence?</span></h2>
            <p className="text-gray-500 mb-10 max-w-[600px]">Let's build a website that works as hard as you do. Book your free consultation today and discover how BrandInk can help your business grow online.</p>
            <Link
              to="/contact"
              className="bg-[#1b1d1e] text-white flex items-center justify-between gap-4 h-[64px] pl-[28px] pr-[12px] rounded-[32px] hover:bg-black transition-colors"
            >
              <span className="font-medium text-[16px]">Book Your Free Consultation</span>
              <div className="bg-white text-black w-[40px] h-[40px] rounded-full flex items-center justify-center shrink-0">
                <ArrowUpRight size={20} strokeWidth={2.5} />
              </div>
            </Link>
         </motion.div>
      </section>

    </div>
  );
}
