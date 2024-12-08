import { z } from 'zod'

export const formSchema = z.object({
    title: z.string().min(5, { message: 'Название должно содержать не менее 5-ти символов' }),
    price: z.string().min(2, { message: 'Поле не может быть пустым' }),
    description: z.string().min(10, { message: 'Описание должно содержать не менее 10-ти символов' }),
    rest: z.string().min(1, { message: 'Поле не может быть пустым' }),
})
export type TFormSchema = z.infer<typeof formSchema>