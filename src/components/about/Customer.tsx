import Link from "next/link";
import Image from "next/legacy/image";
import styles from "../../styles/Service/Service.module.scss";

const Customer: React.FC = () => {
  return (
    <>
      <div id="Customer">
        <>
          <div className={styles.area}>
            <table className={styles.table}>
              <tbody>
                <tr>
                  <th className={styles.tableTh}>小澤 達也</th>
                  <td className={styles.tableTd}>
                    <Image
                      alt="icon"
                      className=""
                      height={250}
                      objectFit="contain"
                      src="/media/Me_00.png"
                      width={250}
                    />
                  </td>
                </tr>
                <tr>
                  <th className={styles.tableTh}>スキルセット</th>
                  <td className={styles.tableTd}>
                    <Image
                      alt="SkillSet"
                      className=""
                      height={1000}
                      objectFit="contain"
                      src="/media/SkillSet_02.png"
                      width={1000}
                    />
                  </td>
                </tr>
                <tr>
                  <th className={styles.tableTh}>来歴</th>
                  <td className={styles.tableTd}>
                    <ul className={styles.textLeft}>
                      <li>
                        美容師として3年間勤務し、怪我のリハビリをきっかけに別業界に転職。
                      </li>
                      <br />
                      <li>
                        エンターテイメント業界にて、ビジネスコンサル兼インハウスデザイナーとして勤務後、webフロントエンドエンジニアへ転身。
                      </li>
                      <br />
                      <li>
                        不動産業界のweb制作に特化した渋谷の企業にてフロントエンドエンジニアとして勤務後、妻の家族の療養を理由に岡山県へと移住。
                      </li>
                      <br />
                      <li>
                        現在は岡山県の企業でインハウスデザイナー兼、シェアサロンビジネスのプロダクトマネージャーとして求人、採用、広告管理、webマーケティング、DTPの作成と広くヘアサロンに関わる。
                      </li>
                      <br />
                      <li>
                        インハウスデザイナーとしての経験を活かし、家族のためにフルリモート勤務、または近い環境で勤務できる企業様を探しています。
                      </li>
                    </ul>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </>
        <div className={styles.next}>
          <Link href={"/"} passHref>
            <div className={styles.nextInner}>
              <span className={styles.nextInnerIn}>back to Home</span>
            </div>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Customer;
