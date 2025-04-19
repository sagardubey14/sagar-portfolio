import profileImage from "/profile.jpg";
import ProjectCard from './ProjectCard';
import Pagination from './Pagination';
import images from "./projectImages";

function ProjectSection() {

    const projectData = [
      {
        title: "SyntaxScribe",
        overview: "A MERN-based tech blogging platform for JavaScript syntax with features like post creation, search, Tailwind CSS playground, and user interactions.",
        techStack: ["React", "Node.js", "MongoDB", "Express", "Redux Toolkit", "Tailwind CSS"],
        features: [
          "Post creation with code editor",
          "Search posts via keywords",
          "Like, save, comment, and follow functionality",
          "Tailwind CSS live playground with autocomplete",
          "User authentication and profile management",
          "Custom notification system"
        ],
        screenshots: images.syntax,
        architecture: "Client-server architecture with REST APIs, Redux for state management, and GitHub-integrated CI/CD on Netlify and Render.",
        role: "Full Stack Developer",
        links: {
          live: "https://syntaxscribe.netlify.app",
          github: "https://github.com/sagardubey14/Tech-Blog"
        },
        learnings: "Built a scalable MERN stack app, implemented real-time features, and deepened understanding of Tailwind CSS and Redux Toolkit."
      },
      {
        title: "QuickChat",
        overview: "A real-time chat application supporting private and group messaging with status updates and delivery receipts.",
        techStack: ["React", "Node.js", "Socket.IO", "Express", "CSS"],
        features: [
          "Private and group messaging",
          "Message delivery receipts",
          "Offline message handling",
          "Typing indicators",
          "User status updates"
        ],
        screenshots: images.quick,
        architecture: "Client-server architecture using Socket.IO for real-time communication and REST APIs for user management.",
        role: "Full Stack Developer",
        links: {
          live: "https://quick-chat-14.netlify.app/",
          github: "https://github.com/sagardubey14/quickchat-frontend"
        },
        learnings: "Learned how to build real-time applications using WebSockets, handle offline messages, and manage Socket.IO events effectively."
      },
      {
        title: "Wild-Watch",
        overview: "A wildlife monitoring platform that detects animals and gun-related threats using machine learning models, with alert systems and dashboard visualization.",
        techStack: ["React", "shadcn/ui", "Recharts", "Leaflet", "Python (backend)"],
        features: [
          "Animal detection via YOLOv5",
          "Gunshot and gun image classification",
          "Map with data source markers (Leaflet)",
          "Upload image/audio to test ML models",
          "Email/SMS alerts on gunshot detection",
          "Dashboard with charts for analytics",
          "About and Our Work sections"
        ],
        screenshots: images.wild,
        architecture: "Frontend in React with Leaflet and Recharts. Python backend (by teammates) handles ML model routing and alert mechanisms.",
        role: "Frontend Developer",
        links: {
          live: "https://wild-watch.netlify.app",
          github: "https://github.com/sagardubey14/wildlife-project-map"
        },
        learnings: "Integrated ML output with UI, built complex dashboards using Recharts, and explored map libraries like Leaflet for data visualization."
      },
      {
        title: "Flipkart Review Sentiment Analysis",
        overview: "An academic project that classifies Flipkart product reviews into positive, negative, or neutral sentiments using machine learning.",
        techStack: ["Python", "Scikit-learn", "BeautifulSoup", "Flask"],
        features: [
          "Extracts reviews from Flipkart via product URL",
          "User-defined number of reviews to analyze",
          "Classifies sentiment as positive/negative/neutral",
          "Achieved 80%+ accuracy"
        ],
        screenshots: images.senti,
        architecture: "Python scripts for scraping and classification; simple Flask interface for input/output.",
        role: "Team Leader & Model Researcher",
        links: {
          live: "",
          github: "https://github.com/parshya34/Sentiment-Analysis-on-Flipkart-Review"
        },
        learnings: "Researched and tested various ML models, managed a 4-member team, and ensured timely delivery with performance tuning."
      },
      {
        title: "debounce-by-edge (NPM Package)",
        overview: "A lightweight, flexible debounce function for all types of events, ensuring efficient execution by limiting the rate at which a function is called.",
        techStack: ["JavaScript", "NPM"],
        features: [
          "Delays function execution by a specified delay",
          "Optional immediate execution on first trigger",
          "Ideal for handling high-frequency events like input or resize",
          "Simple and intuitive API",
          "Published and maintained on npm"
        ],
        screenshots: images.npm,
        architecture: "Standalone utility library designed using closures and timers, compatible with Node.js and browsers.",
        role: "Author & Publisher",
        links: {
          live: "https://www.npmjs.com/package/debounce-by-edge",
          github: "https://github.com/sagardubey14/debounce-by-edge"
        },
        learnings: "Learned how to design and publish npm packages, manage versions, write documentation, and create reusable utilities for frontend performance optimization."
      },
      {
        title: "Real-Time TikTok Influencer Dashboard",
        overview: "A React-based prototype dashboard that simulates real-time data ingestion by displaying one influencer entry at a time from a CSV file. Built to mimic how a backend API might stream data to a frontend in production.",
        techStack: ["React", "JavaScript", "CSV", "HTML5", "Recharts"],
        features: [
          "Simulates real-time data streaming using `setInterval`",
          "Reads and parses CSV data without external libraries",
          "Displays influencer name, category, subscribers, likes, and country",
          "Applies alternating row background colors for readability",
          "Displays live total subscribers and average likes as data streams in",
          "Automatically stops when all data is rendered"
        ],
        screenshots: images.realtime,
        architecture: "Client-side application using React hooks and interval-based streaming logic to mimic live API data feed. Uses custom CSV parsing and dynamic state updates for rendering.",
        role: "Analyst",
        links: {
          live: "https://a821dashboard-pbix.netlify.app/",
          github: "https://github.com/sagardubey14/smaexp11"
        },
        learnings: "Gained hands-on experience with real-time rendering, simulating API streams, and working with CSV data formats in React. Enhanced skills in UI updates using React hooks and state control with timers."
      }      
      ];

  return (
    <Pagination>
      {projectData.map((project, index) => (
        <ProjectCard key={index} {...project} />
      ))}
    </Pagination>
  )
}

export default ProjectSection
