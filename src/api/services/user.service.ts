import api from "../axios";
import endpoints from "../endpoints";

export const getTransfers = () => api.get(endpoints.transfers_list);
export const getTransfer = (id: number) =>
  api.get(endpoints.transfers_list_item(id));
export const getTransfersDetails = () =>
  api.get(endpoints.transfers_list_details);
export const getSingleTransferDetails = (id: number) =>
  api.get(endpoints.transfers_list_details_item(id));
