import { Product } from "@prisma/client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Button } from "../ui/button";
import { ContainerProductCard } from "./container-product-card";
interface Props {
  className?: string;
  item: Product;
}

export const ProductCard: React.FC<Props> = ({ className, item }) => {
  return (
    <ContainerProductCard className={className}>
      <div className="flex gap-5">
        <Image src={item.imageURL} alt={item.name} width={500} height={500} />
        <div className="text-right">
          <div className="flex flex-col gap-2 mb-[15px]">
            <div>#{item.id}</div>
            <div className="text-[35px] ">{item.name}</div>
            <div className="text-[25px]">Цена: {item.price} ₽</div>
            <div>Количество: {item.rest} шт.</div>
            <div>
              <span>Описание товара:</span>
              <p className="w-[600px]">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni
                minima veritatis inventore sapiente qui. Ut maiores aperiam iure
                corrupti iusto magni vero aspernatur fugiat hic?
              </p>
            </div>
          </div>
          <Link href={`/`}>
            <Button>На главную</Button>
          </Link>
        </div>
      </div>
    </ContainerProductCard>
  );
};
