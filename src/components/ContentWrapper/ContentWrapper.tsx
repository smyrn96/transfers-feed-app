import React, { ReactNode } from "react";
import { useLocation } from "react-router-dom";
import { getLastPathSegment, isValidRedirectLink } from "../../hooks";
import { linksMapping } from "../../constants";
import { useTransferContext } from "../../context/TransferContext";

type ContentWrapperPropsType = {
  isLoading?: boolean;
  error?: Error | null;
  children: ReactNode;
};

const ContentWrapper: React.FC<ContentWrapperPropsType> = ({
  children,
  isLoading,
  error,
}) => {
  const transferContext = useTransferContext();
  const location = useLocation();
  const activeSegment = getLastPathSegment(location.pathname);
  const pageTitle = isValidRedirectLink(activeSegment)
    ? linksMapping[activeSegment as keyof typeof linksMapping]
    : "";
  const { isExpanded } = transferContext;

  return (
    <div
      className="w-full h-[calc(100vh-70px)]"
      style={{
        backgroundColor: "rgba(45, 59, 78, 0.03)",
        backdropFilter: "blur(21.746253967285156px)",
        paddingLeft: isExpanded ? "260px" : "82px",
      }}
    >
      {isLoading ? (
        <div className="flex items-center justify-center p-4">
          <div className="w-12 h-12 border-4 border-[#2D3B4E80] border-t-[#6AE2A6] rounded-full animate-spin"></div>
        </div>
      ) : (
        <>
          <h1 className="p-10 pb-[1.5rem] text-[22px] font-semibold text-[#2D3B4E]">
            {pageTitle}
          </h1>

          {children}
        </>
      )}
    </div>
  );
};

export default ContentWrapper;
