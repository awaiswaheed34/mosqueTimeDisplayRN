import styles from "./App.module.css";
import React, { useState } from "react";

const Header = () => {
  const MosqueName = "MOSQUE NAME";
  const website = "www.mosque.com";
  const islamicDate = "Islamic Date";
  return (
    <div className={styles.topHeader}>
      <div className={styles.mosqueDetails}>
        <p>{MosqueName}</p>
        <p>{website}</p>
        <p>{islamicDate}</p>
      </div>
      <div className={styles.masjidLogo}>
        <img src="masjidLogo.jpeg" alt="masjidlogo" />
      </div>
    </div>
  );
};

const ImagePoster = () => {
  const [poster, setPoster] = useState(1);
  //change poster every 60 seconds
  const posterChangeTime = 2 * 1000;
  useState(() => {
    setInterval(() => {
      setPoster((poster) => {
        if (poster === 2) {
          return 1;
        } else {
          return poster + 1;
        }
      });
    }, posterChangeTime);
  }, [poster]);
  const posterPath = `./posters/${poster}.jpg`;
  return (
    <div>
      <img className={styles.posterImage} src={posterPath} alt={posterPath} />
    </div>
  );
};

const ZuharTime = () => {
  return (
    <div className={styles.prayerDetails}>
      <p>Zuhar</p>
      <p>5:00 AM</p>
      <p>Begining 5:00</p>
    </div>
  );
};

const ZoharTime = () => {
  return (
    <div className={styles.prayerDetails}>
      <p>Zuhar</p>
      <p>5:00 AM</p>
      <p>Begining 5:00</p>
    </div>
  );
};

const AsarTime = () => {
  return (
    <div className={styles.prayerDetails}>
      <p>Zuhar</p>
      <p>5:00 AM</p>
      <p>Begining 5:00</p>
    </div>
  );
};

const MaghribTime = () => {
  return (
    <div className={styles.prayerDetails}>
      <p>Zuhar</p>
      <p>5:00 AM</p>
      <p>Begining 5:00</p>
    </div>
  );
};
const IshaTime = () => {
  return (
    <div className={styles.prayerDetails}>
      <p>Zuhar</p>
      <p>5:00 AM</p>
      <p>Begining 5:00</p>
    </div>
  );
};
const Jummah = () => {
  return (
    <div className={styles.prayerDetails}>
      <p>Zuhar</p>
      <p>5:00 AM</p>
      <p>Begining 5:00</p>
    </div>
  );
};

const SehriTime = () => {
  return (
    <div className={styles.prayerDetails}>
      <p>Zuhar</p>
      <p>5:00 AM</p>
      <p>Beginingssssssssssss 5:00</p>
    </div>
  );
};

const Sunrise = () => {
  return (
    <div className={styles.prayerDetails}>
      <p>Zuhar</p>
      <p>5:00 AM</p>
      <p>Begining 5:00</p>
    </div>
  );
};
const Zawal = () => {
  return (
    <div className={styles.prayerDetails}>
      <p>Zuhar</p>
      <p>5:00 AM</p>
      <p>Begining 5:00</p>
    </div>
  );
};

function App() {
  return (
    <div className={styles.body}>
      <Header />
      <div className={styles.information}>
        <div>
          <ImagePoster />
          {/* add responsiveness */}
          {/* add responsiveness */}
        </div>
        <div className={styles.timeTable}>
          <div className={styles.prayerRow}>
            <ZuharTime />
            <ZoharTime />
            <AsarTime />
          </div>
          <div className={styles.prayerRow}>
            <MaghribTime />
            <IshaTime />
            <IshaTime />
            <Jummah />
          </div>
          <div className={styles.prayerRow}>
            <SehriTime />
            <Sunrise />
            <Zawal />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
