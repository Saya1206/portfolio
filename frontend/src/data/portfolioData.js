export const portfolioData = {
  personal: {
    name: "Sayali Patil",
    role: "Full Stack Developer",
    subtitle: "React.js | React Native | Node.js | MongoDB",
    avatar: "/sayali_patil.png",
    email: "patilsayali330@gmail.com",
    phone: "+91 8080654418",
    location: "Kolhapur, Maharashtra, India",
    github: "https://github.com/Saya1206",
    linkedin: "https://www.linkedin.com/in/sayali-patil-dev",
    resumeUrl: "/Sayali_Patil_Resume_ATS_Template.pdf",
    shortBio:
      "Passionate Full Stack Developer with hands-on experience building responsive web apps and cross-platform mobile apps using React.js, React Native, Node.js, Express.js, and MongoDB. Specialized in role-based systems, REST APIs, and production deployments.",
    fullBio:
      "I am Sayali Patil, a Full Stack Developer focused on building clean, high-performance web and mobile experiences. With strong expertise in the MERN stack and React Native, I deliver scalable end-to-end applications from database architecture to smooth user interfaces and App Store / Play Store deployments. I bring clear communication, rapid problem solving, and a passion for modern technology."
  },

  stats: [
    { label: "Production Apps", value: "2+", highlight: "iOS & Android" },
    { label: "Core Projects", value: "5+", highlight: "Web & Mobile" },
    { label: "Tech Stack", value: "15+", highlight: "Modern Tools" },
    { label: "B.Tech CGPA", value: "8.57", highlight: "Computer Science" }
  ],

  skillCategories: [
    {
      name: "Frontend Development",
      icon: "Code",
      color: "from-blue-500 to-cyan-500",
      skills: [
        { name: "React.js", level: 95 },
        { name: "JavaScript (ES6+)", level: 92 },
        { name: "React Hooks", level: 90 },
        { name: "Redux Toolkit", level: 88 },
        { name: "React Router", level: 90 },
        { name: "HTML5 / CSS3", level: 95 },
        { name: "Bootstrap", level: 85 },
        { name: "Angular (Beginner)", level: 60 }
      ]
    },
    {
      name: "Mobile App Development",
      icon: "Smartphone",
      color: "from-cyan-500 to-teal-500",
      skills: [
        { name: "React Native (iOS & Android)", level: 92 },
        { name: "Xcode", level: 85 },
        { name: "TestFlight Testing", level: 88 },
        { name: "App Store Deployment", level: 85 },
        { name: "Google Play Release", level: 85 }
      ]
    },
    {
      name: "Backend & Authentication",
      icon: "Server",
      color: "from-indigo-500 to-purple-500",
      skills: [
        { name: "Node.js", level: 88 },
        { name: "Express.js", level: 88 },
        { name: "REST APIs", level: 92 },
        { name: "Role-Based Access Control (RBAC)", level: 90 },
        { name: "Aadhaar-based Authentication", level: 85 }
      ]
    },
    {
      name: "Databases & Cloud",
      icon: "Database",
      color: "from-purple-500 to-pink-500",
      skills: [
        { name: "MongoDB", level: 90 },
        { name: "Firebase", level: 85 },
        { name: "SQL", level: 80 },
        { name: "Vercel Deployment", level: 90 }
      ]
    },
    {
      name: "DevOps & Languages",
      icon: "GitBranch",
      color: "from-amber-500 to-orange-500",
      skills: [
        { name: "Git & GitHub", level: 92 },
        { name: "CI / CD Pipelines", level: 82 },
        { name: "Java", level: 80 },
        { name: "Component Architecture", level: 92 }
      ]
    },
    {
      name: "AI / ML & Specializations",
      icon: "Brain",
      color: "from-emerald-500 to-teal-500",
      skills: [
        { name: "Generative AI", level: 82 },
        { name: "Natural Language Processing (NLP)", level: 78 },
        { name: "Machine Learning Concepts", level: 75 }
      ]
    }
  ],

  experiences: [
    {
      id: "walstar",
      title: "Web Developer",
      company: "Walstar Technologies Pvt. Ltd.",
      type: "Full-time",
      period: "Feb 2026 - Present",
      location: "Kolhapur, India",
      current: true,
      description:
        "Developing responsive web and cross-platform mobile applications with reusable, component-based architectures using React.js and React Native.",
      responsibilities: [
        "Develop responsive web and cross-platform mobile applications using React.js and React Native with reusable, component-based architecture.",
        "Build scalable full-stack applications using Node.js, Express.js, MongoDB, and Firebase.",
        "Implement state management with Redux Toolkit, client routing with React Router, and secure REST API integrations.",
        "Manage CI/CD workflows, Git version control, and cloud application deployments.",
        "Deploy and maintain production iOS applications using Xcode, TestFlight beta testing, and App Store releases."
      ],
      technologies: ["React.js", "React Native", "Node.js", "Express.js", "MongoDB", "Redux Toolkit", "Xcode", "TestFlight", "CI/CD"]
    },
    {
      id: "revolution",
      title: "Full Stack Intern",
      company: "Revolution IT Solutions",
      type: "Internship",
      period: "Jan 2024 - Apr 2024",
      location: "Kolhapur, India",
      current: false,
      description:
        "Contributed to full-stack web engineering, API integration, and modern frontend interfaces in a collaborative agile environment.",
      responsibilities: [
        "Participated in hands-on development of frontend modules using React.js and backend endpoints with Node.js.",
        "Designed clean user interfaces with HTML5, CSS3, and modern JavaScript.",
        "Collaborated with senior engineers on debugging, code reviews, and performance optimizations."
      ],
      technologies: ["React.js", "JavaScript", "HTML5", "CSS3", "Node.js", "REST APIs", "Git"]
    }
  ],

  projects: [
    {
      id: "nri-circle",
      title: "NRI Circle - Parent & Property Care Platform",
      category: "mobile",
      featured: true,
      tag: "Live on iOS & Android",
      description:
        "A comprehensive cross-platform mobile application designed for NRI customers abroad to manage care of their parents, family, and properties in India.",
      longDescription:
        "Built from scratch using React Native. Designed multi-tiered roles (NRI Client, Vendor, Telecaller, Area Admin, Super Admin). Supports one-time and recurring service purchases such as elder care and property inspection. Features end-to-end task workflows where area admins assign tasks, vendors complete on-site work, and telecallers review photo proof and reports before delivering them to clients. Built with customer feedback ratings and deployed live on both Apple App Store and Google Play Store.",
      technologies: ["React Native", "iOS / Xcode", "Android", "TestFlight", "REST APIs", "Push Notifications"],
      playStore: "https://play.google.com/store/apps/details?id=com.nricircle",
      appStore: "https://apps.apple.com/in/app/nri-circle/id6795533441",
      badges: ["Google Play Live", "App Store Live", "Multi-Role RBAC", "Real-time Tracking"]
    },
    {
      id: "loan-app",
      title: "Loan Application Platform (Mobile + Web)",
      category: "fullstack",
      featured: true,
      tag: "FinTech Platform",
      description:
        "Complete full-stack lending ecosystem featuring a cross-platform mobile app for Borrowers/Lenders and a centralized web dashboard for Admins.",
      longDescription:
        "Engineered the full-stack system featuring Aadhaar-based identity verification during registration. Borrowers apply and track loans; lenders inspect detailed borrower financial histories, overdue statuses, and risk profiles. Built comprehensive analytics dashboards with graphs to assist lenders in loan evaluation and approval workflows.",
      technologies: ["React Native", "React.js", "Node.js", "Express.js", "MongoDB", "Aadhaar Auth", "Charts/Analytics"],
      badges: ["Aadhaar Verification", "Interactive Analytics", "Admin Portal", "Loan Engine"]
    },
    {
      id: "mern-shopping",
      title: "MERN Shopping List App",
      category: "fullstack",
      featured: false,
      tag: "Full Stack Web App",
      description:
        "Full-stack shopping management application with dynamic item tracking, Redux state synchronization, and secure RESTful backend APIs.",
      longDescription:
        "Features real-time item addition, categorized views, quantity updates, and deletion. Integrated with Express and MongoDB for reliable persistence and Redux Toolkit for seamless client state management.",
      technologies: ["MongoDB", "Express.js", "React.js", "Node.js", "Redux Toolkit", "Bootstrap", "REST APIs"],
      badges: ["Redux Toolkit", "RESTful API", "Full CRUD", "Responsive UI"]
    },
    {
      id: "blog-platform",
      title: "Modern Blog Platform",
      category: "web",
      featured: false,
      tag: "Web Application",
      description:
        "Feature-rich blogging platform with Firebase Authentication, responsive navigation, and automated CI/CD deployment on Vercel.",
      longDescription:
        "Users can securely register and log in via Firebase Authentication, explore articles, and navigate seamlessly using a persistent modern navigation header. Integrated with automated CI/CD pipelines.",
      technologies: ["React.js", "Firebase Auth", "CI/CD", "Vercel", "CSS3"],
      liveDemo: "https://saya1206.github.io/BlogPlatform/",
      github: "https://github.com/Saya1206/BlogPlatform",
      badges: ["Firebase Auth", "CI/CD Pipeline", "Vercel Live", "Responsive"]
    },
    {
      id: "recipe-app",
      title: "Recipe Discovery App",
      category: "web",
      featured: false,
      tag: "Web Application",
      description:
        "Interactive culinary explorer utilizing the Edamam API to discover recipes by ingredients, dish name, and global cuisines.",
      longDescription:
        "Features instant recipe filtering, ingredient breakdown cards, calorie & nutrition metrics, and step-by-step cooking instructions. Deployed on GitHub Pages.",
      technologies: ["React.js", "Edamam API", "REST API", "GitHub Pages", "CSS Grid"],
      liveDemo: "https://saya1206.github.io/Recipe-App/",
      github: "https://github.com/Saya1206/Recipe-App",
      badges: ["Edamam API", "Live Search", "GitHub Pages Live", "Nutritional Data"]
    }
  ],

  certifications: [
    {
      title: "Google AI Essentials",
      issuer: "Google",
      date: "Sep 2026",
      category: "AI & Innovation",
      description: "Comprehensive essentials in artificial intelligence concepts, generative tools, and productivity applications.",
      badge: "Google Certified"
    },
    {
      title: "Introduction to Generative AI",
      issuer: "Simplilearn (Google Cloud)",
      date: "Aug 2026",
      credentialId: "10668655",
      category: "Generative AI",
      description: "Exploration of large language models, foundational architectures, prompt techniques, and Google Cloud AI services.",
      badge: "Google Cloud Partner"
    },
    {
      title: "Full Stack Web Development Training",
      issuer: "SevenMentor Training Institute",
      date: "2024",
      category: "Full Stack Engineering",
      description: "Intensive training in modern frontend engineering, backend API development, databases, and architectural best practices.",
      badge: "Certified Developer"
    }
  ],

  education: [
    {
      degree: "M.Tech: Computer Science (External)",
      institution: "D. Y. Patil Technical Campus, Talsande - Hatkanagle",
      period: "06/2025 - 06/2027",
      status: "Pursuing",
      description: "Advanced computing, distributed systems, research, and enterprise software engineering.",
      icon: "GraduationCap"
    },
    {
      degree: "B.Tech: Computer Science",
      institution: "D. Y. Patil College of Engineering - Kolhapur",
      period: "08/2020 - 06/2024",
      score: "CGPA : 8.57",
      description: "Graduated with distinction. Strong foundation in Data Structures, Algorithms, Web Technologies, Database Systems, and Object-Oriented Design.",
      icon: "GraduationCap"
    },
    {
      degree: "Higher Secondary Certificate (HSC) - Science",
      institution: "Shahu College, Kagal - Kolhapur",
      period: "06/2018 - 03/2020",
      score: "Percentage : 72.77%",
      description: "Higher secondary education in Physics, Chemistry, Mathematics, and Computer Science.",
      icon: "BookOpen"
    },
    {
      degree: "Secondary School Certificate (SSC)",
      institution: "S.Y. Mane Highschool, Kagal - Kolhapur",
      period: "06/2016 - 04/2018",
      score: "Percentage : 89.40%",
      description: "Excellence in mathematics and sciences with distinguished academic standing.",
      icon: "Award"
    }
  ],

  extracurricular: [
    {
      role: "Coordinator of Coding Club",
      organization: "D. Y. Patil College of Engineering",
      period: "2022 - 2023",
      description: "Organized technical hackathons, coding workshops, and peer mentorship sessions on web technologies and algorithmic problem solving."
    },
    {
      role: "NSS Volunteer (National Service Scheme)",
      organization: "College Chapter",
      period: "2021 - 2022",
      description: "Participated in community outreach initiatives, digital literacy drives, and rural service programs."
    }
  ],

  languages: [
    { name: "English", level: "Professional Working Proficiency", stars: 4 },
    { name: "Hindi", level: "Fluent", stars: 5 },
    { name: "Marathi", level: "Native / Mother Tongue", stars: 5 }
  ]
};
