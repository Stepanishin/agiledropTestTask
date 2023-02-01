import React, { FC } from "react";
import "./Arrow.scss";

interface ArrowProps {
  // A boolean indicating whether the arrow is open or not
  isOpen?: boolean;
}

const Arrow: FC<ArrowProps> = ({ isOpen }) => {
  return (
    <svg
      className="Arrow"
      id="Arrow"
      viewBox="0 0 24 24"
      style={{
        transform: isOpen ? "rotate(90deg)" : "rotate(0)",
      }}
    >
      <path d="M10 6L8.59 7.41 13.17 12 8.59 16.59 10 18l6-6-6-6z" />
      <path d="M0 0h24v24H0z" fill="none" />
    </svg>
  );
};

export default Arrow;
