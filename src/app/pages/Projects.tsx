import { useRef } from "react";
import { Link } from "react-router";
import { ArrowUpRight } from "lucide-react";
import { motion, useScroll, useTransform } from "motion/react";
import { SectionLabel, RevealImage } from "../components/CinematicEffects";

import imgFrame from "figma:asset/84f7485d3b3cd8b2f7a0274800f54c2b22f43621.png";
import imgWork1 from "figma:asset/0755651cdb4df6ce3d64c4fabc2249617f539cbd.png";
import imgWork2 from "figma:asset/4da44da434a9d8ada2cfe8d42f0779a2001223d7.png";
import imgWork3 from "figma:asset/91317cf2c3a6bff9763415bc8bee089461707441.png";
import imgWork4 from "figma:asset/0f74deedbd6d5a1f9c9a4d79d73d4edbbf9e35db.png";
import imgWork5 from "figma:asset/07c38ed58685dbbde0470ebaa94075147fc7a969.png";
import imgWork6 from "figma:asset/3117c757e2500acf7fcdd373b1721430fa6aa076.png";

const featured = { id: 1, title: "Flowbank", category: "Brand Strategy • Web Design", year: "2026", img: imgWork1 };

const projects = [
  { id: 2, title: "Academy HQ", category: "UI/UX Design • App Development", img: imgWork2, size: "lg" },
  { id: 3, title: "Genome", category: "Identity • Digital Marketing", img: imgWork3, size: "sm" },
  { id: 4, title: "Hotto", category: "Brand Strategy • Packaging", img: imgWork4, size: "sm" },
  { id: 5, title: "Fintech Pro", category: "Product Design • Web App", img: imgWork5, size: "lg" },
  { id: 6, title: "Lumina Studio", category: "Brand Identity • Web Design", img: imgWork6, size: "sm" },
];

export function Projects() {
  const targetRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end end"]
  });

  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-60%"]);

  return (
    <div className="flex flex-col items-center w-full bg-[#fbfbfb] relative">
      <section
        className="w-full relative flex flex-col items-start bg-top bg-no-repeat bg-cover pt-[60px] pb-16 px-[20px] md:px-[84px]"
        style={{ backgroundImage: `url('${imgFrame}')` }}
      >
        <div className="max-w-[800px] text-left">
          <SectionLabel>Our work</SectionLabel>
          <motion.h1
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="text-[#1b1d1e] text-[56px] md:text-[80px] font-medium leading-[1.1] mb-6 tracking-[-0.03em]"
          >
            Our selected <span className="font-['Instrument_Serif',serif] italic font-normal tracking-[-2px] text-gray-500">works</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-[20px] text-[rgba(27,29,30,0.6)] leading-[1.6]"
          >
            Explore our portfolio of digital products, brand identities, and websites that have helped our clients stand out and grow.
          </motion.p>
        </div>
      </section>

      {/* Featured Project — full-width lead story */}
      <section className="w-full max-w-[1272px] mx-auto px-4 mb-24">
        <Link to={`/projects/${featured.id}`} className="group block">
          <RevealImage>
            <div className="relative rounded-[40px] overflow-hidden aspect-[16/9] md:aspect-[21/9] bg-gray-100">
              <img src={featured.img} alt={featured.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-8 md:p-12 flex flex-col md:flex-row md:items-end md:justify-between gap-6">
                <div>
                  <span className="inline-block bg-[#D7E84C] text-[#1b1d1e] text-xs font-semibold tracking-wide uppercase px-3 py-1 rounded-full mb-4">Featured</span>
                  <h2 className="text-white text-[36px] md:text-[56px] font-medium leading-tight mb-2">{featured.title}</h2>
                  <p className="text-white/70 text-lg">{featured.category} — {featured.year}</p>
                </div>
                <div className="w-14 h-14 rounded-full bg-white text-black flex items-center justify-center shrink-0 group-hover:bg-[#D7E84C] transition-colors">
                  <ArrowUpRight size={24} />
                </div>
              </div>
            </div>
          </RevealImage>
        </Link>
      </section>

      {/* Horizontal scroll gallery — mixed widths for rhythm */}
      <section ref={targetRef} className="relative h-[300vh] w-full">
        <div className="sticky top-0 flex h-screen items-center overflow-hidden">
          <motion.div style={{ x }} className="flex items-end gap-8 px-4 md:px-[84px]">
            {projects.map((project) => (
              <motion.div
                key={project.id}
                className={`shrink-0 ${project.size === "lg" ? "w-[85vw] md:w-[640px]" : "w-[70vw] md:w-[420px]"}`}
              >
                <Link to={`/projects/${project.id}`} className="group flex flex-col gap-6">
                  <div className={`rounded-[32px] overflow-hidden bg-gray-100 relative ${project.size === "lg" ? "aspect-[4/3]" : "aspect-[3/4]"}`}>
                    <img src={project.img} alt={project.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-300 flex items-center justify-center">
                      <div className="bg-white text-black px-6 py-3 rounded-full font-medium opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                        View Project
                      </div>
                    </div>
                  </div>
                  <div className="flex justify-between items-start px-2">
                    <div>
                      <h3 className="text-2xl font-medium mb-2">{project.title}</h3>
                      <p className="text-gray-500">{project.category}</p>
                    </div>
                    <div className="w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center group-hover:bg-black group-hover:text-white transition-colors shrink-0">
                      <ArrowUpRight size={20} />
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  );
}
