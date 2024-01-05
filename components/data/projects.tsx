import { Button } from "../ui/button";

export type Projects = {
  id: string;
  image: string;
  year: string;
  type: string;
  description: string;
  link: string;
};

export const projects: Projects[] = [
  {
    id: "delphine",
    image: "/assets/site-delphine.png",
    year: "2023",
    type: "Site web | Psychologie",
    description: "Site web pour une psychologue.",
    link: "/",
  },
  {
    id: "dev-up!",
    image: "/assets/dev-up.png",
    year: "2023",
    type: "Site web | Entraide",
    description: "Plate-forme d'entraide entre développeurs.",
    link: "/",
  },
  {
    id: "imc",
    image: "/assets/imc.png",
    year: "2023",
    type: "Site web | Bien-être",
    description: "Calculer son IMC (Indice de Masse Corporelle).",
    link: "/",
  },
];

