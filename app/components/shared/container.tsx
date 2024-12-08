import { cn } from "@/lib/utils";
import React from "react";
interface Props {
  className?: string;
  children: React.ReactNode;
}

export const Container: React.FC<Props> = ({ className, children }) => {
  return (
    <div className={cn("w-[1180px] mx-[auto] px-[10px]", className)}>
      {children}
    </div>
  );
};
