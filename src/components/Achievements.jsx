import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { FaTrophy } from "react-icons/fa";
import { achievements } from "../data/portfolioData";

const Achievements = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="achievements"
      className="py-20 px-4 bg-gradient-to-br from-white via-purple-50/30 to-pink-50/30 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 print-section"
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
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary-600 via-purple-600 to-pink-600 dark:from-primary-400 dark:via-purple-400 dark:to-pink-400 bg-clip-text text-transparent">
              Key Achievements
            </h2>
          </motion.div>
          <div className="w-20 sm:w-24 h-1 bg-gradient-to-r from-primary-600 via-purple-600 to-pink-600 mx-auto rounded-full mb-4" />
          <p className="text-base sm:text-lg text-gray-600 dark:text-gray-400">
            Milestones and impact throughout my career
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
          {achievements.map((achievement, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: index * 0.15, duration: 0.6 }}
              whileHover={{ scale: 1.05, y: -8 }}
              className="group bg-white dark:bg-gray-800 p-4 sm:p-6 rounded-2xl shadow-lg hover:shadow-2xl 
                       print-section flex items-start gap-3 sm:gap-4 border border-gray-100 dark:border-gray-700 
                       transition-all duration-300 relative overflow-hidden"
            >
              {/* Gradient overlay on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary-500/5 via-purple-500/5 to-pink-500/5 dark:from-primary-500/10 dark:via-purple-500/10 dark:to-pink-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              <motion.div
                animate={{ rotate: [0, 10, -10, 0] }}
                transition={{ delay: index * 0.2 + 0.5, duration: 0.5 }}
                whileHover={{ scale: 1.2, rotate: 360 }}
                className="text-3xl sm:text-4xl flex-shrink-0 relative z-10"
              >
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full flex items-center justify-center shadow-lg">
                  <FaTrophy className="text-white text-lg sm:text-xl" />
                </div>
              </motion.div>
              <p className="text-sm sm:text-base text-gray-700 dark:text-gray-300 leading-relaxed font-medium relative z-10">
                {achievement}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;
