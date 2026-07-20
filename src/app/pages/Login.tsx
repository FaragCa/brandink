import { useState } from "react";
import { Link, useNavigate } from "react-router";
import { motion } from "motion/react";
import { ArrowLeft, ArrowUpRight, Eye, EyeOff } from "lucide-react";
import { BrandLogo } from "../components/BrandLogo";

import imgFrame from "figma:asset/84f7485d3b3cd8b2f7a0274800f54c2b22f43621.png";

export function Login() {
  const navigate = useNavigate();
  const [showPw, setShowPw] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    navigate("/dashboard");
  };

  return (
    <div className="min-h-screen grid grid-cols-1 lg:grid-cols-2 font-['Inter',sans-serif] text-[#1b1d1e]">
      {/* Left — brand panel */}
      <div className="relative hidden lg:flex flex-col justify-between p-12 bg-[#1b1d1e] text-white overflow-hidden">
        <div className="absolute inset-0 opacity-50" style={{ backgroundImage: `url('${imgFrame}')`, backgroundSize: "cover", mixBlendMode: "luminosity" }} />
        <div className="absolute inset-0" style={{ backgroundImage: "radial-gradient(circle at 20% 30%, rgba(46,82,164,0.5), transparent 45%), radial-gradient(circle at 80% 80%, rgba(215,232,76,0.18), transparent 40%)" }} />
        <div className="relative">
          <Link to="/" className="inline-flex items-center gap-2 text-white/60 hover:text-white transition-colors text-sm">
            <ArrowLeft size={16} /> Back to website
          </Link>
        </div>
        <div className="relative">
          <p className="font-['JetBrains_Mono',monospace] text-[12px] tracking-[0.25em] uppercase text-white/40 mb-5">Client Portal</p>
          <h1 className="text-[44px] font-medium leading-[1.05] mb-4">
            Your projects, <span className="font-['Instrument_Serif',serif] italic font-normal text-[#D7E84C]">all in one place.</span>
          </h1>
          <p className="text-white/60 max-w-[400px] text-lg leading-relaxed">
            Track progress, review deliverables, approve designs, and message the team — from brief to launch.
          </p>
        </div>
        <div className="relative flex items-center gap-3 text-sm text-white/40">
          <span className="font-['JetBrains_Mono',monospace] tracking-[0.15em] uppercase">BrandInk® Agency</span>
        </div>
      </div>

      {/* Right — form */}
      <div className="flex flex-col items-center justify-center p-6 sm:p-12 bg-[#fbfbfb] relative">
        <Link to="/" className="lg:hidden absolute top-6 left-6 inline-flex items-center gap-2 text-gray-500 hover:text-black transition-colors text-sm">
          <ArrowLeft size={16} /> Back
        </Link>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="w-full max-w-[400px]"
        >
          <div className="mb-8">
            <BrandLogo className="h-[56px] w-auto mb-6" />
            <h2 className="text-[28px] font-semibold mb-1">Welcome back</h2>
            <p className="text-gray-500">Sign in to your client dashboard.</p>
          </div>

          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <div className="flex flex-col gap-2">
              <label htmlFor="email" className="text-sm font-medium text-gray-700">Email</label>
              <input id="email" type="email" required placeholder="you@company.com" defaultValue="ava@northwindstudio.com"
                className="px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#2E52A4] focus:border-transparent transition-all bg-white" />
            </div>
            <div className="flex flex-col gap-2">
              <div className="flex items-center justify-between">
                <label htmlFor="password" className="text-sm font-medium text-gray-700">Password</label>
                <a href="#" className="text-sm text-[#2E52A4] font-medium hover:underline">Forgot?</a>
              </div>
              <div className="relative">
                <input id="password" type={showPw ? "text" : "password"} required placeholder="••••••••" defaultValue="password"
                  className="w-full px-4 py-3 pr-12 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#2E52A4] focus:border-transparent transition-all bg-white" />
                <button type="button" onClick={() => setShowPw((v) => !v)} className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600">
                  {showPw ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>
            </div>

            <label className="flex items-center gap-2 text-sm text-gray-600 mt-1">
              <input type="checkbox" defaultChecked className="rounded border-gray-300 text-[#2E52A4] focus:ring-[#2E52A4]" />
              Keep me signed in
            </label>

            <button type="submit" className="mt-2 bg-[#1b1d1e] text-white rounded-full py-3.5 font-medium flex items-center justify-center gap-2 hover:bg-black transition-colors">
              Sign in <ArrowUpRight size={18} />
            </button>
          </form>

          <p className="text-sm text-gray-500 text-center mt-8">
            Don't have a portal yet?{" "}
            <Link to="/contact" className="text-[#2E52A4] font-medium hover:underline">Get in touch</Link>
          </p>
        </motion.div>
      </div>
    </div>
  );
}
