
import prisma from "./prisma-client";
import { TProducts } from "@/types/prisma";
import { getRandomInt } from "../lib/get-random-int";
import { products } from "../constants/prisma-data/products";

const generateProducts = (products: TProducts) => {
    return products.map((product) => (
        {
            ...product,
            rest: getRandomInt(2, 8),
            price: getRandomInt(800, 2500)
        }
    ))
}

async function up() {
    await prisma.product.createMany({
        data: generateProducts(products)
    })
}
async function down() {
    await prisma.$executeRaw`TRUNCATE TABLE "Product" RESTART IDENTITY CASCADE`;
}
async function main() {
    try {
        await down()
        await up()
    } catch (error) {
        console.log(error);

    }
}
main().then(async () => {
    await prisma.$disconnect();
}).catch(async (e) => {
    console.log(e);
    await prisma.$disconnect()
    process.exit(1)
})