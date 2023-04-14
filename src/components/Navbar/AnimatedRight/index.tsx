import { XMarkIcon } from "@heroicons/react/24/solid";
import Links from "@/components/Links";
import SelectMenu from "@/components/Menu/Select/SelectMenu";

type Props = {
  isMenuToggled: boolean;
  setIsMenuToggled: (value: boolean) => void;
};

const index = ({ isMenuToggled, setIsMenuToggled }: Props) => {
  const activeSlide = "transform transition-all duration-100 ";
  const hiddenSlide = "transition-all duration-100 translate-x-80 transform ";
  return (
    <div
      className={`fixed bottom-0 right-0 z-1000 h-full w-[300px]  bg-primary-green-300 drop-shadow-xl ${
        isMenuToggled ? activeSlide : hiddenSlide
      } `}
    >
      {/* CLOSE ICON */}
      <div className="flex justify-end p-12">
        <button onClick={() => setIsMenuToggled(!isMenuToggled)}>
          <XMarkIcon
            className="transition-color h-8 w-8 text-gray-400 delay-75
      duration-75 hover:text-primary-yellow-100 "
          />
        </button>
      </div>
      {/* MENU ITEMS */}
      <div className={`ml-[33%] flex flex-col gap-10 text-2xl font-bold `}>
        <Links styling="sm:text-xl text-color-white" liStlying="py-2" />
        <div className="relative bottom-5 -ml-3">
          <SelectMenu styling="text-lg ml-3 " />
        </div>
      </div>
    </div>
  );
};

export default index;
