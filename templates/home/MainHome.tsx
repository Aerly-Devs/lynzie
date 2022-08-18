import React from 'react';
import Home from '@/components/home/Home';
import Targets from '@/components/home/Targets';
import styles from "@/styles/home/Targets.module.scss";

const MainHome = () => {
  return (
    <main>
      <Home />
      <div className={styles.container}>
        <Targets styles={styles} />
      </div>
    </main>
  );
}

export default MainHome;
