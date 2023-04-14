import React from "react";
import Slider from "react-slick";
import { sliderImg } from "@/data/quality";
import Header from "@/components/SectionHeader";

type Props = {};

const index = (props: Props) => {
  var settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    slidesToShow: 3,
    slidesToScroll: 3,
    speed: 1000,
    autoplaySpeed: 5000,
    responsive: [
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <section className="mx-auto  mt-48  w-5/6 p-10 xs:w-full">
      <div className="flex flex-col items-end  xs:items-start">
        <Header
          translateHeader={"quality.header"}
          translateTitle={"quality.title"}
          animateHeader={"animate-moveInRight"}
          animateTitle={"animate-moveInLeft"}
        />
      </div>
      <div className="mt-2">
        <Slider {...settings}>
          {sliderImg.map((items) => {
            const { id, title, img } = items;

            return (
              <div key={id}>
                <img
                  src={img}
                  alt={title}
                  className="w-[99.666667%] rounded-lg brightness-75"
                />
              </div>
            );
          })}
        </Slider>
      </div>
    </section>
  );
};

export default index;
