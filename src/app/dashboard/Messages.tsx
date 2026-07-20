import { useState } from "react";
import { motion } from "motion/react";
import {
  Inbox, Star, Send, Archive, Search, ArrowLeft, Reply, MoreVertical, Paperclip,
} from "lucide-react";
import { threads, type EmailThread } from "./data";

const folders = [
  { id: "inbox", label: "Inbox", icon: Inbox, count: threads.filter((t) => t.unread).length },
  { id: "starred", label: "Starred", icon: Star, count: threads.filter((t) => t.starred).length },
  { id: "sent", label: "Sent", icon: Send, count: 0 },
  { id: "archived", label: "Archived", icon: Archive, count: 0 },
];

function avatarColor(name: string) {
  const colors = ["#2E52A4", "#16A34A", "#D97706", "#7C3AED", "#DC2626", "#0EA5E9"];
  return colors[name.charCodeAt(0) % colors.length];
}

function ThreadView({ thread, onBack }: { thread: EmailThread; onBack: () => void }) {
  return (
    <div className="flex flex-col h-full">
      <div className="flex items-center gap-3 px-5 py-3 border-b border-gray-100">
        <button onClick={onBack} className="md:hidden text-gray-500"><ArrowLeft size={20} /></button>
        <div className="flex-1 min-w-0">
          <h2 className="font-semibold truncate">{thread.subject}</h2>
          {thread.label && <span className="text-[11px] font-medium text-[#2E52A4] bg-[#eaf0fb] px-2 py-0.5 rounded-full">{thread.label}</span>}
        </div>
        <button className="text-gray-400 hover:text-black"><MoreVertical size={18} /></button>
      </div>

      <div className="flex-1 overflow-y-auto px-5 py-5 flex flex-col gap-5">
        {thread.messages.map((msg, i) => (
          <div key={i} className="flex gap-3">
            <div className="w-9 h-9 rounded-full text-white text-xs font-semibold flex items-center justify-center shrink-0" style={{ backgroundColor: avatarColor(msg.from) }}>
              {msg.from.split(" ").map((n) => n[0]).join("").slice(0, 2)}
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex items-baseline justify-between gap-2">
                <p className="font-medium text-sm">{msg.from} {msg.me && <span className="text-gray-400 font-normal">(you)</span>}</p>
                <span className="text-xs text-gray-400 shrink-0">{msg.time}</span>
              </div>
              <p className="text-xs text-gray-400 mb-2">{msg.fromEmail}</p>
              <p className="text-sm text-gray-700 leading-relaxed whitespace-pre-line">{msg.body}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="border-t border-gray-100 p-4">
        <div className="flex items-center gap-2 bg-[#f4f5f7] rounded-full pl-4 pr-2 py-1.5">
          <input placeholder="Reply to the team…" className="bg-transparent text-sm outline-none flex-1 placeholder:text-gray-400" />
          <button className="text-gray-400 hover:text-black p-2"><Paperclip size={16} /></button>
          <button className="bg-[#2E52A4] text-white rounded-full w-9 h-9 flex items-center justify-center hover:bg-[#24417F] transition-colors"><Reply size={15} className="scale-x-[-1]" /></button>
        </div>
      </div>
    </div>
  );
}

export function Messages() {
  const [openId, setOpenId] = useState<string | null>(null);
  const [folder, setFolder] = useState("inbox");
  const open = threads.find((t) => t.id === openId) ?? null;

  const list = folder === "starred" ? threads.filter((t) => t.starred) : threads;

  return (
    <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}
      className="bg-white border border-gray-100 rounded-3xl overflow-hidden flex h-[calc(100vh-180px)] max-w-[1200px]">
      {/* Folder rail */}
      <div className="hidden md:flex flex-col w-[200px] border-r border-gray-100 p-3 shrink-0">
        <button className="bg-[#2E52A4] text-white rounded-full py-2.5 text-sm font-medium mb-3 hover:bg-[#24417F] transition-colors">Compose</button>
        {folders.map((f) => {
          const Icon = f.icon;
          return (
            <button key={f.id} onClick={() => { setFolder(f.id); setOpenId(null); }}
              className={`flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium transition-colors ${folder === f.id ? "bg-[#eaf0fb] text-[#2E52A4]" : "text-gray-500 hover:bg-gray-50"}`}>
              <Icon size={16} /> <span className="flex-1 text-left">{f.label}</span>
              {f.count > 0 && <span className="text-xs">{f.count}</span>}
            </button>
          );
        })}
      </div>

      {/* List */}
      <div className={`${open ? "hidden md:flex" : "flex"} flex-col w-full md:w-[340px] border-r border-gray-100 shrink-0`}>
        <div className="flex items-center gap-2 bg-[#f4f5f7] rounded-full px-4 h-9 m-3">
          <Search size={15} className="text-gray-400" />
          <input placeholder="Search mail" className="bg-transparent text-sm outline-none w-full placeholder:text-gray-400" />
        </div>
        <div className="flex-1 overflow-y-auto">
          {list.map((t) => (
            <button key={t.id} onClick={() => setOpenId(t.id)}
              className={`w-full text-left px-4 py-3 border-b border-gray-50 hover:bg-gray-50/60 transition-colors flex gap-3 ${openId === t.id ? "bg-[#eaf0fb]/50" : ""}`}>
              <div className="w-9 h-9 rounded-full text-white text-xs font-semibold flex items-center justify-center shrink-0" style={{ backgroundColor: avatarColor(t.from) }}>
                {t.from.split(" ")[0][0]}
              </div>
              <div className="min-w-0 flex-1">
                <div className="flex items-baseline justify-between gap-2">
                  <p className={`text-sm truncate ${t.unread ? "font-semibold" : "font-medium text-gray-600"}`}>{t.from}</p>
                  <span className="text-xs text-gray-400 shrink-0">{t.date}</span>
                </div>
                <p className={`text-sm truncate ${t.unread ? "font-medium" : "text-gray-500"}`}>{t.subject}</p>
                <p className="text-xs text-gray-400 truncate">{t.preview}</p>
              </div>
              {t.unread && <span className="w-2 h-2 rounded-full bg-[#2E52A4] mt-1.5 shrink-0" />}
            </button>
          ))}
        </div>
      </div>

      {/* Thread */}
      <div className={`${open ? "flex" : "hidden md:flex"} flex-col flex-1 min-w-0`}>
        {open ? <ThreadView thread={open} onBack={() => setOpenId(null)} /> : (
          <div className="flex-1 flex flex-col items-center justify-center text-center text-gray-400 p-8">
            <Inbox size={40} className="mb-3 text-gray-300" />
            <p className="font-medium text-gray-500">Select a conversation</p>
            <p className="text-sm">Your email history with the BrandInk team lives here.</p>
          </div>
        )}
      </div>
    </motion.div>
  );
}
