import { cn } from "@/lib/utils";
import React from "react";
interface Props {
  className?: string;
  children: React.ReactNode;
}

export const ContainerProductCard: React.FC<Props> = ({
  className,
  children,
}) => {
  return (
    <div className={cn("w-[1400px] px-[20px] mx-[auto]", className)}>
      {children}
    </div>
  );
};
