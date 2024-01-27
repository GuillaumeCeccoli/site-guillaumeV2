import Link from "next/link";

export default function Foot() {
  return (
    <div className="w-full pb-20 sm:py-10 text-sm flex flex-col items-center text-center bg-[#e7f0fa]">
      <p>Créé par Guillaume Ceccoli - CréaNumerik04. Tous droits réservés.</p>
      <Link href="/pages/mentions" className="text-blue-600">
        Mentions légales
      </Link>
    </div>
  );
}

