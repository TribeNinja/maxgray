import React, { useCallback, useEffect, useState } from "react";
import styles from "../styles/Component.module.scss";
import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
  const [toggle, setToggle] = useState<boolean>(false);
  const [donate, setDonate] = useState<boolean>(false);

  return (
    <>
      <div className={styles.navContainer} id="desktopNav">
        <div className={styles.logoContainer}>
          <img src="/max-sign.png" />
        </div>
        <div className={styles.menuContainer}>
          <ul>
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/about">About Us</Link>
            </li>
            <li>
              <Link href="/blogs">Blogs/Events</Link>
            </li>
            <li>
              <Link href="/artwork">Artwork</Link>
            </li>
          </ul>
        </div>
        <div className={styles.donateContainer}>
          <p
            onClick={() => {
              setDonate(!donate);
            }}
          >
            Donate Now
          </p>
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
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/about">About Us</Link>
            </li>
            <li>
              <Link href="/blogs">Blogs/Events</Link>
            </li>
            <li>
              <Link href="/artwork">Artwork</Link>
            </li>
          </ul>
        </div>
      )}
      {donate && (
        <>
          <div className={styles.donatePopup}>
            <Image
              src="https://dl.dropboxusercontent.com/s/slmzgae2cztd069/o_O.png"
              width="200%"
              height="200%"
            />
            <h1
              onClick={() => {
                setDonate(!donate);
              }}
            >
              Close
            </h1>
          </div>
        </>
      )}
    </>
  );
};

export default Navbar;
