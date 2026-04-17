import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { FaGraduationCap, FaAward } from "react-icons/fa";
import { education } from "../data/portfolioData";
import SectionHeading from "./SectionHeading";

const Education = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="education" className="section print-section">
      <div className="absolute inset-0 bg-dotgrid opacity-30 mask-radial-fade pointer-events-none" />
      <div className="container relative z-10">
        <SectionHeading
          eyebrow="05 — Education"
          title="Formal training,"
          highlight="continuous learning."
          description="Degrees set the foundation; the real classroom is production."
        />

        <div ref={ref} className="grid sm:grid-cols-2 gap-5 max-w-5xl mx-auto">
          {education.map((edu, i) => {
            const ongoing = edu.status.toLowerCase().includes("currently");
            return (
              <motion.div
                key={edu.degree}
                initial={{ opacity: 0, y: 24 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: i * 0.08, duration: 0.55 }}
                whileHover={{ y: -4 }}
                className="group rounded-2xl border border-ink-200 dark:border-ink-800 bg-white dark:bg-ink-900 p-5 sm:p-6 hover:border-primary-400/50 transition-colors"
              >
                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-primary-500/15 to-accent-500/15 border border-primary-400/20 text-primary-500 flex items-center justify-center flex-shrink-0">
                    <FaGraduationCap size={18} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-display font-semibold text-ink-900 dark:text-white">
                      {edu.degree}
                    </h3>
                    <p className="text-sm text-muted mt-1">{edu.institution}</p>
                    <div className="flex flex-wrap gap-2 mt-3">
                      <span
                        className={`chip ${
                          ongoing
                            ? "!text-emerald-600 dark:!text-emerald-400 !border-emerald-400/40"
                            : ""
                        }`}
                      >
                        {ongoing && (
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                        )}
                        {edu.status}
                      </span>
                      {edu.grade && (
                        <span className="chip !text-amber-600 dark:!text-amber-400 !border-amber-400/40">
                          <FaAward /> {edu.grade}
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Education;
