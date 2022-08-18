import Head from 'next/head';
import React from 'react';
import MainPasosLampara from '@/templates/section/MainPasosLampara';
import styles from '@/styles/section/PasosLampara.module.scss';

const pasosLamp = () => {
  return (
    <>
      <Head>
        <title>Pasos experimento Lampara de Lava | Lynzie</title>
      </Head>
      <MainPasosLampara />
    </>
  )
}

export default pasosLamp;
