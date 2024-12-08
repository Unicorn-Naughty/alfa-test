import { Product } from "@prisma/client"
import { instance } from "../instance"
import { TFormSchema } from "@/app/components/shared/form-schema"

export const fetchProduct = async (id: string): Promise<Product> => {
    const { data } = await instance.get<Product>(`/products/${id}`)
    return data
}
export const deleteProduct = async (id: number): Promise<Product[]> => {
    const { data } = await instance.delete<Product[]>(`/products/${id}`)
    return data
}
export const addProduct = async (values: TFormSchema): Promise<Product[]> => {
    const { data } = await instance.post<Product[]>(`/products/`, values)
    return data
}
