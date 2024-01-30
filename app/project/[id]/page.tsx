"use client";

import { projects } from "@/components/data/projects";
import Foot from "@/components/widgets/foot";
import Nav from "@/components/widgets/nav";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import React from "react";

export default function Project() {
  const params = useParams<{ id: string }>();
  if (!params) {
    return <div>Projet non trouvé</div>;
  }
  const { id } = params;

  const project = projects.find((project) => project.id === id);

  if (!project) {
    return <div>Projet non trouvé</div>;
  }

  return (
    <div className="relative min-h-screen flex flex-col items-center bg-blue-100">
      <Nav />
      <div className="flex flex-col items-center w-11/12 sm:w-4/5 xl:w-3/5 mt-20 sm:mt-40">
        <h1 className="font-bold text-2xl mb-20 xl:text-4xl xl:mt-32 xl:mb-40 md:text-3xl">
          {project.title}
        </h1>
        <Image
          src={project.image}
          width={1000}
          height={1000}
          alt={project.alt}
          className="rounded-xl w-full xl:w-4/5"
          onContextMenu={(e: React.MouseEvent) => e.preventDefault()}
        />
        <div className="flex flex-col items-start mt-20 mb-40 gap-4 xl:w-4/5">
          <h3 className="font-bold">Année :</h3>
          <p>{project.year}</p>
          <h3 className="font-bold">Type du projet : </h3>
          <p>{project.type}</p>
          <h3 className="font-bold">Lien du projet : </h3>
          <Link className="text-blue-600" href={project.href}>
            {project.title}
          </Link>
          <h3 className="font-bold">Technologies utilisées :</h3>
          <div className="flex flex-row items-center space-x-4">
            {project.techno &&
              project.techno.map((techno, index) => (
                <Image
                  key={index}
                  src={techno}
                  alt={`techno logo ${index}`}
                  width={32}
                  height={32}
                />
              ))}
          </div>
          <h3 className="font-bold">Description :</h3>
          <p>{project.detail}</p>
        </div>
      </div>
      <Foot />
    </div>
  );
}

