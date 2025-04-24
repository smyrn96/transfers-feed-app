import React, { ReactNode, useEffect, useState } from "react";
import TopHeader from "../components/TopHeader/TopHeader";
import Sidebar from "../components/Menu/Sidebar/Sidebar";
import TransferModal from "../components/TransferModal/TransferModal";
import { useQueryHook } from "../hooks";
import { getTransfer } from "../api/services/user.service";
import { useTransferContext } from "../context/TransferContext";

type MainLayoutPropsType = {
  children: ReactNode;
};

const MainLayout: React.FC<MainLayoutPropsType> = ({ children }) => {
  const [isOpenModal, setIsOpenModal] = useState(false);
  const transferContext = useTransferContext();
  const { selectedTransferId, setSelectedTransferId } = transferContext;

  const { data: transfer } = useQueryHook({
    enabled: selectedTransferId !== null,
    query: ["transfer_list", String(selectedTransferId)],
    serviceFunction: () => getTransfer(Number(selectedTransferId)),
  });

  useEffect(() => {
    if (Boolean(selectedTransferId)) {
      setIsOpenModal(true);
    }
  }, [selectedTransferId]);

  return (
    <div>
      <TopHeader />
      <Sidebar />
      {isOpenModal && (
        <TransferModal
          transfer={transfer}
          isOpen={isOpenModal}
          setIsOpen={setIsOpenModal}
          closeHandler={() => setSelectedTransferId(null)}
        />
      )}
      {children}
    </div>
  );
};

export default MainLayout;
