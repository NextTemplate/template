import Link from "next/link";
import Image from "next/image";
import { Carousel } from "react-responsive-carousel";
import styles from "../../styles/Layouts/Carousel.module.scss";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const StyleCarousel = () => {
  const styleImages1: string[] = [
    "/styles/Nami_00.jpg",
    "/styles/Nami_01.jpg",
    "/styles/Nami_03.jpg",
  ];
  return (
    <div className={styles.styleCarouselArea}>
      <div className={styles.styleCarousel}>
        <Carousel
          showArrows={true}
          showThumbs={false}
          autoPlay={true}
          infiniteLoop={true}
          interval={4000}
          statusFormatter={() => ``}
        >
          {styleImages1.map((url, index) => (
            <div className={styles.styleCarouselArea} key={index}>
              <Image
                src={url}
                height={500}
                width={315}
                alt={"Styleスライダーです"}
              />
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  );
};

export default StyleCarousel;
