import type { NextPage } from "next";
import Head from "next/head";
import styles from "../styles/Home.module.scss";
import Image from "next/image";
import main from "../public/max.jpg";
import main2 from "../public/max2.jpg";
import main3 from "../public/max3.jpg";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import Countdown from "react-countdown";

import { Component, useEffect, useState } from "react";

const Home: NextPage = () => {
  const [rehydration, setRehydration] = useState<boolean>(false);

  useEffect(() => {
    setRehydration(true);
  }, [rehydration]);

  if (!rehydration) {
    return null;
  } else
    return (
      <div className={styles.container}>
        <Head>
          <title>Max Gray Foundation</title>
          <meta name="title" content="Max Gray Foundation" />
          <meta
            name="description"
            content="In memory of our beloved Max Gray"
          />

          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://metatags.io/" />
          <meta property="og:title" content="Max Gray Foundation" />
          <meta
            property="og:description"
            content="In memory of our beloved Max Gray"
          />
          <meta
            property="og:image"
            content="https://metatags.io/assets/meta-tags-16a33a6a8531e519cc0936fbba0ad904e52d35f34a46c97a2c9f6f7dd7d336f2.png"
          />

          <meta property="twitter:card" content="summary_large_image" />
          <meta property="twitter:url" content="https://metatags.io/" />
          <meta property="twitter:title" content="Max Gray Foundation" />
          <meta
            property="twitter:description"
            content="In memory of our beloved Max Gray"
          />
          <meta
            property="twitter:image"
            content="https://metatags.io/assets/meta-tags-16a33a6a8531e519cc0936fbba0ad904e52d35f34a46c97a2c9f6f7dd7d336f2.png"
          />
        </Head>
        {/* <Navbar /> */}
        <main className={styles.mainContainer}>
          <section className={styles.section1}>
            <div className={`${styles.heroContainer} header`} id="titleRf">
              <h1>Max Gray Foundation</h1>
              <h2>Coming Soon</h2>
              <h3>
                We are excited to announce the launch of Max Gray foundation.
              </h3>
              <div className={styles.heroButtonContainer}>
                <button>Stay tuned! We are already in development.</button>

                <Countdown date="2022-11-16T00:00:00"></Countdown>
              </div>
            </div>

            <div className={styles.maxImage}>
              <Carousel
                autoPlay
                animationHandler="fade"
                renderArrowNext={() => false}
                renderArrowPrev={() => false}
                renderIndicator={() => false}
                showStatus={false}
                infiniteLoop={true}
                showThumbs={false}
              >
                <Image
                  src={main}
                  className={styles.maxImage}
                  alt="max"
                  layout="responsive"
                />
                <Image
                  src={main2}
                  className={styles.maxImage}
                  alt="max"
                  layout="responsive"
                />
                <Image
                  src={main3}
                  className={styles.maxImage}
                  alt="max"
                  layout="responsive"
                />
              </Carousel>
            </div>
          </section>
        </main>
      </div>
    );
};

export default Home;
