import React from 'react';
import Link from 'next/link';

const Description = ({ styles, title, description, image, url }) => {
  return (
    <>
      <header className={styles.header}>
        <div className={styles.container}>
          <section className={styles["bar_navegation"]}>
            <Link href="/">
              <a className={styles.logo}>LYNZIE</a>
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
          </section>
        </div>
      </header>
      <section className={styles["cont_exp"]}>
        <div className={styles["text_exp"]}>
          <div className={styles.container}>
            <h1>{title}</h1>
            <p>
              {description}
            </p>
            <Link href={`/section/${url}`}>
              <a>COMENZAR</a>
            </Link>
          </div>
        </div>
        <div className={styles["img_exp"]}>
          <img src={image} alt="" />
        </div>
      </section>
    </>
  );
}

export default Description;
