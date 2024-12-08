"use client";
import { useStoreState } from "@/hooks/use-store";
import { Container } from "../components/shared/container";
import { ProductsListCard } from "../components/shared/products-list-card";
import { Skeleton } from "../components/ui/skeleton";
import { Title } from "../components/shared/title";
import React from "react";
import {
  DropdownSorting,
  TSorting,
} from "../components/shared/dropdown-sorting";
import { SearchingInput } from "../components/shared/searching-input";

const Page = () => {
  const { items, deleteProduct, loading, fetchLoading, tagFavorite } =
    useStoreState();
  const [sortBy, setSortBy] = React.useState<TSorting>(TSorting.ALL);
  const [searchValue, setSearchValue] = React.useState("");
  const sortedItems = items
    .filter((item) => {
      if (sortBy === TSorting.FAVORITE) {
        return item.liked;
      }
      if (sortBy === TSorting.ALL) {
        return item;
      }
    })
    .filter((item) =>
      item.name.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase())
    );
  const onChangeSearchInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
  };
  return (
    <Container>
      <div className="flex justify-between items-center">
        <Title text="Products page" />
        <SearchingInput setSearchValue={onChangeSearchInput} />
        <DropdownSorting sortBy={sortBy} setSortBy={setSortBy} />
      </div>
      {fetchLoading && (
        <div className="flex gap-5 flex-wrap justify-center items-center ">
          {Array.from({ length: 6 }).map((_, index) => (
            <div key={index}>
              <Skeleton className="w-[300px] h-[300px] mb-[15px]" />
              <Skeleton className="w-[300px] h-[25px] mb-[15px]" />
              <div className="mt-3 flex gap-2">
                <Skeleton className="w-[24px] h-[24px] " />
                <Skeleton className="w-[24px] h-[24px] " />
              </div>
            </div>
          ))}
        </div>
      )}

      <div className="flex gap-5 flex-wrap justify-center items-center ">
        {sortedItems.map((item, i) => (
          <ProductsListCard
            loading={loading}
            tagFavorite={tagFavorite}
            deleteProduct={deleteProduct}
            item={item}
            key={i}
          />
        ))}
      </div>
    </Container>
  );
};

export default Page;
