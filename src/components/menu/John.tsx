import React from "react";
import Link from "next/link";
import styles from "../../styles/StylistMenu/StylistMenu.module.scss";

export default function John() {
  return (
    <div className={styles.menu}>
      <h2 className={styles.menuTitle}>カット</h2>
      <p className={styles.menuDetail}>※ブロー込み</p>
      <table className={styles.menuArea}>
        <tbody>
          <tr className={styles.menuTableTr}>
            <th className={styles.menuTableTh}>大人</th>
            <td className={styles.menuTableTd}>&nbsp;</td>
            <td className={styles.menuTableTd}>¥4,700</td>
            <td className={styles.menuTableTd}>90分</td>
          </tr>
        </tbody>
        <tbody>
          <tr>
            <th className={styles.menuTableTh}>中高生</th>
            <td className={styles.menuTableTd}>&nbsp;</td>
            <td className={styles.menuTableTd}>¥3,700</td>
            <td className={styles.menuTableTd}>90分</td>
          </tr>
        </tbody>
        <tbody>
          <tr className={styles.menuTablLast}>
            <th className={styles.menuTableTh}>小学生以下</th>
            <td className={styles.menuTableTd}>&nbsp;</td>
            <td className={styles.menuTableTd}>¥2,500</td>
            <td className={styles.menuTableTd}>60分</td>
          </tr>
        </tbody>
        <tbody>
          <tr className={styles.menuTablLast}>
            <th className={styles.menuTableTh}>フロントカット</th>
            <td className={styles.menuTableTd}>&nbsp;</td>
            <td className={styles.menuTableTd}>¥500</td>
            <td className={styles.menuTableTd}>15分</td>
          </tr>
        </tbody>
      </table>

      <h2 className={styles.menuTitle}>眉カット</h2>
      <table className={styles.menuArea}>
        <tbody>
          <tr className={styles.menuTablLast}>
            <th className={styles.menuTableTh}>眉カット</th>
            <td className={styles.menuTableTd}>&nbsp;</td>
            <td className={styles.menuTableTd}>¥1,000</td>
            <td className={styles.menuTableTd}>15分</td>
          </tr>
        </tbody>
      </table>

      <h2 className={styles.menuTitle}>カットカラー</h2>
      <p className={styles.menuDetail}>
        (カットなしの場合、Sh.Br代 + ¥2,000が必要です)
      </p>
      <table className={styles.menuArea}>
        <tbody>
          <tr className={styles.menuTableTr}>
            <th className={styles.menuTableTh}>リタッチ</th>
            <td className={styles.menuTableTd}>
              (神田指名のカラーリングから30日以内の場合)
            </td>
            <td className={styles.menuTableTd}>¥3,500</td>
            <td className={styles.menuTableTd}>90分</td>
          </tr>
        </tbody>
        <tbody>
          <tr className={styles.menuTableTr}>
            <th className={styles.menuTableTh}>トリートメントカラー</th>
            <td className={styles.menuTableTd}>※長さ料金あり</td>
            <td className={styles.menuTableTd}>¥6,300〜</td>
            <td className={styles.menuTableTd}>120分〜</td>
          </tr>
        </tbody>
        <tbody>
          <tr className={styles.menuTableTr}>
            <th className={styles.menuTableTh}>ダブルカラー</th>
            <td className={styles.menuTableTd}>※長さ料金あり</td>
            <td className={styles.menuTableTd}>¥12,100</td>
            <td className={styles.menuTableTd}>分</td>
          </tr>
        </tbody>
        <tbody>
          <tr className={styles.menuTableTr}>
            <th className={styles.menuTableTh}>インナーカラー</th>
            <td className={styles.menuTableTd}>
              ※デザインによって料金が変動します
            </td>
            <td className={styles.menuTableTd}>¥4,000〜¥6,000</td>
            <td className={styles.menuTableTd}>150分</td>
          </tr>
        </tbody>
        <tbody>
          <tr className={styles.menuTablLast}>
            <th className={styles.menuTableTh}>ホイルカラー</th>
            <td className={styles.menuTableTd}>
              ※デザインによって料金が変動します
            </td>
            <td className={styles.menuTableTd}>¥3,300〜¥6,000</td>
            <td className={styles.menuTableTd}>60分〜</td>
          </tr>
        </tbody>
      </table>

      <h2 className={styles.menuTitle}>パーマ</h2>
      <p className={styles.menuDetail}>
        (カットなしの場合、Sh.Br代 + ¥2,000が必要です)
      </p>
      <table className={styles.menuArea}>
        <tbody>
          <tr className={styles.menuTableTr}>
            <th className={styles.menuTableTh}>プレミアムパーマ</th>
            <td className={styles.menuTableTd}>※自然な強さのパーマ</td>
            <td className={styles.menuTableTd}>¥6,300</td>
            <td className={styles.menuTableTd}>120分</td>
          </tr>
        </tbody>
        <tbody>
          <tr>
            <th className={styles.menuTableTh}>プレミアムハードパーマ</th>
            <td className={styles.menuTableTd}>※強めのパーマ</td>
            <td className={styles.menuTableTd}>¥7,800〜¥10,800</td>
            <td className={styles.menuTableTd}>150分</td>
          </tr>
        </tbody>
        <tbody>
          <tr className={styles.menuTablLast}>
            <th className={styles.menuTableTh}>プレミアムデジタルパーｍ</th>
            <td className={styles.menuTableTd}>&nbsp;</td>
            <td className={styles.menuTableTd}>¥9,800</td>
            <td className={styles.menuTableTd}>150分</td>
          </tr>
        </tbody>
        <tbody>
          <tr className={styles.menuTablLast}>
            <th className={styles.menuTableTh}>プレミアムポイントパーマ</th>
            <td className={styles.menuTableTd}>&nbsp;</td>
            <td className={styles.menuTableTd}>¥4,800</td>
            <td className={styles.menuTableTd}>90分</td>
          </tr>
        </tbody>
      </table>

      <h2 className={styles.menuTitle}>縮毛矯正</h2>
      <p className={styles.menuDetail}>
        (カットなしの場合、Sh.Br代 + ¥2,000が必要です)
      </p>
      <table className={styles.menuArea}>
        <tbody>
          <tr className={styles.menuTableTr}>
            <th className={styles.menuTableTh}>プレミアム縮毛矯正</th>
            <td className={styles.menuTableTd}>※長さ料金あり</td>
            <td className={styles.menuTableTd}>¥10,300〜</td>
            <td className={styles.menuTableTd}>180分〜</td>
          </tr>
        </tbody>
        <tbody>
          <tr className={styles.menuTableTr}>
            <th className={styles.menuTableTh}>プレミアム縮毛矯正(半頭)</th>
            <td className={styles.menuTableTd}>※長さ料金あり</td>
            <td className={styles.menuTableTd}>¥6,000〜</td>
            <td className={styles.menuTableTd}>120分〜</td>
          </tr>
        </tbody>
        <tbody>
          <tr className={styles.menuTablLast}>
            <th className={styles.menuTableTh}>プレミアム縮毛矯正フロント</th>
            <td className={styles.menuTableTd}>&nbsp;</td>
            <td className={styles.menuTableTd}>¥3,300</td>
            <td className={styles.menuTableTd}>60分</td>
          </tr>
        </tbody>
      </table>

      <h2 className={styles.menuTitle}>酸性ストレート</h2>
      <table className={styles.menuArea}>
        <tbody>
          <tr className={styles.menuTablLast}>
            <th className={styles.menuTableTh}>☆極上☆酸性シルクストレート</th>
            <td className={styles.menuTableTd}>※ロング料金 + ¥2,000</td>
            <td className={styles.menuTableTd}>¥20,000〜</td>
            <td className={styles.menuTableTd}>210分〜</td>
          </tr>
        </tbody>
      </table>

      <h2 className={styles.menuTitle}>トリートメント</h2>
      <table className={styles.menuArea}>
        <tbody>
          <tr className={styles.menuTableTr}>
            <th className={styles.menuTableTh}>シャンプー&amp;ブロー</th>
            <td className={styles.menuTableTd}>&nbsp;</td>
            <td className={styles.menuTableTd}>¥2,000</td>
            <td className={styles.menuTableTd}>30分</td>
          </tr>
        </tbody>
        <tbody>
          <tr className={styles.menuTableTr}>
            <th className={styles.menuTableTh}>オラプレックストリートメント</th>
            <td className={styles.menuTableTd}>&nbsp;</td>
            <td className={styles.menuTableTd}>¥1,500</td>
            <td className={styles.menuTableTd}>15分</td>
          </tr>
        </tbody>
        <tbody>
          <tr className={styles.menuTableTr}>
            <th className={styles.menuTableTh}>クリームバス(スパ)</th>
            <td className={styles.menuTableTd}>&nbsp;</td>
            <td className={styles.menuTableTd}>¥3,000</td>
            <td className={styles.menuTableTd}>30分</td>
          </tr>
        </tbody>
        <tbody>
          <tr className={styles.menuTableTr}>
            <th className={styles.menuTableTh}>高保湿トリートメント</th>
            <td className={styles.menuTableTd}>(５ステップ)</td>
            <td className={styles.menuTableTd}>¥3,500</td>
            <td className={styles.menuTableTd}>30分</td>
          </tr>
        </tbody>
        <tbody>
          <tr className={styles.menuTableTr}>
            <th className={styles.menuTableTh}>クイックトリートメント</th>
            <td className={styles.menuTableTd}>(３ステップ)</td>
            <td className={styles.menuTableTd}>¥2,000</td>
            <td className={styles.menuTableTd}>15分</td>
          </tr>
        </tbody>
        <tbody>
          <tr className={styles.menuTableTr}>
            <th className={styles.menuTableTh}>“頭皮の保湿“クレンジングスパ</th>
            <td className={styles.menuTableTd}>&nbsp;</td>
            <td className={styles.menuTableTd}>¥1,500</td>
            <td className={styles.menuTableTd}>15分</td>
          </tr>
        </tbody>
        <tbody>
          <tr className={styles.menuTableTr}>
            <th className={styles.menuTableTh}>“つや髪“髪質改善</th>
            <td className={styles.menuTableTd}>(アイロンなし)</td>
            <td className={styles.menuTableTd}>¥6,000</td>
            <td className={styles.menuTableTd}>60分</td>
          </tr>
        </tbody>
        <tbody>
          <tr className={styles.menuTablLast}>
            <th className={styles.menuTableTh}>“つや髪“髪質改善</th>
            <td className={styles.menuTableTd}>(アイロン有り)</td>
            <td className={styles.menuTableTd}>¥8,000</td>
            <td className={styles.menuTableTd}>90分</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
