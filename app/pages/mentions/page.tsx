import Foot from "@/components/widgets/foot";
import Nav from "@/components/widgets/nav";

export default function Mentions() {
  return (
    <div className="w-full flex flex-col items-center">
      <Nav />
      <div className="w-full flex flex-col items-start mx-auto pt-20 gap-5 sm:pt-40 md:items-center">
        <h1 className="text-blue-600 font-bold">Mentions légales : </h1>
        <h2 className="underline">Editeur du site : </h2>
        <p>
          <strong>Nom et prénom :</strong> Guillaume Ceccoli
        </p>
        <p>
          <strong>Entreprise : </strong>CréaNumerik04
        </p>
        <p>
          <strong>Adresse : </strong>
          86 chemin de la muraille neuve 04230 Saint-Etienne-Les-Orgues
        </p>
        <p>
          <strong>Pays : </strong>France
        </p>
        <p>
          <strong>Courriel : </strong>guiceccoli@gmail.com
        </p>
        <p>
          <strong>Téléphone : </strong>06 75 97 31 18
        </p>
        <p>
          <strong>SIRET :</strong> 98036273500014
        </p>
        <p>
          <strong>Non assujetti à la TVA</strong>
        </p>
      </div>
      <div className="fixed bottom-0 w-full">
        <Foot />
      </div>
    </div>
  );
}

