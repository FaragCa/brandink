import { motion } from "motion/react";
import { Download, CreditCard } from "lucide-react";
import { invoices } from "./data";

export function Billing() {
  const outstanding = invoices.filter((i) => i.status === "Due").reduce((sum, i) => sum + Number(i.amount.replace(/[$,]/g, "")), 0);

  return (
    <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }} className="max-w-[1000px] flex flex-col gap-6">
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div className="bg-[#2E52A4] text-white rounded-3xl p-6">
          <p className="text-sm text-white/60 mb-1">Outstanding balance</p>
          <p className="text-3xl font-semibold">${outstanding.toLocaleString()}</p>
        </div>
        <div className="bg-white border border-gray-100 rounded-3xl p-6">
          <p className="text-sm text-gray-400 mb-1">Total paid</p>
          <p className="text-3xl font-semibold">$1,000</p>
        </div>
        <div className="bg-white border border-gray-100 rounded-3xl p-6 flex flex-col justify-between">
          <p className="text-sm text-gray-400 mb-1">Payment method</p>
          <div className="flex items-center gap-2 font-medium"><CreditCard size={18} className="text-[#2E52A4]" /> Visa ···· 6411</div>
        </div>
      </div>

      <div className="bg-white border border-gray-100 rounded-3xl overflow-hidden">
        <div className="px-6 py-4 border-b border-gray-50 flex items-center justify-between">
          <h2 className="font-semibold">Invoices</h2>
          <span className="text-sm text-gray-400">{invoices.length} total</span>
        </div>
        <table className="w-full text-sm">
          <thead>
            <tr className="text-left text-gray-400 border-b border-gray-50">
              <th className="font-medium px-6 py-3">Invoice</th>
              <th className="font-medium px-6 py-3 hidden sm:table-cell">Description</th>
              <th className="font-medium px-6 py-3">Amount</th>
              <th className="font-medium px-6 py-3">Status</th>
              <th className="font-medium px-6 py-3 text-right">Receipt</th>
            </tr>
          </thead>
          <tbody>
            {invoices.map((inv) => (
              <tr key={inv.id} className="border-b border-gray-50 last:border-b-0">
                <td className="px-6 py-4 font-medium">#{inv.id}<span className="block text-xs text-gray-400 font-normal">{inv.date}</span></td>
                <td className="px-6 py-4 text-gray-600 hidden sm:table-cell">{inv.label}</td>
                <td className="px-6 py-4 font-medium">{inv.amount}</td>
                <td className="px-6 py-4"><span className={`text-[11px] font-medium px-2 py-1 rounded-full ${inv.status === "Paid" ? "text-green-600 bg-green-100" : "text-amber-600 bg-amber-100"}`}>{inv.status}</span></td>
                <td className="px-6 py-4 text-right">
                  <button className="text-[#2E52A4] hover:bg-[#eaf0fb] rounded-lg p-1.5 transition-colors inline-flex"><Download size={16} /></button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </motion.div>
  );
}
