const endpoints = {
  transfers_list: "/transfer_list",
  transfers_list_item: (id: number) => `/transfer_list/${id}`,
  transfers_list_details: "/transfer_list_details",
  transfers_list_details_item: (id: number) => `/transfer_list_details/${id}`,
};

export default endpoints;
