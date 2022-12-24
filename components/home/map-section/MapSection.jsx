import * as React from "react";
import Map from "../../../images/home/map-section/map.inline.svg";
import styles from "./mapSection.module.scss";

const MapSection = () => {
  return (
    <div className={`flex flex-column ${styles.mapSection}`}>
      <div className={`w-100 ${styles.mapTitle} flex-j-c`}>
        <h2 className="h2 text--primary">
          More Than 15 Locations, All Over The World
        </h2>
      </div>
      <div className={`w-100 ${styles.mapSubTitle} flex-j-c`}>
        <p className="body-1 text--secondary">
          Choose Whatever Location Best Suits Your Business: Get a VPS Closer to
          Your Users, Remove Latency
        </p>
      </div>
      <Map className={styles.map} />
    </div>
  );
};

export default MapSection;
