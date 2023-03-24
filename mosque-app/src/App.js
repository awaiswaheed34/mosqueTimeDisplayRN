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
        if (poster === 5) {
          return 1;
        } else {
          return poster + 1;
        }
      });
    }, posterChangeTime);
  }, [poster]);
  const posterPath = `./posters/${poster}.jpeg`;
  return (
    <div className={styles.posterImage}>
      <img src={posterPath} className="App-logo" alt={posterPath} />
    </div>
  );
};

const FajarTime = () => {
  return (
    <div className={styles.prayerDetails}>
      <p>Fajar</p>
      <p>5:00 AM</p>
      <p>Begining 5:00</p>
    </div>
  );
};

const ZoharTime = () => {};

const AsarTime = () => {};

const MaghribTime = () => {};
const IshaTime = () => {};
const Jummah = () => {};

const SehriTime = () => {};

const Sunrise = () => {};
const Zawal = () => {};

function App() {
  return (
    <div className={styles.body}>
      <Header />
      <div className={styles.information}>
        <ImagePoster />
        <div className={styles.timeTable}>
          <FajarTime />
          <ZoharTime />
          <AsarTime />
          <MaghribTime />
          <IshaTime />
          <Jummah />
          <SehriTime />
          <Sunrise />
          <Zawal />
        </div>
      </div>
    </div>
  );
}

export default App;
