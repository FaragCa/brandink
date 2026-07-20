import { Link } from "react-router";
import { motion } from "motion/react";
import {
  ArrowUpRight, Calendar, Clock, CheckCircle2, Circle, Check, X, ChevronRight,
} from "lucide-react";
import { client, brandProcess, milestones, activity, tasks, approvals } from "./data";
import { JourneyCompact } from "./Journey";

const Card = ({ className = "", children }: { className?: string; children: React.ReactNode }) => (
  <div className={`bg-white border border-gray-100 rounded-3xl p-6 ${className}`}>{children}</div>
);

const CardTitle = ({ children, to }: { children: React.ReactNode; to?: string }) => (
  <div className="flex items-center justify-between mb-5">
    <h2 className="text-[15px] font-semibold">{children}</h2>
    {to && <Link to={to} className="text-[13px] text-[#2E52A4] font-medium inline-flex items-center gap-1 hover:gap-1.5 transition-all">View all <ChevronRight size={14} /></Link>}
  </div>
);

export function Overview() {
  const nextMilestone = milestones.find((m) => !m.done);

  return (
    <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }} className="flex flex-col gap-6 max-w-[1100px]">
      {/* Zone 1 — status hero + what's coming up */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 bg-[#1b1d1e] text-white rounded-3xl p-8 relative overflow-hidden">
          <div className="absolute inset-0 opacity-40" style={{ backgroundImage: "radial-gradient(circle at 15% 20%, rgba(46,82,164,0.5), transparent 45%), radial-gradient(circle at 90% 90%, rgba(215,232,76,0.12), transparent 40%)" }} />
          <div className="relative">
            <p className="font-['JetBrains_Mono',monospace] text-[12px] tracking-[0.2em] uppercase text-white/40 mb-3">{client.company}</p>
            <h2 className="text-[26px] md:text-[32px] font-medium leading-tight mb-2">Welcome back, {client.name.split(" ")[0]} 👋</h2>
            <p className="text-white/60 mb-8 max-w-[440px]">
              Your <span className="text-[#D7E84C] font-medium">{client.packageTitle}</span> project is in the <span className="text-white font-medium">{brandProcess[client.currentStage].name}</span> stage.
            </p>

            <div className="flex items-center justify-between mb-2">
              <span className="text-sm text-white/60">Overall progress</span>
              <span className="text-sm font-semibold text-[#D7E84C]">{client.progress}%</span>
            </div>
            <div className="h-2.5 rounded-full bg-white/10 overflow-hidden">
              <motion.div initial={{ width: 0 }} animate={{ width: `${client.progress}%` }} transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }} className="h-full rounded-full bg-[#D7E84C]" />
            </div>

            <div className="flex flex-wrap gap-2 mt-8">
              {brandProcess.map((s, i) => (
                <div key={s.step} className={`px-3 py-1.5 rounded-full text-xs font-medium ${i < client.currentStage ? "bg-[#D7E84C] text-black" : i === client.currentStage ? "bg-white text-black" : "bg-white/10 text-white/50"}`}>
                  {s.name}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Coming up */}
        <Card className="flex flex-col gap-5">
          <div>
            <CardTitle>Coming up</CardTitle>
            <div className="flex items-start gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#eaf0fb] text-[#2E52A4] flex items-center justify-center shrink-0"><Calendar size={18} /></div>
              <div>
                <p className="font-medium text-[15px]">{client.nextMeeting.title}</p>
                <p className="text-sm text-gray-500 mt-0.5 flex items-center gap-1.5"><Clock size={13} /> {client.nextMeeting.when}</p>
              </div>
            </div>
          </div>
          {nextMilestone && (
            <div className="flex items-start gap-3 pt-5 border-t border-gray-50">
              <div className="w-10 h-10 rounded-xl bg-[#f4f5f7] text-gray-500 flex items-center justify-center shrink-0"><Circle size={18} /></div>
              <div>
                <p className="font-medium text-[15px]">{nextMilestone.name}</p>
                <p className="text-sm text-gray-500 mt-0.5">Next milestone · {nextMilestone.date}</p>
              </div>
            </div>
          )}
          <a href={client.nextMeeting.link} className="mt-auto bg-[#2E52A4] text-white rounded-full py-3 text-sm font-medium flex items-center justify-center gap-2 hover:bg-[#24417F] transition-colors">
            Join next call <ArrowUpRight size={16} />
          </a>
        </Card>
      </div>

      {/* Zone 2 — course journey */}
      <JourneyCompact />

      {/* Zone 3 — needs your attention + recent activity */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardTitle to="/dashboard/approvals">Needs your attention</CardTitle>
          <div className="flex flex-col gap-3">
            {approvals.map((a) => (
              <div key={a.title} className="flex items-center justify-between gap-3 bg-[#f4f5f7] rounded-xl px-4 py-3">
                <div className="min-w-0">
                  <p className="text-sm font-medium truncate">{a.title}</p>
                  <p className="text-xs text-gray-400">Approval · {a.type}</p>
                </div>
                <div className="flex items-center gap-1.5 shrink-0">
                  <button className="w-8 h-8 rounded-full border border-gray-200 flex items-center justify-center text-gray-400 hover:text-black hover:border-gray-300 transition-colors"><X size={14} /></button>
                  <button className="w-8 h-8 rounded-full bg-[#2E52A4] text-white flex items-center justify-center hover:bg-[#24417F] transition-colors"><Check size={14} /></button>
                </div>
              </div>
            ))}
            {tasks.slice(0, 2).map((t) => (
              <div key={t.title} className="flex items-center gap-3 px-1 py-1">
                <span className={`w-2 h-2 rounded-full shrink-0 ${t.priority === "high" ? "bg-red-400" : "bg-amber-400"}`} />
                <p className="text-sm flex-1 min-w-0 truncate">{t.title}</p>
                <span className="text-xs text-gray-400 shrink-0">{t.due.replace("Due ", "")}</span>
              </div>
            ))}
          </div>
        </Card>

        <Card>
          <CardTitle>Recent activity</CardTitle>
          <ul className="flex flex-col gap-4">
            {activity.map((a, i) => (
              <li key={i} className="flex gap-3">
                <div className="w-2 h-2 rounded-full bg-[#D7E84C] mt-1.5 shrink-0" />
                <div>
                  <p className="text-sm leading-snug"><span className="font-medium">{a.who}</span> {a.text}</p>
                  <p className="text-xs text-gray-400 mt-0.5">{a.when}</p>
                </div>
              </li>
            ))}
          </ul>
        </Card>
      </div>

      {/* Zone 4 — milestone track (calm, single row) */}
      <Card>
        <CardTitle to="/dashboard/project">Project milestones</CardTitle>
        <ul className="flex flex-col">
          {milestones.map((m, i) => (
            <li key={m.name} className={`flex items-center gap-4 py-3 ${i !== milestones.length - 1 ? "border-b border-gray-50" : ""}`}>
              {m.done ? <CheckCircle2 size={19} className="text-[#2E52A4] shrink-0" /> : <Circle size={19} className="text-gray-300 shrink-0" />}
              <span className={`flex-1 text-sm ${m.done ? "text-gray-400 line-through" : "font-medium"}`}>{m.name}</span>
              <span className="text-xs text-gray-400 font-['JetBrains_Mono',monospace]">{m.date}</span>
            </li>
          ))}
        </ul>
      </Card>
    </motion.div>
  );
}
