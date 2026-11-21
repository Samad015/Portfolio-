import React, {useState} from "react";
import "./ArcadeJump.css";

export default function ArcadeJump() {
  const [jumps, setJumps] = useState(0);

  return (
    <div className="arcade">
      <button
        type="button"
        className="arcade-button"
        onClick={() => setJumps(count => count + 1)}
      >
        <span className="arcade-track" aria-hidden="true">
          <span
            key={jumps}
            className={jumps ? "arcade-rover jumping" : "arcade-rover"}
          />
        </span>
        <span>Arcade jump</span>
      </button>
      <span className="arcade-score" role="status">
        Jumps: {jumps}
      </span>
    </div>
  );
}
