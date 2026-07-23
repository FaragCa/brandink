import { Link } from "react-router";
import { motion } from "motion/react";
import { SectionLabel, CountUp } from "../components/CinematicEffects";

import imgFrame from "figma:asset/84f7485d3b3cd8b2f7a0274800f54c2b22f43621.png";
import imgCarla from "@/assets/carla_pic.jpeg";

export function About() {
  return (
    <div className="flex flex-col items-center w-full bg-[#fbfbfb]">
      <section 
        className="w-full relative flex flex-col items-center bg-top bg-no-repeat bg-cover pt-[60px] pb-[120px]"
        style={{ backgroundImage: `url('${imgFrame}')` }}
      >
        <div className="max-w-[800px] text-center px-4">
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-[#1b1d1e] text-[50px] md:text-[70px] font-medium leading-[1.1] mb-6"
          >
            We are <span className="font-['Instrument_Serif',serif] italic font-normal tracking-[-2px] text-[#2E52A4]">BrandInk</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-[18px] text-[rgba(27,29,30,0.6)] mx-auto leading-[1.6]"
          >
            We help businesses establish a stronger online presence through thoughtful design and practical technology.
          </motion.p>
        </div>
      </section>

      <section className="w-full max-w-[1272px] mx-auto px-4 pt-16 mb-32">
        <SectionLabel>Our story</SectionLabel>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
            className="rounded-[40px] overflow-hidden relative bg-[#2E52A4]"
          >
            <img src={imgCarla} alt="Carla, Founder of BrandInk" className="w-full h-auto aspect-square object-cover" />
            <div className="absolute inset-x-0 bottom-0 p-6 bg-gradient-to-t from-black/70 to-transparent">
              <span className="inline-block bg-[#D7E84C] text-[#2E52A4] text-xs font-semibold tracking-wide uppercase px-3 py-1 rounded-full mb-2">Founder</span>
              <p className="text-white text-xl font-medium">Carla Farag</p>
            </div>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
            className="flex flex-col gap-6"
          >
            <h2 className="text-[40px] font-medium leading-tight">Our Mission & <span className="font-['Instrument_Serif',serif] italic font-normal text-[#2E52A4]">Vision</span></h2>
            <p className="text-gray-600 text-lg leading-relaxed">
              BrandInk was created with one mission: helping businesses establish a stronger online presence. Many local businesses either don't have a website or rely on outdated ones that no longer represent who they are — and we believe every business deserves a professional online presence that builds trust and makes it easy for customers to connect.
            </p>
            <p className="text-gray-600 text-lg leading-relaxed">
              Our approach combines modern web design, user experience, automation, and emerging AI technologies to create websites that do more than look great — they actively support your business every day. As we grow, we'll keep expanding into branding, digital marketing, and AI solutions, so you can work with one trusted partner as your business evolves.
            </p>
            <div className="flex gap-10 mt-8">
              <div className="flex flex-col">
                <span className="text-[48px] font-medium"><CountUp to={500} prefix="$" /></span>
                <span className="text-gray-500">Websites starting at (CAD)</span>
              </div>
              <div className="flex flex-col">
                <span className="text-[48px] font-medium"><CountUp to={2} suffix=" wk" /></span>
                <span className="text-gray-500">Typical turnaround</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="w-full max-w-[1272px] mx-auto px-4 mb-16">
         <motion.div 
           initial={{ opacity: 0, scale: 0.95 }}
           whileInView={{ opacity: 1, scale: 1 }}
           viewport={{ once: true }}
           transition={{ duration: 0.6 }}
           className="bg-[#1b1d1e] text-white rounded-[40px] p-16 flex flex-col items-center text-center"
         >
            <h2 className="text-[40px] md:text-[48px] font-medium mb-6">Ready to grow your <span className="font-['Instrument_Serif',serif] italic font-normal text-gray-400">business online?</span></h2>
            <p className="text-gray-400 mb-10 max-w-[600px] text-lg">Let's build a website that works as hard as you do. Book your free consultation today.</p>
            <Link to="/contact" className="bg-white text-black py-4 px-8 rounded-full font-medium hover:bg-gray-100 transition-colors">
              Book Your Free Consultation
            </Link>
         </motion.div>
      </section>
    </div>
  );
}
