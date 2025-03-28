import React, { useState, useEffect } from "react";
import "./components.css"

function ScrollToTopButton() {
  const [visible, setVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setVisible(true);
    } else {
      setVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 10, behavior: "smooth" });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  return visible ? (
    <button className="scroll-to-top" onClick={scrollToTop}>
      Voltar ao Topo
    </button>
  ) : null;
}

export default ScrollToTopButton;

