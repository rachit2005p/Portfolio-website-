import { ArrowUp, Github, Linkedin, Twitter, Mail } from "lucide-react";

export default function Footer() {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <footer className="relative border-t" style={{ borderColor: "var(--border)", backgroundColor: "var(--background)" }}>
      <div className="container-main py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex flex-col items-center md:items-start gap-2">
            <a href="#home" className="font-heading text-2xl font-bold">
              <span className="text-gradient">R</span>
              <span style={{ color: "var(--foreground)" }}>P</span>
            </a>
            <p className="text-sm" style={{ color: "var(--muted)" }}>Built with passion. Powered by code.</p>
          </div>

          <div className="flex items-center gap-6">
            {["Home", "About", "Skills", "Projects", "Experience", "Contact"].map((item) => (
              <a key={item} href={`#${item.toLowerCase()}`}
                className="text-sm transition-colors"
                style={{ color: "var(--muted)" }}
                onMouseEnter={(e) => e.target.style.color = "var(--foreground)"}
                onMouseLeave={(e) => e.target.style.color = "var(--muted)"}
              >
                {item}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-3">
            {[
              { icon: Github, href: "https://github.com/rachit2005p" },
              { icon: Linkedin, href: "https://www.linkedin.com/in/rachit2005/" },
              { icon: Twitter, href: "https://twitter.com" },
              { icon: Mail, href: "rachitpandey0603@gmail.com" },
            ].map(({ icon: Icon, href }) => (
              <a key={href} href={href} target="_blank" rel="noopener noreferrer"
                className="w-10 h-10 rounded-button flex items-center justify-center transition-all duration-300"
                style={{ backgroundColor: "var(--accent-light)", color: "var(--muted)" }}
                onMouseEnter={(e) => { e.currentTarget.style.color = "#2E8B57"; e.currentTarget.style.backgroundColor = "rgba(46,139,87,0.1)"; }}
                onMouseLeave={(e) => { e.currentTarget.style.color = "var(--muted)"; e.currentTarget.style.backgroundColor = "var(--accent-light)"; }}
              >
                <Icon className="w-4 h-4" />
              </a>
            ))}
          </div>
        </div>

        <div className="mt-8 pt-8 border-t flex flex-col md:flex-row items-center justify-between gap-4"
          style={{ borderColor: "rgba(232,236,233,0.3)" }}>
          <p className="text-sm" style={{ color: "var(--muted)" }}>
            &copy; {new Date().getFullYear()} Rachit Pandey. All rights reserved.
          </p>
          <button onClick={scrollToTop}
            className="inline-flex items-center gap-2 text-sm transition-colors group"
            style={{ color: "var(--muted)" }}
            onMouseEnter={(e) => e.currentTarget.style.color = "#2E8B57"}
            onMouseLeave={(e) => e.currentTarget.style.color = "var(--muted)"}
          >
            Back to top
            <ArrowUp className="w-4 h-4 transition-transform group-hover:-translate-y-1" />
          </button>
        </div>
      </div>
    </footer>
  );
}
