import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { FaTrophy } from "react-icons/fa";
import { achievements } from "../data/portfolioData";
import SectionHeading from "./SectionHeading";

const Achievements = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="achievements"
      className="section bg-ink-50/60 dark:bg-ink-950/60 print-section"
    >
      <div className="absolute inset-0 bg-dotgrid opacity-30 pointer-events-none" />
      <div className="container relative z-10">
        <SectionHeading
          eyebrow="06 — Impact"
          title="Wins that"
          highlight="moved the needle."
          description="Numbers, migrations, and mentorship — the receipts behind the resume."
        />

        <div
          ref={ref}
          className="grid sm:grid-cols-2 gap-4 sm:gap-5 max-w-5xl mx-auto"
        >
          {achievements.map((a, i) => (
            <motion.div
              key={a}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.08, duration: 0.5 }}
              whileHover={{ y: -4 }}
              className="group flex items-start gap-4 rounded-2xl border border-ink-200 dark:border-ink-800 bg-white dark:bg-ink-900 p-5 hover:border-primary-400/50 transition-colors"
            >
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-amber-400 to-orange-500 text-white flex items-center justify-center shadow-soft flex-shrink-0">
                <FaTrophy size={16} />
              </div>
              <p className="text-sm sm:text-base text-ink-700 dark:text-ink-200 leading-relaxed">
                {a}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;
