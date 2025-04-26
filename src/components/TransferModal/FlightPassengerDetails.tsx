import { ReactComponent as PassengersIcon } from "../../assets/icons/Passengers.Icon.svg";
import { ReactComponent as BabySeatsIcon } from "../../assets/icons/Child_seat.Icon.svg";
import { ReactComponent as LuggageIcon } from "../../assets/icons/Luggage.Icon.svg";
import { ReactComponent as HandLuggageIcon } from "../../assets/icons/Hand Luggage. Icon.svg";

type FlightPassengerDetailsPropsType = {
  passengers: number;
  babyseats: number;
  luggage: number;
  hand_luggage: number;
};

const FlightPassengerDetails: React.FC<FlightPassengerDetailsPropsType> = ({
  passengers,
  babyseats,
  luggage,
  hand_luggage,
}) => {
  const detailsItems = [
    { icon: <PassengersIcon />, num: passengers },
    { icon: <BabySeatsIcon />, num: babyseats },
    { icon: <LuggageIcon />, num: luggage },
    { icon: <HandLuggageIcon />, num: hand_luggage },
  ];

  return (
    <div className="max-w-[284px] bg-[#2D3B4E0A] rounded-[18px] flex flex-row gap-5 py-[0.6rem] px-5 mt-6">
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
  );
};

export default FlightPassengerDetails;
