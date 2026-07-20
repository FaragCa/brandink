import { motion } from "motion/react";
import { Check } from "lucide-react";
import { client, brandProcess, journeys } from "./data";

export function Timeline() {
  const journey = journeys.find((j) => j.id === client.package)!;
  // Map the 5-step process onto the journey's own stages; currentStage marks progress.
  const stages = journey.steps;

  return (
    <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }} className="max-w-[1000px]">
      <div className="bg-white border border-gray-100 rounded-3xl p-6 md:p-8 mb-6">
        <p className="font-['JetBrains_Mono',monospace] text-[12px] tracking-[0.2em] uppercase text-gray-400 mb-2">The BrandInk Process</p>
        <h2 className="text-2xl font-semibold mb-1">{journey.title}</h2>
        <p className="text-gray-500">{journey.blurb}</p>

        {/* Compact process rail */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-3 mt-6">
          {brandProcess.map((s, i) => (
            <div key={s.step} className={`rounded-2xl p-4 border ${i < client.currentStage ? "bg-[#eaf0fb] border-[#2E52A4]/20" : i === client.currentStage ? "bg-[#2E52A4] border-[#2E52A4] text-white" : "bg-[#f4f5f7] border-transparent"}`}>
              <div className={`text-xs font-['JetBrains_Mono',monospace] mb-1 ${i === client.currentStage ? "text-white/60" : "text-gray-400"}`}>{s.step}</div>
              <div className="text-sm font-semibold">{s.name}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Detailed vertical timeline of the package journey */}
      <div className="relative pl-8">
        <div className="absolute left-[11px] top-2 bottom-2 w-px bg-gray-200" />
        {stages.map((stage, i) => {
          const done = i < client.currentStage;
          const current = i === client.currentStage;
          return (
            <motion.div
              key={stage.name}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="relative pb-8 last:pb-0"
            >
              <div className={`absolute -left-8 top-0 w-6 h-6 rounded-full flex items-center justify-center border-2 ${done ? "bg-[#2E52A4] border-[#2E52A4] text-white" : current ? "bg-white border-[#2E52A4]" : "bg-white border-gray-300"}`}>
                {done ? <Check size={13} /> : <span className={`w-2 h-2 rounded-full ${current ? "bg-[#2E52A4]" : "bg-gray-300"}`} />}
              </div>
              <div className="bg-white border border-gray-100 rounded-3xl p-6">
                <div className="flex items-center gap-3 mb-4">
                  <span className="font-['JetBrains_Mono',monospace] text-xs text-gray-400">Step {i + 1}</span>
                  <h3 className="text-lg font-semibold">{stage.name}</h3>
                  {current && <span className="text-[11px] font-medium text-[#2E52A4] bg-[#eaf0fb] px-2 py-0.5 rounded-full">In progress</span>}
                  {done && <span className="text-[11px] font-medium text-green-600 bg-green-100 px-2 py-0.5 rounded-full">Complete</span>}
                </div>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-2">
                  {stage.items.map((item) => (
                    <li key={item} className="flex items-center gap-2.5 text-sm text-gray-600">
                      <span className={`w-1.5 h-1.5 rounded-full shrink-0 ${done ? "bg-[#2E52A4]" : "bg-gray-300"}`} />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          );
        })}
      </div>
    </motion.div>
  );
}
