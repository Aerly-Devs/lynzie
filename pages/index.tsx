import React from 'react';
import Head from 'next/head';
import { NextPage } from "next";
import Navbar from "@/components/Navbar";
import Home from '@/components/home/Home';

const HomePage: NextPage = () => {
  return (
    <>
      <Head>
        <title>Home | Lynzie</title>
      </Head>
      <Navbar />
      <Home />
    </>
  );
}

export default HomePage;
