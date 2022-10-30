import React from "react";
import styles from "../styles/Component.module.scss";

const Cards = () => {
  return (
    <div className={styles.cardContainer}>
      <div className={styles.left}>
        <div className={styles.tagline}>
          <p>My Story</p>
        </div>
        <div className={styles.title}>This is the title.</div>
        <div className={styles.quote}>
          <i>This is a quotation in italics.</i>
        </div>
      </div>
      <div className={styles.right}>
        <img src="/testimonial-1.png" />
      </div>
    </div>
  );
};

export default Cards;
