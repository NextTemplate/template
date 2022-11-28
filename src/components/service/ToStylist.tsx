import Link from "next/link";
import Image from "next/legacy/image";
import styles from "../../styles/Service/Service.module.scss";

const ToStylist: React.FC = () => {
  return (
    <>
      <div id="ToStylist" className={styles.main}>
        <h2 className={styles.featuresMainTitle}>GOOD-DAYで働く</h2>
        <p className={styles.featuresMainSubTitle}>スタイリストさんへ</p>
        <>
          <ul className={styles.flex}>
            <li className={styles.featuresItem}>
              <Image
                className={styles.featuresImage}
                src={"/media/Stylist_000.png"}
                alt={"グッディの特徴1"}
                objectFit="contain"
                width={240}
                height={240}
              />
              <p className={styles.featuresMainTitle}>店舗が新しくて綺麗</p>
              <p className={styles.featuresMainSubTitle}>
                快適な環境で安心して働けます。
              </p>
            </li>
            <li className={styles.featuresItem}>
              <Image
                className={styles.featuresImage}
                src={"/media/Stylist_01.png"}
                alt={"グッディの特徴2"}
                objectFit="contain"
                width={240}
                height={240}
              />
              <p className={styles.featuresMainTitle}>脅威の歩合</p>
              <p className={styles.featuresMainSubTitle}>
                やりがいと価値を感じて欲しい。
              </p>
            </li>
            <li className={styles.featuresItem}>
              <Image
                className={styles.featuresImage}
                src={"/media/Stylist_02.png"}
                alt={"グッディの特徴3"}
                objectFit="contain"
                width={240}
                height={240}
              />
              <p className={styles.featuresMainTitle}>周りの目が気にならない</p>
              <p className={styles.featuresMainSubTitle}>
                いつもよりお客様もリラックス
              </p>
            </li>
          </ul>
        </>
        <>
          <ul className={styles.flex}>
            <li className={styles.featuresItem}>
              <Image
                className={styles.featuresImage}
                src={"/media/Stylist_03.png"}
                alt={"グッディの特徴4"}
                objectFit="contain"
                width={240}
                height={240}
              />
              <p className={styles.featuresMainTitle}>コレを提供したかった…</p>
              <p className={styles.featuresMainSubTitle}>
                仕入も、持ち込みも自由です。
              </p>
            </li>
            <li className={styles.featuresItem}>
              <Image
                className={styles.featuresImage}
                src={"/media/Stylist_04.png"}
                alt={"グッディの特徴5"}
                objectFit="contain"
                width={240}
                height={240}
              />
              <p className={styles.featuresMainTitle}>土日祝休めちゃう</p>
              <p className={styles.featuresMainSubTitle}>
                バランスを見て、好きなだけ。
              </p>
            </li>
            <li className={styles.featuresItem}>
              <Image
                className={styles.featuresImage}
                src={"/media/Stylist_05.png"}
                alt={"グッディの特徴6"}
                objectFit="contain"
                width={240}
                height={240}
              />
              <p className={styles.featuresMainTitle}>意外だけど真理</p>
              <p className={styles.featuresMainSubTitle}>
                自分のペースで仕事できるから◎
              </p>
            </li>
          </ul>
        </>
        <>
          <ul className={styles.flex}>
            <li className={styles.featuresItem}>
              <Image
                className={styles.featuresImage}
                src={"/media/Stylist_06.png"}
                alt={"グッディの特徴7"}
                objectFit="contain"
                width={240}
                height={240}
              />
              <p className={styles.featuresMainTitle}>お店が負担します①</p>
              <p className={styles.featuresMainSubTitle}>
                タオルを気にせず営業。
              </p>
            </li>
            <li className={styles.featuresItem}>
              <Image
                className={styles.featuresImage}
                src={"/media/Stylist_07.png"}
                alt={"グッディの特徴8"}
                objectFit="contain"
                width={240}
                height={240}
              />
              <p className={styles.featuresMainTitle}>お店が負担します②</p>
              <p className={styles.featuresMainSubTitle}>
                システムトリートメントも。
              </p>
            </li>
            <li className={styles.featuresItem}>
              <Image
                className={styles.featuresImage}
                src={"/media/Stylist_08.png"}
                alt={"グッディの特徴9"}
                objectFit="contain"
                width={240}
                height={240}
              />
              <p className={styles.featuresMainTitle}>GOOD-DAYのその先へ</p>
              <p className={styles.featuresMainSubTitle}>
                独立に必要な知識やノウハウを。
              </p>
            </li>
          </ul>
        </>
        <div className={styles.next}>
          <Link href={"/recruit"} passHref>
            <div className={styles.nextInner}>
              <span className={styles.nextInnerIn}>募集条件を見る</span>
            </div>
          </Link>
        </div>
      </div>
    </>
  );
};

export default ToStylist;
