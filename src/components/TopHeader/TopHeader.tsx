import React from "react";
import { ReactComponent as Profile } from "../../assets/icons/profile.icon.svg";
import { ReactComponent as PowerOff } from "../../assets/icons/power off.icon.svg";
import { ReactComponent as MenuButton } from "../../assets/icons/Menu.icon.svg";
import { ReactComponent as SearchButton } from "../../assets/icons/Search.svg";
import { useResponsive } from "ahooks";
import { useLocation } from "react-router-dom";
import { getLastPathSegment, isValidRedirectLink } from "../../hooks";
import { linksMapping } from "../../constants";

type TopHeaderPropsType = {
  setIsExpandedHandler: () => void;
};

const TopHeader: React.FC<TopHeaderPropsType> = ({ setIsExpandedHandler }) => {
  const responsive = useResponsive();
  const location = useLocation();
  const activeSegment = getLastPathSegment(location.pathname);
  const activeItemDefault = isValidRedirectLink(activeSegment)
    ? linksMapping[activeSegment as keyof typeof linksMapping]
    : "";
  const { md, lg, sm } = responsive;
  const isSmallScreens = !md && !lg && !sm;

  return (
    <>
      {isSmallScreens ? (
        <div
          className="top-header h-[64px] w-full fixed top-0 bg-[#FFFFFF] rounded-br-lg rounded-bl-lg z-[9997]"
          style={{ boxShadow: "0px 0px 8px 0px #2D3B4E1A" }}
        >
          <div className="flex flex-row w-full h-full justify-between items-center gap-4 px-6">
            <MenuButton onClick={() => setIsExpandedHandler()} />
            <div className="text-[#2D3B4E] text-[15px] font-semibold">
              {activeItemDefault}
            </div>
            <SearchButton />
          </div>
        </div>
      ) : (
        <div className="top-header h-[70px] w-full">
          <div className="flex flex-row w-full h-full justify-end items-center gap-4 px-4">
            <Profile className="h-[18px]" />
            <PowerOff className=" h-[18px]" />
          </div>
        </div>
      )}
    </>
  );
};

export default TopHeader;
