import React from 'react';
import Head from 'next/head';
import Navbar from '@/components/Navbar';
import Score from "@/templates/section/Score";
import Footer from '@/components/Footer';

const tanteo = () => {
  return (
    <>
      <Head>
        <title>Tanteo | Lynzie</title>
      </Head>
      <Navbar />
      <Score />
      <Footer />
    </>
  )
}

export default tanteo;
