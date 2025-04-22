import React from "react";

type TagPropsType = {
  text: string;
  width?: number;
  height?: number;
  variant: "primary" | "secondary" | "new";
};

const Tag: React.FC<TagPropsType> = ({ text, width, height, variant }) => {
  const coloring = {
    new: {
      background: "#FFC149",
      color: "#FFFFFF",
    },
  };

  return (
    <div
      className="flex justify-center items-center text-[10px] font-bold rounded-sm ml-1 px-2 py-1"
      style={{
        width: Boolean(width) ? `${width}px` : "auto",
        height: Boolean(height) ? `${height}px` : "auto",
        background: coloring[variant as keyof typeof coloring].background,
        color: coloring[variant as keyof typeof coloring].color,
      }}
    >
      {text}
    </div>
  );
};

export default Tag;
