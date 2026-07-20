import { useState } from "react";
import { Journey } from "./Journey";
import { Deliverables } from "./Deliverables";

const tabs = [
  { id: "journey", label: "Journey" },
  { id: "deliverables", label: "Deliverables" },
] as const;

export function Project() {
  const [tab, setTab] = useState<(typeof tabs)[number]["id"]>("journey");

  return (
    <div>
      <div className="inline-flex items-center gap-1 bg-white border border-gray-100 rounded-full p-1 mb-6">
        {tabs.map((t) => (
          <button
            key={t.id}
            onClick={() => setTab(t.id)}
            className={`px-5 py-2 rounded-full text-sm font-medium transition-colors ${
              tab === t.id ? "bg-[#2E52A4] text-white" : "text-gray-500 hover:text-black"
            }`}
          >
            {t.label}
          </button>
        ))}
      </div>

      {tab === "journey" ? <Journey /> : <Deliverables />}
    </div>
  );
}
