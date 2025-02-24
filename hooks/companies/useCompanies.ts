import {
  createCompany,
  deleteCompany,
  fetchAllCompanies,
  fetchCompany,
} from "@/utils/companies/companiesService";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

export const useCompany = (id: number) => {
  return useQuery({
    queryKey: ["company", id],
    queryFn: () => fetchCompany(id),
  });
};

export const useCompanies = () => {
  return useQuery({ queryKey: ["companies"], queryFn: fetchAllCompanies });
};

export const useCreateCompany = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: createCompany,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["companies"] });
    },
  });
};

export const useDeleteCompany = () => {
    const queryClient = useQueryClient();
  
    return useMutation({
      mutationFn: deleteCompany,
      onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["companies"] });
    },
  });
};
