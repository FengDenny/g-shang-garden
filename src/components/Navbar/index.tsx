import React from "react";
import Logo from "@/assets/logo.png";
import useMediaQuery from "@/hooks/useMediaQuery";
import { FaBars } from "react-icons/fa";
import Links from "@/components/Links";
import DropdownMenu from "../Dropdown/DropdownMenu";

type Props = {
  isTopOfPage: boolean;
  isMenuToggled: boolean;
  setIsMenuToggled: (value: boolean) => void;
  children: React.ReactNode;
};

const index = ({
  isTopOfPage,
  isMenuToggled,
  setIsMenuToggled,
  children,
}: Props) => {
  const isAboveMediumScreens = useMediaQuery("(min-width:1060px)");
  const navbarBackground = isTopOfPage
    ? ""
    : "bg-primary-green-300 drop-shadow";

  return (
    <nav className="relative z-auto">
      <div
        className={`${navbarBackground} fixed top-0 z-999 flex h-20 w-full flex-row justify-between`}
      >
        <div className="relative top-5  w-4/6">
          <img
            src={Logo}
            alt="G Shang Garden logo"
            className="relative left-3 h-16 w-16 sm:h-20 sm:w-20"
          />
        </div>
        {isAboveMediumScreens ? (
          <div className="relative top-12 flex w-full flex-row justify-between font-bold">
            <Links styling="flex gap-6 sm:flex-row sm:text-xl" />

            <div className="basis-1/4">
              <DropdownMenu />
            </div>
          </div>
        ) : (
          <button
            className="relative right-12 top-8 h-10 w-10 rounded-full bg-primary-green-100 p-2 "
            onClick={() => setIsMenuToggled(!isMenuToggled)}
          >
            <FaBars className="hover:text-primary-300 h-6 w-6 text-color-white-100" />
          </button>
        )}
      </div>
      {/* MOBILE MENU MODAL*/}
      {!isAboveMediumScreens && children}
    </nav>
  );
};

export default index;
