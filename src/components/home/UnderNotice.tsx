import Link from "next/link";
import Image from "next/legacy/image";
import styles from "../../styles/Layouts/UnderNotice.module.scss";

export default function UnderNotice() {
  return (
    <>
      <div className={styles.underNotice}>
        <div className={styles.poyoyon}>
          <Link href={"/"}>
            <button className={styles.underNoticeButton}>to Top</button>
          </Link>
        </div>
      </div>
    </>
  );
}
