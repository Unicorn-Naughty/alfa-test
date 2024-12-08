import { cn } from "@/lib/utils";
import React from "react";
interface Props {
  className?: string;
  text: string;
}

export const Title: React.FC<Props> = ({ className, text }) => {
  return <h1 className={cn("text-[30px] mt-5 mb-5", className)}>{text}</h1>;
};
