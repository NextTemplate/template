import React from "react";
import Link from "next/link";
import Image from "next/legacy/image";
import styles from "../../styles/Stylist/Staff.module.scss";

// clientに接続してgalleryの画像を拾ってくるようにしよう
const Garrelys: React.FC = () => {
  const Items_00 = {
    link: "/gallery/work_00",
    src: "/media/gear_00.png",
    alt: "作品00",
    title: "制作会社HP",
    subTitle: "web制作",
  };
  const Items_01 = {
    link: "/gallery/work_01",
    src: "/media/gear_01.png",
    alt: "作品01",
    title: "わたしん家",
    subTitle: "web制作",
  };
  const Items_02 = {
    link: "/gallery/work_02",
    src: "/media/gear_02.png",
    alt: "作品02",
    title: "そら保育園HP",
    subTitle: "web制作",
  };
  const Items_03 = {
    link: "/gallery/work_03",
    src: "/media/gear_03.png",
    alt: "作品03",
    title: "制作会社HP",
    subTitle: "web制作",
  };
  const Items_04 = {
    link: "/gallery/work_04",
    src: "/media/gear_04.png",
    alt: "作品04",
    title: "不動産売買サイト",
    subTitle: "web制作",
  };
  const Items_05 = {
    link: "/gallery/work_05",
    src: "/media/gear_05.png",
    alt: "作品05",
    title: "OKストレージ",
    subTitle: "web制作",
  };
  const Items_06 = {
    link: "/gallery/work_06",
    src: "/media/gear_06.png",
    alt: "作品06",
    title: "賃貸ステーション",
    subTitle: "web制作",
  };
  const Items_07 = {
    link: "/gallery/work_07",
    src: "/media/gear_07.png",
    alt: "作品07",
    title: "SDG's",
    subTitle: "web制作",
  };
  return (
    <>
      <div>
        <h2 className={styles.mainTitle}>Garrelys</h2>
        <p className={styles.mainSubTitle}>作品紹介</p>
      </div>
      {/* <>
        <div className={styles.main}>
          <ul className={styles.flex}>
            {images.map((image) => {
              return (
                <Link href={"/"} passHref key={image}>
                  <li className={styles.stylistImage}>
                    <Image
                      className={styles.imageHover}
                      src={image}
                      objectFit="contain"
                      alt={"作品"}
                      width={240}
                      height={240}
                    />
                  </li>
                </Link>
              );
            })}
          </ul>
        </div>
      </> */}
      <div className={styles.main}>
        <div>
          <ul className={styles.flex}>
            <Link href={Items_07.link}>
              <li className={styles.stylistImage}>
                <Image
                  className={styles.rotate7}
                  src={Items_07.src}
                  alt={Items_07.alt}
                  width={240}
                  height={240}
                />
                <div className={styles.stylistMask}>
                  <p className={styles.stylistCaption}>{Items_07.title}</p>
                  <p className={styles.stylistCaptionSub}>
                    {Items_07.subTitle}
                  </p>
                </div>
              </li>
            </Link>
            <Link href={Items_06.link}>
              <li className={styles.stylistImage}>
                <Image
                  className={styles.rotate6}
                  src={Items_06.src}
                  alt={Items_06.alt}
                  width={240}
                  height={240}
                />
                <div className={styles.stylistMask}>
                  <p className={styles.stylistCaption}>{Items_06.title}</p>
                  <p className={styles.stylistCaptionSub}>
                    {Items_06.subTitle}
                  </p>
                </div>
              </li>
            </Link>
            <Link href={Items_05.link}>
              <li className={styles.stylistImage}>
                <Image
                  className={styles.rotate5}
                  src={Items_05.src}
                  alt={Items_05.alt}
                  width={240}
                  height={240}
                />
                <div className={styles.stylistMask}>
                  <p className={styles.stylistCaption}>{Items_05.title}</p>
                  <p className={styles.stylistCaptionSub}>
                    {Items_05.subTitle}
                  </p>
                </div>
              </li>
            </Link>
            <Link href={Items_04.link}>
              <li className={styles.stylistImage}>
                <Image
                  className={styles.rotate4}
                  src={Items_04.src}
                  alt={Items_04.alt}
                  width={240}
                  height={240}
                />
                <div className={styles.stylistMask}>
                  <p className={styles.stylistCaption}>{Items_04.title}</p>
                  <p className={styles.stylistCaptionSub}>
                    {Items_04.subTitle}
                  </p>
                </div>
              </li>
            </Link>
            <Link href={Items_03.link}>
              <li className={styles.stylistImage}>
                <Image
                  className={styles.rotate3}
                  src={Items_03.src}
                  alt={Items_03.alt}
                  width={240}
                  height={240}
                />
                <div className={styles.stylistMask}>
                  <p className={styles.stylistCaption}>{Items_03.title}</p>
                  <p className={styles.stylistCaptionSub}>
                    {Items_03.subTitle}
                  </p>
                </div>
              </li>
            </Link>
            <Link href={Items_02.link}>
              <li className={styles.stylistImage}>
                <Image
                  className={styles.rotate2}
                  src={Items_02.src}
                  alt={Items_02.alt}
                  width={240}
                  height={240}
                />
                <div className={styles.stylistMask}>
                  <p className={styles.stylistCaption}>{Items_02.title}</p>
                  <p className={styles.stylistCaptionSub}>
                    {Items_02.subTitle}
                  </p>
                </div>
              </li>
            </Link>
            <Link href={Items_01.link}>
              <li className={styles.stylistImage}>
                <Image
                  className={styles.rotate1}
                  src={Items_01.src}
                  alt={Items_01.alt}
                  width={240}
                  height={240}
                />
                <div className={styles.stylistMask}>
                  <p className={styles.stylistCaption}>{Items_01.title}</p>
                  <p className={styles.stylistCaptionSub}>
                    {Items_01.subTitle}
                  </p>
                </div>
              </li>
            </Link>
            <Link href={Items_00.link}>
              <li className={styles.stylistImage}>
                <Image
                  className={styles.rotate0}
                  src={Items_00.src}
                  alt={Items_00.alt}
                  width={240}
                  height={240}
                />
                <div className={styles.stylistMask}>
                  <p className={styles.stylistCaption}>{Items_00.title}</p>
                  <p className={styles.stylistCaptionSub}>
                    {Items_00.subTitle}
                  </p>
                </div>
              </li>
            </Link>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Garrelys;
