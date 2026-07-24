import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Mail, MapPin, Phone, Send, CheckCircle, Github, Linkedin, Twitter } from "lucide-react";

const schema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email"),
  subject: z.string().min(5, "Subject must be at least 5 characters"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm({ resolver: zodResolver(schema) });

  const onSubmit = async (data) => {
    await new Promise((resolve) => setTimeout(resolve, 1500));
    console.log("Form data:", data);
    setSubmitted(true);
    reset();
    setTimeout(() => setSubmitted(false), 5000);
  };

  const contactInfo = [
    { icon: Mail, label: "Email", value: "rachitpandey062005@gmail.com", href: "mailto:rachitpandey062005@gmail.com" },
    { icon: Linkedin, label: "LinkedIn", value: "Mail to Rachit for personal contact", href: "https://www.linkedin.com/in/rachit2005/" },
    { icon: MapPin, label: "Location", value: "Remote / India", href: "#" },
  ];

  return (
    <section id="contact" ref={ref} className="section-spacing relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full blur-[150px]"
          style={{ backgroundColor: "rgba(46,139,87,0.03)" }} />
      </div>
      <div className="container-main relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="section-label mb-4">Contact</span>
          <h2 className="font-heading text-section-heading mt-4">
            Get In <span className="text-gradient">Touch</span>
          </h2>
          <p className="text-paragraph mt-4 max-w-xl mx-auto" style={{ color: "var(--muted)" }}>
            Have a project in mind? Let&apos;s work together to create something amazing.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <div className="space-y-6">
              {contactInfo.map((info) => {
                const Icon = info.icon;
                return (
                  <a key={info.label} href={info.href} className="flex items-center gap-4 group">
                    <div className="w-12 h-12 rounded-full flex items-center justify-center transition-colors duration-300"
                      style={{ backgroundColor: "var(--accent-light)" }}>
                      <Icon className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-xs uppercase tracking-wider" style={{ color: "var(--muted)" }}>{info.label}</p>
                      <p className="font-medium group-hover:text-primary transition-colors" style={{ color: "var(--foreground)" }}>
                        {info.value}
                      </p>
                    </div>
                  </a>
                );
              })}
            </div>

            <div className="mt-8">
              <p className="text-xs uppercase tracking-wider mb-4" style={{ color: "var(--muted)" }}>Social Links</p>
              <div className="flex gap-3">
                {[
                  { icon: Github, href: "https://github.com/rachit2005p" },
                  { icon: Linkedin, href: "https://www.linkedin.com/in/rachit2005/" },
                  { icon: Twitter, href: "https://twitter.com" },
                  { icon: Mail, href: "mailto:rachitpandey062005@gmail.com" },
                ].map(({ icon: Icon, href }) => (
                  <a key={href} href={href} target="_blank" rel="noopener noreferrer"
                    className="w-12 h-12 rounded-button flex items-center justify-center transition-all duration-300 hover:-translate-y-1"
                    style={{ backgroundColor: "var(--accent-light)", color: "var(--muted)" }}
                    onMouseEnter={(e) => { e.currentTarget.style.color = "#2E8B57"; e.currentTarget.style.backgroundColor = "rgba(46,139,87,0.1)"; }}
                    onMouseLeave={(e) => { e.currentTarget.style.color = "var(--muted)"; e.currentTarget.style.backgroundColor = "var(--accent-light)"; }}
                  >
                    <Icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-12 lg:mt-0"
          >
            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="rounded-card border p-12 flex flex-col items-center text-center gap-4"
                style={{ backgroundColor: "var(--card)", borderColor: "var(--border)" }}
              >
                <div className="w-16 h-16 rounded-full flex items-center justify-center" style={{ backgroundColor: "rgba(34,197,94,0.1)" }}>
                  <CheckCircle className="w-8 h-8 text-success" />
                </div>
                <h3 className="font-heading text-2xl font-bold">Message Sent!</h3>
                <p style={{ color: "var(--muted)" }}>Thank you for reaching out. I&apos;ll get back to you soon.</p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit(onSubmit)}
                className="rounded-card border p-8 space-y-6"
                style={{ backgroundColor: "var(--card)", borderColor: "var(--border)" }}
              >
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-sm font-medium" style={{ color: "var(--foreground)" }}>Name</label>
                    <input {...register("name")} placeholder="John Doe"
                      className="w-full px-4 py-3.5 rounded-input border outline-none transition-all duration-300"
                      style={{
                        backgroundColor: "var(--background)", borderColor: "var(--border)", color: "var(--foreground)"
                      }}
                      onFocus={(e) => { e.target.style.borderColor = "#2E8B57"; e.target.style.boxShadow = "0 0 0 3px rgba(46,139,87,0.2)"; }}
                      onBlur={(e) => { e.target.style.borderColor = "var(--border)"; e.target.style.boxShadow = "none"; }}
                    />
                    {errors.name && <p className="text-xs text-red-500">{errors.name.message}</p>}
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium" style={{ color: "var(--foreground)" }}>Email</label>
                    <input {...register("email")} placeholder="john@example.com"
                      className="w-full px-4 py-3.5 rounded-input border outline-none transition-all duration-300"
                      style={{
                        backgroundColor: "var(--background)", borderColor: "var(--border)", color: "var(--foreground)"
                      }}
                      onFocus={(e) => { e.target.style.borderColor = "#2E8B57"; e.target.style.boxShadow = "0 0 0 3px rgba(46,139,87,0.2)"; }}
                      onBlur={(e) => { e.target.style.borderColor = "var(--border)"; e.target.style.boxShadow = "none"; }}
                    />
                    {errors.email && <p className="text-xs text-red-500">{errors.email.message}</p>}
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium" style={{ color: "var(--foreground)" }}>Subject</label>
                  <input {...register("subject")} placeholder="Project Collaboration"
                    className="w-full px-4 py-3.5 rounded-input border outline-none transition-all duration-300"
                    style={{
                      backgroundColor: "var(--background)", borderColor: "var(--border)", color: "var(--foreground)"
                    }}
                    onFocus={(e) => { e.target.style.borderColor = "#2E8B57"; e.target.style.boxShadow = "0 0 0 3px rgba(46,139,87,0.2)"; }}
                    onBlur={(e) => { e.target.style.borderColor = "var(--border)"; e.target.style.boxShadow = "none"; }}
                  />
                  {errors.subject && <p className="text-xs text-red-500">{errors.subject.message}</p>}
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium" style={{ color: "var(--foreground)" }}>Message</label>
                  <textarea {...register("message")} rows={5} placeholder="Tell me about your project..."
                    className="w-full px-4 py-3.5 rounded-input border outline-none transition-all duration-300 resize-none"
                    style={{
                      backgroundColor: "var(--background)", borderColor: "var(--border)", color: "var(--foreground)"
                    }}
                    onFocus={(e) => { e.target.style.borderColor = "#2E8B57"; e.target.style.boxShadow = "0 0 0 3px rgba(46,139,87,0.2)"; }}
                    onBlur={(e) => { e.target.style.borderColor = "var(--border)"; e.target.style.boxShadow = "none"; }}
                  />
                  {errors.message && <p className="text-xs text-red-500">{errors.message.message}</p>}
                </div>

                <button type="submit" disabled={isSubmitting}
                  className="btn-primary w-full group disabled:opacity-60"
                >
                  {isSubmitting ? (
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                      className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full"
                    />
                  ) : (
                    <>
                      Send Message
                      <Send className="w-4 h-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                    </>
                  )}
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
