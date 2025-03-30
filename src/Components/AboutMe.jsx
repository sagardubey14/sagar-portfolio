import "./AboutMe.css";

const AboutMe = () => {
  return (
    <div className="aboutme-container">
      <div className="aboutme-left">
      <h1 className="aboutme-intro-heading">My Intro</h1>
        <p className="aboutme-intro-text">
          Hey there! I’m Sagar Dubey, a passionate software developer with a
          strong focus on building efficient, scalable, and innovative
          solutions. I hold a Bachelor of Engineering in Computer Engineering
          and have experience in various programming languages and technologies,
          including JavaScript, React, Python, and Java.
        </p>
        <div className="aboutme-personal-info">
          <p>
            <strong>Name:</strong> Sagar Dubey
          </p>
          <p>
            <strong>Date of Birth:</strong> February 14th, 2002
          </p>
          <p>
            <strong>Address:</strong> Mumbai Suburban, Maharashtra, India
          </p>
          <p>
            <strong>Zip code:</strong> 401105
          </p>
          <p>
            <strong>Email:</strong> sagardubey353@gmail.com
          </p>
          <p>
            <strong>Phone:</strong> +91 9137817201
          </p>
        </div>

        <h3 className="aboutme-section-heading">Interests:</h3>
        <ul className="aboutme-interests-list">
          <li className="pair">
            <i className="fas fa-gamepad"></i> Gaming
          </li>
          <li className="pair">
            <i className="fas fa-utensils"></i> Cooking
          </li>
          <li className="pair">
            <i className="fas fa-book"></i> Reading Novels
          </li>
          <li className="pair">
            <i className="fas fa-puzzle-piece"></i> Problem Solving
          </li>
          <li className="center">
            <i className="fas fa-laptop-code"></i> Exploring New Technologies
          </li>
        </ul>
      </div>

      <div className="aboutme-right">
  <img
    alt="Developer Image"
    className="aboutme-image"
  />
</div>

    </div>
  );
};

export default AboutMe;
