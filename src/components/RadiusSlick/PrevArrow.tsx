import React, { FC } from "react";
import Image from "next/image";
import styles from "./RadiusSlick.module.scss";

type Props = {
  onClick: () => void;
};

const PrevArrow: FC<Props> = ({ onClick }) => {
  return (
    <div className={styles.prevArrow} onClick={onClick}>
      <Image
        src={"/media/prevArrow.png"}
        alt={"Prev Arrow"}
        height={24}
        width={24}
      />
    </div>
  );
};

export default PrevArrow;
