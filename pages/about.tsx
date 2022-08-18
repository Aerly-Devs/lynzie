import Head from 'next/head';
import React from 'react';
import { NextPage } from "next";
import Navbar from '@/components/Navbar';
import MainAbout from '@/templates/about/MainAbout';
import Footer from '@/components/Footer';

const About: NextPage = () => {
  return (
    <>
      <Head>
        <title>About | Lynzie</title>
      </Head>
      <Navbar />
      <MainAbout />
      <Footer />
    </>
  );
}

export default About;
