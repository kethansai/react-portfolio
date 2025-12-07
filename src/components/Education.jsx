import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { FaGraduationCap, FaAward } from "react-icons/fa";
import { education } from "../data/portfolioData";

const Education = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="education"
      className="py-20 px-4 bg-gradient-to-br from-gray-50 to-blue-50/50 dark:from-gray-800 dark:to-gray-900 print-section"
    >
      <div className="container mx-auto max-w-6xl">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-8 sm:mb-12 px-4"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={isInView ? { scale: 1 } : {}}
            transition={{ duration: 0.5 }}
            className="inline-block"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary-600 to-blue-600 dark:from-primary-400 dark:to-blue-400 bg-clip-text text-transparent">
              Education
            </h2>
          </motion.div>
          <div className="w-20 sm:w-24 h-1 bg-gradient-to-r from-primary-600 to-blue-600 mx-auto rounded-full" />
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
          {education.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: index * 0.15, duration: 0.6 }}
              whileHover={{ scale: 1.03, y: -8 }}
              className="group bg-white dark:bg-gray-900 p-4 sm:p-6 rounded-2xl shadow-lg hover:shadow-2xl print-section transition-all duration-300 border-l-4 border-primary-500"
            >
              <div className="flex items-start gap-3 sm:gap-4">
                <motion.div
                  whileHover={{ rotate: 360, scale: 1.2 }}
                  transition={{ duration: 0.6 }}
                  className="text-primary-600 dark:text-primary-400 text-3xl sm:text-4xl flex-shrink-0"
                >
                  <FaGraduationCap />
                </motion.div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                    {edu.degree}
                  </h3>
                  <p className="text-sm sm:text-base text-gray-700 dark:text-gray-300 mb-3 font-medium">
                    {edu.institution}
                  </p>
                  <div className="flex items-center gap-2 text-xs sm:text-sm text-gray-600 dark:text-gray-400 flex-wrap">
                    <span
                      className={`px-2.5 sm:px-3 py-1 rounded-full font-semibold ${
                        edu.status === "Currently pursuing (WILP)"
                          ? "bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400"
                          : "bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300"
                      }`}
                    >
                      {edu.status}
                    </span>
                    {edu.grade && (
                      <span className="flex items-center gap-1 px-2.5 sm:px-3 py-1 bg-yellow-100 dark:bg-yellow-900/30 text-yellow-700 dark:text-yellow-400 rounded-full font-semibold">
                        <FaAward className="flex-shrink-0" />
                        {edu.grade}
                      </span>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
