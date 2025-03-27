import { useState, useEffect } from "react";
import "./Home.css";

const Home = () => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setLoaded(true);
    }, 500);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <div className={`video-container ${loaded ? "loaded" : ""}`}>
      <video
        autoPlay
        loop
        muted
        playsInline
        disablePictureInPicture
        controlsList="nodownload nofullscreen noremoteplayback"
        className="background-video"
        onContextMenu={(e) => e.preventDefault()}
      >
        <source src="bgpics/8644866-uhd_4096_2160_24fps.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <div className="intro-text">
        <h1 className="name">Sagar Dubey</h1>
        <p className="title">Software Developer | UI/UX Enthusiast</p>
      </div>

      <a
        href="https://www.pexels.com/video/time-lapse-video-of-a-meteor-shower-on-a-starry-night-8644866/"
        target="_blank"
        rel="noopener noreferrer"
        className="video-credit"
      >
        Video by Bohdan Borovyk
      </a>
    </div>
  );
};

export default Home;
