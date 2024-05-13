
export default function CardCharacter ({ name, eyeColor, gender }) {
    return(
        <section className="bg-black rounded-3xl w-[250px] h-[200px] cursor-pointer transform transition-transform duration-250 ease-out hover:scale-105">
            <div className="text-center text-white">
                <h2>{name}</h2>
            </div>
            <div>
                <img src='/iStock-511382960.jpg' alt="Image character"
                className="w-auto h-[370px]" />
            </div>
            <div className="text-center text-white">
                {eyeColor? <span> Eye color: {eyeColor}</span> : ''}
            </div>
            <div className="text-center text-white">
                {gender?  <span> Gender: {gender}</span> : ''}
            </div>
        </section>
    )
}