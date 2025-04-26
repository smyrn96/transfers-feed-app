import React from "react";
import { ReactComponent as ArrowDotted } from "../../assets/icons/arrow-dotted.svg";
import DashedBoxIcon from "./DashedBoxicon";

const FromToIcon: React.FC = () => {
  return (
    <div className="flex flex-col items-center gap-1">
      <DashedBoxIcon />
      <ArrowDotted height={25} />
      <DashedBoxIcon />
    </div>
  );
};

export default FromToIcon;
