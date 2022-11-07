import React from "react";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";
import styles from "../styles/Artwork.module.scss";
const artwork = () => {
  return (
    <>
      <Navbar />
      <main className={styles.artworkContainer}>
        <div className={styles.artworkWrapper}>Hello</div>
      </main>
      <Footer />
    </>
  );
};

export default artwork;
