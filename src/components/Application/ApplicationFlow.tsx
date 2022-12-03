//　申込の流れ
import React from "react";
import Link from "next/link";
import Image from "next/image";
import ApplicationOutline from "./ApplicationOutline";
import Step_01 from "./step_01";
import Step_02 from "./step_02";
import Step_03 from "./step_03";
import Step_04 from "./step_04";
import styles from "../../styles/Application/Application.module.scss";

export default function ApplicationFlow() {
  const ApplicationFlowItems = {
    title: "経歴",
    subTitle: "デザイナー&エンジニアとしてのこれまで",
  };
  return (
    <>
      <div className={styles.applicationFlowArea}>
        <h2 id="#ApplicationFlow" className={styles.applicationFlowMainTitle}>
          {ApplicationFlowItems.title}
        </h2>
        <h3 className={styles.applicationFlowSubTitle}>
          {ApplicationFlowItems.subTitle}
        </h3>
        <ApplicationOutline />
        <hr />
        <Step_01 />
        <hr />
        <Step_02 />
        <hr />
        <Step_03 />
        <hr />
        <Step_04 />
      </div>
    </>
  );
}
