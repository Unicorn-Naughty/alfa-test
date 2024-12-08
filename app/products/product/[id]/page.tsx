import { ProductCard } from "@/app/components/shared/product-card";
import { api } from "@/services/api";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const Page = async ({ params }: {params : any}) => {
  const { id } = await params;
  const product = await api.product.fetchProduct(id);
  return (
    <div>
      <ProductCard item={product} />
    </div>
  );
};

export default Page;
