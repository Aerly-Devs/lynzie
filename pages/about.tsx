import Head from 'next/head';
import React from 'react';
import Navbar from '@/components/Navbar';

const About = () => {
  return (
    <React.Fragment>
      <Head>
        <title>About | Lynzie</title>
      </Head>
      <Navbar />
      <div>About</div>
    </React.Fragment>
  );
}

export default About;
