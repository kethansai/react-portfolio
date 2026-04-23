// Resume generator that mirrors the structure of kethan_vemuri_resume.pdf
// Strictly constrained to 2 pages (A4). Monochrome palette (black + grey only).

const PAGE = { w: 210, h: 297 }; // A4 mm
const MARGIN = { x: 16, top: 14, bottom: 14 };
const COLOR = {
  ink: [17, 17, 17], // near-black body text
  heading: [0, 0, 0], // pure black for headings
  muted: [90, 90, 90], // grey for secondary text (dates, locations, meta)
  rule: [160, 160, 160], // grey hairline rules
};

const header = {
  name: "Kethan Vemuri",
  contacts: [
    { text: "Kethansai77@gmail.com", href: "mailto:Kethansai77@gmail.com" },
    { text: "+91 79892 16155", href: "tel:+917989216155" },
    { text: "kethan.dev", href: "https://kethan.dev" },
    { text: "Bangalore, Karnataka, India" },
  ],
};

const summary =
  "Full Stack and DevOps Engineer with 6+ years of experience building scalable, production-grade web applications and automated infrastructure pipelines. Proven track record at Infineon Technologies, TCS, and GlobalFoundries in delivering end-to-end solutions using Vue.js 3, React.js, Python FastAPI, .NET 8, Docker, Kubernetes, and Argo CD. Achieved 60% reduction in deployment time through CI/CD automation and a 40%+ productivity improvement via AI-assisted engineering. Passionate about systems design, developer productivity, and delivering quality at scale.";

const skills = [
  ["Languages", "JavaScript (ES6+), TypeScript, Python, C#, PHP, HTML5, CSS3, SQL"],
  ["Frontend", "Vue.js 3, React.js, Angular, Vite, Pinia, Redux, Tailwind CSS, SASS, Bootstrap"],
  ["Backend", "Python FastAPI, Flask, .NET 8, Node.js, Express.js, GraphQL, RESTful APIs"],
  ["Databases", "MySQL, PostgreSQL, MongoDB, Oracle, SQL Server"],
  ["DevOps & Cloud", "Docker, Kubernetes, Red Hat OpenShift, Argo CD, GitLab CI/CD, Bitbucket Pipelines, Nginx, Apache Tomcat"],
  ["Tools & Practices", "Git, GitHub, SVN, Vitest, Agile/Scrum, Code Review, AI-assisted Development, Prompt Engineering"],
];

const experience = [
  {
    role: "Staff Engineer",
    company: "Infineon Technologies Pvt Ltd",
    location: "Bangalore, Karnataka",
    dates: "Sept 2024 – Present",
    bullets: [
      "Architect and deliver full-stack applications using Vue.js 3 + Vite + Pinia + TypeScript with comprehensive Vitest unit and integration test coverage, ensuring reliability for semiconductor workflow tools.",
      "Design and maintain RESTful and GraphQL backend services using Python FastAPI and .NET 8, integrated with MySQL databases serving 500+ internal users.",
      "Serve as Build Master, leading CI/CD automation across Bitbucket, GitLab, Docker, Red Hat OpenShift, and Argo CD, cutting deployment cycle time by 60%.",
      "Drive containerization strategy for microservices, enabling horizontal scaling and zero-downtime deployments in a production Kubernetes environment.",
      "Mentor junior developers through pair programming, architectural guidance, and structured code reviews, improving team code quality and velocity.",
      "Leverage AI prompt engineering techniques to automate repetitive development tasks, achieving a 40%+ increase in individual and team productivity.",
    ],
  },
  {
    role: "Senior Application Developer",
    company: "Mirafra Technologies Pvt Ltd (Client: Infineon Technologies)",
    location: "Bangalore, Karnataka",
    dates: "Sept 2022 – Aug 2024",
    bullets: [
      "Built enterprise-scale web applications using Vite + Vue.js 3 + Pinia + TypeScript, serving Infineon's global engineering teams with complex data visualization and workflow automation.",
      "Engineered robust backend microservices with Python FastAPI, MySQL, and GraphQL, optimizing query performance and reducing API response latency by 35%.",
      "Owned end-to-end CI/CD pipeline configuration and Docker containerization strategies, standardizing multi-environment deployments across dev, staging, and production.",
      "Collaborated with cross-functional teams across India and Germany, delivering bi-weekly releases under Agile/Scrum methodology with consistent on-time delivery.",
      "Conducted technical design reviews and contributed to internal engineering documentation, accelerating onboarding time for new team members.",
    ],
  },
  {
    role: "System Engineer",
    company: "Tata Consultancy Services (Client: ManpowerGroup)",
    location: "Bangalore, Karnataka",
    dates: "Apr 2021 – Sept 2022",
    bullets: [
      "Developed and maintained React.js single-page applications integrated with the Bullhorn staffing platform, supporting thousands of daily active recruiter users across North America.",
      "Implemented Redux for predictable state management and React Router for dynamic client-side navigation, improving application responsiveness and UX.",
      "Built a reusable, accessible component library reducing new feature implementation time by 25% across the engineering team.",
      "Integrated RESTful web services and worked closely with QA and business analysts to fulfill functional and non-functional requirements for high-stakes staffing workflows.",
    ],
  },
  {
    role: "Software Engineer",
    company: "GlobalFoundries",
    location: "Bangalore, Karnataka",
    dates: "Jul 2020 – Apr 2021",
    bullets: [
      "Led full migration of a legacy Java-based Wafer Disposition System to a modern React.js architecture, improving load times by 50% and dramatically reducing maintenance burden.",
      "Designed responsive, accessible interfaces using HTML5, CSS3, Tailwind CSS, and SASS, meeting WCAG 2.1 accessibility standards for manufacturing process engineers.",
      "Implemented advanced UI features including dynamic pagination, filtering, sorting, and form validation, with MongoDB integration for real-time data operations.",
      "Developed a shared utility and component library adopted across three internal engineering products, enabling future scalability and code reuse.",
    ],
  },
  {
    role: "Software Developer Intern",
    company: "Stickman Services",
    location: "Vadodara, Gujarat",
    dates: "Feb 2020 – Jul 2020",
    bullets: [
      "Designed and developed the company's responsive marketing website using Bootstrap, jQuery, AJAX, and JSON, ensuring cross-browser compatibility and mobile responsiveness.",
      "Collaborated with design architects to implement interactive UI features and meet web accessibility standards, resulting in a polished production launch.",
    ],
  },
];

const achievements = [
  "60% Deployment Time Reduction: Designed and implemented end-to-end CI/CD automation using GitLab, Bitbucket, Docker, Kubernetes, and Argo CD at Infineon Technologies.",
  "40%+ Productivity Gain: Introduced AI-assisted development workflows and prompt engineering strategies, adopted team-wide across engineering squads.",
  "Legacy Modernization: Successfully led migration of Java monolith Wafer Disposition System to React.js microservices, cutting load time by 50% and reducing bug rate significantly.",
  "35% API Latency Reduction: Optimized GraphQL and FastAPI backend queries, improving user-facing response times for internal analytics dashboards.",
  "Cross-Continental Delivery: Delivered bi-weekly releases under Agile methodology in collaboration with engineering teams across India and Germany, maintaining a 98%+ on-time delivery rate.",
];

const education = [
  {
    degree: "Master of Technology – Computer Science (Work Integrated Learning Programme)",
    school: "Birla Institute of Technology and Science (BITS), Pilani",
    meta: "Ongoing",
  },
  {
    degree: "Bachelor of Technology – Computer Science and Engineering",
    school: "Sri Venkateswara College of Engineering, JNTUA, Tirupati",
    meta: "2020 · CGPA: 7.08",
  },
];

const projects = [
  {
    title: "Semiconductor Workflow Automation Platform",
    stack: "Vue.js 3, Python FastAPI, GraphQL, Docker, Kubernetes",
    bullets: [
      "Architected a full-stack internal platform at Infineon automating semiconductor wafer disposition workflows, reducing manual processing time by 45% for global engineering teams.",
      "Deployed on Red Hat OpenShift with Argo CD GitOps pipelines enabling continuous, zero-downtime delivery.",
    ],
  },
  {
    title: "Staffing & Recruitment SPA",
    stack: "React.js, Redux, RESTful APIs, Bullhorn Integration",
    bullets: [
      "Delivered a feature-rich React.js SPA for ManpowerGroup's global recruiting teams, integrating Bullhorn ATS APIs and supporting thousands of daily active users across North America.",
    ],
  },
  {
    title: "Wafer Disposition System Modernization",
    stack: "React.js, MongoDB, Tailwind CSS, Node.js",
    bullets: [
      "Migrated a legacy Java application to a modern React.js + MongoDB stack at GlobalFoundries, improving system performance by 50% and reducing technical debt significantly.",
    ],
  },
];

export async function generateResumePdf() {
  const { jsPDF } = await import("jspdf");
  const doc = new jsPDF({ unit: "mm", format: "a4", compress: true });
  const contentW = PAGE.w - MARGIN.x * 2;
  let y = MARGIN.top;

  // --- Type scale & spacing tokens (all in mm) ----------------------------
  const FS = {
    name: 20,
    section: 10.5,
    role: 10,
    body: 9,
    small: 8.8,
  };
  const pt2mm = (pt) => pt * 0.3528;
  const lh = (size, gap = 1.2) => pt2mm(size) + gap; // line-height for a size
  const SPACE = {
    afterHeader: 4,
    beforeSection: 3.8,
    afterSectionRule: 2.6,
    afterSection: 2.2,
    afterJob: 2,
    afterBlock: 1.4,
  };

  // --- Primitives ---------------------------------------------------------
  const setFont = (style = "normal", size = FS.body, color = COLOR.ink) => {
    doc.setFont("helvetica", style);
    doc.setFontSize(size);
    doc.setTextColor(color[0], color[1], color[2]);
  };

  // Hard 2-page cap: if we run out of space on page 2, stop drawing silently.
  const ensureSpace = (needed) => {
    if (y + needed > PAGE.h - MARGIN.bottom) {
      if (doc.internal.getNumberOfPages() >= 2) return false;
      doc.addPage();
      y = MARGIN.top;
    }
    return true;
  };

  const drawRule = (yPos, color = COLOR.rule, width = 0.2) => {
    doc.setDrawColor(color[0], color[1], color[2]);
    doc.setLineWidth(width);
    doc.line(MARGIN.x, yPos, PAGE.w - MARGIN.x, yPos);
  };

  const sectionTitle = (label) => {
    y += SPACE.beforeSection;
    if (!ensureSpace(lh(FS.section) + 2)) return;
    setFont("bold", FS.section, COLOR.heading);
    doc.text(label.toUpperCase(), MARGIN.x, y);
    y += lh(FS.section, 0.8);
    y += SPACE.afterSectionRule;
  };

  const paragraph = (text, { size = FS.body, style = "normal", color = COLOR.ink, gap = 1.3, indent = 0 } = {}) => {
    setFont(style, size, color);
    const line = lh(size, gap);
    const lines = doc.splitTextToSize(text, contentW - indent);
    for (const l of lines) {
      if (!ensureSpace(line)) return;
      doc.text(l, MARGIN.x + indent, y);
      y += line;
    }
  };

  const BULLET_INDENT = 4.2;
  const bullet = (text, { size = FS.small, gap = 1.25 } = {}) => {
    setFont("normal", size, COLOR.ink);
    const line = lh(size, gap);
    const lines = doc.splitTextToSize(text, contentW - BULLET_INDENT);
    lines.forEach((l, i) => {
      if (!ensureSpace(line)) return;
      if (i === 0) {
        doc.text("•", MARGIN.x + 1, y);
      }
      doc.text(l, MARGIN.x + BULLET_INDENT, y);
      y += line;
    });
  };

  // Two-column row: left text bold, right text muted, right-aligned.
  const twoColRow = (
    left,
    right,
    { size = FS.body, leftStyle = "bold", rightStyle = "normal", leftColor = COLOR.ink, rightColor = COLOR.muted, gap = 1.3 } = {},
  ) => {
    const line = lh(size, gap);
    if (!ensureSpace(line)) return;
    setFont(rightStyle, size, rightColor);
    const rightW = right ? doc.getTextWidth(right) : 0;
    setFont(leftStyle, size, leftColor);
    doc.text(left, MARGIN.x, y);
    if (right) {
      setFont(rightStyle, size, rightColor);
      doc.text(right, PAGE.w - MARGIN.x - rightW, y);
    }
    y += line;
  };

  // --- Header -------------------------------------------------------------
  setFont("bold", FS.name, COLOR.heading);
  const nameW = doc.getTextWidth(header.name);
  doc.text(header.name, (PAGE.w - nameW) / 2, y + 7);
  y += 13; // space between name and contact line

  // Render contact line as centered segments with a separator. Segments that
  // have an `href` become clickable link annotations.
  const SEP = "   •   ";
  setFont("normal", FS.body, COLOR.muted);
  const sepW = doc.getTextWidth(SEP);
  const segWidths = header.contacts.map((c) => doc.getTextWidth(c.text));
  const totalW =
    segWidths.reduce((a, b) => a + b, 0) + sepW * (header.contacts.length - 1);
  let x = (PAGE.w - totalW) / 2;
  header.contacts.forEach((c, i) => {
    if (c.href) {
      setFont("normal", FS.body, COLOR.ink);
      doc.textWithLink(c.text, x, y, { url: c.href });
      setFont("normal", FS.body, COLOR.muted);
    } else {
      doc.text(c.text, x, y);
    }
    x += segWidths[i];
    if (i < header.contacts.length - 1) {
      doc.text(SEP, x, y);
      x += sepW;
    }
  });
  y += 3;
  y += SPACE.afterHeader;

  // --- Professional Summary ----------------------------------------------
  sectionTitle("Professional Summary");
  paragraph(summary, { size: FS.body, gap: 1.35 });
  y += SPACE.afterSection;

  // --- Technical Skills (aligned label column) ---------------------------
  sectionTitle("Technical Skills");
  {
    const size = FS.small;
    const line = lh(size, 1.3);
    // Fixed label column so all values align.
    setFont("bold", size);
    const longestLabel = skills.reduce(
      (w, [l]) => Math.max(w, doc.getTextWidth(`${l}:`)),
      0,
    );
    const labelColW = longestLabel + 2.5;
    skills.forEach(([label, value]) => {
      if (!ensureSpace(line)) return;
      setFont("bold", size, COLOR.ink);
      doc.text(`${label}:`, MARGIN.x, y);
      setFont("normal", size, COLOR.ink);
      const wrapped = doc.splitTextToSize(value, contentW - labelColW);
      wrapped.forEach((l, i) => {
        if (i > 0) {
          y += line;
          if (!ensureSpace(line)) return;
        }
        doc.text(l, MARGIN.x + labelColW, y);
      });
      y += line;
    });
  }
  y += SPACE.afterSection;

  // --- Professional Experience -------------------------------------------
  sectionTitle("Professional Experience");
  experience.forEach((job, idx) => {
    // Keep at least the role+company rows together.
    if (!ensureSpace(lh(FS.role) + lh(FS.body) + lh(FS.small))) return;
    twoColRow(job.role, job.dates, {
      size: FS.role,
      leftStyle: "bold",
      leftColor: COLOR.heading,
      gap: 1.2,
    });
    twoColRow(job.company, job.location, {
      size: FS.body,
      leftStyle: "italic",
      leftColor: COLOR.ink,
      gap: 1.25,
    });
    y += 0.8;
    job.bullets.forEach((b) => bullet(b));
    if (idx < experience.length - 1) y += SPACE.afterJob;
  });
  y += SPACE.afterSection;

  // --- Key Achievements --------------------------------------------------
  sectionTitle("Key Achievements");
  achievements.forEach((a) => bullet(a));
  y += SPACE.afterSection;

  // --- Education ---------------------------------------------------------
  sectionTitle("Education");
  education.forEach((e, i) => {
    twoColRow(e.degree, e.meta, {
      size: FS.small,
      leftStyle: "bold",
      leftColor: COLOR.heading,
      gap: 1.25,
    });
    twoColRow(e.school, "", {
      size: FS.small,
      leftStyle: "italic",
      leftColor: COLOR.ink,
      gap: 1.25,
    });
    if (i < education.length - 1) y += SPACE.afterBlock;
  });
  y += SPACE.afterSection;

  // --- Notable Projects --------------------------------------------------
  sectionTitle("Notable Projects");
  projects.forEach((p, i) => {
    const size = FS.small;
    const line = lh(size, 1.25);
    if (!ensureSpace(line * 2)) return;
    // Title (bold) + stack (grey italic) on the same line, wrapping to next
    // line if it overflows.
    setFont("bold", size, COLOR.heading);
    doc.text(p.title, MARGIN.x, y);
    const titleW = doc.getTextWidth(p.title);
    const stackText = `  ·  ${p.stack}`;
    setFont("italic", size, COLOR.muted);
    const stackMaxW = contentW - titleW;
    const stackLines = doc.splitTextToSize(stackText, stackMaxW);
    doc.text(stackLines[0], MARGIN.x + titleW, y);
    y += line;
    // If the stack wrapped, print remaining lines indented.
    for (let k = 1; k < stackLines.length; k++) {
      if (!ensureSpace(line)) return;
      doc.text(stackLines[k], MARGIN.x, y);
      y += line;
    }
    p.bullets.forEach((b) => bullet(b));
    if (i < projects.length - 1) y += SPACE.afterBlock;
  });

  // Safety net: never exceed 2 pages.
  while (doc.internal.getNumberOfPages() > 2) {
    doc.deletePage(doc.internal.getNumberOfPages());
  }

  if (typeof window === "undefined") {
    return { pages: doc.internal.getNumberOfPages(), buffer: doc.output("arraybuffer") };
  }
  doc.save("Kethan_Vemuri_Resume.pdf");
}