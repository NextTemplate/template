import React from "react";
import styles from "../../styles/Layouts/Button.module.scss";

const Button = ({ children }: any) => {
  return (
    <>
      <div className={styles.btnBlink}>
        <button className={styles.btn}>{children}</button>
      </div>
    </>
  );
}

export default Button;
