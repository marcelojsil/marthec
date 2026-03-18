"use client";

import { useState, useEffect, useRef } from "react";
import "./caroussel-2.css";

export default function CardCarouselPro({ cards, autoPlay = true, interval = 4000 }) {
  const [current, setCurrent] = useState(0);
  const startX = useRef(0);
  const isDragging = useRef(false);

  const total = cards.length;

  const next = () => {
    setCurrent((prev) => (prev + 1) % total);
  };

  const prev = () => {
    setCurrent((prev) => (prev - 1 + total) % total);
  };

  useEffect(() => {
    if (!autoPlay) return;

    const timer = setInterval(next, interval);
    return () => clearInterval(timer);
  }, [current]);

  const handleStart = (x) => {
    startX.current = x;
    isDragging.current = true;
  };

  const handleEnd = (x) => {
    if (!isDragging.current) return;

    const diff = startX.current - x;

    if (diff > 50) next();
    if (diff < -50) prev();

    isDragging.current = false;
  };

  const getPosition = (index) => {
    const diff = index - current;

    if (diff === 0) return "active";
    if (diff === -1 || diff === total - 1) return "prev";
    if (diff === 1 || diff === -total + 1) return "next";

    return "hidden";
  };

  return (
    <div
      className="carouselPro"
      onMouseDown={(e) => handleStart(e.clientX)}
      onMouseUp={(e) => handleEnd(e.clientX)}
      onTouchStart={(e) => handleStart(e.touches[0].clientX)}
      onTouchEnd={(e) => handleEnd(e.changedTouches[0].clientX)}
    >
      <div className="carouselTrackPro">
        {cards.map((card, index) => (
          <div key={index} className={`carouselCardPro ${getPosition(index)}`}>
            <img src={card.image} alt={card.title} />

            <div className="carouselContentPro">
              <h3>{card.title}</h3>
              <p>{card.description}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="carouselDotsPro">
        {cards.map((_, i) => (
          <span
            key={i}
            className={`dotPro ${current === i ? "active" : ""}`}
            onClick={() => setCurrent(i)}
          />
        ))}
      </div>
    </div>
  );
}