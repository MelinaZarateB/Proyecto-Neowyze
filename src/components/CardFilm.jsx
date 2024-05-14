import Image from "next/image";
import Link from "next/link";

export default function CardFilm({ title, episode }) {
  return (
    <Link href={`/films/${episode}`}>
    <section className="bg-black rounded-3xl w-[250px] cursor-pointer transform transition-transform duration-250 ease-out hover:scale-105">
      <div className="text-center text-white">
        <h2 className="font-bold text-lg">{title}</h2>
      </div>
      <div>
        <img
          src="https://lumiere-a.akamaihd.net/v1/images/avco_payoff_1-sht_v7_lg_32e68793.jpeg"
          className="w-auto"
        />
      </div>
      <div className="text-white text-center">
        <span>Episode {episode} </span>
      </div>
    </section>
    </Link>
  );
}
