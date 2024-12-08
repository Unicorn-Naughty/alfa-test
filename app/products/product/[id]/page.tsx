import { ProductCard } from "@/app/components/shared/product-card";
import prisma from "@/prisma/prisma-client";



const Page = async ({ params }: { params: Promise<{ id: string }>}) => {
  const { id } = await params;
  const product = await prisma.product.findFirst({
    where: {
      id: Number(id),
    },
  });
  if (product) {
    return (
      <div>
        <ProductCard item={product} />
      </div>
    );
  }
};

export default Page;
