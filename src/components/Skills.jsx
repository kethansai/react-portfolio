import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  FaCode,
  FaServer,
  FaDatabase,
  FaCloud,
  FaTools,
  FaVial,
  FaRobot,
  FaNetworkWired,
  FaLayerGroup,
} from "react-icons/fa";
import { skills } from "../data/portfolioData";
import SectionHeading from "./SectionHeading";

const iconMap = {
  "Frontend Technologies": FaCode,
  "Backend Frameworks": FaServer,
  Databases: FaDatabase,
  "DevOps & Cloud": FaCloud,
  "Development Tools": FaTools,
  "Testing & Debugging": FaVial,
  "AI & Automation": FaRobot,
  "Web Services": FaNetworkWired,
  Servers: FaLayerGroup,
};

const Skills = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const entries = Object.entries(skills);

  return (
    <section id="skills" className="section print-section">
      <div className="absolute inset-0 bg-dotgrid opacity-30 mask-radial-fade pointer-events-none" />
      <div className="container relative z-10">
        <SectionHeading
          eyebrow="03 — Skills"
          title="A deliberately"
          highlight="T-shaped stack."
          description="Deep in frontend architecture and DevOps, broad across backend, data, and AI tooling — picked for reliability and speed."
        />

        <div
          ref={ref}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5"
        >
          {entries.map(([category, list], i) => {
            const Icon = iconMap[category] || FaCode;
            return (
              <motion.div
                key={category}
                initial={{ opacity: 0, y: 24 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: i * 0.06, duration: 0.55 }}
                whileHover={{ y: -4 }}
                className="group relative rounded-2xl border border-ink-200 dark:border-ink-800 bg-white dark:bg-ink-900 p-5 overflow-hidden"
              >
                <div className="absolute inset-px rounded-[15px] bg-gradient-to-br from-primary-500/0 to-accent-500/0 group-hover:from-primary-500/5 group-hover:to-accent-500/5 transition-colors" />
                <div className="relative">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-primary-500/15 to-accent-500/15 border border-primary-400/20 text-primary-500 flex items-center justify-center">
                      <Icon size={16} />
                    </div>
                    <div>
                      <p className="text-[10px] font-mono uppercase tracking-[0.2em] text-muted">
                        {String(i + 1).padStart(2, "0")} / {String(entries.length).padStart(2, "0")}
                      </p>
                      <h3 className="font-display font-semibold text-ink-900 dark:text-white">
                        {category}
                      </h3>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-1.5">
                    {list.map((skill) => (
                      <span
                        key={skill}
                        className="chip group-hover:border-primary-400/40 transition-colors"
                      >
                        {skill}
                      </span>
                    ))}
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

export default Skills;
