import React from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
} from "@radix-ui/react-dropdown-menu";
interface Props {
  className?: string;
  sortBy: TSorting;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  setSortBy: any;
}
{
  /*
  Не смог типизировать setSortBy (React.Dispatch<React.SetStateAction<TSorting>>) - не подходит
  */
}

export enum TSorting {
  ALL = "все товары",
  FAVORITE = "товары в избранном",
}

export const DropdownSorting: React.FC<Props> = ({ setSortBy, sortBy }) => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <div className="flex items-center ml-[25px] h-[25px] w-[250px] cursor-pointer transition-all ease-in-out hover:text-[#ac8c75] font-medium text-[18px] group">
          <button className="w-[180px] mr-[5px]">{sortBy}</button>
          <ChevronDown
            className={cn(
              "w-[20px] h-[20px] mt-[5px] group-data-[state=open]:rotate-180 transition-all ease-in"
            )}
          />
        </div>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56 z-20 bg-white p-3 cursor-pointer shadow-xl">
        <DropdownMenuRadioGroup value={sortBy} onValueChange={setSortBy}>
          <DropdownMenuRadioItem value={TSorting.ALL}>
            {TSorting.ALL}
          </DropdownMenuRadioItem>
          <DropdownMenuRadioItem value={TSorting.FAVORITE}>
            {TSorting.FAVORITE}
          </DropdownMenuRadioItem>
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
