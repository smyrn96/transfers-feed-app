import { formatDateHelper } from "../../hooks";
import { Transfer } from "../../types/Content";
import { ReactComponent as CalendarIcon } from "../../assets/icons/smallCalendar.svg";

type TransferCardPropsType = {
  transfer: Transfer;
  datetime: string;
};

const TransferCard: React.FC<TransferCardPropsType> = ({
  transfer,
  datetime,
}) => {
  const { location_title } = transfer ?? {};
  return (
    <>
      {Boolean(datetime) && (
        <div className="bg-[#2D3B4E0A] w-[90%] rounded-2xl mt-2">
          <div className="text-[#2D3B4E66] text-sm font-semibold px-3 py-1 flex flex-row items-center gap-2">
            <CalendarIcon width={18} height={18} />
            {formatDateHelper(datetime)}
          </div>
        </div>
      )}
      <div
        style={{ boxShadow: "0px 1px 1px 0px #2D3B4E0F" }}
        className="w-[90%] h-[310px] bg-[#FFFFFF] rounded-md"
      >
        {location_title}
      </div>
    </>
  );
};

export default TransferCard;
