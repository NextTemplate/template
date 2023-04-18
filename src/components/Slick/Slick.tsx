// https://github.com/akiran/react-slick
import React from "react";
import Slider from "react-slick";
import Link from "next/link"
import Image from "next/image";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const images: string[] = [
    "/media/mini_00.jpg",
    "/media/mini_01.jpg",
    "/media/mini_02.jpg",
    "/media/mini_03.jpg",
    "/media/mini_04.jpg",
  ];

const CustomSlick = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    centerMode: true,
    centerPadding: '60px',
    slidesToShow: 3,
    slidesToScroll: 1,
    // オリジナルArrow
    // prevArrow: <PrevArrow />,
    // nextArrow: <NextArrow />,
  };

  return (
    <Slider {...settings}>
      {images.map((img) => {
        return (
          <div key={img}>
            <Link
              href={"/"}
              passHref
            >
              <Image
                src={img}
                height={400}
                width={400}
                alt={"alt"}
              />
            </Link>
          </div>
        )
      })}
    </Slider>
  );
}

export default CustomSlick;
