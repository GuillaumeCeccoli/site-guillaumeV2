import Link from "next/link";

export default function Foot() {
  return (
    <div className="w-full pb-20 sm:py-10 text-sm flex flex-col items-center text-center bg-blue-400">
      <p>Créé par Guillaume Ceccoli - CréaNumerik04. Tous droits réservés.</p>
      <Link href="/pages/mentions" className="text-white hover:text-blue-200">
        Mentions légales
      </Link>
    </div>
  );
}

