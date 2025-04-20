import React from "react";
import { Transfer } from "../../types/Content";
import { useLocation } from "react-router-dom";
import { getLastPathSegment, isValidRedirectLink } from "../../hooks";
import { linksMapping } from "../../constants";

type MainContentPropsType = {
  data?: Transfer[];
  isLoading?: boolean;
  error?: Error | null;
};

const MainContent: React.FC<MainContentPropsType> = ({
  data,
  isLoading,
  error,
}) => {
  const location = useLocation();
  const activeSegment = getLastPathSegment(location.pathname);
  const pageTitle = isValidRedirectLink(activeSegment)
    ? linksMapping[activeSegment as keyof typeof linksMapping]
    : "";

  return (
    <div
      className="w-full h-[calc(100vh-70px)] pl-[260px]"
      style={{
        backgroundColor: "rgba(45, 59, 78, 0.03)",
        backdropFilter: "blur(21.746253967285156px)",
      }}
    >
      {isLoading ? (
        <div className="flex items-center justify-center p-4">
          <div className="w-12 h-12 border-4 border-[#2D3B4E80] border-t-[#50D8A5] rounded-full animate-spin"></div>
        </div>
      ) : (
        <>
          <h1 className="p-10 text-[22px] font-semibold text-[#2D3B4E]">
            {pageTitle}
          </h1>

          <div className="flex flex-col pl-10"></div>
        </>
      )}
    </div>
  );
};

export default MainContent;
