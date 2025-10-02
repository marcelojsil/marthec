import React, { useState, useEffect } from "react";
import { ArrowBigUp } from "lucide-react";

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
      <ArrowBigUp  size={35} color="#fff" />
     
    </button>
  ) : null;
}

export default ToTopButton;

