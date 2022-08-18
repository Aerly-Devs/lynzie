import React from "react";
import Target from "@/components/about/Target";

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
      {developers.map((developer) => {
        <Target
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
