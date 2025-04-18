export type MenuItemsType = {
  title: string;
  icon?: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
  submenu?: MenuItemsType[];
};
