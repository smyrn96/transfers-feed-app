import React from "react";
import logo from "../../../assets/images/Logo.png";
import welcome from "../../../assets/images/welcome.png";

const subtitle: string = "FOR PARTNERS";

type LogoTitlePropsType = {
  isCollapsed: boolean;
};

const LogoTitle: React.FC<LogoTitlePropsType> = ({ isCollapsed }) => {
  return (
    <div className="flex flex-col w-full">
      <div className="flex flex-row gap-4 items-center">
        <img src={logo} alt="logo" />
        {!isCollapsed && (
          <div className="flex flex-col gap-1">
            <img src={welcome} alt="welcome" />
            <p className="text-[9px] font-semibold">{subtitle}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default LogoTitle;
