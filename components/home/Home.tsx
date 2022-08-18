import React from 'react';
import styles from '@/styles/home/Home.module.sass';

const Home = () => {
  return (
    <>
      <div className={styles.container}>
        <section className={styles["cont_header"]}>
          <div className={styles["text_header"]}>
            <h1>LYNZIE</h1>
            <p>
              ¡La plataforma que te mostrara como hacer tus mejores
              experimentos!
            </p>
            <a href="#targets">COMENZAR</a>
          </div>
          <div className={styles["img_header"]}>
            <img src="https://i.ibb.co/th7mxZ8/atom.png" alt="" />
          </div>
        </section>
      </div>
    </>
  );
}

export default Home;
