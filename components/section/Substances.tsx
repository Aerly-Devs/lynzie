import React from 'react';

const Substances = ({ id, children }) => {
  return (
    <>
      <div id={id}>
        {children}
      </div>
    </>
  )
}

export default Substances;
