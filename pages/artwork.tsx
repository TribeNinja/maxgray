import Image from "next/image";
import React, { Suspense, useRef } from "react";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";
import styles from "../styles/Artwork.module.scss";

import main from "../public/Artwork/1.jpg";
import main2 from "../public/Artwork/2.jpg";
import main3 from "../public/Artwork/3.jpg";
import main4 from "../public/Artwork/4.jpg";
import main5 from "../public/Artwork/5.jpg";
import main6 from "../public/Artwork/6.jpg";
const artwork = () => {
  return (
    <>
      <Navbar />
      <main className={styles.artworkContainer}>
        <div className={styles.artworkWrapper}>
          <h1>Max's Artwork</h1>
          <div className={styles.showCase}>
            <Image
              src={main}
              alt="max"
              className={styles.Images}
              layout="responsive"
              objectFit="contain"
            />
            <Image
              src={main2}
              alt="max2"
              className={styles.Images}
              layout="responsive"
              objectFit="contain"
            />
            <Image
              src={main3}
              alt="max3"
              className={styles.Images}
              layout="responsive"
              objectFit="contain"
            />
            <Image
              src={main4}
              alt="max4"
              className={styles.Images}
              layout="responsive"
              objectFit="contain"
            />
            <Image
              src={main5}
              alt="max5"
              className={styles.Images}
              layout="responsive"
              objectFit="contain"
            />
            <Image
              src={main6}
              alt="max5"
              className={styles.Images}
              layout="responsive"
              objectFit="contain"
            />
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default artwork;
