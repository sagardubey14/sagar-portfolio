import { useState, useEffect } from "react";
import "./Home.css";
import VideoBg from '../assets/VideoBG2.mp4'

const Home = () => {
  const [loaded, setLoaded] = useState(false);
  const [displayedText, setDisplayedText] = useState('');
  const [index, setIndex] = useState(0);
  const text = "Sagar Dubey";

  useEffect(() => {
    if(!loaded) return;
    const interval = setInterval(() => {

        if (index < text.length) {
            setDisplayedText((prev) => prev + text[index]);
            setIndex(index + 1);
        } else {
            clearInterval(interval);
        }
    }, 150);

    return () => clearInterval(interval);
  }, [index, text, loaded]);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setLoaded(true);
    }, 600);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <div className={`video-container ${loaded ? "loaded" : ""}`}>
      <video
        autoPlay
        preload="auto"
        loop
        muted
        playsInline
        disablePictureInPicture
        controlsList="nodownload nofullscreen noremoteplayback"
        className="background-video"
        onContextMenu={(e) => e.preventDefault()}
        src={VideoBg}
      >
        Your browser does not support the video tag.
      </video>

      <div className="intro-text">
        <h1 className="name">
        {displayedText}
        </h1>
        <p className="title">Software Developer | UI/UX Enthusiast</p>
        <button className="cta-button">Let’s get started ➤</button>
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
