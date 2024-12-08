"use client";
import { cn } from "@/lib/utils";
import { FormProvider, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import React from "react";
import { FormInput } from "./form-input";
import { formSchema, TFormSchema } from "./form-schema";
import { Button } from "../ui/button";
import { useStoreState } from "@/hooks/use-store";
interface Props {
  className?: string;
}

export const CreatedProductForm: React.FC<Props> = ({ className }) => {
  const { addProduct, loading } = useStoreState();
  const form = useForm<TFormSchema>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: "",
      price: "",
      description: "",
      rest: "",
    },
  });

  const onSubmit = (data: TFormSchema) => {
    addProduct(data);
    form.setValue("description", "");
    form.setValue("title", "");
    form.setValue("price", "");
    form.setValue("rest", "");
  };

  return (
    <FormProvider {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className={cn(
          `${loading ? "pointer-events-none opacity-30" : ""}`,
          className
        )}
      >
        <div className="grid grid-cols-2  gap-3">
          <FormInput name="title" placeholder="Заголовок продукта" />
          <FormInput name="price" placeholder="Цена" />
          <FormInput name="description" placeholder="Описание" />
          <FormInput name="rest" placeholder="Количество продукта" />
        </div>

        <Button type="submit" className="mt-[50px]">
          Создать продукт
        </Button>
      </form>
    </FormProvider>
  );
};
