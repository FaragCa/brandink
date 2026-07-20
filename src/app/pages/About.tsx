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
            A passionate team of designers, developers, and strategists dedicated to creating meaningful digital experiences that leave a lasting impact.
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
              Founded in 2026, BrandInk Agency started with a simple belief: great design has the power to transform businesses. We don't just create beautiful visuals; we craft strategic solutions that solve real problems.
            </p>
            <p className="text-gray-600 text-lg leading-relaxed">
              Our vision is to become the go-to partner for innovative startups looking to disrupt their industries. We immerse ourselves in your world, deeply understanding your goals to deliver outcomes that exceed expectations.
            </p>
            <div className="flex gap-10 mt-8">
              <div className="flex flex-col">
                <span className="text-[48px] font-medium"><CountUp to={150} suffix="+" /></span>
                <span className="text-gray-500">Projects Completed</span>
              </div>
              <div className="flex flex-col">
                <span className="text-[48px] font-medium"><CountUp to={98} suffix="%" /></span>
                <span className="text-gray-500">Client Retention</span>
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
            <h2 className="text-[40px] md:text-[48px] font-medium mb-6">Want to join our <span className="font-['Instrument_Serif',serif] italic font-normal text-gray-400">team?</span></h2>
            <p className="text-gray-400 mb-10 max-w-[600px] text-lg">We are always looking for talented individuals to join our growing agency. Check out our open positions.</p>
            <Link to="/contact" className="bg-white text-black py-4 px-8 rounded-full font-medium hover:bg-gray-100 transition-colors">
              View Openings
            </Link>
         </motion.div>
      </section>
    </div>
  );
}
