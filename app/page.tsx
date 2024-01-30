"use client";

import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";
import Foot from "@/components/widgets/foot";
import { zodResolver } from "@hookform/resolvers/zod";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { Control, Controller, useForm } from "react-hook-form";
import z from "zod";
import { useLinks } from "../components/data/links";
import { Projects, projects } from "../components/data/projects";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "../components/ui/card";
import Nav from "../components/widgets/nav";

const formSchema = z.object({
  name: z
    .string()
    .min(2, { message: "Votre nom ne peut être inférieur a 2 caractères" })
    .max(50, { message: "Votre nom ne peut pas exceder 50 caractères" })
    .refine((value) => /^[A-Za-z]+$/.test(value), {
      message: "Votre nom ne peut contenir que des lettres",
    }),
  mail: z.string().email({ message: "Votre mail n'est pas valide" }),
  message: z
    .string()
    .min(10, { message: "Votre message est trop court" })
    .max(3000, { message: "Votre message est trop long" }),
});

type FormFieldComponentProps = {
  control: Control<z.infer<typeof formSchema>>;
  name: keyof z.infer<typeof formSchema>;
  label: string;
  setIsFocus: (focusState: any) => void;
  textarea: boolean;
  cols?: number;
  rows?: number;
  width?: number;
};

const FormFieldComponent: React.FC<FormFieldComponentProps> = ({
  control,
  name,
  label,
  setIsFocus,
  textarea,
  cols,
  rows,
}) => {
  const [isFocused, setIsFocused] = useState(false);
  const Field = textarea ? "textarea" : "input";
  return (
    <Controller
      control={control}
      name={name}
      render={({ field, fieldState: { error } }) => (
        <div className="relative w-full md:w-4/5">
          <Field
            {...field}
            id={name}
            className="bg-blue-300 hover:bg-blue-200 p-2 px-2 rounded-sm outline-none text-black my-8 w-full"
            onFocus={() => {
              setIsFocus({ [name]: true });
              setIsFocused(true);
            }}
            onBlur={(e) => {
              setIsFocus({ [name]: false });
              setIsFocused(false);
            }}
            rows={rows}
            cols={cols}
          />
          <label
            htmlFor={name}
            className={`absolute left-1 px-1 text-black transition-all duration-200 pointer-events-none ${
              isFocused || field.value ? "top-2" : "top-10"
            }`}
          >
            {label}
          </label>
          {error && <p className="text-red-500 -mt-6">{error.message}</p>}
        </div>
      )}
    />
  );
};

export default function Home() {
  const { toast } = useToast();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      mail: "",
      message: "",
    },
  });
  const onSubmit = async (data: {
    name: string;
    mail: string;
    message: string;
  }) => {
    try {
      const response = await fetch("/api/contactData", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      if (!response.ok) throw new Error("Une erreur est survenue");
      form.reset({
        name: "",
        mail: "",
        message: "",
      });
      setIsFocus({ name: false, mail: false, message: false });
      toast({
        title: "Message envoyé !",
        description: "Votre message a bien été envoyé",
      });
    } catch (error) {
      console.log(error);
      toast({
        title: "Erreur",
        description:
          "Une erreur est survenue, veuillez réessayer ulétieurement.",
      });
    }
  };

  const { socialLinks } = useLinks();
  const [focusState, setIsFocus] = useState({
    name: false,
    mail: false,
    message: false,
  });
  return (
    <div className="relative min-h-screen flex flex-col items-center bg-blue-100">
      <Nav />
      <section className="flex flex-col items-center w-full mt-10 sm:mt-20 lg:mt-40 sm:mb-20 xl:w-4/5">
        <div className="w-full flex flex-col items-center">
          <h1 className="text-3xl lg:text-4xl mt-10">Guillaume Ceccoli</h1>
          <div className="flex flex-row items-center justify-around w-4/5 my-14 sm:w-3/5 lg:w-2/5 xl:w-1/4">
            {socialLinks.map((link, id) => (
              <Link
                key={id}
                href={link.href}
                className="flex flex-col items-center scale-on-hover hover:text-blue-500"
              >
                <span className="pb-1 size-icon">{link.icon}</span>
                <span className="text-sm">{link.title}</span>
              </Link>
            ))}
          </div>
        </div>
        <div className="w-full flex flex-col items-center mt-20 md:flex-row md:justify-around md:w-4/5">
          <div className="w-2/5 md:w-1/3 lg:mt-12 lg:w-1/4">
            <Image
              src="/assets/Guillaume.png"
              width={1000}
              height={1000}
              alt="Photo de Guillaume Ceccoli format portrait"
              className="w-full"
              onContextMenu={(e: React.MouseEvent) => e.preventDefault()}
            />
          </div>
          <p className="italic mt-16 text-center w-4/5 sm:text-lg md:w-1/2 md:mt-0 lg:w-1/3 xl:w-2/5">
            Passionné par le développement web, je propose des solutions pour
            mettre en lumière votre identité numérique. D&apos; un naturel
            curieux, autonome et rigoureux, je suis à l&apos; écoute de vos
            besoins pour vous proposer des solutions adaptées.
          </p>
        </div>
      </section>
      <section
        className="flex flex-col items-center my-32 py-10 bg-blue-200"
        id="projects"
      >
        <h2 className="text-2xl py-5 my-10 lg:text-4xl">Projets réalisés</h2>
        <div className="w-3/4 flex flex-col items-center xl:flex-row xl:justify-between xl:w-10/12 xl:flex-wrap 2xl:w-3/5">
          {projects.map((project: Projects, id) => (
            <Card
              key={id}
              className="bg-blue-100 my-10 scale-on-hover border-none lg:w-4/5 xl:w-2/5 xl:mx-2 2xl:w-5/12 hover:shadow-lg"
            >
              <CardHeader className="w-full">
                <Image
                  src={project.image}
                  alt={project.type}
                  width={1000}
                  height={1000}
                  className="rounded-lg w-full"
                  onContextMenu={(e: React.MouseEvent) => e.preventDefault()}
                />
              </CardHeader>
              <CardContent className="text-xs my-2 sm:text-sm md:text-lg">
                <p>Année : {project.year}</p>
                <p className="my-2">{project.type}</p>
                <p>{project.description}</p>
              </CardContent>
              <CardFooter>
                <Link
                  href={`/project/${project.id}`}
                  className="bg-blue-400 px-4 py-3 rounded-full mx-auto my-5 text-xs sm:text-sm md:text-lg hover:font-bold hover:shadow-lg hover:bg-blue-500"
                >
                  En savoir plus
                </Link>
              </CardFooter>
            </Card>
          ))}
          <Card className="bg-blue-100 my-10 scale-on-hover border-none lg:w-4/5 xl:w-2/5 xl:mx-2 2xl:w-5/12">
            <CardHeader className="w-full">
              <Image
                src="/assets/interview.jpg"
                alt="Photo d'une interview"
                width={1000}
                height={1000}
                className="rounded-lg w-full"
                onContextMenu={(e: React.MouseEvent) => e.preventDefault()}
              />
            </CardHeader>
            <CardContent className="text-xs my-2 sm:text-sm md:text-lg">
              <h3>Une idée, un projet ? Parlons-en !</h3>
            </CardContent>
            <CardFooter>
              <Link
                href="#contact"
                className="bg-blue-400 px-4 py-3 rounded-full mx-auto my-8 text-xs sm:text-sm md:text-lg hover:font-bold hover:shadow-lg hover:bg-blue-500"
              >
                Contact
              </Link>
            </CardFooter>
          </Card>
        </div>
      </section>
      <section
        className="mb-20 flex flex-col items-center w-11/12 sm:w-full"
        id="contact"
      >
        <h2 className="text-2xl my-20 lg:text-4xl">Contact</h2>
        <form
          action=""
          className="flex flex-col items-center w-full md:mx-auto lg:w-4/5 xl:w-3/5 2xl:w-2/5"
          onSubmit={form.handleSubmit(onSubmit)}
        >
          <div className="flex flex-col items-center w-full">
            <FormFieldComponent
              control={form.control}
              name="name"
              label="Votre nom : "
              setIsFocus={(focus) =>
                setIsFocus((prev) => ({ ...prev, ...focus }))
              }
              textarea={false}
            />
            <FormFieldComponent
              control={form.control}
              name="mail"
              label="Votre mail : "
              setIsFocus={(focus) =>
                setIsFocus((prev) => ({ ...prev, ...focus }))
              }
              textarea={false}
            />
            <FormFieldComponent
              control={form.control}
              name="message"
              label="Votre message : "
              setIsFocus={(focus) =>
                setIsFocus((prev) => ({ ...prev, ...focus }))
              }
              textarea={true}
              cols={10}
              rows={20}
            />
          </div>

          <Button
            type="submit"
            className="background-btn text-black bg-blue-400 hover:bg-blue-500 hover:shadow-lg lg:text-xl p-6 my-4"
          >
            Envoyer
          </Button>
        </form>
      </section>
      <Foot />
    </div>
  );
}

