import React, { ReactNode } from "react";
import { Transfer } from "../../types/Content";
import ContentWrapper from "../ContentWrapper/ContentWrapper";
import DataTable from "../Table/DataTable";
import { columns } from "./constants";
import { useTransferContext } from "../../context/TransferContext";

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

  const selectedRowHandler = (rowId: number) => {
    const selectedTransfer = data && data[rowId].id;
    setSelectedTransferId(selectedTransfer ?? null);
  };

  return (
    <ContentWrapper error={error} isLoading={isLoading}>
      {data && (
        <div className="flex flex-col pl-10">
          <DataTable
            data={data}
            columns={columns}
            defaultSorting={[{ id: "arrival", desc: true }]}
            defaultPageSize={5}
            defaultGrouping={[]}
            setRowClicked={selectedRowHandler}
          />
        </div>
      )}
    </ContentWrapper>
  );
};

export default MainContent;
