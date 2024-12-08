import { TFormSchema } from '@/app/components/shared/form-schema'
import { api } from '@/services/api'
import { Product } from '@prisma/client'
import toast from 'react-hot-toast'
import { create } from 'zustand'

type TProductsState = {
    items: Product[],
    loading: boolean,
    fetchLoading: boolean

    fetchProductsState: () => Promise<void>
    deleteProduct: (id: number) => Promise<void>
    addProduct: (values: TFormSchema) => Promise<void>
    tagFavorite: (id: number) => void
}

export const useStore = create<TProductsState>((set) => ({
    items: [],
    loading: false,
    fetchLoading: false,

    fetchProductsState: async () => {
        try {
            set({ fetchLoading: true })
            const data = await api.products.fetchProducts()
            set({ items: data })
        } catch (error) {
            console.log(error);
        } finally {
            set({ fetchLoading: false })
        }
    },
    deleteProduct: async (id: number) => {
        try {
            set(state => ({ loading: true, items: state.items.map((item) => (item.id === id ? { ...item, disabled: true } : item)) }))
            const data = await api.product.deleteProduct(id)
            set({ items: data })
            toast.success('Товар удален')
        } catch (error) {
            console.log(error);
            toast.error('Товар не был удален')
        } finally {
            set(state => ({ loading: false, items: state.items.map((item) => ({ ...item, disabled: false })) }));
        }
    },
    addProduct: async (values: TFormSchema) => {
        try {
            set({ loading: true })
            const data = await api.product.addProduct(values);
            set({ items: data })
            toast.success('Товар добавлен')
        } catch (error) {
            console.log(error);
            toast.error('Товар не был добавлен')
        } finally {
            set({ loading: false })

        }
    },
    tagFavorite: (id: number) => {
        set(state => ({ items: state.items.map((item) => (item.id === id ? { ...item, liked: !item.liked } : item)) }))
    }
}))