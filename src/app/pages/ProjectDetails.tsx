import { useParams, Link } from "react-router";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { motion } from "motion/react";

import imgWork1 from "figma:asset/0755651cdb4df6ce3d64c4fabc2249617f539cbd.png";
import imgWork2 from "figma:asset/4da44da434a9d8ada2cfe8d42f0779a2001223d7.png";
import imgWork3 from "figma:asset/91317cf2c3a6bff9763415bc8bee089461707441.png";

export function ProjectDetails() {
  const { id } = useParams();
  
  // Mock data for the specific project based on ID
  const project = {
    title: id === "2" ? "Academy HQ" : id === "3" ? "Genome" : "Flowbank",
    category: id === "2" ? "UI/UX Design • App Development" : id === "3" ? "Identity • Digital Marketing" : "Brand Strategy • Web Design",
    client: "Tech Startups Inc.",
    timeline: "3 Months",
    role: "Full Service Agency",
    heroImg: id === "2" ? imgWork2 : id === "3" ? imgWork3 : imgWork1,
    content: "Our goal was to create a modern, scalable brand identity and digital experience that communicates trust and innovation. We started by deeply analyzing the market and their target audience. Through multiple iterations, we crafted a visually striking brand and translated it into a seamless web platform.",
    results: [
      "Increased user engagement by 45%",
      "Reduced bounce rate by 20%",
      "Generated 200+ new leads in the first month"
    ]
  };

  return (
    <div className="flex flex-col items-center w-full bg-[#fbfbfb]">
      <section className="w-full max-w-[1272px] mx-auto px-4 pt-[40px] pb-[80px]">
        <Link to="/projects" className="inline-flex items-center gap-2 text-gray-500 hover:text-black mb-12 transition-colors">
          <ArrowLeft size={20} /> Back to Projects
        </Link>
        
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-8 mb-12">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-[700px]"
          >
            <h1 className="text-[50px] md:text-[80px] font-medium leading-[1.1] mb-4">{project.title}</h1>
            <p className="text-[20px] text-gray-500">{project.category}</p>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="flex gap-10 text-sm"
          >
            <div className="flex flex-col gap-1">
              <span className="text-gray-400 uppercase tracking-wider font-medium">Client</span>
              <span className="font-medium text-lg">{project.client}</span>
            </div>
            <div className="flex flex-col gap-1">
              <span className="text-gray-400 uppercase tracking-wider font-medium">Timeline</span>
              <span className="font-medium text-lg">{project.timeline}</span>
            </div>
            <div className="flex flex-col gap-1">
              <span className="text-gray-400 uppercase tracking-wider font-medium">Role</span>
              <span className="font-medium text-lg">{project.role}</span>
            </div>
          </motion.div>
        </div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="w-full rounded-[40px] overflow-hidden aspect-[21/9] bg-gray-100 mb-20"
        >
          <img src={project.heroImg} alt={project.title} className="w-full h-full object-cover" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-16 max-w-[1000px] mx-auto">
          <div className="md:col-span-4">
            <h2 className="text-3xl font-medium mb-6">The Challenge</h2>
          </div>
          <div className="md:col-span-8">
            <p className="text-gray-600 text-xl leading-relaxed mb-8">{project.content}</p>
            <p className="text-gray-600 text-xl leading-relaxed">By prioritizing user-centric design principles and leveraging modern technology stacks, we delivered a robust platform that scales with their growing business needs.</p>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-16 max-w-[1000px] mx-auto mt-24">
          <div className="md:col-span-4">
            <h2 className="text-3xl font-medium mb-6">The Impact</h2>
          </div>
          <div className="md:col-span-8">
            <ul className="flex flex-col gap-4">
              {project.results.map((result, i) => (
                <li key={i} className="flex items-center gap-4 text-xl text-gray-800">
                  <div className="w-2 h-2 rounded-full bg-[#2E52A4]" /> {result}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Next Project CTA */}
      <section className="w-full max-w-[1272px] mx-auto px-4 mb-16 mt-20">
         <div className="bg-[#1b1d1e] text-white rounded-[40px] p-16 flex flex-col sm:flex-row justify-between items-center text-left">
            <div>
              <p className="text-gray-400 mb-2 font-medium">Next Project</p>
              <h2 className="text-[40px] md:text-[48px] font-medium">{id === "3" ? "Flowbank" : "Genome"}</h2>
            </div>
            <Link to={id === "3" ? "/projects/1" : "/projects/3"} className="w-20 h-20 rounded-full border border-gray-600 flex items-center justify-center hover:bg-white hover:text-black transition-colors mt-8 sm:mt-0">
              <ArrowUpRight size={32} />
            </Link>
         </div>
      </section>
    </div>
  );
}
