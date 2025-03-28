import React from 'react';
import './AboutMe.css';

const AboutMe = () => {
    return (
        <div className="aboutme-container">
    <div className="aboutme-left">
        <div className="aboutme-personal-info">
            <p><strong>Name:</strong> Sagar Dubey</p>
            <p><strong>Date of Birth:</strong> February 14th, 2002</p>
            <p><strong>Address:</strong> Mumbai Suburban, Maharashtra, India</p>
            <p><strong>Zip code:</strong> [zip code]</p>
            <p><strong>Email:</strong> sagardubey353@gmail.com</p>
            <p><strong>Phone:</strong> +91 9137817201</p>
        </div>

        <h3 className="aboutme-section-heading">Interests:</h3>
        <ul className="aboutme-interests-list">
            <li>Gaming</li>
            <li>Cooking</li>
            <li>Reading Novels</li>
            <li>Exploring New Technologies</li>
            <li>Problem Solving</li>
        </ul>
    </div>

    <div className="aboutme-right">
        <h1 className="aboutme-intro-heading">My Intro</h1>
        <p className="aboutme-intro-text">Hey there! I’m Sagar Dubey, a passionate software developer with a strong focus on building efficient, scalable, and innovative solutions. I hold a Bachelor of Engineering in Computer Engineering and have experience in various programming languages and technologies, including JavaScript, React, Python, and Java.</p>

        <h2 className="aboutme-section-heading">About Me</h2>
        <p className="aboutme-about-text">I strongly believe in writing clean, maintainable, and reliable code. My journey into software development began out of curiosity about how software shapes the world around us. As a fresher, I have worked on academic and personal projects involving web development, building ML models, and data analysis along with gaining basic knowledge of cloud computing.</p>

        <p className="aboutme-about-text">I genuinely enjoy coding and take pride in writing efficient and readable code. I believe that sharing knowledge and working as a team are essential for personal and professional growth.</p>
    </div>
</div>

    );
};

export default AboutMe;
