import {
  CircleUserRound,
  FolderOpenDot,
  Github,
  Home,
  Linkedin,
  MSquare,
  Mail,
} from "lucide-react";
import { ReactElement } from "react";

export type Link = {
  id: string;
  title?: string;
  href: string;
  icon?: ReactElement;
  underline: boolean;
  scale: boolean;
};

export type SocialLink = {
  id: string;
  title: string;
  icon: ReactElement;
  href: string;
};

export const links: Link[] = [
  {
    id: "home",
    title: "Accueil",
    href: "/",
    icon: <Home />,
    underline: true,
    scale: false,
  },
  {
    id: "about",
    title: "A propos",
    href: "/pages/about",
    icon: <CircleUserRound />,
    underline: true,
    scale: false,
  },
  {
    id: "projects",
    title: "Projets",
    href: "/#projects",
    icon: <FolderOpenDot />,
    underline: true,
    scale: false,
  },
  /*   {
    id: "blog",
    title: "Blog",
    href: "/",
    icon: <Pencil />,
    underline: true,
    scale: false,
  }, */
  {
    id: "mail",
    title: "Contact",
    href: "/#contact",
    icon: <Mail />,
    underline: true,
    scale: true,
  },
];

export const socialsLinks: SocialLink[] = [
  {
    id: "github",
    title: "GitHub",
    icon: <Github size={35} />,
    href: "https://github.com/GuillaumeCeccoli",
  },
  {
    id: "linkedin",
    title: "Linkedin",
    icon: <Linkedin size={35} />,
    href: "https://www.linkedin.com/in/guillaume-ceccoli/",
  },
  {
    id: "malt",
    title: "Malt",
    icon: <MSquare size={35} />,
    href: "https://www.malt.fr/profile/guillaumececcoli?overview",
  },
];

export function useLinks() {
  const navLinks = links as Link[];
  const socialLinks = socialsLinks as SocialLink[];
  return { navLinks, socialLinks };
}

