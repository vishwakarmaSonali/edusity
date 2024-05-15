import React from "react";
import "./Title.css";

interface TitleProps {
  title: string;
  subtitle: string;
}

const Title: React.FC<TitleProps> = ({ title, subtitle }) => {
  return (
    <div className="title">
      <p>{subtitle}</p>
      <h2>{title}</h2>
    </div>
  );
};

export default Title;
