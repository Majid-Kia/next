import React, { useState } from "react";
import PriceCard from "./PriceCard/PriceCard";
import styles from "./priceCards.module.scss";

const PriceCards = () => {
  const [os, setOs] = useState("windows");
  const tabItems = ["windows", "linux"];
  return (
    <section className={`${styles.price} flex-a-c flex-column `}>
      <p className="text--secondary body-2">No Hidden Fees - No Contract.</p>
      <div className={styles.tabs}>
        {tabItems.map((tab) => (
          <button
            key={tab}
            onClick={() => setOs(tab)}
            className={`${tab === os ? styles.active : ""}`}
          >
            {tab}
          </button>
        ))}
      </div>
      <div className={`${styles.priceCards} flex flex-wrap w-100`}>
        <PriceCard />
        <PriceCard />
        <PriceCard active={true} />
        <PriceCard />
      </div>
    </section>
  );
};

export default PriceCards;
