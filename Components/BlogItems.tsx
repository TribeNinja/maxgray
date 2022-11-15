import Image from "next/image";
import React from "react";
import styles from "../styles/Component.module.scss";

const BlogItems = () => {
  return (
    <div className={styles.blogItemContainer}>
      <div className={styles.blogText}>
        <h2>Blog Title</h2>
        <h4>This is the description of the blog.</h4>
      </div>
      <div className={styles.blogItemImage}>
        <Image
          src="https://dl.dropboxusercontent.com/s/mwq4nxk43yhxzl0/o_O.png"
          width={"100%"}
          height={"100%"}
          layout="responsive"
        />
      </div>
    </div>
  );
};

export default BlogItems;
