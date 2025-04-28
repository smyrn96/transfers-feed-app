import { CategoryType } from "../../types/Content";
import CategoryTag from "./CategoryTag";

type ImageNameCategoryPropsType = {
  traveler_first_name: string;
  traveler_last_name: string;
  traveler_photo: string;
  category: CategoryType;
};

const ImageNameCategory: React.FC<ImageNameCategoryPropsType> = ({
  traveler_first_name,
  traveler_last_name,
  traveler_photo,
  category,
}) => {
  return (
    <div className="flex flex-row w-full justify-between">
      <div className="flex flex-col gap-2">
        <CategoryTag category={category} />
        <div className="text-[#2D3B4E] font-semibold text-xl">{`${traveler_first_name} ${traveler_last_name}`}</div>
      </div>
      <img
        src={traveler_photo}
        alt={traveler_last_name}
        className="w-[54px] h-[54px] rounded-full"
      />
    </div>
  );
};

export default ImageNameCategory;
