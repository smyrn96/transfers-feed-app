import { Table } from "@tanstack/react-table";
import PaginationButton from "./PaginationButton";

type PaginationPropsType<TData> = {
  table: Table<TData>;
};

function Pagination<TData>({ table }: PaginationPropsType<TData>) {
  return (
    <div className="flex items-center justify-center mt-4">
      <div className="flex items-center gap-3">
        <PaginationButton table={table} isLeft={true} />

        <div className="flex flex-row">
          {table.getPageOptions().map((page, index) => {
            const isFirst = index === 0;
            const isLast = index === table.getPageOptions().length - 1;
            const isCurrentPage =
              table.getState().pagination.pageIndex === index;

            return (
              <button
                key={page}
                style={{
                  borderTopLeftRadius: isFirst ? "4px" : "",
                  borderBottomLeftRadius: isFirst ? "4px" : "",
                  borderTopRightRadius: isLast ? "4px" : "",
                  borderBottomRightRadius: isLast ? "4px" : "",
                  background: isCurrentPage ? "#2D3B4E" : "",
                  color: isCurrentPage ? "#FFFFFF" : "",
                  fontWeight: isCurrentPage ? 600 : 400,
                }}
                className="w-[38px] h-[38px] bg-[#FFFFFF] text-[#2D3B4E80] text-[14px]"
                onClick={() => table.setPageIndex(index)}
              >
                {page + 1}
              </button>
            );
          })}
        </div>

        <PaginationButton table={table} isLeft={false} />
      </div>
    </div>
  );
}

export default Pagination;
