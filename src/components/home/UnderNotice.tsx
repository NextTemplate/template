import Link from "next/link";
import Image from "next/legacy/image";
import styles from "../../styles/Layouts/UnderNotice.module.scss";

export default function UnderNotice() {
  return (
    <>
      <div className={styles.underNotice}>
        <div className={styles.poyoyon}>
          <Link
            href={"https://sam004.salonanswer.com/sas/reserve/goodday/staff"}
          >
            <button className={styles.underNoticeButton}>
              Web予約はこちら
            </button>
          </Link>
        </div>
      </div>
    </>
  );
}
