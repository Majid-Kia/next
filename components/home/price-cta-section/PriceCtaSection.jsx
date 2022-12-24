import React from "react";
import styles from "./priceCta.module.scss";
import Button from "components/buttons/Button";

const PriceCtaSection = () => {
  return (
    <div
      className={`flex justify-space-between flex-a-c ${styles.priceCtaCard}`}
    >
      <div className={`flex flex-column ${styles.priceCtaTitleAndContent}`}>
        <div className={`w-100 ${styles.priceCtaTitle}`}>
          <h2 className="h4 text--white">
            Don't Miss Out on the Ultimate VPS!
          </h2>
        </div>
        <div className={`w-100 text--grey-A400`}>
          <p className="body1">
            Explore Cloudzy's VPS hosting solutions and choose one that best
            suits your needs. Contact us and we will help you find the perfect
            fit for you!
          </p>
        </div>
      </div>
      <div className={`${styles.priceCtaAction}`}>
        <Button
          text="CONTACT US"
          type="secondary"
          className="text--white btn-large"
        />
      </div>
    </div>
  );
};

export default PriceCtaSection;
