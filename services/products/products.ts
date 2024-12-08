import { Product } from "@prisma/client"
import { instance } from "../instance"

export const fetchProducts = async (): Promise<Product[]> => {
    const { data } = await instance.get<Product[]>(`/products/`)
    return data
}