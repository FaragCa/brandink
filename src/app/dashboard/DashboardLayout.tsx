import { useState } from "react";
import { Link, NavLink, Outlet, useLocation } from "react-router";
import { Search, Bell, Menu, X, LogOut, ArrowUpRight, LifeBuoy, Settings } from "lucide-react";
import { BrandLogo } from "../components/BrandLogo";
import { nav, settingsItem, navBySlug } from "./nav";
import { client } from "./data";

export function DashboardLayout() {
  const location = useLocation();
  const [mobileOpen, setMobileOpen] = useState(false);

  const activeSlug = location.pathname.split("/")[2] || "dashboard";
  const activeLabel = navBySlug[activeSlug]?.label || "Dashboard";

  const initials = client.name.split(" ").map((n) => n[0]).join("");

  const SidebarContent = () => (
    <>
      <div className="px-5 py-5 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <BrandLogo className="h-[38px] w-auto" />
        </Link>
        <button onClick={() => setMobileOpen(false)} className="lg:hidden text-gray-400 hover:text-black">
          <X size={20} />
        </button>
      </div>

      <nav className="flex-1 overflow-y-auto px-3 pb-4">
        <ul className="flex flex-col gap-1">
          {nav.map((item) => {
            const Icon = item.icon;
            return (
              <li key={item.slug}>
                <NavLink
                  to={`/dashboard${item.slug === "dashboard" ? "" : "/" + item.slug}`}
                  end={item.slug === "dashboard"}
                  onClick={() => setMobileOpen(false)}
                  className={({ isActive }) =>
                    `flex items-center gap-3 px-3 py-2.5 rounded-xl text-[14.5px] font-medium transition-colors ${
                      isActive ? "bg-[#2E52A4] text-white" : "text-gray-500 hover:bg-gray-100 hover:text-black"
                    }`
                  }
                >
                  <Icon size={18} className="shrink-0" />
                  {item.label}
                </NavLink>
              </li>
            );
          })}
        </ul>
      </nav>

      <div className="px-3 pb-4 mt-auto flex flex-col gap-1 border-t border-gray-100 pt-3">
        <NavLink
          to={`/dashboard/${settingsItem.slug}`}
          onClick={() => setMobileOpen(false)}
          className={({ isActive }) =>
            `flex items-center gap-3 px-3 py-2.5 rounded-xl text-[14.5px] font-medium transition-colors ${
              isActive ? "bg-[#2E52A4] text-white" : "text-gray-500 hover:bg-gray-100 hover:text-black"
            }`
          }
        >
          <Settings size={18} /> Settings
        </NavLink>
        <a href="mailto:hello@brandink.agency" className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-[14.5px] font-medium text-gray-500 hover:bg-gray-100 hover:text-black transition-colors">
          <LifeBuoy size={18} /> Support
        </a>
        <Link to="/login" className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-[14.5px] font-medium text-gray-500 hover:bg-gray-100 hover:text-black transition-colors">
          <LogOut size={18} /> Sign out
        </Link>
      </div>
    </>
  );

  return (
    <div className="min-h-screen bg-[#f4f5f7] font-['Inter',sans-serif] text-[#1b1d1e] flex">
      {/* Desktop sidebar */}
      <aside className="hidden lg:flex fixed inset-y-0 left-0 w-[260px] bg-white border-r border-gray-100 flex-col z-30">
        <SidebarContent />
      </aside>

      {/* Mobile sidebar */}
      {mobileOpen && (
        <>
          <div className="lg:hidden fixed inset-0 bg-black/40 z-40" onClick={() => setMobileOpen(false)} />
          <aside className="lg:hidden fixed inset-y-0 left-0 w-[280px] bg-white flex flex-col z-50">
            <SidebarContent />
          </aside>
        </>
      )}

      {/* Main */}
      <div className="flex-1 lg:ml-[260px] flex flex-col min-h-screen">
        {/* Topbar */}
        <header className="sticky top-0 z-20 bg-[#f4f5f7]/80 backdrop-blur-md border-b border-gray-200/70">
          <div className="flex items-center justify-between gap-4 px-5 md:px-8 h-[68px]">
            <div className="flex items-center gap-3">
              <button onClick={() => setMobileOpen(true)} className="lg:hidden text-gray-500">
                <Menu size={22} />
              </button>
              <h1 className="text-[20px] font-semibold">{activeLabel}</h1>
            </div>

            <div className="flex items-center gap-2 md:gap-3">
              <div className="hidden md:flex items-center gap-2 bg-white border border-gray-200 rounded-full px-4 h-10 w-[240px]">
                <Search size={16} className="text-gray-400" />
                <input placeholder="Search…" className="bg-transparent text-sm outline-none w-full placeholder:text-gray-400" />
              </div>
              <button className="w-10 h-10 rounded-full bg-white border border-gray-200 flex items-center justify-center text-gray-500 hover:text-black relative">
                <Bell size={18} />
                <span className="absolute top-2 right-2.5 w-2 h-2 rounded-full bg-[#2E52A4]" />
              </button>
              <div className="flex items-center gap-2.5 bg-white border border-gray-200 rounded-full pl-1 pr-3 h-10">
                <div className="w-8 h-8 rounded-full bg-[#2E52A4] text-white text-xs font-semibold flex items-center justify-center">{initials}</div>
                <span className="hidden sm:block text-sm font-medium">{client.name.split(" ")[0]}</span>
              </div>
            </div>
          </div>
        </header>

        <main className="flex-1 px-5 md:px-8 py-8">
          <Outlet />
        </main>

        <footer className="px-8 py-5 border-t border-gray-200/70 flex flex-col sm:flex-row items-center justify-between gap-2 text-[13px] text-gray-400">
          <span>© 2026 BrandInk Agency — Client Portal</span>
          <Link to="/" className="inline-flex items-center gap-1 hover:text-black">Back to website <ArrowUpRight size={14} /></Link>
        </footer>
      </div>
    </div>
  );
}
