import { motion, AnimatePresence } from "framer-motion";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

const EASE = [0.76, 0, 0.24, 1] as [number, number, number, number];

/**
 * Full-screen curtain wipe that plays on every route change.
 * Layer 1 (accent/purple) sweeps in from the bottom first,
 * Layer 2 (foreground/black) follows slightly behind,
 * then both lift up to reveal the new page.
 */
export default function PageCurtain() {
  const location = useLocation();
  const [playing, setPlaying] = useState(false);
  const [curtainKey, setCurtainKey] = useState(0);

  useEffect(() => {
    setPlaying(true);
    setCurtainKey((k) => k + 1);
    const t = setTimeout(() => setPlaying(false), 1100);
    return () => clearTimeout(t);
  }, [location.pathname]);

  return (
    <AnimatePresence>
      {playing && (
        <div
          key={curtainKey}
          className="fixed inset-0 z-[9999] pointer-events-none overflow-hidden"
        >
          {/* Layer 1 — accent (purple), enters first */}
          <motion.div
            initial={{ y: "100%" }}
            animate={{ y: "0%", transition: { duration: 0.52, ease: EASE } }}
            exit={{ y: "-100%", transition: { duration: 0.52, ease: EASE, delay: 0.12 } }}
            className="absolute inset-0"
            style={{ backgroundColor: "hsl(var(--accent))" }}
          />
          {/* Layer 2 — foreground (black), enters slightly behind */}
          <motion.div
            initial={{ y: "100%" }}
            animate={{ y: "0%", transition: { duration: 0.52, ease: EASE, delay: 0.1 } }}
            exit={{ y: "-100%", transition: { duration: 0.52, ease: EASE } }}
            className="absolute inset-0 bg-foreground"
          />
        </div>
      )}
    </AnimatePresence>
  );
}
