import React from "react";
import Link from "next/link";
import styles from "../../styles/StylistMenu/StylistMenu.module.scss";

export default function Nozomi() {
  return (
    <div className={styles.menu}>
      <h2 className={styles.menuTitle}>カット</h2>
      <p className={styles.menuDetail}>(ブロー込)</p>
      <table className={styles.menuArea}>
        <tbody>
          <tr className={styles.menuTableTr}>
            <th className={styles.menuTableTh}>中高生</th>
            <td className={styles.menuTableTd}>(ブロー込)</td>
            <td className={styles.menuTableTd}>¥4,070</td>
            <td className={styles.menuTableTd}>60分</td>
          </tr>
        </tbody>
        <tbody>
          <tr>
            <th className={styles.menuTableTh}>小学生以下</th>
            <td className={styles.menuTableTd}>(ブロー込)</td>
            <td className={styles.menuTableTd}>¥3,520</td>
            <td className={styles.menuTableTd}>60分</td>
          </tr>
        </tbody>
        <tbody>
          <tr className={styles.menuTablLast}>
            <th className={styles.menuTableTh}>フロントカット</th>
            <td className={styles.menuTableTd}>&nbsp;</td>
            <td className={styles.menuTableTd}>¥1,100</td>
            <td className={styles.menuTableTd}>10分</td>
          </tr>
        </tbody>
        <tbody>
          <tr className={styles.menuTablLast}>
            <th className={styles.menuTableTh}>眉毛カット</th>
            <td className={styles.menuTableTd}>&nbsp;</td>
            <td className={styles.menuTableTd}>¥1,100</td>
            <td className={styles.menuTableTd}>10分</td>
          </tr>
        </tbody>
        <tbody>
          <tr className={styles.menuTablLast}>
            <th className={styles.menuTableTh}>カット</th>
            <td className={styles.menuTableTd}>(1SP込)</td>
            <td className={styles.menuTableTd}>¥5,500</td>
            <td className={styles.menuTableTd}>75分</td>
          </tr>
        </tbody>
        <tbody>
          <tr className={styles.menuTablLast}>
            <th className={styles.menuTableTh}>カット</th>
            <td className={styles.menuTableTd}>(マッサージSP込)</td>
            <td className={styles.menuTableTd}>¥6,160</td>
            <td className={styles.menuTableTd}>75分</td>
          </tr>
        </tbody>
        <tbody>
          <tr className={styles.menuTablLast}>
            <th className={styles.menuTableTh}>カット</th>
            <td className={styles.menuTableTd}>(シャンプーなし)</td>
            <td className={styles.menuTableTd}>¥5,280</td>
            <td className={styles.menuTableTd}>75分</td>
          </tr>
        </tbody>
      </table>

      <h2 className={styles.menuTitle}>カラー</h2>
      <p className={styles.menuDetail}>(シャンプー・ブロー別)</p>
      <table className={styles.menuArea}>
        <tbody>
          <tr className={styles.menuTablLast}>
            <th className={styles.menuTableTh}>リタッチ</th>
            <td className={styles.menuTableTd}>(50日以内・シャンプー込)</td>
            <td className={styles.menuTableTd}>¥3,850</td>
            <td className={styles.menuTableTd}>90分</td>
          </tr>
        </tbody>
        <tbody>
          <tr className={styles.menuTablLast}>
            <th className={styles.menuTableTh}>S</th>
            <td className={styles.menuTableTd}>(シャンプー込)</td>
            <td className={styles.menuTableTd}>¥6,600</td>
            <td className={styles.menuTableTd}>90分</td>
          </tr>
        </tbody>
        <tbody>
          <tr className={styles.menuTablLast}>
            <th className={styles.menuTableTh}>M</th>
            <td className={styles.menuTableTd}>(シャンプー込)</td>
            <td className={styles.menuTableTd}>¥7,700</td>
            <td className={styles.menuTableTd}>90分</td>
          </tr>
        </tbody>
        <tbody>
          <tr className={styles.menuTablLast}>
            <th className={styles.menuTableTh}>L</th>
            <td className={styles.menuTableTd}>(シャンプー込)</td>
            <td className={styles.menuTableTd}>¥9,900</td>
            <td className={styles.menuTableTd}>90分</td>
          </tr>
        </tbody>
      </table>

      <h2 className={styles.menuTitle}>カラープラスメニュー</h2>
      <p className={styles.menuDetail}>(単品不可)</p>
      <table className={styles.menuArea}>
        <tbody>
          <tr className={styles.menuTableTr}>
            <th className={styles.menuTableTh}>リムーバルケア</th>
            <td className={styles.menuTableTd}>(単品不可)</td>
            <td className={styles.menuTableTd}>¥1,100</td>
            <td className={styles.menuTableTd}>30分〜</td>
          </tr>
        </tbody>
        <tbody>
          <tr className={styles.menuTableTr}>
            <th className={styles.menuTableTh}>Rカラー</th>
            <td className={styles.menuTableTd}>(単品不可)</td>
            <td className={styles.menuTableTd}>¥1,100</td>
            <td className={styles.menuTableTd}>30分〜</td>
          </tr>
        </tbody>
        <tbody>
          <tr className={styles.menuTableTr}>
            <th className={styles.menuTableTh}>ホイルカラー</th>
          </tr>
        </tbody>
        <tbody>
          <tr className={styles.menuTableTr}>
            <th className={styles.menuTableTh}>1枚</th>
            <td className={styles.menuTableTd}>枚数で料金が変動します</td>
            <td className={styles.menuTableTd}>¥440</td>
          </tr>
        </tbody>
        <tbody>
          <tr className={styles.menuTablLast}>
            <th className={styles.menuTableTh}>10枚</th>
            <td className={styles.menuTableTd}>枚数で料金が変動します</td>
            <td className={styles.menuTableTd}>¥3,850</td>
          </tr>
        </tbody>
        <tbody>
          <tr className={styles.menuTablLast}>
            <th className={styles.menuTableTh}>10枚以降1枚</th>
            <td className={styles.menuTableTd}>枚数で料金が変動します</td>
            <td className={styles.menuTableTd}>¥330</td>
          </tr>
        </tbody>
      </table>

      <h2 className={styles.menuTitle}>ストレートパーマ</h2>
      <table className={styles.menuArea}>
        <tbody>
          <tr className={styles.menuTableTr}>
            <th className={styles.menuTableTh}>縮毛矯正S</th>
            <td className={styles.menuTableTd}>&nbsp;</td>
            <td className={styles.menuTableTd}>¥13,200</td>
            <td className={styles.menuTableTd}>90〜240分</td>
          </tr>
        </tbody>
        <tbody>
          <tr>
            <th className={styles.menuTableTh}>縮毛矯正M</th>
            <td className={styles.menuTableTd}>&nbsp;</td>
            <td className={styles.menuTableTd}>¥15,400</td>
            <td className={styles.menuTableTd}>90〜240分</td>
          </tr>
        </tbody>
        <tbody>
          <tr className={styles.menuTablLast}>
            <th className={styles.menuTableTh}>縮毛矯正L</th>
            <td className={styles.menuTableTd}>&nbsp;</td>
            <td className={styles.menuTableTd}>¥17,600</td>
            <td className={styles.menuTableTd}>90〜240分</td>
          </tr>
        </tbody>
        <tbody>
          <tr className={styles.menuTablLast}>
            <th className={styles.menuTableTh}>前髪のみ</th>
            <td className={styles.menuTableTd}>&nbsp;</td>
            <td className={styles.menuTableTd}>¥5,500</td>
            <td className={styles.menuTableTd}>90〜240分</td>
          </tr>
        </tbody>
        <tbody>
          <tr className={styles.menuTableTr}>
            <th className={styles.menuTableTh}>部分</th>
            <td className={styles.menuTableTd}>&nbsp;</td>
            <td className={styles.menuTableTd}>¥9,240</td>
            <td className={styles.menuTableTd}>90〜240分</td>
          </tr>
        </tbody>
        <tbody>
          <tr className={styles.menuTableTr}>
            <th className={styles.menuTableTh}>パーマ落としストレート</th>
            <td className={styles.menuTableTd}>&nbsp;</td>
            <td className={styles.menuTableTd}>¥7,700</td>
            <td className={styles.menuTableTd}>90〜240分</td>
          </tr>
        </tbody>
        <tbody>
          <tr className={styles.menuTableTr}>
            <th className={styles.menuTableTh}>トリートメントストレート</th>
            <td className={styles.menuTableTd}>&nbsp;</td>
            <td className={styles.menuTableTd}>¥6,600</td>
            <td className={styles.menuTableTd}>90〜240分</td>
          </tr>
        </tbody>
        <tbody>
          <tr className={styles.menuTableTr}>
            <th className={styles.menuTableTh}>トリートメント</th>
            <td className={styles.menuTableTd}>(アイロン込)</td>
            <td className={styles.menuTableTd}>¥7,700</td>
            <td className={styles.menuTableTd}>90〜240分</td>
          </tr>
        </tbody>
        <tbody>
          <tr className={styles.menuTablLast}>
            <th className={styles.menuTableTh}>
              ※ロングの場合は、プラス¥1,100
            </th>
          </tr>
        </tbody>
      </table>

      <h2 className={styles.menuTitle}>プラスメニュー</h2>
      <p className={styles.menuDetail}>(カラーストレート時)</p>
      <table className={styles.menuArea}>
        <tbody>
          <tr className={styles.menuTablLast}>
            <th className={styles.menuTableTh}>質感チェンジ</th>
            <td className={styles.menuTableTd}>(カラーストレート時)</td>
            <td className={styles.menuTableTd}>¥1,650</td>
            <td className={styles.menuTableTd}>10分</td>
          </tr>
        </tbody>
      </table>

      <h2 className={styles.menuTitle}>パーマ</h2>
      <table className={styles.menuArea}>
        <tbody>
          <tr className={styles.menuTableTr}>
            <th className={styles.menuTableTh}>全頭</th>
            <td className={styles.menuTableTd}>&nbsp;</td>
            <td className={styles.menuTableTd}>¥6,600</td>
            <td className={styles.menuTableTd}>90分</td>
          </tr>
        </tbody>
        <tbody>
          <tr className={styles.menuTablLast}>
            <th className={styles.menuTableTh}>部分</th>
            <td className={styles.menuTableTd}>&nbsp;</td>
            <td className={styles.menuTableTd}>¥4,400</td>
            <td className={styles.menuTableTd}>60分</td>
          </tr>
        </tbody>
      </table>

      <h2 className={styles.menuTitle}>シャンプー</h2>
      <table className={styles.menuArea}>
        <tbody>
          <tr className={styles.menuTableTr}>
            <th className={styles.menuTableTh}>マッサージシャンプー</th>
            <td className={styles.menuTableTd}>&nbsp;</td>
            <td className={styles.menuTableTd}>¥1,320</td>
            <td className={styles.menuTableTd}>15分</td>
          </tr>
        </tbody>
        <tbody>
          <tr className={styles.menuTableTr}>
            <th className={styles.menuTableTh}>シャンプー</th>
            <td className={styles.menuTableTd}>&nbsp;</td>
            <td className={styles.menuTableTd}>¥1,100</td>
            <td className={styles.menuTableTd}>15分</td>
          </tr>
        </tbody>
        <tbody>
          <tr className={styles.menuTablLast}>
            <th className={styles.menuTableTh}>クイックシャンプー</th>
            <td className={styles.menuTableTd}>&nbsp;</td>
            <td className={styles.menuTableTd}>¥660</td>
            <td className={styles.menuTableTd}>10分</td>
          </tr>
        </tbody>
      </table>

      <h2 className={styles.menuTitle}>ブロー</h2>
      <table className={styles.menuArea}>
        <tbody>
          <tr className={styles.menuTableTr}>
            <th className={styles.menuTableTh}>ナチュラルブロー</th>
            <td className={styles.menuTableTd}>&nbsp;</td>
            <td className={styles.menuTableTd}>¥1,100</td>
            <td className={styles.menuTableTd}>10分</td>
          </tr>
        </tbody>
        <tbody>
          <tr className={styles.menuTablLast}>
            <th className={styles.menuTableTh}>ブロー</th>
            <td className={styles.menuTableTd}>(コテ巻きも含む)</td>
            <td className={styles.menuTableTd}>¥2,200</td>
            <td className={styles.menuTableTd}>20分</td>
          </tr>
        </tbody>
      </table>

      <h2 className={styles.menuTitle}>セット</h2>
      <table className={styles.menuArea}>
        <tbody>
          <tr className={styles.menuTablLast}>
            <th className={styles.menuTableTh}>セット</th>
            <td className={styles.menuTableTd}>&nbsp;</td>
            <td className={styles.menuTableTd}>¥3,850〜¥4,950</td>
            <td className={styles.menuTableTd}>40〜60分</td>
          </tr>
        </tbody>
      </table>

      <h2 className={styles.menuTitle}>トリートメント</h2>
      <table className={styles.menuArea}>
        <tbody>
          <tr className={styles.menuTableTr}>
            <th className={styles.menuTableTh}>除去(炭酸)</th>
            <td className={styles.menuTableTd}>&nbsp;</td>
            <td className={styles.menuTableTd}>¥1,650</td>
            <td className={styles.menuTableTd}>10分</td>
          </tr>
        </tbody>
        <tbody>
          <tr className={styles.menuTableTr}>
            <th className={styles.menuTableTh}>トリートメント保湿</th>
            <td className={styles.menuTableTd}>&nbsp;</td>
            <td className={styles.menuTableTd}>¥2,750</td>
            <td className={styles.menuTableTd}>5分</td>
          </tr>
        </tbody>
        <tbody>
          <tr className={styles.menuTablLast}>
            <th className={styles.menuTableTh}>ダメージレスケア</th>
            <td className={styles.menuTableTd}>&nbsp;</td>
            <td className={styles.menuTableTd}>¥3,850</td>
            <td className={styles.menuTableTd}>10分</td>
          </tr>
        </tbody>
      </table>

      <h2 className={styles.menuTitle}>髪質改善トリートメント</h2>
      <p className={styles.menuDetail}>(酸熱トリートメント)</p>
      <table className={styles.menuArea}>
        <tbody>
          <tr className={styles.menuTableTr}>
            <th className={styles.menuTableTh}>ショート</th>
            <td className={styles.menuTableTd}>(ブロー込み)</td>
            <td className={styles.menuTableTd}>¥7,700</td>
            <td className={styles.menuTableTd}>90分</td>
          </tr>
        </tbody>
        <tbody>
          <tr className={styles.menuTableTr}>
            <th className={styles.menuTableTh}>ミディアム</th>
            <td className={styles.menuTableTd}>(ブロー込み)</td>
            <td className={styles.menuTableTd}>¥8,800</td>
            <td className={styles.menuTableTd}>90分</td>
          </tr>
        </tbody>
        <tbody>
          <tr className={styles.menuTablLast}>
            <th className={styles.menuTableTh}>ロング</th>
            <td className={styles.menuTableTd}>(ブロー込み)</td>
            <td className={styles.menuTableTd}>¥9,900</td>
            <td className={styles.menuTableTd}>90分</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
