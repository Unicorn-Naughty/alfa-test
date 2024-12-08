import { ProductCard } from "@/app/components/shared/product-card";
import { api } from "@/services/api";

const Page = async ({ params }: { params: Promise<{ id: string }> }) => {
  const { id } = await params;
  const product = await api.product.fetchProduct(id);
  return (
    <div>
      <ProductCard item={product} />
    </div>
  );
};

export default Page;
