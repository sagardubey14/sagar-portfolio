import { useEffect, useState } from "react";
import ImageCarousel from "./ImageCarousel";
import "./ProjectCard.css";

const ProjectCard = ({
  title,
  overview,
  techStack,
  features,
  screenshots,
  architecture,
  role,
  links,
  learnings,
}) => {
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    setIsMobile(window.innerWidth < 786);
  }, []);

  return (
    <div className="project-card">
      <div className="project-content">
        <div
          className="project-info"
          style={{
            maxHeight: !isMobile ? "auto" : window.innerHeight - 200,
            overflow: isMobile ? "auto" : "none",
          }}
        >
          <h2 className="project-title">{title}</h2>
          <p className="project-overview">{overview}</p>

          <div className="project-section">
            <h3>🔧 Tech Stack:</h3>
            <p>{techStack.join(", ")}</p>
          </div>

          {features?.length > 0 && (
            <div className="project-section">
              <h3>🎯 Features:</h3>
              <ul>
                {features.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
            </div>
          )}

          {architecture && (
            <div className="project-section">
              <h3>🧱 Architecture:</h3>
              <p>{architecture}</p>
            </div>
          )}
          {learnings && isMobile && (
            <div className="project-section">
              <h3>💼 Role: {role}</h3>
              <h3>📝 Learnings / Challenges: </h3>
              <p>{learnings}</p>
            </div>
          )}
        </div>

        <div className="project-carousel-side">
          <div className="carousel-wrapper">
            <ImageCarousel images={screenshots} />
          </div>

          <div className="project-links">
            {links?.live && (
              <a href={links.live} target="_blank" rel="noopener noreferrer">
                🔗 Live Demo
              </a>
            )}
            {links?.github && (
              <a href={links.github} target="_blank" rel="noopener noreferrer">
                💻 GitHub
              </a>
            )}
          </div>

          {learnings && !isMobile && (
            <div className="project-section">
              <h3>💼 Role: {role}</h3>
              <h3>📝 Learnings / Challenges:</h3>
              <p>{learnings}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
