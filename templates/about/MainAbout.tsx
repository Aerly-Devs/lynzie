import Description from '@/components/about/Description';
import Targets from '@/components/about/Targets';
import Tecnologies from '@/components/about/Tecnologies';
import styles from "@/styles/about/About.module.scss";
import React from 'react';

const MainAbout = () => {
  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <Description styles={styles} />
        <div className={styles.cards}>
          <Targets />
        </div>
        <Tecnologies styles={styles} />
      </div>
    </main>
  );
}

export default MainAbout;
