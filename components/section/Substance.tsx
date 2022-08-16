import React from 'react';

const Substance = ({ value, quantity }) => {
  return (
    <>
      <div>
        <span>
          {value}
        </span>
        <span>
          {quantity}
        </span>
      </div>
    </>
  )
}

export default Substance;
