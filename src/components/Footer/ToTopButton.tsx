// 押すとTopにスクロールするボタン
import { useEffect, useState } from "react";
import styles from "../../styles/Layouts/ToTopButton.module.scss";

export default function ToTopButton() {
  const [isButtonActive, setIsButtonActive] = useState(false);

  // 最終的に押したら動きをつけたいボタン
  const returnTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  // scrollした時の位置と動きの方向
  const scrollWindow = () => {
    const top = 400; // ボタンを表示させる位置
    let scroll = 0;
    scroll = window.scrollY;

    if (top <= scroll) {
      setIsButtonActive(true);
    } else {
      setIsButtonActive(false);
    }
  };

  // 止まっている時のスタイル
  const normalStyle = {
    opacity: 0,
    transition: "0.4s",
    pointerEvents: "none",
  };
  // 動いた時のスタイル
  const activeStyle = {
    opacity: 1,
    transition: "0.4s",
  };
  // ボタンの状態を判定する
  const style = isButtonActive ? activeStyle : normalStyle;

  useEffect(() => {
    window.addEventListener("scroll", scrollWindow);
    return () => {
      window.removeEventListener("scroll", scrollWindow);
    };
  }, []);

  return (
    <>
      <button
        className={styles.toTopButton}
        style={style}
        onClick={returnTop}
      ></button>
    </>
  );
}
