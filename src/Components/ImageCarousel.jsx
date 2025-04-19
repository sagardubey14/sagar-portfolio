import { useEffect, useState } from "react";
import "./ImageCarousel.css";

const ImageCarousel = ({ images, interval = 3000 }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    if(images.length === 1) return;
    const timer = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        setFade(true);
      }, 300);
    }, interval);
    return () => clearInterval(timer);
  }, [images.length, interval]);

  return (
    <div className="tvFrame">
      <div
        className="imageWrapper"
        style={{
          opacity: fade ? 1 : 0,
          transition: "opacity 0.5s ease-in-out",
        }}
      >
        <img
          src={images[currentIndex]}
          alt={`Slide ${currentIndex}`}
          className="image"
        />
      </div>
      <div className="dotsContainer">
        {images.map((_, index) => (
          <div
            key={index}
            className="dot"
            style={{
              width: currentIndex === index ? 10 : 6,
              height: currentIndex === index ? 10 : 6,
              backgroundColor: currentIndex === index ? "#111" : "#bbb",
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default ImageCarousel;
