import Head from 'next/head';
import React from 'react';
import MainPasosElefante from '@/templates/section/MainPasosElefante';

const pasosEleante = () => {
  return (
    <>
      <Head>
        <title>Pasos experimento Pasta de Elefante</title>
      </Head>
      <MainPasosElefante />
    </>
  )
}

export default pasosEleante;
