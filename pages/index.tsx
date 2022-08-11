import React from 'react';
import Head from 'next/head';
import { NextPage } from "next";
import Navbar from "@/components/Navbar";

const Home: NextPage = () => {
  return (
    <React.Fragment>
      <Head>
        <title>Home | Lynzie</title>
      </Head>
      <Navbar />
    </React.Fragment>
  );
}

export default Home;
