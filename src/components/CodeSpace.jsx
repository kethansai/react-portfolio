import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  FaExternalLinkAlt,
  FaArrowRight,
  FaRoute,
  FaCode,
  FaProjectDiagram,
  FaTerminal,
  FaBuilding,
  FaTasks,
} from "react-icons/fa";
import SectionHeading from "./SectionHeading";

const features = [
  {
    icon: FaRoute,
    title: "Learning Paths",
    description:
      "10+ role-based paths from Software Intern to Architect — Frontend, Backend, Fullstack, and more.",
  },
  {
    icon: FaCode,
    title: "Languages",
    description:
      "In-depth coverage of 7+ programming languages with runnable examples and best practices.",
  },
  {
    icon: FaProjectDiagram,
    title: "DSA with Visualizations",
    description:
      "54+ data structure & algorithm topics explained with animated, interactive visualizations.",
  },
  {
    icon: FaTerminal,
    title: "Problems & Playground",
    description:
      "15+ coding problems and a built-in multi-language compiler with test cases — no setup required.",
  },
  {
    icon: FaBuilding,
    title: "Interview Prep",
    description:
      "Company-wise interview questions from 16+ top tech firms to sharpen your prep.",
  },
  {
    icon: FaTasks,
    title: "Methodology & System Design",
    description:
      "Agile, Scrum, Kanban, DevOps and system design concepts — explained with clear diagrams.",
  },
];

const stats = [
  { value: "10+", label: "Learning Paths" },
  { value: "7+", label: "Languages" },
  { value: "54+", label: "DSA Topics" },
  { value: "16+", label: "Companies" },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.06 } },
};
const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.45 } },
};

const CodeSpace = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="codespace"
      className="section relative print-section print-break-before"
    >
      <div className="absolute inset-0 bg-dotgrid opacity-30 pointer-events-none" />
      <div className="container relative z-10">
        <SectionHeading
          eyebrow="05 — Featured Product"
          title="CodeSpace —"
          highlight="level up your software engineering skills."
          description="A complete developer learning platform I built for software engineers and new learners — master programming languages, DSA with animated visualizations, system design, methodologies, and ace technical interviews, all in one place."
        />

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="gradient-border mb-10"
        >
          <div className="gb-inner p-6 sm:p-10">
            {/* Header row */}
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 mb-8">
              <div>
                <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-primary-500">
                  Live Platform · Free & Open Source
                </span>
                <h3 className="font-display text-2xl sm:text-3xl font-semibold text-ink-900 dark:text-white mt-2">
                  codespace.kethan.dev
                </h3>
                <p className="text-sm sm:text-base text-muted leading-relaxed mt-3 max-w-2xl">
                  Your complete developer learning platform — interactive
                  playground, animated DSA visualizations, company-wise
                  interview prep, and role-based learning paths from Intern to
                  Architect.
                </p>
              </div>
              <div className="flex flex-wrap gap-3">
                <a
                  href="https://codespace.kethan.dev"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary !px-5 !py-2.5 text-sm inline-flex items-center gap-2"
                >
                  Visit CodeSpace <FaExternalLinkAlt size={12} />
                </a>
                <a
                  href="https://codespace.kethan.dev/playground"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 text-sm rounded-full border border-ink-200 dark:border-ink-800 text-ink-700 dark:text-ink-200 hover:text-primary-500 hover:border-primary-400/50 transition-colors"
                >
                  Try Playground <FaArrowRight size={12} />
                </a>
              </div>
            </div>

            {/* Stats */}
            <motion.div
              variants={itemVariants}
              className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-10"
            >
              {stats.map((s) => (
                <div
                  key={s.label}
                  className="rounded-xl border border-ink-200/70 dark:border-ink-800 bg-white/50 dark:bg-ink-900/40 p-4 text-center"
                >
                  <div className="text-2xl sm:text-3xl font-display font-bold text-gradient">
                    {s.value}
                  </div>
                  <div className="text-[11px] font-mono uppercase tracking-wider text-muted mt-1">
                    {s.label}
                  </div>
                </div>
              ))}
            </motion.div>

            {/* Features grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {features.map((f) => {
                const Icon = f.icon;
                return (
                  <motion.div
                    key={f.title}
                    variants={itemVariants}
                    whileHover={{ y: -4 }}
                    className="rounded-xl border border-ink-200/70 dark:border-ink-800 bg-white/40 dark:bg-ink-900/40 p-5 h-full"
                  >
                    <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary-500/15 to-accent-500/15 border border-primary-400/30 flex items-center justify-center text-primary-500 mb-3">
                      <Icon size={16} />
                    </div>
                    <h4 className="font-display text-base font-semibold text-ink-900 dark:text-white mb-1.5">
                      {f.title}
                    </h4>
                    <p className="text-sm text-muted leading-relaxed">
                      {f.description}
                    </p>
                  </motion.div>
                );
              })}
            </div>

            {/* Tech chips */}
            <div className="flex flex-wrap gap-1.5 mt-8 pt-6 border-t border-ink-200/70 dark:border-ink-800">
              {[
                "React",
                "Vite",
                "TailwindCSS",
                "Interactive Compiler",
                "Animated Visualizations",
                "System Design",
              ].map((t) => (
                <span key={t} className="chip">
                  {t}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CodeSpace;
