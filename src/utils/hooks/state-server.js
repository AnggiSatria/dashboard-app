import { useMutation, useQuery } from "@tanstack/react-query";
import {
  deleteSales,
  getAllSales,
  getSalesByDate,
  getSalesByProduct,
  postSales,
  putSales,
} from "../endpoint";

export const createSales = () => {
  const mutations = useMutation({
    mutationFn: async (payload) => postSales(payload),
    mutationKey: ["postSales"],
  });

  return { mutations };
};

export const readAllSales = (activeFilter) => {
  return useQuery({
    queryKey: ["getAllSales", activeFilter],
    queryFn: async () => await getAllSales(activeFilter),
    refetchOnWindowFocus: false,
    refetchOnmount: false,
    refetchOnReconnect: false,
    retry: false,
  });
};

export const deletedSales = () => {
  const mutations = useMutation({
    mutationFn: async (payload) => deleteSales(payload),
    mutationKey: ["deleted"],
  });

  return { mutations };
};

export const updatedSales = () => {
  const mutations = useMutation({
    mutationFn: async (id, payload) => putSales(id, payload),
    mutationKey: ["updated"],
  });

  return { mutations };
};
