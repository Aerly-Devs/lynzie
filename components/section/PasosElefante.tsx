import React from 'react'

const PasosElefante = ({ styles }) => {
  return (
    <section className={styles["pasos_container"]}>
      <div id="paso1" className={styles.paso}>
        <img src="https://i.ibb.co/7SGLMzB/perspective-matte.png" alt="" />
        <div>
          <h2>Paso 1</h2>
          <p>Tener los materiales que se usaran para el experimento</p>
          <ul>
            <li>
              <b>- Levadura seca</b>
            </li>
            <li>
              <b>- Agua oxigena con concentración %3</b>
            </li>
            <li>
              <b>- Agua tibia</b>
            </li>
            <li>
              <b>- Jabón liquido para lavar trastes</b>
            </li>
            <li>
              <b>- Una botella de vidrio</b>
            </li>
            <li>
              <b>- Colorante vegetal</b>
            </li>
          </ul>
          <a href="#paso2">SIGUIENTE PASO</a>
        </div>
      </div>
      <div id="paso2" className={styles.paso}>
        <img src="https://i.ibb.co/7SGLMzB/perspective-matte.png" alt="" />
        <div>
          <h2>Paso 2</h2>
          <p>
            En un recipiente se debe de mezclar 3 cucharadas de agua tibia con
            levadura, luego se revolvera y por ultimo déjarlo reposar.
          </p>
          <a href="#paso3">SIGUIENTE PASO</a>
          <a href="#paso1">REGRESAR AL PASO ANTERIOR</a>
        </div>
      </div>
      <div id="paso3" className={styles.paso}>
        <img src="https://i.ibb.co/7SGLMzB/perspective-matte.png" alt="" />
        <div>
          <h2>Paso 3</h2>
          <p>
            Luego de revolver el agua con la levadura debemos añadir jabón
            líquido, colorante alimenticio y un ½ taza de agua oxigenada en la
            botella de vidrio.
          </p>
          <a href="#paso4">SIGUIENTE PASO</a>
          <a href="#paso2">REGRESAR AL PASO ANTERIOR</a>
        </div>
      </div>
      <div id="paso4" className={styles.paso}>
        <img src="https://i.ibb.co/7SGLMzB/perspective-matte.png" alt="" />
        <div>
          <h2>Paso 4</h2>
          <p>
            por ultimo, despues de haber realizado los pasos anteriores tenemos
            que verter la mezcla de la levadura con agua tibia en la botella de
            vidrio.
          </p>
          <a href="#paso6">SIGUIENTE PASO</a>
          <a href="#paso3">REGRESAR AL PASO ANTERIOR</a>
        </div>
      </div>
      <div id="paso6" className={styles.paso}>
        <div className={styles["r_final"]}>
          <img src="https://i.ibb.co/smqQWmR/elefante.png" alt="" />
        </div>
        <div>
          <h2>Resultado Final</h2>
          <p>
            El resultado final es una increible espuma de colores que puedes
            hacer en pocos minutos
          </p>
          <a href="/">PROBAR OTRO EXPERIMENTO</a>
        </div>
      </div>
    </section>
  );
}

export default PasosElefante;
