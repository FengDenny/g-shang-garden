import Slider from "react-slick";

import { sliderImg } from "@/data/hero";

import { translate } from "@/components/i18nTranslate/helper";

type Props = {};

const index = (props: Props) => {
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    fade: true,
    speed: 1000,
    autoplaySpeed: 5200,
    cssEase: "cubic-bezier(0.000, 0.000, 0.635, 0.750)",
  };
  return (
    <section className="relative">
      <div className="absolute z-10 w-full">
        <h2
          className="relative z-10 mx-auto text-center font-extrabold uppercase text-color-white-100 
            below768:mt-28 below768:text-xl
            xs:w-9/12
            sm:mt-40 sm:w-11/12 sm:text-3xl
            md:mt-56 md:text-4xl"
        >
          {translate("hero.title")}
          <span className="text-primary-green-100 md:text-2xl">.</span>
        </h2>
        <h6
          className="mx-auto mt-5
            text-center text-lg text-primary-yellow-100 xs:mt-1 xs:w-8/12 xs:text-sm sm:w-11/12"
        >
          {translate("hero.description")}
        </h6>
      </div>

      <Slider {...settings}>
        {sliderImg.map((items: any) => {
          const { id, title, img } = items;
          return (
            <img
              src={img}
              key={id}
              alt={title}
              className=" h-64
                   w-full  brightness-50 below397:h-72 sm:h-max"
            />
          );
        })}
      </Slider>
    </section>
  );
};

export default index;
