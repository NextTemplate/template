// https://github.com/akiran/react-slick
import React from "react";
import Slider from "react-slick";
import Link from "next/link"
import Image from "next/image";
import styles from "./Slick.module.scss";
import PrevArrow from "./PrevArrow";
import NextArrow from "./NextArrow";
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
    centerPadding: '0',
    slidesToShow: 1,
    slidesToScroll: 1,
    // オリジナルArrow
    prevArrow: <PrevArrow onClick={() => onclick} />,
    nextArrow: <NextArrow onClick={() => onclick} />,
  };

  return (
    <div className={styles.slickBody}>
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
                height={440}
                width={440}
                alt={"alt"}
              />
            </Link>
          </div>
        )
      })}
    </Slider>
    </div>
  );
}

export default CustomSlick;
