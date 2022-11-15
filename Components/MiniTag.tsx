import React from "react";
import { AiFillStar } from "react-icons/ai";
import styles from "../styles/Component.module.scss";

const MiniTag = ({ ...props }) => {
  return (
    <div className={styles.Minitag}>
      <div className={styles.miniHeading}>
        <AiFillStar size={40} />
        <h1>{props.heading}</h1>
      </div>
    </div>
  );
};

export default MiniTag;
