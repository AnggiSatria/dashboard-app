import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useEffect } from "react";
import { useToast } from "@/components/ui/use-toast";
import { ToastAction } from "@/components/ui/toast";

export default function useAddSales() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const { toast } = useToast();

  const addSalesSchema = Yup.object({
    product: Yup.string().required("Product is required"),
    date: Yup.string().required("Date is required"),
    sales: Yup.string().required("Sales is required"),
    revenue: Yup.string().required("Revenue is required"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    control,
    setValue,
  } = useForm({
    defaultValues: {
      product: "",
      date: "",
      sales: "",
      revenue: "",
    },
    resolver: yupResolver(addSalesSchema),
  });

  const onSubmit = async (e) => {
    try {
      setLoading(true);
    } catch (error) {
      setLoading(false);

      toast({
        title: "Add Sales Error",
        description: "Please check your input and try again",
        action: <ToastAction altText="">Close</ToastAction>,
      });
    }
  };

  return {
    register,
    handleSubmit,
    errors,
    isSubmitting,
    control,
    onSubmit,
    loading,
    setValue,
  };
}
