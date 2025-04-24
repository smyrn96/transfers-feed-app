import { MenuItemsType } from "../types/Menu";
import { ReactComponent as LiveView } from "../assets/icons/Live view.svg";
import { ReactComponent as Scheduled } from "../assets/icons/Scheduled.svg";
import { ReactComponent as Statistics } from "../assets/icons/Statistics.svg";
import { ReactComponent as Revenue } from "../assets/icons/Revenue.svg";
import { ReactComponent as Settings } from "../assets/icons/Settings.svg";
import { ReactComponent as Support } from "../assets/icons/Support.svg";
import { ReactComponent as Collapse } from "../assets/icons/Collapse.svg";

export const validLinks: string[] = [
  "live-view",
  "scheduled",
  "statistics",
  "revenue",
  "settings",
  "support",
];

export const linksMapping = {
  "live-view": "Live view",
  scheduled: "Scheduled",
  statistics: "Statistics",
  revenue: "Revenue",
  settings: "Settings",
  support: "Support",
};

export const primaryMenu: MenuItemsType[] = [
  { title: "Live view", icon: LiveView, submenu: [], routeLink: "/live-view" },
  {
    title: "Scheduled",
    icon: Scheduled,
    submenu: [
      { title: "Opportunities" },
      { title: "Early check in" },
      { title: "Other sub item" },
    ],
    routeLink: "/scheduled",
  },
  {
    title: "Statistics",
    icon: Statistics,
    submenu: [],
    routeLink: "/statistics",
  },
  { title: "Revenue", icon: Revenue, submenu: [], routeLink: "/revenue" },
  {
    title: "Settings",
    icon: Settings,
    submenu: [
      { title: "Other sub item 1" },
      { title: "Other sub item 2" },
      { title: "Other sub item 3" },
    ],
    routeLink: "/settings",
  },
];

export const secondaryMenu: MenuItemsType[] = [
  { title: "Support", icon: Support, submenu: [], routeLink: "/support" },
  { title: "Collapse menu", icon: Collapse, submenu: [] },
];

export const opportunitiesMapping = [
  "Babies",
  "Return transfer",
  "Early check-in",
  "Late check-out",
];
