import React from "react";
import styles from "../../styles/Layouts/Button.module.scss";

const Button = ({ props }: any) => {
  return (
    <>
      <div className={styles.btnBlink}>
        <button className={styles.btn}>{props}</button>
      </div>
    </>
  );
};

export default Button;
