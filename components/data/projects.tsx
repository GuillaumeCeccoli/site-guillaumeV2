export type Projects = {
  id: string;
  image: string;
  year: string;
  type: string;
  description: string;
  title: string;
  alt: string;
  detail: string;
  href: string;
  techno?: string[];
};

export const projects: Projects[] = [
  {
    id: "delphine",
    image: "/assets/site-delphine.png",
    alt: "Photo du site web de Delphine",
    year: "2023",
    type: "Site web | Psychologie",
    description: "Site web pour une psychologue des Pennes Mirabeau.",
    title: "Delphine Ceccoli",
    detail:
      "Le but de ce projet était de réaliser entièrement un site web pour une psychologue. Le site devait être parfaitement responsive et respcter les normes d'accessibilité. Le site devait également être optimisé pour le référencement naturel. Nous avons donc du démarré par une maquette, réalisée sur Figma. Une fois la maquette validée par la cliente, je me suis attelé à l'intégration. J'ai utilisé le framework Next.JS, en utilisant TypeScript et TailwindCSS, ainsi que la librairie Shadcn/ui pour certains composants comme les boutons et le formulaire. Pour ce qui est du formulaire, j'ai réalisé une API avec Next.JS, qui envoie les données du formulaire sur l'adresse mail de la cliente, j'ai utilisé le service tier SendGrid. J'ai également utilisé la librairie React Hook Form pour la validation du formulaire. Enfin, j'ai utilisé la librairie React-Toastify pour afficher des messages d'erreur ou de succès lors de l'envoi du formulaire. Ce site a été deployé sur Vercel.",
    href: "https://delphine-ceccoli.vercel.app/",
    techno: [
      "/technos/figma.svg",
      "/technos/nextjs.svg",
      "/technos/typescript.svg",
      "/technos/tailwind.svg",
      "/technos/git.svg",
    ],
  },
  {
    id: "dev-up!",
    image: "/assets/dev-up.png",
    alt: "Photo du site web de Dev-up!",
    year: "2023",
    type: "Site web | Entraide",
    description: "Plate-forme d'entraide entre développeurs.",
    title: "Dev-up!",
    detail:
      "Cette plateforme d'entraide pour les développeurs sortis de bootcamp à été réalisé en équipe, sous la tutelle d'un développeur plus expérimenté, qui a fait office de mentor. Le but de ce projet était de permettre de trouver des tutoriels écris par des développeurs chevronnés. La durée de ce projet à été d'un mois, nous avons donc appris à nous servir de Next.JS en réalisant un système d'authentification avec Next-Auth et à utiliser Prisma pour la base de données (base de données SQL). Pour ce qui est de la logique, nous avons utilisé TypeScript et TailwindCSS pour le design. Se fut mon premier projet en équipe, et j'ai beaucoup appris sur la gestion de projet, la communication et le travail en équipe. J'ai également pu consolider mes connaissances sur git et github. Bien que le projet ne soit pas encore terminé, nous sommes très fiers de ce que nous avons réalisé, et poursuivons son développement. Ce site a été deployé sur Vercel.",
    href: "https://dev-up.vercel.app/",
    techno: [
      "/technos/nextjs.svg",
      "/technos/typescript.svg",
      "/technos/tailwind.svg",
      "/technos/prisma.svg",
      "/technos/git.svg",
    ],
  },
  {
    id: "imc",
    image: "/assets/imc.png",
    alt: "Photo du site web du calculateur d'IMC",
    year: "2023",
    type: "Site web | Bien-être",
    description: "Calculer son IMC (Indice de Masse Corporelle).",
    title: "Calculateur d'IMC",
    detail:
      "Ce petit projet a été réalisé en autonomie sans utilisé de framework. Nous avons ici un projet réalisé en HTML, CSS et JavaScript, l'occasion pour de consolider mes connaissances du JavaScript en réalisant cette petite application. Comme son nom l'indique, le but ici était de permettre à l'utilisateur de calculer son indice de masse corporel. Pour ce faire, j'ai utilisé une formule mathématique, qui prend en compte le poids et la taille de l'utilisateur. Ce projet est toujours en cours de développement, et je compte bien y ajouter de nouvelles fonctionnalités. Ce site a été deployé sur Vercel.",
    href: "https://imc-calculator-iota.vercel.app/",
    techno: [
      "/technos/html.svg",
      "/technos/css.svg",
      "/technos/javascript.svg",
      "/technos/git.svg",
    ],
  },
];

/* export const getProject = (id: string) => {
  return projects.find((project) => project.id === id);
}; */

