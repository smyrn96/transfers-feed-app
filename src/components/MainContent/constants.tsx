import { ColumnDef } from "@tanstack/react-table";
import { OpportunityType, Transfer } from "../../types/Content";
import RoundIcon from "../RoundIcon/RoundIcon";
import { formatDateHelper } from "../../hooks";
import Tag from "../Tag/Tag";
import { ReactComponent as ProfileImage } from "../../assets/icons/profile.icon.svg";

export const columns: ColumnDef<Transfer>[] = [
  {
    accessorKey: "category",
    header: "STATUS",
    meta: {
      headerClassName: "pr-0",
    },
    cell: ({ row }) => {
      const category = row.original.category;

      return (
        <div className="flex items-center gap-2">
          <RoundIcon category={category} />
        </div>
      );
    },
  },
  {
    accessorKey: "traveler_first_name",
    header: "TRAVELLER",
    meta: {
      headerClassName: "pl-0",
      className: "text-[14px] text-[#2D3B4E] pl-0",
    },
    cell: ({ row }) => {
      const first = row.original.traveler_first_name;
      const last = row.original.traveler_last_name;
      const photo = row.original.traveler_photo;

      return (
        <div className="flex items-center gap-4">
          {photo ? (
            <img
              src={photo}
              alt={`${first} ${last}`}
              className="h-[38px] w-[38px] rounded-full object-cover"
            />
          ) : (
            <div className="w-[38px] h-[38px] flex justify-center items-center bg-[#F4F5F6] rounded-full">
              <ProfileImage width={15} height={18} />
            </div>
          )}
          <span className="truncate max-w-[184px] overflow-hidden">{`${first} ${last}`}</span>
        </div>
      );
    },
  },
  {
    accessorKey: "datetime",
    header: "ARRIVAL/ DEPARTURE",
    meta: {
      className: "text-[14px] text-[#2D3B4E]",
    },
    enableGrouping: true,
    cell: ({ row }) => {
      const transferDate = row.original.datetime;

      return (
        <div className="flex items-center gap-2 truncate max-w-[184px] overflow-hidden">
          {formatDateHelper(transferDate)}
        </div>
      );
    },
  },
  {
    accessorKey: "location_title",
    header: "FROM/ TO",
    meta: {
      className: "text-[14px] text-[#2D3B4E]",
    },
    cell: ({ row }) => {
      const transferLocation = row.original.location_title;

      return (
        <div className="flex items-center gap-2 truncate max-w-[184px] overflow-hidden">
          {transferLocation}
        </div>
      );
    },
  },
  {
    accessorKey: "opportunities",
    header: "OPPORTUNITIES",
    meta: {
      headerClassName: "pr-4",
      className: "pr-4 min-w-[200px]",
      tag: <Tag text={"New"} variant="new" />,
    },
    sortingFn: (rowA, rowB) => {
      const getCount = (row: any) => {
        const data = row.original;
        return [
          data.babies,
          data.return_transfer,
          data.early_checkin,
          data.late_checkout,
        ].filter(Boolean).length;
      };

      return getCount(rowB) - getCount(rowA);
    },
    enableSorting: true,
    cell: ({ row }) => {
      const { babies, late_checkout, early_checkin, return_transfer } =
        row.original;

      const opportunitiesArray: { value: boolean; variant: OpportunityType }[] =
        [
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

      return (
        <div className="flex items-center gap-2">
          {noOpportunities ? (
            <RoundIcon opportunity={"none"} />
          ) : (
            opportunitiesArray.map((opportunity) => {
              return (
                opportunity.value && (
                  <RoundIcon opportunity={opportunity.variant} />
                )
              );
            })
          )}
        </div>
      );
    },
  },
];
