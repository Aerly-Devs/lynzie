import React from "react";
import Description from "@/components/section/Description";
import styles from "@/styles/section/Description.module.scss";

const MainElefante = () => {
  const title = "Pasta de Elefante";
  const description =
    "Es un popular experimento noquímica básica, se denomina dentífrico de elefante, pasta de dientes de elefante o volcán de espuma a una gran cantidad de espuma que se produce por la acción de la descomposición catalítica del peróxido de hidrógeno en un medio jabonoso.";
  const imageUrl = "https://i.ibb.co/smqQWmR/elefante.png";

  return (
    <>
      <Description
        styles={styles}
        title={title}
        description={description}
        image={imageUrl}
      />
    </>
  );
};

export default MainElefante;
