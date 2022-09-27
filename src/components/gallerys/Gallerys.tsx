import React from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "../../styles/Stylist/Staff.module.scss";

// clientに接続してgalleryの画像を拾ってくるようにしよう
const Garrelys: React.FC = () => {
  const images = [
    "/media/BLOG_icon.png",
    "/media/BLOG_icon.png",
    "/media/BLOG_icon.png",
    "/media/BLOG_icon.png",
    "/media/BLOG_icon.png",
    "/media/BLOG_icon.png",
  ];
  return (
    <>
      <div>
        <h2 className={styles.mainTitle}>Garrelys</h2>
        <p className={styles.mainSubTitle}>作品紹介</p>
      </div>
      <>
        <div className={styles.main}>
          <ul className={styles.flex}>
            {images.map((image) => {
              return (
                <Link href={"/"} passHref key={image}>
                  <a>
                    <li className={styles.stylistImage}>
                      <Image
                        className={styles.stylistImageHover}
                        src={image}
                        objectFit="contain"
                        alt={"作品"}
                        width={240}
                        height={240}
                      />
                    </li>
                  </a>
                </Link>
              );
            })}
          </ul>
        </div>
      </>
    </>
  );
};

export default Garrelys;
