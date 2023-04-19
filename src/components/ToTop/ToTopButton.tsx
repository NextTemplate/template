import React, { useState } from "react";
import styles from "./ToTopButton.module.scss";
import Image from "next/image";

// 実際に実施する関数
const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};

const ToTopButton = () => {
  return (
    <section>
      <button
        className=""
        onClick={scrollToTop}
      >
        <Image
          src={"/media/totop_00.png"}
          height={100}
          width={100}
          alt={"alt"}
        />
      </button>
    </section>
  )   
}

export default ToTopButton;
