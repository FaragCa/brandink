import { Link, Outlet, useLocation } from "react-router";
import { useEffect, useState } from "react";
import { ArrowUpRight, Twitter, Linkedin, Instagram, Menu, X } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { Grain, BackgroundBlobs, Magnetic } from "./CinematicEffects";
import { BrandLogo } from "./BrandLogo";

const CustomCursor = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    const handleMouseOver = (e: MouseEvent) => {
      if ((e.target as HTMLElement).closest('a, button')) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseover', handleMouseOver);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseover', handleMouseOver);
    };
  }, []);

  return (
    <motion.div
      className="fixed top-0 left-0 w-8 h-8 rounded-full border border-black pointer-events-none z-[10000] hidden md:block mix-blend-difference"
      initial={{ backgroundColor: "rgba(255, 255, 255, 1)" }}
      animate={{
        x: mousePos.x - 16,
        y: mousePos.y - 16,
        scale: isHovering ? 2 : 1,
        backgroundColor: "rgba(255, 255, 255, 1)"
      }}
      transition={{
        x: { duration: 0 },
        y: { duration: 0 },
        scale: { type: "spring", damping: 20, stiffness: 250, mass: 0.5 },
        backgroundColor: { duration: 0.2 }
      }}
    />
  );
};

const Preloader = () => {
  const [visible, setVisible] = useState(() => {
    if (typeof window === "undefined") return false;
    return !sessionStorage.getItem("brandink-visited");
  });

  useEffect(() => {
    if (!visible) return;
    sessionStorage.setItem("brandink-visited", "1");
    const timer = setTimeout(() => setVisible(false), 1900);
    return () => clearTimeout(timer);
  }, [visible]);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="fixed inset-0 z-[10002] bg-[#fbfbfb] flex flex-col items-center justify-center cursor-auto"
        >
          <motion.div
            initial={{ scale: 0.85, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            <BrandLogo className="h-[64px] w-auto" />
          </motion.div>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="font-['JetBrains_Mono',monospace] text-[12px] tracking-[0.25em] uppercase text-gray-400 mt-6"
          >
            Building bold brands
          </motion.p>
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ delay: 0.5, duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
            className="w-[120px] h-[2px] bg-[#2E52A4] origin-left mt-6 rounded-full"
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export function Layout() {
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
    setMenuOpen(false);
  }, [location.pathname]);

  const isActive = (path: string) =>
    location.pathname === path || (path !== '/' && location.pathname.startsWith(path));

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About us", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Projects", path: "/projects" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <div className="min-h-screen flex flex-col font-['Inter',sans-serif] bg-[#fbfbfb] cursor-none">
      <Preloader />
      <Grain />
      <BackgroundBlobs />
      <CustomCursor />
      <header className="fixed top-0 left-0 right-0 z-50 flex justify-center pt-[10px] px-[16px] sm:px-[24px] lg:px-[84px] w-full">
        <div className="backdrop-blur-md bg-white/30 border border-white/20 w-full max-w-[1272px] rounded-[28px] lg:rounded-[999px] shadow-sm">
          <div className="flex items-center justify-between px-[15px] py-[9px] w-full">
            <Link to="/" className="flex items-center shrink-0">
              <BrandLogo className="h-[52px] w-auto" />
            </Link>

            <nav className="hidden lg:flex items-center p-px bg-[rgba(27,29,30,0.05)] rounded-[999px] border border-[rgba(27,29,30,0.05)]">
              <div className="flex gap-[6px] px-[10px] py-[4px]">
                {navLinks.map((link) => (
                  <Link
                    key={link.path}
                    to={link.path}
                    className={`px-[11px] py-[8px] rounded-full text-[15px] font-medium transition-colors ${
                      isActive(link.path)
                        ? "bg-white text-black shadow-sm"
                        : "text-[rgba(27,29,30,0.6)] hover:text-black"
                    }`}
                  >
                    {link.name}
                  </Link>
                ))}
              </div>
            </nav>

            <div className="flex items-center gap-2">
              <Link
                to="/login"
                className="hidden sm:flex items-center h-[48px] px-[18px] rounded-[25px] text-[14.5px] font-medium text-[#1b1d1e] border border-[rgba(27,29,30,0.12)] hover:bg-[rgba(27,29,30,0.05)] transition-colors"
              >
                Log in
              </Link>
              <Magnetic>
                <Link
                  to="/contact"
                  className="bg-[#1b1d1e] text-white flex items-center gap-[10px] h-[48px] pl-[18px] pr-[9px] sm:pl-[21px] rounded-[25px] hover:bg-black transition-colors"
                >
                  <span className="text-[14.5px] whitespace-nowrap">Let's Collaborate</span>
                  <div className="bg-white text-black w-[32px] h-[32px] rounded-full flex items-center justify-center">
                    <ArrowUpRight size={16} strokeWidth={2.5} />
                  </div>
                </Link>
              </Magnetic>

              <button
                onClick={() => setMenuOpen((o) => !o)}
                aria-label="Toggle navigation menu"
                aria-expanded={menuOpen}
                className="lg:hidden w-[48px] h-[48px] rounded-full bg-[rgba(27,29,30,0.05)] border border-[rgba(27,29,30,0.08)] flex items-center justify-center text-[#1b1d1e] hover:bg-[rgba(27,29,30,0.1)] transition-colors shrink-0"
              >
                {menuOpen ? <X size={20} /> : <Menu size={20} />}
              </button>
            </div>
          </div>

          <AnimatePresence>
            {menuOpen && (
              <motion.nav
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.25 }}
                className="lg:hidden overflow-hidden px-[15px]"
              >
                <div className="flex flex-col gap-1 pt-1 pb-3">
                  {navLinks.map((link) => (
                    <Link
                      key={link.path}
                      to={link.path}
                      className={`px-4 py-3 rounded-2xl text-[16px] font-medium transition-colors ${
                        isActive(link.path)
                          ? "bg-white text-black shadow-sm"
                          : "text-[rgba(27,29,30,0.7)] hover:bg-white/60"
                      }`}
                    >
                      {link.name}
                    </Link>
                  ))}
                  <Link
                    to="/login"
                    className="px-4 py-3 rounded-2xl text-[16px] font-medium text-[rgba(27,29,30,0.7)] hover:bg-white/60 transition-colors border-t border-gray-100 mt-1 pt-4"
                  >
                    Log in
                  </Link>
                </div>
              </motion.nav>
            )}
          </AnimatePresence>
        </div>
      </header>

      <main className="flex-1 pt-[100px]">
        <AnimatePresence mode="wait">
          <motion.div
            key={location.pathname}
            className="w-full"
          >
            <Outlet />
          </motion.div>
        </AnimatePresence>
      </main>

      <footer className="w-full bg-white mt-20 pt-[80px] pb-[40px] px-[20px] md:px-[84px] border-t border-gray-100">
        <div className="max-w-[1272px] mx-auto flex flex-col md:flex-row justify-between items-start md:items-center gap-10">
          <div className="flex flex-col gap-4 max-w-sm">
            <BrandLogo className="h-[120px] w-auto self-start" tagline />
            <p className="text-[14px] text-gray-500 leading-relaxed">
              Modern, high-performing websites that help local businesses build credibility and grow online.
            </p>
            <div className="flex gap-4 mt-4">
              <a href="#" className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center hover:bg-gray-100 transition-colors"><Twitter size={18} /></a>
              <a href="#" className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center hover:bg-gray-100 transition-colors"><Linkedin size={18} /></a>
              <a href="#" className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center hover:bg-gray-100 transition-colors"><Instagram size={18} /></a>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-10 md:gap-16">
            <div className="flex flex-col gap-4">
              <h4 className="font-medium text-black">Company</h4>
              <Link to="/about" className="text-[14px] text-gray-500 hover:text-black">About Us</Link>
              <Link to="/services" className="text-[14px] text-gray-500 hover:text-black">Services</Link>
              <Link to="/projects" className="text-[14px] text-gray-500 hover:text-black">Work</Link>
            </div>
            <div className="flex flex-col gap-4">
              <h4 className="font-medium text-black">Services</h4>
              <Link to="/services" className="text-[14px] text-gray-500 hover:text-black">Website Design</Link>
              <Link to="/services" className="text-[14px] text-gray-500 hover:text-black">Online Payments</Link>
              <Link to="/services" className="text-[14px] text-gray-500 hover:text-black">AI Chat Assistant</Link>
            </div>
            <div className="flex flex-col gap-4">
              <h4 className="font-medium text-black">Support</h4>
              <Link to="/contact" className="text-[14px] text-gray-500 hover:text-black">Contact</Link>
              <a href="#" className="text-[14px] text-gray-500 hover:text-black">FAQ</a>
            </div>
          </div>
        </div>

        <div className="max-w-[1272px] mx-auto mt-20 overflow-hidden">
          <p className="text-[13vw] md:text-[9vw] leading-[0.85] font-medium tracking-[-0.04em] text-[#1b1d1e]/[0.04] whitespace-nowrap select-none">
            Brands that stick like ink
          </p>
        </div>

        <div className="max-w-[1272px] mx-auto mt-8 pt-8 border-t border-gray-100 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-[14px] text-gray-400">© 2026 BrandInk Agency. All rights reserved.</p>
          <p className="font-['JetBrains_Mono',monospace] text-[12px] tracking-[0.15em] uppercase text-gray-400">Based in Collingwood, Australia</p>
        </div>
      </footer>
    </div>
  );
}
