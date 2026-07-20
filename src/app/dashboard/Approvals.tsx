import { motion } from "motion/react";
import { Check, X, Upload } from "lucide-react";
import { approvals, tasks } from "./data";

export function Approvals() {
  return (
    <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }} className="max-w-[900px] flex flex-col gap-8">
      {/* Approvals */}
      <section>
        <h2 className="text-sm font-semibold text-gray-400 uppercase tracking-wide mb-4">Needs your approval</h2>
        <div className="flex flex-col gap-3">
          {approvals.map((a) => (
            <div key={a.title} className="bg-white border border-gray-100 rounded-2xl p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <p className="font-medium">{a.title}</p>
                <p className="text-sm text-gray-400">{a.type} · Waiting since Jul 17</p>
              </div>
              <div className="flex items-center gap-2 shrink-0">
                <button className="inline-flex items-center gap-1.5 text-sm font-medium text-gray-500 border border-gray-200 rounded-full px-4 py-2 hover:bg-gray-50 transition-colors">
                  <X size={15} /> Request changes
                </button>
                <button className="inline-flex items-center gap-1.5 text-sm font-medium bg-[#2E52A4] text-white rounded-full px-4 py-2 hover:bg-[#24417F] transition-colors">
                  <Check size={15} /> Approve
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Tasks */}
      <section>
        <h2 className="text-sm font-semibold text-gray-400 uppercase tracking-wide mb-4">Your tasks</h2>
        <div className="bg-white border border-gray-100 rounded-2xl divide-y divide-gray-50">
          {tasks.map((t) => (
            <div key={t.title} className="flex items-center gap-4 px-5 py-4">
              <span className={`w-2 h-2 rounded-full shrink-0 ${t.priority === "high" ? "bg-red-400" : "bg-amber-400"}`} />
              <div className="flex-1">
                <p className="text-sm font-medium">{t.title}</p>
                <p className="text-xs text-gray-400">{t.due}</p>
              </div>
              {t.title.toLowerCase().includes("upload") && (
                <button className="inline-flex items-center gap-1.5 text-sm font-medium text-[#2E52A4] hover:bg-[#eaf0fb] rounded-full px-3 py-1.5 transition-colors">
                  <Upload size={15} /> Upload
                </button>
              )}
            </div>
          ))}
        </div>
      </section>
    </motion.div>
  );
}
