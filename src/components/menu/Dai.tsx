import React from "react";
import Link from "next/link";
import styles from "../../styles/StylistMenu/StylistMenu.module.scss";

export default function Dai() {
  return (
    <div className={styles.menu}>
      <h2 className={styles.menuTitle}>カット</h2>
      <p className={styles.menuDetail}>(シャンプー・ブロー込み)</p>
      <table className={styles.menuArea}>
        <tbody>
          <tr className={styles.menuTableTr}>
            <th className={styles.menuTableTh}>レディース</th>
            <td className={styles.menuTableTd}>(シャンプー・ブロー込み)</td>
            <td className={styles.menuTableTd}>¥4,950</td>
            <td className={styles.menuTableTd}>60分</td>
          </tr>
        </tbody>
        <tbody>
          <tr>
            <th className={styles.menuTableTh}>メンズ</th>
            <td className={styles.menuTableTd}>(シャンプー・ブロー込み)</td>
            <td className={styles.menuTableTd}>¥4,400</td>
            <td className={styles.menuTableTd}>60分</td>
          </tr>
        </tbody>
        <tbody>
          <tr className={styles.menuTablLast}>
            <th className={styles.menuTableTh}>中高生</th>
            <td className={styles.menuTableTd}>(シャンプー・ブロー込み)</td>
            <td className={styles.menuTableTd}>¥3,850</td>
            <td className={styles.menuTableTd}>60分</td>
          </tr>
        </tbody>
        <tbody>
          <tr className={styles.menuTablLast}>
            <th className={styles.menuTableTh}>小学生</th>
            <td className={styles.menuTableTd}>(シャンプー・ブロー込み)</td>
            <td className={styles.menuTableTd}>¥3,300</td>
            <td className={styles.menuTableTd}>60分</td>
          </tr>
        </tbody>
        <tbody>
          <tr className={styles.menuTablLast}>
            <th className={styles.menuTableTh}>小学生以下</th>
            <td className={styles.menuTableTd}>(シャンプー・ブロー込み)</td>
            <td className={styles.menuTableTd}>¥2,200</td>
            <td className={styles.menuTableTd}>60分</td>
          </tr>
        </tbody>
        <tbody>
          <tr className={styles.menuTablLast}>
            <th className={styles.menuTableTh}>フロント</th>
            <td className={styles.menuTableTd}>(シャンプーなし)</td>
            <td className={styles.menuTableTd}>¥550</td>
            <td className={styles.menuTableTd}>15分</td>
          </tr>
        </tbody>
        <tbody>
          <tr className={styles.menuTablLast}>
            <th className={styles.menuTableTh}>ポイントカット</th>
            <td className={styles.menuTableTd}>(シャンプーなし)</td>
            <td className={styles.menuTableTd}>¥2,200</td>
            <td className={styles.menuTableTd}>15分</td>
          </tr>
        </tbody>
      </table>

      <h2 className={styles.menuTitle}>カラー</h2>
      <p className={styles.menuDetail}>(ブロー込み)</p>
      <p className={styles.menuDetail}>
        ※長さ料金あり S+¥550 M+¥1,100 L+¥1,650 それ以上+¥2,200
      </p>
      <table className={styles.menuArea}>
        <tbody>
          <tr className={styles.menuTableTr}>
            <th className={styles.menuTableTh}>リタッチ(根元のみ)</th>
            <td className={styles.menuTableTd}>(根元のみ)</td>
            <td className={styles.menuTableTd}>¥5,500〜</td>
            <td className={styles.menuTableTd}>90分</td>
          </tr>
        </tbody>
        <tbody>
          <tr className={styles.menuTableTr}>
            <th className={styles.menuTableTh}>スタンダード</th>
            <td className={styles.menuTableTd}>※長さ料金あり</td>
            <td className={styles.menuTableTd}>¥6,600〜</td>
            <td className={styles.menuTableTd}>90分</td>
          </tr>
        </tbody>
        <tbody>
          <tr className={styles.menuTableTr}>
            <th className={styles.menuTableTh}>酸性カラー</th>
            <td className={styles.menuTableTd}>※長さ料金あり</td>
            <td className={styles.menuTableTd}>¥8,250〜</td>
            <td className={styles.menuTableTd}>120分</td>
          </tr>
        </tbody>
        <tbody>
          <tr className={styles.menuTableTr}>
            <th className={styles.menuTableTh}>ブリーチ</th>
            <td className={styles.menuTableTd}>※長さ料金あり</td>
            <td className={styles.menuTableTd}>¥7,700〜</td>
            <td className={styles.menuTableTd}>120分</td>
          </tr>
        </tbody>
        <tbody>
          <tr className={styles.menuTablLast}>
            <th className={styles.menuTableTh}>特殊カラー</th>
            <td className={styles.menuTableTd}>
              (インナー・グラデーション・ハイライト)
            </td>
            <td className={styles.menuTableTd}>¥3,850〜</td>
            <td className={styles.menuTableTd}>90分〜</td>
          </tr>
        </tbody>
      </table>

      <h2 className={styles.menuTitle}>パーマ</h2>
      <p className={styles.menuDetail}>(ブロー込み)</p>
      <p className={styles.menuDetail}>
        ※長さ料金あり S+¥550 M+¥1,100 L+¥1,650 それ以上+¥2,200
      </p>
      <table className={styles.menuArea}>
        <tbody>
          <tr className={styles.menuTableTr}>
            <th className={styles.menuTableTh}>レディース</th>
            <td className={styles.menuTableTd}>※長さ料金あり</td>
            <td className={styles.menuTableTd}>¥6,600</td>
            <td className={styles.menuTableTd}>90分</td>
          </tr>
        </tbody>
        <tbody>
          <tr>
            <th className={styles.menuTableTh}>メンズ</th>
            <td className={styles.menuTableTd}>※長さ料金あり</td>
            <td className={styles.menuTableTd}>¥6,050</td>
            <td className={styles.menuTableTd}>90分</td>
          </tr>
        </tbody>
        <tbody>
          <tr className={styles.menuTablLast}>
            <th className={styles.menuTableTh}>特殊パーマ</th>
            <td className={styles.menuTableTd}>(ツイスト・スパイラル)</td>
            <td className={styles.menuTableTd}>¥7,700</td>
            <td className={styles.menuTableTd}>120分</td>
          </tr>
        </tbody>
      </table>

      <h2 className={styles.menuTitle}>縮毛矯正</h2>
      <p className={styles.menuDetail}>(ブロー込み)</p>
      <p className={styles.menuDetail}>
        ※長さ料金あり S+¥550 M+¥1,100 L+¥1,650 それ以上+¥2,200
      </p>
      <table className={styles.menuArea}>
        <tbody>
          <tr>
            <th className={styles.menuTableTh}>リタッチ</th>
            <td className={styles.menuTableTd}>※長さ料金あり</td>
            <td className={styles.menuTableTd}>¥8,800</td>
            <td className={styles.menuTableTd}>120〜150分</td>
          </tr>
        </tbody>
        <tbody>
          <tr className={styles.menuTablLast}>
            <th className={styles.menuTableTh}>全体</th>
            <td className={styles.menuTableTd}>※長さ料金あり</td>
            <td className={styles.menuTableTd}>¥11,000</td>
            <td className={styles.menuTableTd}>150〜180分</td>
          </tr>
        </tbody>
      </table>

      <h2 className={styles.menuTitle}>その他</h2>
      <p className={styles.menuDetail}>(ブロー込み)</p>
      <p className={styles.menuDetail}>
        ※長さ料金あり S+¥550 M+¥1,100 L+¥1,650 それ以上+¥2,200
      </p>
      <table className={styles.menuArea}>
        <tbody>
          <tr className={styles.menuTableTr}>
            <th className={styles.menuTableTh}>眉カット</th>
            <td className={styles.menuTableTd}>&nbsp;</td>
            <td className={styles.menuTableTd}>¥550</td>
            <td className={styles.menuTableTd}>15分</td>
          </tr>
        </tbody>
        <tbody>
          <tr>
            <th className={styles.menuTableTh}>シャンプー</th>
            <td className={styles.menuTableTd}>※ブロー別</td>
            <td className={styles.menuTableTd}>¥1,100</td>
            <td className={styles.menuTableTd}>15分</td>
          </tr>
        </tbody>
        <tbody>
          <tr className={styles.menuTableTr}>
            <th className={styles.menuTableTh}>ブロー</th>
            <td className={styles.menuTableTd}>&nbsp;</td>
            <td className={styles.menuTableTd}>¥1,100</td>
            <td className={styles.menuTableTd}>15分</td>
          </tr>
        </tbody>
        <tbody>
          <tr>
            <th className={styles.menuTableTh}>トリートメントスタンダード</th>
            <td className={styles.menuTableTd}>&nbsp;</td>
            <td className={styles.menuTableTd}>¥2,200</td>
            <td className={styles.menuTableTd}>15分</td>
          </tr>
        </tbody>
        <tbody>
          <tr className={styles.menuTableTr}>
            <th className={styles.menuTableTh}>トリートメントプレミアム</th>
            <td className={styles.menuTableTd}>&nbsp;</td>
            <td className={styles.menuTableTd}>¥3,300</td>
            <td className={styles.menuTableTd}>15分</td>
          </tr>
        </tbody>
        <tbody>
          <tr>
            <th className={styles.menuTableTh}>ヘッドスパ</th>
            <td className={styles.menuTableTd}>&nbsp;</td>
            <td className={styles.menuTableTd}>¥1,650</td>
            <td className={styles.menuTableTd}>15分</td>
          </tr>
        </tbody>
        <tbody>
          <tr className={styles.menuTableTr}>
            <th className={styles.menuTableTh}>ヘアセットアップ</th>
            <td className={styles.menuTableTd}>&nbsp;</td>
            <td className={styles.menuTableTd}>¥4,400</td>
            <td className={styles.menuTableTd}>60分</td>
          </tr>
        </tbody>
        <tbody>
          <tr className={styles.menuTablLast}>
            <th className={styles.menuTableTh}>ハーフアップ</th>
            <td className={styles.menuTableTd}>&nbsp;</td>
            <td className={styles.menuTableTd}>¥3,300</td>
            <td className={styles.menuTableTd}>45分</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
