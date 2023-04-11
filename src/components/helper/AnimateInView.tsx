import React, { useLayoutEffect, useRef, useState } from "react";

type Props = {
  styling?: string;
  children?: React.ReactNode;
};
const AnimateInView = ({ styling, children }: Props) => {
  const [visible, setVisible] = useState<boolean>(false);

  const ref = useRef<HTMLDivElement | null>(null);

  const thresholdArray = () => {
    const threshold = [];
    //[0, 0.2, 0.5, 0.7, 0.999]
    for (let i = 0; i <= 1; i += 0.1) threshold.push(i);

    return threshold;
  };

  const options = {
    root: null,
    rootMargin: "0px",
    threshold: thresholdArray(),
  };

  useLayoutEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        setVisible(entry.isIntersecting);
      });
    }, options);
    observer.observe(ref.current!);
  }, [setVisible]);

  return (
    <div ref={ref} className={`${visible && styling}`}>
      {children}
    </div>
  );
};

export default AnimateInView;
