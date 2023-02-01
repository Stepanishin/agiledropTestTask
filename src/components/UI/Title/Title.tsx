import React, { FC } from "react";
import "./Title.scss";

interface TitleProps {
  // The title text to be displayed
  title: string;
  // An optional class name for styling purposes
  className?: string;
}

const Title: FC<TitleProps> = ({ title, ...props }) => {
  return <h2 {...props}>{title}</h2>;
};

export default Title;
