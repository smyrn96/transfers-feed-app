import { ReactComponent as PassengersIcon } from "../../assets/icons/Passengers.Icon.svg";
import { ReactComponent as BabySeatsIcon } from "../../assets/icons/Child_seat.Icon.svg";
import { ReactComponent as LuggageIcon } from "../../assets/icons/Luggage.Icon.svg";
import { ReactComponent as HandLuggageIcon } from "../../assets/icons/Hand Luggage. Icon.svg";
import { ReactComponent as ArrowDown } from "../../assets/icons/Arrow. Down.svg";

type FlightPassengerDetailsPropsType = {
  passengers: number;
  babyseats: number;
  luggage: number;
  hand_luggage: number;
  isSmallScreens?: boolean;
};

const FlightPassengerDetails: React.FC<FlightPassengerDetailsPropsType> = ({
  passengers,
  babyseats,
  luggage,
  hand_luggage,
  isSmallScreens,
}) => {
  const detailsItems = [
    { icon: <PassengersIcon />, num: passengers },
    { icon: <BabySeatsIcon />, num: babyseats },
    { icon: <LuggageIcon />, num: luggage },
    { icon: <HandLuggageIcon />, num: hand_luggage },
  ];

  return (
    <div
      style={{
        maxWidth: isSmallScreens ? "320px" : "",
        border: isSmallScreens ? "1px solid #2D3B4E14" : "",
        background: isSmallScreens ? "none" : "",
      }}
      className="max-w-[284px] bg-[#2D3B4E0A] rounded-[18px] flex flex-row justify-between py-[0.6rem] px-5 mt-6"
    >
      <div className="flex flex-row gap-5 w-full">
        {detailsItems.map((item) => {
          return (
            <div className="flex flex-row items-center gap-2">
              {item.icon}
              <div className="text-[#2D3B4E80] font-semibold text-xs">
                {item.num}
              </div>
            </div>
          );
        })}
      </div>
      {isSmallScreens && (
        <ArrowDown width={20} height={20} className="text-[#2D3B4E80]" />
      )}
    </div>
  );
};

export default FlightPassengerDetails;
