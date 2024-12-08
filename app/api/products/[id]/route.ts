import prisma from "@/prisma/prisma-client";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest, { params }: {
    params: Promise<{ id: string }>
}) {
    try {
        const { id } = await params
        console.log(id);
        const product = await prisma.product.findFirst({
            where: {
                id: Number(id)
            }
        })
        return NextResponse.json(product)
    } catch (error) {
        console.log(`Cannot get product 500 ${error}`);
        return NextResponse.json({ message: "Не удалось получить товар, reload" }, { status: 500 })
    }
}

export async function DELETE(req: NextRequest, { params }: {
    params: Promise<{ id: string }>
}) {
    try {
        const { id } = await params
        const product = await prisma.product.findFirst({
            where: {
                id: Number(id)
            }
        })
        if (!product) {
            return NextResponse.json({ message: "Product not found" })
        }
        await prisma.product.delete({
            where: {
                id: Number(id)
            }
        })
        const updatedProducts = await prisma.product.findMany()
        return NextResponse.json(updatedProducts)
    } catch (error) {
        console.log(error);
        return NextResponse.json({ message: "Не удалось удалить товар, reload" }, { status: 500 })
    }



}
