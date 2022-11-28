import React from "react";
import Link from "next/link";
import styles from "../../styles/StylistMenu/StylistMenu.module.scss";

export default function Mai() {
  return (
    <>
      <div className={styles.menu}>
        <h2 className={styles.menuTitle}>カット</h2>
        <table className={styles.menuArea}>
          <tbody>
            <tr className={styles.menuTableTr}>
              <th className={styles.menuTableTh}>一般カット</th>
              <td className={styles.menuTableTd}>(シャンプー・ブロー込み)</td>
              <td className={styles.menuTableTd}>¥4,730</td>
              <td className={styles.menuTableTd}>90分</td>
            </tr>
          </tbody>
          <tbody>
            <tr>
              <th className={styles.menuTableTh}>学生カット</th>
              <td className={styles.menuTableTd}>(シャンプー・ブロー込み)</td>
              <td className={styles.menuTableTd}>¥3,630</td>
              <td className={styles.menuTableTd}>90分</td>
            </tr>
          </tbody>
          <tbody>
            <tr className={styles.menuTablLast}>
              <th className={styles.menuTableTh}>キッズカット</th>
              <td className={styles.menuTableTd}>(シャンプー・ブロー込み)</td>
              <td className={styles.menuTableTd}>¥2,530</td>
              <td className={styles.menuTableTd}>60分</td>
            </tr>
          </tbody>
          <tbody>
            <tr className={styles.menuTablLast}>
              <th className={styles.menuTableTh}>フロントカット</th>
              <td className={styles.menuTableTd}>(シャンプー・ブロー別)</td>
              <td className={styles.menuTableTd}>¥1,100</td>
              <td className={styles.menuTableTd}>30分</td>
            </tr>
          </tbody>
          <tbody>
            <tr className={styles.menuTablLast}>
              <th className={styles.menuTableTh}>メンテナンスカット</th>
              <td className={styles.menuTableTd}>※単体ではお受けできません</td>
              <td className={styles.menuTableTd}>¥2,200</td>
              <td className={styles.menuTableTd}>30分</td>
            </tr>
          </tbody>
          <tbody>
            <tr className={styles.menuTablLast}>
              <th className={styles.menuTableTh}>眉カット</th>
              <td className={styles.menuTableTd}>&nbsp;</td>
              <td className={styles.menuTableTd}>¥1,100</td>
              <td className={styles.menuTableTd}>30分</td>
            </tr>
          </tbody>
        </table>
        <h2 className={styles.menuTitle}>カラー</h2>
        <p className={styles.menuDetail}>
          ※シャンプー、ブロー込み、長さ料金あり
        </p>
        <table className={styles.menuArea}>
          <tbody>
            <tr className={styles.menuTableTr}>
              <th className={styles.menuTableTh}>リタッチカラー</th>
              <td className={styles.menuTableTd}>根本2cmまで</td>
              <td className={styles.menuTableTd}>¥5,500</td>
              <td className={styles.menuTableTd}>90分</td>
            </tr>
          </tbody>
          <tbody>
            <tr className={styles.menuTableTr}>
              <th className={styles.menuTableTh}>リタッチカラー</th>
              <td className={styles.menuTableTd}>1ヶ月以内</td>
              <td className={styles.menuTableTd}>¥4,400</td>
              <td className={styles.menuTableTd}>90分</td>
            </tr>
          </tbody>
          <tbody>
            <tr className={styles.menuTableTr}>
              <th className={styles.menuTableTh}>オーダーメイドカラー</th>
              <td className={styles.menuTableTd}>全体を一色に染めます。</td>
              <td className={styles.menuTableTd}>¥7,700〜</td>
              <td className={styles.menuTableTd}>90分</td>
            </tr>
          </tbody>
          <tbody>
            <tr className={styles.menuTableTr}>
              <th className={styles.menuTableTh}>ノンダメージカラー</th>
              <td className={styles.menuTableTd}>
                ケア剤を使用し、ダメージを軽減
              </td>
              <td className={styles.menuTableTd}>¥8,800〜</td>
              <td className={styles.menuTableTd}>90分</td>
            </tr>
          </tbody>
          <tbody>
            <tr className={styles.menuTableTr}>
              <th className={styles.menuTableTh}>インナーカラー</th>
              <td className={styles.menuTableTd}>(ワンブリーチ)</td>
              <td className={styles.menuTableTd}>¥11,000〜</td>
              <td className={styles.menuTableTd}>120分</td>
            </tr>
          </tbody>
          <tbody>
            <tr className={styles.menuTableTr}>
              <th className={styles.menuTableTh}>インナーカラー</th>
              <td className={styles.menuTableTd}>(ツーブリーチ)</td>
              <td className={styles.menuTableTd}>¥13,000〜</td>
              <td className={styles.menuTableTd}>150分</td>
            </tr>
          </tbody>
          <tbody>
            <tr className={styles.menuTableTr}>
              <th className={styles.menuTableTh}>グラデーションカラー</th>
              <td className={styles.menuTableTd}>(ワンブリーチ)</td>
              <td className={styles.menuTableTd}>¥13,000〜</td>
              <td className={styles.menuTableTd}>150分</td>
            </tr>
          </tbody>
          <tbody>
            <tr className={styles.menuTableTr}>
              <th className={styles.menuTableTh}>グラデーションカラー</th>
              <td className={styles.menuTableTd}>(ツーブリーチ)</td>
              <td className={styles.menuTableTd}>¥16,000〜</td>
              <td className={styles.menuTableTd}>180分</td>
            </tr>
          </tbody>
          <tbody>
            <tr className={styles.menuTableTr}>
              <th className={styles.menuTableTh}>
                デザインカラー ウィービング
              </th>
              <td className={styles.menuTableTd}>(ハーフ)</td>
              <td className={styles.menuTableTd}>¥4,400〜</td>
              <td className={styles.menuTableTd}>30分</td>
            </tr>
          </tbody>
          <tbody>
            <tr className={styles.menuTableTr}>
              <th className={styles.menuTableTh}>
                デザインカラー ウィービング
              </th>
              <td className={styles.menuTableTd}>(フル)</td>
              <td className={styles.menuTableTd}>¥8,800〜</td>
              <td className={styles.menuTableTd}>60分</td>
            </tr>
          </tbody>
          <tbody>
            <tr className={styles.menuTableTr}>
              <th className={styles.menuTableTh}>ケアブリーチカラー</th>
              <td className={styles.menuTableTd}>(全体を明るくします)</td>
              <td className={styles.menuTableTd}>¥8,800〜</td>
              <td className={styles.menuTableTd}>90分</td>
            </tr>
          </tbody>
          <tbody>
            <tr className={styles.menuTableTr}>
              <th className={styles.menuTableTh}>ケアブリーチカラー</th>
              <td className={styles.menuTableTd}>(2回目以降)</td>
              <td className={styles.menuTableTd}>¥6,600〜</td>
              <td className={styles.menuTableTd}>30分</td>
            </tr>
          </tbody>
          <tbody>
            <tr className={styles.menuTablLast}>
              <th className={styles.menuTableTh}>
                ケアブリーチメンテナンスカラー
              </th>
              <td className={styles.menuTableTd}>(※1ヶ月以内)</td>
              <td className={styles.menuTableTd}>¥3,300〜</td>
              <td className={styles.menuTableTd}>90分</td>
            </tr>
          </tbody>
        </table>
        <h2 className={styles.menuTitle}>パーマ</h2>
        <p className={styles.menuDetail}>
          カット、シャンプー、ブロー込み、長さ料金なし
        </p>
        <table className={styles.menuArea}>
          <tbody>
            <tr className={styles.menuTableTr}>
              <th className={styles.menuTableTh}>ポイントパーマ</th>
              <td className={styles.menuTableTd}>トップだけのパーマ</td>
              <td className={styles.menuTableTd}>¥8,800</td>
              <td className={styles.menuTableTd}>120分</td>
            </tr>
          </tbody>
          <tbody>
            <tr>
              <th className={styles.menuTableTh}>デザインパーマ</th>
              <td className={styles.menuTableTd}>動きを出します</td>
              <td className={styles.menuTableTd}>¥11,000</td>
              <td className={styles.menuTableTd}>150分</td>
            </tr>
          </tbody>
          <tbody>
            <tr className={styles.menuTablLast}>
              <th className={styles.menuTableTh}>ノンダメージパーマ</th>
              <td className={styles.menuTableTd}>
                ケア剤を使用し、ダメージを軽減
              </td>
              <td className={styles.menuTableTd}>¥13,200</td>
              <td className={styles.menuTableTd}>150分</td>
            </tr>
          </tbody>
          <tbody>
            <tr className={styles.menuTablLast}>
              <th className={styles.menuTableTh}>デジタルパーマ</th>
              <td className={styles.menuTableTd}>
                カット、シャンプー、ブロー込み
              </td>
              <td className={styles.menuTableTd}>¥14,300</td>
              <td className={styles.menuTableTd}>150分</td>
            </tr>
          </tbody>
        </table>
        <h2 className={styles.menuTitle}>ストレート</h2>
        <p className={styles.menuDetail}>カット、シャンプー、ブロー込み</p>
        <table className={styles.menuArea}>
          <tbody>
            <tr className={styles.menuTableTr}>
              <th className={styles.menuTableTh}>ポイントストレート</th>
              <td className={styles.menuTableTd}>カットは一部のみ</td>
              <td className={styles.menuTableTd}>¥7,700</td>
              <td className={styles.menuTableTd}>120分</td>
            </tr>
          </tbody>
          <tbody>
            <tr className={styles.menuTableTr}>
              <th className={styles.menuTableTh}>オーダーストレート</th>
              <td className={styles.menuTableTd}>
                アイロンを使った全体ストレート
              </td>
              <td className={styles.menuTableTd}>¥17,620〜</td>
              <td className={styles.menuTableTd}>210分</td>
            </tr>
          </tbody>
          <tbody>
            <tr className={styles.menuTablLast}>
              <th className={styles.menuTableTh}>フォルムコントロール</th>
              <td className={styles.menuTableTd}>ボリュームダウン</td>
              <td className={styles.menuTableTd}>¥13,200〜</td>
              <td className={styles.menuTableTd}>150分</td>
            </tr>
          </tbody>
        </table>
        <h2 className={styles.menuTitle}>トリートメント</h2>
        <p className={styles.menuDetail}>
          シャンプー、ブロー込み、長さ料金あり
        </p>
        <table className={styles.menuArea}>
          <tbody>
            <tr className={styles.menuTableTr}>
              <th className={styles.menuTableTh}>クイックトリートメント</th>
              <td className={styles.menuTableTd}>&nbsp;</td>
              <td className={styles.menuTableTd}>¥3,300〜</td>
              <td className={styles.menuTableTd}>60分</td>
            </tr>
          </tbody>
          <tbody>
            <tr className={styles.menuTableTr}>
              <th className={styles.menuTableTh}>システムTR</th>
              <td className={styles.menuTableTd}>
                栄養補給をするトリートメント
              </td>
              <td className={styles.menuTableTd}>¥4,400〜</td>
              <td className={styles.menuTableTd}>60分</td>
            </tr>
          </tbody>
          <tbody>
            <tr className={styles.menuTablLast}>
              <th className={styles.menuTableTh}>炭酸ケア</th>
              <td className={styles.menuTableTd}>他メニューとの併用のみ可能</td>
              <td className={styles.menuTableTd}>¥2,200</td>
              <td className={styles.menuTableTd}>15分</td>
            </tr>
          </tbody>
        </table>
        <h2 className={styles.menuTitle}>ヘッドスパ</h2>
        <p className={styles.menuDetail}>シャンプー、ブロー込み</p>
        <table className={styles.menuArea}>
          <tbody>
            <tr className={styles.menuTableTr}>
              <th className={styles.menuTableTh}>クイックスパ</th>
              <td className={styles.menuTableTd}>お手軽なスパです.</td>
              <td className={styles.menuTableTd}>¥2,200</td>
              <td className={styles.menuTableTd}>10分</td>
            </tr>
          </tbody>
          <tbody>
            <tr className={styles.menuTableTr}>
              <th className={styles.menuTableTh}>リラクシングスパ</th>
              <td className={styles.menuTableTd}>
                アロマスパか炭酸スパが選択可能
              </td>
              <td className={styles.menuTableTd}>¥3,300</td>
              <td className={styles.menuTableTd}>15分</td>
            </tr>
          </tbody>
          <tbody>
            <tr className={styles.menuTablLast}>
              <th className={styles.menuTableTh}>スパトリートメント</th>
              <td className={styles.menuTableTd}>長さ料金あり</td>
              <td className={styles.menuTableTd}>¥6,600〜</td>
              <td className={styles.menuTableTd}>60分</td>
            </tr>
          </tbody>
        </table>
        <h2 className={styles.menuTitle}>セット</h2>
        <table className={styles.menuArea}>
          <tbody>
            <tr className={styles.menuTableTr}>
              <th className={styles.menuTableTh}>アレンジ</th>
              <td className={styles.menuTableTd}>自然な仕上がりのセットです</td>
              <td className={styles.menuTableTd}>¥2,200</td>
              <td className={styles.menuTableTd}>40分</td>
            </tr>
          </tbody>
          <tbody>
            <tr className={styles.menuTableTr}>
              <th className={styles.menuTableTh}>ヘアセット</th>
              <td className={styles.menuTableTd}>ハーフアップなど</td>
              <td className={styles.menuTableTd}>¥3,300</td>
              <td className={styles.menuTableTd}>60分</td>
            </tr>
          </tbody>
          <tbody>
            <tr className={styles.menuTablLast}>
              <th className={styles.menuTableTh}>オーダーセット</th>
              <td className={styles.menuTableTd}>アップスタイルなど</td>
              <td className={styles.menuTableTd}>¥4,400</td>
              <td className={styles.menuTableTd}>60分</td>
            </tr>
          </tbody>
        </table>

        <h2 className={styles.menuTitle}>その他</h2>
        <p className={styles.menuDetail}>メイク、着付けなど承ります。</p>
        <table className={styles.menuArea}>
          <tbody>
            <tr className={styles.menuTableTr}>
              <th className={styles.menuTableTh}>シャンプー&amp;ブロー</th>
              <td className={styles.menuTableTd}>&nbsp;</td>
              <td className={styles.menuTableTd}>¥2,200</td>
              <td className={styles.menuTableTd}>40分</td>
            </tr>
          </tbody>
          <tbody>
            <tr className={styles.menuTableTr}>
              <th className={styles.menuTableTh}>ポイントメイク</th>
              <td className={styles.menuTableTd}>
                ベースメイク以外メイクです。
              </td>
              <td className={styles.menuTableTd}>¥2,200</td>
              <td className={styles.menuTableTd}>30分</td>
            </tr>
          </tbody>
          <tbody>
            <tr className={styles.menuTableTr}>
              <th className={styles.menuTableTh}>フルメイク</th>
              <td className={styles.menuTableTd}>ベースメイクから行います。</td>
              <td className={styles.menuTableTd}>¥4,400</td>
              <td className={styles.menuTableTd}>60分</td>
            </tr>
          </tbody>
          <tbody>
            <tr className={styles.menuTableTr}>
              <th className={styles.menuTableTh}>浴衣</th>
              <td className={styles.menuTableTd}>&nbsp;</td>
              <td className={styles.menuTableTd}>¥4,400</td>
              <td className={styles.menuTableTd}>30分</td>
            </tr>
          </tbody>
          <tbody>
            <tr className={styles.menuTableTr}>
              <th className={styles.menuTableTh}>袴</th>
              <td className={styles.menuTableTd}>&nbsp;</td>
              <td className={styles.menuTableTd}>¥6,600</td>
              <td className={styles.menuTableTd}>40分</td>
            </tr>
          </tbody>
          <tbody>
            <tr className={styles.menuTablLast}>
              <th className={styles.menuTableTh}>振袖</th>
              <td className={styles.menuTableTd}>&nbsp;</td>
              <td className={styles.menuTableTd}>¥8,800</td>
              <td className={styles.menuTableTd}>60分</td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
}
