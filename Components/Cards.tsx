import React from "react";
import styles from "../styles/Component.module.scss";
import Image from "next/image";

const Cards = () => {
  return (
    <>
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
          <Image
            src="/testimonial-1.png"
            alt="testimonial"
            width={600}
            height={450}
            layout="responsive"
            loading="lazy"
          />
        </div>
      </div>
    </>
  );
};

export default Cards;
