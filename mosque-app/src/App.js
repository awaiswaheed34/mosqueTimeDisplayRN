import styles from "./App.module.css";
import React, { useState } from "react";


const Header = () => {
  const MosqueName = "Mosque Name";
  const website = "www.mosque.com";
  const islamicDate = "1st Rabiul Awwal 1442";
  const logo = "https://images.unsplash.com/photo-1589985852029-7e7b5e1e1e7c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80";
  return (
    <div className={styles.topHeaderContainer}>
    <div className={styles.topHeader}>
      <div className={styles.mosqueDetails}>
        <p>{MosqueName}</p>
        <p>{website}</p>
        <p>{islamicDate}</p>
      </div>
      <div className={styles.masjidLogo}>
        <img src={logo} alt="masjidlogo" />
      </div>
    </div>
    </div>
  );
};

const ImagePoster = () => {
  const [poster, setPoster] = useState(1);
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
    <div className={styles.posterContainer}>
      <img className={styles.posterImage} src={posterPath} alt={posterPath} />
    </div>
  );
};

const Namaz = (props) => {
  return (
    <div className={styles.prayerDetails}>
      <p className={styles.namazName}>{props.name}</p>
      <p className={styles.namazTime}>{props.time}</p>
      <p className={styles.namazBegining}>{props.begining}</p>
    </div>
  );
}

function App() {
  return (
    <div className={styles.container}>
      <Header />
      <ImagePoster />
      <div className={styles.prayerTimesContainer}>
      <div className={styles.prayerTimes}>
        <Namaz name="Fajar" time="5:00 AM" begining="Begining 5:00" />
        <Namaz name="Zuhar" time="5:00 AM" begining="Begining 5:00" />
        <Namaz name="Asar" time="5:00 AM" begining="Begining 5:00" />
        <Namaz name="Maghrib" time="5:00 AM" begining="Begining 5:00" />
        <Namaz name="Isha" time="5:00 AM" begining="Begining 5:00" />
        <Namaz name="Jummah" time="5:00 AM" begining="Begining 5:00" />
        <Namaz name="Sehri" time="5:00 AM" begining="Begining 5:00" />
        <Namaz name="Sunrise" time="5:00 AM" begining="Begining 5:00" />
        <Namaz name="Zawal" time="5:00 AM" begining="Begining 5:00" />
     </div>
    </div>
    </div>
  );
}

export default App;
