import { createContext, useContext, useState, ReactNode } from "react";

type TransferContextType = {
  isExpanded: boolean;
  setIsExpanded: (isExpanded: boolean) => void;
};

const TransferContext = createContext<TransferContextType | undefined>(
  undefined
);

export const TransferProvider = ({ children }: { children: ReactNode }) => {
  const [isExpanded, setIsExpanded] = useState<boolean>(true);

  return (
    <TransferContext.Provider value={{ isExpanded, setIsExpanded }}>
      {children}
    </TransferContext.Provider>
  );
};

export const useTransferContext = () => {
  const context = useContext(TransferContext);
  if (!context) {
    throw new Error(
      "useTransferContext must be used within a TransferProvider"
    );
  }
  return context;
};
