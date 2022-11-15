import React, { useState } from "react";
import Footer from "../Components/Footer";
import { useEffect } from "react";
import Navbar from "../Components/Navbar";
import styles from "../styles/About.module.scss";
import { RiCommunityFill, RiTeamFill } from "react-icons/ri";
import { MdVolunteerActivism } from "react-icons/md";
import MVision from "../Components/MVision";
import AOS from "aos";
import Image from "next/image";
import "aos/dist/aos.css";

const About = () => {
  useEffect(() => {
    AOS.init();
  });
  const missionVision = [
    {
      title: "Mission",
      description:
        "A real community is more than merely being physically close to someone or belonging to the same social web network. It's all about feeling connected and in control of what happens. Everyone has a vital role to play in humanity, which is our ultimate community. Our Vision is to create a community of comfort, love and life.",
    },
    {
      title: "Vision",
      description:
        "A real community is more than merely being physically close to someone or belonging to the same social web network. It's all about feeling connected and in control of what happens. Everyone has a vital role to play in humanity, which is our ultimate community. Our Vision is to create a community of comfort, love and life.",
    },
  ];
  const [click, setClick] = useState<string>(missionVision[0].title);
  const [desc, setDesc] = useState<string>(missionVision[0].description);
  const [button, setButton] = useState<string>("Vision");
  const handleClick = () => {
    if (click === missionVision[0].title) {
      setClick(missionVision[1].title);
      setDesc(missionVision[1].description);
    } else {
      setClick(missionVision[0].title);
      setDesc(missionVision[0].description);
    }
    handleButton();
  };
  const handleButton = () => {
    if (click === missionVision[1].title) {
      setButton("Vision");
    } else {
      setButton("Mission");
    }
  };
  return (
    <>
      <Navbar />
      <main>
        <div className={styles.aboutContainer}>
          {/* BANNER */}
          <div className={styles.banner}>
            <h1>About Us</h1>
          </div>
          {/* Welcome */}
          <div className={styles.welcomeContainer}>
            <div className={styles.wLeft}>
              <h1>Welcome to Max Gray Foundation</h1>
              <p>
                We&apos;re so glad you found us. We are a non-profit
                organization dedicated to helping people
              </p>
            </div>
            <div className={styles.wRight}>
              <video autoPlay loop muted>
                <source src="https://dl.dropboxusercontent.com/s/gwopcg0dtz09bce/o_O.mp4" />
              </video>
            </div>
          </div>
          {/* Stats */}
          <div className={styles.statisticContainer}>
            {/* <div className={styles.statWrapper}>
              <div className={styles.stat}>
                <RiCommunityFill size={50} color={"#000"} />
              </div>
              <div className={styles.statText}>
                <h1>12345</h1>
                <p>Community</p>
              </div>
            </div>
            <div className={styles.statWrapper}>
              <div className={styles.stat}>
                <MdVolunteerActivism size={50} color={"#000"} />
              </div>
              <div className={styles.statText}>
                <h1>12345</h1>
                <p>Volunteer</p>
              </div>
            </div>
            <div className={styles.statWrapper}>
              <div className={styles.stat}>
                <RiTeamFill size={50} color={"#000"} />
              </div>
              <div className={styles.statText}>
                <h1>12345</h1>
                <p>Our Team</p>
              </div>
            </div> */}
          </div>
          {/* Become a volunteer */}
          <div className={styles.volunteerContainer}>
            <h1
              data-aos="fade-up"
              data-aos-mirror="true"
              data-aos-duration="500"
            >
              We help many people
            </h1>
            <h2
              data-aos="fade-up"
              data-aos-mirror="true"
              data-aos-duration="500"
            >
              Want to become a volunteer?
            </h2>
            <p
              data-aos="fade-up"
              data-aos-mirror="true"
              data-aos-duration="500"
            >
              We are currently looking for volunteers to help with our outreach
              efforts. If you have experience in marketing or public relations,
              we would love to have your help spreading the word about our
              organization!
            </p>
            <button>
              <h2>Join Now</h2>
            </button>
          </div>
          {/* Mission & Vision*/}
          <div className={styles.missionContainer}>
            <div className={styles.missionText}>
              <MVision title={click} description={desc} />
              <button onClick={handleClick}>Our {button}</button>
            </div>
            <div className={styles.missionImage}>
              <div className={styles.theImage}>
                <Image
                  src="https://dl.dropboxusercontent.com/s/lz7s48kqkolwmn2/o_O.jpg"
                  layout="fill"
                  objectFit="contain"
                />
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default About;
