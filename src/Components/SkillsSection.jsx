import "./SkillsSection.css";

const skills = [
  { name: "HTML5", level: 90 },
  { name: "CSS3 / Tailwind CSS", level: 85 },
  { name: "JavaScript", level: 85 },
  { name: "React.js", level: 85 },
  { name: "Redux Toolkit", level: 80 },
  { name: "Node.js", level: 75 },
  { name: "Express.js", level: 75 },
  { name: "Git & GitHub", level: 85 },
  { name: "DBMS", level: 80 },
  { name: "MySQL", level: 70 },
  { name: "C", level: 75 },
  { name: "OOP", level: 75 },
  { name: "Java", level: 65 },
  { name: "Python", level: 70 },
  { name: "Problem Solving", level: 85 },
];

const SkillsSection = () => {
  return (
    <div className="skills-container">
      <h2 className="skills-title">Skills & Tech Stack</h2>
      <div className="skills-grid">
        {skills.map((skill, idx) => (
          <div key={idx} className="skill-bar-wrapper">
            <div className="skill-bar-bg">
              <div
                className="skill-bar-fill"
                style={{ width: `${skill.level}%` }}
              >
                <span
                  className={`skill-text ${skill.level < 35 ? "outside" : ""}`}
                >
                  {skill.name} – {skill.level}%
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SkillsSection;
