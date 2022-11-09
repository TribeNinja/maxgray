import type { NextPage } from "next";
import Head from "next/head";
import MiniTag from "../Components/MiniTag";
import Navbar from "../Components/Navbar";
import styles from "../styles/Home.module.scss";
import Image from "next/image";
import main from "../public/max.jpg";
import main2 from "../public/max2.jpg";
import main3 from "../public/max3.jpg";
import { gsap } from "gsap";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import Countdown from "react-countdown";
import { Suspense, useEffect, useRef, useState } from "react";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import Footer from "../Components/Footer";
import Link from "next/link";
import dynamic from "next/dynamic";
gsap.registerPlugin(ScrollTrigger);

const Gallery = dynamic(() => import("../Components/Gallery"), {
  suspense: true,
  ssr: false,
});

const Demo: NextPage = () => {
  const titleRef = useRef(null);
  const aboutRef = useRef(null);

  useEffect(() => {
    // Title Animation
    gsap.fromTo(
      ".header",
      {
        opacity: 0,
        y: 100,
        duration: 1,
      },
      { opacity: 1, y: 0, duration: 1 }
    );

    // HeroSlogan
    gsap.to("#about", {
      scrollTrigger: {
        trigger: "#about",
        // markers: true,
        start: "-25%",
        end: "-25%",
        toggleActions: "play reverse",
        onEnter: () =>
          gsap.fromTo(
            "#about",
            {
              opacity: 0,
              x: 200,
              duration: 1,
            },
            { opacity: 1, x: 0, duration: 1 }
          ),
        onEnterBack: () =>
          gsap.fromTo(
            "#about",
            {
              opacity: 1,
              x: 0,
              duration: 1,
            },
            { opacity: 0, x: 200, duration: 1 }
          ),
      },
    });
  }, [titleRef]);
  return (
    <div className={styles.container} ref={titleRef}>
      <Head>
        <title>Max Gray Foundation</title>
        <meta name="title" content="Max Gray Foundation" />
        <meta name="description" content="In memory of our beloved Max Gray" />

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
      <Navbar />
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
              {/* <button>Know More</button> */}
            </div>
          </div>
          <Suspense fallback="Loading">
            <div className={styles.maxImage}>
              <Carousel
                autoPlay
                animationHandler="fade"
                renderArrowNext={() => false}
                renderArrowPrev={() => false}
                renderIndicator={() => false}
                showStatus={false}
                infiniteLoop={true}
              >
                <Image
                  src={main}
                  className={styles.maxImage}
                  alt="max"
                  style={{
                    backgroundSize: "cover",
                    width: "60%",
                    height: "200vh",
                    backgroundPosition: "60% 50%",
                  }}
                  layout="responsive"
                />
                <Image
                  src={main2}
                  className={styles.maxImage}
                  alt="max"
                  style={{
                    backgroundSize: "cover",
                    width: "60%",
                    height: "200vh",
                    backgroundPosition: "60% 50%",
                  }}
                  layout="responsive"
                />
                <Image
                  src={main3}
                  className={styles.maxImage}
                  alt="max"
                  style={{
                    backgroundSize: "cover",
                    width: "60%",
                    height: "200vh",
                    backgroundPosition: "60% 50%",
                  }}
                  layout="responsive"
                />
              </Carousel>
            </div>
          </Suspense>
          {/* <Image className={styles.maxImage} src={"/max.jpg"}></Image> */}
        </section>
        <section className={styles.section2}>
          <h1>Get to know more about Max.</h1>
          <div className={styles.cardContainer}>
            <Link href="/about">
              <h1>Know More</h1>
            </Link>
          </div>
        </section>
        <section className={styles.section3} ref={aboutRef}>
          <div className={styles.canvasContainer}>
            <Suspense fallback={null}>
              <Gallery />
            </Suspense>
          </div>
          <div className={styles.aboutContainer} id="about">
            <h1>Lorem ipsum dolor sit amet.</h1>
            <p>
              Lorem ipsum dolor sit amet, officia excepteur ex fugiat
              reprehenderit enim labore culpa sint ad nisi Lorem pariatur mollit
              ex esse exercitation amet. Nisi animcupidatat excepteur officia.
              Reprehenderit nostrud nostrud ipsum Lorem est aliquip amet
              voluptate voluptate dolor minim nulla est proident.
            </p>
            <Link href="artwork">
              <p className={styles.pButton}>Check out his artworks </p>
            </Link>
          </div>
        </section>
        <section className={styles.section4}>
          <div className={styles.sectionWrapper}>
            <div className={styles.section4Left}>
              <h1>Lorem ipsum dolor sit amet.</h1>
              <p>
                Lorem ipsum dolor sit amet, officia excepteur ex fugiat
                reprehenderit enim labore culpa sint ad nisi Lorem pariatur
                mollit ex esse exercitation amet. Nisi animcupidatat excepteur
                officia. Reprehenderit nostrud nostrud ipsum Lorem est aliquip
                amet voluptate voluptate dolor minim nulla est proident.
              </p>
            </div>
            <div className={styles.section4Right}>
              <MiniTag heading="Active Support" description="" />
              <MiniTag heading="Free Functions" description="" />
              <MiniTag heading="Quick Control" description="" />
              <MiniTag heading="Simple Interface" description="" />
            </div>
          </div>
        </section>
        <section className={styles.section5}>
          <div className={styles.donateText}>
            <h1>Ready to Donate?</h1>
            <p>
              Lorem ipsum dolor sit amet, officia excepteur ex fugiat
              reprehenderit enim labore culpa sint ad nisi Lorem pariatur mollit
              ex esse exercitation amet. Nisi anim cupidatat excepteur officia.
              Reprehenderit nostrud nostrud ipsum Lorem est aliquip amet
              voluptate voluptate dolor minim nulla est proident.
            </p>
          </div>
          <div className={styles.donateImg}>
            <Image src="./qrcode.png" />
          </div>
        </section>
        <section className={styles.section6}>
          <div className={styles.formLeft}>
            <h1>How can we help you?</h1>
            <p>Feel free to contact us whenever you want.</p>
          </div>
          <div className={styles.formRight}>
            <p>
              Compulsary<span style={{ color: "#ff0000" }}>*</span>
            </p>
            <form className={styles.formContainer}>
              <div className={styles.formInputs}>
                <input type="text" placeholder="Name" />
                <input type="email" placeholder="Email" />
                <input type="address" placeholder="Address" />
                <textarea placeholder="Message" />
              </div>
              <input type="submit" value="Submit" />
            </form>
          </div>
        </section>
        <Footer />
      </main>
    </div>
  );
};

export default Demo;
