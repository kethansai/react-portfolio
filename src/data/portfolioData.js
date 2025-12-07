// Calculate years of experience from career start date
const careerStartDate = new Date("2020-02-01"); // First job start date
const currentDate = new Date();
const totalMonths =
  (currentDate.getFullYear() - careerStartDate.getFullYear()) * 12 +
  (currentDate.getMonth() - careerStartDate.getMonth());
const yearsOfExperience = (totalMonths / 12).toFixed(1);

export const personalInfo = {
  name: "KETHAN VEMURI",
  title: "Full Stack Developer | DevOps Engineer",
  email: "Kethansai77@gmail.com",
  phone: "+91 79892 16155",
  portfolio: "https://kethan.dev",
  location:
    "#10-33, Nalapareddigari Palli, Bhakarapet, Tirupati, Andhra Pradesh - 517501",
  summary: `Accomplished Full Stack Developer with ${yearsOfExperience} years of comprehensive experience in web development, specializing in modern frameworks and DevOps practices. Proven expertise in Vue.js, .NET 8, Python FastAPI, and containerized application deployment. Strong background in building scalable, responsive applications with emphasis on CI/CD automation and cloud-native solutions.`,
  coreCompetencies: [
    "Frontend: Vue.js 3, React.js, Angular with TypeScript",
    "Backend: .NET 8, Python FastAPI, Node.js",
    "DevOps: Kubernetes, Docker, Argo CD, GitLab/Bitbucket CI/CD",
    "AI Integration: Prompt Engineering for 40%+ efficiency improvement",
  ],
};

export const skills = {
  "Frontend Technologies": [
    "HTML5",
    "CSS3",
    "JavaScript",
    "TypeScript",
    "Vue.js 3",
    "React.js",
    "Angular",
    "Bootstrap 4",
    "Tailwind CSS",
    "SASS",
  ],
  "Backend Frameworks": [
    ".NET 8",
    "Python FastAPI",
    "Flask",
    "Node.js",
    "Express.js",
    "PHP",
  ],
  Databases: [
    "MySQL",
    "PostgreSQL",
    "MongoDB",
    "Oracle",
    "SQL Server",
    "GraphQL",
  ],
  "DevOps & Cloud": [
    "Docker",
    "Kubernetes",
    "Red Hat OpenShift",
    "Argo CD",
    "CI/CD Pipelines",
  ],
  "Development Tools": [
    "Visual Studio Code",
    "Eclipse",
    "Git",
    "SVN",
    "Bitbucket",
    "GitHub",
  ],
  "Testing & Debugging": ["Vitest", "Chrome Developer Tools", "Firebug"],
  "AI & Automation": [
    "Prompt Engineering",
    "AI-assisted development (40%+ efficiency boost)",
  ],
  "Web Services": ["RESTful APIs", "JSON", "AJAX"],
  Servers: ["Apache Tomcat", "Nginx"],
};

export const experience = [
  {
    position: "STAFF ENGINEER",
    company: "Infineon Technologies Pvt Ltd",
    location: "Bangalore, Karnataka",
    period: "Sept 2024 – Present",
    responsibilities: [
      "Architect and develop applications using Vue.js 3 framework with comprehensive Vitest unit testing",
      "Design backend services with Python FastAPI and .NET 8, integrating MySQL and GraphQL",
      "Lead CI/CD automation using Bitbucket, GitLab, Docker, Red Hat OpenShift, and Argo CD as Build Master",
      "Implement containerized solutions for scalable application deployment",
    ],
  },
  {
    position: "SR APPLICATION DEVELOPER",
    company: "Mirafra Technologies Pvt Ltd",
    location: "Bangalore, Karnataka (Client: Infineon Technologies)",
    period: "Sept 2022 - Aug 2024",
    responsibilities: [
      "Developed enterprise applications using Vite + Vue.js 3 + Pinia + TypeScript stack",
      "Built robust backend APIs with Python FastAPI, MySQL, and GraphQL integration",
      "Managed CI/CD pipelines and containerization strategies for multiple projects",
      "Collaborated with cross-functional teams to deliver high-quality software solutions",
    ],
  },
  {
    position: "SYSTEM ENGINEER",
    company: "Tata Consultancy Services",
    location: "Bangalore, Karnataka (Client: ManpowerGroup)",
    period: "Apr 2021 - Sept 2022",
    responsibilities: [
      "Developed React.js single-page applications for Bullhorn staffing platform",
      "Implemented Redux for state management and React Router for navigation",
      "Created reusable UI components and integrated RESTful web services",
      "Collaborated with testing teams and business analysts for requirement fulfilment",
    ],
  },
  {
    position: "SOFTWARE ENGINEER",
    company: "GlobalFoundries",
    location: "Bangalore, Karnataka",
    period: "Jul 2020 - Apr 2021",
    responsibilities: [
      "Led migration of Java-based Wafer Disposition System to React.js architecture",
      "Designed responsive interfaces using HTML5, CSS3, Tailwind CSS, and SASS",
      "Implemented pagination, filtering, and validation components with MongoDB integration",
      "Developed reusable utility functions and components for future scalability",
    ],
  },
  {
    position: "SOFTWARE DEVELOPER (Internship)",
    company: "Stickman Services",
    location: "Vadodara, Gujarat",
    period: "Feb 2020 - Jul 2020",
    responsibilities: [
      "Designed and developed company website with responsive design principles",
      "Implemented Bootstrap layouts and ensured cross-browser compatibility",
      "Created interactive features using jQuery, AJAX, and JSON",
      "Collaborated with design architects to meet accessibility standards",
    ],
  },
];

export const education = [
  {
    degree: "Master of Technology (Computer Science)",
    institution: "Birla Institute of Technology & Sciences (BITS) – Pilani",
    status: "Currently pursuing (WILP)",
    grade: "",
  },
  {
    degree: "Bachelor of Technology (Computer Science Engineering)",
    institution: "Sri Venkateswara College of Engineering (JNTUA) - Tirupati",
    status: "Completed",
    grade: "CGPA: 7.08",
  },
  {
    degree: "Intermediate (MPC)",
    institution: "Narayana Junior College (BIEAP) - Tirupati",
    status: "Completed",
    grade: "93%",
  },
  {
    degree: "Secondary School Certificate",
    institution: "Zilla Parishad High School - Bhakarapeta",
    status: "Completed",
    grade: "CGPA: 9.3",
  },
];

export const achievements = [
  "Successfully migrated legacy Java applications to modern React.js architecture",
  "Implemented automated CI/CD pipelines reducing deployment time by 60%",
  "Led containerization initiatives using Docker and Kubernetes for improved scalability",
  "Achieved 40%+ productivity improvement through AI-assisted development and prompt engineering",
  "Mentored junior developers and conducted technical reviews for code quality assurance",
];

export const projects = [
  {
    name: "Afonso Management LLC",
    description:
      "A comprehensive management solution built with Vue.js for business operations and client management.",
    tech: ["Vue.js", "JavaScript"],
    github: "https://github.com/kethansai/afonso-management-llc",
    category: "Web Application",
  },
  {
    name: "Vue Portfolio",
    description:
      "Modern portfolio website showcasing projects and skills with Vue.js 3 and responsive design.",
    tech: ["Vue.js", "CSS", "JavaScript"],
    github: "https://github.com/kethansai/vue-portfolio",
    category: "Portfolio",
  },
  {
    name: "Unthink",
    description:
      "Creative web project focused on innovative design and user experience.",
    tech: ["CSS", "HTML", "JavaScript"],
    github: "https://github.com/kethansai/unthink",
    category: "Web Design",
  },
  {
    name: "No More Pesticides",
    description:
      "Environmental awareness platform built with Vue.js to promote organic farming.",
    tech: ["Vue.js", "JavaScript"],
    github: "https://github.com/kethansai/nomorepesticides",
    category: "Social Impact",
  },
  {
    name: "Vue3 Gaushala",
    description:
      "Cow shelter management system with modern Vue 3 architecture and real-time updates.",
    tech: ["Vue.js 3", "Vite", "JavaScript"],
    github: "https://github.com/kethansai/vue3-gaushala",
    category: "Management System",
  },
  {
    name: "Vue3 Music App",
    description:
      "Feature-rich music streaming application with playlist management and audio controls.",
    tech: ["Vue.js 3", "HTML", "JavaScript"],
    github: "https://github.com/kethansai/Vue3-MusicApp",
    category: "Entertainment",
  },
  {
    name: "Ustore",
    description:
      "E-commerce platform with TypeScript for type-safe shopping experience.",
    tech: ["TypeScript", "React", "Node.js"],
    github: "https://github.com/kethansai/Ustore",
    category: "E-commerce",
  },
  {
    name: "Ustore API",
    description:
      "RESTful API backend for e-commerce operations with authentication and payment integration.",
    tech: ["Node.js", "Express", "MongoDB"],
    github: "https://github.com/kethansai/UstoreAPI",
    category: "Backend API",
  },
  {
    name: "Bullhorn Tool",
    description:
      "Automation tool for Bullhorn ATS platform to streamline recruitment workflows.",
    tech: ["JavaScript", "React", "Node.js"],
    github: "https://github.com/kethansai/bullhorn-tool",
    category: "Automation",
  },
  {
    name: "Little URL",
    description: "URL shortener service with analytics and custom short links.",
    tech: ["EJS", "Node.js", "Express"],
    github: "https://github.com/kethansai/littleurl",
    category: "Utility",
  },
  {
    name: "Food Recipes",
    description:
      "Recipe sharing platform with search, filters, and user-generated content.",
    tech: ["JavaScript", "React", "API Integration"],
    github: "https://github.com/kethansai/food-recipes",
    category: "Lifestyle",
  },
  {
    name: "PurplKart",
    description:
      "Full-stack e-commerce solution with cart management and order processing.",
    tech: ["JavaScript", "Node.js", "MongoDB"],
    github: "https://github.com/kethansai/PurplKart",
    category: "E-commerce",
  },
];

export const socialLinks = {
  github: "https://github.com/kethansai",
  linkedin: "https://www.linkedin.com/in/kethan-vemuri/",
  whatsapp:
    "https://wa.me/917989216155?text=Hi%20Kethan%2C%20I%20would%20like%20to%20discuss%20a%20potential%20opportunity%20with%20you.",
  email: "mailto:kethansai77@gmail.com",
};
