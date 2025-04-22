import React from "react";

import { ReactComponent as Baby } from "../../assets/icons/baby.svg";
import { ReactComponent as TransferIcon } from "../../assets/icons/Transfer.svg";
import { ReactComponent as EarlyCheckIn } from "../../assets/icons/early check in.svg";
import { ReactComponent as LateCheckOut } from "../../assets/icons/late check out.svg";
import { ReactComponent as Transferring } from "../../assets/icons/Transferring.svg";
import { ReactComponent as Arrival } from "../../assets/icons/Arriving.svg";
import { ReactComponent as Departure } from "../../assets/icons/Departing.svg";
import { CategoryType, OpportunityType } from "../../types/Content";

type RoundIconPropsType = {
  opportunity?: OpportunityType;
  category?: CategoryType;
};

const icons = {
  baby: <Baby width={24} height={24} className="text-[#9098A1]" />,
  transfer: <TransferIcon width={24} height={24} className="text-[#9098A1]" />,
  "early-check-in": (
    <EarlyCheckIn width={24} height={24} className="text-[#9098A1]" />
  ),
  "late-check-out": (
    <LateCheckOut width={24} height={24} className="text-[#9098A1]" />
  ),

  Arrival: <Departure />,
  Departure: <Arrival />,
  "In City": <Transferring />,
};

const RoundIcon: React.FC<RoundIconPropsType> = ({ opportunity, category }) => {
  const icon = opportunity ? icons[opportunity] : category && icons[category];

  return (
    <>
      {opportunity ? (
        <div className="w-[38px] h-[38px] rounded-full bg-[#F4F5F6] flex justify-center items-center">
          {icon}
        </div>
      ) : (
        icon
      )}
    </>
  );
};

export default RoundIcon;
