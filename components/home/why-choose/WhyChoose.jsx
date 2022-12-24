import React from "react";
import Button from "../../../components/buttons/Button";
import ArrowRight from "../../../components/icons/ArrowRight";
import Image from "next/image";
import card from "../../../images/home/why-choose-us/card.png";

import styles from "./whyChoose.module.scss";

const WhyChoose = () => {
  return (
    <div className={`${styles.whyChoose} mt-150`}>
      <div className="container">
        <div className="why-choose__title flex-a-c justify-space-between ">
          <h2 className="h2 text--primary">Why Choose Us?</h2>
          <Button
            text="join us now"
            type="primary"
            className="text--white btn-large"
          >
            <ArrowRight color="#fff" />
          </Button>
        </div>
        <div className={`${styles.whyChoose__items} flex flex-wrap w-100`}>
          <div className={`${styles.whyChoose__item}`}>
            <div className={`${styles.cardTitle} flex flex-a-c`}>
              <Image src={card} alt="card" />
              <span className="h5 text--primary">Affordable</span>
            </div>

            <p className="body-1 text--secondary ">
              Get your hands on Cloudzy's cutting-edge technology built on
              top-tier infrastructure, starting at only $7.95!
            </p>
          </div>
          <div className={`${styles.whyChoose__item}`}>
            <div className={`${styles.cardTitle} flex flex-a-c`}>
              <Image src={card} alt="server" />
              <span className="h5 text--primary">High-Performance</span>
            </div>

            <p className="body-1 text--secondary ">
              Access ultrafast SSD storage, next-generation CPU, and DDR4 RAMs
              to experience the highest performance possible!
            </p>
          </div>
          <div className={`${styles.whyChoose__item}`}>
            <div className={`${styles.cardTitle} flex flex-a-c`}>
              <Image src={card} alt="lock" />
              <span className="h5 text--primary">Safe and Secure</span>
            </div>

            <p className="body-1 text--secondary ">
              Become an insider and enjoy Cloudzy's 99.95% uptime, 24/7
              technical support team at your service, and DDoS protection.
            </p>
          </div>
          <div className={`${styles.whyChoose__item}`}>
            <div className={`${styles.cardTitle} flex flex-a-c`}>
              <Image src={card} alt="bitcoin" />
              <span className="h5 text--primary">Flexible Payment</span>
            </div>

            <p className="body-1 text--secondary ">
              Pay with any payment method you want! Cloudzy welcomes Bitcoin,
              Ethereum, Monero, and also PayPal, Mastercard, Visa, and more.
            </p>
          </div>
          <div className={`${styles.whyChoose__item}`}>
            <div className={`${styles.cardTitle} flex flex-a-c`}>
              <Image src={card} alt="fast" />
              <span className="h5 text--primary">Fast Setup</span>
            </div>

            <p className="body-1 text--secondary ">
              Select one of our pre-installed Linux distros, Windows versions,
              and applications for your VPS for a more seamless setup.
            </p>
          </div>
          <div className={`${styles.whyChoose__item}`}>
            <div className={`${styles.cardTitle} flex flex-a-c`}>
              <Image src={card} alt="dollar" />
              <span className="h5 text--primary">Full Refund</span>
            </div>

            <p className="body-1 text--secondary ">
              We are so confident in our services that you can get your whole
              money back if Cloudzy did not suit your needs within 7 days of
              usage!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyChoose;
