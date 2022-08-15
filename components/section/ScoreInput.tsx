import React, { useState } from 'react';
// import { SideEquation, Substance } from "@/score/score.model";

type Mode = 'Substance' | 'Quantity';

const ScoreInput = () => {
  const [value, setValue] = useState('');
  const [mode, setMode] = useState('Substance');

  const onMode = (mode: Mode) => {
    setMode(mode);
  }

  const onChangeValue = (event) => {
    if (isNaN(event.target.value.substr(-1)) && mode == 'Substance') setValue(event.target.value);
    if (!isNaN(event.target.value.substr(-1)) && mode == 'Quantity') setValue(event.target.value);
  }

  return (
    <section>
      <article>
        <div>
          <h4>
            {value}
          </h4>
        </div>
      </article>
      <section>
        <input placeholder='Ingresar los datos' onChange={onChangeValue} />
        <div>
          <button type="button" onClick={() => onMode('Substance')}>Sustancia</button>
          <button type="button" onClick={() => onMode('Quantity')}>Cantidad</button>
          <button type="button" onClick={() => {}}>+</button>
          <button type="button" onClick={() => {}}>--{'>'}</button>
        </div>
        <button type="button"></button>
      </section>
    </section>
  );
}

export default ScoreInput;
