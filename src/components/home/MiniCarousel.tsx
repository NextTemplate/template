import Link from "next/link";
import Image from "next/legacy/image";
import Button from "../layouts/Button";
import { Carousel } from "react-responsive-carousel";
import styles from "../../styles/Layouts/Carousel.module.scss";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import React, { MouseEventHandler } from 'react';

import { IconContext } from "react-icons";
import { FaGithub } from "react-icons/fa";

const images: string[] = [
  "/media/mini_00.jpg",
  "/media/mini_01.jpg",
  "/media/mini_02.jpg",
  "/media/mini_03.jpg",
  "/media/mini_04.jpg",
];

interface CustomArrowProps {
  onClickHandler: MouseEventHandler;
  hasPrev?: boolean;
  hasNext?: boolean;
}

  // ReactコンポーネントはReactElement or nullである必要がある
  const CustomPrevArrow: React.FC<CustomArrowProps> = ({ onClickHandler, hasPrev }) => {
    return hasPrev ? (
      <IconContext.Provider value={{color: "blue", size: "100px"}}>
        <button onClick={onClickHandler} className="custom-control-prev">
          prev <FaGithub />
        </button>
      </IconContext.Provider>
    ) : null;
  };
  
  const CustomNextArrow: React.FC<CustomArrowProps> = ({ onClickHandler, hasNext }) => {
    return hasNext ? (
      <IconContext.Provider value={{color: "red", size: "100px"}}>
        <button onClick={onClickHandler} className="custom-control-next">
          next <FaGithub />
        </button>
      </IconContext.Provider>
    ) : null;
  };

  const MiniCarousel: React.FC = () => {
  return (
    <Carousel
      autoPlay={true}
      infiniteLoop={true}
      interval={8000}
      showArrows={true}
      showThumbs={false}
      statusFormatter={() => ``}
      renderArrowPrev={(onClickHandler, hasPrev) => (
        <CustomPrevArrow onClickHandler={onClickHandler} hasPrev={hasPrev} />
      )}
      renderArrowNext={(onClickHandler, hasNext) => (
        <CustomNextArrow onClickHandler={onClickHandler} hasNext={hasNext} />
      )}
    >
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
    </Carousel>
  );
};

export default MiniCarousel;
