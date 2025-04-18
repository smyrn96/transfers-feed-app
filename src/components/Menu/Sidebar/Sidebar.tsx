import React, { useState } from "react";
import LogoTitle from "../LogoTitle/LogoTitle";
import { ReactComponent as LiveView } from "../../../assets/icons/Live view.svg";
import { ReactComponent as Scheduled } from "../../../assets/icons/Scheduled.svg";
import { ReactComponent as Statistics } from "../../../assets/icons/Statistics.svg";
import { ReactComponent as Revenue } from "../../../assets/icons/Revenue.svg";
import { ReactComponent as Settings } from "../../../assets/icons/Settings.svg";
import { ReactComponent as Support } from "../../../assets/icons/Support.svg";
import { ReactComponent as Collapse } from "../../../assets/icons/Collapse.svg";
import { MenuItemsType } from "../../../types/Menu";
import MenuItem from "../MenuItem/MenuItem";

const primaryMenu: MenuItemsType[] = [
  { title: "Live view", icon: LiveView, submenu: [] },
  {
    title: "Scheduled",
    icon: Scheduled,
    submenu: [
      { title: "Opportunities" },
      { title: "Early check in" },
      { title: "Other sub item" },
    ],
  },
  { title: "Statistics", icon: Statistics, submenu: [] },
  { title: "Revenue", icon: Revenue, submenu: [] },
  {
    title: "Settings",
    icon: Settings,
    submenu: [
      { title: "Other sub item 1" },
      { title: "Other sub item 2" },
      { title: "Other sub item 3" },
    ],
  },
];

const secondaryMenu: MenuItemsType[] = [
  { title: "Support", icon: Support, submenu: [] },
  { title: "Collapse menu", icon: Collapse, submenu: [] },
];

const Sidebar: React.FC = () => {
  const [activeItem, setActiveItem] = useState<string>("");
  const [isCollapsed, setIsCollapsed] = useState(false);

  console.log(isCollapsed);

  return (
    <div
      style={{ width: isCollapsed ? "82px" : "260px" }}
      className="fixed top-0	left-0 h-full rounded-tr-lg rounded-br-lg bg-[#FFFFFF] sidebar-shadow z-[9999] flex flex-col"
    >
      <div className="p-4 flex flex-col justify-between h-full">
        <div className="flex flex-col gap-8">
          <LogoTitle isCollapsed={isCollapsed} />

          <div className="flex flex-col gap-[2px]">
            {primaryMenu.map((menuItem) => {
              const { title, icon, submenu } = menuItem;
              return (
                <MenuItem
                  title={title}
                  icon={icon}
                  submenu={submenu}
                  activeItem={activeItem}
                  isCollapsed={isCollapsed}
                  setActiveItem={setActiveItem}
                />
              );
            })}
          </div>
        </div>
        <div className="flex flex-col gap-[2px]">
          {secondaryMenu.map((menuItem) => {
            const { title, icon, submenu } = menuItem;
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
