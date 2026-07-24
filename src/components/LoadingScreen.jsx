import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

export default function LoadingScreen() {
  const [progress, setProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => setIsVisible(false), 400);
          return 100;
        }
        return prev + Math.random() * 15 + 5;
      });
    }, 120);
    return () => clearInterval(interval);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center"
          style={{ backgroundColor: "var(--background)" }}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col items-center gap-8"
          >
            <div className="relative">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                className="w-16 h-16 rounded-full border-2"
                style={{ borderColor: "rgba(46,139,87,0.2)", borderTopColor: "#2E8B57" }}
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-2xl font-heading font-bold text-gradient">R</span>
              </div>
            </div>

            <div className="flex flex-col items-center gap-2">
              <p className="font-heading text-xl font-semibold" style={{ color: "var(--foreground)", opacity: 0.8 }}>
                Rachit Pandey
              </p>
              <p className="text-sm" style={{ color: "var(--muted)" }}>Loading experience...</p>
            </div>

            <div className="w-48 h-1 rounded-full overflow-hidden" style={{ backgroundColor: "var(--border)" }}>
              <motion.div
                className="h-full rounded-full"
                style={{ background: "linear-gradient(135deg, #2E8B57, #57C785)" }}
                initial={{ width: 0 }}
                animate={{ width: `${Math.min(progress, 100)}%` }}
                transition={{ duration: 0.3 }}
              />
            </div>

            <p className="text-xs font-mono" style={{ color: "var(--muted)" }}>
              {Math.min(Math.round(progress), 100)}%
            </p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
