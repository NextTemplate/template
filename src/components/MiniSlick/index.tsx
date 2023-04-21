import React from "react";
import Slider from "react-slick";
import Link from "next/link"
import Image from "next/image";
import styles from "./MiniSlick.module.scss";
import PrevArrow from "./PrevArrow";
import NextArrow from "./NextArrow";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

  const images = [
    {
      src: "/media/mini_00.jpg",
      link: "/",
    },
    {
      src: "/media/mini_01.jpg",
      link: "/",
    },
    {
      src: "/media/mini_02.jpg",
      link: "/",
    },
    {
      src: "/media/mini_03.jpg",
      link: "/",
    },
    {
      src: "/media/mini_04.jpg",
      link: "/",
    },
    {
      src: "/media/mini_00.jpg",
      link: "/",
    },
    {
      src: "/media/mini_01.jpg",
      link: "/",
    },
    {
      src: "/media/mini_02.jpg",
      link: "/",
    },
    {
      src: "/media/mini_03.jpg",
      link: "/",
    },
    {
      src: "/media/mini_04.jpg",
      link: "/",
    },
  ];

const MiniSlick = () => {
  const settings = {
    autoplay: true,
    autoplaySpeed: 4000,
    dots: false,
    infinite: true,
    speed: 500,
    centerMode: true,
    centerPadding: '0',
    slidesToShow: 5,
    slidesToScroll: 1,
    // オリジナルArrow
    prevArrow: <PrevArrow onClick={() => onclick} />,
    nextArrow: <NextArrow onClick={() => onclick} />,
    // ブレイクポイントの指定
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className={styles.slickBody}>
    <Slider {...settings}>
      {images.map((imgObj) => {
        return (
          <div key={imgObj.src}>
            <Link href={imgObj.link} passHref>
              <Image
                src={imgObj.src} 
                height={240}
                width={240}
                alt={"alt"}
              />
            </Link>
          </div>
        );
      })}
    </Slider>
    </div>
  );
}

export default MiniSlick;
