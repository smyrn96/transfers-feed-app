import { Table } from "@tanstack/react-table";
import { ReactComponent as ArrowDown } from "../../assets/icons/Arrow. Down.svg";

type PaginationButtonPropsType<TData> = {
  table: Table<TData>;
  isLeft: boolean;
};

function PaginationButton<TData>({
  table,
  isLeft,
}: PaginationButtonPropsType<TData>) {
  const buttonAction = isLeft
    ? () => table.previousPage()
    : () => table.nextPage();

  const isDisabled = isLeft
    ? !table.getCanPreviousPage()
    : !table.getCanNextPage();

  return (
    <button
      className="p-2 rounded text-[#2D3B4E80] bg-[#FFFFFF]"
      onClick={buttonAction}
      disabled={isDisabled}
      style={{ boxShadow: " 0px 1px 1px 0px #2D3B4E0F" }}
    >
      <ArrowDown
        width={20}
        height={20}
        style={{
          transform: isLeft ? "rotate(90deg)" : "rotate(270deg)",
        }}
      />
    </button>
  );
}

export default PaginationButton;
