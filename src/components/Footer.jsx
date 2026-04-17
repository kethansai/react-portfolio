import { motion } from "framer-motion";
import {
  FaGithub,
  FaLinkedin,
  FaWhatsapp,
  FaEnvelope,
  FaArrowUp,
} from "react-icons/fa";
import { socialLinks } from "../data/portfolioData";
import Logo from "./Logo";

const Footer = () => {
  const year = new Date().getFullYear();

  const social = [
    { Icon: FaGithub, href: socialLinks.github, label: "GitHub" },
    { Icon: FaLinkedin, href: socialLinks.linkedin, label: "LinkedIn" },
    { Icon: FaWhatsapp, href: socialLinks.whatsapp, label: "WhatsApp" },
    { Icon: FaEnvelope, href: socialLinks.email, label: "Email" },
  ];

  return (
    <footer className="relative border-t border-ink-200 dark:border-ink-800 bg-white dark:bg-ink-950 no-print">
      <div className="absolute inset-0 bg-dotgrid opacity-30 mask-radial-fade pointer-events-none" />
      <div className="container relative z-10 py-10 sm:py-12">
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 mb-8">
          <div className="md:col-span-1">
            <a href="#top" className="inline-flex items-center gap-2.5 mb-3">
              <Logo size="md" />
              <span className="font-display font-bold text-lg text-ink-900 dark:text-white">
                kethan<span className="text-primary-500">.</span>dev
              </span>
            </a>
            <p className="text-sm text-muted leading-relaxed max-w-xs">
              Full Stack Developer &amp; DevOps Engineer building scalable, modern
              web platforms.
            </p>
          </div>

          <div>
            <p className="text-[11px] font-mono uppercase tracking-widest text-muted mb-3">
              Navigate
            </p>
            <ul className="grid grid-cols-2 gap-1.5">
              {["About", "Experience", "Skills", "Projects", "Education", "Contact"].map((i) => (
                <li key={i}>
                  <a
                    href={`#${i.toLowerCase()}`}
                    className="text-sm text-ink-600 dark:text-ink-300 hover:text-primary-500 transition-colors"
                  >
                    {i}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-[11px] font-mono uppercase tracking-widest text-muted mb-3">
              Connect
            </p>
            <div className="flex gap-2">
              {social.map(({ Icon, href, label }) => (
                <motion.a
                  key={label}
                  href={href}
                  target={href?.startsWith("http") ? "_blank" : undefined}
                  rel="noopener noreferrer"
                  whileHover={{ y: -2 }}
                  aria-label={label}
                  className="w-10 h-10 flex items-center justify-center rounded-lg border border-ink-200 dark:border-ink-800 text-ink-700 dark:text-ink-200 hover:text-primary-500 hover:border-primary-400/60 transition-colors"
                >
                  <Icon size={16} />
                </motion.a>
              ))}
            </div>
          </div>
        </div>

        <div className="divider mb-6" />

        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-muted font-mono">
            © {year} Kethan Vemuri · Crafted with React, Tailwind &amp; care.
          </p>
          <a
            href="#top"
            className="inline-flex items-center gap-2 text-xs font-mono text-muted hover:text-primary-500 transition-colors"
          >
            Back to top <FaArrowUp size={10} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
