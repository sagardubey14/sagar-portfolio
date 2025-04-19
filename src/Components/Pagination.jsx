import React, { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./Pagination.css";

const Pagination = ({ children, itemsPerPage = 1 }) => {
  const [currentPage, setCurrentPage] = useState(0);
  const [direction, setDirection] = useState(1);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const [showImg, setShowImg] = useState(false);
  const paginationRef = useRef(null);

  const totalPages = Math.ceil(children.length / itemsPerPage);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShowImg(isMobile);
          const timer = setTimeout(() => {
            setShowImg(false);
          }, 3000);
          observer.unobserve(paginationRef.current);
          return () => clearTimeout(timer);
        }
      },
      {
        threshold: 0.3,
      }
    );

    if (paginationRef.current) {
      observer.observe(paginationRef.current);
    }

    return () => {
      if (paginationRef.current) {
        observer.unobserve(paginationRef.current);
      }
    };
  }, []);


  const handleSwipe = (swipeDirection) => {
    if (swipeDirection === "left" && currentPage < totalPages - 1) {
      setDirection(1);
      setCurrentPage((prev) => prev + 1);
    } else if (swipeDirection === "right" && currentPage > 0) {
      setDirection(-1);
      setCurrentPage((prev) => prev - 1);
    }
  };

  const swipeConfidenceThreshold = 5000;
  const swipePower = (offset, velocity) => Math.abs(offset) * velocity;

  const startIndex = currentPage * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentItems = children.slice(startIndex, endIndex);

  const variants = {
    enter: (direction) => ({
      x: direction > 0 ? 300 : -300,
      opacity: 0,
      scale: 0.9,
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
    },
    exit: (direction) => ({
      x: direction > 0 ? -300 : 300,
      opacity: 0,
      scale: 0.9,
    }),
  };

  return (
    <div className="pagination-container" ref={paginationRef}>
      <div className="page-content">
        <AnimatePresence mode="wait" custom={direction}>
          <motion.div
            key={currentPage}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: { type: "spring", stiffness: 300, damping: 30 },
              opacity: { duration: 0.3 },
            }}
            drag={isMobile ? "x" : false}
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={0.4}
            onDragEnd={(e, { offset, velocity }) => {
              const swipe = swipePower(offset.x, velocity.x);
              if (swipe < -swipeConfidenceThreshold) {
                handleSwipe("left");
              } else if (swipe > swipeConfidenceThreshold) {
                handleSwipe("right");
              }
            }}
          >
            {currentItems}
          </motion.div>
        </AnimatePresence>
      </div>

      {showImg && (
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "10px",
            position: "absolute",
            top: "25%",
          }}
        >
          <img
            className="swipe-left"
            src="./swipe-left.svg"
            alt="Swipe Left"
            style={{
              width: "40px",
              filter: "invert(1)",
              animation: "rotateSwipe 0.9s ease-in-out infinite",
            }}
          />
          <span style={{ color: "white", fontSize: "16px" }}>
            Swipe left here, not below
          </span>
        </div>
      )}
      <div className="pagination">
        {[...Array(totalPages)].map((_, index) => (
          <button
            key={index}
            className="lsBtn"
            onClick={() => {
              setDirection(index > currentPage ? 1 : -1);
              setCurrentPage(index);
            }}
            disabled={index === currentPage}
          >
            {index + 1}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Pagination;
