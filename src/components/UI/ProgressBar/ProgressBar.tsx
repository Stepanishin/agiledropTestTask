import React, { FC } from "react";
import "./ProgressBar.scss";

interface ProgressBarProps {
  // The percent of the progress
  percent: number;
}

const ProgressBar: FC<ProgressBarProps> = ({ percent }) => {
  // Calculate the dash array and dash offset for the fill circle
  const dashArray = 2 * Math.PI * 100;
  let dashOffset = (1 - percent / 100) * dashArray;
  if (percent === 0) {
    dashOffset = (1 - 0 / 100) * dashArray;
  }

  return (
    <div className="ProgressBar_container">
      <div className="circle_container">
        <svg className="ring-progress" viewBox="0 0 200 200">
          <circle
            className="ring-progress__background"
            cx="100"
            cy="100"
            r="95"
            strokeWidth="4"
            style={{
              stroke: percent === 0 ? 'gray' : typeof percent === "number" && percent > 70 ? "rgb(20, 76, 20)" : percent > 40 ? "rgb(160, 160, 49)" : "rgb(80, 33, 33)  ",
            }}
          />
          <circle
            className="ring-progress__fill"
            cx="100"
            cy="100"
            r="95"
            strokeWidth="4"
            strokeDasharray={dashArray}
            strokeDashoffset={dashOffset}
            style={{
              stroke:typeof percent === "number" && percent > 70 ? "rgba(0, 248, 0, 0.7)" : percent > 40 ? "rgb(242, 242, 1)" : "rgb(207, 0, 0)",
            }}
          />
        </svg>
      </div>
      <p className="ProgressBar_procent"  style={{left: percent === 100 ? '6px' : '10px'}}>{percent !== 0 ? percent : "NR"}<span>{percent !== 0 && '%'}</span></p>
    </div>
  );
};

export default ProgressBar;
