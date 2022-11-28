import React from "react";
import Link from "next/link";
import styles from "../../styles/StylistMenu/StylistMenu.module.scss";

export default function Natsuki() {
  return (
    <div className={styles.menu}>
      <h2 className={styles.menuTitle}>カット</h2>
      <p className={styles.menuDetail}>※SB(シャンプー・ブロー)込み</p>
      <table className={styles.menuArea}>
        <tbody>
          <tr className={styles.menuTableTr}>
            <th className={styles.menuTableTh}>カット</th>
            <td className={styles.menuTableTd}>(シャンプー・ブロー込)</td>
            <td className={styles.menuTableTd}>¥4,900</td>
            <td className={styles.menuTableTd}>90分</td>
          </tr>
        </tbody>
        <tbody>
          <tr>
            <th className={styles.menuTableTh}>高校生カット</th>
            <td className={styles.menuTableTd}>(シャンプー・ブロー込)</td>
            <td className={styles.menuTableTd}>¥4,000</td>
            <td className={styles.menuTableTd}>90分</td>
          </tr>
        </tbody>
        <tbody>
          <tr className={styles.menuTablLast}>
            <th className={styles.menuTableTh}>中学生カット</th>
            <td className={styles.menuTableTd}>(シャンプー・ブロー込)</td>
            <td className={styles.menuTableTd}>¥3,600</td>
            <td className={styles.menuTableTd}>90分</td>
          </tr>
        </tbody>
        <tbody>
          <tr className={styles.menuTablLast}>
            <th className={styles.menuTableTh}>小学生カット</th>
            <td className={styles.menuTableTd}>(シャンプー・ブロー込)</td>
            <td className={styles.menuTableTd}>¥3,000</td>
            <td className={styles.menuTableTd}>90分</td>
          </tr>
        </tbody>
        <tbody>
          <tr className={styles.menuTablLast}>
            <th className={styles.menuTableTh}>小学生以下のお子様カット</th>
            <td className={styles.menuTableTd}>(シャンプーなし)</td>
            <td className={styles.menuTableTd}>¥2,600</td>
            <td className={styles.menuTableTd}>90分</td>
          </tr>
        </tbody>
      </table>

      <h2 className={styles.menuTitle}>フロントカット</h2>
      <p className={styles.menuDetail}>※SB(シャンプー・ブロー)別</p>
      <table className={styles.menuArea}>
        <tbody>
          <tr className={styles.menuTablLast}>
            <th className={styles.menuTableTh}>フロントカット</th>
            <td className={styles.menuTableTd}>&nbsp;</td>
            <td className={styles.menuTableTd}>¥1,000</td>
            <td className={styles.menuTableTd}>30〜60分</td>
          </tr>
        </tbody>
        <tbody>
          <tr className={styles.menuTablLast}>
            <th className={styles.menuTableTh}>眉カット</th>
            <td className={styles.menuTableTd}>&nbsp;</td>
            <td className={styles.menuTableTd}>¥1,000</td>
            <td className={styles.menuTableTd}>30分</td>
          </tr>
        </tbody>
        <tbody>
          <tr className={styles.menuTablLast}>
            <th className={styles.menuTableTh}>フロントカット＋後れ毛カット</th>
            <td className={styles.menuTableTd}>
              (お顔周りのイメチェンや後れ毛作りたい方に)
            </td>
            <td className={styles.menuTableTd}>¥1,600</td>
            <td className={styles.menuTableTd}>60分</td>
          </tr>
        </tbody>
        <tbody>
          <tr className={styles.menuTablLast}>
            <th className={styles.menuTableTh}>メンテナンスカット</th>
            <td className={styles.menuTableTd}>(当店カットから2週間以内)</td>
            <td className={styles.menuTableTd}>¥2,600</td>
            <td className={styles.menuTableTd}>60分</td>
          </tr>
        </tbody>
      </table>

      <h2 className={styles.menuTitle}>SB</h2>
      <p className={styles.menuDetail}>(シャンプー・ブロー)</p>
      <table className={styles.menuArea}>
        <tbody>
          <tr className={styles.menuTablLast}>
            <th className={styles.menuTableTh}>SB(シャンプー・ブロー)</th>
            <td className={styles.menuTableTd}>&nbsp;</td>
            <td className={styles.menuTableTd}>¥2,600</td>
            <td className={styles.menuTableTd}>60分</td>
          </tr>
        </tbody>
      </table>

      <h2 className={styles.menuTitle}>カラー</h2>
      <p className={styles.menuDetail}>※SB(シャンプー・ブロー)別</p>
      <table className={styles.menuArea}>
        <tbody>
          <tr className={styles.menuTableTr}>
            <th className={styles.menuTableTh}>リタッチ</th>
            <td className={styles.menuTableTd}>
              リタッチ(3センチ以内)
              <br />
              <br />
              ※当店にてカラー後3週間以内 -¥1,000
              <br />
              <br />
              ※3cm以上 +¥1,000
            </td>
            <td className={styles.menuTableTd}>¥6,600</td>
            <td className={styles.menuTableTd}>90〜120分</td>
          </tr>
        </tbody>
        <tbody>
          <tr>
            <th className={styles.menuTableTh}>ショート</th>
            <td className={styles.menuTableTd}>&nbsp;</td>
            <td className={styles.menuTableTd}>¥7,600</td>
            <td className={styles.menuTableTd}>120分</td>
          </tr>
        </tbody>
        <tbody>
          <tr>
            <th className={styles.menuTableTh}>ミディアム</th>
            <td className={styles.menuTableTd}>&nbsp;</td>
            <td className={styles.menuTableTd}>¥8,200</td>
            <td className={styles.menuTableTd}>120分</td>
          </tr>
        </tbody>
        <tbody>
          <tr>
            <th className={styles.menuTableTh}>ロング</th>
            <td className={styles.menuTableTd}>&nbsp;</td>
            <td className={styles.menuTableTd}>¥8,700</td>
            <td className={styles.menuTableTd}>120分</td>
          </tr>
        </tbody>
        <tbody>
          <tr className={styles.menuTablLast}>
            <th className={styles.menuTableTh}>ケアカラー</th>
            <td className={styles.menuTableTd}>カラーに混ぜるトリートメント</td>
            <td className={styles.menuTableTd}>¥2,000</td>
          </tr>
        </tbody>
      </table>

      <h2 className={styles.menuTitle}>ブリーチ</h2>
      <p className={styles.menuDetail}>※SB(シャンプー・ブロー)別</p>
      <table className={styles.menuArea}>
        <tbody>
          <tr className={styles.menuTableTr}>
            <th className={styles.menuTableTh}>ショート</th>
            <td className={styles.menuTableTd}>&nbsp;</td>
            <td className={styles.menuTableTd}>¥8,600</td>
            <td className={styles.menuTableTd}>210分</td>
          </tr>
        </tbody>
        <tbody>
          <tr className={styles.menuTableTr}>
            <th className={styles.menuTableTh}>ミディアム</th>
            <td className={styles.menuTableTd}>&nbsp;</td>
            <td className={styles.menuTableTd}>¥9,100</td>
            <td className={styles.menuTableTd}>210〜240分</td>
          </tr>
        </tbody>
        <tbody>
          <tr className={styles.menuTablLast}>
            <th className={styles.menuTableTh}>ロング</th>
            <td className={styles.menuTableTd}>&nbsp;</td>
            <td className={styles.menuTableTd}>¥9,600</td>
            <td className={styles.menuTableTd}>210〜240分</td>
          </tr>
        </tbody>
      </table>

      <h2 className={styles.menuTitle}>ローライト・ハイライト</h2>
      <p className={styles.menuDetail}>※SB(シャンプー・ブロー)別</p>
      <table className={styles.menuArea}>
        <tbody>
          <tr className={styles.menuTableTr}>
            <th className={styles.menuTableTh}>5枚</th>
            <td className={styles.menuTableTd}>&nbsp;</td>
            <td className={styles.menuTableTd}>¥1,600</td>
            <td className={styles.menuTableTd}>180分</td>
          </tr>
        </tbody>
        <tbody>
          <tr className={styles.menuTableTr}>
            <th className={styles.menuTableTh}>10枚</th>
            <td className={styles.menuTableTd}>&nbsp;</td>
            <td className={styles.menuTableTd}>¥3,200</td>
            <td className={styles.menuTableTd}>180分</td>
          </tr>
        </tbody>
        <tbody>
          <tr className={styles.menuTableTr}>
            <th className={styles.menuTableTh}>15枚</th>
            <td className={styles.menuTableTd}>&nbsp;</td>
            <td className={styles.menuTableTd}>¥4,800</td>
            <td className={styles.menuTableTd}>180分</td>
          </tr>
        </tbody>
        <tbody>
          <tr className={styles.menuTableTr}>
            <th className={styles.menuTableTh}>20枚</th>
            <td className={styles.menuTableTd}>&nbsp;</td>
            <td className={styles.menuTableTd}>¥6,400</td>
            <td className={styles.menuTableTd}>210分</td>
          </tr>
        </tbody>
        <tbody>
          <tr className={styles.menuTablLast}>
            <th className={styles.menuTableTh}>3Dカラー</th>
            <td className={styles.menuTableTd}>&nbsp;</td>
            <td className={styles.menuTableTd}>¥9,800</td>
            <td className={styles.menuTableTd}>210〜240分</td>
          </tr>
        </tbody>
      </table>

      <h2 className={styles.menuTitle}>インナーカラー</h2>
      <p className={styles.menuDetail}>※SB(シャンプー・ブロー)別</p>
      <table className={styles.menuArea}>
        <tbody>
          <tr className={styles.menuTableTr}>
            <th className={styles.menuTableTh}>1束</th>
            <td className={styles.menuTableTd}>&nbsp;</td>
            <td className={styles.menuTableTd}>¥1,600</td>
            <td className={styles.menuTableTd}>210分</td>
          </tr>
        </tbody>
        <tbody>
          <tr className={styles.menuTableTr}>
            <th className={styles.menuTableTh}>2束</th>
            <td className={styles.menuTableTd}>&nbsp;</td>
            <td className={styles.menuTableTd}>¥3,200</td>
            <td className={styles.menuTableTd}>210分〜</td>
          </tr>
        </tbody>
        <tbody>
          <tr className={styles.menuTableTr}>
            <th className={styles.menuTableTh}>耳上</th>
            <td className={styles.menuTableTd}>&nbsp;</td>
            <td className={styles.menuTableTd}>¥3,800</td>
            <td className={styles.menuTableTd}>210〜240分</td>
          </tr>
        </tbody>
        <tbody>
          <tr className={styles.menuTablLast}>
            <th className={styles.menuTableTh}>耳上 + 襟足</th>
            <td className={styles.menuTableTd}>3ヶ月以内</td>
            <td className={styles.menuTableTd}>¥5,200〜¥6,200</td>
            <td className={styles.menuTableTd}>210〜240分</td>
          </tr>
        </tbody>
      </table>

      <h2 className={styles.menuTitle}>フェイスフレーミング</h2>
      <p className={styles.menuDetail}>※SB(シャンプー・ブロー)別</p>
      <table className={styles.menuArea}>
        <tbody>
          <tr className={styles.menuTablLast}>
            <th className={styles.menuTableTh}>フェイスフレーミング</th>
            <td className={styles.menuTableTd}>&nbsp;</td>
            <td className={styles.menuTableTd}>¥3,800〜¥4,200</td>
            <td className={styles.menuTableTd}>180分〜</td>
          </tr>
        </tbody>
      </table>

      <h2 className={styles.menuTitle}>カラーグラデーション</h2>
      <p className={styles.menuDetail}>(ブリーチなしスタイル)</p>
      <p className={styles.menuDetail}>※SB(シャンプー・ブロー)別</p>
      <table className={styles.menuArea}>
        <tbody>
          <tr className={styles.menuTableTr}>
            <th className={styles.menuTableTh}>ショート</th>
            <td className={styles.menuTableTd}>&nbsp;</td>
            <td className={styles.menuTableTd}>¥9,700</td>
            <td className={styles.menuTableTd}>180分</td>
          </tr>
        </tbody>
        <tbody>
          <tr className={styles.menuTableTr}>
            <th className={styles.menuTableTh}>ミディアム</th>
            <td className={styles.menuTableTd}>&nbsp;</td>
            <td className={styles.menuTableTd}>¥10,300</td>
            <td className={styles.menuTableTd}>180分</td>
          </tr>
        </tbody>
        <tbody>
          <tr className={styles.menuTablLast}>
            <th className={styles.menuTableTh}>ロング</th>
            <td className={styles.menuTableTd}>&nbsp;</td>
            <td className={styles.menuTableTd}>¥11,800</td>
            <td className={styles.menuTableTd}>240分</td>
          </tr>
        </tbody>
      </table>

      <h2 className={styles.menuTitle}>ブリーチグラデーション</h2>
      <p className={styles.menuDetail}>(オンカラー込み)</p>
      <p className={styles.menuDetail}>※SB(シャンプー・ブロー)別</p>
      <table className={styles.menuArea}>
        <tbody>
          <tr className={styles.menuTableTr}>
            <th className={styles.menuTableTh}>ショート</th>
            <td className={styles.menuTableTd}>&nbsp;</td>
            <td className={styles.menuTableTd}>¥13,900</td>
            <td className={styles.menuTableTd}>180分</td>
          </tr>
        </tbody>
        <tbody>
          <tr className={styles.menuTableTr}>
            <th className={styles.menuTableTh}>ミディアム</th>
            <td className={styles.menuTableTd}>&nbsp;</td>
            <td className={styles.menuTableTd}>¥14,500</td>
            <td className={styles.menuTableTd}>180分</td>
          </tr>
        </tbody>
        <tbody>
          <tr className={styles.menuTablLast}>
            <th className={styles.menuTableTh}>ロング</th>
            <td className={styles.menuTableTd}>&nbsp;</td>
            <td className={styles.menuTableTd}>¥15,100</td>
            <td className={styles.menuTableTd}>210〜240分</td>
          </tr>
        </tbody>
      </table>

      <h2 className={styles.menuTitle}>部分カラー</h2>
      <p className={styles.menuDetail}>※SB(シャンプー・ブロー)別</p>
      <table className={styles.menuArea}>
        <tbody>
          <tr className={styles.menuTablLast}>
            <th className={styles.menuTableTh}>部分カラー</th>
            <td className={styles.menuTableTd}>※範囲によって値段が変動</td>
            <td className={styles.menuTableTd}>¥3,900</td>
            <td className={styles.menuTableTd}>60〜120分</td>
          </tr>
        </tbody>
      </table>

      <h2 className={styles.menuTitle}>バイレイヤージュ</h2>
      <p className={styles.menuDetail}>※SB(シャンプー・ブロー)別</p>
      <table className={styles.menuArea}>
        <tbody>
          <tr className={styles.menuTableTr}>
            <th className={styles.menuTableTh}>ショート</th>
            <td className={styles.menuTableTd}>&nbsp;</td>
            <td className={styles.menuTableTd}>¥14,000</td>
            <td className={styles.menuTableTd}>240分</td>
          </tr>
        </tbody>
        <tbody>
          <tr className={styles.menuTableTr}>
            <th className={styles.menuTableTh}>ミディアム</th>
            <td className={styles.menuTableTd}>&nbsp;</td>
            <td className={styles.menuTableTd}>¥15,100</td>
            <td className={styles.menuTableTd}>240分〜</td>
          </tr>
        </tbody>
        <tbody>
          <tr className={styles.menuTablLast}>
            <th className={styles.menuTableTh}>ロング</th>
            <td className={styles.menuTableTd}>&nbsp;</td>
            <td className={styles.menuTableTd}>¥15,700</td>
            <td className={styles.menuTableTd}>270分</td>
          </tr>
        </tbody>
      </table>

      <h2 className={styles.menuTitle}>パーマ</h2>
      <p className={styles.menuDetail}>※C,SB(カット、シャンプー・ブロー)込</p>
      <table className={styles.menuArea}>
        <tbody>
          <tr className={styles.menuTableTr}>
            <th className={styles.menuTableTh}>ショート</th>
            <td className={styles.menuTableTd}>&nbsp;</td>
            <td className={styles.menuTableTd}>¥13,000</td>
            <td className={styles.menuTableTd}>150分</td>
          </tr>
        </tbody>
        <tbody>
          <tr className={styles.menuTableTr}>
            <th className={styles.menuTableTh}>ミディアム</th>
            <td className={styles.menuTableTd}>&nbsp;</td>
            <td className={styles.menuTableTd}>¥13,500</td>
            <td className={styles.menuTableTd}>150分</td>
          </tr>
        </tbody>
        <tbody>
          <tr className={styles.menuTableTr}>
            <th className={styles.menuTableTh}>ロング</th>
            <td className={styles.menuTableTd}>&nbsp;</td>
            <td className={styles.menuTableTd}>¥14,000</td>
            <td className={styles.menuTableTd}>150分</td>
          </tr>
        </tbody>
        <tbody>
          <tr className={styles.menuTableTr}>
            <th className={styles.menuTableTh}>ツイストパーマ</th>
            <td className={styles.menuTableTd}>&nbsp;</td>
            <td className={styles.menuTableTd}>+¥1,300</td>
            <td className={styles.menuTableTd}>+30分</td>
          </tr>
        </tbody>
        <tbody>
          <tr className={styles.menuTablLast}>
            <th className={styles.menuTableTh}>スパイラルパーマ</th>
            <td className={styles.menuTableTd}>&nbsp;</td>
            <td className={styles.menuTableTd}>+¥1,300</td>
            <td className={styles.menuTableTd}>+30分</td>
          </tr>
        </tbody>
      </table>

      <h2 className={styles.menuTitle}>ポイントパーマ</h2>
      <p className={styles.menuDetail}>※SB(シャンプー・ブロー)別</p>
      <table className={styles.menuArea}>
        <tbody>
          <tr className={styles.menuTablLast}>
            <th className={styles.menuTableTh}>ポイントパーマ</th>
            <td className={styles.menuTableTd}>本数に応じて値段が変動</td>
            <td className={styles.menuTableTd}>¥3,900〜</td>
            <td className={styles.menuTableTd}>120〜150分</td>
          </tr>
        </tbody>
      </table>

      <h2 className={styles.menuTitle}>パーマオフ</h2>
      <p className={styles.menuDetail}>※SB(シャンプー・ブロー)別</p>
      <table className={styles.menuArea}>
        <tbody>
          <tr className={styles.menuTablLast}>
            <th className={styles.menuTableTh}>ポイントパーマ</th>
            <td className={styles.menuTableTd}>※緩めたい場合にも◎</td>
            <td className={styles.menuTableTd}>¥3,800〜¥7,600</td>
            <td className={styles.menuTableTd}>120分</td>
          </tr>
        </tbody>
      </table>

      <h2 className={styles.menuTitle}>ポイントパーマオフ</h2>
      <p className={styles.menuDetail}>※SB(シャンプー・ブロー)別</p>
      <table className={styles.menuArea}>
        <tbody>
          <tr className={styles.menuTablLast}>
            <th className={styles.menuTableTh}>ポイントパーマオフ</th>
            <td className={styles.menuTableTd}>※緩めたい場合にも◎</td>
            <td className={styles.menuTableTd}>¥3,900</td>
            <td className={styles.menuTableTd}>60分</td>
          </tr>
        </tbody>
      </table>

      <h2 className={styles.menuTitle}>ストレート</h2>
      <p className={styles.menuDetail}>※C,SB(カット、シャンプー・ブロー)込</p>
      <table className={styles.menuArea}>
        <tbody>
          <tr className={styles.menuTableTr}>
            <th className={styles.menuTableTh}>ショート</th>
            <td className={styles.menuTableTd}>&nbsp;</td>
            <td className={styles.menuTableTd}>¥11,600</td>
            <td className={styles.menuTableTd}>150分</td>
          </tr>
        </tbody>
        <tbody>
          <tr className={styles.menuTableTr}>
            <th className={styles.menuTableTh}>ミディアム</th>
            <td className={styles.menuTableTd}>&nbsp;</td>
            <td className={styles.menuTableTd}>¥12,700</td>
            <td className={styles.menuTableTd}>150分</td>
          </tr>
        </tbody>
        <tbody>
          <tr className={styles.menuTablLast}>
            <th className={styles.menuTableTh}>ロング</th>
            <td className={styles.menuTableTd}>&nbsp;</td>
            <td className={styles.menuTableTd}>¥13,700</td>
            <td className={styles.menuTableTd}>150分</td>
          </tr>
        </tbody>
      </table>

      <h2 className={styles.menuTitle}>部分ストレート</h2>
      <p className={styles.menuDetail}>※C,SB(カット、シャンプー・ブロー)込</p>
      <table className={styles.menuArea}>
        <tbody>
          <tr className={styles.menuTableTr}>
            <th className={styles.menuTableTh}>フロントストレート</th>
            <td className={styles.menuTableTd}>&nbsp;</td>
            <td className={styles.menuTableTd}>¥3,400</td>
            <td className={styles.menuTableTd}>90分</td>
          </tr>
        </tbody>
        <tbody>
          <tr className={styles.menuTableTr}>
            <th className={styles.menuTableTh}>ハーフストレート</th>
            <td className={styles.menuTableTd}>&nbsp;</td>
            <td className={styles.menuTableTd}>¥6,600</td>
            <td className={styles.menuTableTd}>120分</td>
          </tr>
        </tbody>
        <tbody>
          <tr className={styles.menuTablLast}>
            <th className={styles.menuTableTh}>リタッチストレート</th>
            <td className={styles.menuTableTd}>3ヶ月以内</td>
            <td className={styles.menuTableTd}>¥6,600</td>
            <td className={styles.menuTableTd}>150分</td>
          </tr>
        </tbody>
      </table>

      <h2 className={styles.menuTitle}>縮毛矯正</h2>
      <p className={styles.menuDetail}>※C,SB(カット、シャンプー・ブロー)込</p>
      <table className={styles.menuArea}>
        <tbody>
          <tr className={styles.menuTableTr}>
            <th className={styles.menuTableTh}>ショート</th>
            <td className={styles.menuTableTd}>&nbsp;</td>
            <td className={styles.menuTableTd}>¥19,000</td>
            <td className={styles.menuTableTd}>210分</td>
          </tr>
        </tbody>
        <tbody>
          <tr className={styles.menuTableTr}>
            <th className={styles.menuTableTh}>ミディアム</th>
            <td className={styles.menuTableTd}>&nbsp;</td>
            <td className={styles.menuTableTd}>¥20,400</td>
            <td className={styles.menuTableTd}>210分</td>
          </tr>
        </tbody>
        <tbody>
          <tr className={styles.menuTablLast}>
            <th className={styles.menuTableTh}>ロング</th>
            <td className={styles.menuTableTd}>&nbsp;</td>
            <td className={styles.menuTableTd}>¥21,000</td>
            <td className={styles.menuTableTd}>210分</td>
          </tr>
        </tbody>
        <tbody>
          <tr className={styles.menuTablLast}>
            <th className={styles.menuTableTh}>リタッチ</th>
            <td className={styles.menuTableTd}>(新生毛)</td>
            <td className={styles.menuTableTd}>¥12,000〜¥14,000</td>
            <td className={styles.menuTableTd}>210分</td>
          </tr>
        </tbody>
      </table>

      <h2 className={styles.menuTitle}>部分縮毛矯正</h2>
      <p className={styles.menuDetail}>※SB(シャンプー・ブロー)別</p>
      <table className={styles.menuArea}>
        <tbody>
          <tr className={styles.menuTableTr}>
            <th className={styles.menuTableTh}>フロント縮毛矯正</th>
            <td className={styles.menuTableTd}>&nbsp;</td>
            <td className={styles.menuTableTd}>¥6,600</td>
            <td className={styles.menuTableTd}>120分</td>
          </tr>
        </tbody>
        <tbody>
          <tr className={styles.menuTablLast}>
            <th className={styles.menuTableTh}>ハーフ縮毛矯正</th>
            <td className={styles.menuTableTd}>必要範囲によって値段が変動</td>
            <td className={styles.menuTableTd}>¥9,800</td>
            <td className={styles.menuTableTd}>150分</td>
          </tr>
        </tbody>
      </table>

      <h2 className={styles.menuTitle}>トリートメント</h2>
      <p className={styles.menuDetail}>(カット別、シャンプー・ブロー別)</p>
      <table className={styles.menuArea}>
        <tbody>
          <tr className={styles.menuTableTr}>
            <th className={styles.menuTableTh}>ダメージケアトリートメント</th>
            <td className={styles.menuTableTd}>ショート</td>
            <td className={styles.menuTableTd}>¥1,400</td>
            <td className={styles.menuTableTd}>60分</td>
          </tr>
        </tbody>
        <tbody>
          <tr className={styles.menuTableTr}>
            <th className={styles.menuTableTh}>ダメージケアトリートメント</th>
            <td className={styles.menuTableTd}>ミディアム</td>
            <td className={styles.menuTableTd}>¥1,900</td>
            <td className={styles.menuTableTd}>60分</td>
          </tr>
        </tbody>
        <tbody>
          <tr className={styles.menuTableTr}>
            <th className={styles.menuTableTh}>ダメージケアトリートメント</th>
            <td className={styles.menuTableTd}>ロング</td>
            <td className={styles.menuTableTd}>¥2,400</td>
            <td className={styles.menuTableTd}>60分</td>
          </tr>
        </tbody>
        <tbody>
          <tr className={styles.menuTableTr}>
            <th className={styles.menuTableTh}>高濃度トリートメント</th>
            <td className={styles.menuTableTd}>ショート</td>
            <td className={styles.menuTableTd}>¥2,800</td>
            <td className={styles.menuTableTd}>60分</td>
          </tr>
        </tbody>
        <tbody>
          <tr className={styles.menuTableTr}>
            <th className={styles.menuTableTh}>高濃度トリートメント</th>
            <td className={styles.menuTableTd}>ミディアム</td>
            <td className={styles.menuTableTd}>¥3,300</td>
            <td className={styles.menuTableTd}>60分</td>
          </tr>
        </tbody>
        <tbody>
          <tr className={styles.menuTableTr}>
            <th className={styles.menuTableTh}>高濃度トリートメント</th>
            <td className={styles.menuTableTd}>ロング</td>
            <td className={styles.menuTableTd}>¥3,800</td>
            <td className={styles.menuTableTd}>60分</td>
          </tr>
        </tbody>
        <tbody>
          <tr className={styles.menuTableTr}>
            <th className={styles.menuTableTh}>
              スペシャル高濃度トリートメント
            </th>
            <td className={styles.menuTableTd}>ショート</td>
            <td className={styles.menuTableTd}>¥4,200</td>
            <td className={styles.menuTableTd}>60分</td>
          </tr>
        </tbody>
        <tbody>
          <tr className={styles.menuTableTr}>
            <th className={styles.menuTableTh}>
              スペシャル高濃度トリートメント
            </th>
            <td className={styles.menuTableTd}>ミディアム</td>
            <td className={styles.menuTableTd}>¥4,700</td>
            <td className={styles.menuTableTd}>60分</td>
          </tr>
        </tbody>
        <tbody>
          <tr className={styles.menuTableTr}>
            <th className={styles.menuTableTh}>
              スペシャル高濃度トリートメント
            </th>
            <td className={styles.menuTableTd}>ロング</td>
            <td className={styles.menuTableTd}>¥5,200</td>
            <td className={styles.menuTableTd}>60分</td>
          </tr>
        </tbody>
        <tbody>
          <tr className={styles.menuTableTr}>
            <th className={styles.menuTableTh}>プレミアム濃密トリートメント</th>
            <td className={styles.menuTableTd}>ショート</td>
            <td className={styles.menuTableTd}>¥7,900</td>
            <td className={styles.menuTableTd}>60分</td>
          </tr>
        </tbody>
        <tbody>
          <tr className={styles.menuTableTr}>
            <th className={styles.menuTableTh}>プレミアム濃密トリートメント</th>
            <td className={styles.menuTableTd}>ミディアム</td>
            <td className={styles.menuTableTd}>¥8,400</td>
            <td className={styles.menuTableTd}>60分</td>
          </tr>
        </tbody>
        <tbody>
          <tr className={styles.menuTablLast}>
            <th className={styles.menuTableTh}>プレミアム濃密トリートメント</th>
            <td className={styles.menuTableTd}>ロング</td>
            <td className={styles.menuTableTd}>¥8,900</td>
            <td className={styles.menuTableTd}>60分</td>
          </tr>
        </tbody>
      </table>

      <h2 className={styles.menuTitle}>スパ</h2>
      <p className={styles.menuDetail}>※SB(シャンプー・ブロー別)</p>
      <p className={styles.menuDetail}>※長さ料金無し</p>
      <table className={styles.menuArea}>
        <tbody>
          <tr className={styles.menuTableTr}>
            <th className={styles.menuTableTh}>炭酸クレンジング</th>
            <td className={styles.menuTableTd}>(5分)</td>
            <td className={styles.menuTableTd}>¥2,400</td>
            <td className={styles.menuTableTd}>30分</td>
          </tr>
        </tbody>
        <tbody>
          <tr className={styles.menuTableTr}>
            <th className={styles.menuTableTh}>リラクゼーションスパ</th>
            <td className={styles.menuTableTd}>(15分)</td>
            <td className={styles.menuTableTd}>¥4,700</td>
            <td className={styles.menuTableTd}>60分</td>
          </tr>
        </tbody>
        <tbody>
          <tr className={styles.menuTableTr}>
            <th className={styles.menuTableTh}>極上リラクゼーションスパ</th>
            <td className={styles.menuTableTd}>(30分)</td>
            <td className={styles.menuTableTd}>¥6,800</td>
            <td className={styles.menuTableTd}>90分</td>
          </tr>
        </tbody>
        <tbody>
          <tr className={styles.menuTablLast}>
            <th className={styles.menuTableTh}>プレミアム疲労回復スパ</th>
            <td className={styles.menuTableTd}>(45分)</td>
            <td className={styles.menuTableTd}>¥9,800</td>
            <td className={styles.menuTableTd}>90分</td>
          </tr>
        </tbody>
      </table>

      <h2 className={styles.menuTitle}>プレミアムリラックスタイムスパ</h2>
      <p className={styles.menuDetail}>※SB(シャンプー・ブロー別)</p>
      <p className={styles.menuDetail}>※スペシャルトリートメント付き</p>
      <table className={styles.menuArea}>
        <tbody>
          <tr className={styles.menuTableTr}>
            <th className={styles.menuTableTh}>ショート</th>
            <td className={styles.menuTableTd}>(60分)</td>
            <td className={styles.menuTableTd}>¥14,000</td>
            <td className={styles.menuTableTd}>90分</td>
          </tr>
        </tbody>
        <tbody>
          <tr className={styles.menuTableTr}>
            <th className={styles.menuTableTh}>ミディアム</th>
            <td className={styles.menuTableTd}>(60分)</td>
            <td className={styles.menuTableTd}>¥14,500</td>
            <td className={styles.menuTableTd}>90分</td>
          </tr>
        </tbody>
        <tbody>
          <tr className={styles.menuTablLast}>
            <th className={styles.menuTableTh}>ロング</th>
            <td className={styles.menuTableTd}>(60分)</td>
            <td className={styles.menuTableTd}>¥15,000</td>
            <td className={styles.menuTableTd}>90分</td>
          </tr>
        </tbody>
      </table>

      <h2 className={styles.menuTitle}>ヘアセット</h2>
      <table className={styles.menuArea}>
        <tbody>
          <tr className={styles.menuTablLast}>
            <th className={styles.menuTableTh}>アイロンセット</th>
            <td className={styles.menuTableTd}>¥2,500</td>
            <td className={styles.menuTableTd}>30分</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
