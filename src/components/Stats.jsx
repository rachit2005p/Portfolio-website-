import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { GraduationCap, Briefcase, FolderKanban, Code2 } from "lucide-react";

const stats = [
  { icon: GraduationCap, title: "Education", subtitle: "B.Tech in Computer Science" },
  { icon: Briefcase, title: "Experience", subtitle: "Full Stack Developer" },
  { icon: FolderKanban, title: "Projects", subtitle: "8+ Completed" },
  { icon: Code2, title: "LeetCode", subtitle: "150+ Problems Solved" },
];

export default function Stats() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section ref={ref} className="py-16">
      <div className="container-main">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={stat.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative rounded-card p-6 border transition-all duration-500 hover:shadow-premium-lg hover:-translate-y-1"
                style={{ backgroundColor: "var(--card)", borderColor: "var(--border)" }}
              >
                <div className="absolute inset-0 rounded-card opacity-0 group-hover:opacity-5 transition-opacity duration-500"
                  style={{ background: "linear-gradient(135deg, #2E8B57, #57C785)" }} />
                <div className="relative z-10 flex flex-col items-center text-center gap-3">
                  <div className="w-14 h-14 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-500"
                    style={{ backgroundColor: "var(--accent-light)" }}>
                    <Icon className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="font-heading font-semibold text-lg" style={{ color: "var(--foreground)" }}>
                    {stat.title}
                  </h3>
                  <p className="text-sm" style={{ color: "var(--muted)" }}>{stat.subtitle}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
