import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { zodResolver } from "@hookform/resolvers/zod";
import * as Yup from "yup";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useEffect } from "react";
import { useToast } from "@/components/ui/use-toast";
import { ToastAction } from "@/components/ui/toast";
import { z } from "zod";
import { createSales } from "./state-server";

export default function useAddSales() {
  const [loading, setLoading] = useState(false);
  const { toast } = useToast();

  const FormSchema = z.object({
    product: z.string().min(1, "Product is required"),
    date: z.date({
      required_error: "Date is required.",
    }),
    sales: z.string().min(1, "sales is required"),
    revenue: z.string().min(1, "Revenue is required"),
  });

  const form = useForm({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      product: "",
      date: "",
      sales: "",
      revenue: "",
    },
  });

  return {
    loading,
    form,
    setLoading,
  };
}
