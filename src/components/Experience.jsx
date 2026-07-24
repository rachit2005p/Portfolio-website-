import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Briefcase, GraduationCap, MapPin } from "lucide-react";

const experiences = [
  {
    type: "work", title: "Full Stack Developer", company: "Tech Company", location: "Remote",
    period: "2024 - Present",
    description: "Leading development of full-stack web applications using React, Node.js, and MongoDB. Architecting scalable solutions and mentoring junior developers.",
    achievements: ["Architected and built 3 major products from scratch", "Improved application performance by 40%", "Led a team of 4 developers", "Implemented CI/CD pipelines reducing deployment time by 60%"],
    current: true,
  },
  {
    type: "work", title: "Frontend Developer", company: "Digital Agency", location: "Remote",
    period: "2023 - 2024",
    description: "Developed responsive web applications and interactive user interfaces for diverse clients across various industries.",
    achievements: ["Delivered 10+ client projects on time", "Built reusable component library with 50+ components", "Reduced page load times by 35% through optimization", "Implemented SEO best practices improving rankings"],
    current: false,
  },
  {
    type: "work", title: "Junior Developer", company: "Startup Inc.", location: "Remote",
    period: "2022 - 2023",
    description: "Started professional journey building web applications and learning industry best practices in a fast-paced startup environment.",
    achievements: ["Contributed to 5 major product features", "Wrote comprehensive test suites achieving 85% coverage", "Participated in code reviews and knowledge sharing", "Automated repetitive tasks saving 10 hours/week"],
    current: false,
  },
  {
    type: "education", title: "B.Tech in Computer Science", company: "University", location: "India",
    period: "2021 - 2025",
    description: "Pursuing Bachelor of Technology in Computer Science with focus on software engineering and web technologies.",
    achievements: ["Active in coding competitions and hackathons", "Built multiple full-stack projects", "Participated in open source contributions", "Maintained strong academic performance"],
    current: false,
  },
];

export default function Experience() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section id="experience" ref={ref} className="section-spacing relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-0 w-[400px] h-[400px] rounded-full blur-[100px]"
          style={{ backgroundColor: "rgba(46,139,87,0.03)" }} />
      </div>
      <div className="container-main relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="section-label mb-4">Experience</span>
          <h2 className="font-heading text-section-heading mt-4">
            Professional <span className="text-gradient">Journey</span>
          </h2>
          <p className="text-paragraph mt-4 max-w-xl mx-auto" style={{ color: "var(--muted)" }}>
            My career path and the experiences that shaped me as a developer.
          </p>
        </motion.div>

        <div className="relative max-w-3xl mx-auto">
          <div className="absolute left-[23px] top-0 bottom-0 w-[2px]" style={{ backgroundColor: "var(--border)" }} />

          {experiences.map((exp, index) => (
            <motion.div
              key={`${exp.title}-${exp.period}`}
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="relative pl-16 pb-12 last:pb-0"
            >
              <div className={`absolute left-[15px] w-[18px] h-[18px] rounded-full border-[3px] ${
                exp.current ? "bg-primary border-primary" : ""
              }`}
                style={!exp.current ? { backgroundColor: "var(--card)", borderColor: "var(--border)" } : {}}
              >
                {exp.current && (
                  <div className="absolute inset-[-4px] rounded-full animate-ping opacity-30 bg-primary" />
                )}
              </div>

              <div className={`rounded-card border p-6 md:p-8 transition-shadow duration-300 ${
                exp.current ? "shadow-premium-md" : "shadow-premium-sm hover:shadow-premium-md"
              }`}
                style={{
                  backgroundColor: "var(--card)",
                  borderColor: exp.current ? "rgba(46,139,87,0.3)" : "var(--border)",
                }}
              >
                <div className="flex flex-wrap items-start justify-between gap-3 mb-3">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full flex items-center justify-center"
                      style={{ backgroundColor: "var(--accent-light)" }}>
                      {exp.type === "work" ? (
                        <Briefcase className="w-5 h-5 text-primary" />
                      ) : (
                        <GraduationCap className="w-5 h-5 text-primary" />
                      )}
                    </div>
                    <div>
                      <h3 className="font-heading font-bold text-lg">{exp.title}</h3>
                      <p className="text-sm" style={{ color: "var(--muted)" }}>{exp.company}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-1 text-xs" style={{ color: "var(--muted)" }}>
                    <MapPin className="w-3 h-3" /> {exp.location}
                  </div>
                </div>

                <div className="mb-3">
                  <span className={`inline-flex items-center px-3 py-1 rounded-badge text-xs font-medium ${
                    exp.current ? "bg-primary/10 text-primary" : ""
                  }`}
                    style={!exp.current ? { backgroundColor: "var(--accent-light)", color: "var(--muted)" } : {}}
                  >
                    {exp.period}
                    {exp.current && (
                      <span className="w-1.5 h-1.5 rounded-full bg-success ml-2 animate-pulse" />
                    )}
                  </span>
                </div>

                <p className="text-sm mb-4" style={{ color: "var(--muted)" }}>{exp.description}</p>

                <ul className="space-y-2">
                  {exp.achievements.map((achievement) => (
                    <li key={achievement} className="flex items-start gap-3 text-sm" style={{ color: "var(--muted)" }}>
                      <span className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"
                        style={{ backgroundColor: "var(--accent-light)" }}>
                        <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                      </span>
                      {achievement}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
