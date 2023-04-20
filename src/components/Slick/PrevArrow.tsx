import React, { FC } from "react";
import Image from "next/image";
import styles from "./Slick.module.scss";

type Props = {
  onClick: () => void;
};

const PrevArrow: FC<Props> = ({ onClick }) => {
  return (
    <div className={styles.prevArrow} onClick={onClick}>
      <Image
        src={"/media/prevArrow.png"}
        alt={"Prev Arrow"}
        height={40}
        width={40}
      />
    </div>
  );
};

export default PrevArrow;
