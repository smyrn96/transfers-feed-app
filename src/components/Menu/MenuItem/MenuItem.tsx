import React from "react";
import { MenuItemsType } from "../../../types/Menu";
import { ReactComponent as ArrowDown } from "../../../assets/icons/Icon.Arrow.Vertical.Dark.svg";
import "./styles.css";

type MenuItemPropsType = {
  title: string;
  icon?: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
  submenu?: MenuItemsType[];
  activeItem: string;
  isCollapsed: boolean;
  setActiveItem: (title: string) => void;
  handleClick?: (() => void) | null;
};

const MenuItem: React.FC<MenuItemPropsType> = ({
  title: menuTitle,
  icon: Icon,
  submenu,
  activeItem,
  isCollapsed,
  setActiveItem,
  handleClick,
}) => {
  const isActive =
    menuTitle === activeItem ||
    Boolean(submenu?.find((item) => item.title === activeItem));
  const hasItems = submenu && Boolean(submenu.length);
  const isActiveClassName = isActive ? "active-item" : "";
  const isCollapseMenuIcon = menuTitle === "Collapse menu";
  const isCollapseMenuClassName = isCollapseMenuIcon ? "is-collapsed-menu" : "";
  const isCollapsedSidebarClassName = isCollapsed ? "is-collapsed-sidebar" : "";

  const handleClickMenuItem = (): void => {
    if (handleClick) {
      handleClick();
      return;
    }

    if (hasItems && isActive) {
      setActiveItem("");
    } else {
      setActiveItem(menuTitle);
    }
  };

  return (
    <div className="flex flex-col">
      <div
        key={menuTitle}
        className={`icon-title-container flex flex-row items-center gap-6 py-4 px-2 group hover:!text-[#FFFFFF] hover:bg-[#50D8A5] rounded justify-between cursor-pointer ${isActiveClassName} ${isCollapsedSidebarClassName}`}
        onClick={handleClickMenuItem}
      >
        <div className="flex flex-row gap-6 items-center left-container">
          {Icon && (
            <Icon
              width={32}
              height={32}
              style={{
                transform: `${
                  isCollapsed && isCollapseMenuIcon
                    ? "rotate(180deg)"
                    : "rotate(0deg)"
                }`,
              }}
              className={`text-[#2D3B4E80] fill-[#2D3B4E80] group-hover:text-[#FFFFFF]  ${isActiveClassName} ${isCollapseMenuClassName}`}
            />
          )}
          <p
            className={`title-container text-[15px] text-[#2D3B4E7A] group-hover:!text-[#FFFFFF] ${isActiveClassName} ${isCollapsedSidebarClassName}`}
          >
            {menuTitle}
          </p>
        </div>
        {hasItems && (
          <ArrowDown
            width={12}
            height={12}
            style={{
              transform: `${isActive ? "rotate(180deg)" : "rotate(0deg)"}`,
            }}
            className={`arrow-down group-hover:!fill-white group-hover:!color-[#FFFFFF] group-hover:!text-[#FFFFFF] ${isActiveClassName} ${isCollapsedSidebarClassName}`}
          />
        )}
      </div>
      {isActive && !isCollapsed && (
        <div className="flex flex-col gap-[2px]">
          {hasItems &&
            submenu.map((subMenuItem) => {
              const { title } = subMenuItem;
              const isSubItemActive = submenu?.find(
                (item) => title === activeItem
              );
              const isSubItemActiveClassName = isSubItemActive
                ? "active-item"
                : "";

              return (
                <div
                  key={title}
                  onClick={() => setActiveItem(title)}
                  className={`subitem flex flex-row items-center gap-6 py-5 group hover:!text-[#FFFFFF] hover:bg-[#50D8A526] rounded justify-between cursor-pointer ${isSubItemActiveClassName}`}
                >
                  <p
                    className={`subitem-text text-[15px] text-[#2D3B4E7A] group-hover:text-[#42C594] pl-16  ${isSubItemActiveClassName}`}
                  >
                    {title}
                  </p>
                </div>
              );
            })}
        </div>
      )}
    </div>
  );
};

export default MenuItem;
