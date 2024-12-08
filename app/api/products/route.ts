import { TFormSchema } from "@/app/components/shared/form-schema";
import prisma from "@/prisma/prisma-client";
import { NextRequest, NextResponse } from "next/server";

export async function GET() {
    try {
        const products = await prisma.product.findMany()
        return NextResponse.json(products)
    } catch (error) {
        console.log(`Cannot get products [500] ${error}`);
        return NextResponse.json({ message: "Не удалось получить товары, reload" }, { status: 500 })
    }

}
export async function POST(req: NextRequest) {
    try {
        const { title: name, price, description, rest, } = await req.json() as TFormSchema

        await prisma.product.create({
            data: {
                name,
                price: Number(price),
                description,
                liked: false,
                rest: Number(rest),
                imageURL: '/i.webp'
            }
        })
        const updatedProducts = await prisma.product.findMany()
        return NextResponse.json(updatedProducts)
    } catch (error) {
        console.log(error);
        return NextResponse.json({ message: "Не удалось запостить товар, reload" }, { status: 500 })
    }

}
