import React from 'react';
import Link from 'next/link';
import '@/styles/section/Description.module.sass';

const Description = ({ styles }) => {
  return (
    <section className={styles["cont_exp"]}>
      <div className={styles.container}>
        <div className={styles["text_exp"]}>
          <h1>Lampara de Lava</h1>
          <p>
            ¿Qué es una lámpara de lava? Una lampara de lava es un recipiente
            lleno de agua en el que puedes ver como burbujas suben y bajan que,
            en función del color, pueden parecer lava volcánica. Son objetos que
            emiten una luz relajante y quedan muy bien en cualquier dormitorio.
          </p>
          <Link href="#">
            <a>COMENZAR</a>
          </Link>
        </div>
        <div className="img_exp">
          <img src="https://i.ibb.co/x54TFQ0/lava.png" alt="" />
        </div>
      </div>
    </section>
  );
}

export default Description;
