"use client";

import Image from "next/image";
import Nav from "../components/widgets/nav";
import { useLinks } from "../components/data/links";
import Link from "next/link";
import { projects, Projects } from "../components/data/projects";
import {
  Card,
  CardHeader,
  CardContent,
  CardFooter,
} from "../components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { useState } from "react";

export default function Home() {
  const { socialLinks } = useLinks();
  const [focusState, setIsFocus] = useState({
    name: false,
    mail: false,
    message: false,
  });
  return (
    <div className="relative min-h-screen flex flex-col items-center background">
      <Nav />
      <header className="flex flex-col items-center w-full md:mt-20 xl:w-4/5">
        <h1 className="text-2xl my-10 sm:mb-10 sm:mt-40 md:mb-0 md:mr-[46%] lg:mr-[40%] xl:mr-[38%] md:text-4xl 2xl:mr-[34%]">
          Guillaume Ceccoli
        </h1>
        <div className="w-4/5 flex flex-col items-center md:flex-row-reverse xl:h-32">
          <div className="overflow-hidden drop-shadow-xl w-2/3 md:-mt-20 md:w-1/3 md:ml-20 xl:w-1/4 xl:mr-20 2xl:mr-40">
            <Image
              src="/assets/Guillaume.png"
              width={500}
              height={500}
              objectFit="cover"
              alt="Photo de Guillaume Ceccoli format portrait"
              className="w-full"
            />
          </div>
          <div className="flex flex-row justify-around items-center w-4/5 my-10 sm:w-3/5 md:w-2/5 md:mr-[13%] xl:w-1/4 xl:mr-[20%] 2xl:mr-[15%] xl:my-0">
            {socialLinks.map((link, id) => (
              <Link
                key={id}
                href={link.href}
                className="flex flex-col items-center scale-on-hover"
              >
                <span className="pb-1 size-icon">{link.icon}</span>
                <span className="text-sm">{link.title}</span>
              </Link>
            ))}
          </div>
        </div>
      </header>
      <section className="flex flex-col items-center mt-20 lg:mt-40">
        <h2 className="text-2xl py-5 lg:text-4xl">Projets réalisés</h2>
        <div className="w-3/4 flex flex-col items-center mt-10 mb-10 md:mb-0 lg:w-3/5">
          <Carousel className="w-5/6">
            <CarouselPrevious className="md:-mx-14" />
            <CarouselContent>
              {projects.map((project: Projects, id) => (
                <CarouselItem key={id}>
                  <Card className="bg-[#D4E4F7] mx-auto xl:w-3/5">
                    <CardHeader className="w-full">
                      <Image
                        src={project.image}
                        alt={project.type}
                        width={1000}
                        height={1000}
                        className="rounded-lg w-full"
                      />
                    </CardHeader>
                    <CardContent className="text-xs my-2 sm:text-sm md:text-lg">
                      <p>Année : {project.year}</p>
                      <p className="my-2">{project.type}</p>
                      <p>{project.description}</p>
                    </CardContent>
                    <CardFooter>
                      <Link
                        href={project.link}
                        className="background-btn px-4 py-3 rounded-full mx-auto my-5 text-xs scale-on-hover sm:text-sm md:text-lg"
                      >
                        En savoir plus
                      </Link>
                    </CardFooter>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselNext className="md:-mx-14" />
          </Carousel>
        </div>
      </section>
      <section className="mb-20 -mt-24 flex flex-col items-center w-full">
        <h2 className="text-2xl my-20 lg:text-4xl">Contact</h2>
        <form
          action=""
          className="flex flex-col items-center md:w-4/5 md:mx-auto lg:w-1/2"
        >
          <div className="flex flex-col items-center w-full md:flex-row md:space-x-5">
            <div className="relative w-full md:w-4/5">
              <input
                type="text"
                className="background-card p-2 px-2 bg-blue-200 rounded-sm outline-none text-black my-5 w-full"
                onFocus={() => setIsFocus({ ...focusState, name: true })}
                onBlur={() => setIsFocus({ ...focusState, name: false })}
              />
              <label
                htmlFor=""
                className={`absolute left-0 text-sm px-1 text-black transition-all duration-200 pointer-events-none ${
                  focusState.name ? "top-0" : "top-7"
                }`}
              >
                Nom
              </label>
            </div>
            <div className="relative w-full md:w-4/5">
              <input
                type="text"
                className="background-card p-2 px-2 bg-blue-200 rounded-sm outline-none text-black my-5 w-full"
                onFocus={() => setIsFocus({ ...focusState, mail: true })}
                onBlur={() => setIsFocus({ ...focusState, mail: false })}
              />
              <label
                htmlFor=""
                className={`absolute left-0 text-sm px-1 text-black transition-all duration-200 pointer-events-none ${
                  focusState.mail ? "top-0" : "top-7"
                }`}
              >
                Mail
              </label>
            </div>
          </div>
          <div className="relative w-full">
            <textarea
              name="message"
              id="message"
              cols={30}
              rows={10}
              className="background-card p-2 px-2 bg-blue-200 rounded-sm outline-none text-black my-5 w-full"
              onFocus={() => setIsFocus({ ...focusState, message: true })}
              onBlur={() => setIsFocus({ ...focusState, message: false })}
            ></textarea>
            <label
              htmlFor=""
              id="message"
              className={`absolute left-0 text-sm px-1 text-black transition-all duration-200 pointer-events-none ${
                focusState.message ? "top-0" : "top-7"
              }`}
            >
              Message
            </label>
          </div>
          <Button
            type="submit"
            className="bg-[#b6daea] text-black scale-on-hover hover:bg-[#b6daea]"
          >
            Envoyer
          </Button>
        </form>
      </section>
    </div>
  );
}

