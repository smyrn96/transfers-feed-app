import React, { ReactNode } from "react";
import TopHeader from "../components/TopHeader/TopHeader";
import Sidebar from "../components/Menu/Sidebar/Sidebar";

type MainLayoutPropsType = {
  children: ReactNode;
};

const MainLayout: React.FC<MainLayoutPropsType> = ({ children }) => {
  return (
    <div>
      <TopHeader />
      <Sidebar />
      {children}
    </div>
  );
};

export default MainLayout;
