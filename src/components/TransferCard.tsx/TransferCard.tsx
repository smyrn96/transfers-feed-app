import { formatDateHelper } from "../../hooks";
import { Transfer } from "../../types/Content";
import { ReactComponent as CalendarIcon } from "../../assets/icons/smallCalendar.svg";
import PersonalInfo from "../TransferModal/PersonalInfo";
import ImageNameCategory from "./ImageNameCategory";

type TransferCardPropsType = {
  transfer: Transfer;
  datetime: string;
  setCardClicked: (id: number, isCard?: boolean) => void;
};

const TransferCard: React.FC<TransferCardPropsType> = ({
  transfer,
  datetime,
  setCardClicked,
}) => {
  const {
    location_title,
    traveler_first_name,
    traveler_last_name,
    traveler_photo,
    property_title,
    category,
    babies,
    return_transfer,
    early_checkin,
    late_checkout,
    datetime: date,
    id,
  } = transfer ?? {};

  console.log(id, traveler_first_name);

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
        className="w-[90%] bg-[#FFFFFF] rounded-md"
        onClick={() => setCardClicked(id, true)}
      >
        <div className="p-6">
          <ImageNameCategory
            traveler_first_name={traveler_first_name}
            traveler_last_name={traveler_last_name}
            traveler_photo={traveler_photo}
            category={category}
          />
          <div className="mt-4">
            <PersonalInfo
              datetime={date}
              location_title={location_title}
              property_title={property_title}
              babies={babies}
              return_transfer={return_transfer}
              early_checkin={early_checkin}
              late_checkout={late_checkout}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default TransferCard;
