import React, { useState } from 'react';
import Substances from '@/components/section/Substances';
import Substance from '@/components/section/Substance';
import { SideEquation, SubstanceType } from '../../index.d';

type Mode = 'Substance' | 'Quantity';

const ScoreInput = () => {
  const [stringValue, setStringValue] = useState('');
  const [numberValue, setNumberValue] = useState();
  const [mode, setMode] = useState(' Substance');

  const reagents: SideEquation = {
    type: 'reagents'
  };

  const products: SideEquation = {
    type: 'products'
  };

  const onMode = (mode: Mode) => {
    setMode(mode);
  }

  const onStringChangeValue = (event) => {
    if (isNaN(event.target.value.substr(-1)) && mode == 'Substance') setStringValue(event.target.value);
  }

  const onNumberChangeValue = event => {
    if (!isNaN(event.target.value.substr(-1)) && mode == "Quantity") setNumberValue(event.target.value);
  }

  return (
    <section>
      <article>
        <div>
          <h4>
            <Substances id={reagents.type}>
              <Substance value={stringValue} quantity={numberValue}/>
            </Substances>
          </h4>
          <h4>
            <Substances id={products.type}>
              <Substance value={stringValue} quantity={numberValue} />
            </Substances>
          </h4>
        </div>
      </article>
      <section>
        <input placeholder='Ingresar los datos' onChange={onStringChangeValue || onNumberChangeValue} />
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
