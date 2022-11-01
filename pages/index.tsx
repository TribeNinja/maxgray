import type { NextPage } from "next";
import Head from "next/head";
import Cards from "../Components/Cards";
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
import { useEffect, useRef } from "react";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import Footer from "../Components/Footer";
gsap.registerPlugin(ScrollTrigger);

const Home: NextPage = () => {
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
        markers: true,
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
  }, [titleRef, ScrollTrigger]);
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
                height={1080}
                width={768}
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
                height={1080}
                width={768}
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
                height={1080}
                width={768}
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
          {/* <Image className={styles.maxImage} src={"/max.jpg"}></Image> */}
        </section>
        <section className={styles.section2}>
          <h1>Choose a way to help the people you care about</h1>
          <div className={styles.cardContainer}>
            <Cards />
            <Cards />
            <Cards />
          </div>
        </section>
        <section className={styles.section3} ref={aboutRef}>
          <div className={styles.section3Picture}></div>
          <div className={styles.aboutContainer} id="about">
            <h1>Join the platform dedicated to helping people</h1>
            <p>
              Max Gray Foundation is a community ready to help people that need
              some care or attention. In it you can find several options of
              helping people in the search for those that are lost, so that
              together we can ensure that their mental health is in their own
              great hands.
            </p>
          </div>
        </section>
        <section className={styles.section4}>
          <div className={styles.sectionWrapper}>
            <div className={styles.section4Left}>
              <h1>What makes us different from others</h1>
              <p>
                Here the important thing is the protection and felicity of the
                people. At Max Gray Foundation it is possible to quickly and
                easily create new alerts for lost animals, in addition to being
                able to find organizations that can help people with whatever
                they need.
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
              Helping people that need care to be protected, well taken care of
              and happy, offering all the necessary support so that this can
              become more and more reality.
            </p>
          </div>
          <div className={styles.donateButton}>
            <button>Start Now</button>
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

export default Home;
