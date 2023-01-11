import React, { useState } from "react";
import styles from "./navbar.module.scss";
import logo from "../../images/nav/logo.png";
import Image from "next/image";

import Link from "next/link";

import Button from "../../components/buttons/Button";

const Navbar = () => {
  const [openNav, setOpenNav] = useState(false);
  return (
    <nav className={styles.nav}>
      <div className={`container flex-a-c ${styles["nav-wrapper"]}`}>
        <div className={styles.logo}>
          <Image src={logo} alt="Cloudzy logo" />
        </div>
        <button className="hide-laptop-up" onClick={() => setOpenNav(!openNav)}>
          <div
            className={`${styles.menuButton} ${openNav && styles.active}`}
          ></div>
        </button>
        <div
          className={`flex-a-c w-100  ${styles["navbar-items"]} ${
            openNav ? styles.active : ""
          }`}
        >
          <ul className={`flex grow-1 flex-a-c ${styles["nav-list"]}`}>
            <li>
              <Link href="/vps">VPS</Link>
            </li>
            <li>
              <Link href="/cloud">Cloud</Link>
            </li>
            <li>
              <Link href="#pricing">Pricing</Link>
            </li>
            <li>
              <Link href="/blog">Blog</Link>
            </li>
            <li>
              <Link href="/about-us">About Us</Link>
            </li>
          </ul>
          <Button
            className={`text--white btn-small ${styles["sign-in-btn"]}`}
            text="SIGN IN"
            type="primary"
          ></Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
