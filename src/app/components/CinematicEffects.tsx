import { motion, animate } from "motion/react";
import { useRef, useState } from "react";

export const Grain = () => {
  return (
    <div className="fixed inset-0 z-[9999] pointer-events-none opacity-[0.03] contrast-150 brightness-100">
      <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
        <filter id="noiseFilter">
          <feTurbulence 
            type="fractalNoise" 
            baseFrequency="0.65" 
            numOctaves="3" 
            stitchTiles="stitch" 
          />
        </filter>
        <rect width="100%" height="100%" filter="url(#noiseFilter)" />
      </svg>
    </div>
  );
};

export const RevealImage = ({ children }: { children: React.ReactNode }) => {
  return (
    <motion.div
      initial={{ clipPath: "inset(100% 0% 0% 0%)" }}
      whileInView={{ clipPath: "inset(0% 0% 0% 0%)" }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </motion.div>
  );
};

export const Magnetic = ({ children }: { children: React.ReactNode }) => {
  const ref = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouse = (e: React.MouseEvent) => {
    const { clientX, clientY } = e;
    if (ref.current) {
      const { height, width, left, top } = ref.current.getBoundingClientRect();
      const middleX = clientX - (left + width / 2);
      const middleY = clientY - (top + height / 2);
      setPosition({ x: middleX * 0.3, y: middleY * 0.3 });
    }
  };

  const reset = () => {
    setPosition({ x: 0, y: 0 });
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouse}
      onMouseLeave={reset}
      animate={{ x: position.x, y: position.y }}
      transition={{ type: "spring", stiffness: 150, damping: 15, mass: 0.1 }}
    >
      {children}
    </motion.div>
  );
};

export const SectionLabel = ({ children }: { children: React.ReactNode }) => (
  <motion.div
    initial={{ opacity: 0, y: 10 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5 }}
    className="flex items-center gap-3 mb-5"
  >
    <span className="w-1.5 h-1.5 rounded-full bg-[#2E52A4] shrink-0" />
    <span className="font-['JetBrains_Mono',monospace] text-[12px] tracking-[0.25em] uppercase text-gray-400">{children}</span>
  </motion.div>
);

export const CountUp = ({
  to,
  duration = 1.6,
  prefix = "",
  suffix = "",
  decimals = 0,
}: {
  to: number;
  duration?: number;
  prefix?: string;
  suffix?: string;
  decimals?: number;
}) => {
  const started = useRef(false);
  const [display, setDisplay] = useState((0).toFixed(decimals));

  const handleEnter = () => {
    if (started.current) return;
    started.current = true;
    animate(0, to, {
      duration,
      ease: [0.16, 1, 0.3, 1],
      onUpdate: (v) => setDisplay(v.toFixed(decimals)),
    });
  };

  return (
    <motion.span
      viewport={{ once: true, margin: "-80px" }}
      onViewportEnter={handleEnter}
    >
      {prefix}
      {display}
      {suffix}
    </motion.span>
  );
};

export const Marquee = ({ items, className = "" }: { items: string[]; className?: string }) => {
  const loop = [...items, ...items];
  return (
    <div className={`relative w-full overflow-hidden ${className}`}>
      <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-[#fbfbfb] to-transparent z-10 pointer-events-none" />
      <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-[#fbfbfb] to-transparent z-10 pointer-events-none" />
      <motion.div
        className="flex items-center gap-6 w-max"
        animate={{ x: ["0%", "-50%"] }}
        transition={{ duration: 28, repeat: Infinity, ease: "linear" }}
      >
        {loop.map((item, i) => (
          <div key={i} className="flex items-center gap-6 shrink-0">
            <span className="font-['JetBrains_Mono',monospace] text-[15px] tracking-[0.15em] uppercase text-gray-400 whitespace-nowrap">
              {item}
            </span>
            <span className="w-1.5 h-1.5 rounded-full bg-[#D7E84C] shrink-0" />
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export const BackgroundBlobs = () => {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none -z-10">
      <motion.div 
        animate={{
          x: [0, 100, 0],
          y: [0, 50, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-purple-200/20 blur-[120px] rounded-full"
      />
      <motion.div 
        animate={{
          x: [0, -80, 0],
          y: [0, 100, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        className="absolute bottom-[-10%] right-[-10%] w-[60%] h-[60%] bg-orange-100/30 blur-[150px] rounded-full"
      />
    </div>
  );
};
