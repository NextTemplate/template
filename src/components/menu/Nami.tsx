import React from "react";
import Link from "next/link";
import styles from "../../styles/StylistMenu/StylistMenu.module.scss";

export default function Nami() {
  return (
    <div className={styles.menu}>
      <h2 className={styles.menuTitle}>カット</h2>
      <p className={styles.menuDetail}>(ブロー込)</p>
      <p className={styles.menuDetail}>
        カウンセリングもしっかり行い、お客様1人1人のライフスタイルに合った髪型をご提案いたします。
      </p>
      <table className={styles.menuArea}>
        <tbody>
          <tr className={styles.menuTableTr}>
            <th className={styles.menuTableTh}>スタイリングカット</th>
            <td className={styles.menuTableTd}>&nbsp;</td>
            <td className={styles.menuTableTd}>¥4,180</td>
            <td className={styles.menuTableTd}>60分</td>
          </tr>
        </tbody>
        <tbody>
          <tr>
            <th className={styles.menuTableTh}>中高生カット</th>
            <td className={styles.menuTableTd}>&nbsp;</td>
            <td className={styles.menuTableTd}>¥3,630</td>
            <td className={styles.menuTableTd}>50分</td>
          </tr>
        </tbody>
        <tbody>
          <tr className={styles.menuTablLast}>
            <th className={styles.menuTableTh}>幼少カット</th>
            <td className={styles.menuTableTd}>&nbsp;</td>
            <td className={styles.menuTableTd}>¥2,750</td>
            <td className={styles.menuTableTd}>50分</td>
          </tr>
        </tbody>
        <tbody>
          <tr className={styles.menuTablLast}>
            <th className={styles.menuTableTh}>前髪カット</th>
            <td className={styles.menuTableTd}>&nbsp;</td>
            <td className={styles.menuTableTd}>¥770</td>
            <td className={styles.menuTableTd}>20分</td>
          </tr>
        </tbody>
        <tbody>
          <tr className={styles.menuTablLast}>
            <th className={styles.menuTableTh}>眉カット</th>
            <td className={styles.menuTableTd}>&nbsp;</td>
            <td className={styles.menuTableTd}>¥660</td>
            <td className={styles.menuTableTd}>10分</td>
          </tr>
        </tbody>
        <tbody>
          <tr className={styles.menuTablLast}>
            <th className={styles.menuTableTh}>
              分け目を目立ちにくくするフロントカット
            </th>
            <td className={styles.menuTableTd}>&nbsp;</td>
            <td className={styles.menuTableTd}>¥1,100</td>
            <td className={styles.menuTableTd}>20分</td>
          </tr>
        </tbody>
      </table>
      <h2 className={styles.menuTitle}>カラー</h2>
      <p className={styles.menuDetail}>(シャンプー・ブロー別)</p>
      <p className={styles.menuDetail}>※ノンジアミンカラー (+¥700)</p>
      <table className={styles.menuArea}>
        <tbody>
          <tr className={styles.menuTableTr}>
            <th className={styles.menuTableTh}>リタッチ</th>
            <td className={styles.menuTableTd}>(40gまで)</td>
            <td className={styles.menuTableTd}>¥5,500</td>
            <td className={styles.menuTableTd}>90分</td>
          </tr>
        </tbody>
        <tbody>
          <tr className={styles.menuTableTr}>
            <th className={styles.menuTableTh}>リタッチ</th>
            <td className={styles.menuTableTd}>(50gまで)</td>
            <td className={styles.menuTableTd}>¥5,940</td>
            <td className={styles.menuTableTd}>90分</td>
          </tr>
        </tbody>
        <tbody>
          <tr className={styles.menuTableTr}>
            <th className={styles.menuTableTh}>リタッチ</th>
            <td className={styles.menuTableTd}>(60gまで)</td>
            <td className={styles.menuTableTd}>¥6,380</td>
            <td className={styles.menuTableTd}>90分</td>
          </tr>
        </tbody>
        <tbody>
          <tr className={styles.menuTableTr}>
            <th className={styles.menuTableTh}>リタッチ</th>
            <td className={styles.menuTableTd}>(20日以内)</td>
            <td className={styles.menuTableTd}>¥4,400〜</td>
            <td className={styles.menuTableTd}>90分</td>
          </tr>
        </tbody>
        <tbody>
          <tr className={styles.menuTableTr}>
            <th className={styles.menuTableTh}>リタッチ</th>
            <td className={styles.menuTableTd}>(30日以内)</td>
            <td className={styles.menuTableTd}>¥4,950〜</td>
            <td className={styles.menuTableTd}>90分</td>
          </tr>
        </tbody>
        <tbody>
          <tr className={styles.menuTableTr}>
            <th className={styles.menuTableTh}>全体カラーS</th>
            <td className={styles.menuTableTd}>&nbsp;</td>
            <td className={styles.menuTableTd}>¥6,600〜</td>
            <td className={styles.menuTableTd}>100分</td>
          </tr>
        </tbody>
        <tbody>
          <tr className={styles.menuTableTr}>
            <th className={styles.menuTableTh}>全体カラーM</th>
            <td className={styles.menuTableTd}>&nbsp;</td>
            <td className={styles.menuTableTd}>¥7,480</td>
            <td className={styles.menuTableTd}>100分</td>
          </tr>
        </tbody>
        <tbody>
          <tr className={styles.menuTableTr}>
            <th className={styles.menuTableTh}>全体カラーL</th>
            <td className={styles.menuTableTd}>&nbsp;</td>
            <td className={styles.menuTableTd}>¥8,360</td>
            <td className={styles.menuTableTd}>100分</td>
          </tr>
        </tbody>
        <tbody>
          <tr className={styles.menuTableTr}>
            <th className={styles.menuTableTh}>全体カラーLL</th>
            <td className={styles.menuTableTd}>&nbsp;</td>
            <td className={styles.menuTableTd}>¥9,240〜</td>
            <td className={styles.menuTableTd}>120分</td>
          </tr>
        </tbody>
        <tbody>
          <tr className={styles.menuTableTr}>
            <th className={styles.menuTableTh}>全頭ブリーチS</th>
            <td className={styles.menuTableTd}>&nbsp;</td>
            <td className={styles.menuTableTd}>¥7,000〜</td>
            <td className={styles.menuTableTd}>90分</td>
          </tr>
        </tbody>
        <tbody>
          <tr className={styles.menuTableTr}>
            <th className={styles.menuTableTh}>全頭ブリーチM</th>
            <td className={styles.menuTableTd}>&nbsp;</td>
            <td className={styles.menuTableTd}>¥8,500</td>
            <td className={styles.menuTableTd}>90分</td>
          </tr>
        </tbody>
        <tbody>
          <tr className={styles.menuTableTr}>
            <th className={styles.menuTableTh}>全頭ブリーチL</th>
            <td className={styles.menuTableTd}>&nbsp;</td>
            <td className={styles.menuTableTd}>¥10,000</td>
            <td className={styles.menuTableTd}>90分</td>
          </tr>
        </tbody>
        <tbody>
          <tr className={styles.menuTableTr}>
            <th className={styles.menuTableTh}>インナーカラー</th>
            <td className={styles.menuTableTd}>
              デザインにより料金、時間が変動
            </td>
            <td className={styles.menuTableTd}>¥3,500〜</td>
            <td className={styles.menuTableTd}>60分</td>
          </tr>
        </tbody>
        <tbody>
          <tr className={styles.menuTableTr}>
            <th className={styles.menuTableTh}>ハイライト</th>
            <td className={styles.menuTableTd}>
              デザインにより料金、時間が変動
            </td>
            <td className={styles.menuTableTd}>¥5,000〜</td>
            <td className={styles.menuTableTd}>90分</td>
          </tr>
        </tbody>
        <tbody>
          <tr className={styles.menuTablLast}>
            <th className={styles.menuTableTh}>白髪ぼかし</th>
            <td className={styles.menuTableTd}>
              インナー、ハイライト、グラデーションetc…
            </td>
            <td className={styles.menuTableTd}>¥2,000</td>
            <td className={styles.menuTableTd}>30分</td>
          </tr>
        </tbody>
      </table>
      <h2 className={styles.menuTitle}>パーマ</h2>
      <p className={styles.menuDetail}>
        前処理剤にこだわり、髪への負担をなるべく少なく施術します。
      </p>
      <table className={styles.menuArea}>
        <tbody>
          <tr className={styles.menuTableTr}>
            <th className={styles.menuTableTh}>パーマS</th>
            <td className={styles.menuTableTd}>(シャンプーブロー別)</td>
            <td className={styles.menuTableTd}>¥6,600〜¥7,700</td>
            <td className={styles.menuTableTd}>60分</td>
          </tr>
        </tbody>
        <tbody>
          <tr className={styles.menuTableTr}>
            <th className={styles.menuTableTh}>パーマM</th>
            <td className={styles.menuTableTd}>(シャンプーブロー別)</td>
            <td className={styles.menuTableTd}>¥7,700〜¥8,800</td>
            <td className={styles.menuTableTd}>60分</td>
          </tr>
        </tbody>
        <tbody>
          <tr className={styles.menuTableTr}>
            <th className={styles.menuTableTh}>パーマL</th>
            <td className={styles.menuTableTd}>(シャンプーブロー別)</td>
            <td className={styles.menuTableTd}>¥8,800〜¥9,900</td>
            <td className={styles.menuTableTd}>60分</td>
          </tr>
        </tbody>
        <tbody>
          <tr className={styles.menuTableTr}>
            <th className={styles.menuTableTh}>部分パーマ</th>
            <td className={styles.menuTableTd}>(シャンプーブロー別)</td>
            <td className={styles.menuTableTd}>¥5,000〜</td>
            <td className={styles.menuTableTd}>60分</td>
          </tr>
        </tbody>
        <tbody>
          <tr className={styles.menuTableTr}>
            <th className={styles.menuTableTh}>ツイストパーマ</th>
            <td className={styles.menuTableTd}>(シャンプーブロー別)</td>
            <td className={styles.menuTableTd}>¥7,700〜</td>
            <td className={styles.menuTableTd}>90分</td>
          </tr>
        </tbody>
        <tbody>
          <tr className={styles.menuTableTr}>
            <th className={styles.menuTableTh}>シャンプーS</th>
            <td className={styles.menuTableTd}>&nbsp;</td>
            <td className={styles.menuTableTd}>¥800</td>
            <td className={styles.menuTableTd}>10分</td>
          </tr>
        </tbody>
        <tbody>
          <tr className={styles.menuTableTr}>
            <th className={styles.menuTableTh}>シャンプーM</th>
            <td className={styles.menuTableTd}>&nbsp;</td>
            <td className={styles.menuTableTd}>¥900</td>
            <td className={styles.menuTableTd}>10分</td>
          </tr>
        </tbody>
        <tbody>
          <tr className={styles.menuTableTr}>
            <th className={styles.menuTableTh}>シャンプーL</th>
            <td className={styles.menuTableTd}>&nbsp;</td>
            <td className={styles.menuTableTd}>¥1,000</td>
            <td className={styles.menuTableTd}>10分</td>
          </tr>
        </tbody>
        <tbody>
          <tr className={styles.menuTableTr}>
            <th className={styles.menuTableTh}>シャンプーLL</th>
            <td className={styles.menuTableTd}>&nbsp;</td>
            <td className={styles.menuTableTd}>¥1,100</td>
            <td className={styles.menuTableTd}>10分</td>
          </tr>
        </tbody>
        <tbody>
          <tr className={styles.menuTableTr}>
            <th className={styles.menuTableTh}>スタイリングS</th>
            <td className={styles.menuTableTd}>&nbsp;</td>
            <td className={styles.menuTableTd}>¥1,200</td>
            <td className={styles.menuTableTd}>25分</td>
          </tr>
        </tbody>
        <tbody>
          <tr className={styles.menuTableTr}>
            <th className={styles.menuTableTh}>スタイリングM</th>
            <td className={styles.menuTableTd}>&nbsp;</td>
            <td className={styles.menuTableTd}>¥1,300</td>
            <td className={styles.menuTableTd}>25分</td>
          </tr>
        </tbody>
        <tbody>
          <tr className={styles.menuTableTr}>
            <th className={styles.menuTableTh}>スタイリングL</th>
            <td className={styles.menuTableTd}>&nbsp;</td>
            <td className={styles.menuTableTd}>¥1,400</td>
            <td className={styles.menuTableTd}>25分</td>
          </tr>
        </tbody>
        <tbody>
          <tr className={styles.menuTablLast}>
            <th className={styles.menuTableTh}>スタイリングLL</th>
            <td className={styles.menuTableTd}>&nbsp;</td>
            <td className={styles.menuTableTd}>¥1,500</td>
            <td className={styles.menuTableTd}>25分</td>
          </tr>
        </tbody>
      </table>
      <h2 className={styles.menuTitle}>ストレートパーマ</h2>
      <table className={styles.menuArea}>
        <tbody>
          <tr className={styles.menuTableTr}>
            <th className={styles.menuTableTh}>ストレートパーマS</th>
            <td className={styles.menuTableTd}>&nbsp;</td>
            <td className={styles.menuTableTd}>¥7,000</td>
            <td className={styles.menuTableTd}>120分</td>
          </tr>
        </tbody>
        <tbody>
          <tr className={styles.menuTableTr}>
            <th className={styles.menuTableTh}>ストレートパーマM</th>
            <td className={styles.menuTableTd}>&nbsp;</td>
            <td className={styles.menuTableTd}>¥8,000</td>
            <td className={styles.menuTableTd}>120分</td>
          </tr>
        </tbody>
        <tbody>
          <tr className={styles.menuTableTr}>
            <th className={styles.menuTableTh}>ストレートパーマL</th>
            <td className={styles.menuTableTd}>&nbsp;</td>
            <td className={styles.menuTableTd}>¥9,000</td>
            <td className={styles.menuTableTd}>120分</td>
          </tr>
        </tbody>
        <tbody>
          <tr className={styles.menuTablLast}>
            <th className={styles.menuTableTh}>ストレートパーマLL</th>
            <td className={styles.menuTableTd}>&nbsp;</td>
            <td className={styles.menuTableTd}>¥10,000〜</td>
            <td className={styles.menuTableTd}>120分</td>
          </tr>
        </tbody>
      </table>
      <h2 className={styles.menuTitle}>縮毛矯正</h2>
      <p className={styles.menuDetail}>
        「しっかり癖をのばしてほしい」、「やわらかい雰囲気であててほしい」など、ご要望に合わせて調整します。
      </p>
      <table className={styles.menuArea}>
        <tbody>
          <tr className={styles.menuTableTr}>
            <th className={styles.menuTableTh}>縮毛矯正S</th>
            <td className={styles.menuTableTd}>&nbsp;</td>
            <td className={styles.menuTableTd}>¥15,000</td>
            <td className={styles.menuTableTd}>180分</td>
          </tr>
        </tbody>
        <tbody>
          <tr className={styles.menuTableTr}>
            <th className={styles.menuTableTh}>縮毛矯正M</th>
            <td className={styles.menuTableTd}>&nbsp;</td>
            <td className={styles.menuTableTd}>¥16,000</td>
            <td className={styles.menuTableTd}>210分</td>
          </tr>
        </tbody>
        <tbody>
          <tr className={styles.menuTableTr}>
            <th className={styles.menuTableTh}>縮毛矯正L</th>
            <td className={styles.menuTableTd}>&nbsp;</td>
            <td className={styles.menuTableTd}>¥17,000</td>
            <td className={styles.menuTableTd}>210分</td>
          </tr>
        </tbody>
        <tbody>
          <tr className={styles.menuTableTr}>
            <th className={styles.menuTableTh}>縮毛矯正LL</th>
            <td className={styles.menuTableTd}>&nbsp;</td>
            <td className={styles.menuTableTd}>¥18,000</td>
            <td className={styles.menuTableTd}>240分</td>
          </tr>
        </tbody>
        <tbody>
          <tr className={styles.menuTableTr}>
            <th className={styles.menuTableTh}>前髪矯正</th>
            <td className={styles.menuTableTd}>&nbsp;</td>
            <td className={styles.menuTableTd}>¥4,600〜</td>
            <td className={styles.menuTableTd}>90分</td>
          </tr>
        </tbody>
        <tbody>
          <tr className={styles.menuTablLast}>
            <th className={styles.menuTableTh}>メンズ縮毛矯正S</th>
            <td className={styles.menuTableTd}>(刈り上げあり)</td>
            <td className={styles.menuTableTd}>¥13,500</td>
            <td className={styles.menuTableTd}>180分</td>
          </tr>
        </tbody>
      </table>
      <h2 className={styles.menuTitle}>ポイントメニュー</h2>
      <table className={styles.menuArea}>
        <tbody>
          <tr className={styles.menuTableTr}>
            <th className={styles.menuTableTh}>前髪矯正</th>
            <td className={styles.menuTableTd}>&nbsp;</td>
            <td className={styles.menuTableTd}>¥4,600〜</td>
            <td className={styles.menuTableTd}>90分</td>
          </tr>
        </tbody>
        <tbody>
          <tr className={styles.menuTablLast}>
            <th className={styles.menuTableTh}>部分パーマ</th>
            <td className={styles.menuTableTd}>&nbsp;</td>
            <td className={styles.menuTableTd}>¥5,000〜</td>
            <td className={styles.menuTableTd}>60分〜</td>
          </tr>
        </tbody>
      </table>
      <h2 className={styles.menuTitle}>シャンプーブロー</h2>
      <table className={styles.menuArea}>
        <tbody>
          <tr className={styles.menuTableTr}>
            <th className={styles.menuTableTh}>シャンプーブローS</th>
            <td className={styles.menuTableTd}>&nbsp;</td>
            <td className={styles.menuTableTd}>¥2,000</td>
            <td className={styles.menuTableTd}>30分</td>
          </tr>
        </tbody>
        <tbody>
          <tr className={styles.menuTableTr}>
            <th className={styles.menuTableTh}>シャンプーブローM</th>
            <td className={styles.menuTableTd}>&nbsp;</td>
            <td className={styles.menuTableTd}>¥2,200</td>
            <td className={styles.menuTableTd}>40分</td>
          </tr>
        </tbody>
        <tbody>
          <tr className={styles.menuTableTr}>
            <th className={styles.menuTableTh}>シャンプーブローL</th>
            <td className={styles.menuTableTd}>&nbsp;</td>
            <td className={styles.menuTableTd}>¥2,400</td>
            <td className={styles.menuTableTd}>50分</td>
          </tr>
        </tbody>
        <tbody>
          <tr className={styles.menuTablLast}>
            <th className={styles.menuTableTh}>シャンプーブローLL</th>
            <td className={styles.menuTableTd}>&nbsp;</td>
            <td className={styles.menuTableTd}>¥2,600</td>
            <td className={styles.menuTableTd}>60分</td>
          </tr>
        </tbody>
      </table>
      <h2 className={styles.menuTitle}>トリートメント</h2>
      <table className={styles.menuArea}>
        <tbody>
          <tr className={styles.menuTableTr}>
            <th className={styles.menuTableTh}>トリキュアS</th>
            <td className={styles.menuTableTd}>(ホームケアなし)</td>
            <td className={styles.menuTableTd}>¥2,000</td>
            <td className={styles.menuTableTd}>10分</td>
          </tr>
        </tbody>
        <tbody>
          <tr className={styles.menuTableTr}>
            <th className={styles.menuTableTh}>トリキュアM</th>
            <td className={styles.menuTableTd}>(ホームケアなし)</td>
            <td className={styles.menuTableTd}>¥2,500</td>
            <td className={styles.menuTableTd}>10分</td>
          </tr>
        </tbody>
        <tbody>
          <tr className={styles.menuTableTr}>
            <th className={styles.menuTableTh}>トリキュアL</th>
            <td className={styles.menuTableTd}>(ホームケアなし)</td>
            <td className={styles.menuTableTd}>¥3,000</td>
            <td className={styles.menuTableTd}>10分</td>
          </tr>
        </tbody>
        <tbody>
          <tr className={styles.menuTablLast}>
            <th className={styles.menuTableTh}>トリキュアLL</th>
            <td className={styles.menuTableTd}>(ホームケアなし)</td>
            <td className={styles.menuTableTd}>¥3,500</td>
            <td className={styles.menuTableTd}>10分</td>
          </tr>
        </tbody>
        <tbody>
          <tr className={styles.menuTableTr}>
            <th className={styles.menuTableTh}>リンケージS</th>
            <td className={styles.menuTableTd}>(ホームケア付き)</td>
            <td className={styles.menuTableTd}>¥3,000</td>
            <td className={styles.menuTableTd}>10分</td>
          </tr>
        </tbody>
        <tbody>
          <tr className={styles.menuTableTr}>
            <th className={styles.menuTableTh}>リンケージM</th>
            <td className={styles.menuTableTd}>(ホームケア付き)</td>
            <td className={styles.menuTableTd}>¥3,500</td>
            <td className={styles.menuTableTd}>10分</td>
          </tr>
        </tbody>
        <tbody>
          <tr className={styles.menuTableTr}>
            <th className={styles.menuTableTh}>リンケージL</th>
            <td className={styles.menuTableTd}>(ホームケア付き)</td>
            <td className={styles.menuTableTd}>¥4,000</td>
            <td className={styles.menuTableTd}>10分</td>
          </tr>
        </tbody>
        <tbody>
          <tr className={styles.menuTablLast}>
            <th className={styles.menuTableTh}>リンケージLL</th>
            <td className={styles.menuTableTd}>(ホームケア付き)</td>
            <td className={styles.menuTableTd}>¥4,500</td>
            <td className={styles.menuTableTd}>10分</td>
          </tr>
        </tbody>
        <tbody>
          <tr className={styles.menuTablLast}>
            <th className={styles.menuTableTh}>髪質改善トリートメント</th>
            <td className={styles.menuTableTd}>&nbsp;</td>
            <td className={styles.menuTableTd}>¥8,800</td>
            <td className={styles.menuTableTd}>120分</td>
          </tr>
        </tbody>
      </table>
      <h2 className={styles.menuTitle}>ヘッドスパ</h2>
      <table className={styles.menuArea}>
        <tbody>
          <tr className={styles.menuTableTr}>
            <th className={styles.menuTableTh}>髪質改善スパS</th>
            <td className={styles.menuTableTd}>&nbsp;</td>
            <td className={styles.menuTableTd}>¥2,200</td>
            <td className={styles.menuTableTd}>15分</td>
          </tr>
        </tbody>
        <tbody>
          <tr className={styles.menuTableTr}>
            <th className={styles.menuTableTh}>髪質改善スパM</th>
            <td className={styles.menuTableTd}>&nbsp;</td>
            <td className={styles.menuTableTd}>¥2,700</td>
            <td className={styles.menuTableTd}>15分</td>
          </tr>
        </tbody>
        <tbody>
          <tr className={styles.menuTableTr}>
            <th className={styles.menuTableTh}>髪質改善スパL</th>
            <td className={styles.menuTableTd}>&nbsp;</td>
            <td className={styles.menuTableTd}>¥3,200</td>
            <td className={styles.menuTableTd}>15分</td>
          </tr>
        </tbody>
        <tbody>
          <tr className={styles.menuTablLast}>
            <th className={styles.menuTableTh}>髪質改善スパLL</th>
            <td className={styles.menuTableTd}>&nbsp;</td>
            <td className={styles.menuTableTd}>¥3,700</td>
            <td className={styles.menuTableTd}>15分</td>
          </tr>
        </tbody>
        <tbody>
          <tr className={styles.menuTableTr}>
            <th className={styles.menuTableTh}>頭皮改善スパS</th>
            <td className={styles.menuTableTd}>&nbsp;</td>
            <td className={styles.menuTableTd}>¥2,400</td>
            <td className={styles.menuTableTd}>15分</td>
          </tr>
        </tbody>
        <tbody>
          <tr className={styles.menuTableTr}>
            <th className={styles.menuTableTh}>頭皮改善スパM</th>
            <td className={styles.menuTableTd}>&nbsp;</td>
            <td className={styles.menuTableTd}>¥2,900</td>
            <td className={styles.menuTableTd}>15分</td>
          </tr>
        </tbody>
        <tbody>
          <tr className={styles.menuTableTr}>
            <th className={styles.menuTableTh}>頭皮改善スパL</th>
            <td className={styles.menuTableTd}>&nbsp;</td>
            <td className={styles.menuTableTd}>¥3,400</td>
            <td className={styles.menuTableTd}>15分</td>
          </tr>
        </tbody>
        <tbody>
          <tr className={styles.menuTablLast}>
            <th className={styles.menuTableTh}>頭皮改善スパLL</th>
            <td className={styles.menuTableTd}>&nbsp;</td>
            <td className={styles.menuTableTd}>¥3,900</td>
            <td className={styles.menuTableTd}>15分</td>
          </tr>
        </tbody>
      </table>
      <h2 className={styles.menuTitle}>セットアップ</h2>
      <table className={styles.menuArea}>
        <tbody>
          <tr className={styles.menuTableTr}>
            <th className={styles.menuTableTh}>おでかけヘアアレンジ</th>
            <td className={styles.menuTableTd}>&nbsp;</td>
            <td className={styles.menuTableTd}>¥3,850</td>
            <td className={styles.menuTableTd}>30分</td>
          </tr>
        </tbody>
        <tbody>
          <tr className={styles.menuTableTr}>
            <th className={styles.menuTableTh}>ハーフアップ</th>
            <td className={styles.menuTableTd}>&nbsp;</td>
            <td className={styles.menuTableTd}>¥3,300</td>
            <td className={styles.menuTableTd}>30分</td>
          </tr>
        </tbody>
        <tbody>
          <tr className={styles.menuTableTr}>
            <th className={styles.menuTableTh}>セットアップ</th>
            <td className={styles.menuTableTd}>&nbsp;</td>
            <td className={styles.menuTableTd}>¥4,950</td>
            <td className={styles.menuTableTd}>50分</td>
          </tr>
        </tbody>
        <tbody>
          <tr className={styles.menuTablLast}>
            <th className={styles.menuTableTh}>コーンロー(半頭)</th>
            <td className={styles.menuTableTd}>&nbsp;</td>
            <td className={styles.menuTableTd}>¥5,800〜</td>
            <td className={styles.menuTableTd}>60分〜</td>
          </tr>
        </tbody>
        <tbody>
          <tr className={styles.menuTablLast}>
            <th className={styles.menuTableTh}>コーンロー(全頭)</th>
            <td className={styles.menuTableTd}>&nbsp;</td>
            <td className={styles.menuTableTd}>¥7,500〜</td>
            <td className={styles.menuTableTd}>90分〜</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
