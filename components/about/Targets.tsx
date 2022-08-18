import React from "react";
import Target from "@/components/about/Target";
import styles from "@/styles/about/About.module.scss";

const Targets = () => {
  const developers = [
    {
      name: "Daniel Alessandro García Batres",
      instagram: "#",
      github: "#",
      linkedin: "#",
      twitter: "#",
    },
    {
      name: "Héctor Ramón Rivera González",
      instagram: "#",
      github: "#",
      linkedin: "#",
      twitter: "#",
    },
    {
      name: "Erick Wilfredo Cáceres González",
      instagram: "#",
      github: "#",
      linkedin: "#",
      twitter: "#",
    },
  ];

  return (
    <>
      {developers.map(developer => {
        return <Target
          styles={styles}
          name={developer.name}
          instagram={developer.instagram}
          github={developer.github}
          linkedin={developer.linkedin}
          twitter={developer.twitter}
        />;
      })}
    </>
  );
};

export default Targets;
