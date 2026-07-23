import { useState } from "react";
import { ArrowUpRight, Mail, MapPin, Phone } from "lucide-react";
import { motion } from "motion/react";
import { SectionLabel } from "../components/CinematicEffects";

import imgFrame from "figma:asset/84f7485d3b3cd8b2f7a0274800f54c2b22f43621.png";

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    service: "",
    budget: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Thanks! We'll be in touch shortly to book your free consultation.");
    setFormData({ name: "", email: "", service: "", budget: "", message: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

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
            Book your free <span className="font-['Instrument_Serif',serif] italic font-normal tracking-[-2px] text-gray-500">consultation</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-[18px] text-[rgba(27,29,30,0.6)] mx-auto leading-[1.6]"
          >
            Ready to give your business a professional online presence? Tell us a little about your project and we'll be in touch to discuss how BrandInk can help you grow online.
          </motion.p>
        </div>
      </section>

      <section className="w-full max-w-[1272px] mx-auto px-4 pt-16 mb-32">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 flex flex-col gap-10"
          >
            <div>
              <SectionLabel>Get in touch</SectionLabel>
              <h2 className="text-[32px] font-medium mb-4">Get in touch</h2>
              <p className="text-gray-500 text-lg">We'd love to hear from you. Our friendly team is always here to chat.</p>
            </div>
            
            <div className="flex flex-col gap-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shrink-0 border border-gray-100 shadow-sm">
                  <Mail size={20} className="text-[#2E52A4]" />
                </div>
                <div>
                  <h3 className="font-medium text-lg mb-1">Email us</h3>
                  <p className="text-gray-500 mb-1">Our friendly team is here to help.</p>
                  <a href="mailto:hello@brandink.agency" className="text-[#2E52A4] font-medium hover:underline">hello@brandink.agency</a>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shrink-0 border border-gray-100 shadow-sm">
                  <MapPin size={20} className="text-[#2E52A4]" />
                </div>
                <div>
                  <h3 className="font-medium text-lg mb-1">Visit us</h3>
                  <p className="text-gray-500 mb-1">Come say hello at our office HQ.</p>
                  <p className="text-[#1b1d1e] font-medium">100 Smith Street<br/>Collingwood VIC 3066 AU</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shrink-0 border border-gray-100 shadow-sm">
                  <Phone size={20} className="text-[#2E52A4]" />
                </div>
                <div>
                  <h3 className="font-medium text-lg mb-1">Call us</h3>
                  <p className="text-gray-500 mb-1">Mon-Fri from 8am to 5pm.</p>
                  <a href="tel:+15550000000" className="text-[#2E52A4] font-medium hover:underline">+1 (555) 000-0000</a>
                </div>
              </div>
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7"
          >
            <div className="bg-white p-8 md:p-12 rounded-[40px] border border-gray-100 shadow-sm">
              <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="flex flex-col gap-2">
                    <label htmlFor="name" className="font-medium text-sm text-gray-700">Name</label>
                    <input 
                      type="text" 
                      id="name" 
                      name="name" 
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Jane Smith" 
                      required
                      className="px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#2E52A4] focus:border-transparent transition-all"
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label htmlFor="email" className="font-medium text-sm text-gray-700">Email</label>
                    <input 
                      type="email" 
                      id="email" 
                      name="email" 
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="jane@example.com" 
                      required
                      className="px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#2E52A4] focus:border-transparent transition-all"
                    />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="flex flex-col gap-2">
                    <label htmlFor="service" className="font-medium text-sm text-gray-700">Service Required</label>
                    <select 
                      id="service" 
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      required
                      className="px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#2E52A4] focus:border-transparent transition-all bg-white appearance-none"
                    >
                      <option value="" disabled>Select a service</option>
                      <option value="website">Website Design & Development</option>
                      <option value="payments">Online Payments</option>
                      <option value="ai">AI Chat Assistant</option>
                      <option value="care">Website Care Plan</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  <div className="flex flex-col gap-2">
                    <label htmlFor="budget" className="font-medium text-sm text-gray-700">Project Budget</label>
                    <select
                      id="budget"
                      name="budget"
                      value={formData.budget}
                      onChange={handleChange}
                      required
                      className="px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#2E52A4] focus:border-transparent transition-all bg-white appearance-none"
                    >
                      <option value="" disabled>Select a range</option>
                      <option value="500-750">$500 - $750</option>
                      <option value="750-1500">$750 - $1,500</option>
                      <option value="1500+">$1,500+</option>
                      <option value="unsure">Not sure yet</option>
                    </select>
                  </div>
                </div>
                
                <div className="flex flex-col gap-2">
                  <label htmlFor="message" className="font-medium text-sm text-gray-700">Message</label>
                  <textarea 
                    id="message" 
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={5}
                    placeholder="Tell us about your project..." 
                    required
                    className="px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#2E52A4] focus:border-transparent transition-all resize-none"
                  />
                </div>
                
                <button type="submit" className="bg-[#1b1d1e] text-white flex items-center justify-center gap-2 py-4 rounded-full font-medium hover:bg-black transition-colors w-full mt-2">
                  Book My Free Consultation <ArrowUpRight size={20} />
                </button>
              </form>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
