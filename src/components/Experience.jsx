import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { FaBriefcase, FaCalendar, FaMapMarkerAlt } from "react-icons/fa";
import { experience } from "../data/portfolioData";

const Experience = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="experience"
      className="py-20 px-4 bg-gray-50 dark:bg-gray-800 print-section print-break-before"
    >
      <div className="container mx-auto max-w-6xl">
        <motion.h2
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="text-3xl sm:text-4xl font-bold mb-8 sm:mb-12 text-center text-gray-900 dark:text-white px-4"
        >
          Professional Experience
        </motion.h2>

        <div className="relative">
          {/* Timeline line */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-primary-200 dark:bg-primary-800" />
          {/* Mobile timeline line */}
          <div className="md:hidden absolute left-4 top-0 bottom-0 w-0.5 bg-primary-200 dark:bg-primary-800" />

          {experience.map((job, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              className={`mb-8 sm:mb-12 flex flex-col md:flex-row gap-8 items-start relative ${
                index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              }`}
            >
              {/* Timeline dot - Desktop */}
              <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-primary-600 dark:bg-primary-400 rounded-full border-4 border-white dark:border-gray-800" />

              {/* Timeline dot - Mobile */}
              <div className="md:hidden absolute left-4 w-3 h-3 bg-primary-600 dark:bg-primary-400 rounded-full border-2 border-white dark:border-gray-800" />

              {/* Content */}
              <div
                className={`md:w-1/2 pl-10 md:pl-0 ${
                  index % 2 === 0 ? "md:pr-12 md:text-right" : "md:pl-12"
                }`}
              >
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="bg-white dark:bg-gray-900 p-4 sm:p-6 rounded-lg shadow-lg print-section"
                >
                  <h3 className="text-lg sm:text-xl font-bold text-primary-600 dark:text-primary-400 mb-2">
                    {job.position}
                  </h3>
                  <div className="flex items-center gap-2 mb-2 text-gray-700 dark:text-gray-300 flex-wrap text-sm sm:text-base">
                    <FaBriefcase className="flex-shrink-0" />
                    <span className="font-semibold">{job.company}</span>
                  </div>
                  <div className="flex items-center gap-2 mb-2 text-gray-600 dark:text-gray-400 flex-wrap text-sm sm:text-base">
                    <FaMapMarkerAlt className="flex-shrink-0" />
                    <span>{job.location}</span>
                  </div>
                  <div className="flex items-center gap-2 mb-4 text-gray-600 dark:text-gray-400 text-sm sm:text-base">
                    <FaCalendar className="flex-shrink-0" />
                    <span>{job.period}</span>
                  </div>
                  <ul className="space-y-2 text-gray-700 dark:text-gray-300 text-left text-sm sm:text-base">
                    {job.responsibilities.map((resp, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="text-primary-600 dark:text-primary-400 mt-1 flex-shrink-0">
                          •
                        </span>
                        <span>{resp}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
