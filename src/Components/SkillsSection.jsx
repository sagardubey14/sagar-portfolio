import SkillCarousel from "./SkillCarousel";

function SkillsSection() {
  // Languages & Core Skills
  const languagesAndCore = [
    { className: "devicon-java-plain colored", label: "Java" },
    { className: "devicon-python-plain colored", label: "Python" },
    { className: "devicon-c-plain colored", label: "C" },
    { className: "devicon-cplusplus-plain colored", label: "C++" },
    { className: "devicon-javascript-plain colored", label: "JavaScript" },
    { className: "devicon-html5-plain colored", label: "HTML" },
    { className: "devicon-css3-plain colored", label: "CSS" },
    { className: "devicon-markdown-original colored", label: "Markdown" },
    { className: "devicon-r-plain colored", label: "R" },
    { className: "devicon-git-plain colored", label: "Git (Core Skill)" },
  ];

  // Frameworks, Libraries & Tools
  const frameworksAndTools = [
    { className: "devicon-react-original colored", label: "React.js" },
    { className: "devicon-redux-original colored", label: "Redux Toolkit" },
    { className: "devicon-express-original colored", label: "Express.js" },
    { className: "devicon-nodejs-plain colored", label: "Node.js" },
    { className: "devicon-flask-original colored", label: "Flask" },
    { className: "devicon-bootstrap-plain colored", label: "Bootstrap" },
    { className: "devicon-tailwindcss-plain colored", label: "Tailwind CSS" },
    { className: "devicon-jquery-plain colored", label: "jQuery" },
    { className: "devicon-socketio-original colored", label: "Socket.io" },
    { className: "devicon-pandas-plain colored", label: "Pandas" },
    { className: "devicon-jupyter-plain colored", label: "Jupyter Notebook" },
    { className: "devicon-vitejs-plain colored", label: "Vite.js" },
    { className: "devicon-npm-original-wordmark colored", label: "npm" },
    { className: "devicon-canva-original colored", label: "Canva" },
    { className: "devicon-vscode-plain colored", label: "VS Code" },
    { className: "devicon-github-original colored", label: "GitHub" },
    { className: "devicon-linux-plain colored", label: "Linux" },
  ];

  // Databases & Deployment
  const databasesAndDeployment = [
    { className: "devicon-mongodb-plain colored", label: "MongoDB" },
    { className: "devicon-mysql-plain colored", label: "MySQL" },
    { className: "devicon-postgresql-plain colored", label: "PostgreSQL" },
    { className: "devicon-netlify-plain colored", label: "Netlify" },
    {
      className: "devicon-githubactions-plain colored",
      label: "GitHub Actions",
    },
    {
      className: "devicon-github-original colored",
      label: "GitHub",
    },
    {
      className: "devicon-amazonwebservices-plain-wordmark colored",
      label: "AWS",
    },
  ];

  return (
    <div style={{ padding: "2%", backgroundColor:'black' }}>
      <SkillCarousel title="Languages & Core Skills" icons={languagesAndCore} />
      <SkillCarousel
        title="Frameworks, Libraries & Tools"
        icons={frameworksAndTools}
        direction="right"
      />
      <SkillCarousel
        title="Databases & Deployment"
        icons={databasesAndDeployment}
      />
    </div>
  );
}

export default SkillsSection;
