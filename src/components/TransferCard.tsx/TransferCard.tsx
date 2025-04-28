import { Transfer } from "../../types/Content";

type TransferCardPropsType = {
  transfer: Transfer;
};

const TransferCard: React.FC<TransferCardPropsType> = ({ transfer }) => {
  const { location_title } = transfer ?? {};
  return (
    <div
      style={{ boxShadow: "0px 1px 1px 0px #2D3B4E0F" }}
      className="w-[320px] h-[310px] bg-[#FFFFFF] rounded-md"
    >
      {location_title}
    </div>
  );
};

export default TransferCard;
