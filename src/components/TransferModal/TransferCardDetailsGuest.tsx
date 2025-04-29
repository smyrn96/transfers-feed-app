import { ReactNode } from "react";
import { ReactComponent as PhoneIcon } from "../../assets/icons/Phone.Icon.20.svg";
import { ReactComponent as MessageIcon } from "../../assets/icons/chat.svg";
import ActionButton from "./ActionButton";

type TransferCardDetailsGuestPropsType = {
  traveler_photo: string;
  phone_number: string;
  country: string;
  firstName: string;
  lastName: string;
  renderValue: ReactNode;
};

const TransferCardDetailsGuest: React.FC<TransferCardDetailsGuestPropsType> = ({
  traveler_photo,
  phone_number,
  country,
  firstName,
  lastName,
  renderValue,
}) => {
  return (
    <div className="px-4 py-8">
      <div className="text-xl text-[#2D3B4E] font-semibold">Your guest</div>
      <div className="flex flex-row mt-5">
        <img
          src={traveler_photo}
          alt={lastName}
          className="w-[60px] h-[60px] rounded-full"
        />
        <div
          style={{ borderBottom: "1px solid #2D3B4E14" }}
          className="ml-5 flex flex-col gap-1 w-[70%] pb-4"
        >
          <div className="text-base font-semibold">
            {firstName} {lastName}
          </div>
          <div className="text-sm text-[#2D3B4E80] font-semibold">
            {phone_number}
          </div>
          <div className="text-sm text-[#2D3B4E80] font-semibold">{`From ${country}`}</div>
        </div>
      </div>
      <div className="ml-6 mt-4">
        <div className="text-[#2D3B4E80] text-xs font-semibold mb-1 ml-[3.5rem]">
          Opportunities
        </div>
        {renderValue}
      </div>
      <div className="flex flex-row mt-6 justify-center gap-4">
        <ActionButton icon={<PhoneIcon />} text="Call" />
        <ActionButton icon={<MessageIcon />} text="Message" />
      </div>
    </div>
  );
};

export default TransferCardDetailsGuest;
