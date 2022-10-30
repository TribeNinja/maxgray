import React, { useEffect, useRef, useState } from "react";
import styles from "../styles/Component.module.scss";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const Navbar = () => {
  const ref = useRef(null);
  useEffect(() => {
    gsap.to("#desktopNav", {
      scrollTrigger: {
        trigger: "#desktopNav",
        markers: true,
        start: "1000%",
        end: "100%",
        toggleActions: "play reverse",
        onEnter: () =>
          gsap.to("#desktopNav", {
            backgroundImage: "linear-gradient(to bottom, #093a3a, #000)",
          }),
        onEnterBack: () =>
          gsap.to("#desktopNav", {
            backgroundImage:
              "linear-gradient(to bottom, transparent, transparent)",
          }),
      },
    });
  }, [ref]);

  const [toggle, setToggle] = useState<boolean>(false);
  return (
    <>
      <div className={styles.navContainer} id="desktopNav" ref={ref}>
        <div className={styles.logoContainer}>
          <img src="/max-sign.png" />
        </div>
        <div className={styles.menuContainer}>
          <ul>
            <li>Home</li>
            <li>About Us</li>
            <li>Blog/Events</li>
            <li>Artwork</li>
          </ul>
        </div>
        <div className={styles.loginContainer}>
          <p>Donate Now</p>
        </div>
      </div>
      <div
        className={styles.burgerContainer}
        onClick={() => {
          setToggle(!toggle);
        }}
      >
        <div className={styles.line}></div>
        <div className={styles.line}></div>
        <div className={styles.line}></div>
      </div>
      {toggle && (
        <div className={styles.mobNavContainer}>
          <ul>
            <div
              className={styles.sideBarCloseButton}
              onClick={() => {
                setToggle(!toggle);
              }}
            ></div>
            <li>HOME</li>
            <li>ABOUT US</li>
            <li>SERVICES</li>
            <li>CAREER</li>
            <li>CONTACT</li>
          </ul>
        </div>
      )}
    </>
  );
};

export default Navbar;
