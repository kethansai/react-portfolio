import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  FaLayerGroup,
  FaServer,
  FaCloud,
  FaRobot,
  FaCheckCircle,
} from "react-icons/fa";
import { personalInfo } from "../data/portfolioData";
import SectionHeading from "./SectionHeading";

const pillars = [
  {
    Icon: FaLayerGroup,
    title: "Frontend Architecture",
    desc: "Vue 3, React, TypeScript. Component systems, state design, testing with Vitest.",
    tone: "from-primary-500/20 to-primary-500/0",
  },
  {
    Icon: FaServer,
    title: "Backend Engineering",
    desc: ".NET 8, Python FastAPI, Node.js. REST + GraphQL, MySQL, PostgreSQL, MongoDB.",
    tone: "from-accent-500/20 to-accent-500/0",
  },
  {
    Icon: FaCloud,
    title: "DevOps & Platform",
    desc: "Docker, Kubernetes, OpenShift, ArgoCD, GitLab/Bitbucket CI/CD as Build Master.",
    tone: "from-primary-500/20 to-accent-500/10",
  },
  {
    Icon: FaRobot,
    title: "AI-Augmented Delivery",
    desc: "Prompt engineering & AI-assisted workflows lifting delivery by 40%+.",
    tone: "from-accent-500/20 to-primary-500/10",
  },
];

const About = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="section print-section">
      <div className="absolute inset-0 bg-dotgrid opacity-40 mask-radial-fade pointer-events-none" />
      <div className="container relative z-10">
        <SectionHeading
          eyebrow="01 — About"
          title="Senior engineer who"
          highlight="ships what matters."
          description="I bridge product intent and production reality — architecting systems that are fast to build, safe to change, and a pleasure to maintain."
        />

        <div
          ref={ref}
          className="grid grid-cols-1 lg:grid-cols-3 gap-5 sm:gap-6 max-w-6xl mx-auto"
        >
          {/* Big summary tile */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7 }}
            className="gradient-border lg:col-span-2 lg:row-span-2"
          >
            <div className="gb-inner p-6 sm:p-8 flex flex-col gap-5">
              <span className="eyebrow w-fit">summary.md</span>
              <p className="text-base sm:text-lg text-ink-700 dark:text-ink-200 leading-relaxed">
                {personalInfo.summary}
              </p>
              <div className="divider" />
              <ul className="grid sm:grid-cols-2 gap-3">
                {personalInfo.coreCompetencies.map((c) => (
                  <li
                    key={c}
                    className="flex items-start gap-2.5 text-sm text-ink-700 dark:text-ink-300"
                  >
                    <FaCheckCircle className="mt-0.5 text-primary-500 flex-shrink-0" />
                    <span>{c}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>

          {/* Pillar tiles */}
          {pillars.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.15 + i * 0.08, duration: 0.6 }}
              whileHover={{ y: -4 }}
              className="group relative rounded-2xl border border-ink-200 dark:border-ink-800 bg-white dark:bg-ink-900 p-5 overflow-hidden"
            >
              <div
                className={`absolute inset-0 bg-gradient-to-br ${p.tone} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
              />
              <div className="relative flex items-start gap-3">
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary-500/15 to-accent-500/15 border border-primary-400/20 text-primary-500 flex items-center justify-center">
                  <p.Icon size={18} />
                </div>
                <div>
                  <h3 className="font-display font-semibold text-ink-900 dark:text-white text-lg">
                    {p.title}
                  </h3>
                  <p className="text-sm text-muted mt-1 leading-relaxed">
                    {p.desc}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
