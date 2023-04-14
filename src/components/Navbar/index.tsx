import { useState, ReactNode } from "react";
import Logo from "@/assets/logo.png";
import useMediaQuery from "@/hooks/useMediaQuery";
import { FaBars } from "react-icons/fa";
import Links from "@/components/Links";
import DropdownMenu from "../Menu/Dropdown/DropdownMenu";
import AnimateNavbar from "../helper/AnimateNavbar";

type Props = {
  isMenuToggled: boolean;
  setIsMenuToggled: (value: boolean) => void;
  children: ReactNode;
};

const index = ({ isMenuToggled, setIsMenuToggled, children }: Props) => {
  const [isTopOfPage, setIsTopOfPage] = useState<boolean>(true);
  const isAboveMediumScreens = useMediaQuery("(min-width:1060px)");

  return (
    <AnimateNavbar
      isAboveMediumScreensChildren={children}
      setIsTopOfPage={setIsTopOfPage}
      isTopOfPage={isTopOfPage}
    >
      <div className="relative top-5  w-4/6 pl-10">
        <img
          src={Logo}
          alt="G Shang Garden logo"
          className=" relative h-16 w-16 sm:h-20 sm:w-20 "
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
      {!isAboveMediumScreens && children}
    </AnimateNavbar>
  );
};

export default index;
