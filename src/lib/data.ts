export const portfolioData = {
  name: "Md. Joni Akter Labu",
  title: "Backend-Focused Software Engineer",
  location: "Dhaka, Bangladesh",
  email: "mdjoniakterlabu@gmail.com",
  phone: "+8801788000412",
  github: "https://github.com/Aklabu",
  linkedin: "https://linkedin.com/in/joniakterlabu",
  about:
    "I am a passionate backend developer who loves building scalable, production-ready systems. I specialize in Django REST Framework and have delivered real-world SaaS platforms, mobile app backends, and e-commerce solutions.",
  skills: [
    {
      category: "Programming Languages",
      icon: "💻",
      items: ["Python", "JavaScript"],
    },
    {
      category: "Backend",
      icon: "⚙️",
      items: ["Django", "DRF", "Django ORM", "Django Channels", "WebSocket"],
    },
    {
      category: "Frontend",
      icon: "🎨",
      items: ["HTML", "CSS", "Tailwind CSS", "Bootstrap", "Next.js (Familiar)"],
    },
    {
      category: "Data & Tasks",
      icon: "🗄️",
      items: ["PostgreSQL", "MySQL", "SQLite", "Redis", "Celery"],
    },
    {
      category: "DevOps",
      icon: "🚀",
      items: ["Git", "GitHub", "GitHub Actions", "Docker", "Nginx", "VPS", "AWS"],
    },
    {
      category: "APIs & Tools",
      icon: "🔧",
      items: ["OpenAI API", "Firebase", "Google Maps API", "JWT Auth", "Postman"],
    },
  ],
  projects: [
    {
      id: 1,
      title: "Health Ride",
      subtitle: "Non-Emergency Medical Transportation Platform",
      description:
        "A live SaaS platform for NEMT providers, including a web-based provider portal and a mobile app for drivers. Built the entire backend as sole backend developer using Django REST Framework. Supports real-time trip scheduling, dispatching, driver tracking, passenger trip management, facility billing and role-based operations with HIPAA-compliant architecture.",
      tech: ["Django REST Framework", "PostgreSQL", "Celery", "Redis", "Twilio", "Stripe", "Websocket", "Google Maps", "HIPAA", "SaaS"],
      link: { label: "GitHub", url: "https://github.com/Aklabu/DRF-HealthRide" },
    },
    {
      id: 2,
      title: "BANCre",
      subtitle: "Real Estate Financing Platform",
      description:
        "A commercial real estate financing platform DRF backend with multi-role access, AI-powered document processing, automated financial models and offering memorandums, lender deal review, loan quote comparison and a centralized deal room with CRM-style distribution.",
      tech: ["Django REST Framework", "AI Integration", "OpenAI API", "Celery", "Redis", "Google Maps", "PostgreSQL", "CRM"],
      link: { label: "Live Web", url: "http://bancre.com" },
    },
    {
      id: 3,
      title: "Stovetop Radio",
      subtitle: "Music Streaming App",
      description:
        "A full-stack music streaming app where I built the entire backend using Django REST Framework. It powers a Flutter mobile app and includes authentication, music browsing, playlists, play history, and personalized recommendations.",
      tech: ["Django REST Framework", "Flutter", "PostgreSQL", "JWT", "Django ORM", "Firebase Auth"],
      link: { label: "Play Store", url: "https://play.google.com/store/apps/details?id=com.app.stovetopmusic" },
    },
    {
      id: 4,
      title: "NHA MobileConnect",
      subtitle: "Nevada Homeless Alliance App",
      description:
        "A production backend built with Django REST Framework for a nonprofit app. The Flutter mobile app helps users find shelters, food, clinics and support services. Features include JWT authentication, OTP reset, AI chatbot, location-based search and push notifications.",
      tech: ["Django REST Framework", "Flutter", "JWT", "AI Chatbot", "Push Notifications"],
      link: { label: "App Store", url: "https://apps.apple.com/us/app/nha-mobileconnect/id6756877961" },
    },
    {
      id: 5,
      title: "Lumo Electrical",
      subtitle: "Wholesale E-Commerce Platform",
      description:
        "A DRF backend built as the sole backend developer for a wholesale e-commerce platform with a Next.js frontend. Includes JWT authentication, multi-step customer onboarding, OTP email verification, product catalog with search/filtering and contact management features.",
      tech: ["Django REST Framework", "Next.js", "JWT", "PostgreSQL"],
      link: { label: "Live Web", url: "https://www.lumoelectrical.co.za" },
    },
    {
      id: 6,
      title: "Life Pulse",
      subtitle: "Safety Monitoring App",
      description:
        "Developed the complete backend for LifePulse, a safety monitoring platform for individuals living alone, using Django REST Framework, Celery, Redis, PostgreSQL and Twilio. Ensures reliable automated check-ins and real-time emergency SMS alerts.",
      tech: ["Django REST Framework", "Celery", "Redis", "Twilio", "PostgreSQL"],
      link: { label: "View App", url: "https://drive.google.com/file/d/1z810AC29qTlEldmT7hD8Xw1oVOBP0ykJ/view?usp=sharing" },
    },
    {
      id: 7,
      title: "Maximum Savings",
      subtitle: "Shopping Discount Platform",
      description:
        "A DRF backend built as the sole backend developer for a role-based discount platform for essential workers. Includes JWT auth, OTP verification, brand approval workflow, role-based permissions and a structured offers system.",
      tech: ["Django REST Framework", "JWT", "OTP", "PostgreSQL"],
      link: { label: "GitHub", url: "https://github.com/Aklabu/DRF-MaximumSavings" },
    },
    {
      id: 8,
      title: "MovingWyze",
      subtitle: "Logistics Tracking App",
      description:
        "A Django REST Framework backend built for a logistics tracking app MVP. Includes JWT authentication, driver/company/warehouse management, load sheet automation, task tracking and a public shipment tracking API.",
      tech: ["Django REST Framework", "JWT", "PostgreSQL", "Logistics"],
      link: { label: "View App", url: "https://drive.google.com/file/d/1kOEKHmLoI0RTmCI2C_ZUSh-zkyRmA6xm/view?usp=sharing" },
    },
    {
      id: 9,
      title: "Bongo Music",
      subtitle: "Music Streaming Platform",
      description:
        "A Django-based full-stack Bangla music streaming platform built as a university final year project. Supports music streaming, user authentication, favourites, history tracking, search and Stripe-based premium subscriptions.",
      tech: ["Django", "Stripe", "PostgreSQL", "Full-Stack"],
      link: { label: "GitHub", url: "https://github.com/Aklabu/Django-BongoMusic" },
    },
  ],
};