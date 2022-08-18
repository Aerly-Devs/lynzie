import React from 'react';
import Description from '@/components/section/Description';
import styles from "@/styles/section/Description.module.scss";

const MainLampara = () => {
  const title = "Lampara de Lava";
  const description =
    "¿Qué es una lámpara de lava? Una lampara de lava es un recipiente lleno de agua en el que puedes ver como burbujas suben y bajan que, en función del color, pueden parecer lava volcánica. Son objetos que emiten una luz relajante y quedan muy bien en cualquier dormitorio.";
  const imageUrl = "https://i.ibb.co/x54TFQ0/lava.png";

  return (
    <>
      <Description
        styles={styles}
        title={title}
        description={description}
        image={imageUrl}
      />
    </>
  )
}

export default MainLampara;
