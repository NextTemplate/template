// Overviewは、CustomerとToStylistの2つをサービスに渡す
import Link from "next/link";
import Customer from "./Customer";
import styles from "../../styles/Service/Service.module.scss";

const Overview: React.FC = () => {
  return (
    <>
      <div className={styles.main}>
        <h2 className={styles.mainTitle}>About</h2>
        <p className={styles.subTitle}>私について</p>
        <>
          <Customer />
        </>
      </div>
    </>
  );
};

export default Overview;
