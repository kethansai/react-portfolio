import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { skills } from "../data/portfolioData";

const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const skillCategories = Object.entries(skills);

  return (
    <section
      id="skills"
      className="py-20 px-4 bg-gradient-to-br from-white via-primary-50/30 to-blue-50/30 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 print-section relative overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute top-1/4 left-0 w-64 h-64 bg-primary-200/30 dark:bg-primary-900/20 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-0 w-80 h-80 bg-blue-200/30 dark:bg-blue-900/20 rounded-full blur-3xl" />

      <div className="container mx-auto max-w-6xl relative z-10">
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
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary-600 to-blue-600 dark:from-primary-400 dark:to-blue-400 bg-clip-text text-transparent">
              Technical Skills
            </h2>
          </motion.div>
          <div className="w-20 sm:w-24 h-1 bg-gradient-to-r from-primary-600 to-blue-600 mx-auto rounded-full mb-4" />
          <p className="text-base sm:text-lg text-gray-600 dark:text-gray-400">
            Comprehensive expertise across modern web technologies
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          {skillCategories.map(([category, skillList], categoryIndex) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: categoryIndex * 0.1, duration: 0.6 }}
              whileHover={{ y: -10, scale: 1.03 }}
              className="group bg-white dark:bg-gray-800 p-4 sm:p-6 rounded-2xl shadow-lg hover:shadow-2xl 
                       transition-all duration-300 border border-gray-100 dark:border-gray-700 print-section relative overflow-hidden"
            >
              {/* Gradient Background on Hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary-500/5 to-blue-500/5 dark:from-primary-500/10 dark:to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              <div className="relative z-10">
                <div className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-r from-primary-500 to-blue-500 rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold text-sm sm:text-base">
                      {categoryIndex + 1}
                    </span>
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                    {category}
                  </h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {skillList.map((skill, skillIndex) => (
                    <motion.span
                      key={skillIndex}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={isInView ? { opacity: 1, scale: 1 } : {}}
                      transition={{
                        delay: categoryIndex * 0.1 + skillIndex * 0.05,
                      }}
                      whileHover={{ scale: 1.15, y: -2 }}
                      className="px-3 py-1.5 sm:px-4 sm:py-2 bg-gradient-to-r from-gray-100 to-gray-50 dark:from-gray-700 dark:to-gray-600 
                               text-gray-700 dark:text-gray-300 rounded-full text-xs sm:text-sm font-medium shadow-sm 
                               hover:shadow-md hover:from-primary-100 hover:to-blue-100 dark:hover:from-primary-900/30 
                               dark:hover:to-blue-900/30 transition-all cursor-default"
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
