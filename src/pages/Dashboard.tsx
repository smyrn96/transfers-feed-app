import React from "react";
import MainContent from "../components/MainContent/MainContent";
import { useQueryHook } from "../hooks";
import { getTransfers } from "../api/services/user.service";

const Dashboard: React.FC = () => {
  const { data, isLoading, error } = useQueryHook({
    query: "transfers_list",
    serviceFunction: getTransfers,
  });

  return <MainContent data={data} isLoading={isLoading} error={error} />;
};

export default Dashboard;
