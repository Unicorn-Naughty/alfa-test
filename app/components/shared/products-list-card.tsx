import { cn } from "@/lib/utils";
import { Product } from "@prisma/client";
import { Heart, Trash2 } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import React from "react";
import ClipLoader from "react-spinners/ClipLoader";

interface Props {
  className?: string;
  item: Product;
  loading: boolean;
  deleteProduct: (id: number) => void;
  tagFavorite: (id: number) => void;
}
const override: React.CSSProperties = {
  margin: "0 auto",
  borderColor: "red",
};
export const ProductsListCard: React.FC<Props> = ({
  className,
  item,
  loading,
  deleteProduct,
  tagFavorite,
}) => {
  return (
    <article className={cn("relative", className, loading ? "opacity-50" : "")}>
      <ClipLoader
        className="left-0 right-0 mx-auto top-[25%]  absolute"
        loading={loading}
        cssOverride={override}
        size={150}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
      <Link
        className="before:content-[''] absolute inset-0"
        href={`/products/product/${item.id}`}
      ></Link>
      <div className="w-[300px] mb-[15px]">
        <Image
          priority
          width={500}
          height={500}
          alt={item.name}
          src={item.imageURL}
        />
      </div>
      <div className="flex justify-between px-[5px] items-center">
        <h1 className="text-[17px]">{item.name.substring(0, 25) + "..."}</h1>
        <div className="">{item.price} ₽</div>
      </div>
      <div className="flex gap-2 mt-3">
        <button className="z-10" onClick={() => tagFavorite(item.id)}>
          <Heart className={`${item.liked ? "fill-red-500" : ""}`} />
        </button>
        <button onClick={() => deleteProduct(item.id)} className="z-10">
          <Trash2 className="" />
        </button>
      </div>
    </article>
  );
};
