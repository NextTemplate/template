import Link from "next/link";
import "lightbox-react/style.css";
import Lightbox from "lightbox-react";
import Image from "next/legacy/image";
import React, { useState } from "react";
import styles from "../../styles/Service/Service.module.scss";

const Customer: React.FC = () => {
  const title = ["スキルセット"];
  const images = ["/media/SkillSet_02.png"];
  const [photoIndex, setIndex] = useState(0);
  const [isOpen, setisOpen] = useState(false);
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
                    {images.map((image, index) => (
                      <Image
                        alt="SkillSet"
                        className=""
                        height={1000}
                        key={index}
                        objectFit="contain"
                        onClick={() => {
                          setisOpen(true), setIndex(index);
                        }}
                        src={image}
                        width={1000}
                      />
                    ))}
                  </td>
                </tr>
                <tr>
                  <th className={styles.tableTh}>概要</th>
                  <td className={styles.tableTd}>
                    <ul className={styles.textLeft}>
                      <li>
                        美容師として3年間勤務し、怪我のリハビリをきっかけに別業界に転職。
                      </li>
                      <br />
                      <li>
                        東京都菊川の会社にて、ビジネスコンサル兼インハウスデザイナーとして勤務後、webフロントエンドエンジニアへ転身。
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
        {isOpen && (
          <Lightbox
            mainSrc={`${images[photoIndex]}`}
            nextSrc={images[(photoIndex + 1) % images.length]}
            prevSrc={images[(photoIndex + images.length - 1) % images.length]}
            onCloseRequest={() => setisOpen(false)}
            onMovePrevRequest={() =>
              setIndex((photoIndex + images.length - 1) % images.length)
            }
            onMoveNextRequest={() => setIndex((photoIndex + 1) % images.length)}
            imageTitle={title[photoIndex]}
            imageCaption={title[photoIndex]}
          />
        )}
      </div>
    </>
  );
};

export default Customer;
