import { opportunitiesMapping } from "../../constants";
import { OpportunityType } from "../../types/Content";
import RoundIcon from "../RoundIcon/RoundIcon";

type LabelAndValuePropsType = {
  info:
    | {
        label: string;
        value: string;
      }
    | {
        label: string;
        value: {
          value: boolean;
          variant: string;
        }[];
      };
  noOpportunities: boolean;
  isOpportunity: boolean;
  isCard?: boolean;
};

const LabelAndValue: React.FC<LabelAndValuePropsType> = ({
  isOpportunity,
  noOpportunities,
  info,
  isCard,
}) => {
  const renderValue = isOpportunity ? (
    <div
      style={{
        flexDirection: isCard ? "row" : "column",
        gap: isCard ? "1rem" : "",
      }}
      className="flex flex-col gap-2 mt-2"
    >
      {noOpportunities ? (
        <RoundIcon opportunity={"none"} />
      ) : (
        (
          info.value as {
            value: boolean;
            variant: OpportunityType;
          }[]
        ).map((opportunity, index) => {
          return (
            opportunity.value && (
              <div
                className="flex flex-row items-center gap-2"
                key={opportunity.variant}
              >
                <RoundIcon opportunity={opportunity.variant} />
                {!isCard && (
                  <div className="text-sm text-[#2D3B4E] font-normal">
                    {opportunitiesMapping[index]}
                  </div>
                )}
              </div>
            )
          );
        })
      )}
    </div>
  ) : (
    <div
      style={{
        fontSize: isCard ? "15px" : "",
      }}
      className="text-sm text-[#2D3B4E] font-normal"
    >
      {info.value as string}
    </div>
  );

  return (
    <div className="">
      <div
        style={{
          fontSize: isCard ? "10px" : "",
          marginBottom: isCard ? "2px" : "",
        }}
        className="text-[#2D3B4E80] text-xs font-semibold mb-1"
      >
        {info.label}
      </div>
      {renderValue}
    </div>
  );
};

export default LabelAndValue;
