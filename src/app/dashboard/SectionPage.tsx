import { useParams } from "react-router";
import { motion } from "motion/react";
import { ChevronRight } from "lucide-react";
import { navBySlug } from "./nav";

/**
 * Calm, generic renderer for merged sections (Files, Messages, Settings, etc.).
 * Presents the section's contents as a simple, low-noise list rather than a
 * grid of action-looking cards.
 */
export function SectionPage() {
  const { section } = useParams();
  const item = section ? navBySlug[section] : undefined;

  if (!item) return <p className="text-gray-500">Section not found.</p>;

  const Icon = item.icon;

  return (
    <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }} className="max-w-[800px]">
      <div className="flex items-center gap-4 mb-6">
        <div className="w-11 h-11 rounded-2xl bg-[#eaf0fb] text-[#2E52A4] flex items-center justify-center"><Icon size={20} /></div>
        <div>
          <h2 className="text-xl font-semibold">{item.label}</h2>
          <p className="text-sm text-gray-500">Everything for {item.label.toLowerCase()}, in one place.</p>
        </div>
      </div>

      <div className="bg-white border border-gray-100 rounded-3xl divide-y divide-gray-50">
        {item.items.map((sub) => (
          <button key={sub} className="w-full flex items-center justify-between gap-3 px-6 py-4 text-left hover:bg-gray-50/60 transition-colors first:rounded-t-3xl last:rounded-b-3xl">
            <span className="text-[15px] font-medium">{sub}</span>
            <ChevronRight size={18} className="text-gray-300 shrink-0" />
          </button>
        ))}
      </div>
    </motion.div>
  );
}
