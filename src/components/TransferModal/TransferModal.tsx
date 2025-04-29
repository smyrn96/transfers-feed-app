import {
  OpportunityType,
  Transfer,
  TransferDetails,
} from "../../types/Content";
import { ReactComponent as CloseIcon } from "../../assets/icons/cross.svg";
import { useQueryHook } from "../../hooks";
import { getSingleTransferDetails } from "../../api/services/user.service";
import PersonalInfo from "./PersonalInfo";
import ImageFullName from "./ImageFullName";
import TransferDetailsGrid from "./TransferDetails";
import { useResponsive } from "ahooks";
import RoundIcon from "../RoundIcon/RoundIcon";
import { opportunitiesMapping } from "../../constants";
import TransferCardDetailsGuest from "./TransferCardDetailsGuest";

type TransferModalPropsType = {
  transfer: Transfer;
  closeHandler: () => void;
};

const TransferModal: React.FC<TransferModalPropsType> = ({
  transfer,
  closeHandler,
}) => {
  const responsive = useResponsive();
  const { md, lg, sm } = responsive;
  const isSmallScreens = !md && !lg && !sm;

  const {
    traveler_photo,
    traveler_last_name: lastName,
    traveler_first_name: firstName,
    id: selectedTransferId,
    babies,
    return_transfer,
    early_checkin,
    late_checkout,
    datetime,
  } = transfer ?? {};

  const opportunitiesArray: { value: boolean; variant: OpportunityType }[] = [
    {
      value: babies,
      variant: "baby",
    },
    {
      value: return_transfer,
      variant: "transfer",
    },
    {
      value: early_checkin,
      variant: "early-check-in",
    },
    {
      value: late_checkout,
      variant: "late-check-out",
    },
  ];

  const noOpportunities = !opportunitiesArray.find(
    (opportunity) => opportunity.value
  );

  const renderValue = (
    <div className="flex flex-col gap-2 mt-2">
      {noOpportunities ? (
        <RoundIcon opportunity={"none"} />
      ) : (
        opportunitiesArray.map((opportunity, index) => {
          return (
            opportunity.value && (
              <div
                className="flex flex-row items-center gap-4"
                key={opportunity.variant}
              >
                <RoundIcon opportunity={opportunity.variant} />
                <div className="text-sm text-[#2D3B4E] font-normal">
                  {opportunitiesMapping[index]}
                </div>
              </div>
            )
          );
        })
      )}
    </div>
  );

  const { data: transferDetails } = useQueryHook({
    enabled: Boolean(selectedTransferId),
    query: ["transfer_list_details", String(selectedTransferId)],
    serviceFunction: () => getSingleTransferDetails(Number(selectedTransferId)),
  });

  const { traveler } = (transferDetails as TransferDetails) ?? {};

  return (
    <div
      style={{
        backdropFilter: "blur(21.746253967285156px)",
        zIndex: isSmallScreens ? "9999" : "",
        alignItems: isSmallScreens ? "flex-start" : "",
      }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-[#2D3B4ED9]"
      onClick={() => {
        closeHandler();
      }}
    >
      <div
        style={{
          boxShadow: "0px 2px 10px 0px #19283E80",
          height: isSmallScreens ? "100%" : "",
          maxHeight: isSmallScreens ? "none" : "",
          borderTopLeftRadius: isSmallScreens ? "12px" : "",
          borderTopRightRadius: isSmallScreens ? "12px" : "",
          flexDirection: isSmallScreens ? "column" : "row",
          overflowY: isSmallScreens ? "scroll" : "hidden",
          marginTop: isSmallScreens ? "1rem" : "",
        }}
        className="bg-[#FFFFFF] rounded-lg w-full max-w-[990px] h-full max-h-[666px] relative flex flex-row"
      >
        {!isSmallScreens ? (
          <>
            <div className="min-w-[240px] flex flex-col items-center">
              <ImageFullName
                traveler_photo={traveler_photo}
                firstName={firstName}
                lastName={lastName}
              />
              <hr
                style={{ backgroundColor: "#2D3B4E14" }}
                className="w-[184px] text-center !h-px"
              />
              <PersonalInfo
                traveler={traveler}
                babies={babies}
                return_transfer={return_transfer}
                early_checkin={early_checkin}
                late_checkout={late_checkout}
              />
            </div>
            <div className="h-full bg-[#2D3B4E14] w-[1px]"></div>
            <TransferDetailsGrid
              transferDetails={transferDetails}
              datetime={datetime}
            />
            <button
              onClick={() => {
                closeHandler();
              }}
              className="absolute top-6 right-6 rounded-full w-[34px] h-[34px] bg-[#2D3B4E0D] flex justify-center items-center"
            >
              <CloseIcon width={20} height={20} className="text-[#2D3B4E80]" />
            </button>
          </>
        ) : (
          <>
            <div className="flex flex-row justify-between px-4 py-4 bg-[#2D3B4E0A] items-center">
              <div className="text-[#2D3B4E80] font-semibold text-sm">{`${firstName}'s trip`}</div>
              <button
                onClick={() => {
                  closeHandler();
                }}
                className="rounded-full w-[34px] h-[34px] bg-[#2D3B4E0D] flex justify-center items-center"
              >
                <CloseIcon
                  width={20}
                  height={20}
                  className="text-[#2D3B4E80]"
                />
              </button>
            </div>
            <TransferDetailsGrid
              transferDetails={transferDetails}
              datetime={datetime}
              isSmallScreens={isSmallScreens}
            />
            <hr
              style={{ backgroundColor: "#2D3B4E14" }}
              className="w-[90%] text-center !h-px mx-auto"
            />
            <TransferCardDetailsGuest
              traveler_photo={traveler_photo}
              phone_number={traveler?.phone_number}
              country={traveler?.country}
              firstName={firstName}
              lastName={lastName}
              renderValue={renderValue}
            />
          </>
        )}
      </div>
    </div>
  );
};

export default TransferModal;
