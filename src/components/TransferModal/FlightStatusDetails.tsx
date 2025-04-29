import { ReactComponent as FlightNumberIcon } from "../../assets/icons/Takeoff_Icon.20.svg";
import { ReactComponent as FlightTimeIcon } from "../../assets/icons/Time_Icon.20.svg";

type FlightStatusDetailsPropsType = {
  flight_number: string;
  flight_status: string;
  flight_time: string;
  isSmallScreens?: boolean;
};

const FlightStatusDetails: React.FC<FlightStatusDetailsPropsType> = ({
  flight_number,
  flight_status,
  flight_time,
  isSmallScreens,
}) => {
  const detailsItems = [
    { icon: <FlightNumberIcon />, label: flight_number },
    { icon: <FlightTimeIcon />, label: flight_time },
    { icon: "", label: flight_status },
  ];

  const flightStatusColor =
    flight_status === "On time"
      ? "#48D9A4"
      : flight_status === "Cancelled"
      ? "#D8505C"
      : "";

  return (
    <div
      style={{
        maxWidth: isSmallScreens ? "320px" : "",
        border: isSmallScreens ? "1px solid #2D3B4E14" : "",
        background: isSmallScreens ? "none" : "",
      }}
      className="max-w-[284px] bg-[#2D3B4E0A] rounded-[18px] flex flex-row gap-3 py-[0.6rem] px-5 mt-2"
    >
      {detailsItems.map((item, index) => {
        const isLastItem = index === 2;
        const isFlightStatus = item.icon === "";

        return (
          <div className="flex flex-row items-center gap-3">
            <div className="flex flex-row items-center gap-2">
              {item.icon}
              <div
                style={{ color: isFlightStatus ? flightStatusColor : "" }}
                className="text-[#2D3B4E80] font-semibold text-xs"
              >
                {item.label}
              </div>
            </div>
            {!isLastItem ? (
              <div className="h-[20px] w-[1px] bg-[#2D3B4E14]"></div>
            ) : (
              ""
            )}
          </div>
        );
      })}
    </div>
  );
};

export default FlightStatusDetails;
