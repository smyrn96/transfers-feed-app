import React, { ReactNode } from "react";
import { Transfer } from "../../types/Content";
import ContentWrapper from "../ContentWrapper/ContentWrapper";
import DataTable from "../Table/DataTable";
import { columns } from "./constants";
import { useTransferContext } from "../../context/TransferContext";
import { useResponsive } from "ahooks";
import TransferCard from "../TransferCard.tsx/TransferCard";
import { areDifferentDays } from "../../hooks";

type MainContentPropsType = {
  data?: Transfer[];
  isLoading?: boolean;
  error?: Error | null;
};

declare module "@tanstack/react-table" {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  interface ColumnMeta<TData extends unknown, TValue> {
    headerClassName?: string;
    className?: string;
    tag?: ReactNode;
  }
}

const MainContent: React.FC<MainContentPropsType> = ({
  data,
  isLoading,
  error,
}) => {
  const transferContext = useTransferContext();
  const { setSelectedTransferId } = transferContext;
  const responsive = useResponsive();
  const { md, lg, sm } = responsive;
  const isSmallScreens = !md && !lg && !sm;

  const selectedRowHandler = (rowId: number) => {
    const selectedTransfer = data && data[rowId].id;
    setSelectedTransferId(selectedTransfer ?? null);
  };

  return (
    <ContentWrapper error={error} isLoading={isLoading}>
      {data && (
        <div
          style={{
            gap: isSmallScreens ? "0.75rem" : "",
            paddingBottom: isSmallScreens ? "2rem" : "",
            paddingLeft: isSmallScreens ? "0" : "",
            alignItems: isSmallScreens ? "center" : "",
          }}
          className="flex flex-col pl-10"
        >
          {isSmallScreens ? (
            <>
              {data.map((transfer, index) => {
                const { datetime } = transfer ?? {};
                const showDate =
                  index === 0 ||
                  areDifferentDays(datetime, data[index - 1]?.datetime)
                    ? datetime
                    : "";

                return (
                  <TransferCard
                    transfer={transfer}
                    datetime={showDate}
                    key={transfer.id}
                    setCardClicked={selectedRowHandler}
                  />
                );
              })}
            </>
          ) : (
            <DataTable
              data={data}
              columns={columns}
              defaultSorting={[{ id: "arrival", desc: true }]}
              defaultPageSize={5}
              defaultGrouping={[]}
              setRowClicked={selectedRowHandler}
            />
          )}
        </div>
      )}
    </ContentWrapper>
  );
};

export default MainContent;
