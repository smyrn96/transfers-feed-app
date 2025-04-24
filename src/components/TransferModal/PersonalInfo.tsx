import { OpportunityType } from "../../types/Content";
import LabelAndValue from "./LabelAndValue";

type PersonalInfoPropsType = {
  traveler: {
    phone_number: string;
    email: string;
    country: string;
  };
  babies: boolean;
  return_transfer: boolean;
  early_checkin: boolean;
  late_checkout: boolean;
};

const PersonalInfo: React.FC<PersonalInfoPropsType> = ({
  traveler,
  babies,
  return_transfer,
  early_checkin,
  late_checkout,
}) => {
  const personalInfo = [
    { label: "Phone number", value: traveler?.phone_number },
    { label: "Email", value: traveler?.email },
    { label: "Coming from", value: traveler?.country },
    {
      label: "Opportunities",
      value: [
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
      ],
    },
  ];

  const noOpportunities = !(
    personalInfo[3].value as { value: boolean; variant: OpportunityType }[]
  ).find((opportunity) => opportunity.value);

  return (
    <div className="flex flex-col ml-0 mt-8 gap-8 w-full ml-[60px]">
      {personalInfo.map((info) => {
        const isOpportunity = info.label === "Opportunities";

        return (
          <LabelAndValue
            info={info}
            isOpportunity={isOpportunity}
            noOpportunities={noOpportunities}
          />
        );
      })}
    </div>
  );
};

export default PersonalInfo;
