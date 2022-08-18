import React from 'react';
import Link from 'next/link';
import styles from '@/styles/Footer.module.sass';

const Footer = () => {
  return (
    <footer className={styles.Footer}>
      <section className={styles["footer-container"]}>
        <article className={styles.navigation}>
          <Link href="/">
            <a>LYNZIE</a>
          </Link>
          <nav>
            <ul>
              <li>
                <Link href="/">
                  <a>Home</a>
                </Link>
              </li>
              <li>
                <Link href="/about">
                  <a>About</a>
                </Link>
              </li>
            </ul>
          </nav>
        </article>
        <article className={styles.description}>
          <p>
            Este proyecto consistio en poder facilitar la demostracióon de los
            experimentos acerca de reacciones quimicas, convencer a las personas
            que no se necesitan de materiales costosos y los puedas realizar
            desde tu hogar.
          </p>
        </article>
        <article className={styles.aerly}>
          <h4>Aerly 2022</h4>
        </article>
      </section>
    </footer>
  );
}

export default Footer;
