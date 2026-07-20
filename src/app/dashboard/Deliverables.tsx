import { motion } from "motion/react";
import { Download, FileImage, FileText, Package, CheckCircle2 } from "lucide-react";
import { client, journeys } from "./data";

const groups = [
  { name: "Brand", icon: FileImage, items: ["Brand Strategy", "Logo Suite", "Colour Palette", "Typography", "Brand Guidelines"] },
  { name: "Website", icon: Package, items: ["Responsive Website", "CMS", "SEO Setup", "Contact Forms", "Analytics"] },
  { name: "Business", icon: FileText, items: ["AI Workflow Recommendations", "Client Intake Forms", "Business Documentation"] },
  { name: "Launch", icon: CheckCircle2, items: ["Website Launch", "Final Asset Package", "Training Session", "Support"] },
];

export function Deliverables() {
  const journey = journeys.find((j) => j.id === client.package)!;
  const total = journey.deliverables.length;
  const ready = Math.round(total * (client.progress / 100));

  return (
    <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }} className="max-w-[1100px] flex flex-col gap-6">
      <div className="bg-white border border-gray-100 rounded-3xl p-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div>
          <h2 className="text-lg font-semibold">{journey.title} — Deliverables</h2>
          <p className="text-sm text-gray-500">{ready} of {total} items ready to download</p>
        </div>
        <button className="bg-[#2E52A4] text-white rounded-full px-6 py-3 text-sm font-medium flex items-center gap-2 hover:bg-[#24417F] transition-colors">
          <Download size={16} /> Download all ready files
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {groups.map((g) => {
          const Icon = g.icon;
          return (
            <div key={g.name} className="bg-white border border-gray-100 rounded-3xl p-6">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 rounded-xl bg-[#f4f5f7] flex items-center justify-center text-[#2E52A4]"><Icon size={18} /></div>
                <h3 className="font-semibold">{g.name}</h3>
              </div>
              <ul className="flex flex-col gap-1">
                {g.items.map((item, i) => {
                  const isReady = i < g.items.length - 1 || client.progress > 80;
                  return (
                    <li key={item} className="flex items-center justify-between py-2.5 border-b border-gray-50 last:border-b-0">
                      <span className="text-sm text-gray-700">{item}</span>
                      {isReady ? (
                        <button className="text-[#2E52A4] hover:bg-[#eaf0fb] rounded-lg p-1.5 transition-colors"><Download size={16} /></button>
                      ) : (
                        <span className="text-[11px] text-gray-400 bg-gray-100 px-2 py-1 rounded-full">In progress</span>
                      )}
                    </li>
                  );
                })}
              </ul>
            </div>
          );
        })}
      </div>
    </motion.div>
  );
}
