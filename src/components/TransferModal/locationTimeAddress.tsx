type LocationTimeAddressPropsType = {
  locationTitle: string;
  locationTime: string;
  locationAddress: string;
};

const LocationTimeAddress: React.FC<LocationTimeAddressPropsType> = ({
  locationTitle,
  locationTime,
  locationAddress,
}) => {
  return (
    <div className="flex flex-col">
      <div className="flex flex-row justify-between min-w-[250px]">
        <span className="text-[#2D3B4E] text-[15px]">{locationTitle}</span>
        <span className="text-[#2D3B4E80] text-[14px] font-semibold">
          {locationTime}
        </span>
      </div>
      <div className="text-[#2D3B4E80] text-[12px]">{locationAddress}</div>
    </div>
  );
};

export default LocationTimeAddress;
