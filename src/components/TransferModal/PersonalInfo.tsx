import { formatDateHelper } from "../../hooks";
import { OpportunityType } from "../../types/Content";
import LabelAndValue from "./LabelAndValue";

type PersonalInfoPropsType = {
  traveler?: {
    phone_number: string;
    email: string;
    country: string;
  };
  babies: boolean;
  return_transfer: boolean;
  early_checkin: boolean;
  late_checkout: boolean;
  property_title?: string;
  datetime?: string;
  location_title?: string;
};

const PersonalInfo: React.FC<PersonalInfoPropsType> = ({
  traveler,
  babies,
  return_transfer,
  early_checkin,
  late_checkout,
  property_title,
  datetime,
  location_title,
}) => {
  const isCard = Boolean(property_title && datetime && location_title);
  const personalInfo = !isCard
    ? [
        { label: "Phone number", value: traveler?.phone_number ?? "" },
        { label: "Email", value: traveler?.email ?? "" },
        { label: "Coming from", value: traveler?.country ?? "" },
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
      ]
    : [
        { label: "PROPERTY", value: property_title ?? "" },
        { label: "ARRIVAL TIME", value: formatDateHelper(datetime ?? "") },
        { label: "FROM", value: location_title ?? "" },
        {
          label: "OPPORTUNITIES",
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

  console.log(isCard);

  const noOpportunities = !(
    personalInfo[3].value as { value: boolean; variant: OpportunityType }[]
  ).find((opportunity) => opportunity.value);

  return (
    <div
      style={{ gap: isCard ? 8 : "", margin: isCard ? 0 : "" }}
      className="flex flex-col ml-0 mt-8 gap-8 w-full ml-[60px]"
    >
      {personalInfo.map((info) => {
        const isOpportunity = info.label.toLowerCase() === "opportunities";

        return (
          <LabelAndValue
            info={info}
            isOpportunity={isOpportunity}
            noOpportunities={noOpportunities}
            isCard={isCard}
            key={info.label}
          />
        );
      })}
    </div>
  );
};

export default PersonalInfo;
