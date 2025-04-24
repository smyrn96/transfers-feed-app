import { Transfer, TransferDetails } from "../../types/Content";
import { ReactComponent as CloseIcon } from "../../assets/icons/cross.svg";
import { useQueryHook } from "../../hooks";
import { getSingleTransferDetails } from "../../api/services/user.service";
import PersonalInfo from "./PersonalInfo";
import ImageFullName from "./ImageFullName";

type TransferModalPropsType = {
  transfer: Transfer;
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
  closeHandler: () => void;
};

const TransferModal: React.FC<TransferModalPropsType> = ({
  transfer,
  isOpen,
  setIsOpen,
  closeHandler,
}) => {
  console.log(transfer);
  const {
    traveler_photo,
    traveler_last_name: lastName,
    traveler_first_name: firstName,
    id: selectedTransferId,
    babies,
    return_transfer,
    early_checkin,
    late_checkout,
  } = transfer ?? {};

  const { data: transferDetails } = useQueryHook({
    enabled: Boolean(selectedTransferId),
    query: ["transfer_list_details", String(selectedTransferId)],
    serviceFunction: () => getSingleTransferDetails(Number(selectedTransferId)),
  });

  const { traveler } = (transferDetails as TransferDetails) ?? {};

  return (
    <div
      style={{ backdropFilter: "blur(21.746253967285156px)" }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-[#2D3B4ED9]"
    >
      <div
        style={{ boxShadow: "0px 2px 10px 0px #19283E80" }}
        className="bg-[#FFFFFF] rounded-lg w-full max-w-[990px] h-full max-h-[666px] relative flex flex-row"
      >
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
        <div></div>
        <div className="h-full bg-[#2D3B4E14] w-[1px]"></div>
        <button
          onClick={() => {
            closeHandler();
            setIsOpen(false);
          }}
          className="absolute top-3 right-3 rounded-full w-[30px] h-[30px] bg-[#2D3B4E0D] flex justify-center items-center"
        >
          <CloseIcon width={20} height={20} />
        </button>
      </div>
    </div>
  );
};

export default TransferModal;
