import { motion, useInView } from "framer-motion";
import { useRef } from "react";

/**
 * Consistent section heading used across the portfolio.
 * - `eyebrow`: short mono label above title (e.g., "02 — About")
 * - `title`: main heading; supports a second highlighted word via `highlight`
 * - `description`: supporting copy
 */
const SectionHeading = ({
  eyebrow,
  title,
  highlight,
  description,
  align = "center",
}) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  const alignment =
    align === "left" ? "text-left items-start" : "text-center items-center mx-auto";

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`max-w-2xl flex flex-col gap-4 mb-12 sm:mb-16 ${alignment}`}
    >
      {eyebrow && <span className="eyebrow">{eyebrow}</span>}
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-[1.1] text-ink-900 dark:text-ink-50">
        {title}
        {highlight && (
          <>
            {" "}
            <span className="text-gradient">{highlight}</span>
          </>
        )}
      </h2>
      {description && (
        <p className="text-base sm:text-lg text-muted leading-relaxed">
          {description}
        </p>
      )}
    </motion.div>
  );
};

export default SectionHeading;
