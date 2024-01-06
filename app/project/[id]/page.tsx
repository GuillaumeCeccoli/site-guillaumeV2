"use client";

import { useParams } from "next/navigation";
import { projects } from "@/components/data/projects";
import React from "react";
import Nav from "@/components/widgets/nav";
import Image from "next/image";
import Foot from "@/components/widgets/foot";
import Link from "next/link";

export default function Project() {
  const { id } = useParams<{ id: string }>();

  const project = projects.find((project) => project.id === id);

  if (!project) {
    return <div>Projet non trouvé</div>;
  }

  return (
    <div className="relative min-h-screen flex flex-col items-center background">
      <Nav />
      <div className="flex flex-col items-center w-4/5 mt-20 sm:mt-40">
        <h1 className="font-bold text-2xl mb-20 md:text-3xl">
          {project.title}
        </h1>
        <Image
          src={project.image}
          width={1000}
          height={1000}
          alt={project.alt}
          className="rounded-xl w-full"
        />
        <div className="flex flex-col items-start mt-10 mb-40 gap-5">
          <h3 className="font-bold">Année :</h3>
          <p>{project.year}</p>
          <h3 className="font-bold">Type du projet : </h3>
          <p>{project.type}</p>
          <h3 className="font-bold">Lien du projet : </h3>
          <Link className="text-blue-600" href={project.href}>
            {project.title}
          </Link>
          <h3 className="font-bold">Technologies utilisées :</h3>
          <span>??</span>
          <h3 className="font-bold">Description :</h3>
          <p>{project.detail}</p>
        </div>
      </div>
      <Foot />
    </div>
  );
}
