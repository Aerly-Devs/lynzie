import Link from 'next/link';
import React from 'react';
import styles from '@/styles/Navbar.module.sass';

const Navbar = () => {
  return (
    <header className={styles.Header}>
      <nav className={styles.Nav}>
        <Link href="/">
          <a className={styles.logo}>LYNZIE</a>
        </Link>
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
    </header>
  );
};

export default Navbar;
