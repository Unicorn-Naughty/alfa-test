import React from "react";
import { Input } from "../ui/input";
import { SearchIcon } from "lucide-react";
interface Props {
  className?: string;
  setSearchValue: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const SearchingInput: React.FC<Props> = ({
  className,
  setSearchValue,
}) => {
  return (
    <div className={`${className} flex justify-end`}>
      <label className="relative">
        <Input
          className="w-[250px] px-5"
          placeholder="Поиск..."
          onChange={setSearchValue}
        />
        <SearchIcon className="absolute w-5 h-5 top-[50%] -translate-y-1/2 pr-1 right-0" />
      </label>
    </div>
  );
};
