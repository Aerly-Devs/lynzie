import React from 'react';

const PasosLampara = ({ styles }) => {
  return (
    <section className={styles["pasos_container"]}>
      <div id="paso1" className={styles.paso}>
        <img src="https://i.ibb.co/bKHYTqd/perspective-matte.png" alt="" />
        <h2>Paso 1</h2>
        <p>Tener los materiales que se usaran para el experimento</p>
        <ul>
          <li>
            <b>- Vinagre</b>
          </li>
          <li>
            <b>- Bicarbonato de Sodio</b>
          </li>
          <li>
            <b>- Aceite de Cocina</b>
          </li>
          <li>
            <b>- Colorante</b>
          </li>
          <li>
            <b>- Frasco de vidrio transparente</b>
          </li>
        </ul>
        <a href="#paso2">SIGUIENTE PASO</a>
      </div>
      <div id="paso2" className={styles.paso}>
        <img src="https://i.ibb.co/bKHYTqd/perspective-matte.png" alt="" />
        <h2>Paso 2</h2>
        <p>
          Colocar el frasco de vidrio y hecharle una cucharada grande
          Bicarbonato de Sodio
        </p>
        <a href="#paso3">SIGUIENTE PASO</a>
        <a href="#paso1">REGRESAR AL PASO ANTERIOR</a>
      </div>
      <div id="paso3" className={styles.paso}>
        <img src="https://i.ibb.co/bKHYTqd/perspective-matte.png" alt="" />
        <h2>Paso 3</h2>
        <p>
          Luego de haber hechado la cucharada grande de bicarbonato de
          sodio, debemos hecharle el aceite de cocina, hasta llenar casi por
          completo el frasco de vidrio
        </p>
        <a href="#paso4">SIGUIENTE PASO</a>
        <a href="#paso2">REGRESAR AL PASO ANTERIOR</a>
      </div>
      <div id="paso4" className={styles.paso}>
        <img src="https://i.ibb.co/bKHYTqd/perspective-matte.png" alt="" />
        <h2>Paso 4</h2>
        <p>
          Luego de haber llenado el frasco de vidrio con el aceite de
          cocina, en un recipiente aparte hay que revolver un poco de
          colorante con un poco de Vinagre
        </p>
        <a href="#paso5">SIGUIENTE PASO</a>
        <a href="#paso3">REGRESAR AL PASO ANTERIOR</a>
      </div>
      <div id="paso5" className={styles.paso}>
        <img src="https://i.ibb.co/bKHYTqd/perspective-matte.png" alt="" />
        <h2>Paso 5</h2>
        <p>
          Por ultimo debemos colocar el frasco de vidrio sobre una
          superficie de luz que sea un poco fuerte, y colocarle el vinagre
          con el colorante ya mesclado del paso anterior.
        </p>
        <a href="#paso6">RESULTADO FINAL</a>
        <a href="#paso4">REGRESAR AL PASO ANTERIOR</a>
      </div>
      <div id="paso6" className={styles.paso}>
        <h2>Resultado Final</h2>
        <div className={styles["r_final"]}>
          <img src="https://i.ibb.co/sRcMw47/lampara.png" alt="" />
        </div>
        <a href="#paso5">REGRESAR AL PASO ANTERIOR</a>
      </div>
    </section>
  );
}

export default PasosLampara;
