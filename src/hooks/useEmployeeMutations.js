import { useMutation, useQueryClient } from "@tanstack/react-query";
import {
  createEmployee,
  updateEmployee,
  deleteEmployee,
} from "../services/employeeService";
import toast from "react-hot-toast";

// CREATE
export const useCreateEmployee = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: createEmployee,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["employees"] });
      toast.success("Employee created successfully");
    },
    onError: () => toast.error("Failed to create employee"),
  });
};

// UPDATE
export const useUpdateEmployee = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ id, data }) => updateEmployee(id, data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["employees"] });
      toast.success("Employee updated successfully");
    },
    onError: () => toast.error("Failed to update employee"),
  });
};

// DELETE
export const useDeleteEmployee = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: deleteEmployee,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["employees"] });
      toast.success("Employee deleted successfully");
    },
    onError: () => toast.error("Failed to delete employee"),
  });
};
