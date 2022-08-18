import React from 'react';

const Tecnologies = ({ styles }) => {
  return (
    <>
      <section>
        <h3 className={styles.title}>Tecnologías que se usaron para poder crear Lynzie</h3>
        <div className={styles["technologies-container"]}>
          <figure className={styles.technology}>
            <img src="./icons/typescript.svg" alt="TypeScript icon" height="80px" width="80px" />
            <figcaption className={styles["description-text"]}>TypeScript</figcaption>
          </figure>
          <figure className={styles.technology}>
            <img src="./icons/nextdotjs.svg" alt="Next js icon" height="80px" width="80px" />
            <figcaption className={styles["description-text"]}>Next JS</figcaption>
          </figure>
          <figure className={styles.technology}>
            <img src="./icons/react.svg" alt="React icon" height="80px" width="80px" />
            <figcaption className={styles["description-text"]}>React JS</figcaption>
          </figure>
          <figure className={styles.technology}>
            <img src="./icons/javascript.svg" alt="JavaScript icon" height="80px" width="80px" />
            <figcaption className={styles["description-text"]}>JavaScript</figcaption>
          </figure>
          <figure className={styles.technology}>
            <img src="./icons/sass.svg" alt="SASS icon" height="80px" width="80px" />
            <figcaption className={styles["description-text"]}>SASS</figcaption>
          </figure>
          <figure className={styles.technology}>
            <img src="./icons/html5.svg" alt="html5 icon" height="80px" width="80px" />
            <figcaption className={styles["description-text"]}>HTML5</figcaption>
          </figure>
        </div>
      </section>
      <section>
        <div className={styles["final-container"]}>
          <div className={styles["half-text"]}>
            <h3 className={styles.title}>LYNZIE</h3>
          </div>
          <figure className={styles["half-image"]}>
            <img src="/icons/logo-removebg.png" alt="Lynzie abstract figure" />
          </figure>
        </div>
      </section>
    </>
  )
}

export default Tecnologies;
