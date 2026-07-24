import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Code2, FolderKanban, GraduationCap, Cpu } from "lucide-react";

const achievements = [
  { icon: Code2, value: "150", suffix: "+", label: "DSA Problems" },
  { icon: FolderKanban, value: "8", suffix: "+", label: "Projects" },
  { icon: GraduationCap, value: "3", suffix: "+", label: "Years Learning" },
  { icon: Cpu, value: "10", suffix: "+", label: "Technologies" },
];

export default function Achievements() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section ref={ref} className="py-20 relative">
      <div className="container-main">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {achievements.map((achievement, index) => {
            const Icon = achievement.icon;
            return (
              <motion.div
                key={achievement.label}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex flex-col items-center text-center gap-3"
              >
                <div className="w-16 h-16 rounded-full flex items-center justify-center"
                  style={{ backgroundColor: "var(--accent-light)" }}>
                  <Icon className="w-8 h-8 text-primary" />
                </div>
                <span className="font-heading text-5xl font-bold text-gradient">
                  {isInView ? achievement.value : "0"}
                </span>
                <span className="font-medium" style={{ color: "var(--muted)" }}>{achievement.label}</span>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
