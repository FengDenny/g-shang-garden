import { useRef } from "react";
import { translate } from "@/components/i18nTranslate/helper";
import useIntersectionObserver from "@/hooks/useIntersectionObserver";

type Props = {
  translateHeader: string;
  translateTitle: string;
  animateHeader?: String;
  animateTitle?: String;
};

const index = ({
  translateHeader,
  translateTitle,
  animateHeader,
  animateTitle,
}: Props) => {
  const ref = useRef<HTMLDivElement | null>(null);

  const entry = useIntersectionObserver(ref, {});
  const isVisible = !!entry?.isIntersecting;

  return (
    <div ref={ref}>
      <h6
        className={`${
          isVisible && animateTitle
        } text-bold moveInRight text-lg text-primary-green-300 underline decoration-primary-dark-300 underline-offset-4`}
      >
        {translate(translateTitle)}
      </h6>

      <h2
        className={`${
          isVisible && animateHeader
        }  pt-2 text-2xl font-extrabold text-primary-dark-300`}
      >
        {translate(translateHeader)}
      </h2>
    </div>
  );
};

export default index;
