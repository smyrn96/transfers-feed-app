import { extractTime, formatDateHelper } from "../../hooks";
import { TransferDetails } from "../../types/Content";
import FlightPassengerDetails from "./FlightPassengerDetails";
import FlightStatusDetails from "./FlightStatusDetails";
import FromToIcon from "./FromToIcon";
import LocationTimeAddress from "./locationTimeAddress";

type TransferDetailsGridPropsType = {
  transferDetails: TransferDetails;
  datetime: string;
  isSmallScreens?: boolean;
};

const TransferDetailsGrid: React.FC<TransferDetailsGridPropsType> = ({
  transferDetails,
  datetime,
  isSmallScreens,
}) => {
  const {
    from_location_title,
    from_datetime,
    from_location_address,
    to_datetime,
    to_location_title,
    to_location_address,
    passengers,
    babyseats,
    luggage,
    hand_luggage,
    flight_status: flightStatus,
  } = transferDetails ?? {};
  const date = formatDateHelper(datetime, true);
  const fromTime = extractTime(from_datetime);
  const toTime = extractTime(to_datetime);
  const { flight_number, flight_status, flight_time } = flightStatus ?? {};
  const hasFlightStatus = Boolean(flightStatus);

  return (
    <div
      style={{
        width: isSmallScreens ? "100%" : "",
        display: isSmallScreens ? "flex" : "",
        alignItems: isSmallScreens ? "center" : "",
      }}
    >
      {!isSmallScreens && (
        <div className="mt-10 text-[22px] text-[#2D3B4E] font-semibold ml-12">
          Transfers
        </div>
      )}
      <div
        style={{
          width: isSmallScreens ? "100%" : "",
          marginLeft: isSmallScreens ? 0 : "",
          background: isSmallScreens ? "none" : "",
          display: isSmallScreens ? "flex" : "",
          flexDirection: "column",
          padding: isSmallScreens ? "1rem" : "",
        }}
        className="w-[656px] min-h-[314px] bg-[#2D3B4E08] ml-12 mt-4 rounded-md px-[2rem] py-[1.5rem]"
      >
        <div className="text-[18px] text-[#2D3B4E] font-semibold w-fit">
          {date}
          <hr
            style={{ backgroundColor: "#2D3B4E14" }}
            className="w-full text-center h-[2px] mt-2 !bg-[#48D9A4] border-none rounded-[1.5px]"
          />
        </div>
        <div className="flex flex-row mt-4 gap-4">
          <FromToIcon />
          <div
            style={{
              maxWidth: isSmallScreens ? "none" : "",
              width: isSmallScreens ? "100%" : "",
            }}
            className="flex flex-col gap-[0.8rem]"
          >
            <LocationTimeAddress
              locationTitle={from_location_title}
              locationTime={fromTime}
              locationAddress={from_location_address}
              isSmallScreens={isSmallScreens}
            />
            <LocationTimeAddress
              locationTitle={to_location_title}
              locationTime={toTime}
              locationAddress={to_location_address}
              isSmallScreens={isSmallScreens}
            />
          </div>
        </div>

        <FlightPassengerDetails
          babyseats={babyseats}
          passengers={passengers}
          luggage={luggage}
          hand_luggage={hand_luggage}
          isSmallScreens={isSmallScreens}
        />
        {hasFlightStatus && (
          <FlightStatusDetails
            flight_number={flight_number}
            flight_status={flight_status}
            flight_time={flight_time}
            isSmallScreens={isSmallScreens}
          />
        )}
      </div>
    </div>
  );
};

export default TransferDetailsGrid;
