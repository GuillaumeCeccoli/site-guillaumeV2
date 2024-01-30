"use client";
import Foot from "@/components/widgets/foot";
import Nav from "@/components/widgets/nav";
import Image from "next/image";
import React from "react";

export default function About() {
  return (
    <div className="relative min-h-screen flex flex-col items-center bg-blue-100">
      <Nav />
      <h1 className="mt-20 text-3xl sm:mt-40 md:text-4xl">Qui suis-je ?</h1>
      <article className="mt-20 flex flex-col items-center lg:w-4/5 lg:flex-row lg:justify-around lg:mt-44">
        <div className="w-4/5 mb-20 sm:w-2/5 lg:w-1/3 lg:mb-0 xl:w-1/4">
          <Image
            src="/assets/Guillaume.png"
            alt="Une photo de Guillaume"
            width={1000}
            height={1000}
            className="w-full"
            onContextMenu={(e: React.MouseEvent) => e.preventDefault()}
          />
        </div>
        <div className="flex flex-col items-start w-4/5 lg:w-1/2">
          <h2 className="text-2xl mb-10">Mon parcours :</h2>
          <p>
            Après avoir consacré 10 années à la menuiserie au sein d&apos;une
            entreprise industrielle, j&apos; ai pris la décision en 2022 de me
            réorienter vers le domaine du développement web.
            <p className="my-5">
              Initialement autodidacte, j&apos;ai ensuite suivi une formation en
              ligne, validant mon diplôme en juin 2023 avec OpenClassrooms.
            </p>
            <p className="mb-5">
              Depuis lors, j&apos;enchaîne les projets, qu&apos; ils soient
              destinés à des clients ou à des projets personnels, que ce soit en
              solo ou en collaboration. Je poursuis ma quête constante de
              connaissances grâce à une veille technologique assidue et à une
              pratique quotidienne.
            </p>
            <p>
              J&apos; ai fondé, en 2023, CreaNumerik04, une micro-entreprise, me
              permettant ainsi d&apos;explorer le monde du freelancing et de
              donner un nouvel élan à ma carrière en sortant de ma zone de
              confort.
            </p>
          </p>
        </div>
      </article>
      <article className="my-20 flex flex-col items-center lg:w-4/5 lg:flex-row-reverse lg:justify-around lg:my-44">
        <div className="w-4/5 mb-20 sm:w-2/5 lg:w-1/3 lg:mb-0 xl:w-1/4">
          <Image
            src="/assets/Guillaume.png"
            alt="Une photo de Guillaume"
            width={1000}
            height={1000}
            className="w-full"
            onContextMenu={(e: React.MouseEvent) => e.preventDefault()}
          />
        </div>
        <div className="flex flex-col items-start w-4/5 lg:w-1/2">
          <h2 className="text-2xl mb-10">Mon approche :</h2>
          <p>
            Ecouter et comprendre les besoins de mes clients font parties
            intégrante de mon caractère et de mon désir de faire de chaque
            projet, une réussite. J&apos; aspire a créer des solutions
            innovantes, créatives et accessibles, afin de données vies à vos
            idées et donner une meilleure visibilité à votre entreprise.
          </p>
        </div>
      </article>
      <Foot />
    </div>
  );
}

