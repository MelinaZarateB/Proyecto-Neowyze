import Link from "next/link";

export default function CardCharacter({ name, eyeColor, gender, url }) {
  const parts = url.split("/");

  const id = parts[parts.length - 2];

  return (
    <Link href={`/characters/${id}`}>
    <section className="bg-black rounded-3xl w-[250px]  cursor-pointer transform transition-transform duration-250 ease-out hover:scale-105">
      <div className="text-center text-white">
        <h2 className="font-bold text-lg">{name}</h2>
      </div>
      <div>
        <img
          src="/iStock-511382960.jpg"
          alt="Image character"
          className="w-auto h-[370px]"
        />
      </div>
      <div className="text-center text-white">
        {eyeColor ? <p style={{color:'#b5b7b7', fontWeight: '600'}}>Eye color: {eyeColor}</p> : ""}
      </div>
      <div className="text-center text-white">
        {gender ? <p style={{color:'#b5b7b7', fontWeight: '600'}}>Gender: {gender}</p> : ""}
      </div>
    </section>
    </Link>
  );
}
