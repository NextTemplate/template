import React from "react";
import Link from "next/link";
import styles from "../../styles/StylistMenu/StylistMenu.module.scss";

export default function Ikemoto() {
  return (
    <>
      <div className={styles.menu}>
        <h2 className={styles.menuTitle}>カット</h2>
        <p className={styles.menuDetail}>※ブロー込</p>
        <table className={styles.menuArea}>
          <tbody>
            <tr className={styles.menuTableTr}>
              <th className={styles.menuTableTh}>カット</th>
              <td className={styles.menuTableTd}>&nbsp;</td>
              <td className={styles.menuTableTd}>¥4,950</td>
              <td className={styles.menuTableTd}>60分</td>
            </tr>
          </tbody>
          <tbody>
            <tr>
              <th className={styles.menuTableTh}>中高生カット</th>
              <td className={styles.menuTableTd}>&nbsp;</td>
              <td className={styles.menuTableTd}>¥4,000</td>
              <td className={styles.menuTableTd}>60分</td>
            </tr>
          </tbody>
          <tbody>
            <tr className={styles.menuTablLast}>
              <th className={styles.menuTableTh}>キッズカット</th>
              <td className={styles.menuTableTd}>(小学生以下)</td>
              <td className={styles.menuTableTd}>¥3,000</td>
              <td className={styles.menuTableTd}>60分</td>
            </tr>
          </tbody>
          <tbody>
            <tr className={styles.menuTablLast}>
              <th className={styles.menuTableTh}>前髪カット</th>
              <td className={styles.menuTableTd}>&nbsp;</td>
              <td className={styles.menuTableTd}>¥1,100</td>
              <td className={styles.menuTableTd}>10分</td>
            </tr>
          </tbody>
          <tbody>
            <tr className={styles.menuTablLast}>
              <th className={styles.menuTableTh}>眉カット</th>
              <td className={styles.menuTableTd}>&nbsp;</td>
              <td className={styles.menuTableTd}>¥770</td>
              <td className={styles.menuTableTd}>10分</td>
            </tr>
          </tbody>
          <tbody>
            <tr className={styles.menuTablLast}>
              <th className={styles.menuTableTh}>眉カット + 眉メイク</th>
              <td className={styles.menuTableTd}>
                ※眉カット＋眉メイク」のみのご予約不可
              </td>
              <td className={styles.menuTableTd}>¥1,500</td>
              <td className={styles.menuTableTd}>20分</td>
            </tr>
          </tbody>
        </table>
        <h2 className={styles.menuTitle}>カットカラー</h2>
        <p className={styles.menuDetail}>
          (カットなしの場合Sh.Br代 + ¥2,000必要)
        </p>
        <table className={styles.menuArea}>
          <tbody>
            <tr className={styles.menuTablLast}>
              <th className={styles.menuTableTh}>リタッチカラー</th>
              <td className={styles.menuTableTd}>※前回の来店から30日以内</td>
              <td className={styles.menuTableTd}>¥4,600</td>
              <td className={styles.menuTableTd}>90分</td>
            </tr>
          </tbody>
          <tbody>
            <tr className={styles.menuTablLast}>
              <th className={styles.menuTableTh}>リタッチカラー</th>
              <td className={styles.menuTableTd}>※前回の来店から60日以内</td>
              <td className={styles.menuTableTd}>¥5,400</td>
              <td className={styles.menuTableTd}>90分</td>
            </tr>
          </tbody>
          <tbody>
            <tr className={styles.menuTablLast}>
              <th className={styles.menuTableTh}>オリジナルカラー(ショート)</th>
              <td className={styles.menuTableTd}>※ブロー別</td>
              <td className={styles.menuTableTd}>¥6,600</td>
              <td className={styles.menuTableTd}>90分</td>
            </tr>
          </tbody>
          <tbody>
            <tr className={styles.menuTablLast}>
              <th className={styles.menuTableTh}>
                オリジナルカラー(ミディアムロング)
              </th>
              <td className={styles.menuTableTd}>※ブロー別</td>
              <td className={styles.menuTableTd}>¥7,700</td>
              <td className={styles.menuTableTd}>90分</td>
            </tr>
          </tbody>
          <tbody>
            <tr className={styles.menuTablLast}>
              <th className={styles.menuTableTh}>オリジナルカラー(ロング)</th>
              <td className={styles.menuTableTd}>※ブロー別</td>
              <td className={styles.menuTableTd}>¥8,800</td>
              <td className={styles.menuTableTd}>90分</td>
            </tr>
          </tbody>
          <tbody>
            <tr className={styles.menuTablLast}>
              <th className={styles.menuTableTh}>ダブルカラー(ショート)</th>
              <td className={styles.menuTableTd}>&nbsp;</td>
              <td className={styles.menuTableTd}>¥12,200</td>
              <td className={styles.menuTableTd}>150分</td>
            </tr>
          </tbody>
          <tbody>
            <tr className={styles.menuTablLast}>
              <th className={styles.menuTableTh}>ダブルカラー(ミディアム)</th>
              <td className={styles.menuTableTd}>&nbsp;</td>
              <td className={styles.menuTableTd}>¥14,400</td>
              <td className={styles.menuTableTd}>150分</td>
            </tr>
          </tbody>
          <tbody>
            <tr className={styles.menuTablLast}>
              <th className={styles.menuTableTh}>ダブルカラー(ロング)</th>
              <td className={styles.menuTableTd}>&nbsp;</td>
              <td className={styles.menuTableTd}>¥16,600</td>
              <td className={styles.menuTableTd}>150分</td>
            </tr>
          </tbody>
          <tbody>
            <tr className={styles.menuTablLast}>
              <th className={styles.menuTableTh}>ハイライトカラー</th>
              <td className={styles.menuTableTd}>&nbsp;</td>
              <td className={styles.menuTableTd}>¥8,800〜</td>
              <td className={styles.menuTableTd}>90分〜</td>
            </tr>
          </tbody>
          <tbody>
            <tr className={styles.menuTablLast}>
              <th className={styles.menuTableTh}>ハイライトカラー(ハーフ)</th>
              <td className={styles.menuTableTd}>&nbsp;</td>
              <td className={styles.menuTableTd}>¥4,400</td>
              <td className={styles.menuTableTd}>90分</td>
            </tr>
          </tbody>
          <tbody>
            <tr className={styles.menuTablLast}>
              <th className={styles.menuTableTh}>ハイライトカラー(1枚)</th>
              <td className={styles.menuTableTd}>&nbsp;</td>
              <td className={styles.menuTableTd}>¥300</td>
              <td className={styles.menuTableTd}>90分〜</td>
            </tr>
          </tbody>
          <tbody>
            <tr className={styles.menuTablLast}>
              <th className={styles.menuTableTh}>ノンジアミンカラー</th>
              <td className={styles.menuTableTd}>※ショート</td>
              <td className={styles.menuTableTd}>¥7,200</td>
              <td className={styles.menuTableTd}>90分〜</td>
            </tr>
          </tbody>
          <tbody>
            <tr className={styles.menuTablLast}>
              <th className={styles.menuTableTh}>ノンジアミンカラー</th>
              <td className={styles.menuTableTd}>※ミディアム</td>
              <td className={styles.menuTableTd}>¥8,300</td>
              <td className={styles.menuTableTd}>90分〜</td>
            </tr>
          </tbody>
          <tbody>
            <tr className={styles.menuTablLast}>
              <th className={styles.menuTableTh}>ノンジアミンカラー</th>
              <td className={styles.menuTableTd}>※ロング</td>
              <td className={styles.menuTableTd}>¥9,400</td>
              <td className={styles.menuTableTd}>90分〜</td>
            </tr>
          </tbody>
        </table>
        <h2 className={styles.menuTitle}>パーマ</h2>
        <p className={styles.menuDetail}>
          (カットなしの場合Sh.Br代 + ¥2,000必要)
        </p>
        <table className={styles.menuArea}>
          <tbody>
            <tr className={styles.menuTableTr}>
              <th className={styles.menuTableTh}>デザインパーマ</th>
              <td className={styles.menuTableTd}>ショート</td>
              <td className={styles.menuTableTd}>¥6,600</td>
              <td className={styles.menuTableTd}>120分</td>
            </tr>
          </tbody>
          <tbody>
            <tr className={styles.menuTableTr}>
              <th className={styles.menuTableTh}>デザインパーマ</th>
              <td className={styles.menuTableTd}>ミディアム</td>
              <td className={styles.menuTableTd}>¥7,700</td>
              <td className={styles.menuTableTd}>150分</td>
            </tr>
          </tbody>
          <tbody>
            <tr className={styles.menuTableTr}>
              <th className={styles.menuTableTh}>デザインパーマ</th>
              <td className={styles.menuTableTd}>ロング</td>
              <td className={styles.menuTableTd}>¥8,800</td>
              <td className={styles.menuTableTd}>150分</td>
            </tr>
          </tbody>
          <tbody>
            <tr className={styles.menuTableTr}>
              <th className={styles.menuTableTh}>質感チェンジストレート</th>
              <td className={styles.menuTableTd}>ショート</td>
              <td className={styles.menuTableTd}>¥7,700</td>
              <td className={styles.menuTableTd}>90分</td>
            </tr>
          </tbody>
          <tbody>
            <tr className={styles.menuTableTr}>
              <th className={styles.menuTableTh}>質感チェンジストレート</th>
              <td className={styles.menuTableTd}>ミディアム</td>
              <td className={styles.menuTableTd}>¥8,500</td>
              <td className={styles.menuTableTd}>90分</td>
            </tr>
          </tbody>
          <tbody>
            <tr className={styles.menuTableTr}>
              <th className={styles.menuTableTh}>質感チェンジストレート</th>
              <td className={styles.menuTableTd}>ロング</td>
              <td className={styles.menuTableTd}>¥9,400</td>
              <td className={styles.menuTableTd}>90分</td>
            </tr>
          </tbody>
          <tbody>
            <tr className={styles.menuTablLast}>
              <th className={styles.menuTableTh}>ポイントパーマ</th>
              <td className={styles.menuTableTd}>&nbsp;</td>
              <td className={styles.menuTableTd}>¥4,200〜</td>
              <td className={styles.menuTableTd}>60分</td>
            </tr>
          </tbody>
        </table>
        <h2 className={styles.menuTitle}>縮毛矯正</h2>
        <p className={styles.menuDetail}>
          (カットなしの場合Sh.Br代 + ¥2,000必要)
        </p>
        <table className={styles.menuArea}>
          <tbody>
            <tr className={styles.menuTableTr}>
              <th className={styles.menuTableTh}>スタンダード縮毛矯正</th>
              <td className={styles.menuTableTd}>ショート、カット別</td>
              <td className={styles.menuTableTd}>¥13,500</td>
              <td className={styles.menuTableTd}>150分</td>
            </tr>
          </tbody>
          <tbody>
            <tr>
              <th className={styles.menuTableTh}>スタンダード縮毛矯正</th>
              <td className={styles.menuTableTd}>ミディアム、カット別</td>
              <td className={styles.menuTableTd}>¥15,500</td>
              <td className={styles.menuTableTd}>150分</td>
            </tr>
          </tbody>
          <tbody>
            <tr className={styles.menuTablLast}>
              <th className={styles.menuTableTh}>スタンダード縮毛矯正</th>
              <td className={styles.menuTableTd}>ロング、カット別</td>
              <td className={styles.menuTableTd}>¥17,500</td>
              <td className={styles.menuTableTd}>150分</td>
            </tr>
          </tbody>
          <tbody>
            <tr className={styles.menuTablLast}>
              <th className={styles.menuTableTh}>プレミアム縮毛矯正</th>
              <td className={styles.menuTableTd}>ショート</td>
              <td className={styles.menuTableTd}>¥17,500</td>
              <td className={styles.menuTableTd}>150分</td>
            </tr>
          </tbody>
          <tbody>
            <tr className={styles.menuTableTr}>
              <th className={styles.menuTableTh}>プレミアム縮毛矯正</th>
              <td className={styles.menuTableTd}>ミディアム</td>
              <td className={styles.menuTableTd}>¥19,500</td>
              <td className={styles.menuTableTd}>150分</td>
            </tr>
          </tbody>
          <tbody>
            <tr className={styles.menuTableTr}>
              <th className={styles.menuTableTh}>プレミアム縮毛矯正</th>
              <td className={styles.menuTableTd}>ロング</td>
              <td className={styles.menuTableTd}>¥21,500</td>
              <td className={styles.menuTableTd}>150分</td>
            </tr>
          </tbody>
          <tbody>
            <tr className={styles.menuTableTr}>
              <th className={styles.menuTableTh}>縮毛矯正リタッチ</th>
              <td className={styles.menuTableTd}>※ブロー別</td>
              <td className={styles.menuTableTd}>¥12,000〜</td>
              <td className={styles.menuTableTd}>150分</td>
            </tr>
          </tbody>
          <tbody>
            <tr className={styles.menuTableTr}>
              <th className={styles.menuTableTh}>縮毛矯正フロント</th>
              <td className={styles.menuTableTd}>&nbsp;</td>
              <td className={styles.menuTableTd}>¥5,500〜</td>
              <td className={styles.menuTableTd}>90分</td>
            </tr>
          </tbody>
        </table>
        <h2 className={styles.menuTitle}>トリートメント</h2>
        <table className={styles.menuArea}>
          <tbody>
            <tr className={styles.menuTableTr}>
              <th className={styles.menuTableTh}>レゾクレンジング</th>
              <td className={styles.menuTableTd}>&nbsp;</td>
              <td className={styles.menuTableTd}>¥550</td>
              <td className={styles.menuTableTd}>10分</td>
            </tr>
          </tbody>
          <tbody>
            <tr className={styles.menuTablLast}>
              <th className={styles.menuTableTh}>カシミヤトリートメント</th>
              <td className={styles.menuTableTd}>&nbsp;</td>
              <td className={styles.menuTableTd}>¥4,200〜</td>
              <td className={styles.menuTableTd}>30分</td>
            </tr>
          </tbody>
        </table>
        <h2 className={styles.menuTitle}>セットメニュー</h2>
        <table className={styles.menuArea}>
          <tbody>
            <tr className={styles.menuTableTr}>
              <th className={styles.menuTableTh}>カラー + カット</th>
              <td className={styles.menuTableTd}>※長さ料金あり</td>
              <td className={styles.menuTableTd}>¥11,500〜</td>
              <td className={styles.menuTableTd}>150分</td>
            </tr>
          </tbody>
          <tbody>
            <tr className={styles.menuTableTr}>
              <th className={styles.menuTableTh}>パーマ + カット</th>
              <td className={styles.menuTableTd}>※長さ料金あり</td>
              <td className={styles.menuTableTd}>¥11,500〜</td>
              <td className={styles.menuTableTd}>150分</td>
            </tr>
          </tbody>
          <tbody>
            <tr className={styles.menuTableTr}>
              <th className={styles.menuTableTh}>30リタッチ + カット</th>
              <td className={styles.menuTableTd}>※長さ料金あり</td>
              <td className={styles.menuTableTd}>¥9,550〜</td>
              <td className={styles.menuTableTd}>120分</td>
            </tr>
          </tbody>
          <tbody>
            <tr className={styles.menuTableTr}>
              <th className={styles.menuTableTh}>60リタッチ + カット</th>
              <td className={styles.menuTableTd}>※長さ料金あり</td>
              <td className={styles.menuTableTd}>¥10,350〜</td>
              <td className={styles.menuTableTd}>120分</td>
            </tr>
          </tbody>
          <tbody>
            <tr className={styles.menuTableTr}>
              <th className={styles.menuTableTh}>カラー + パーマ + カット</th>
              <td className={styles.menuTableTd}>※長さ料金あり</td>
              <td className={styles.menuTableTd}>¥18,150〜</td>
              <td className={styles.menuTableTd}>210分</td>
            </tr>
          </tbody>
          <tbody>
            <tr className={styles.menuTableTr}>
              <th className={styles.menuTableTh}>カット + ヘッドスパ</th>
              <td className={styles.menuTableTd}>※長さ料金あり</td>
              <td className={styles.menuTableTd}>¥7,050〜</td>
              <td className={styles.menuTableTd}>90分</td>
            </tr>
          </tbody>
          <tbody>
            <tr className={styles.menuTableTr}>
              <th className={styles.menuTableTh}>縮毛矯正 + カット</th>
              <td className={styles.menuTableTd}>※長さ料金あり</td>
              <td className={styles.menuTableTd}>¥18,450〜</td>
              <td className={styles.menuTableTd}>210分</td>
            </tr>
          </tbody>
          <tbody>
            <tr className={styles.menuTablLast}>
              <th className={styles.menuTableTh}>
                プレミアム縮毛矯正 + カット
              </th>
              <td className={styles.menuTableTd}>※長さ料金あり</td>
              <td className={styles.menuTableTd}>¥22,450〜</td>
              <td className={styles.menuTableTd}>210分</td>
            </tr>
          </tbody>
        </table>
        <h2 className={styles.menuTitle}>その他</h2>
        <p className={styles.menuDetail}>
          詳しくは 086-454-7373 池本までお電話でお問い合わせください
        </p>
        <table className={styles.menuArea}>
          <tbody>
            <tr className={styles.menuTableTr}>
              <th className={styles.menuTableTh}>ヘアセット</th>
              <td className={styles.menuTableTd}>※要相談</td>
              <td className={styles.menuTableTd}>¥4,900〜</td>
              <td className={styles.menuTableTd}>60分</td>
            </tr>
          </tbody>
          <tbody>
            <tr className={styles.menuTableTr}>
              <th className={styles.menuTableTh}>メイク</th>
              <td className={styles.menuTableTd}>※要相談</td>
              <td className={styles.menuTableTd}>¥4,900〜</td>
              <td className={styles.menuTableTd}>60分</td>
            </tr>
          </tbody>
          <tbody>
            <tr className={styles.menuTableTr}>
              <th className={styles.menuTableTh}>シャンプー</th>
              <td className={styles.menuTableTd}>※ブロー別</td>
              <td className={styles.menuTableTd}>¥1,100</td>
              <td className={styles.menuTableTd}>30分</td>
            </tr>
          </tbody>
          <tbody>
            <tr className={styles.menuTableTr}>
              <th className={styles.menuTableTh}>ドライ</th>
              <td className={styles.menuTableTd}>&nbsp;</td>
              <td className={styles.menuTableTd}>¥1,100</td>
              <td className={styles.menuTableTd}>30分</td>
            </tr>
          </tbody>
          <tbody>
            <tr className={styles.menuTableTr}>
              <th className={styles.menuTableTh}>ブロー</th>
              <td className={styles.menuTableTd}>※ヘアアイロンを含む</td>
              <td className={styles.menuTableTd}>¥2,200〜</td>
              <td className={styles.menuTableTd}>30分</td>
            </tr>
          </tbody>
          <tbody>
            <tr className={styles.menuTablLast}>
              <th className={styles.menuTableTh}>ショートスパ</th>
              <td className={styles.menuTableTd}>&nbsp;</td>
              <td className={styles.menuTableTd}>¥2,100</td>
              <td className={styles.menuTableTd}>60分</td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
}
