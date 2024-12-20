import { cn } from "@/lib/utils";
import { X } from "lucide-react";
import React from "react";
interface Props {
  className?: string;
  onClick?: VoidFunction;
}

export const ClearBuuton: React.FC<Props> = ({ className, onClick }) => {
  return (
    <button
      className={cn(
        "absolute right-4 top-1/2 -translate-y-1/2 opacity-30 hover:opacity-100 cursor-pointer",
        className
      )}
      onClick={onClick}
    >
      <X className="h-5 w-5" />
    </button>
  );
};
