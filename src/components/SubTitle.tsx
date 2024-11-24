// src/components/SubTitle.tsx
import React from "react";

type SubTitleProps = {
  text: string;
};

const SubTitle: React.FC<SubTitleProps> = ({ text }) => {
  return (
    <h3 className="text-1xl text-pink-400 pt-4 font-light">
      {text}
    </h3>
  );
};

export default SubTitle;
