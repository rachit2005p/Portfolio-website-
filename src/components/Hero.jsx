import { useState, useRef, useEffect } from "react";
import { motion, useInView } from "framer-motion";
import { ArrowRight, ChevronDown, Github, Linkedin, Twitter, Mail, X } from "lucide-react";
import { SiReact, SiNodedotjs, SiExpress, SiMongodb, SiGit, SiTypescript, SiTailwindcss, SiDocker, SiPython } from "react-icons/si";

const technologies = [
  { name: "React", icon: SiReact, color: "#61DAFB", category: "Frontend", experience: "3+ years", projects: "12+ projects", description: "Building complex UIs with hooks, context, and state management." },
  { name: "Node.js", icon: SiNodedotjs, color: "#339933", category: "Backend", experience: "3+ years", projects: "10+ projects", description: "REST APIs, microservices, and serverless functions." },
  { name: "Express", icon: SiExpress, color: "#FFFFFF", category: "Backend", experience: "3+ years", projects: "8+ projects", description: "Fast, unopinionated web framework for Node.js." },
  { name: "MongoDB", icon: SiMongodb, color: "#47A248", category: "Database", experience: "2+ years", projects: "8+ projects", description: "NoSQL database design, aggregation pipelines, and Atlas." },
  { name: "TypeScript", icon: SiTypescript, color: "#3178C6", category: "Language", experience: "3+ years", projects: "14+ projects", description: "Type-safe JavaScript for scalable applications." },
  { name: "Tailwind", icon: SiTailwindcss, color: "#06B6D4", category: "Frontend", experience: "3+ years", projects: "15+ projects", description: "Utility-first CSS framework for rapid UI development." },
  { name: "Docker", icon: SiDocker, color: "#2496ED", category: "DevOps", experience: "1+ years", projects: "5+ projects", description: "Containerized deployments and multi-stage builds." },
  { name: "Python", icon: SiPython, color: "#3776AB", category: "Language", experience: "2+ years", projects: "6+ projects", description: "Data processing, automation, and backend services." },
];

const typingPhrases = [
  "Full Stack Developer",
  "MERN Developer",
  "Problem Solver",
  "Open Source Enthusiast",
];

export default function Hero() {
  const [selectedTech, setSelectedTech] = useState(null);
  const [hoveredTech, setHoveredTech] = useState(null);
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true });

  useEffect(() => {
    const timeout = setTimeout(
      () => {
        if (!isDeleting && charIndex < typingPhrases[phraseIndex].length) {
          setCharIndex((prev) => prev + 1);
        } else if (!isDeleting && charIndex === typingPhrases[phraseIndex].length) {
          setTimeout(() => setIsDeleting(true), 1500);
        } else if (isDeleting && charIndex > 0) {
          setCharIndex((prev) => prev - 1);
        } else if (isDeleting && charIndex === 0) {
          setIsDeleting(false);
          setPhraseIndex((prev) => (prev + 1) % typingPhrases.length);
        }
      },
      isDeleting ? 40 : 80
    );
    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, phraseIndex]);

  const radius = 140;
  const techCount = technologies.length;
  const centerX = 180;
  const centerY = 180;
  const iconSize = 44;

  const getTechPosition = (index) => {
    const angle = (index / techCount) * Math.PI * 2 - Math.PI / 2;
    return {
      x: centerX + radius * Math.cos(angle) - iconSize / 2,
      y: centerY + radius * Math.sin(angle) - iconSize / 2,
    };
  };

  return (
    <section id="home" ref={sectionRef} className="relative min-h-screen flex items-center pt-32 pb-20 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] rounded-full blur-[120px]" style={{ backgroundColor: "rgba(46,139,87,0.05)" }} />
        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] rounded-full blur-[100px]" style={{ backgroundColor: "rgba(87,199,133,0.05)" }} />
        <div className="absolute top-1/3 right-1/3 w-[300px] h-[300px] rounded-full blur-[80px]" style={{ backgroundColor: "rgba(46,139,87,0.03)" }} />
      </div>

      <div className="container-main relative z-10 w-full">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-badge text-sm font-medium w-fit section-label"
            >
              <span className="w-2 h-2 rounded-full bg-success animate-pulse" />
              Full Stack Developer
            </motion.div>

            <div className="mt-8">
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="font-heading text-hero leading-[1.1]"
              >
                <span style={{ color: "var(--foreground)" }}>Hi 👋<br />I&apos;m </span>
                <span style={{ color: "var(--foreground)" }}>Rachit </span>
                <span className="text-gradient">Pandey.</span>
              </motion.h1>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.35 }}
                className="mt-4 h-10"
              >
                <span className="text-xl md:text-2xl font-medium" style={{ color: "var(--muted)" }}>
                  {typingPhrases[phraseIndex].substring(0, charIndex)}
                  <motion.span
                    animate={{ opacity: [1, 0] }}
                    transition={{ duration: 0.5, repeat: Infinity, repeatType: "reverse" }}
                    className="inline-block w-[3px] h-6 bg-primary ml-1 align-middle"
                  />
                </span>
              </motion.div>
            </div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="text-paragraph mt-8 max-w-lg"
              style={{ color: "var(--muted)" }}
            >
              I craft exceptional digital experiences with clean code and thoughtful design. 
              Specializing in full-stack development with modern technologies.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="flex flex-wrap items-center gap-4 mt-8"
            >
              <a href="#projects" className="btn-primary group">
                View Projects
                <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
              </a>
              <a href="#contact" className="btn-outline">
                Contact Me
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="flex items-center gap-4 mt-8"
            >
              {[
                { icon: Github, href: "https://github.com/rachit2005p", label: "GitHub" },
                { icon: Linkedin, href: "https://www.linkedin.com/in/rachit2005/", label: "LinkedIn" },
                { icon: Twitter, href: "https://twitter.com", label: "Twitter" },
                { icon: Mail, href: "mailto:rachitpandey062005@gmail.com", label: "Email" },
              ].map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-button flex items-center justify-center transition-all duration-300 hover:-translate-y-1 hover:shadow-premium-sm"
                  style={{ backgroundColor: "var(--accent-light)", color: "var(--muted)" }}
                  onMouseEnter={(e) => { e.currentTarget.style.color = "#2E8B57"; e.currentTarget.style.backgroundColor = "rgba(46,139,87,0.1)"; }}
                  onMouseLeave={(e) => { e.currentTarget.style.color = "var(--muted)"; e.currentTarget.style.backgroundColor = "var(--accent-light)"; }}
                >
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.7, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="flex items-center justify-center mt-12 lg:mt-0"
          >
            <div className="relative" style={{ width: 360, height: 360 }}>
              <div className="w-[360px] h-[360px] rounded-full shadow-premium-lg flex items-center justify-center overflow-hidden"
                style={{ backgroundColor: "var(--card)" }}>
                <div className="absolute inset-2 rounded-full" style={{ background: "linear-gradient(135deg, rgba(46,139,87,0.05), rgba(87,199,133,0.05))" }} />
                <div className="relative w-[200px] h-[200px] rounded-full bg-gradient-to-br from-primary to-accent p-1">
                  <div className="w-full h-full rounded-full flex items-center justify-center overflow-hidden"
                    style={{ backgroundColor: "var(--card)" }}>
                    <span className="font-heading text-4xl font-bold text-gradient">RP</span>
                  </div>
                </div>
              </div>

              <div className="absolute top-0 left-0 w-full h-full">
                {technologies.map((tech, index) => {
                  const pos = getTechPosition(index);
                  const TechIcon = tech.icon;
                  return (
                    <motion.button
                      key={tech.name}
                      className="absolute"
                      style={{ width: iconSize, height: iconSize, left: pos.x, top: pos.y }}
                      whileHover={{ scale: 1.25 }}
                      onHoverStart={() => setHoveredTech(tech.name)}
                      onHoverEnd={() => setHoveredTech(null)}
                      onClick={() => setSelectedTech(tech)}
                    >
                      <motion.div
                        animate={
                          !hoveredTech || hoveredTech === tech.name
                            ? { rotate: 360 }
                            : { rotate: 0 }
                        }
                        transition={{
                          duration: 20,
                          repeat: Infinity,
                          ease: "linear",
                        }}
                        className="w-full h-full rounded-full shadow-premium-sm flex items-center justify-center border transition-all duration-300"
                        style={{ backgroundColor: "var(--card)", borderColor: "var(--border)" }}
                        onMouseEnter={(e) => { e.currentTarget.style.borderColor = "rgba(46,139,87,0.5)"; e.currentTarget.style.boxShadow = "0 15px 45px rgba(0,0,0,.08)"; }}
                        onMouseLeave={(e) => { e.currentTarget.style.borderColor = "var(--border)"; e.currentTarget.style.boxShadow = "0 6px 20px rgba(0,0,0,.06)"; }}
                      >
                        <TechIcon className="w-5 h-5" style={{ color: tech.color }} />
                      </motion.div>
                    </motion.button>
                  );
                })}
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="flex flex-col items-center gap-1"
          style={{ color: "var(--muted)" }}
        >
          <span className="text-xs font-medium">Scroll</span>
          <ChevronDown className="w-4 h-4" />
        </motion.div>
      </motion.div>

      {selectedTech && (
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ type: "spring", damping: 25, stiffness: 200 }}
          className="fixed right-8 top-1/2 -translate-y-1/2 w-80 z-40"
        >
          <div className="rounded-card shadow-premium-lg border p-6"
            style={{ backgroundColor: "var(--card)", borderColor: "var(--border)" }}>
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full flex items-center justify-center"
                  style={{ backgroundColor: "var(--accent-light)" }}>
                  <selectedTech.icon className="w-5 h-5" style={{ color: selectedTech.color }} />
                </div>
                <h3 className="font-heading font-semibold text-lg">{selectedTech.name}</h3>
              </div>
              <button
                onClick={() => setSelectedTech(null)}
                className="w-8 h-8 rounded-full flex items-center justify-center transition-colors"
                style={{ backgroundColor: "var(--accent-light)", color: "var(--muted)" }}
              >
                <X className="w-4 h-4" />
              </button>
            </div>
            <div className="space-y-3">
              <div>
                <span className="text-xs uppercase tracking-wider" style={{ color: "var(--muted)" }}>Category</span>
                <p className="text-sm font-medium">{selectedTech.category}</p>
              </div>
              <div>
                <span className="text-xs uppercase tracking-wider" style={{ color: "var(--muted)" }}>Experience</span>
                <p className="text-sm font-medium">{selectedTech.experience}</p>
              </div>
              <div>
                <span className="text-xs uppercase tracking-wider" style={{ color: "var(--muted)" }}>Projects</span>
                <p className="text-sm font-medium">{selectedTech.projects}</p>
              </div>
              <div>
                <span className="text-xs uppercase tracking-wider" style={{ color: "var(--muted)" }}>Description</span>
                <p className="text-sm" style={{ color: "var(--muted)" }}>{selectedTech.description}</p>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </section>
  );
}
