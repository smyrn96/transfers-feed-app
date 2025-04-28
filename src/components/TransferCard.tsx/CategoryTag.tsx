import { CategoryType } from "../../types/Content";
import { ReactComponent as ArrivingIcon } from "../../assets/icons/Arriving. icon.svg";
import { ReactComponent as DepartingIcon } from "../../assets/icons/Arriving. icon Copy.svg";
import { ReactComponent as CityIcon } from "../../assets/icons/City. Icon.svg";

type CategoryTagPropsType = {
  category: CategoryType;
};

const categoryMappping = {
  Arrival: {
    icon: <ArrivingIcon width={16} />,
    label: "Arriving",
    color: "#56A7FA",
  },
  Departure: {
    icon: <DepartingIcon width={16} />,
    label: "Departing",
    color: "#F96381",
  },
  "In City": {
    icon: <CityIcon width={16} />,
    label: "In city",
    color: "#736BFF",
  },
};

const CategoryTag: React.FC<CategoryTagPropsType> = ({ category }) => {
  const icon = categoryMappping[category].icon;
  const label = categoryMappping[category].label;
  const color = categoryMappping[category].color;

  return (
    <div
      className="flex flex-row items-center gap-2 rounded-2xl px-2 py-1 w-fit"
      style={{ background: color }}
    >
      {icon}
      <span className="text-[#FFFFFF] text-[10px] font-semibold">{label}</span>
    </div>
  );
};

export default CategoryTag;
