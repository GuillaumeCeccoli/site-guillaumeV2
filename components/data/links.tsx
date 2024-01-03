import {
  Home,
  CircleUserRound,
  FolderOpenDot,
  Pencil,
  Github,
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
  },
  {
    id: "about",
    title: "A propos",
    href: "/",
    icon: <CircleUserRound />,
  },
  {
    id: "projects",
    title: "Projets",
    href: "/",
    icon: <FolderOpenDot />,
  },
  {
    id: "blog",
    title: "Blog",
    href: "/",
    icon: <Pencil />,
  },
  {
    id: "mail",
    title: "Contact",
    href: "/",
    icon: <Mail />,
  },
];

export const socialsLinks: SocialLink[] = [
  {
    id: "github",
    title: "GitHub",
    icon: <Github />,
    href: "https://github.com/GuillaumeCeccoli",
  },
  {
    id: "linkedin",
    title: "Linkedin",
    icon: <Linkedin />,
    href: "https://www.linkedin.com/in/guillaume-ceccoli/",
  },
  {
    id: "malt",
    title: "Malt",
    icon: <MSquare />,
    href: "https://www.malt.fr/profile/guillaumececcoli?overview",
  },
];

export function useLinks() {
  const navLinks = links as Link[];
  const socialLinks = socialsLinks as SocialLink[];
  return { navLinks, socialLinks };
}

