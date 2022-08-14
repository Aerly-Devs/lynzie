import React from 'react';
import styles from '@/styles/home/Targets.module.sass';
import Link from 'next/link';

const Targets = () => {
  return (
    <section className={styles["Targets-container"]}>
      <div className={styles.title}>
        <h2>Ecuaciones Químicas</h2>
      </div>
      <section className={styles.targets}>
        <article className={styles["first-target"]}>
          <h3>Balanceo</h3>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorum,
            nostrum?
          </p>
          <button>
            <Link href="/">
              <a>COMENZAR</a>
            </Link>
          </button>
        </article>
        <article className={styles["second-target"]}>
          <h3>Balanceo</h3>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorum,
            nostrum?
          </p>
          <button>
            <Link href="/">
              <a>COMENZAR</a>
            </Link>
          </button>
        </article>
      </section>
    </section>
  );
}

export default Targets;
