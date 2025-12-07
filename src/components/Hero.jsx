import { motion } from "framer-motion";
import {
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaGithub,
  FaLinkedin,
  FaDownload,
  FaWhatsapp,
} from "react-icons/fa";
import { personalInfo, socialLinks } from "../data/portfolioData";

const Hero = () => {
  const handlePrint = () => {
    window.print();
  };

  return (
    <section className="min-h-screen flex items-center justify-center pt-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-primary-50 via-blue-50 to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 90, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute top-1/4 left-1/4 w-48 h-48 sm:w-72 sm:h-72 bg-primary-200/20 dark:bg-primary-900/10 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            rotate: [90, 0, 90],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute bottom-1/4 right-1/4 w-64 h-64 sm:w-96 sm:h-96 bg-blue-200/20 dark:bg-blue-900/10 rounded-full blur-3xl"
        />
      </div>

      <div className="container mx-auto relative z-10">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col md:flex-row items-center justify-center gap-8 sm:gap-12 md:gap-16"
          >
            {/* Profile Image Section */}
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative flex-shrink-0"
            >
              {/* Animated rings around image */}
              <motion.div
                animate={{
                  rotate: 360,
                }}
                transition={{
                  duration: 20,
                  repeat: Infinity,
                  ease: "linear",
                }}
                className="absolute inset-0 -m-4"
              >
                <div className="w-full h-full rounded-full border-4 border-dashed border-primary-400/30 dark:border-primary-600/30"></div>
              </motion.div>

              <motion.div
                animate={{
                  rotate: -360,
                }}
                transition={{
                  duration: 25,
                  repeat: Infinity,
                  ease: "linear",
                }}
                className="absolute inset-0 -m-8"
              >
                <div className="w-full h-full rounded-full border-4 border-dotted border-blue-400/20 dark:border-blue-600/20"></div>
              </motion.div>

              {/* Gradient glow effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-primary-500 via-blue-500 to-purple-500 rounded-full blur-2xl opacity-30 animate-pulse"></div>

              {/* Profile image container */}
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="relative w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 sm:border-8 border-white dark:border-gray-800 shadow-2xl bg-gradient-to-br from-primary-100 to-blue-100 dark:from-gray-700 dark:to-gray-600"
              >
                {/* Placeholder with initials - Replace with your image */}
                {/* <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-primary-500 via-blue-500 to-purple-500">
                  <span className="text-8xl md:text-9xl font-bold text-white">
                    {personalInfo.name.split(' ').map(n => n[0]).join('')}
                  </span>
                </div> */}

                {/* Uncomment and use this when you add your image */}
                <img
                  src="/images/profile.jpg"
                  alt={personalInfo.name}
                  className="w-full h-full object-cover"
                />
              </motion.div>

              {/* Floating badge */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1, duration: 0.5 }}
                whileHover={{ scale: 1.1, rotate: 5 }}
                className="absolute -bottom-4 -right-4 px-6 py-3 bg-white dark:bg-gray-800 rounded-full shadow-xl border-4 border-white dark:border-gray-700"
              >
                <span className="text-2xl">👋</span>
              </motion.div>
            </motion.div>

            {/* Text Content */}
            <div className="text-center md:text-left flex-1">
              <motion.h1
                className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold mb-4 text-gray-900 dark:text-white"
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                {personalInfo.name}
              </motion.h1>

              <motion.h2
                className="text-xl sm:text-2xl md:text-3xl lg:text-4xl bg-gradient-to-r from-primary-600 via-blue-600 to-purple-600 dark:from-primary-400 dark:via-blue-400 dark:to-purple-400 bg-clip-text text-transparent mb-6 font-bold"
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4, duration: 0.8 }}
              >
                {personalInfo.title}
              </motion.h2>

              <motion.div
                className="flex flex-col sm:flex-row flex-wrap justify-center md:justify-start gap-3 sm:gap-4 mb-8"
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5, duration: 0.8 }}
              >
                <motion.a
                  href={socialLinks.email}
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center justify-center gap-2 px-4 sm:px-6 py-2.5 sm:py-3 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-full shadow-lg hover:shadow-xl transition-all text-sm sm:text-base"
                >
                  <FaEnvelope className="text-red-500 flex-shrink-0" />
                  <span className="truncate">{personalInfo.email}</span>
                </motion.a>
                <motion.a
                  href={`tel:${personalInfo.phone}`}
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center justify-center gap-2 px-4 sm:px-6 py-2.5 sm:py-3 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-full shadow-lg hover:shadow-xl transition-all text-sm sm:text-base"
                >
                  <FaPhone className="text-green-500 flex-shrink-0" />{" "}
                  {personalInfo.phone}
                </motion.a>
              </motion.div>

              <motion.div
                className="flex items-center justify-center md:justify-start gap-2 mb-8 text-gray-600 dark:text-gray-400"
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.6, duration: 0.8 }}
              >
                <FaMapMarkerAlt />
                <span className="text-sm">{personalInfo.location}</span>
              </motion.div>

              <motion.div
                className="flex flex-col sm:flex-row flex-wrap justify-center md:justify-start gap-3 sm:gap-4 mb-8 no-print"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7, duration: 0.8 }}
              >
                <motion.a
                  href={socialLinks.email}
                  whileHover={{
                    scale: 1.05,
                    boxShadow: "0 10px 30px rgba(59, 130, 246, 0.3)",
                  }}
                  whileTap={{ scale: 0.95 }}
                  className="px-6 sm:px-8 py-2.5 sm:py-3 bg-gradient-to-r from-primary-600 to-blue-600 text-white rounded-full font-semibold 
                         shadow-lg flex items-center justify-center gap-2 hover:from-primary-700 hover:to-blue-700 transition-all text-sm sm:text-base"
                >
                  <FaEnvelope /> Email Me
                </motion.a>
                <motion.button
                  onClick={handlePrint}
                  whileHover={{
                    scale: 1.05,
                    boxShadow: "0 10px 30px rgba(107, 114, 128, 0.3)",
                  }}
                  whileTap={{ scale: 0.95 }}
                  className="px-6 sm:px-8 py-2.5 sm:py-3 bg-gradient-to-r from-gray-800 to-gray-900 dark:from-gray-700 dark:to-gray-800 text-white rounded-full 
                         font-semibold shadow-lg flex items-center justify-center gap-2 transition-all text-sm sm:text-base"
                >
                  <FaDownload /> Resume
                </motion.button>
              </motion.div>

              <motion.div
                className="flex justify-center md:justify-start gap-4 sm:gap-6 no-print"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.9, duration: 0.8 }}
              >
                <motion.a
                  href={socialLinks.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.3, rotate: 360 }}
                  whileTap={{ scale: 0.9 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="w-12 h-12 sm:w-14 sm:h-14 flex items-center justify-center bg-white dark:bg-gray-800 rounded-full shadow-lg hover:shadow-xl transition-shadow"
                >
                  <FaGithub
                    size={24}
                    className="text-gray-800 dark:text-white sm:text-[28px]"
                  />
                </motion.a>
                <motion.a
                  href={socialLinks.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.3, rotate: 360 }}
                  whileTap={{ scale: 0.9 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="w-12 h-12 sm:w-14 sm:h-14 flex items-center justify-center bg-white dark:bg-gray-800 rounded-full shadow-lg hover:shadow-xl transition-shadow"
                >
                  <FaLinkedin
                    size={24}
                    className="text-blue-600 dark:text-blue-400 sm:text-[28px]"
                  />
                </motion.a>
                <motion.a
                  href={socialLinks.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.3, rotate: 360 }}
                  whileTap={{ scale: 0.9 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="w-12 h-12 sm:w-14 sm:h-14 flex items-center justify-center bg-white dark:bg-gray-800 rounded-full shadow-lg hover:shadow-xl transition-shadow"
                >
                  <FaWhatsapp
                    size={24}
                    className="text-green-500 sm:text-[28px]"
                  />
                </motion.a>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
