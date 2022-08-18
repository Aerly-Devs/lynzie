import React from 'react';
import Link from 'next/link';

const Targets = ({ styles }) => {
  return (
    <section id="targets" className={styles.ecuaciones}>
      <h2>EXPERIMENTOS</h2>
      <div className={styles["targets_container"]}>
        <figure className={styles.target}>
          <div className={styles["text_target"]}>
            <h3>Lampara de lava</h3>
            <p>
              Son objetos que emiten una luz relajante y quedan muy bien en
              cualquier dormitorio.
            </p>
            <Link href="/section/lampara">
              <a>COMENZAR</a>
            </Link>
          </div>
        </figure>
        <figure className={styles.target}>
          <div className={styles["text_target"]}>
            <h3>Pasta de Elefante</h3>
            <p>
              Se denomina dentífrico de elefante, pasta de dientes de elefante o
              volcán de espuma.
            </p>
            <Link href="/section/elefante">
              <a>COMENZAR</a>
            </Link>
          </div>
        </figure>
      </div>
    </section>
  );
}

export default Targets;
