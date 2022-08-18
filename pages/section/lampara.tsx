import Footer from '@/components/Footer';
import MainLampara from '@/templates/section/MainLampara';
import Head from 'next/head';
import React from 'react'

const lampara = () => {
  return (
    <>
      <Head>
        <title>Lampara de Lava | Lynzie</title>
      </Head>
      <MainLampara />
      <Footer />
    </>
  )
}

export default lampara;
