import Head from 'next/head';
import React from 'react';
import MainPasosElefante from '@/templates/section/MainPasosElefante';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const pasosEleante = () => {
  return (
    <>
      <Head>
        <title>Pasos experimento Pasta de Elefante</title>
      </Head>
      <MainPasosElefante />
      <Footer />
    </>
  )
}

export default pasosEleante;
