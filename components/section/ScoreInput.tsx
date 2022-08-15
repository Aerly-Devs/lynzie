import React, { useState } from 'react'

const ScoreInput = () => {
  const [value, setValue] = useState('');

  const onChangeValue = (event) => {
    if (isNaN(event.target.value.substr(-1))) setValue(event.target.value);
  }

  return (
    <section>
      <article>
        <div>
          <h4>{value}</h4>
        </div>
      </article>
      <section>
        <input placeholder='Ingresar los datos' onChange={onChangeValue} />
        <div>
          <button type="button"></button>
          <button type="button"></button>
          <button type="button"></button>
          <button type="button"></button>
        </div>
        <button type="button"></button>
      </section>
    </section>
  );
}

export default ScoreInput;
