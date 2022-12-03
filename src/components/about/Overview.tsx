// Overviewは、CustomerとToStylistの2つをサービスに渡す
import Link from "next/link";
import Customer from "./Customer";
import Button from "../../components/layouts/Button";
import ApplicationFlow from "../Application/ApplicationFlow";
import styles from "../../styles/Service/Service.module.scss";

const Overview: React.FC = () => {
  return (
    <>
      <div className={styles.main}>
        <h2 className={styles.mainTitle}>About</h2>
        <p className={styles.subTitle}>私について</p>
        <>
          <Customer />
          <ApplicationFlow />
          <Link href={"/"}>
            <Button props={"戻る"} />
          </Link>
        </>
      </div>
    </>
  );
};

export default Overview;
