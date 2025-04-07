import "./SkillCarousel.css";

const SkillCarousel = ({ title, icons, direction = "left" }) => {
  const loopedIcons = [...icons, ...icons];
  const animationClass = direction === "right" ? "scroll-right" : "scroll-left";

  return (
    <div className="skill-section" style={{ color: "rgb(174, 170, 170)" }}>
      <div className="skill-title">{title}</div>
      <div className="skill-container">
        <div className={`skill-strip ${animationClass}`}>
          {loopedIcons.map((icon, index) => (
            <div className="skill-icon" key={index}>
              <i className={icon.className}></i>
              <div className="skill-label">{icon.label}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SkillCarousel;
