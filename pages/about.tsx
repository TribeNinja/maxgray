import React, { useState } from "react";
import Footer from "../Components/Footer";
import { useEffect } from "react";
import Navbar from "../Components/Navbar";
import styles from "../styles/About.module.scss";
import { RiCommunityFill, RiTeamFill } from "react-icons/ri";
import { MdVolunteerActivism } from "react-icons/md";
import MVision from "../Components/MVision";
import AOS from "aos";
import "aos/dist/aos.css";

const about = () => {
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
                Lorem ipsum dolor sit amet, officia excepteur ex fugiat
                reprehenderit enim labore culpa sint ad nisi Lorem pariatur
                mollit ex esse exercitation amet. Nisi animcupidatat excepteur
                officia. Reprehenderit nostrud nostrud ipsum Lorem est aliquip
                amet voluptate voluptate dolor minim nulla est proident. Nostrud
                officia pariatur ut officia. Sit irure elit esse ea nulla sunt
                ex occaecat reprehenderit commodo officia dolor Lorem duis
                laboris cupidatat officia voluptate. Culpa proident adipisicing
                id nulla nisi laboris ex in Lorem sunt duis officia eiusmod.
                Aliqua reprehenderit commodo ex non excepteur duis sunt velit
                enim. Voluptate laboris sint cupidatat ullamco ut ea consectetur
                et est culpa et culpa duis.
              </p>
            </div>
            <div className={styles.wRight}></div>
          </div>
          {/* Stats */}
          <div className={styles.statisticContainer}>
            <div className={styles.statWrapper}>
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
            </div>
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
              Lorem ipsum dolor sit amet, officia excepteur ex fugiat
              reprehenderit enim labore culpa sint ad nisi Lorem pariatur mollit
              ex esse exercitation amet. Nisi anim cupidatat excepteur officia.
              Reprehenderit nostrud nostrud ipsum Lorem est aliquip amet
              voluptate voluptate dolor minim nulla est proident. Nostrud
              officia pariatur ut officia. Sit irure elit esse ea nulla sunt ex
              occaecat reprehenderit commodo officia dolor Lorem duis laboris
              cupidatat officia voluptate. Culpa proident adipisicing id nulla
              nisi laboris ex in Lorem sunt duis officia eiusmod. Aliqua
              reprehenderit commodo ex non excepteur duis sunt velit enim.
              Voluptate laboris sint cupidatat ullamco ut ea consectetur et est
              culpa et culpa duis.
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
            <div className={styles.missionImage}></div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default about;
