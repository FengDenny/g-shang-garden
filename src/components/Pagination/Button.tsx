import { ReactNode } from "react";

type Props = {
  index: number;
  onPageChanged: (e: any, page: number) => void;
  ariaLabel: string;
  children: ReactNode;
  page: number;
  styling: string;
  current?: string;
};

const Button = ({
  index,
  onPageChanged,
  children,
  ariaLabel,
  styling,
  current,
  page,
}: Props) => {
  return (
    <li key={index} className={current}>
      <button
        className={styling}
        aria-label={ariaLabel}
        onClick={(e) => onPageChanged(e, page)}
      >
        {children}
      </button>
    </li>
  );
};

export default Button;
