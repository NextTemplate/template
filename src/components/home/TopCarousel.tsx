import Link from "next/link";
import Image from "next/legacy/image";
import { Carousel } from "react-responsive-carousel";
import styles from "../../styles/Layouts/Carousel.module.scss";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const TopCarousel = () => {
  const images: string[] = [
    "/media/main_00.png",
    "/media/flyer_01.png",
    "/media/404notfound_00.jpg",
  ];
  return (
    <>
      <Carousel
        autoPlay={true}
        infiniteLoop={true}
        interval={8000}
        showArrows={true}
        showThumbs={false}
        statusFormatter={() => ``}
      >
        <div>
          <div className={`${styles.zoom} ${styles.zoom1}`}>
            <Image
              className={`${styles.carousel} ${styles.zoomImage0}`}
              src={images[0]}
              alt={"デビュー5周年記念"}
              width={2000}
              height={1250}
            />
          </div>
          <Link href={`/gallery`} passHref>
            <p className={styles.carouselInfo}>View More</p>
          </Link>
        </div>
        <div>
          <div className={`${styles.zoom} ${styles.zoom1}`}>
            <Image
              className={`${styles.carousel} ${styles.zoomImage1}`}
              src={images[1]}
              alt={"実績紹介"}
              width={2000}
              height={1250}
            />
          </div>
          <Link href={`/gallery`} passHref>
            <p className={styles.carouselInfo}>View More</p>
          </Link>
        </div>
        <div>
          <div className={`${styles.zoom} ${styles.zoom1}`}>
            <Image
              className={`${styles.carousel} ${styles.zoomImage2}`}
              src={images[2]}
              alt={"実績紹介"}
              width={2000}
              height={1250}
            />
          </div>
          <Link href={`/gallery`} passHref>
            <p className={styles.carouselInfo}>View More</p>
          </Link>
        </div>
      </Carousel>
    </>
  );
};

export default TopCarousel;
