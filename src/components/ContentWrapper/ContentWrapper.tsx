import React, { ReactNode } from "react";
import { useLocation } from "react-router-dom";
import { getLastPathSegment, isValidRedirectLink } from "../../hooks";
import { linksMapping } from "../../constants";
import { useTransferContext } from "../../context/TransferContext";
import { useResponsive } from "ahooks";

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
  const responsive = useResponsive();
  const location = useLocation();
  const activeSegment = getLastPathSegment(location.pathname);
  const pageTitle = isValidRedirectLink(activeSegment)
    ? linksMapping[activeSegment as keyof typeof linksMapping]
    : "";
  const { isExpanded } = transferContext;
  const { md, lg, sm } = responsive;
  const isSmallScreens = !md && !lg && !sm;
  const contentHeight = isSmallScreens ? "100%" : "calc(100vh - 70px)";

  return (
    <div
      className="w-full"
      style={{
        backgroundColor: "rgba(45, 59, 78, 0.03)",
        backdropFilter: "blur(21.746253967285156px)",
        paddingLeft: isSmallScreens ? 0 : isExpanded ? "260px" : "82px",
        height: contentHeight,
        paddingTop: isSmallScreens ? "4.5rem" : "",
      }}
    >
      {isLoading ? (
        <div className="flex items-center justify-center p-4">
          <div className="w-12 h-12 border-4 border-t-[#6AE2A6] rounded-full animate-spin"></div>
        </div>
      ) : (
        <>
          {!isSmallScreens && (
            <h1 className="p-10 pb-[1.5rem] text-[22px] font-semibold text-[#2D3B4E]">
              {pageTitle}
            </h1>
          )}

          {children}
        </>
      )}
    </div>
  );
};

export default ContentWrapper;
