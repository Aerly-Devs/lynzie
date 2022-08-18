import Head from 'next/head';
import React from 'react';
import MainPasosLampara from '@/templates/section/MainPasosLampara';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const pasosLamp = () => {
  return (
    <>
      <Head>
        <title>Pasos experimento Lampara de Lava | Lynzie</title>
      </Head>
      <MainPasosLampara />
      <Footer />
    </>
  )
}

export default pasosLamp;
