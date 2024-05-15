import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex">
      <div className="flex container">
        <Link href="/films">
          <div className="container-button" >
          <div className="button-image">
          <img src="./iStock-507029572.jpg" alt="" style={{width: '292px', height:'400px', borderRadius: '15px'} } />
         
          <div className="button">
            <h2 className={`mb-3 text-2xl font-semibold`}>
              Films <span className="inline-block">-&gt;</span>
            </h2>
            <p className={`m-0 max-w-[30ch] text-sm`}>
              Get information about the Star Wars movies!
            </p>
          </div>
          </div>
          </div>
        </Link>
        <Link href="/characters">
          <div className="container-button" >
          <div className="button-image">
            <img src="./ImagenStarWars.jpg" alt=""  style={{width: '292px', height:'400px', borderRadius: '15px'} } />
          
          <div className="button">
            <h2 className={`mb-3 text-2xl font-semibold`}>
              Characters <span className="inline-block">-&gt;</span>
            </h2>
            <p className={`m-0 max-w-[30ch] text-sm`}>
              Get information about Star Wars characters!
            </p>
          </div>
          </div>
          </div>
        </Link>
      </div>
    </main>
  );
}
