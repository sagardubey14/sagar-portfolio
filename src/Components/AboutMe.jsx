import "./AboutMe.css";
import profilePic from '/profile.jpg'

const AboutMe = () => {
  return (
    <div className="container">
      <div className="about-me card" >
      <div className="image-section">
          <img
            src={profilePic}
            alt="Profile"
          />
        </div>
        {/* Text Section */}
        <div className="text-section">
          <p><strong>Intro:</strong> A passionate software developer with a
          strong focus on building efficient, scalable, and innovative
          solutions.</p>
          <p><strong>Date of Birth:</strong> February 14, 2002</p>
          <p><strong>Address:</strong> Mumbai, India</p>
          <p><strong>ZIP Code:</strong> 401105</p>
          <p><strong>Email:</strong> sagardubey353@gmail.com</p>
          <p><strong>Phone:</strong> +91 91371817201</p>
          
          <h2 className="interests-title">Interests</h2>
          <div className="interests">
            <div className="interest-item"><i className="fas fa-gamepad"></i> Gaming</div>
            <div className="interest-item"><i className="fas fa-utensils"></i> Cooking</div>
            <div className="interest-item"><i className="fas fa-book"></i> Reading Novels</div>
            <div className="interest-item"><i className="fas fa-puzzle-piece"></i> Problem Solving</div>
            <div className="interest-item"><i className="fas fa-laptop-code"></i> Exploring New Technologies</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
