import { motion } from "framer-motion";
import {
  FaGithub,
  FaLinkedin,
  FaDownload,
  FaWhatsapp,
  FaArrowRight,
  FaMapMarkerAlt,
} from "react-icons/fa";
import { HiSparkles } from "react-icons/hi2";
import { personalInfo, socialLinks } from "../data/portfolioData";

const careerStart = new Date("2020-02-01");
const years = (
  (Date.now() - careerStart.getTime()) /
  (1000 * 60 * 60 * 24 * 365.25)
).toFixed(1);

const stats = [
  { label: "Years shipping", value: `${years}+` },
  { label: "Production apps", value: "20+" },
  { label: "CI/CD faster", value: "80%" },
  { label: "AI-boosted delivery", value: "95%" },
];

const TerminalCard = () => (
  <motion.div
    initial={{ opacity: 0, y: 40 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: 0.4, duration: 0.9, ease: "easeOut" }}
    className="gradient-border w-full max-w-lg shadow-glow"
  >
    <div className="gb-inner overflow-hidden font-mono text-[13px] leading-relaxed">
      <div className="flex items-center gap-2 px-4 py-3 border-b border-ink-200 dark:border-ink-800 bg-ink-50/80 dark:bg-ink-900/80">
        <span className="w-3 h-3 rounded-full bg-red-400/80" />
        <span className="w-3 h-3 rounded-full bg-yellow-400/80" />
        <span className="w-3 h-3 rounded-full bg-green-400/80" />
        <span className="ml-3 text-ink-500 dark:text-ink-400 text-xs">
          ~/kethan — zsh
        </span>
      </div>
      <div className="p-5 space-y-1 text-ink-700 dark:text-ink-200">
        <p>
          <span className="text-primary-500">$</span>{" "}
          <span className="text-ink-900 dark:text-ink-50">whoami</span>
        </p>
        <p className="pl-3 text-muted">staff engineer · full-stack · devops</p>

        <p className="mt-3">
          <span className="text-primary-500">$</span>{" "}
          <span className="text-ink-900 dark:text-ink-50">cat stack.json</span>
        </p>
        <pre className="pl-3 text-muted whitespace-pre-wrap">{`{
  "frontend": ["Vue 3", "React", "TypeScript"],
  "backend":  [".NET 8", "FastAPI", "Node.js"],
  "devops":   ["Docker", "K8s", "ArgoCD", "OpenShift"],
  "ai":       ["Prompt Engineering", "AI-assisted delivery"]
}`}</pre>

        <p className="mt-3">
          <span className="text-primary-500">$</span>{" "}
          <span className="text-ink-900 dark:text-ink-50">status --now</span>
        </p>
        <p className="pl-3">
          <span className="inline-flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-emerald-500">
              open to senior &amp; staff roles
            </span>
          </span>
          <span className="text-ink-400 dark:text-ink-500 animate-blink">▍</span>
        </p>
      </div>
    </div>
  </motion.div>
);

const Hero = () => {
  const handlePrint = () => window.print();

  return (
    <section
      id="top"
      className="relative min-h-screen pt-28 sm:pt-32 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden"
    >
      <div className="aurora" />
      <div className="absolute inset-0 bg-dotgrid mask-radial-fade opacity-70 dark:opacity-60 pointer-events-none" />

      <div className="container relative z-10">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          {/* LEFT */}
          <div className="lg:col-span-7 flex flex-col gap-7">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="flex flex-wrap items-center gap-3"
            >
              <span className="eyebrow shimmer-bg animate-shimmer">
                <span className="relative flex h-2 w-2">
                  <span className="animate-pulse-ring absolute inline-flex h-full w-full rounded-full bg-emerald-400/60" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
                </span>
                Available for new roles
              </span>
              <span className="eyebrow">
                <FaMapMarkerAlt className="text-primary-500" /> Bangalore, IN
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.7 }}
              className="font-display font-bold tracking-tight text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-[1.05]"
            >
              <span className="block text-ink-900 dark:text-ink-50">
                Building{" "}
                <span className="text-gradient">scalable products</span>
              </span>
              <span className="block mt-2 text-ink-700 dark:text-ink-300 text-2xl sm:text-3xl md:text-4xl font-medium">
                across{" "}
                <span className="text-primary-500">frontend</span>,{" "}
                <span className="text-accent-500">backend</span> &amp;{" "}
                <span className="text-primary-500">devops</span>.
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.7 }}
              className="max-w-xl text-base sm:text-lg text-muted leading-relaxed"
            >
              Hi, I&apos;m{" "}
              <span className="text-ink-900 dark:text-ink-50 font-semibold">
                Kethan Vemuri
              </span>{" "}
              — a Staff Engineer turning complex requirements into
              production-grade systems with Vue 3, .NET 8, FastAPI and
              Kubernetes. I care deeply about clean architecture, DX, and
              shipping fast without cutting corners.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.7 }}
              className="flex flex-wrap gap-3 no-print"
            >
              <a href="#projects" className="btn-primary">
                View my work <FaArrowRight />
              </a>
              <button onClick={handlePrint} className="btn-ghost">
                <FaDownload /> Download resume
              </button>
              <a href="#contact" className="btn-ghost">
                <HiSparkles className="text-accent-500" /> Let&apos;s talk
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.45, duration: 0.8 }}
              className="mt-4 grid grid-cols-2 sm:grid-cols-4 gap-px bg-ink-200/60 dark:bg-ink-800 rounded-xl overflow-hidden border border-ink-200 dark:border-ink-800"
            >
              {stats.map((s) => (
                <div
                  key={s.label}
                  className="bg-white dark:bg-ink-900 px-4 py-4"
                >
                  <div className="font-display text-2xl sm:text-3xl font-bold text-gradient">
                    {s.value}
                  </div>
                  <div className="text-[11px] sm:text-xs uppercase tracking-wider text-muted mt-1">
                    {s.label}
                  </div>
                </div>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="flex items-center gap-4 pt-2 no-print"
            >
              <span className="text-xs font-mono uppercase tracking-widest text-muted">
                find me
              </span>
              <span className="divider flex-1 max-w-[60px]" />
              {[
                { href: socialLinks.github, Icon: FaGithub, label: "GitHub" },
                {
                  href: socialLinks.linkedin,
                  Icon: FaLinkedin,
                  label: "LinkedIn",
                },
                {
                  href: socialLinks.whatsapp,
                  Icon: FaWhatsapp,
                  label: "WhatsApp",
                },
              ].map(({ href, Icon, label }) => (
                <motion.a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -3 }}
                  aria-label={label}
                  className="w-10 h-10 flex items-center justify-center rounded-lg border border-ink-200 dark:border-ink-800 bg-white/60 dark:bg-ink-900/60 text-ink-700 dark:text-ink-200 hover:text-primary-500 hover:border-primary-400/60 transition-colors"
                >
                  <Icon size={18} />
                </motion.a>
              ))}
            </motion.div>
          </div>

          {/* RIGHT */}
          <div className="lg:col-span-5 flex flex-col items-center gap-10">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="relative flex flex-col items-center"
            >
              {/* Circular glow halo (constrained to a circle so it doesn't render as a square blur) */}
              <div
                aria-hidden
                className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[22rem] h-[22rem] sm:w-[26rem] sm:h-[26rem] rounded-full bg-[radial-gradient(closest-side,theme(colors.primary.400/35),theme(colors.accent.400/18),transparent_70%)] blur-2xl"
              />

              {/* Avatar with gradient ring */}
              <div className="relative animate-float">
                <div className="p-[3px] rounded-full bg-gradient-to-br from-primary-400 via-accent-400 to-primary-500 shadow-glow">
                  <div className="rounded-full bg-white dark:bg-ink-950 p-1">
                    <div className="w-44 h-44 sm:w-52 sm:h-52 md:w-60 md:h-60 rounded-full overflow-hidden">
                      <img
                        src="/images/profile.jpg"
                        alt={personalInfo.name}
                        className="w-full h-full object-cover"
                        loading="eager"
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Role badge — centered below avatar, not overlapping the ring */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
                className="relative -mt-4 px-4 py-1.5 rounded-full glass text-xs font-mono text-ink-700 dark:text-ink-200 shadow-soft whitespace-nowrap"
              >
                <span className="text-primary-500">role</span>:&nbsp;Staff
                Engineer @ Infineon
              </motion.div>
            </motion.div>

            <TerminalCard />
          </div>
        </div>
      </div>

      <motion.a
        href="#about"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="hidden md:flex absolute bottom-8 left-1/2 -translate-x-1/2 flex-col items-center gap-2 text-xs font-mono text-muted no-print"
      >
        <span className="uppercase tracking-[0.25em]">scroll</span>
        <span className="w-px h-10 bg-gradient-to-b from-ink-400 to-transparent animate-pulse" />
      </motion.a>
    </section>
  );
};

export default Hero;
