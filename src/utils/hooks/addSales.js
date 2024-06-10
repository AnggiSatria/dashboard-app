import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import { useState } from "react";
import { useToast } from "@/components/ui/use-toast";
import { ToastAction } from "@/components/ui/toast";

export default function useAddSales() {
  const [loading, setLoading] = useState(false);
  const { toast } = useToast();

  const addSalesSchema = Yup.object({
    product: Yup.string().required("Product is required"),
    date: Yup.string().required("Date is required"),
    sales: Yup.string().required("Sales is required"),
    revenue: Yup.string().required("Revenue is required"),
  });

  console.log(addSalesSchema);

  const {
    register,
    handleSubmit,
    formState: { errors },
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

  console.log(control);

  const onSubmit = async (e) => {
    try {
      setLoading(true);

      console.log(e);
    } catch (error) {
      setLoading(false);

      if (error instanceof Yup.ValidationError) {
        toast({
          title: "Validation Error",
          description: error.message,
          action: <ToastAction altText="">Close</ToastAction>,
        });
      } else {
        // Tangani kesalahan lain
        toast({
          title: "Add Sales Error",
          description: "An error occurred. Please try again later.",
          action: <ToastAction altText="">Close</ToastAction>,
        });
      }
    }
  };

  return {
    register,
    handleSubmit,
    errors,
    control,
    onSubmit,
    loading,
    setValue,
  };
}
