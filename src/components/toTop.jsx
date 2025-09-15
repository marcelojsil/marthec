import React, { useState, useEffect } from "react";
import seta from "../image/top_white.png";

import "../styles/totop.css";

function ToTopButton() {
  const [visible, setVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setVisible(true);
    } else {
      setVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  return visible ? (
    <button className="scroll-to-top" onClick={scrollToTop}>
      <img src={seta} alt="Para o topo!"/>
    </button>
  ) : null;
}

export default ToTopButton;

