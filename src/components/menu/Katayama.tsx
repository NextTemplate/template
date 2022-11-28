import React from "react";
import Link from "next/link";
import styles from "../../styles/StylistMenu/StylistMenu.module.scss";

export default function Katayama() {
  return (
    <div className={styles.menu}>
      <h2 className={styles.menuTitle}>カット(シャンプーブロー込)</h2>
      <table className={styles.menuArea}>
        <tbody>
          <tr className={styles.menuTableTr}>
            <th className={styles.menuTableTh}>大人</th>
            <td className={styles.menuTableTd}>&nbsp;</td>
            <td className={styles.menuTableTd}>¥4,950</td>
            <td className={styles.menuTableTd}>60分</td>
          </tr>
        </tbody>
        <tbody>
          <tr className={styles.menuTableTr}>
            <th className={styles.menuTableTh}>中高生</th>
            <td className={styles.menuTableTd}>&nbsp;</td>
            <td className={styles.menuTableTd}>¥3,850</td>
            <td className={styles.menuTableTd}>60分</td>
          </tr>
        </tbody>
        <tbody>
          <tr className={styles.menuTableTr}>
            <th className={styles.menuTableTh}>小学生以下</th>
            <td className={styles.menuTableTd}>&nbsp;</td>
            <td className={styles.menuTableTd}>¥3,300</td>
            <td className={styles.menuTableTd}>60分</td>
          </tr>
        </tbody>
        <tbody>
          <tr className={styles.menuTableTr}>
            <th className={styles.menuTableTh}>前髪</th>
            <td className={styles.menuTableTd}>(シャンプー無し)</td>
            <td className={styles.menuTableTd}>¥550</td>
            <td className={styles.menuTableTd}>15分</td>
          </tr>
        </tbody>
        <tbody>
          <tr className={styles.menuTablLast}>
            <th className={styles.menuTableTh}>メンテナンスカット</th>
            <td className={styles.menuTableTd}>
              ※シャンプー無し/当店でカット後3週間以内
            </td>
            <td className={styles.menuTableTd}>¥2,200</td>
            <td className={styles.menuTableTd}>45分</td>
          </tr>
        </tbody>
      </table>

      <h2 className={styles.menuTitle}>カラー(シャンプーブロー込)</h2>
      <table className={styles.menuArea}>
        <tbody>
          <tr className={styles.menuTableTr}>
            <th className={styles.menuTableTh}>リタッチ</th>
            <td className={styles.menuTableTd}>(45日以内)</td>
            <td className={styles.menuTableTd}>¥5,500</td>
            <td className={styles.menuTableTd}>90分</td>
          </tr>
        </tbody>
        <tbody>
          <tr className={styles.menuTableTr}>
            <th className={styles.menuTableTh}>ショート</th>
            <td className={styles.menuTableTd}>&nbsp;</td>
            <td className={styles.menuTableTd}>¥6,600</td>
            <td className={styles.menuTableTd}>90分</td>
          </tr>
        </tbody>
        <tbody>
          <tr className={styles.menuTableTr}>
            <th className={styles.menuTableTh}>ミディアム</th>
            <td className={styles.menuTableTd}>&nbsp;</td>
            <td className={styles.menuTableTd}>¥8,800</td>
            <td className={styles.menuTableTd}>90分〜120分</td>
          </tr>
        </tbody>
        <tbody>
          <tr className={styles.menuTableTr}>
            <th className={styles.menuTableTh}>ロング</th>
            <td className={styles.menuTableTd}>&nbsp;</td>
            <td className={styles.menuTableTd}>¥9,900</td>
            <td className={styles.menuTableTd}>90分〜120分</td>
          </tr>
        </tbody>
        <tbody>
          <tr className={styles.menuTableTr}>
            <th className={styles.menuTableTh}>Wカラー</th>
            <td className={styles.menuTableTd}>※Wカラーは要相談</td>
            <td className={styles.menuTableTd}>¥11,000</td>
            <td className={styles.menuTableTd}>150分〜</td>
          </tr>
        </tbody>
        <tbody>
          <tr className={styles.menuTablLast}>
            <th className={styles.menuTableTh}>ホイルカラー</th>
            <td className={styles.menuTableTd}>&nbsp;</td>
            <td className={styles.menuTableTd}>¥3,850〜</td>
            <td className={styles.menuTableTd}>120分〜</td>
          </tr>
        </tbody>
      </table>

      <h2 className={styles.menuTitle}>パーマ(シャンプーブロー込)</h2>
      <table className={styles.menuArea}>
        <tbody>
          <tr className={styles.menuTableTr}>
            <th className={styles.menuTableTh}>ポイント</th>
            <td className={styles.menuTableTd}>&nbsp;</td>
            <td className={styles.menuTableTd}>¥5,500</td>
            <td className={styles.menuTableTd}>90分</td>
          </tr>
        </tbody>
        <tbody>
          <tr className={styles.menuTablLast}>
            <th className={styles.menuTableTh}>全体</th>
            <td className={styles.menuTableTd}>&nbsp;</td>
            <td className={styles.menuTableTd}>¥7,700</td>
            <td className={styles.menuTableTd}>90分〜</td>
          </tr>
        </tbody>
      </table>

      <h2 className={styles.menuTitle}>ストレート(シャンプーブロー込)</h2>
      <table className={styles.menuArea}>
        <tbody>
          <tr className={styles.menuTableTr}>
            <th className={styles.menuTableTh}>リタッチ</th>
            <td className={styles.menuTableTd}>根本のみ</td>
            <td className={styles.menuTableTd}>¥14,300</td>
            <td className={styles.menuTableTd}>150分〜</td>
          </tr>
        </tbody>
        <tbody>
          <tr className={styles.menuTableTr}>
            <th className={styles.menuTableTh}>ショート</th>
            <td className={styles.menuTableTd}>&nbsp;</td>
            <td className={styles.menuTableTd}>¥14,300</td>
            <td className={styles.menuTableTd}>150分〜</td>
          </tr>
        </tbody>
        <tbody>
          <tr className={styles.menuTableTr}>
            <th className={styles.menuTableTh}>ミディアム</th>
            <td className={styles.menuTableTd}>&nbsp;</td>
            <td className={styles.menuTableTd}>¥16,500</td>
            <td className={styles.menuTableTd}>150分〜</td>
          </tr>
        </tbody>
        <tbody>
          <tr className={styles.menuTableTr}>
            <th className={styles.menuTableTh}>ロング</th>
            <td className={styles.menuTableTd}>&nbsp;</td>
            <td className={styles.menuTableTd}>¥18,700</td>
            <td className={styles.menuTableTd}>150分〜</td>
          </tr>
        </tbody>
        <tbody>
          <tr className={styles.menuTableTr}>
            <th className={styles.menuTableTh}>ストレート</th>
            <td className={styles.menuTableTd}>(部分)</td>
            <td className={styles.menuTableTd}>¥8,800</td>
            <td className={styles.menuTableTd}>90分〜</td>
          </tr>
        </tbody>
        <tbody>
          <tr className={styles.menuTablLast}>
            <th className={styles.menuTableTh}>質感チェンジ</th>
            <td className={styles.menuTableTd}>&nbsp;</td>
            <td className={styles.menuTableTd}>¥6,820〜</td>
            <td className={styles.menuTableTd}>150分〜</td>
          </tr>
        </tbody>
      </table>

      <h2 className={styles.menuTitle}>セットメニュー</h2>
      <table className={styles.menuArea}>
        <tbody>
          <tr className={styles.menuTableTr}>
            <th className={styles.menuTableTh}>カット + リタッチカラー</th>
            <td className={styles.menuTableTd}>(45日以内)</td>
            <td className={styles.menuTableTd}>¥8,800</td>
            <td className={styles.menuTableTd}>150分〜</td>
          </tr>
        </tbody>
        <tbody>
          <tr className={styles.menuTableTr}>
            <th className={styles.menuTableTh}>カット + リタッチカラー</th>
            <td className={styles.menuTableTd}>(45日以上)</td>
            <td className={styles.menuTableTd}>¥9,900</td>
            <td className={styles.menuTableTd}>150分〜</td>
          </tr>
        </tbody>
        <tbody>
          <tr className={styles.menuTableTr}>
            <th className={styles.menuTableTh}>カット + 全体カラー</th>
            <td className={styles.menuTableTd}>(ショート)</td>
            <td className={styles.menuTableTd}>¥9,900</td>
            <td className={styles.menuTableTd}>150分</td>
          </tr>
        </tbody>
        <tbody>
          <tr className={styles.menuTableTr}>
            <th className={styles.menuTableTh}>カット + 全体カラー</th>
            <td className={styles.menuTableTd}>(ボブ)</td>
            <td className={styles.menuTableTd}>¥11,000</td>
            <td className={styles.menuTableTd}>150分</td>
          </tr>
        </tbody>
        <tbody>
          <tr className={styles.menuTableTr}>
            <th className={styles.menuTableTh}>カット + 全体カラー</th>
            <td className={styles.menuTableTd}>(ミディアム)</td>
            <td className={styles.menuTableTd}>¥12,100</td>
            <td className={styles.menuTableTd}>150分</td>
          </tr>
        </tbody>
        <tbody>
          <tr className={styles.menuTableTr}>
            <th className={styles.menuTableTh}>カット + 全体カラー</th>
            <td className={styles.menuTableTd}>(ロング)</td>
            <td className={styles.menuTableTd}>¥13,200</td>
            <td className={styles.menuTableTd}>150分</td>
          </tr>
        </tbody>
        <tbody>
          <tr className={styles.menuTableTr}>
            <th className={styles.menuTableTh}>カット + 部分パーマ</th>
            <td className={styles.menuTableTd}>&nbsp;</td>
            <td className={styles.menuTableTd}>¥8,800</td>
            <td className={styles.menuTableTd}>150分</td>
          </tr>
        </tbody>
        <tbody>
          <tr className={styles.menuTableTr}>
            <th className={styles.menuTableTh}>カット + 全体パーマ</th>
            <td className={styles.menuTableTd}>&nbsp;</td>
            <td className={styles.menuTableTd}>¥11,000</td>
            <td className={styles.menuTableTd}>150分</td>
          </tr>
        </tbody>
        <tbody>
          <tr className={styles.menuTableTr}>
            <th className={styles.menuTableTh}>カット + 根本ストレート</th>
            <td className={styles.menuTableTd}>(大人)</td>
            <td className={styles.menuTableTd}>¥17,600</td>
            <td className={styles.menuTableTd}>210分</td>
          </tr>
        </tbody>
        <tbody>
          <tr className={styles.menuTableTr}>
            <th className={styles.menuTableTh}>カット + 全体ストレート</th>
            <td className={styles.menuTableTd}>(大人, ショート)</td>
            <td className={styles.menuTableTd}>¥17,600</td>
            <td className={styles.menuTableTd}>210分</td>
          </tr>
        </tbody>
        <tbody>
          <tr className={styles.menuTableTr}>
            <th className={styles.menuTableTh}>カット + 全体ストレート</th>
            <td className={styles.menuTableTd}>(大人, ミディアム)</td>
            <td className={styles.menuTableTd}>¥19,800</td>
            <td className={styles.menuTableTd}>210分</td>
          </tr>
        </tbody>
        <tbody>
          <tr className={styles.menuTableTr}>
            <th className={styles.menuTableTh}>カット + 全体ストレート</th>
            <td className={styles.menuTableTd}>(大人, ロング)</td>
            <td className={styles.menuTableTd}>¥22,000</td>
            <td className={styles.menuTableTd}>210分</td>
          </tr>
        </tbody>
        <tbody>
          <tr className={styles.menuTableTr}>
            <th className={styles.menuTableTh}>カット + 部分ストレート</th>
            <td className={styles.menuTableTd}>(大人)</td>
            <td className={styles.menuTableTd}>¥12,100</td>
            <td className={styles.menuTableTd}>180分</td>
          </tr>
        </tbody>
        <tbody>
          <tr className={styles.menuTableTr}>
            <th className={styles.menuTableTh}>カット + 根元ストレート</th>
            <td className={styles.menuTableTd}>(中高生)</td>
            <td className={styles.menuTableTd}>¥16,500</td>
            <td className={styles.menuTableTd}>210分</td>
          </tr>
        </tbody>
        <tbody>
          <tr className={styles.menuTableTr}>
            <th className={styles.menuTableTh}>カット + 全体ストレート</th>
            <td className={styles.menuTableTd}>(中高生, ショート)</td>
            <td className={styles.menuTableTd}>¥16,500</td>
            <td className={styles.menuTableTd}>210分</td>
          </tr>
        </tbody>
        <tbody>
          <tr className={styles.menuTableTr}>
            <th className={styles.menuTableTh}>カット + 全体ストレート</th>
            <td className={styles.menuTableTd}>(中高生, ミディアム)</td>
            <td className={styles.menuTableTd}>¥18,700</td>
            <td className={styles.menuTableTd}>210分</td>
          </tr>
        </tbody>
        <tbody>
          <tr className={styles.menuTableTr}>
            <th className={styles.menuTableTh}>カット + 全体ストレート</th>
            <td className={styles.menuTableTd}>(中高生, ロング)</td>
            <td className={styles.menuTableTd}>¥20,900</td>
            <td className={styles.menuTableTd}>210分</td>
          </tr>
        </tbody>
        <tbody>
          <tr className={styles.menuTableTr}>
            <th className={styles.menuTableTh}>カット + 部分ストレート</th>
            <td className={styles.menuTableTd}>(中高生)</td>
            <td className={styles.menuTableTd}>¥11,000</td>
            <td className={styles.menuTableTd}>180分</td>
          </tr>
        </tbody>
        <tbody>
          <tr className={styles.menuTableTr}>
            <th className={styles.menuTableTh}>カット + 根元ストレート</th>
            <td className={styles.menuTableTd}>(小学生以下)</td>
            <td className={styles.menuTableTd}>¥15,900</td>
            <td className={styles.menuTableTd}>210分</td>
          </tr>
        </tbody>
        <tbody>
          <tr className={styles.menuTableTr}>
            <th className={styles.menuTableTh}>カット + 全体ストレート</th>
            <td className={styles.menuTableTd}>(小学生以下, ショート)</td>
            <td className={styles.menuTableTd}>¥15,900</td>
            <td className={styles.menuTableTd}>210分</td>
          </tr>
        </tbody>
        <tbody>
          <tr className={styles.menuTableTr}>
            <th className={styles.menuTableTh}>カット + 全体ストレート</th>
            <td className={styles.menuTableTd}>(小学生以下, ミディアム)</td>
            <td className={styles.menuTableTd}>¥16,100</td>
            <td className={styles.menuTableTd}>210分</td>
          </tr>
        </tbody>
        <tbody>
          <tr className={styles.menuTableTr}>
            <th className={styles.menuTableTh}>カット + 全体ストレート</th>
            <td className={styles.menuTableTd}>(小学生以下, ロング)</td>
            <td className={styles.menuTableTd}>¥20,350</td>
            <td className={styles.menuTableTd}>210分</td>
          </tr>
        </tbody>
        <tbody>
          <tr className={styles.menuTablLast}>
            <th className={styles.menuTableTh}>カット + 部分ストレート</th>
            <td className={styles.menuTableTd}>(小学生以下)</td>
            <td className={styles.menuTableTd}>¥10,450</td>
            <td className={styles.menuTableTd}>180分</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
