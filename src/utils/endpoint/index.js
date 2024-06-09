import api from "@/config/axios";
import { removeEmptyAttributes } from "@/lib/utils";
import QueryString from "qs";

const handlers = `/sales`;

export const getAllSales = (activeFilter) => {
  const queryString = QueryString.parse(removeEmptyAttributes(activeFilter));
  return api.get(handlers, { params: { ...queryString } });
};

export const getSalesByProduct = (activeFilter) => {
  const queryString = QueryString.parse(removeEmptyAttributes(activeFilter));
  return api.get(`${handlers}/product`, { params: { ...queryString } });
};

export const getSalesByDate = (activeFilter) => {
  const queryString = QueryString.parse(removeEmptyAttributes(activeFilter));
  return api.get(`${handlers}/date`, { params: { ...queryString } });
};

export const postSales = (payload) => {
  return api.post(`${handlers}`, payload);
};

export const deleteSales = (id) => {
  return api.delete(`${handlers}/${id}`);
};

export const putSales = (id, payload) => {
  return api.put(`${handlers}/${id}`, payload);
};
