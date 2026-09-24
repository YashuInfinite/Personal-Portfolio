import { Project, EducationItem, ExperienceItem, Testimonial, SkillCategory } from '../types';

export const PERSONAL_INFO = {
  name: "Yashwanth R",
  title: "AWS Certified Cloud Practitioner & Automation Engineer",
  email: "yashwanth6678@gmail.com",
  github: "https://github.com/YashuInfinite",
  linkedin: "https://www.linkedin.com/in/yashwanth-r-750b7918b",
  websitesHub: "https://yashwanthwebproject.netlify.app/",
  githubInsightTool: "https://githubinfofetcher.netlify.app/",
  kaggle: "https://www.kaggle.com/yashu1wwww/code",
  greasyfork: "https://greasyfork.org/en/users/1405453-yashwanth-r",
  resumeUrl: "https://drive.google.com/file/d/1c27N6qWkuzpxTqA_gX2W0_lJzZdDVHdF/view",
  researchPaperUrl: "https://zenodo.org/records/21846323",
  knowMoreUrl: "https://www.google.com/search?q=yashu1wwww&oq=yashu&gs_lcrp=EgZjaHJvbWUqBggBEEUYOzIGCAAQRRg8MgYIARBFGDsyBggCEEUYOTIGCAMQRRg8MgYIBBBFGDwyBggFEEUYPNIBCDE2OTNqMGo3qAIAsAIA&sourceid=chrome&source=chrome.ob&ie=UTF-8",
  location: "Tumkur, Karnataka, India",
  stats: {
    totalProjects: "50+",
    webApps: "12+",
    autoActions: "1,000+",
  },
  bio: `I am a certified AWS Cloud Practitioner with a strong passion for automation, web development, and building innovative tools on the internet. Over the years, I have successfully completed 50+ projects, including 12+ web projects. My work spans across developing automation tools such as a YouTube auto-engagement system (100+ auto likes, subscriptions, and 500+ auto comments) and a Medium real-time followers count tool. I have also built Express.js-based applications like an IMDb Movies and TV Shows Ratings Tracker, which fetches and displays real-time ratings and vote counts, and a BookMyShow Movie Interest and Ratings Tool, which provides live insights into audience interests and feedback. With expertise in AWS, Express.js, Node.js, Puppeteer, Cheerio, and frontend technologies, I focus on creating impactful solutions that combine automation, real-time analytics, and scalable web development.`
};

export const PROJECTS: Project[] = [
  {
    id: "github-insight",
    title: "GitHub Insight & Analytics Tool",
    category: "web",
    description: "An interactive web utility providing deep insights, repository statistics, and user profile analytics directly from GitHub APIs.",
    longDescription: "Features real-time profile scraping, commit history breakdown, repository star analysis, and interactive stats visualization.",
    liveUrl: "https://githubinfofetcher.netlify.app/",
    githubUrl: "https://github.com/YashuInfinite",
    tags: ["React", "GitHub API", "Tailwind CSS", "Analytics"],
    metrics: "1,000+ Profiles Searched",
    featured: true,
    imageBg: "from-cyan-500/20 via-blue-600/20 to-slate-900",
    iconName: "Github"
  },
  {
    id: "web-projects-hub",
    title: "My Web Development Hub",
    category: "web",
    description: "A centralized portal showcasing 12+ full-featured responsive web application projects and frontend experiments.",
    longDescription: "Includes dynamic interactive dashboards, utility web suites, real-time UI components, and API integration tools.",
    liveUrl: "https://yashwanthwebproject.netlify.app/",
    githubUrl: "https://github.com/YashuInfinite",
    tags: ["JavaScript", "HTML5/CSS3", "Express.js", "Web Apps"],
    metrics: "12+ Web Projects Showcase",
    featured: true,
    imageBg: "from-purple-500/20 via-indigo-600/20 to-slate-900",
    iconName: "Code"
  },
  {
    id: "yt-auto-engagement",
    title: "YouTube Auto-Engagement Engine",
    category: "automation",
    description: "An automated web orchestration bot capable of automated video likes, channel subscriptions, and automated comment pipelines.",
    longDescription: "Built with Puppeteer & Node.js to streamline social growth workflows. Handled 100+ automated likes/subscriptions and 500+ auto comments with stealth anti-detection techniques.",
    githubUrl: "https://github.com/YashuInfinite/100-YouTube-Auto-Likes",
    tags: ["Puppeteer", "Node.js", "Automation", "Bot Dev"],
    metrics: "100+ Likes & 500+ Comments",
    featured: true,
    imageBg: "from-red-500/20 via-rose-600/20 to-slate-900",
    iconName: "Youtube"
  },
  {
    id: "medium-follower-tracker",
    title: "Medium Real-Time Followers Tool",
    category: "analytics",
    description: "A live follower monitoring and notification system for Medium content creators to track reader growth in real time.",
    longDescription: "Parses Medium follower counts dynamically using Cheerio & Express.js, offering a micro-badge widget for blogs and personal landing pages.",
    githubUrl: "https://github.com/YashuInfinite",
    tags: ["Cheerio", "Express.js", "Node.js", "Real-Time"],
    metrics: "Live Analytics Engine",
    featured: false,
    imageBg: "from-amber-500/20 via-orange-600/20 to-slate-900",
    iconName: "TrendingUp"
  },
  {
    id: "imdb-ratings-tracker",
    title: "Express.js IMDb Ratings & Vote Tracker",
    category: "analytics",
    description: "An Express backend utility that dynamically scrapes and fetches live IMDb movie/TV show ratings and vote counts.",
    longDescription: "Utilizes Express.js and Cheerio web scraping to query IMDb title IDs, extract weighted sentiment ratings, vote counts, and metadata for live media dashboards.",
    githubUrl: "https://github.com/YashuInfinite/IMDb-Movies-TV-Shows-Rating-Finder-Tool",
    tags: ["Express.js", "Cheerio", "Node.js", "Web Scraping"],
    metrics: "Real-time Movie Insights",
    featured: true,
    imageBg: "from-yellow-500/20 via-amber-600/20 to-slate-900",
    iconName: "Film"
  },
  {
    id: "bookmyshow-interest-tool",
    title: "BookMyShow Movie Interest & Feedback Tool",
    category: "analytics",
    description: "An audience interest tracking tool providing real-time insights into theatrical release hype, user votes, and upcoming movie sentiment.",
    longDescription: "Scrapes BookMyShow interest metrics to generate live trend scores and analytics for film enthusiasts and ticket buyers.",
    githubUrl: "https://github.com/YashuInfinite/BookMyShow-Movies-Rating-Interest-Count-Tool",
    tags: ["Puppeteer", "Express.js", "Node.js", "Sentiment Analysis"],
    metrics: "Live Ticket Hype Metrics",
    featured: false,
    imageBg: "from-emerald-500/20 via-teal-600/20 to-slate-900",
    iconName: "Ticket"
  }
];

export const EDUCATION_ITEMS: EducationItem[] = [
  {
    id: "mca",
    period: "2024 - 2026",
    degree: "MCA (Master of Computer Applications)",
    institution: "Shridevi Institute of Engineering & Technology, Tumkur",
    boardOrUniversity: "Affiliated to VTU, Belagavi",
    details: "Advanced Cloud Architecture, Software Engineering, Distributed Systems, Web Application Development & AI Technologies.",
    icon: "GraduationCap"
  },
  {
    id: "bca",
    period: "2019 - 2022",
    degree: "BCA (Bachelor of Computer Applications)",
    institution: "Government First Grade College, Tumkur",
    boardOrUniversity: "Tumkur University",
    details: "Focus on Computer Science Fundamentals, Database Systems, Web Programming, Python, Data Structures & Networking.",
    icon: "BookOpen"
  },
  {
    id: "puc",
    period: "2016 - 2018",
    degree: "PUC - PCMB (Pre-University Education)",
    institution: "Vasavi Composite PU College, Tumkur",
    boardOrUniversity: "Department of Pre-University Education",
    details: "Physics, Chemistry, Mathematics, and Biology.",
    icon: "School"
  }
];

export const EXPERIENCE_ITEMS: ExperienceItem[] = [
  {
    id: "cloud-automation-eng",
    role: "AWS Cloud & Automation Specialist",
    period: "2022 - Present",
    description: "Specializing in cloud infrastructure provisioning, web scrapers, automated bot scripting, and Express.js analytical tools.",
    achievements: [
      "Certified AWS Cloud Practitioner focusing on cloud architecture and automated deployments.",
      "Engineered automated social media engagement systems with 100+ likes/subscriptions and 500+ auto comments.",
      "Developed Express.js analytics engines parsing real-time IMDb ratings and BookMyShow audience feedback.",
      "Contributed 3+ open-source tools to GitHub and completed 50+ individual technical projects."
    ],
    technologies: ["AWS", "Express.js", "Node.js", "Puppeteer", "Cheerio", "Python", "Docker"]
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "toufik",
    author: "Toufik",
    role: "Colleague",
    avatar: "/images/toufik.jpg",
    feedback: "Great work on the project! I was impressed with the attention to detail and the level of creativity.",
    gradient: "from-cyan-500 to-blue-600"
  },
  {
    id: "shankar",
    author: "Shankar",
    role: "Colleague",
    avatar: "/images/shankar.jpg",
    feedback: "Your project was amazing! I loved the way you incorporated different elements to create a cohesive design.",
    gradient: "from-purple-500 to-indigo-600"
  },
  {
    id: "pavan",
    author: "Pavan",
    role: "Colleague",
    avatar: "/images/pavan.jpg",
    feedback: "I was blown away by your project; the level of creativity was fantastic! I really liked it.",
    gradient: "from-emerald-500 to-teal-600"
  },
  {
    id: "manoj",
    author: "Manoj",
    role: "Colleague",
    avatar: "/images/manoj.jpg",
    feedback: "I liked his bot development skills on social media, the way he implements new projects and tries out projects.",
    gradient: "from-amber-500 to-orange-600"
  }
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    categoryName: "Cloud & DevOps",
    skills: [
      { name: "AWS (Certified)", level: "Cloud Practitioner", icon: "Cloud", bgGlow: "rgba(249, 115, 22, 0.2)" },
      { name: "Docker", level: "Containerization", icon: "Box", bgGlow: "rgba(14, 165, 233, 0.2)" },
      { name: "Ubuntu", level: "Linux Administration", icon: "Terminal", bgGlow: "rgba(234, 88, 12, 0.2)" },
      { name: "Git & GitHub", level: "Version Control", icon: "GitBranch", bgGlow: "rgba(225, 29, 72, 0.2)" },
    ]
  },
  {
    categoryName: "Automation & Backend",
    skills: [
      { name: "Node.js & Express.js", level: "Backend Development", icon: "Server", bgGlow: "rgba(34, 197, 94, 0.2)" },
      { name: "Puppeteer & Cheerio", level: "Web Scraping & Bots", icon: "Bot", bgGlow: "rgba(168, 85, 247, 0.2)" },
      { name: "Python", level: "Automation & Scripting", icon: "Code2", bgGlow: "rgba(59, 130, 246, 0.2)" },
      { name: "Selenium", level: "Browser Automation", icon: "Cpu", bgGlow: "rgba(20, 184, 166, 0.2)" },
    ]
  },
  {
    categoryName: "Web Frontend & CMS",
    skills: [
      { name: "HTML5 & CSS3", level: "Responsive Web", icon: "Layout", bgGlow: "rgba(239, 68, 68, 0.2)" },
      { name: "JavaScript & React", level: "Interactive UI", icon: "Atom", bgGlow: "rgba(6, 182, 212, 0.2)" },
      { name: "WordPress", level: "CMS & Site Design", icon: "Globe", bgGlow: "rgba(59, 130, 246, 0.2)" },
      { name: "Visual Studio Code", level: "IDE Mastery", icon: "Laptop", bgGlow: "rgba(124, 58, 237, 0.2)" },
    ]
  },
  {
    categoryName: "Specializations & Tools",
    skills: [
      { name: "ML & DL", level: "Machine & Deep Learning", icon: "Brain", bgGlow: "rgba(236, 72, 153, 0.2)" },
      { name: "Canva", level: "UI & Asset Design", icon: "Palette", bgGlow: "rgba(14, 165, 233, 0.2)" },
    ]
  }
];
