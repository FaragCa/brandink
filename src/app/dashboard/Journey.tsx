import { useState } from "react";
import { Link } from "react-router";
import { motion, AnimatePresence } from "motion/react";
import {
  Check, Lock, Phone, Upload, FileText, Eye, Info, ChevronDown, ArrowRight, ArrowUpRight,
} from "lucide-react";
import { courseModules, type ModuleType, type JourneyModule } from "./data";

const typeMeta: Record<ModuleType, { icon: React.ComponentType<{ size?: number; className?: string }>; label: string }> = {
  call: { icon: Phone, label: "Call" },
  upload: { icon: Upload, label: "Upload" },
  form: { icon: FileText, label: "Form" },
  review: { icon: Eye, label: "Review" },
  info: { icon: Info, label: "Info" },
};

const doneCount = courseModules.filter((m) => m.status === "done").length;
const pct = Math.round((doneCount / courseModules.length) * 100);

function StatusDot({ m, index }: { m: JourneyModule; index: number }) {
  if (m.status === "done")
    return <div className="w-9 h-9 rounded-full bg-[#2E52A4] text-white flex items-center justify-center shrink-0"><Check size={18} /></div>;
  if (m.status === "current")
    return <div className="w-9 h-9 rounded-full bg-white border-2 border-[#2E52A4] text-[#2E52A4] font-semibold text-sm flex items-center justify-center shrink-0">{index + 1}</div>;
  return <div className="w-9 h-9 rounded-full bg-gray-100 text-gray-400 flex items-center justify-center shrink-0"><Lock size={15} /></div>;
}

/** Full course-style journey — expandable modules the client completes. */
export function Journey() {
  const [open, setOpen] = useState<string | null>(courseModules.find((m) => m.status === "current")?.id ?? null);

  return (
    <div className="max-w-[820px]">
      {/* Progress header */}
      <div className="bg-white border border-gray-100 rounded-3xl p-6 mb-6 flex items-center gap-6">
        <div className="relative w-16 h-16 shrink-0">
          <svg viewBox="0 0 36 36" className="w-16 h-16 -rotate-90">
            <circle cx="18" cy="18" r="15.5" fill="none" stroke="#eef0f3" strokeWidth="4" />
            <motion.circle cx="18" cy="18" r="15.5" fill="none" stroke="#2E52A4" strokeWidth="4" strokeLinecap="round"
              strokeDasharray={2 * Math.PI * 15.5}
              initial={{ strokeDashoffset: 2 * Math.PI * 15.5 }}
              animate={{ strokeDashoffset: 2 * Math.PI * 15.5 * (1 - pct / 100) }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            />
          </svg>
          <span className="absolute inset-0 flex items-center justify-center text-sm font-semibold">{pct}%</span>
        </div>
        <div>
          <h2 className="text-lg font-semibold">Your onboarding journey</h2>
          <p className="text-sm text-gray-500">{doneCount} of {courseModules.length} steps complete · finish each to keep your project moving.</p>
        </div>
      </div>

      {/* Modules */}
      <div className="flex flex-col gap-3">
        {courseModules.map((m, i) => {
          const Meta = typeMeta[m.type];
          const Icon = Meta.icon;
          const locked = m.status === "todo";
          const isOpen = open === m.id;
          return (
            <div key={m.id} className={`bg-white border rounded-2xl overflow-hidden transition-colors ${m.status === "current" ? "border-[#2E52A4]/40 shadow-sm" : "border-gray-100"}`}>
              <button
                onClick={() => !locked && setOpen(isOpen ? null : m.id)}
                className={`w-full flex items-center gap-4 p-4 text-left ${locked ? "cursor-default" : "hover:bg-gray-50/60"} transition-colors`}
              >
                <StatusDot m={m} index={i} />
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2">
                    <p className={`font-medium ${locked ? "text-gray-400" : ""}`}>{m.title}</p>
                    <span className={`hidden sm:inline-flex items-center gap-1 text-[11px] font-medium px-2 py-0.5 rounded-full ${locked ? "bg-gray-100 text-gray-400" : "bg-[#eaf0fb] text-[#2E52A4]"}`}>
                      <Icon size={11} /> {Meta.label}
                    </span>
                  </div>
                  <p className={`text-sm mt-0.5 truncate ${locked ? "text-gray-300" : "text-gray-500"}`}>{m.desc}</p>
                </div>
                {m.status === "done" && <span className="text-xs font-medium text-green-600 shrink-0 hidden sm:block">Completed</span>}
                {!locked && <ChevronDown size={18} className={`text-gray-400 shrink-0 transition-transform ${isOpen ? "rotate-180" : ""}`} />}
              </button>

              <AnimatePresence>
                {isOpen && !locked && (
                  <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.3 }} className="overflow-hidden">
                    <div className="px-4 pb-4 pl-[68px]">
                      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2 mb-4">
                        {m.items.map((it) => (
                          <li key={it} className="flex items-center gap-2 text-sm text-gray-600">
                            <span className={`w-1.5 h-1.5 rounded-full shrink-0 ${m.status === "done" ? "bg-[#2E52A4]" : "bg-gray-300"}`} />
                            {it}
                          </li>
                        ))}
                      </ul>
                      {m.status === "current" ? (
                        <button className="inline-flex items-center gap-2 bg-[#2E52A4] text-white rounded-full px-5 py-2.5 text-sm font-medium hover:bg-[#24417F] transition-colors">
                          <Icon size={15} /> {m.action}
                        </button>
                      ) : (
                        <span className="inline-flex items-center gap-2 text-sm text-green-600 font-medium"><Check size={15} /> Done</span>
                      )}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </div>
    </div>
  );
}

/** Compact journey strip for the dashboard home. */
export function JourneyCompact() {
  const current = courseModules.find((m) => m.status === "current");
  const CurrentIcon = current ? typeMeta[current.type].icon : ArrowRight;

  return (
    <div className="bg-white border border-gray-100 rounded-3xl p-6">
      <div className="flex items-center justify-between mb-5">
        <h2 className="text-[15px] font-semibold">Your journey</h2>
        <Link to="/dashboard/project" className="text-[13px] text-[#2E52A4] font-medium inline-flex items-center gap-1 hover:gap-1.5 transition-all">Open <ArrowUpRight size={14} /></Link>
      </div>

      {/* step dots */}
      <div className="flex items-center gap-1.5 mb-5">
        {courseModules.map((m) => (
          <div key={m.id} className={`h-1.5 flex-1 rounded-full ${m.status === "done" ? "bg-[#2E52A4]" : m.status === "current" ? "bg-[#D7E84C]" : "bg-gray-200"}`} />
        ))}
      </div>

      {current && (
        <div className="flex items-center gap-3 bg-[#f4f5f7] rounded-2xl p-4">
          <div className="w-10 h-10 rounded-xl bg-[#2E52A4] text-white flex items-center justify-center shrink-0"><CurrentIcon size={18} /></div>
          <div className="flex-1 min-w-0">
            <p className="text-xs text-gray-400 font-medium">Up next</p>
            <p className="font-medium truncate">{current.title}</p>
          </div>
          <Link to="/dashboard/project" className="shrink-0 bg-[#2E52A4] text-white rounded-full px-4 py-2 text-sm font-medium hover:bg-[#24417F] transition-colors">
            {current.action}
          </Link>
        </div>
      )}
    </div>
  );
}
