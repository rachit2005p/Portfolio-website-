import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ExternalLink, Award, FileText } from "lucide-react";

const certificates = [
  {
    title: "Development Certificate",
    issuer: "Development",
    date: "2024",
    image: "/certificates/Development certificate.png",
  },
  {
    title: "DSA Certificate",
    issuer: "Data Structures & Algorithms",
    date: "2024",
    image: "/certificates/DSA certificate.jpg",
  },
  {
    title: "DSA Training",
    issuer: "DSA Training Program",
    date: "2026",
    image: "/certificates/Dsa Training.png",
  },
  {
    title: "Object Oriented Programming",
    issuer: "OOP",
    date: "2024",
    image: "/certificates/Object Oreinted Programming Language.jpg",
  },
  {
    title: "NPTEL Certification",
    issuer: "NPTEL",
    date: "2024",
    image: "/certificates/NPTEL.pdf",
  },
];

export default function Certificates() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const openCertificate = (url) => {
    window.open(url, "_blank", "noopener,noreferrer");
  };

  const isPdf = (url) => url.endsWith(".pdf");

  return (
    <section id="certification" ref={ref} className="section-spacing relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 right-0 w-[400px] h-[400px] rounded-full blur-[100px]"
          style={{ backgroundColor: "rgba(87,199,133,0.03)" }} />
      </div>
      <div className="container-main relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="section-label mb-4">Certification and Training</span>
          <h2 className="font-heading text-section-heading mt-4">
            <span className="text-gradient">Credentials & Training</span>
          </h2>
          <p className="text-paragraph mt-4 max-w-xl mx-auto" style={{ color: "var(--muted)" }}>
            Certifications and training programs that validate my expertise.
          </p>
        </motion.div>

        <div className="flex gap-6 overflow-x-auto pb-4 snap-x snap-mandatory" style={{ scrollbarWidth: "thin" }}>
          {certificates.map((cert, index) => (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: index * 0.08 }}
              className="min-w-[260px] max-w-[260px] snap-start flex-shrink-0 group rounded-card border overflow-hidden hover:shadow-premium-md hover:-translate-y-1 transition-all duration-300 cursor-pointer"
              style={{ backgroundColor: "var(--card)", borderColor: "var(--border)" }}
              onClick={() => openCertificate(cert.image)}
            >
              <div className="relative aspect-[4/3] overflow-hidden bg-gray-100 dark:bg-gray-800 flex items-center justify-center">
                {isPdf(cert.image) ? (
                  <object data={cert.image} type="application/pdf" className="w-full h-full">
                    <div className="flex flex-col items-center gap-3">
                      <FileText className="w-20 h-20" style={{ color: "var(--muted)" }} />
                      <span className="text-xs font-medium px-3 py-1 rounded-full border" style={{ color: "var(--muted)", borderColor: "var(--border)" }}>
                        View Certificate
                      </span>
                    </div>
                  </object>
                ) : (
                  <img
                    src={cert.image}
                    alt={cert.title}
                    className="w-full h-full object-contain p-2"
                    onError={(e) => {
                      e.target.style.display = "none";
                    }}
                  />
                )}
              </div>
              <div className="p-5">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-heading font-semibold text-base group-hover:text-primary transition-colors">
                    {cert.title}
                  </h3>
                  <ExternalLink className="w-4 h-4 flex-shrink-0" style={{ color: "var(--muted)" }} />
                </div>
                <p className="text-sm" style={{ color: "var(--muted)" }}>{cert.issuer} &bull; {cert.date}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}