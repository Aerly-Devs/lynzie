import React from 'react';

const Description = ({ styles }) => {
  return (
    <>
      <div className={styles.paragraph}>
        <h2 className={styles.title}>About</h2>
        <p className={styles["description-text"]}>
          Desarrolladores que estuvieron a cargo de la creacion de la aplicacion
          “LYNZIE”
        </p>
      </div>
      <div className={styles.paragraph}>
        <h2 className={styles.title}>Desarrollo y Diseño de la aplicación</h2>
        <p className={styles["description-text"]}>
          Programación del sitio web, algoritmos, Secciones, diseño de interfas,
          creador de las funciones principales.
        </p>
      </div>
    </>
  );
}

export default Description;
