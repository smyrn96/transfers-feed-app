import { createContext, useContext, useState, ReactNode } from "react";

type TransferContextType = {
  isExpanded: boolean;
  selectedTransferId: number | null;
  setSelectedTransferId: (id: number | null) => void;
  setIsExpanded: (isExpanded: boolean) => void;
};

const TransferContext = createContext<TransferContextType | undefined>(
  undefined
);

export const TransferProvider = ({ children }: { children: ReactNode }) => {
  const [isExpanded, setIsExpanded] = useState<boolean>(true);
  const [selectedTransferId, setSelectedTransferId] = useState<number | null>(
    null
  );

  return (
    <TransferContext.Provider
      value={{
        isExpanded,
        setIsExpanded,
        selectedTransferId,
        setSelectedTransferId,
      }}
    >
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
