import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex">
      <div className="flex container">
        <Link href="/films">
          <div className="button">
            <h2 className={`mb-3 text-2xl font-semibold`}>
              Films <span className="inline-block">-&gt;</span>
            </h2>
            <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
              Get information about the Star Wars movies!
            </p>
          </div>
        </Link>
        <Link href="/characters">
          <div className="button">
            <h2 className={`mb-3 text-2xl font-semibold`}>
              Characters <span className="inline-block">-&gt;</span>
            </h2>
            <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
              Get information about Star Wars characters!
            </p>
          </div>
        </Link>
      </div>
    </main>
  );
}
