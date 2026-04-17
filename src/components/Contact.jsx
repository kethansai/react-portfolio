import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaWhatsapp,
  FaGithub,
  FaLinkedin,
  FaArrowRight,
} from "react-icons/fa";
import { personalInfo, socialLinks } from "../data/portfolioData";
import SectionHeading from "./SectionHeading";

const channels = (info) => [
  {
    Icon: FaEnvelope,
    label: "Email",
    value: info.email,
    href: socialLinks.email,
    tone: "text-rose-500",
  },
  {
    Icon: FaPhone,
    label: "Phone",
    value: info.phone,
    href: `tel:${info.phone}`,
    tone: "text-emerald-500",
  },
  {
    Icon: FaWhatsapp,
    label: "WhatsApp",
    value: "Message me",
    href: socialLinks.whatsapp,
    tone: "text-green-500",
  },
  {
    Icon: FaMapMarkerAlt,
    label: "Based in",
    value: "Tirupati / Bangalore, IN",
    href: null,
    tone: "text-primary-500",
  },
];

const Contact = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="contact" className="section print-section">
      <div className="absolute inset-0 bg-dotgrid opacity-30 mask-radial-fade pointer-events-none" />
      <div className="container relative z-10">
        <SectionHeading
          eyebrow="07 — Contact"
          title="Let's build"
          highlight="something solid."
          description="Open to senior / staff roles, consulting, and interesting collaborations. The fastest way to reach me is email or WhatsApp."
        />

        <div
          ref={ref}
          className="max-w-3xl mx-auto grid sm:grid-cols-2 gap-3 sm:gap-4"
        >
          {channels(personalInfo).map(({ Icon, label, value, href, tone }, i) => {
            const Wrapper = href ? "a" : "div";
            return (
              <motion.div
                key={label}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: i * 0.08, duration: 0.5 }}
              >
                <Wrapper
                  {...(href
                    ? {
                        href,
                        target: href.startsWith("http") ? "_blank" : undefined,
                        rel: href.startsWith("http") ? "noopener noreferrer" : undefined,
                      }
                    : {})}
                  className="group flex items-center gap-4 h-full rounded-xl border border-ink-200 dark:border-ink-800 bg-white dark:bg-ink-900 px-4 py-4 hover:border-primary-400/50 hover:shadow-soft transition-all"
                >
                  <div
                    className={`w-11 h-11 shrink-0 rounded-lg bg-ink-100 dark:bg-ink-800 flex items-center justify-center ${tone}`}
                  >
                    <Icon size={18} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-[11px] font-mono uppercase tracking-widest text-muted">
                      {label}
                    </p>
                    <p className="truncate text-sm sm:text-base text-ink-900 dark:text-white font-medium">
                      {value}
                    </p>
                  </div>
                  {href && (
                    <FaArrowRight className="text-muted group-hover:text-primary-500 group-hover:translate-x-0.5 transition-all" />
                  )}
                </Wrapper>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="max-w-3xl mx-auto mt-8 flex flex-col sm:flex-row items-center justify-between gap-4 px-1"
        >
          <p className="text-xs font-mono uppercase tracking-widest text-muted">
            Find me online
          </p>
          <div className="flex items-center gap-2">
            <a
              href={socialLinks.github}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 flex items-center justify-center rounded-lg border border-ink-200 dark:border-ink-800 text-ink-700 dark:text-ink-200 hover:text-primary-500 hover:border-primary-400/60 transition-colors"
              aria-label="GitHub"
            >
              <FaGithub size={16} />
            </a>
            <a
              href={socialLinks.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 flex items-center justify-center rounded-lg border border-ink-200 dark:border-ink-800 text-ink-700 dark:text-ink-200 hover:text-primary-500 hover:border-primary-400/60 transition-colors"
              aria-label="LinkedIn"
            >
              <FaLinkedin size={16} />
            </a>
            <a
              href={socialLinks.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 flex items-center justify-center rounded-lg border border-ink-200 dark:border-ink-800 text-ink-700 dark:text-ink-200 hover:text-primary-500 hover:border-primary-400/60 transition-colors"
              aria-label="WhatsApp"
            >
              <FaWhatsapp size={16} />
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="mt-10 flex justify-center no-print"
        >
          <a href={socialLinks.email} className="btn-primary">
            <FaEnvelope /> Email me directly
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
