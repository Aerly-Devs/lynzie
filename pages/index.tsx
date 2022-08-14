import React from 'react';
import Head from 'next/head';
import { NextPage } from "next";
import Navbar from "@/components/Navbar";
import MainHome from '@/templates/home/MainHome';
import Footer from '@/components/Footer';

const HomePage: NextPage = () => {
  return (
    <>
      <Head>
        <title>Home | Lynzie</title>
      </Head>
      <Navbar />
      <MainHome />
      <Footer />
    </>
  );
}

export default HomePage;
