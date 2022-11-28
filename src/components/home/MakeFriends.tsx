import Link from "next/link";
import Image from "next/legacy/image";
import styles from "../../styles/Layouts/MakeFriends.module.scss";

const MakeFriends: React.FC = () => {
  return (
    <>
      <div className={styles.friendsSingle}>
        <div className={styles.friendsFlex}>
          <div className={styles.friendsLeft}>
            <Link
              href={"https://page.line.me/153jsnax?openQrModal=true"}
              passHref
            >
              <Image
                className={styles.friendsImage}
                src={"/media/QR_LINE.png"}
                alt={"友達追加はこちらから"}
                width={240}
                height={240}
              />
            </Link>
          </div>
          <div className={styles.friendsRight}>
            <div className={styles.friendsMainTitle}>
              <Link
                href={"https://page.line.me/153jsnax?openQrModal=true"}
                passHref
              >
                <h2>お友達追加はこちら</h2>
              </Link>
            </div>
            {/* Prevent HTML tags from being output */}
            <Link
              href={"https://page.line.me/153jsnax?openQrModal=true"}
              passHref
            >
              <div className={styles.friendsBody}>
                GOOD-DAYでスタイリストとして働いてみたいという美容師さん。お気軽にご連絡ください。
              </div>
            </Link>
            <div className={styles.next}>
              <Link
                href={"https://page.line.me/153jsnax?openQrModal=true"}
                passHref
              >
                <div className={styles.nextInner}>
                  <span className={styles.nextInnerIn}>Add Friends</span>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MakeFriends;
