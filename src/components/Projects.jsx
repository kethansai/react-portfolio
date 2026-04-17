import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { FaGithub, FaExternalLinkAlt, FaArrowRight } from "react-icons/fa";
import { projects } from "../data/portfolioData";
import SectionHeading from "./SectionHeading";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.06 } },
};
const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.45 } },
};

const Projects = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [filter, setFilter] = useState("All");

  const categories = ["All", ...new Set(projects.map((p) => p.category))];
  const filtered =
    filter === "All" ? projects : projects.filter((p) => p.category === filter);

  return (
    <section
      id="projects"
      className="section bg-ink-50/60 dark:bg-ink-950/60 print-section print-break-before"
    >
      <div className="absolute inset-0 bg-dotgrid opacity-30 pointer-events-none" />
      <div className="container relative z-10">
        <SectionHeading
          eyebrow="04 — Work"
          title="Selected"
          highlight="projects & experiments."
          description="A curated sample of products, tools, and weekend hacks. Full archive on GitHub."
        />

        {/* Filters */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="flex flex-wrap gap-2 mb-10 no-print"
        >
          {categories.map((c) => {
            const isActive = filter === c;
            return (
              <button
                key={c}
                onClick={() => setFilter(c)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-mono uppercase tracking-wider border transition-all ${
                  isActive
                    ? "border-primary-400 text-primary-500 bg-primary-500/10"
                    : "border-ink-200 dark:border-ink-800 text-ink-600 dark:text-ink-400 hover:text-ink-900 dark:hover:text-white hover:border-primary-400/50"
                }`}
              >
                {c}
              </button>
            );
          })}
        </motion.div>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"
        >
          {filtered.map((project, i) => (
            <motion.article
              key={project.name}
              variants={itemVariants}
              whileHover={{ y: -6 }}
              className="gradient-border h-full"
            >
              <div className="gb-inner flex flex-col h-full p-5 sm:p-6">
                {/* Header */}
                <div className="flex items-start justify-between mb-4">
                  <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-primary-500">
                    {project.category}
                  </span>
                  <span className="text-[10px] font-mono text-muted">
                    #{String(i + 1).padStart(2, "0")}
                  </span>
                </div>

                {/* Title + description */}
                <h3 className="font-display text-lg sm:text-xl font-semibold text-ink-900 dark:text-white mb-2 group-hover:text-primary-500 transition-colors">
                  {project.name}
                </h3>
                <p className="text-sm text-muted leading-relaxed mb-5 line-clamp-3">
                  {project.description}
                </p>

                {/* Tech */}
                <div className="flex flex-wrap gap-1.5 mb-5 mt-auto">
                  {project.tech.map((t) => (
                    <span key={t} className="chip">
                      {t}
                    </span>
                  ))}
                </div>

                {/* Actions */}
                <div className="flex items-center gap-4 pt-4 border-t border-ink-200/70 dark:border-ink-800">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-sm text-ink-700 dark:text-ink-200 hover:text-primary-500 transition-colors"
                  >
                    <FaGithub /> Source
                  </a>
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-sm text-ink-700 dark:text-ink-200 hover:text-accent-500 transition-colors"
                    >
                      <FaExternalLinkAlt /> Live
                    </a>
                  )}
                  <span className="ml-auto text-primary-500 group-hover:translate-x-1 transition-transform">
                    <FaArrowRight size={12} />
                  </span>
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>

        {filtered.length === 0 && (
          <div className="text-center py-16 text-muted">
            No projects in this category yet.
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;
