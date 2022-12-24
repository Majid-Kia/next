import React from "react";
import Button from "../../../components/buttons/Button";
import Image from "next/image";
import headerImg from "../../../images/home/home-header.webp";
import styles from "./header.module.scss";
import ArrowDown from "../../../components/icons/ArrowDown";

const Header = () => {
  return (
    <div className={`w-100 flex flex-wrap ${styles.header}`}>
      <div className={styles.headerDescription}>
        <h1 className="h1">Cloudzy, Premium VPS Hosting Since 2008!</h1>
        <span className="text-3xl font-bold underline">Hello world!</span>
        <p className="mt-40 h6 text--secondary">
          High-Performance SSD VPS Servers Available at More than 15 Locations
          Worldwide. Get yours for as low as $7.95/month. Join 12000+ proud
          VPS-owners today!
        </p>
        <Button
          text="starting from $7.95"
          type="primary"
          className="mt-40 text--white btn-large"
        >
          <ArrowDown color="#fff" />
        </Button>
      </div>
      <div className={`${styles.headerImg} flex-c`}>
        <Image src={headerImg} alt="cloudzy home" />
        <div className={styles.feature}>
          <ul className="flex">
            <li className="flex">
              <span className="text--primary subtitle-1 ">12,000+</span>
              <span className="text--primary-main body-2 ">
                Happy Customers
              </span>
            </li>

            <li className="flex">
              <span className="text--primary subtitle-1 "> 13</span>
              <span className="text--primary-main body-2 ">
                {" "}
                Years Experience
              </span>
            </li>
            <li className="flex">
              <span className="text--primary subtitle-1 "> 7 Days</span>
              <span className="text--primary-main body-2 ">
                {" "}
                Money-Back Guarantee
              </span>
            </li>
            <li className="flex">
              <span className="text--primary subtitle-1 ">99.95% </span>
              <span className="text--primary-main body-2 "> Uptime</span>
            </li>
            <li className="flex">
              <span className="text--primary subtitle-1 ">24/7</span>
              <span className="text--primary-main body-2 ">Online Support</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
