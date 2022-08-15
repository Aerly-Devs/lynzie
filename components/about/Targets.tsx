import React from "react";
import styles from "@/styles/about/Targets.module.sass";

const Targets = () => {
  return (
    <>
      <div className={styles.cards}>
        <div className={styles.card}>
          <h2 className={styles["title-card"]}>Desarrollador</h2>
          <h3 className={styles["card-description"]}>
            Daniel Alessandro García Batres
          </h3>

          <hr />

          <h3 className={styles["title-card"]}>Contáctalo</h3>
          <p className={styles["card-description"]}>Sus redes sociales</p>

          <div className={styles["icons-container"]}>
            <figure>
              <div className={styles["icon-container"]}>
                <a href="#" target="_blank">
                  <img
                    src="./icons/instagram.svg"
                    className="icon"
                    alt="Instagram icon"
                  />
                </a>
              </div>
            </figure>

            <figure>
              <div className={styles["icon-container"]}>
                <a href="#" target="_blank">
                  <img
                    src="./icons/github.svg"
                    className="icon"
                    alt="gitHub icon"
                  />
                </a>
              </div>
            </figure>

            <figure>
              <div className={styles["icon-container"]}>
                <a href="#" target="_blank">
                  <img
                    src="./icons/linkedin.svg"
                    className="icon"
                    alt="LinkedIn icon"
                  />
                </a>
              </div>
            </figure>

            <figure>
              <div className={styles["icon-container"]}>
                <a href="#" target="_blank">
                  <img
                    src="./icons/twitter.svg"
                    className="icon"
                    alt="Twitter icon"
                  />
                </a>
              </div>
            </figure>
          </div>
        </div>

        <div className={styles.card}>
          <h2 className="title-card">Desarrollador</h2>
          <h3 className={styles["card-description"]}>
            Héctor Ramón Rivera González
          </h3>

          <hr />

          <h3 className="title-card">Contáctalo</h3>
          <p className={styles["card-description"]}>Sus redes sociales</p>

          <div className={styles["icons-container"]}>
            <figure>
              <div className={styles["icon-container"]}>
                <a href="#" target="_blank">
                  <img
                    src="./icons/instagram.svg"
                    className="icon"
                    alt="Instagram icon"
                  />
                </a>
              </div>
            </figure>

            <figure>
              <div className={styles["icon-container"]}>
                <a href="#" target="_blank">
                  <img
                    src="./icons/github.svg"
                    className="icon"
                    alt="gitHub icon"
                  />
                </a>
              </div>
            </figure>

            <figure>
              <div className={styles["icon-container"]}>
                <a href="#" target="_blank">
                  <img
                    src="./icons/linkedin.svg"
                    className="icon"
                    alt="LinkedIn icon"
                  />
                </a>
              </div>
            </figure>

            <figure>
              <div className={styles["icon-container"]}>
                <a href="#" target="_blank">
                  <img
                    src="./icons/twitter.svg"
                    className="icon"
                    alt="Twitter icon"
                  />
                </a>
              </div>
            </figure>
          </div>
        </div>

        <div className={styles.card}>
          <h2 className={styles["title-card"]}>Desarrollador</h2>
          <h3 className={styles["card-description"]}>
            Erick Wilfredo Cáceres González
          </h3>

          <hr />

          <h3 className={styles["title-card"]}>Contáctalo</h3>
          <p className={styles["card-description"]}>Sus redes sociales</p>

          <div className={styles["icons-container"]}>
            <figure>
              <div className={styles["icon-container"]}>
                <a href="#" target="_blank">
                  <img
                    src="./icons/instagram.svg"
                    className="icon"
                    alt="Instagram icon"
                  />
                </a>
              </div>
            </figure>

            <figure>
              <div className={styles["icon-container"]}>
                <a href="#" target="_blank">
                  <img
                    src="./icons/github.svg"
                    className="icon"
                    alt="gitHub icon"
                  />
                </a>
              </div>
            </figure>

            <figure>
              <div className={styles["icon-container"]}>
                <a href="#" target="_blank">
                  <img
                    src="./icons/linkedin.svg"
                    className="icon"
                    alt="LinkedIn icon"
                  />
                </a>
              </div>
            </figure>

            <figure>
              <div className={styles["icon-container"]}>
                <a href="#" target="_blank">
                  <img
                    src="./icons/twitter.svg"
                    className="icon"
                    alt="Twitter icon"
                  />
                </a>
              </div>
            </figure>
          </div>
        </div>
      </div>
    </>
  );
};

export default Targets;
