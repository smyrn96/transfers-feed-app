import React, { useState } from "react";
import LogoTitle from "../LogoTitle/LogoTitle";
import MenuItem from "../MenuItem/MenuItem";
import { linksMapping, primaryMenu, secondaryMenu } from "../../../constants";
import { useLocation } from "react-router-dom";
import { getLastPathSegment, isValidRedirectLink } from "../../../hooks";
import { useTransferContext } from "../../../context/TransferContext";
import { useResponsive } from "ahooks";

const Sidebar: React.FC = () => {
  const responsive = useResponsive();
  const { md, lg, sm } = responsive;
  const isSmallScreens = !md && !lg && !sm;
  const transferContext = useTransferContext();
  const location = useLocation();
  const activeSegment = getLastPathSegment(location.pathname);
  const activeItemDefault = isValidRedirectLink(activeSegment)
    ? linksMapping[activeSegment as keyof typeof linksMapping]
    : "";

  const [activeItem, setActiveItem] = useState<string>(activeItemDefault);
  const { isExpanded, setIsExpanded } = transferContext;
  const sideBarContainerWidth = isSmallScreens
    ? isExpanded
      ? "90%"
      : ""
    : !isExpanded
    ? "82px"
    : "260px";

  return (
    <div
      style={{
        width: sideBarContainerWidth,
        display: isSmallScreens ? (!isExpanded ? "none" : "block") : "",
        zIndex: isSmallScreens ? "9999" : "",
      }}
      className="fixed top-0 left-0 h-full rounded-tr-lg rounded-br-lg bg-[#FFFFFF] sidebar-shadow z-[1] flex flex-col"
    >
      <div className="p-4 flex flex-col justify-between h-full">
        <div
          className="flex flex-col gap-8"
          style={{ gap: !isExpanded ? "2.5rem" : "2rem" }}
        >
          <LogoTitle isCollapsed={!isExpanded} />

          <div className="flex flex-col gap-[2px]">
            {primaryMenu.map((menuItem) => {
              const { title, icon, submenu, routeLink } = menuItem;
              return (
                <MenuItem
                  key={title}
                  title={title}
                  icon={icon}
                  submenu={submenu}
                  activeItem={activeItem}
                  isCollapsed={!isExpanded}
                  routeLink={routeLink}
                  setActiveItem={setActiveItem}
                />
              );
            })}
          </div>
        </div>
        <div className="flex flex-col gap-[2px]">
          {!isSmallScreens &&
            secondaryMenu.map((menuItem) => {
              const { title, icon, submenu, routeLink } = menuItem;
              const hasDivider = title === "Collapse menu";

              return (
                <div key={title}>
                  {hasDivider && (
                    <hr className="border-t border-[#2D3B4E14] max-w-[210px] w-full m-auto" />
                  )}
                  <MenuItem
                    title={title}
                    icon={icon}
                    submenu={submenu}
                    activeItem={activeItem}
                    setActiveItem={setActiveItem}
                    isCollapsed={!isExpanded}
                    routeLink={routeLink}
                    handleClick={
                      hasDivider ? () => setIsExpanded(!isExpanded) : null
                    }
                  />
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
