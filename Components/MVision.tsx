import React, { useEffect } from "react";
import styles from "../styles/About.module.scss";
import AOS from "aos";
import "aos/dist/aos.css";
const MVision = ({ ...props }) => {
  useEffect(() => {
    AOS.init();
  });
  return (
    <div className={styles.MVContainer}>
      <h1 data-aos="fade-up" data-aos-mirror="true" data-aos-duration="500">
        {props.title}
      </h1>
      <p data-aos="fade-up" data-aos-mirror="true" data-aos-duration="500">
        {props.description}
      </p>
    </div>
  );
};
export default MVision;
