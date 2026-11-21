import React, {useEffect, useState} from "react";
import "./Top.css";

export default function Top() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    function updateVisibility() {
      setVisible(window.scrollY > 250);
    }
    updateVisibility();
    window.addEventListener("scroll", updateVisibility, {passive: true});
    return () => window.removeEventListener("scroll", updateVisibility);
  }, []);

  return (
    <button
      type="button"
      onClick={() => window.scrollTo({top: 0})}
      id="topButton"
      aria-label="Back to top"
      hidden={!visible}
    >
      <span aria-hidden="true">↑</span>
    </button>
  );
}
