import React from "react";
import DisplayLottie from "../../components/displayLottie/DisplayLottie";
import splashAnimation from "../../assets/lottie/splashAnimation.json";
import {greeting} from "../../portfolio";
import "./SplashScreen.css";

export default function SplashScreen() {
  return (
    <div
      className="splash-container"
      role="status"
      aria-label="Loading portfolio"
    >
      <div className="splash-animation" aria-hidden="true">
        <DisplayLottie animationData={splashAnimation} />
      </div>
      <div className="splash-signature" aria-hidden="true">
        <span>&lt;</span>
        <strong>{greeting.username}</strong>
        <span>/&gt;</span>
      </div>
    </div>
  );
}
