import React, { FC } from "react";
import Image from "next/image";
import styles from "./RadiusSlick.module.scss";

type Props = {
  onClick: () => void;
};

const NextArrow: FC<Props> = ({ onClick }) => {
  return (
    <div className={styles.nextArrow} onClick={onClick}>
      <Image
        src={"/media/nextArrow.png"}
        alt={"Next Arrow"}
        height={24}
        width={24}
      />
    </div>
  );
};

export default NextArrow;
