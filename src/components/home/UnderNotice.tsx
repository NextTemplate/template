import Link from "next/link";
import Image from "next/image";
import styles from "../../styles/Layouts/UnderNotice.module.scss";

export default function UnderNotice() {
  return (
    <>
      <div className={styles.underNotice}>
        <div className={styles.poyoyon}>
          <Link href={"/"}>
            <a>
              <button className={styles.underNoticeButton}>
                サンプルテキスト
              </button>
            </a>
          </Link>
        </div>
      </div>
    </>
  );
}
