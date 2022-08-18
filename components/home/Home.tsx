import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from '@/styles/home/Home.module.sass';

const Home = () => {
  return (
    <section className={styles["cont_header container"]}>
      <div className={styles["text_header"]}>
        <h1>LYNZIE</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
          aperiam!
        </p>
        <Link href="#">
          <a>COMENZAR</a>
        </Link>
      </div>
      <div className={styles["img_header"]}>
        <Image
          src="https://i.ibb.co/th7mxZ8/atom.png"
          alt=""
          width={400}
          height={400}
        />
      </div>
    </section>
  );
}

export default Home;
