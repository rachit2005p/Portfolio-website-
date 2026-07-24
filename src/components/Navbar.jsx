import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "../context/ThemeContext";
import { Moon, Sun, Menu, X, FileText } from "lucide-react";

const navLinks = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#certification", label: "Certificates" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setScrolled(currentScrollY > 50);
      setIsVisible(currentScrollY < lastScrollY || currentScrollY < 100);
      setLastScrollY(currentScrollY);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <>
      <motion.header
        initial={{ y: 0 }}
        animate={{ y: isVisible ? 0 : -120 }}
        transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled ? "glass-nav shadow-premium-sm" : "bg-transparent"
        }`}
      >
        <div className="max-w-container mx-auto px-6 md:px-[5rem]">
          <div className="flex items-center justify-between h-20">
            <a href="#home" className="relative group">
              <span className="font-heading text-2xl font-bold">
                <span className="text-gradient">R</span>
                <span style={{ color: "var(--foreground)" }}>P</span>
              </span>
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-primary to-accent transition-all duration-300 group-hover:w-full" />
            </a>

            <nav className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="relative px-4 py-2 text-sm font-medium transition-colors duration-300 group"
                  style={{ color: "var(--muted)" }}
                  onMouseEnter={(e) => e.target.style.color = "var(--foreground)"}
                  onMouseLeave={(e) => e.target.style.color = "var(--muted)"}
                >
                  {link.label}
                  <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-primary rounded-full transition-all duration-300 group-hover:w-1/2" />
                </a>
              ))}
            </nav>

            <div className="flex items-center gap-3">
              <button
                onClick={toggleTheme}
                className="relative w-10 h-10 rounded-button flex items-center justify-center transition-all duration-300"
                style={{ backgroundColor: "var(--accent-light)", color: "#2E8B57" }}
                onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = "#2E8B57"; e.currentTarget.style.color = "white"; }}
                onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = "var(--accent-light)"; e.currentTarget.style.color = "#2E8B57"; }}
              >
                <Sun className="w-4 h-4 absolute transition-all duration-300"
                  style={{ 
                    transform: theme === "dark" ? "rotate(-90deg) scale(0)" : "rotate(0) scale(1)",
                    opacity: theme === "dark" ? 0 : 1
                  }} 
                />
                <Moon className="w-4 h-4 absolute transition-all duration-300"
                  style={{ 
                    transform: theme === "dark" ? "rotate(0) scale(1)" : "rotate(90deg) scale(0)",
                    opacity: theme === "dark" ? 1 : 0
                  }} 
                />
              </button>

              <a
                href="/resume.pdf" target="_blank" rel="noopener noreferrer"
                className="hidden sm:inline-flex items-center gap-2 px-5 py-2.5 bg-primary text-white rounded-button text-sm font-medium hover:bg-primary-hover transition-all duration-300 hover:shadow-premium-md hover:-translate-y-0.5"
              >
                <FileText className="w-4 h-4" />
                Resume
              </a>

              <button
                onClick={() => setMobileOpen(true)}
                className="lg:hidden w-10 h-10 rounded-button flex items-center justify-center transition-all duration-300"
                style={{ backgroundColor: "var(--accent-light)", color: "#2E8B57" }}
                onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = "#2E8B57"; e.currentTarget.style.color = "white"; }}
                onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = "var(--accent-light)"; e.currentTarget.style.color = "#2E8B57"; }}
              >
                <Menu className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </motion.header>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/40 backdrop-blur-sm lg:hidden"
            onClick={() => setMobileOpen(false)}
          >
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 30, stiffness: 200 }}
              onClick={(e) => e.stopPropagation()}
              className="absolute right-0 top-0 h-full w-[300px] border-l p-8"
              style={{ backgroundColor: "var(--background)", borderColor: "var(--border)" }}
            >
              <button
                onClick={() => setMobileOpen(false)}
                className="absolute top-6 right-6 w-10 h-10 rounded-button flex items-center justify-center transition-all duration-300"
                style={{ backgroundColor: "var(--accent-light)", color: "#2E8B57" }}
              >
                <X className="w-5 h-5" />
              </button>

              <div className="mt-16 flex flex-col gap-2">
                {navLinks.map((link, i) => (
                  <motion.a
                    key={link.href}
                    href={link.href}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05 }}
                    onClick={() => setMobileOpen(false)}
                    className="px-4 py-3 text-lg font-medium rounded-button transition-all duration-300"
                    style={{ color: "var(--muted)" }}
                    onMouseEnter={(e) => { e.target.style.backgroundColor = "var(--accent-light)"; e.target.style.color = "var(--foreground)"; }}
                    onMouseLeave={(e) => { e.target.style.backgroundColor = "transparent"; e.target.style.color = "var(--muted)"; }}
                  >
                    {link.label}
                  </motion.a>
                ))}
                <motion.a
                  href="/resume.pdf" target="_blank" rel="noopener noreferrer"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: navLinks.length * 0.05 }}
                  className="mt-4 flex items-center justify-center gap-2 px-6 py-3 bg-primary text-white rounded-button text-base font-medium hover:bg-primary-hover transition-all"
                >
                  <FileText className="w-4 h-4" />
                  Resume
                </motion.a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
