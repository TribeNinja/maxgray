import React from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import styles from "../styles/Blog.module.scss";
import BlogItems from "../Components/BlogItems";
const Blogs = () => {
  
  return (
    <>
      <Navbar />
      <main className={styles.blogContainer}>
        <div className={styles.blogSection}>
          <BlogItems />
          <BlogItems />
          <BlogItems />
          <BlogItems />
          <BlogItems />
          <BlogItems />
          <BlogItems />
          <BlogItems />
          <BlogItems />
        </div>
        <div className={styles.eventSection}>
          <h1> This is the event section</h1>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Blogs;
