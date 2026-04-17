import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { FaBriefcase, FaMapMarkerAlt } from "react-icons/fa";
import { experience } from "../data/portfolioData";
import SectionHeading from "./SectionHeading";

const Experience = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="experience"
      className="section bg-ink-50/60 dark:bg-ink-950/60 print-section print-break-before"
    >
      <div className="absolute inset-0 bg-dotgrid opacity-30 pointer-events-none" />
      <div className="container relative z-10">
        <SectionHeading
          eyebrow="02 — Experience"
          title="A track record of"
          highlight="compounding impact."
          description="Six years across product, platform, and enterprise teams — always leaving the codebase better than I found it."
        />

        <div ref={ref} className="relative max-w-4xl mx-auto">
          {/* Spine */}
          <div className="absolute left-5 sm:left-6 top-2 bottom-2 w-px bg-gradient-to-b from-primary-400/60 via-accent-400/40 to-transparent" />

          <ol className="space-y-8">
            {experience.map((job, i) => (
              <motion.li
                key={`${job.company}-${i}`}
                initial={{ opacity: 0, y: 24 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: i * 0.08, duration: 0.55 }}
                className="relative pl-14 sm:pl-16"
              >
                {/* Node */}
                <span className="absolute left-5 sm:left-6 -translate-x-1/2 top-6 flex items-center justify-center">
                  <span className="absolute w-5 h-5 rounded-full bg-primary-400/20 animate-pulse-ring" />
                  <span className="relative w-3 h-3 rounded-full bg-gradient-to-br from-primary-500 to-accent-500 ring-4 ring-white dark:ring-ink-950" />
                </span>

                <div className="group rounded-2xl border border-ink-200 dark:border-ink-800 bg-white dark:bg-ink-900 p-5 sm:p-6 shadow-soft hover:border-primary-400/50 transition-colors">
                  <div className="flex flex-wrap items-start justify-between gap-3 mb-3">
                    <div>
                      <p className="text-[11px] font-mono uppercase tracking-widest text-primary-500">
                        {job.period}
                      </p>
                      <h3 className="mt-1 font-display text-lg sm:text-xl font-semibold text-ink-900 dark:text-white">
                        {job.position}
                      </h3>
                      <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-sm text-muted mt-1">
                        <span className="inline-flex items-center gap-1.5">
                          <FaBriefcase className="text-ink-400" />
                          <span className="font-medium text-ink-700 dark:text-ink-200">
                            {job.company}
                          </span>
                        </span>
                        <span className="inline-flex items-center gap-1.5">
                          <FaMapMarkerAlt className="text-ink-400" />
                          {job.location}
                        </span>
                      </div>
                    </div>
                  </div>

                  <ul className="grid sm:grid-cols-2 gap-x-6 gap-y-2 mt-4">
                    {job.responsibilities.map((r, j) => (
                      <li
                        key={j}
                        className="flex items-start gap-2 text-sm text-ink-700 dark:text-ink-300"
                      >
                        <span className="mt-2 w-1.5 h-1.5 rounded-full bg-gradient-to-r from-primary-500 to-accent-500 flex-shrink-0" />
                        <span>{r}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
};

export default Experience;
