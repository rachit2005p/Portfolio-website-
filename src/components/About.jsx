import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { FileText, GraduationCap, FolderKanban, Code2, Cpu } from "lucide-react";

const statData = [
  { icon: GraduationCap, value: "3+", label: "Years Learning" },
  { icon: FolderKanban, value: "8+", label: "Projects Completed" },
  { icon: Code2, value: "150+", label: "DSA Problems" },
  { icon: Cpu, value: "10+", label: "Technologies" },
];

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section id="about" ref={ref} className="section-spacing relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/3 left-0 w-[400px] h-[400px] rounded-full blur-[100px]" style={{ backgroundColor: "rgba(46,139,87,0.03)" }} />
      </div>
      <div className="container-main relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-3 mb-4"
        >
          <span className="section-label">About</span>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="font-heading text-section-heading"
            >
              Crafting Digital{" "}
              <span className="text-gradient">Experiences</span>
              {" "}Through Code
            </motion.h2>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="space-y-4 text-paragraph mt-8"
              style={{ color: "var(--muted)" }}
            >
              <p>
                I&apos;m a passionate Full Stack Developer with a love for building 
                beautiful, performant, and accessible web applications. My journey 
                in tech started with curiosity and has evolved into a dedicated 
                craft of turning complex problems into elegant solutions.
              </p>
              <p>
                I specialize in the MERN stack and modern JavaScript frameworks, 
                with a keen eye for UI/UX design principles. Every project I 
                undertake is an opportunity to create something meaningful and 
                impactful.
              </p>
              <p>
                When I&apos;m not coding, you&apos;ll find me exploring new technologies, 
                contributing to open source, or sharing knowledge with the 
                developer community.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="mt-8"
            >
              <a href="#" className="btn-primary group w-fit inline-flex">
                <FileText className="w-4 h-4" />
                Download Resume
              </a>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.7, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="relative mt-12 lg:mt-0"
          >
            <div className="relative w-full aspect-[4/3] rounded-hero overflow-hidden border"
              style={{ background: "linear-gradient(135deg, rgba(46,139,87,0.1), rgba(87,199,133,0.1))", borderColor: "var(--border)" }}>
              <img
                src="/images/Intro.png"
                alt="Rachit Pandey"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 w-24 h-24 rounded-full opacity-20 blur-2xl"
              style={{ background: "linear-gradient(135deg, #2E8B57, #57C785)" }} />
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-20"
        >
          {statData.map((stat) => {
            const Icon = stat.icon;
            return (
              <div key={stat.label}
                className="flex flex-col items-center text-center gap-2 p-6 rounded-card border"
                style={{ backgroundColor: "var(--card)", borderColor: "var(--border)" }}>
                <div className="w-12 h-12 rounded-full flex items-center justify-center"
                  style={{ backgroundColor: "var(--accent-light)" }}>
                  <Icon className="w-6 h-6 text-primary" />
                </div>
                <span className="font-heading text-3xl font-bold text-gradient">{stat.value}</span>
                <span className="text-sm" style={{ color: "var(--muted)" }}>{stat.label}</span>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
