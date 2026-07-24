import { useState, useRef } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { ExternalLink, Github, X, ChevronRight, Zap } from "lucide-react";

const projects = [
  {
    title: "Spice Craft", category: "Full Stack", featured: true, image: "/images/spice-craft.svg",
    description: "Helps bachelors cook delicious meals based on the ingredients they already have at home.",
    longDescription: "Spice Craft is a smart recipe finder built for bachelors. Just tell it what ingredients you have in your kitchen, and it suggests dishes you can make. No more wasting food or ordering expensive takeout — cook what you already have.",
    tags: ["React", "Vite", "Recipe API"],
    features: ["Ingredient-based dish suggestions", "Smart filtering by available items", "Quick & easy recipes for bachelors", "Minimal & intuitive UI", "Reduces food waste", "No account needed"],
    challenges: "Building an accurate ingredient-to-dish matching algorithm that works well with partial ingredient lists and suggests the most relevant recipes.",
    github: "https://github.com/rachit2005p", live: "https://example.com",
  },
  {
    title: "Sprint Room", category: "Full Stack", featured: true, image: "/images/sprint-room.svg",
    description: "Ephemeral sprint rooms for engineers to collaborate in real-time during feature development.",
    longDescription: "Sprint Room lets engineers create temporary rooms for sprint collaboration. Share ideas, track tasks, and communicate in real-time. Rooms can be deleted anytime and no data is ever saved — zero persistence, complete privacy, total safety.",
    tags: ["React", "WebRTC", "Vite"],
    features: ["Instant room creation for sprints", "Real-time collaboration", "Ephemeral — no data saved anywhere", "Delete room anytime, complete privacy", "No sign-up or login required", "Built for engineers, by engineers"],
    challenges: "Implementing real-time communication without persisting any data on servers, ensuring true privacy and ephemeral experience.",
    github: "https://github.com/rachit2005p", live: "https://sprint-room.onrender.com/landing",
  },
  {
    title: "Portfolio Website", category: "Frontend", featured: true, image: "/images/portfolio.svg",
    description: "My personal portfolio showcasing projects, skills, and contact information.",
    longDescription: "A modern, responsive portfolio built with React and Tailwind CSS. Features dark/light mode, smooth animations with Framer Motion, and a clean minimal design to showcase my work and skills as a developer.",
    tags: ["React", "Tailwind CSS", "Vite"],
    features: ["Dark/Light theme toggle", "Smooth page animations", "Responsive design", "Project showcase with modals", "Skills & certifications display", "Contact section"],
    challenges: "Creating a polished, performant single-page portfolio with smooth animations while maintaining a clean and professional look.",
    github: "https://github.com/rachit2005p", live: "https://example.com",
  },
  {
    title: "StartupConnect", category: "PHP Laravel", featured: true, image: "/images/startupconnect.svg",
    description: "A centralized web platform for student founders to discover, bookmark, and host startup-focused events.",
    longDescription: "StartupConnect is a Laravel-based web application built to streamline how student entrepreneurs and developers find relevant growth opportunities. Instead of relying on fragmented social groups or scattered websites, users can easily discover stage-appropriate events, bookmark upcoming hackathons or founder talks, and host their own campus sessions using an intuitive Bootstrap-powered UI.",
    tags: ["Laravel", "PHP", "Bootstrap 5", "MySQL"],
    features: ["Event Discovery with categories (Hackathons, Founder Talks, Workshops)", "Personalized journey based on startup stage (Ideation, Validation, Traction, Scaling)", "Bookmark & calendar organization for events", "Event hosting/publishing for campus organizers", "Responsive Bootstrap 5 UI", "Deployed on Render"],
    challenges: "Consolidating scattered campus and startup events into one accessible feed and building a stage-based recommendation system that guides users based on their startup journey phase.",
    github: "https://github.com/rachit2005p", live: "https://startup-connect-icsy.onrender.com/",
  },
];

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [activeFilter, setActiveFilter] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const filters = ["All", "Full Stack", "PHP Laravel", "Frontend"];
  const filtered = activeFilter === "All" ? projects : projects.filter((p) => p.category === activeFilter);

  return (
    <section id="projects" ref={ref} className="section-spacing relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] rounded-full blur-[120px]"
          style={{ backgroundColor: "rgba(87,199,133,0.03)" }} />
      </div>
      <div className="container-main relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center text-center mb-16"
        >
          <span className="section-label mb-4">Projects</span>
          <h2 className="font-heading text-section-heading mt-4">
            Featured <span className="text-gradient">Work</span>
          </h2>
          <p className="text-paragraph mt-4 max-w-xl" style={{ color: "var(--muted)" }}>
            I have built many projects, but here are my best 4-5 projects that showcase my skills and passion.
          </p>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-5 py-2.5 rounded-badge text-sm font-medium transition-all duration-300 ${activeFilter === filter
                ? "bg-primary text-white shadow-premium-sm"
                : ""
                }`}
              style={activeFilter !== filter ? { backgroundColor: "var(--accent-light)", color: "var(--muted)" } : {}}
            >
              {filter}
            </button>
          ))}
        </div>

        <motion.div layout className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((project, index) => (
            <motion.div
              key={project.title}
              layout
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative rounded-card border overflow-hidden cursor-pointer transition-all duration-500 hover:shadow-premium-lg hover:-translate-y-1"
              style={{ backgroundColor: "var(--card)", borderColor: "var(--border)" }}
              onClick={() => setSelectedProject(project)}
            >
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{ background: "linear-gradient(135deg, rgba(46,139,87,0.05), rgba(87,199,133,0.05))" }} />
              <div className="relative z-10">
                <div className="aspect-video flex items-center justify-center overflow-hidden bg-cover bg-center"
                  style={{ backgroundImage: `url(${project.image})` }}>
                  {project.featured && (
                    <div className="absolute top-3 right-3 px-3 py-1 rounded-badge bg-primary text-white text-xs font-medium shadow-premium-sm">
                      Featured
                    </div>
                  )}
                </div>

                <div className="p-6">
                  <h3 className="font-heading text-xl font-bold mb-2 transition-colors duration-300 group-hover:text-primary">
                    {project.title}
                  </h3>
                  <p className="text-sm mb-4 line-clamp-2" style={{ color: "var(--muted)" }}>
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag) => (
                      <span key={tag} className="px-3 py-1 rounded-badge text-xs font-medium"
                        style={{ backgroundColor: "var(--accent-light)", color: "#2E8B57" }}>
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="flex items-center gap-3 text-sm" style={{ color: "var(--muted)" }}>
                    <span className="inline-flex items-center gap-1"><Github className="w-4 h-4" /> Code</span>
                    <span className="inline-flex items-center gap-1"><ExternalLink className="w-4 h-4" /> Live</span>
                    <span className="ml-auto inline-flex items-center gap-1 text-primary text-xs font-medium">
                      View Details <ChevronRight className="w-3 h-3" />
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[200] flex items-center justify-center p-4 bg-black/40 backdrop-blur-sm"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              onClick={(e) => e.stopPropagation()}
              className="rounded-card max-w-3xl w-full max-h-[85vh] overflow-y-auto shadow-premium-lg"
              style={{ backgroundColor: "var(--card)" }}
            >
              <div className="sticky top-0 z-10 flex items-center justify-between p-6 border-b"
                style={{ backgroundColor: "var(--card)", borderColor: "var(--border)" }}>
                <h3 className="font-heading text-2xl font-bold">{selectedProject.title}</h3>
                <button onClick={() => setSelectedProject(null)}
                  className="w-10 h-10 rounded-full flex items-center justify-center transition-colors"
                  style={{ backgroundColor: "var(--accent-light)", color: "var(--muted)" }}>
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="p-6 space-y-8">
                <div className="aspect-video rounded-xl flex items-center justify-center bg-cover bg-center"
                  style={{ backgroundImage: `url(${selectedProject.image})` }} />
                <div>
                  <h4 className="font-heading text-lg font-semibold mb-2">Overview</h4>
                  <p style={{ color: "var(--muted)" }}>{selectedProject.longDescription}</p>
                </div>

                <div className="flex flex-wrap gap-2">
                  {selectedProject.tags.map((tag) => (
                    <span key={tag} className="inline-flex items-center gap-2 px-4 py-2 rounded-badge text-sm font-medium"
                      style={{ backgroundColor: "var(--accent-light)" }}>
                      {tag}
                    </span>
                  ))}
                </div>

                <div>
                  <h4 className="font-heading text-lg font-semibold mb-3">Features</h4>
                  <div className="grid sm:grid-cols-2 gap-3">
                    {selectedProject.features.map((feature) => (
                      <div key={feature} className="flex items-center gap-3 text-sm" style={{ color: "var(--muted)" }}>
                        <span className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0"
                          style={{ backgroundColor: "var(--accent-light)" }}>
                          <Zap className="w-3 h-3 text-primary" />
                        </span>
                        {feature}
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="font-heading text-lg font-semibold mb-2">Challenges</h4>
                  <p className="p-4 rounded-xl" style={{ color: "var(--muted)", backgroundColor: "var(--accent-light)" }}>
                    {selectedProject.challenges}
                  </p>
                </div>

                <div className="flex flex-wrap gap-4 pt-2">
                  <a href={selectedProject.github} target="_blank" rel="noopener noreferrer" className="btn-primary">
                    <Github className="w-4 h-4" /> View Source
                  </a>
                  <a href={selectedProject.live} target="_blank" rel="noopener noreferrer" className="btn-outline">
                    <ExternalLink className="w-4 h-4" /> Live Demo
                  </a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
