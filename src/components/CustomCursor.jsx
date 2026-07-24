import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function CustomCursor() {
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  const [isHovering, setIsHovering] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  const springX = useSpring(cursorX, { stiffness: 200, damping: 30 });
  const springY = useSpring(cursorY, { stiffness: 200, damping: 30 });

  useEffect(() => {
    const moveCursor = (e) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
      if (!isVisible) setIsVisible(true);
    };

    const handleHoverStart = () => setIsHovering(true);
    const handleHoverEnd = () => setIsHovering(false);

    window.addEventListener("mousemove", moveCursor);

    document.querySelectorAll("a, button, input, textarea, [data-cursor-hover]").forEach((el) => {
      el.addEventListener("mouseenter", handleHoverStart);
      el.addEventListener("mouseleave", handleHoverEnd);
    });

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      document.querySelectorAll("a, button, input, textarea, [data-cursor-hover]").forEach((el) => {
        el.removeEventListener("mouseenter", handleHoverStart);
        el.removeEventListener("mouseleave", handleHoverEnd);
      });
    };
  }, [cursorX, cursorY, isVisible]);

  return (
    <motion.div
      className="fixed top-0 left-0 pointer-events-none z-[9998] hidden md:block"
      style={{ x: springX, y: springY }}
    >
      <motion.div
        animate={{
          scale: isHovering ? 1.5 : 1,
          opacity: isVisible ? 1 : 0,
        }}
        transition={{ duration: 0.2 }}
        className="-translate-x-1/2 -translate-y-1/2 w-6 h-6 rounded-full border backdrop-blur-sm"
        style={{ 
          backgroundColor: "rgba(46,139,87,0.2)", 
          borderColor: "rgba(46,139,87,0.4)" 
        }}
      />
    </motion.div>
  );
}
