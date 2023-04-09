import React from "react";
import { navLinks } from "@/data/navLinks";

type Props = { styling: string; liStlying?: string };

const index = ({ styling, liStlying }: Props) => {
  const aLinkUnderLine =
    " bg-zeroThree  bg-0-100  bg-no-repeat transition-bgSize5sEaseInOut  hover:bg-OneHund3Pixel bg-gradient-yellow ";
  return (
    <ul className={styling}>
      {navLinks.map((items: any) => {
        const { title, id, href } = items;
        return (
          <li key={id} className={liStlying}>
            <a
              href={href}
              className="capitalize hover:text-primary-yellow-100"
              target="_self"
              rel="noopener"
            >
              <span className={`${aLinkUnderLine}`}>{title}</span>
            </a>
          </li>
        );
      })}
    </ul>
  );
};

export default index;
