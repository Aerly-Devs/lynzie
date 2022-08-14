import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from '@/styles/home/Home.module.sass';

const Home = () => {
  return (
    <section className={styles.Home}>
      <section>
        <figure>
          <Image
            className={styles.Image}
            src="https://i.ibb.co/th7mxZ8/atom.png"
            alt="Lynzie"
            width={350}
            height={450}
          />
        </figure>
        <article>
          <h1>LYNZIE</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
            aperiam!
          </p>
          <button>
            <Link href="#">
              <a>COMENZAR</a>
            </Link>
          </button>
        </article>
      </section>
    </section>
  );
}

export default Home;
