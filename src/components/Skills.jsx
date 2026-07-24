import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { X, Code2, Server, Database, Cloud, GitBranch, Brain, Terminal, Cpu, Globe, FileCode, Palette, Monitor } from "lucide-react";
import {
  SiReact, SiNodedotjs, SiExpress, SiMongodb, SiTailwindcss,
  SiHtml5, SiMysql, SiGithub,
} from "react-icons/si";

const allTechnologies = [
  { name: "MongoDB", icon: SiMongodb, color: "#47A248", category: "Database", experience: "Advanced", projects: 8, timeline: "2025 - Present", description: "NoSQL database design, aggregation pipelines, and Atlas cloud." },
  { name: "Express", icon: SiExpress, color: "#FFFFFF", category: "Backend", experience: "Advanced", projects: 8, timeline: "2025 - Present", description: "Fast, unopinionated web framework for Node.js APIs." },
  { name: "React", icon: SiReact, color: "#61DAFB", category: "Frontend", experience: "Advanced", projects: 8, timeline: "2025 - Present", description: "Building complex UIs with hooks, context, and state management." },
  { name: "Node.js", icon: SiNodedotjs, color: "#339933", category: "Backend", experience: "Advanced", projects: 8, timeline: "2025 - Present", description: "REST APIs, microservices, and serverless functions." },
  { name: "HTML5", icon: SiHtml5, color: "#E34F26", category: "Frontend", experience: "Advanced", projects: 8, timeline: "2025 - Present", description: "Semantic markup and accessible web structure." },
  { name: "CSS3", icon: Palette, color: "#1572B6", category: "Frontend", experience: "Advanced", projects: 8, timeline: "2025 - Present", description: "Responsive layouts, animations, and modern styling." },
  { name: "Tailwind", icon: SiTailwindcss, color: "#06B6D4", category: "Frontend", experience: "Advanced", projects: 8, timeline: "2025 - Present", description: "Utility-first CSS framework for rapid UI development." },
  { name: "Git", icon: SiGithub, color: "#F05032", category: "DevOps", experience: "Advanced", projects: 8, timeline: "2025 - Present", description: "Version control, branching, and collaboration workflows." },
  { name: "GitHub", icon: SiGithub, color: "#181717", category: "DevOps", experience: "Advanced", projects: 8, timeline: "2025 - Present", description: "Hosting repositories, CI/CD, and open source contributions." },
  { name: "MySQL", icon: SiMysql, color: "#4479A1", category: "Database", experience: "Intermediate", projects: 8, timeline: "2025 - Present", description: "Relational database management and SQL queries." },
  { name: "MongoDB Atlas", icon: SiMongodb, color: "#47A248", category: "Cloud", experience: "Intermediate", projects: 8, timeline: "2025 - Present", description: "Cloud database service for modern applications." },
  { name: "VS Code", icon: Monitor, color: "#007ACC", category: "Tools", experience: "Advanced", projects: 8, timeline: "2025 - Present", description: "Primary code editor with extensions and debugging." },
  { name: "Render", icon: Cloud, color: "#46E3B7", category: "Cloud", experience: "Intermediate", projects: 8, timeline: "2025 - Present", description: "Cloud platform for deploying web apps and APIs." },
  { name: "Antitigravity", icon: Globe, color: "#FF6B35", category: "Tools", experience: "Intermediate", projects: 8, timeline: "2025 - Present", description: "AI-powered development workflow platform." },
  { name: "Cursor", icon: Terminal, color: "#6C47FF", category: "Tools", experience: "Intermediate", projects: 8, timeline: "2025 - Present", description: "AI-powered code editor for faster development." },
  { name: "Codex", icon: Brain, color: "#00BFFF", category: "AI/ML", experience: "Intermediate", projects: 8, timeline: "2025 - Present", description: "AI code generation and assistance tool." },
  { name: "Gamma AI", icon: Cpu, color: "#8B5CF6", category: "AI/ML", experience: "Intermediate", projects: 8, timeline: "2025 - Present", description: "AI-powered presentation and content creation." },
];

const categories = [
  { id: "all", label: "All", icon: Code2 },
  { id: "Frontend", label: "Frontend", icon: Code2 },
  { id: "Backend", label: "Backend", icon: Server },
  { id: "Database", label: "Database", icon: Database },
  { id: "Cloud", label: "Cloud", icon: Cloud },
  { id: "DevOps", label: "DevOps", icon: GitBranch },
  { id: "AI/ML", label: "AI & ML", icon: Brain },
  { id: "Tools", label: "Tools", icon: Terminal },
];

export default function Skills() {
  const [selectedTech, setSelectedTech] = useState(null);
  const [activeCategory, setActiveCategory] = useState("all");
  const [hoveredCenter, setHoveredCenter] = useState(false);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const filtered = activeCategory === "all"
    ? allTechnologies
    : allTechnologies.filter((t) => t.category === activeCategory);

  const visibleTechs = activeCategory === "all"
    ? allTechnologies
    : allTechnologies.filter((t) => t.category === activeCategory);

  return (
    <section id="skills" ref={ref} className="section-spacing relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full blur-[150px]"
          style={{ backgroundColor: "rgba(46,139,87,0.03)" }} />
      </div>
      <div className="container-main relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="section-label mb-4">Skills</span>
          <h2 className="font-heading text-section-heading mt-4">
            Tech <span className="text-gradient">Universe</span>
          </h2>
          <p className="text-paragraph mt-4 max-w-xl mx-auto" style={{ color: "var(--muted)" }}>
            Technologies I work with, organized by expertise and experience.
          </p>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-2 mb-16">
          {categories.map((cat) => {
            const Icon = cat.icon;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-badge text-sm font-medium transition-all duration-300 ${
                  activeCategory === cat.id
                    ? "bg-primary text-white shadow-premium-sm"
                    : ""
                }`}
                style={activeCategory !== cat.id ? { backgroundColor: "var(--accent-light)", color: "var(--muted)" } : {}}
              >
                <Icon className="w-4 h-4" />
                {cat.label}
              </button>
            );
          })}
        </div>

        <div className="grid lg:grid-cols-12 gap-8 items-start">
          <div className="lg:col-span-7">
            <div className="relative w-full max-w-[600px] mx-auto aspect-square">
              <motion.div
                initial={{ scale: 0 }}
                animate={isInView ? { scale: 1 } : {}}
                transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                onMouseEnter={() => setHoveredCenter(true)}
                onMouseLeave={() => setHoveredCenter(false)}
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-40 h-40 rounded-full bg-gradient-to-r from-primary to-accent p-[3px] z-10"
              >
                <div className="w-full h-full rounded-full flex items-center justify-center"
                  style={{ backgroundColor: "var(--card)" }}>
                  <motion.span
                    animate={{ scale: hoveredCenter ? 1.05 : 1 }}
                    className="font-heading font-bold text-sm text-center text-gradient leading-tight px-2"
                  >
                    RACHIT<br />PANDEY
                  </motion.span>
                </div>
              </motion.div>

              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full">
                {allTechnologies.map((tech, index) => {
                  const angle = (index / allTechnologies.length) * Math.PI * 2 - Math.PI / 2;
                  const radius = 180;
                  const x = 300 + radius * Math.cos(angle) - 22;
                  const y = 300 + radius * Math.sin(angle) - 22;
                  const isVisible = activeCategory === "all" || tech.category === activeCategory;
                  const TechIcon = tech.icon;

                  return (
                    <motion.button
                      key={tech.name}
                      className="absolute"
                      style={{ width: 44, height: 44, left: x, top: y }}
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{
                        opacity: isVisible ? 1 : 0.15,
                        scale: isVisible ? 1 : 0.6,
                      }}
                      transition={{ duration: 0.4, delay: index * 0.03 }}
                      whileHover={{ scale: 1.3, zIndex: 10 }}
                      onClick={() => setSelectedTech(tech)}
                    >
                      <div className={`w-full h-full rounded-full shadow-premium-sm flex items-center justify-center border transition-all duration-300 ${
                        selectedTech?.name === tech.name ? "shadow-premium-md" : ""
                      }`}
                        style={{
                          backgroundColor: "var(--card)",
                          borderColor: selectedTech?.name === tech.name ? "#2E8B57" : "var(--border)",
                        }}
                      >
                        <TechIcon className="w-5 h-5" style={{ color: tech.color }} />
                      </div>
                    </motion.button>
                  );
                })}
              </div>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="lg:col-span-5"
          >
            {selectedTech ? (
              <div className="rounded-card border p-8 shadow-premium-md"
                style={{ backgroundColor: "var(--card)", borderColor: "var(--border)" }}>
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 rounded-full flex items-center justify-center"
                      style={{ backgroundColor: "var(--accent-light)" }}>
                      <selectedTech.icon className="w-7 h-7" style={{ color: selectedTech.color }} />
                    </div>
                    <div>
                      <h3 className="font-heading text-xl font-bold">{selectedTech.name}</h3>
                      <span className="text-sm" style={{ color: "var(--muted)" }}>{selectedTech.category}</span>
                    </div>
                  </div>
                  <button
                    onClick={() => setSelectedTech(null)}
                    className="w-8 h-8 rounded-full flex items-center justify-center transition-colors"
                    style={{ backgroundColor: "var(--accent-light)", color: "var(--muted)" }}
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>

                <div className="space-y-5">
                  <div>
                    <span className="text-xs uppercase tracking-wider font-medium" style={{ color: "var(--muted)" }}>Experience Level</span>
                    <div className="mt-2 flex items-center gap-3">
                      <div className="flex-1 h-2 rounded-full overflow-hidden" style={{ backgroundColor: "var(--border)" }}>
                        <motion.div
                          initial={{ width: 0 }}
                          animate={{ width: selectedTech.experience === "Advanced" ? "90%" : selectedTech.experience === "Intermediate" ? "65%" : "40%" }}
                          className="h-full rounded-full bg-gradient-to-r from-primary to-accent"
                          transition={{ duration: 0.6, delay: 0.2 }}
                        />
                      </div>
                      <span className="text-sm font-medium" style={{ color: "var(--foreground)" }}>{selectedTech.experience}</span>
                    </div>
                  </div>
                  <div>
                    <span className="text-xs uppercase tracking-wider font-medium" style={{ color: "var(--muted)" }}>Projects</span>
                    <p className="text-lg font-semibold mt-1">{selectedTech.projects}+ projects</p>
                  </div>
                  <div>
                    <span className="text-xs uppercase tracking-wider font-medium" style={{ color: "var(--muted)" }}>Learning Timeline</span>
                    <p className="text-lg font-semibold mt-1">{selectedTech.timeline}</p>
                  </div>
                  <div>
                    <span className="text-xs uppercase tracking-wider font-medium" style={{ color: "var(--muted)" }}>Description</span>
                    <p className="text-base mt-1" style={{ color: "var(--muted)" }}>{selectedTech.description}</p>
                  </div>
                </div>
              </div>
            ) : (
              <div className="rounded-card border p-8 shadow-premium-md flex items-center justify-center min-h-[300px]"
                style={{ backgroundColor: "var(--card)", borderColor: "var(--border)" }}>
                <p style={{ color: "var(--muted)" }}>Click a technology to see details</p>
              </div>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
