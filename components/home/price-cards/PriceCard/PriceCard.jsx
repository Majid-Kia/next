import React from "react";
import styles from "./priceCard.module.scss";
import Done from "../../../../components/icons/Done";
import Image from "next/image";
import Button from "../../../../components/buttons/Button";
import windows from "../../../../images/home/price-cards/windows.png";
const PriceCard = ({ active }) => {
  return (
    <div
      className={`${styles.priceCard} flex card ${active ? styles.active : ""}`}
    >
      <span className="text--primary-main  subtitle-1">BASIC</span>
      <ul>
        <li className="flex-a-c">
          <Done color={active ? "#fff" : "#04184B"} />
          <span className="text--primary body-1"> 2 CPU</span>
          <span className="body-2 text--secondary"> Cores</span>
        </li>
        <li className="flex-a-c">
          <Done color={active ? "#fff" : "#04184B"} />

          <span className="text--primary body-1"> 2 GB </span>
          <span className="body-2 text--secondary"> Memory</span>
        </li>
        <li className="flex-a-c">
          <Done color={active ? "#fff" : "#04184B"} />

          <span className="text--primary body-1"> 30 GB </span>
          <span className="body-2 text--secondary"> NVME/SSD Storage</span>
        </li>
        <li className="flex-a-c">
          <Done color={active ? "#fff" : "#04184B"} />
          <span className="text--primary body-1"> 3 TB </span>
          <span className="body-2 text--secondary"> Bandwidth</span>
        </li>
        <li className="flex-a-c">
          <Done color={active ? "#fff" : "#04184B"} />

          <span className="text--primary body-1"> 1 GBPS </span>
          <span className="body-2 text--secondary"> Connection</span>
        </li>
      </ul>
      <hr />
      <div className={styles.priceInfo}>
        <div className="flex-a-c justify-space-between">
          <div className="semi-bold  text--primary ">
            <span className="h5">$</span>
            7.95 <span className="h5 text--grey-400">/m</span>
          </div>
          <Image src={windows} width={42} height={42} alt="windows logo" />
        </div>
        <div className="mt-8 body-2 text--grey-400">
          or{" "}
          <span className="subtitle-2 text--secondary">
            $9.95<span className="text--grey-400">/m</span>
          </span>{" "}
          billed monthly
        </div>
      </div>
      <Button
        className={`${styles.getBtn} btn-large text--white`}
        text="get started"
        type={active ? "secondary" : "primary-outline"}
      />
    </div>
  );
};

export default PriceCard;
