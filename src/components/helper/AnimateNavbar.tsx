import { useState, useEffect, useRef, ReactNode } from "react";

type Props = {
  isTopOfPage: Boolean;
  setIsTopOfPage: (value: boolean) => void;
  children?: ReactNode;
  isAboveMediumScreensChildren?: ReactNode;
};

const AnimateNavbar = ({
  children,
  isAboveMediumScreensChildren,
  setIsTopOfPage,
  isTopOfPage,
}: Props) => {
  const ref = useRef<HTMLElement>(null);
  const navbarBackground = isTopOfPage
    ? ""
    : "bg-primary-green-300 drop-shadow-xl h-32 text-color-white transition-colors delay-75 duration-75 ease-in-out";

  const observer = new IntersectionObserver(([entry]) => {
    console.log("isIntersecting", entry.isIntersecting);
    if (entry.isIntersecting) {
      setIsTopOfPage(true);
    } else {
      setIsTopOfPage(false);
    }
  });

  useEffect(() => {
    observer.observe(ref.current!);
  }, []);

  return (
    <nav className="relative z-auto" ref={ref}>
      <div
        className={`${navbarBackground} fixed top-0 z-999 flex h-20 w-full flex-row justify-between`}
      >
        {children}
      </div>
      {/* MOBILE MENU MODAL*/}
      {isAboveMediumScreensChildren}
    </nav>
  );
};

export default AnimateNavbar;
