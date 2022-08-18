import Footer from '@/components/Footer';
import Head from 'next/head';
import React from 'react'
import MainElefante from '../../templates/section/MainElefante'

const elefante = () => {
  return (
    <>
      <Head>
        <title>Pasta de Elefante | Lynzie</title>
      </Head>
      <MainElefante />
      <Footer />
    </>
  );
}

export default elefante;
