import React from "react";
import { ReactComponent as ArrowDown } from "../../assets/icons/Icon.Arrow.Vertical.Dark.svg";

type SelectButtonPropsType = {
  text: string;
  iconBefore?: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
  variant?: "primary" | "outline";
};

const SelectButton: React.FC<SelectButtonPropsType> = ({
  text,
  iconBefore: Icon,
  variant = "primary",
}) => {
  const variantStyle = {
    primary: {
      color: " #2D3B4E",
    },
    outline: {
      color: "rgba(45, 59, 78, 0.5)",
      backgroundColor: "#FFFFFF",
      fill: "rgba(45, 59, 78, 0.5)",
      boxShadow: "0px 1px 1px 0px #2D3B4E0F",
    },
  };

  return (
    <button
      style={variantStyle[variant]}
      className="flex flex-row gap-4 items-center justify-center border border-[#2D3B4E14] rounded px-4 py-2"
    >
      {Icon && <Icon className="w-full h-full" />}
      <span className="text-sm">{text}</span>
      <ArrowDown className=" h-[18px]" />
    </button>
  );
};

export default SelectButton;
