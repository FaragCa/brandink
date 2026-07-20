import { useState } from "react";
import { motion } from "motion/react";
import {
  Folder, FileText, Image as ImageIcon, FileType2, Figma, Type, Archive,
  Search, LayoutGrid, List, Upload, FolderPlus, ChevronRight, MoreVertical, Download,
} from "lucide-react";
import { driveFolders, driveFilesByFolder, type DriveFile } from "./data";

const kindMeta: Record<DriveFile["kind"], { icon: React.ComponentType<{ size?: number; className?: string }>; color: string }> = {
  pdf: { icon: FileText, color: "#DC2626" },
  image: { icon: ImageIcon, color: "#16A34A" },
  vector: { icon: FileType2, color: "#D97706" },
  figma: { icon: Figma, color: "#7C3AED" },
  doc: { icon: FileText, color: "#2E52A4" },
  font: { icon: Type, color: "#0EA5E9" },
  zip: { icon: Archive, color: "#6B7280" },
};

export function Files() {
  const [folder, setFolder] = useState<string | null>(null);
  const [view, setView] = useState<"grid" | "list">("grid");

  const activeFolder = folder ? driveFolders.find((f) => f.id === folder) : null;
  const files = folder ? driveFilesByFolder[folder] ?? [] : [];

  return (
    <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }} className="max-w-[1100px]">
      {/* Toolbar */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-6">
        <div className="flex items-center gap-2 text-[15px]">
          <button onClick={() => setFolder(null)} className={`font-medium ${folder ? "text-[#2E52A4] hover:underline" : ""}`}>My Drive</button>
          {activeFolder && (<><ChevronRight size={16} className="text-gray-300" /><span className="font-medium">{activeFolder.name}</span></>)}
        </div>
        <div className="flex items-center gap-2">
          <div className="hidden md:flex items-center gap-2 bg-white border border-gray-200 rounded-full px-4 h-10 w-[220px]">
            <Search size={15} className="text-gray-400" />
            <input placeholder="Search in Drive" className="bg-transparent text-sm outline-none w-full placeholder:text-gray-400" />
          </div>
          <div className="flex items-center bg-white border border-gray-200 rounded-full p-1">
            <button onClick={() => setView("grid")} className={`w-8 h-8 rounded-full flex items-center justify-center ${view === "grid" ? "bg-[#2E52A4] text-white" : "text-gray-400"}`}><LayoutGrid size={15} /></button>
            <button onClick={() => setView("list")} className={`w-8 h-8 rounded-full flex items-center justify-center ${view === "list" ? "bg-[#2E52A4] text-white" : "text-gray-400"}`}><List size={15} /></button>
          </div>
          <button className="w-10 h-10 rounded-full bg-white border border-gray-200 flex items-center justify-center text-gray-500 hover:text-black" title="New folder"><FolderPlus size={17} /></button>
          <button className="inline-flex items-center gap-2 bg-[#2E52A4] text-white rounded-full px-4 h-10 text-sm font-medium hover:bg-[#24417F] transition-colors"><Upload size={16} /> Upload</button>
        </div>
      </div>

      {/* Root: folders + storage */}
      {!folder && (
        <>
          <p className="text-xs font-semibold text-gray-400 uppercase tracking-wide mb-3">Folders</p>
          <div className={view === "grid" ? "grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 mb-8" : "flex flex-col gap-1 mb-8"}>
            {driveFolders.map((f) => (
              view === "grid" ? (
                <button key={f.id} onClick={() => setFolder(f.id)} className="group bg-white border border-gray-100 rounded-2xl p-4 flex items-center gap-3 hover:border-[#2E52A4]/40 hover:shadow-sm transition-all text-left">
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0" style={{ backgroundColor: f.color + "1a", color: f.color }}><Folder size={18} /></div>
                  <div className="min-w-0">
                    <p className="font-medium truncate">{f.name}</p>
                    <p className="text-xs text-gray-400">{f.count} files</p>
                  </div>
                </button>
              ) : (
                <button key={f.id} onClick={() => setFolder(f.id)} className="group bg-white border border-gray-100 rounded-xl px-4 py-3 flex items-center gap-3 hover:bg-gray-50 transition-colors text-left">
                  <Folder size={18} style={{ color: f.color }} />
                  <span className="font-medium flex-1">{f.name}</span>
                  <span className="text-xs text-gray-400">{f.count} files</span>
                </button>
              )
            ))}
          </div>

          <div className="bg-white border border-gray-100 rounded-2xl p-5 max-w-[360px]">
            <div className="flex items-center justify-between mb-2 text-sm">
              <span className="font-medium">Storage</span>
              <span className="text-gray-400">4.2 GB of 15 GB</span>
            </div>
            <div className="h-2 rounded-full bg-gray-100 overflow-hidden"><div className="h-full rounded-full bg-[#2E52A4]" style={{ width: "28%" }} /></div>
          </div>
        </>
      )}

      {/* Inside a folder: files */}
      {folder && (
        view === "grid" ? (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
            {files.map((file) => {
              const Meta = kindMeta[file.kind];
              const Icon = Meta.icon;
              return (
                <div key={file.name} className="group bg-white border border-gray-100 rounded-2xl overflow-hidden hover:border-[#2E52A4]/40 hover:shadow-sm transition-all">
                  <div className="h-24 flex items-center justify-center" style={{ backgroundColor: Meta.color + "12" }}>
                    <Icon size={30} style={{ color: Meta.color }} />
                  </div>
                  <div className="p-3 flex items-center gap-2">
                    <div className="min-w-0 flex-1">
                      <p className="text-sm font-medium truncate">{file.name}</p>
                      <p className="text-xs text-gray-400">{file.size} · {file.modified}</p>
                    </div>
                    <button className="text-gray-300 hover:text-[#2E52A4] opacity-0 group-hover:opacity-100 transition-opacity"><Download size={16} /></button>
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          <div className="bg-white border border-gray-100 rounded-2xl divide-y divide-gray-50">
            <div className="grid grid-cols-12 px-5 py-3 text-xs font-medium text-gray-400 uppercase tracking-wide">
              <span className="col-span-6">Name</span><span className="col-span-3 hidden sm:block">Modified</span><span className="col-span-2 hidden sm:block">Size</span><span className="col-span-1" />
            </div>
            {files.map((file) => {
              const Meta = kindMeta[file.kind];
              const Icon = Meta.icon;
              return (
                <div key={file.name} className="grid grid-cols-12 items-center px-5 py-3 hover:bg-gray-50/60 group">
                  <div className="col-span-6 flex items-center gap-3 min-w-0"><Icon size={18} style={{ color: Meta.color }} className="shrink-0" /><span className="text-sm font-medium truncate">{file.name}</span></div>
                  <span className="col-span-3 text-sm text-gray-400 hidden sm:block">{file.modified}</span>
                  <span className="col-span-2 text-sm text-gray-400 hidden sm:block">{file.size}</span>
                  <div className="col-span-1 flex justify-end gap-1">
                    <button className="text-gray-300 hover:text-[#2E52A4] opacity-0 group-hover:opacity-100 transition-opacity"><Download size={16} /></button>
                    <button className="text-gray-300 hover:text-black"><MoreVertical size={16} /></button>
                  </div>
                </div>
              );
            })}
          </div>
        )
      )}
    </motion.div>
  );
}
