"use client";

import { useEffect, useState } from "react";
import "./caroussel.css";

export default function CardCarousel({ cards, autoPlay = true, interval = 4000 }) {
  const [current, setCurrent] = useState(0);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % cards.length);
  };

  const goToSlide = (index) => {
    setCurrent(index);
  };

  useEffect(() => {
    if (!autoPlay) return;

    const timer = setInterval(() => {
      nextSlide();
    }, interval);

    return () => clearInterval(timer);
  }, [current, autoPlay]);

  const getPosition = (index) => {
    const diff = index - current;

    if (diff === 0) return "active";
    if (diff === -1 || (current === 0 && index === cards.length - 1)) return "prev";
    if (diff === 1 || (current === cards.length - 1 && index === 0)) return "next";

    return "hidden";
  };

  return (
    <div className="carousel-container">
      <div className="carousel-track">
        {cards.map((card, index) => (
          <div key={index} className={`carousel-card ${getPosition(index)}`}>
            <div className="card-image">
              <img src={card.image} alt={card.title} />
            </div>

            <div className="card-content">
              <h3>{card.title}</h3>
              <p>{card.description}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="carousel-dots">
        {cards.map((_, index) => (
          <span
            key={index}
            className={`dot ${current === index ? "active" : ""}`}
            onClick={() => goToSlide(index)}
          />
        ))}
      </div>
    </div>
  );
}