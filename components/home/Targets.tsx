import React from 'react';
import Link from 'next/link';

const Targets = ({ styles }) => {
  return (
    <section className={styles.ecuaciones}>
      <h2>Ecuaciónes Quimicas</h2>
      <div className={styles["targets_container"]}>
        <figure className={styles.target}>
          <div className={styles["text_target"]}>
            <h3>Balanceo</h3>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorum,
              nostrum?
            </p>
            <Link href="#">
              <a>COMENZAR</a>
            </Link>
          </div>
        </figure>
        <figure className={styles.target}>
          <div className={styles["text_target"]}>
            <h3>Balanceo</h3>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorum,
              nostrum?
            </p>
            <Link href="#">
              <a>COMENZAR</a>
            </Link>
          </div>
        </figure>
      </div>
    </section>
  );
}

export default Targets;
