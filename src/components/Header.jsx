import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaBars, FaTimes } from "react-icons/fa";
import ThemeToggle from "./ThemeToggle";
import Logo from "./Logo";

const navItems = [
  { name: "About", href: "#about" },
  { name: "Experience", href: "#experience" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "CodeSpace", href: "#codespace" },
  { name: "Education", href: "#education" },
  { name: "Contact", href: "#contact" },
];

const Header = ({ theme, toggleTheme }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [active, setActive] = useState("#about");

  useEffect(() => {
    const onScroll = () => {
      setIsScrolled(window.scrollY > 20);

      // active-section tracking
      const y = window.scrollY + 120;
      let current = "#about";
      for (const item of navItems) {
        const el = document.querySelector(item.href);
        if (el && el.offsetTop <= y) current = item.href;
      }
      setActive(current);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (e, href) => {
    e.preventDefault();
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
    setIsMobileMenuOpen(false);
  };

  return (
    <motion.header
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 no-print ${
        isScrolled ? "py-3" : "py-5"
      }`}
    >
      <div className="container flex items-center justify-between gap-4">
        {/* Logo */}
        <motion.a
          href="#top"
          whileHover={{ scale: 1.04 }}
          className="group flex items-center gap-2.5 font-display font-bold text-ink-900 dark:text-ink-50"
        >
          <Logo size="md" />
          <span className="hidden sm:inline text-base tracking-tight">
            kethan<span className="text-primary-500">.</span>dev
          </span>
        </motion.a>

        {/* Desktop nav pill */}
        <nav className="hidden md:flex items-center">
          <div className="glass rounded-full px-2 py-1.5 flex items-center gap-1 shadow-soft">
            {navItems.map((item) => {
              const isActive = active === item.href;
              return (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={(e) => scrollTo(e, item.href)}
                  className="relative px-3.5 py-1.5 text-sm font-medium text-ink-700 dark:text-ink-200 hover:text-ink-900 dark:hover:text-white transition-colors"
                >
                  {isActive && (
                    <motion.span
                      layoutId="nav-active"
                      className="absolute inset-0 rounded-full bg-gradient-to-r from-primary-500/15 to-accent-500/15 border border-primary-400/30"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                  <span className="relative">{item.name}</span>
                </a>
              );
            })}
          </div>
        </nav>

        {/* Right side */}
        <div className="flex items-center gap-2">
          <a
            href="#contact"
            onClick={(e) => scrollTo(e, "#contact")}
            className="hidden md:inline-flex btn-primary !px-4 !py-2 text-sm"
          >
            Hire me
          </a>
          <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
          <button
            onClick={() => setIsMobileMenuOpen((s) => !s)}
            className="md:hidden w-10 h-10 flex items-center justify-center rounded-lg border border-ink-200 dark:border-ink-800 bg-white/70 dark:bg-ink-900/70 text-ink-700 dark:text-ink-200"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <FaTimes size={18} /> : <FaBars size={18} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="md:hidden container mt-3"
          >
            <div className="glass rounded-2xl p-3 flex flex-col gap-1 shadow-soft">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={(e) => scrollTo(e, item.href)}
                  className={`px-4 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                    active === item.href
                      ? "bg-primary-500/10 text-primary-600 dark:text-primary-400"
                      : "text-ink-700 dark:text-ink-200 hover:bg-ink-100 dark:hover:bg-ink-800"
                  }`}
                >
                  {item.name}
                </a>
              ))}
              <a
                href="#contact"
                onClick={(e) => scrollTo(e, "#contact")}
                className="btn-primary mt-1 justify-center"
              >
                Hire me
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Header;
