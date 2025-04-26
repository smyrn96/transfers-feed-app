import React from "react";
import { ReactComponent as BoxIcon } from "../../assets/icons/box.svg";

const DashedBoxIcon: React.FC = () => {
  return (
    <div className="border border-dashed border-[#48D9A4]">
      <BoxIcon />
    </div>
  );
};

export default DashedBoxIcon;
