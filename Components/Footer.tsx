import React from "react";
import Image from "next/image";
import sign from "../public/max-sign.png";
import styles from "../styles/Component.module.scss";
import {
  AiFillInstagram,
  AiTwotoneMail,
  AiOutlineWhatsApp,
} from "react-icons/ai";

const Footer = () => {
  return (
    <footer className={styles.footerContainer}>
      <div className={styles.top}>
        <div className={styles.footerLogo}>
          <Image
            src={sign}
            className={styles.maxImage}
            alt="max"
            // height={280}
            // width={368}
            style={{
              width: "30%",
              minHeight: "20vh",
            }}
            layout="responsive"
          />
        </div>
        <div>
          <h3>Contact</h3>
          <ul>
            <li>mgfoundation@gmail.com</li>
            <li>+1 234 5678 90</li>
          </ul>
        </div>
        <div>
          <h3>Social Handles</h3>
          <div>
            <AiFillInstagram size={30} />
            <AiOutlineWhatsApp size={30} />
            <AiTwotoneMail size={30} />
          </div>
        </div>
        <div className={styles.lastColumn}>
          <h3>Donate</h3>
          {/* <Image src="./qrcode.png" /> */}
        </div>
      </div>
      <div className={styles.bottom}>
        <p>© 2022 Max Gray Foundation</p>
        <p>All rights reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
