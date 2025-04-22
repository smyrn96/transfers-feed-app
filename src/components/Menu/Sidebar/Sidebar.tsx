import React, { useEffect, useState } from "react";
import LogoTitle from "../LogoTitle/LogoTitle";
import MenuItem from "../MenuItem/MenuItem";
import { linksMapping, primaryMenu, secondaryMenu } from "../../../constants";
import { useLocation } from "react-router-dom";
import { getLastPathSegment, isValidRedirectLink } from "../../../hooks";
import { useTransferContext } from "../../../context/TransferContext";

const Sidebar: React.FC = () => {
  const transferContext = useTransferContext();
  const location = useLocation();
  const activeSegment = getLastPathSegment(location.pathname);
  const activeItemDefault = isValidRedirectLink(activeSegment)
    ? linksMapping[activeSegment as keyof typeof linksMapping]
    : "";

  const [activeItem, setActiveItem] = useState<string>(activeItemDefault);
  const [isCollapsed, setIsCollapsed] = useState(false);
  const { setIsExpanded } = transferContext;

  useEffect(() => {
    setIsExpanded(!isCollapsed);
  }, [isCollapsed, setIsExpanded]);

  return (
    <div
      style={{ width: isCollapsed ? "82px" : "260px" }}
      className="fixed top-0	left-0 h-full rounded-tr-lg rounded-br-lg bg-[#FFFFFF] sidebar-shadow z-[9999] flex flex-col"
    >
      <div className="p-4 flex flex-col justify-between h-full">
        <div
          className="flex flex-col gap-8"
          style={{ gap: isCollapsed ? "2.5rem" : "2rem" }}
        >
          <LogoTitle isCollapsed={isCollapsed} />

          <div className="flex flex-col gap-[2px]">
            {primaryMenu.map((menuItem) => {
              const { title, icon, submenu, routeLink } = menuItem;
              return (
                <MenuItem
                  title={title}
                  icon={icon}
                  submenu={submenu}
                  activeItem={activeItem}
                  isCollapsed={isCollapsed}
                  routeLink={routeLink}
                  setActiveItem={setActiveItem}
                />
              );
            })}
          </div>
        </div>
        <div className="flex flex-col gap-[2px]">
          {secondaryMenu.map((menuItem) => {
            const { title, icon, submenu, routeLink } = menuItem;
            const hasDivider = title === "Collapse menu";

            return (
              <>
                {hasDivider && (
                  <hr className="border-t border-[#2D3B4E14] max-w-[210px] w-full m-auto" />
                )}
                <MenuItem
                  title={title}
                  icon={icon}
                  submenu={submenu}
                  activeItem={activeItem}
                  setActiveItem={setActiveItem}
                  isCollapsed={isCollapsed}
                  routeLink={routeLink}
                  handleClick={
                    hasDivider ? () => setIsCollapsed(!isCollapsed) : null
                  }
                />
              </>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
