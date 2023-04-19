import { ReactNode } from "react";

type Props = {
  onPageChanged: (e: any, page: number) => void;
  ariaLabel: string;
  children: ReactNode;
  page: number;
  styling?: string;
  current?: string;
  pages?: Boolean;
};

const Button = ({
  onPageChanged,
  children,
  ariaLabel,
  styling,
  page,
  pages,
}: Props) => {
  return (
    <button
      className={`${styling} ${pages && "w-8 sm:w-10"}
         border-x border-y-2 border-primary-green-300 p-1 sm:p-2 md:hover:bg-primary-green-300 md:hover:text-color-white `}
      aria-label={ariaLabel}
      onClick={(e) => onPageChanged(e, page)}
    >
      {children}
    </button>
  );
};

export default Button;
