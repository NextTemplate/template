import React from "react";
import Link from "next/link";
import styles from "../../styles/StylistMenu/StylistMenu.module.scss";

export default function Mika() {
  return (
    <div className={styles.menu}>
      <h2 className={styles.menuTitle}>カット</h2>
      <p className={styles.menuDetail}>(シャンプー・ブロー込)</p>
      <table className={styles.menuArea}>
        <tbody>
          <tr className={styles.menuTableTr}>
            <th className={styles.menuTableTh}>大人・大学生</th>
            <td className={styles.menuTableTd}>&nbsp;</td>
            <td className={styles.menuTableTd}>¥4,730</td>
            <td className={styles.menuTableTd}>90分</td>
          </tr>
        </tbody>
        <tbody>
          <tr>
            <th className={styles.menuTableTh}>中高生</th>
            <td className={styles.menuTableTd}>&nbsp;</td>
            <td className={styles.menuTableTd}>¥3,740</td>
            <td className={styles.menuTableTd}>90分</td>
          </tr>
        </tbody>
        <tbody>
          <tr className={styles.menuTablLast}>
            <th className={styles.menuTableTh}>小学生</th>
            <td className={styles.menuTableTd}>&nbsp;</td>
            <td className={styles.menuTableTd}>¥2,750</td>
            <td className={styles.menuTableTd}>90分</td>
          </tr>
        </tbody>
        <tbody>
          <tr className={styles.menuTablLast}>
            <th className={styles.menuTableTh}>小学生未満</th>
            <td className={styles.menuTableTd}>(シャンプーなし)</td>
            <td className={styles.menuTableTd}>¥2,200</td>
            <td className={styles.menuTableTd}>90分</td>
          </tr>
        </tbody>
        <tbody>
          <tr className={styles.menuTablLast}>
            <th className={styles.menuTableTh}>前髪</th>
            <td className={styles.menuTableTd}>(シャンプーなし)</td>
            <td className={styles.menuTableTd}>¥770</td>
            <td className={styles.menuTableTd}>20分</td>
          </tr>
        </tbody>
      </table>

      <h2 className={styles.menuTitle}>カット</h2>
      <p className={styles.menuDetail}>(シャンプーなし)</p>
      <table className={styles.menuArea}>
        <tbody>
          <tr className={styles.menuTablLast}>
            <th className={styles.menuTableTh}>大人・大学生</th>
            <td className={styles.menuTableTd}>(シャンプーなし)</td>
            <td className={styles.menuTableTd}>¥3,630</td>
            <td className={styles.menuTableTd}>60分</td>
          </tr>
        </tbody>
      </table>

      <h2 className={styles.menuTitle}>カラー</h2>
      <p className={styles.menuDetail}>(カット・シャンプー・ブロー別)</p>
      <table className={styles.menuArea}>
        <tbody>
          <tr className={styles.menuTableTr}>
            <th className={styles.menuTableTh}>ショート</th>
            <td className={styles.menuTableTd}>&nbsp;</td>
            <td className={styles.menuTableTd}>¥7,370</td>
            <td className={styles.menuTableTd}>120分</td>
          </tr>
        </tbody>
        <tbody>
          <tr className={styles.menuTableTr}>
            <th className={styles.menuTableTh}>ミディアム</th>
            <td className={styles.menuTableTd}>&nbsp;</td>
            <td className={styles.menuTableTd}>¥7,920</td>
            <td className={styles.menuTableTd}>120分</td>
          </tr>
        </tbody>
        <tbody>
          <tr className={styles.menuTableTr}>
            <th className={styles.menuTableTh}>ロング</th>
            <td className={styles.menuTableTd}>&nbsp;</td>
            <td className={styles.menuTableTd}>¥8,470</td>
            <td className={styles.menuTableTd}>120分</td>
          </tr>
        </tbody>
        <tbody>
          <tr className={styles.menuTableTr}>
            <th className={styles.menuTableTh}>リタッチ</th>
            <td className={styles.menuTableTd}>(45日まで)</td>
            <td className={styles.menuTableTd}>5,500</td>
            <td className={styles.menuTableTd}>120分</td>
          </tr>
        </tbody>
        <tbody>
          <tr className={styles.menuTablLast}>
            <th className={styles.menuTableTh}>リタッチ</th>
            <td className={styles.menuTableTd}>(45日以内)</td>
            <td className={styles.menuTableTd}>¥6,600</td>
            <td className={styles.menuTableTd}>120分</td>
          </tr>
        </tbody>
      </table>

      <h2 className={styles.menuTitle}>ブリーチメニュー</h2>
      <p className={styles.menuDetail}>(カット・シャンプー・ブロー別)</p>
      <table className={styles.menuArea}>
        <tbody>
          <tr className={styles.menuTableTr}>
            <th className={styles.menuTableTh}>リタッチ</th>
            <td className={styles.menuTableTd}>&nbsp;</td>
            <td className={styles.menuTableTd}>¥7,700</td>
            <td className={styles.menuTableTd}>240〜300分</td>
          </tr>
        </tbody>
        <tbody>
          <tr>
            <th className={styles.menuTableTh}>ショート</th>
            <td className={styles.menuTableTd}>&nbsp;</td>
            <td className={styles.menuTableTd}>¥8,800</td>
            <td className={styles.menuTableTd}>240〜300分</td>
          </tr>
        </tbody>
        <tbody>
          <tr className={styles.menuTablLast}>
            <th className={styles.menuTableTh}>ミディアム</th>
            <td className={styles.menuTableTd}>&nbsp;</td>
            <td className={styles.menuTableTd}>¥9,900</td>
            <td className={styles.menuTableTd}>240〜300分</td>
          </tr>
        </tbody>
        <tbody>
          <tr className={styles.menuTablLast}>
            <th className={styles.menuTableTh}>ロング</th>
            <td className={styles.menuTableTd}>&nbsp;</td>
            <td className={styles.menuTableTd}>¥12,100</td>
            <td className={styles.menuTableTd}>240〜300分</td>
          </tr>
        </tbody>
        <tbody>
          <tr className={styles.menuTableTr}>
            <th className={styles.menuTableTh}>グラデーション</th>
            <td className={styles.menuTableTd}>(オンカラー込)</td>
          </tr>
        </tbody>
        <tbody>
          <tr className={styles.menuTableTr}>
            <th className={styles.menuTableTh}>ショート</th>
            <td className={styles.menuTableTd}>(オンカラー込)</td>
            <td className={styles.menuTableTd}>¥14,300</td>
            <td className={styles.menuTableTd}>240〜300分</td>
          </tr>
        </tbody>
        <tbody>
          <tr className={styles.menuTableTr}>
            <th className={styles.menuTableTh}>ミディアム</th>
            <td className={styles.menuTableTd}>(オンカラー込)</td>
            <td className={styles.menuTableTd}>¥15,400</td>
            <td className={styles.menuTableTd}>240〜300分</td>
          </tr>
        </tbody>
        <tbody>
          <tr className={styles.menuTableTr}>
            <th className={styles.menuTableTh}>ロング</th>
            <td className={styles.menuTableTd}>(オンカラー込)</td>
            <td className={styles.menuTableTd}>¥17,600</td>
            <td className={styles.menuTableTd}>240〜300分</td>
          </tr>
        </tbody>
        <tbody>
          <tr className={styles.menuTableTr}>
            <th className={styles.menuTableTh}>部分カラー</th>
            <td className={styles.menuTableTd}>(インナーサイド)</td>
            <td className={styles.menuTableTd}>¥4,070</td>
            <td className={styles.menuTableTd}>120〜180分</td>
          </tr>
        </tbody>
        <tbody>
          <tr className={styles.menuTableTr}>
            <th className={styles.menuTableTh}>インナーカラー</th>
            <td className={styles.menuTableTd}>サイド&amp;バック</td>
            <td className={styles.menuTableTd}>¥6,270</td>
            <td className={styles.menuTableTd}>120〜180分</td>
          </tr>
        </tbody>
        <tbody>
          <tr className={styles.menuTablLast}>
            <th className={styles.menuTableTh}>ハイライト&amp;ローライト</th>
            <td className={styles.menuTableTd}>ホイル(1枚)</td>
            <td className={styles.menuTableTd}>¥440〜</td>
            <td className={styles.menuTableTd}>120〜180分</td>
          </tr>
        </tbody>
      </table>

      <h2 className={styles.menuTitle}>パーマ</h2>
      <p className={styles.menuDetail}>(カット・シャンプー・ブロー込)</p>
      <table className={styles.menuArea}>
        <tbody>
          <tr className={styles.menuTableTr}>
            <th className={styles.menuTableTh}>ショート</th>
            <td className={styles.menuTableTd}>&nbsp;</td>
            <td className={styles.menuTableTd}>¥12,430</td>
            <td className={styles.menuTableTd}>150〜180分</td>
          </tr>
        </tbody>
        <tbody>
          <tr className={styles.menuTableTr}>
            <th className={styles.menuTableTh}>ミディアム</th>
            <td className={styles.menuTableTd}>&nbsp;</td>
            <td className={styles.menuTableTd}>¥12,980</td>
            <td className={styles.menuTableTd}>150〜180分</td>
          </tr>
        </tbody>
        <tbody>
          <tr className={styles.menuTableTr}>
            <th className={styles.menuTableTh}>ロング</th>
            <td className={styles.menuTableTd}>&nbsp;</td>
            <td className={styles.menuTableTd}>¥13,530</td>
            <td className={styles.menuTableTd}>150〜180分</td>
          </tr>
        </tbody>
        <tbody>
          <tr className={styles.menuTablLast}>
            <th className={styles.menuTableTh}>部分パーマ</th>
            <td className={styles.menuTableTd}>
              (カット・シャンプー・ブロー別)
            </td>
            <td className={styles.menuTableTd}>¥4,070</td>
            <td className={styles.menuTableTd}>90〜120分</td>
          </tr>
        </tbody>
      </table>
      <h2 className={styles.menuTitle}>デジタルパーマ</h2>
      <p className={styles.menuDetail}>(カット・シャンプー・ブロー込)</p>
      <table className={styles.menuArea}>
        <tbody>
          <tr className={styles.menuTableTr}>
            <th className={styles.menuTableTh}>ショート</th>
            <td className={styles.menuTableTd}>&nbsp;</td>
            <td className={styles.menuTableTd}>¥14,850</td>
            <td className={styles.menuTableTd}>210〜240分</td>
          </tr>
        </tbody>
        <tbody>
          <tr className={styles.menuTableTr}>
            <th className={styles.menuTableTh}>ミディアム</th>
            <td className={styles.menuTableTd}>&nbsp;</td>
            <td className={styles.menuTableTd}>¥12,980</td>
            <td className={styles.menuTableTd}>210〜240分</td>
          </tr>
        </tbody>
        <tbody>
          <tr className={styles.menuTablLast}>
            <th className={styles.menuTableTh}>ロング</th>
            <td className={styles.menuTableTd}>&nbsp;</td>
            <td className={styles.menuTableTd}>¥17,050</td>
            <td className={styles.menuTableTd}>210〜240分</td>
          </tr>
        </tbody>
      </table>
      <h2 className={styles.menuTitle}>矯正</h2>
      <p className={styles.menuDetail}>(カット・シャンプー・ブロー込)</p>
      <p className={styles.menuDetail}>アイロン処理有り</p>
      <table className={styles.menuArea}>
        <tbody>
          <tr className={styles.menuTableTr}>
            <th className={styles.menuTableTh}>ショート</th>
            <td className={styles.menuTableTd}>アイロン処理有り</td>
            <td className={styles.menuTableTd}>¥18,700</td>
            <td className={styles.menuTableTd}>210〜240分</td>
          </tr>
        </tbody>
        <tbody>
          <tr className={styles.menuTableTr}>
            <th className={styles.menuTableTh}>ミディアム</th>
            <td className={styles.menuTableTd}>アイロン処理有り</td>
            <td className={styles.menuTableTd}>¥19,800</td>
            <td className={styles.menuTableTd}>210〜240分</td>
          </tr>
        </tbody>
        <tbody>
          <tr className={styles.menuTableTr}>
            <th className={styles.menuTableTh}>ロング</th>
            <td className={styles.menuTableTd}>アイロン処理有り</td>
            <td className={styles.menuTableTd}>¥20,900</td>
            <td className={styles.menuTableTd}>210〜240分</td>
          </tr>
        </tbody>
        <tbody>
          <tr className={styles.menuTablLast}>
            <th className={styles.menuTableTh}>リタッチ</th>
            <td className={styles.menuTableTd}>3ヶ月以内</td>
            <td className={styles.menuTableTd}>¥15,400〜</td>
            <td className={styles.menuTableTd}>210〜240分</td>
          </tr>
        </tbody>
      </table>

      <h2 className={styles.menuTitle}>矯正</h2>
      <p className={styles.menuDetail}>(カット別、シャンプー・ブロー込)</p>
      <p className={styles.menuDetail}>アイロン処理有り</p>
      <table className={styles.menuArea}>
        <tbody>
          <tr className={styles.menuTableTr}>
            <th className={styles.menuTableTh}>ショート</th>
            <td className={styles.menuTableTd}>アイロン処理有り</td>
            <td className={styles.menuTableTd}>¥17,600</td>
            <td className={styles.menuTableTd}>210〜240分</td>
          </tr>
        </tbody>
        <tbody>
          <tr className={styles.menuTableTr}>
            <th className={styles.menuTableTh}>ミディアム</th>
            <td className={styles.menuTableTd}>アイロン処理有り</td>
            <td className={styles.menuTableTd}>¥18,700</td>
            <td className={styles.menuTableTd}>210〜240分</td>
          </tr>
        </tbody>
        <tbody>
          <tr className={styles.menuTableTr}>
            <th className={styles.menuTableTh}>ロング</th>
            <td className={styles.menuTableTd}>アイロン処理有り</td>
            <td className={styles.menuTableTd}>19,800</td>
            <td className={styles.menuTableTd}>210〜240分</td>
          </tr>
        </tbody>
        <tbody>
          <tr className={styles.menuTablLast}>
            <th className={styles.menuTableTh}>リタッチ</th>
            <td className={styles.menuTableTd}>3ヶ月以内</td>
            <td className={styles.menuTableTd}>¥14,200</td>
            <td className={styles.menuTableTd}>210〜240分</td>
          </tr>
        </tbody>
      </table>

      <h2 className={styles.menuTitle}>ポイント矯正</h2>
      <p className={styles.menuDetail}>(カット、シャンプー・ブロー別)</p>
      <table className={styles.menuArea}>
        <tbody>
          <tr className={styles.menuTableTr}>
            <th className={styles.menuTableTh}>フロント</th>
            <td className={styles.menuTableTd}>
              (カット、シャンプー・ブロー別)
            </td>
            <td className={styles.menuTableTd}>¥5,500</td>
            <td className={styles.menuTableTd}>120〜180分</td>
          </tr>
        </tbody>
        <tbody>
          <tr className={styles.menuTablLast}>
            <th className={styles.menuTableTh}>ハーフ</th>
            <td className={styles.menuTableTd}>
              (カット、シャンプー・ブロー別)
            </td>
            <td className={styles.menuTableTd}>¥11,000</td>
            <td className={styles.menuTableTd}>120〜180分</td>
          </tr>
        </tbody>
      </table>

      <h2 className={styles.menuTitle}>ストレートパーマ</h2>
      <p className={styles.menuDetail}>(カット別、シャンプー・ブロー込)</p>
      <p className={styles.menuDetail}>アイロン処理無し、ブラシでブロー</p>
      <table className={styles.menuArea}>
        <tbody>
          <tr className={styles.menuTableTr}>
            <th className={styles.menuTableTh}>ショート</th>
            <td className={styles.menuTableTd}>
              アイロン処理無し、ブラシでブロー
            </td>
            <td className={styles.menuTableTd}>¥12,100</td>
            <td className={styles.menuTableTd}>150〜180分</td>
          </tr>
        </tbody>
        <tbody>
          <tr className={styles.menuTableTr}>
            <th className={styles.menuTableTh}>ミディアム</th>
            <td className={styles.menuTableTd}>
              アイロン処理無し、ブラシでブロー
            </td>
            <td className={styles.menuTableTd}>¥13,200</td>
            <td className={styles.menuTableTd}>150〜180分</td>
          </tr>
        </tbody>
        <tbody>
          <tr className={styles.menuTableTr}>
            <th className={styles.menuTableTh}>ロング</th>
            <td className={styles.menuTableTd}>
              アイロン処理無し、ブラシでブロー
            </td>
            <td className={styles.menuTableTd}>¥14,300</td>
            <td className={styles.menuTableTd}>150〜180分</td>
          </tr>
        </tbody>
        <tbody>
          <tr className={styles.menuTablLast}>
            <th className={styles.menuTableTh}>リタッチ</th>
            <td className={styles.menuTableTd}>3ヶ月以内</td>
            <td className={styles.menuTableTd}>¥9,900</td>
            <td className={styles.menuTableTd}>150〜180分</td>
          </tr>
        </tbody>
      </table>

      <h2 className={styles.menuTitle}>ポイントストレート</h2>
      <p className={styles.menuDetail}>(カット別、シャンプー・ブロー別)</p>
      <table className={styles.menuArea}>
        <tbody>
          <tr className={styles.menuTableTr}>
            <th className={styles.menuTableTh}>フロント</th>
            <td className={styles.menuTableTd}>
              (カット別、シャンプー・ブロー別)
            </td>
            <td className={styles.menuTableTd}>¥3,300</td>
            <td className={styles.menuTableTd}>60〜120分</td>
          </tr>
        </tbody>
        <tbody>
          <tr className={styles.menuTablLast}>
            <th className={styles.menuTableTh}>ハーフ</th>
            <td className={styles.menuTableTd}>
              (カット別、シャンプー・ブロー別)
            </td>
            <td className={styles.menuTableTd}>¥6,600</td>
            <td className={styles.menuTableTd}>60〜120分</td>
          </tr>
        </tbody>
      </table>

      <h2 className={styles.menuTitle}>トリートメント</h2>
      <p className={styles.menuDetail}>(カット別、シャンプー・ブロー別)</p>
      <table className={styles.menuArea}>
        <tbody>
          <tr className={styles.menuTableTr}>
            <th className={styles.menuTableTh}>クイックケア</th>
          </tr>
        </tbody>
        <tbody>
          <tr className={styles.menuTableTr}>
            <th className={styles.menuTableTh}>S</th>
            <td className={styles.menuTableTd}>クイックケア</td>
            <td className={styles.menuTableTd}>¥1,430</td>
            <td className={styles.menuTableTd}>10〜30分</td>
          </tr>
        </tbody>
        <tbody>
          <tr className={styles.menuTableTr}>
            <th className={styles.menuTableTh}>M</th>
            <td className={styles.menuTableTd}>クイックケア</td>
            <td className={styles.menuTableTd}>¥1,980</td>
            <td className={styles.menuTableTd}>10〜30分</td>
          </tr>
        </tbody>
        <tbody>
          <tr className={styles.menuTableTr}>
            <th className={styles.menuTableTh}>L</th>
            <td className={styles.menuTableTd}>クイックケア</td>
            <td className={styles.menuTableTd}>¥2,530</td>
            <td className={styles.menuTableTd}>10〜30分</td>
          </tr>
        </tbody>
        <tbody>
          <tr className={styles.menuTableTr}>
            <th className={styles.menuTableTh}>カラーケア</th>
          </tr>
        </tbody>
        <tbody>
          <tr className={styles.menuTableTr}>
            <th className={styles.menuTableTh}>S</th>
            <td className={styles.menuTableTd}>カラーケア</td>
            <td className={styles.menuTableTd}>¥2,750</td>
            <td className={styles.menuTableTd}>10〜30分</td>
          </tr>
        </tbody>
        <tbody>
          <tr className={styles.menuTableTr}>
            <th className={styles.menuTableTh}>M</th>
            <td className={styles.menuTableTd}>カラーケア</td>
            <td className={styles.menuTableTd}>¥3,300</td>
            <td className={styles.menuTableTd}>10〜30分</td>
          </tr>
        </tbody>
        <tbody>
          <tr className={styles.menuTableTr}>
            <th className={styles.menuTableTh}>L</th>
            <td className={styles.menuTableTd}>カラーケア</td>
            <td className={styles.menuTableTd}>¥3,850</td>
            <td className={styles.menuTableTd}>10〜30分</td>
          </tr>
        </tbody>
        <tbody>
          <tr className={styles.menuTableTr}>
            <th className={styles.menuTableTh}>スペシャルケアトリートメント</th>
          </tr>
        </tbody>
        <tbody>
          <tr className={styles.menuTableTr}>
            <th className={styles.menuTableTh}>S</th>
            <td className={styles.menuTableTd}>スペシャルケアトリートメント</td>
            <td className={styles.menuTableTd}>¥6,050</td>
            <td className={styles.menuTableTd}>10〜30分</td>
          </tr>
        </tbody>
        <tbody>
          <tr className={styles.menuTableTr}>
            <th className={styles.menuTableTh}>M</th>
            <td className={styles.menuTableTd}>スペシャルケアトリートメント</td>
            <td className={styles.menuTableTd}>¥6,600</td>
            <td className={styles.menuTableTd}>10〜30分</td>
          </tr>
        </tbody>
        <tbody>
          <tr className={styles.menuTablLast}>
            <th className={styles.menuTableTh}>L</th>
            <td className={styles.menuTableTd}>スペシャルケアトリートメント</td>
            <td className={styles.menuTableTd}>¥7,150</td>
            <td className={styles.menuTableTd}>10〜30分</td>
          </tr>
        </tbody>
      </table>

      <h2 className={styles.menuTitle}>ヘッドスパ</h2>
      <p className={styles.menuDetail}>(カット別、シャンプー・ブロー別)</p>
      <table className={styles.menuArea}>
        <tbody>
          <tr className={styles.menuTableTr}>
            <th className={styles.menuTableTh}>リフレッシュスパ</th>
            <td className={styles.menuTableTd}>(20分)</td>
            <td className={styles.menuTableTd}>¥4,620</td>
            <td className={styles.menuTableTd}>50〜60分</td>
          </tr>
        </tbody>
        <tbody>
          <tr className={styles.menuTablLast}>
            <th className={styles.menuTableTh}>リラックススパ</th>
            <td className={styles.menuTableTd}>(30分)</td>
            <td className={styles.menuTableTd}>¥7,260</td>
            <td className={styles.menuTableTd}>50〜60分</td>
          </tr>
        </tbody>
      </table>

      <h2 className={styles.menuTitle}>シャンプーブロー</h2>
      <table className={styles.menuArea}>
        <tbody>
          <tr className={styles.menuTablLast}>
            <th className={styles.menuTableTh}>シャンプー&amp;ブロー</th>
            <td className={styles.menuTableTd}>¥2,750</td>
            <td className={styles.menuTableTd}>60分</td>
          </tr>
        </tbody>
      </table>

      <h2 className={styles.menuTitle}>ヘアセット</h2>
      <table className={styles.menuArea}>
        <tbody>
          <tr className={styles.menuTableTr}>
            <th className={styles.menuTableTh}>アップスタイル</th>
            <td className={styles.menuTableTd}>&nbsp;</td>
            <td className={styles.menuTableTd}>¥5,500</td>
            <td className={styles.menuTableTd}>60分</td>
          </tr>
        </tbody>
        <tbody>
          <tr className={styles.menuTableTr}>
            <th className={styles.menuTableTh}>ハーフスタイル</th>
            <td className={styles.menuTableTd}>&nbsp;</td>
            <td className={styles.menuTableTd}>¥4,400</td>
            <td className={styles.menuTableTd}>60分</td>
          </tr>
        </tbody>
        <tbody>
          <tr className={styles.menuTablLast}>
            <th className={styles.menuTableTh}>アイロン仕上げ</th>
            <td className={styles.menuTableTd}>&nbsp;</td>
            <td className={styles.menuTableTd}>¥3,300</td>
            <td className={styles.menuTableTd}>60分</td>
          </tr>
        </tbody>
      </table>

      <h2 className={styles.menuTitle}>セットメニュー</h2>
      <table className={styles.menuArea}>
        <tbody>
          <tr className={styles.menuTableTr}>
            <th className={styles.menuTableTh}>カットトリートメント</th>
            <td className={styles.menuTableTd}>お得なセットメニュー</td>
            <td className={styles.menuTableTd}>¥4,840</td>
            <td className={styles.menuTableTd}>120分</td>
          </tr>
        </tbody>
        <tbody>
          <tr className={styles.menuTableTr}>
            <th className={styles.menuTableTh}>カラーカット</th>
            <td className={styles.menuTableTd}>お得なセットメニュー</td>
            <td className={styles.menuTableTd}>¥9,900</td>
            <td className={styles.menuTableTd}>180分</td>
          </tr>
        </tbody>
        <tbody>
          <tr className={styles.menuTableTr}>
            <th className={styles.menuTableTh}>カラーブロー</th>
            <td className={styles.menuTableTd}>お得なセットメニュー</td>
            <td className={styles.menuTableTd}>¥8,800</td>
            <td className={styles.menuTableTd}>150分</td>
          </tr>
        </tbody>
        <tbody>
          <tr className={styles.menuTableTr}>
            <th className={styles.menuTableTh}>パーマカット</th>
            <td className={styles.menuTableTd}>お得なセットメニュー</td>
            <td className={styles.menuTableTd}>¥9,900</td>
            <td className={styles.menuTableTd}>180分</td>
          </tr>
        </tbody>
        <tbody>
          <tr className={styles.menuTablLast}>
            <th className={styles.menuTableTh}>矯正カット</th>
            <td className={styles.menuTableTd}>お得なセットメニュー</td>
            <td className={styles.menuTableTd}>¥13,200</td>
            <td className={styles.menuTableTd}>240分</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
