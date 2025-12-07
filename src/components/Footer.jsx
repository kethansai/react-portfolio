import { motion } from "framer-motion";
import {
  FaHeart,
  FaGithub,
  FaLinkedin,
  FaWhatsapp,
  FaEnvelope,
} from "react-icons/fa";
import { socialLinks } from "../data/portfolioData";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 dark:bg-black text-white py-8 sm:py-12 px-4 no-print">
      <div className="container mx-auto max-w-6xl">
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 mb-6 sm:mb-8">
          {/* About */}
          <div className="sm:col-span-2 md:col-span-1">
            <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4">
              Kethan Vemuri
            </h3>
            <p className="text-sm sm:text-base text-gray-400">
              Full Stack Developer & DevOps Engineer passionate about building
              scalable applications and modern web solutions.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4">
              Quick Links
            </h3>
            <ul className="space-y-1.5 sm:space-y-2">
              {[
                "About",
                "Experience",
                "Skills",
                "Projects",
                "Education",
                "Contact",
              ].map((item) => (
                <li key={item}>
                  <a
                    href={`#${item.toLowerCase()}`}
                    className="text-sm sm:text-base text-gray-400 hover:text-primary-400 transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4">
              Connect
            </h3>
            <div className="flex gap-3 sm:gap-4">
              <motion.a
                href={socialLinks.github}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2, y: -5 }}
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="GitHub"
              >
                <FaGithub size={24} className="sm:text-[28px]" />
              </motion.a>
              <motion.a
                href={socialLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2, y: -5 }}
                className="text-gray-400 hover:text-blue-400 transition-colors"
                aria-label="LinkedIn"
              >
                <FaLinkedin size={24} className="sm:text-[28px]" />
              </motion.a>
              <motion.a
                href={socialLinks.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2, y: -5 }}
                className="text-gray-400 hover:text-green-400 transition-colors"
                aria-label="WhatsApp"
              >
                <FaWhatsapp size={24} className="sm:text-[28px]" />
              </motion.a>
              <motion.a
                href={socialLinks.email}
                whileHover={{ scale: 1.2, y: -5 }}
                className="text-gray-400 hover:text-red-400 transition-colors"
                aria-label="Email"
              >
                <FaEnvelope size={24} className="sm:text-[28px]" />
              </motion.a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 pt-6 sm:pt-8 text-center">
          <p className="text-xs sm:text-sm text-gray-400 flex flex-wrap items-center justify-center gap-2">
            <span>© {currentYear} Kethan Vemuri.</span>
            <span className="flex items-center gap-2">
              Built with <FaHeart className="text-red-500" /> using React &
              Tailwind CSS
            </span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
