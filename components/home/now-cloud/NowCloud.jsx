import Image from "next/image";
import React from "react";
import styles from "./nowCloud.module.scss";
import Button from "../../../components/buttons/Button";
import CircleDone from "../../../components/icons/CircleDone";
import cloud from "../../../images/home/now-cloud/now-cloud.png";
const NowCloud = () => {
  return (
    <div className={`flex flex-wrap ${styles.nowCloud}`}>
      <div className={`w-100 ${styles.nowTitle} flex-j-c`}>
        <h2 className="h2 text--primary">Now Cloud!</h2>
      </div>
      <div className={styles.nowImg}>
        <Image src={cloud} width={900} height={550} alt="now cloud" />
      </div>
      <div className={styles.nowDescription}>
        <p className="body-1 text--secondary">
          We are proud to say that Cloudzy is now beyond the cloud! Launching
          our new special product, The Cloud, we guarantee you a seamless
          experience. Be the first to use Cloudzy's Cloud servers and power up
          your game. Cloud's live migration skyrockets your uptime. With fast
          deployment and resizability (easier upgrade and downgrade), you will
          enjoy your journey even more. If you are already using Cloudzy VPS,
          don't worry. We've got your back! Cloud has a lot in common with VPS.
        </p>
        <div className={`flex ${styles.features}`}>
          <ul>
            <li className="flex-a-c">
              <CircleDone color="#FF7F5C" />
              <span className="subtitle-2">High-Performance CPU</span>
            </li>
            <li className="flex-a-c">
              <CircleDone color="#FF7F5C" />
              <span className="subtitle-2">Pay As You Go</span>
            </li>
            <li className="flex-a-c">
              <CircleDone color="#FF7F5C" />
              <span className="subtitle-2">Better Storage Plans</span>
            </li>
            <li className="flex-a-c">
              <CircleDone color="#FF7F5C" />
              <span className="subtitle-2">User-Friendly Control Panel</span>
            </li>
            <li className="flex-a-c">
              <CircleDone color="#FF7F5C" />
              <span className="subtitle-2">Affordable Price</span>
            </li>
          </ul>
          <Button
            text="explore cloud"
            type="secondary"
            className="text--white btn-large"
          />
        </div>
      </div>
    </div>
  );
};

export default NowCloud;
