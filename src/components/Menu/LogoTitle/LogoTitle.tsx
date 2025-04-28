import React from "react";
import logo from "../../../assets/images/Logo.png";
import welcome from "../../../assets/images/welcome.png";
import { ReactComponent as CloseIcon } from "../../../assets/icons/cross.svg";

const subtitle: string = "FOR PARTNERS";

type LogoTitlePropsType = {
  isCollapsed: boolean;
  isSmallScreens: boolean;
  closeHandler?: () => void;
};

const LogoTitle: React.FC<LogoTitlePropsType> = ({
  isCollapsed,
  isSmallScreens,
  closeHandler,
}) => {
  return (
    <div
      className="flex flex-col w-full"
      style={{
        background: isSmallScreens ? "#F4F5F6" : "",
        borderTopRightRadius: isSmallScreens ? "12px" : "",
        borderBottomRightRadius: isSmallScreens ? "12px" : "",
      }}
    >
      <div
        className="flex flex-row gap-4 items-center"
        style={{
          padding: isSmallScreens ? "20px 16px" : "",
        }}
      >
        <img src={logo} alt="logo" />
        {!isCollapsed && (
          <div className="flex flex-col gap-1">
            <img src={welcome} alt="welcome" />
            <p className="text-[9px] font-semibold">{subtitle}</p>
          </div>
        )}
        {isSmallScreens && (
          <button
            onClick={() => {
              closeHandler && closeHandler();
            }}
            className="absolute top-6 right-6 rounded-full w-[40px] h-[40px] bg-[#2D3B4E0D] flex justify-center items-center"
          >
            <CloseIcon
              width={20}
              height={20}
              style={{ color: "#2D3B4E" }}
              className="border border-dashed border-[#2D3B4E]"
            />
          </button>
        )}
      </div>
    </div>
  );
};

export default LogoTitle;
