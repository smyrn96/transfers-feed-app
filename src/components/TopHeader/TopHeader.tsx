import React from "react";
import { ReactComponent as Profile } from "../../assets/icons/profile.icon.svg";
import { ReactComponent as PowerOff } from "../../assets/icons/power off.icon.svg";
import SelectButton from "../SelectButton/SelectButton";

const buttonText = "Warwick Group";
const TopHeader: React.FC = () => {
  return (
    <div className="top-header h-[70px] w-full bg-yellow">
      <div className="flex flex-row w-full h-full justify-end items-center gap-4 px-4">
        <SelectButton text={buttonText} variant="outline" />
        <Profile className="h-[18px]" />
        <PowerOff className=" h-[18px]" />
      </div>
    </div>
  );
};

export default TopHeader;
