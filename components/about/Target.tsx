import React from "react";
import Link from "next/link";

const Target = ({ styles, name, instagram, github, linkedin, twitter }) => {
  return (
    <div className={styles.card}>
      <h2 className={styles["title-card"]}>Desarrollador</h2>
      <h3 className={styles["card-description"]}>{name}</h3>
      <hr />
      <h3 className={styles["title-card"]}>Contáctalo</h3>
      <p className={styles["card-description"]}>Sus redes sociales</p>
      <div className={styles["icons-container"]}>
        <figure>
          <div className={styles["icon-container"]}>
            <Link href={instagram} target="_blank">
              <a>
                <img
                  src="/icons/instagram.svg"
                  className="icon"
                  alt="Instagram icon"
                />
              </a>
            </Link>
          </div>
        </figure>
        <figure>
          <div className={styles["icon-container"]}>
            <Link href={github} target="_blank">
              <a>
                <img
                  src="/icons/github.svg"
                  className="icon"
                  alt="gitHub icon"
                />
              </a>
            </Link>
          </div>
        </figure>
        <figure>
          <div className={styles["icon-container"]}>
            <Link href={linkedin} target="_blank">
              <a>
                <img
                  src="/icons/linkedin.svg"
                  className="icon"
                  alt="LinkedIn icon"
                />
              </a>
            </Link>
          </div>
        </figure>
        <figure>
          <div className={styles["icon-container"]}>
            <Link href={twitter} target="_blank">
              <a>
                <img
                  src="/icons/twitter.svg"
                  className="icon"
                  alt="Twitter icon"
                />
              </a>
            </Link>
          </div>
        </figure>
      </div>
    </div>
  );
}

export default Target;
