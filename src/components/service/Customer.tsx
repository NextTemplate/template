import Link from "next/link";
import Image from "next/legacy/image";
import styles from "../../styles/Service/Service.module.scss";

const Customer: React.FC = () => {
  return (
    <>
      <div id="Customer" className={styles.main}>
        <h2 className={styles.featuresMainTitle}>GOOD-DAYのこだわり</h2>
        <p className={styles.featuresMainSubTitle}>お客様へ</p>
        <>
          <ul className={styles.flex}>
            <li className={styles.featuresItem}>
              <Image
                className={styles.featuresImage}
                src={"/media/Customer_00.png"}
                alt={"こだわり1"}
                width={240}
                height={240}
              />
              <p className={styles.featuresMainTitle}>完全個別対応</p>
              <p className={styles.featuresMainSubTitle}>
                一人のスタイリストが全て担当。
              </p>
            </li>
            <li className={styles.featuresItem}>
              <Image
                className={styles.featuresImage}
                src={"/media/Customer_01.png"}
                alt={"こだわり2"}
                width={240}
                height={240}
              />
              <p className={styles.featuresMainTitle}>待ち時間ゼロ</p>
              <p className={styles.featuresMainSubTitle}>
                完全予約制だからスムーズにご案内。
              </p>
            </li>
          </ul>
        </>
        <>
          <ul className={styles.flex}>
            <li className={styles.featuresItem}>
              <Image
                className={styles.featuresImage}
                src={"/media/Customer_02.png"}
                alt={"こだわり3"}
                width={240}
                height={240}
              />
              <p className={styles.featuresMainTitle}>営業時間長め</p>
              <p className={styles.featuresMainSubTitle}>
                遅い時間までやってます。
                <br />
                (詳しくはお問合せください)
              </p>
            </li>
            <li className={styles.featuresItem}>
              <Image
                className={styles.featuresImage}
                src={"/media/Customer_03.png"}
                alt={"こだわり4"}
                width={240}
                height={240}
              />
              <p className={styles.featuresMainTitle}>全て個室</p>
              <p className={styles.featuresMainSubTitle}>
                お部屋は半個室・個室で安心です。
              </p>
            </li>
          </ul>
        </>
        <>
          <ul className={styles.flex}>
            <li className={styles.featuresItem}>
              <Image
                className={styles.featuresImage}
                src={"/media/Customer_04.png"}
                alt={"こだわり5"}
                width={240}
                height={240}
              />
              <p className={styles.featuresMainTitle}>スマホで楽々予約</p>
              <p className={styles.featuresMainSubTitle}>
                簡単に予約ができちゃいます。
              </p>
            </li>
            <li className={styles.featuresItem}>
              <Image
                className={styles.featuresImage}
                src={"/media/Customer_05.png"}
                alt={"こだわり6"}
                width={240}
                height={240}
              />
              <p className={styles.featuresMainTitle}>安心の技術補償</p>
              <p className={styles.featuresMainSubTitle}>
                1週間以内のお直し無料です。
              </p>
            </li>
          </ul>
        </>
        <div className={styles.next}>
          <Link
            href={"https://sam004.salonanswer.com/sas/reserve/goodday/staff"}
            passHref
          >
            <div className={styles.nextInner}>
              <span className={styles.nextInnerIn}>Web予約はこちら</span>
            </div>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Customer;
