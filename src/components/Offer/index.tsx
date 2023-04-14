import { useRef } from "react";
import { translate } from "@/components/i18nTranslate/helper";
import { MdOutlineKeyboardDoubleArrowRight } from "react-icons/md";
import useIntersectionObserver from "@/hooks/useIntersectionObserver";
type Props = {
  design: {
    id: number;
    title: string;
  }[];
  headerTranslate: string;
};

const index = ({ design, headerTranslate }: Props) => {
  const ref = useRef<HTMLDivElement | null>(null);

  const entry = useIntersectionObserver(ref, {});
  const isVisible = !!entry?.isIntersecting;

  return (
    <div className="relative mt-10" ref={ref}>
      <h2
        className={` ${
          headerTranslate.match("offer.designHeader")
            ? isVisible && "animate-translateYBTop"
            : isVisible && "animate-translateYTBottom"
        } text-xl font-bold text-primary-dark-300 underline decoration-primary-green-300 underline-offset-8 below397:text-base`}
      >
        {translate(headerTranslate)}
      </h2>

      <div className="mt-8 grid grid-cols-2-320 gap-10 below768:grid-cols-1">
        {design.map((items: any) => {
          let { id, title } = items;

          return (
            <div className="flex flex-row" key={id}>
              <span
                className={`
                   pr-2 text-2xl
                text-primary-green-300 `}
              >
                <MdOutlineKeyboardDoubleArrowRight />
              </span>
              <h5
                className={`
                 ${
                   id % 2 === 0
                     ? isVisible && "animate-translateXRightLeft"
                     : isVisible && "animate-translateXleftRight"
                 } 
                font-semibold text-primary-dark-100
                `}
              >
                {title}
              </h5>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default index;
