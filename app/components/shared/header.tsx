import { routes } from "@/constants/header-menu/header-menu-constants";
import { cn } from "@/lib/utils";
import Link from "next/link";
import React from "react";
interface Props {
  className?: string;
}

export const Header: React.FC<Props> = ({ className }) => {
  return (
    <header className={cn("", className)}>
      <div>
        <nav className="px-[15px] py-[20px]">
          <ul className="flex justify-between items-center">
            {routes.map((item, i) => (
              <li key={i}>
                <Link
                  className={`${item.path === "/" ? "uppercase text-[35px]" : ""} hover:opacity-50 transition-all ease-in`}
                  href={item.path}
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};
