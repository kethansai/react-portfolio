import { motion } from "framer-motion";
import { FaSun, FaMoon } from "react-icons/fa";

const ThemeToggle = ({ theme, toggleTheme }) => {
  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={toggleTheme}
      className="w-10 h-10 flex items-center justify-center rounded-lg border border-ink-200 dark:border-ink-800
                 bg-white/70 dark:bg-ink-900/70 text-ink-700 dark:text-ink-200
                 hover:text-primary-500 hover:border-primary-400/60 transition-colors no-print"
      aria-label="Toggle theme"
    >
      {theme === "light" ? <FaMoon size={16} /> : <FaSun size={16} />}
    </motion.button>
  );
};

export default ThemeToggle;
