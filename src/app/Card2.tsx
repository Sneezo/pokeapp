import Image from "next/image";
import { useState } from "react";

interface Props {
  Pokemon: {
    identifier: string;
    pokemon_id: string;
    url: string;
    shinyurl: string;
  };
}

const Card2 = ({ Pokemon }: Props) => {
  const [shiny, setShiny] = useState(false);
  return (
    <div className="Card grid place-content-evenly text-center border-solid border-black border-2">
      <div className="cardimage grid grid-cols-3 place-content-evenly">
        <button onClick={() => setShiny(!shiny)}>Prev</button>
        <Image
          key={Pokemon.identifier}
          src={!shiny ? Pokemon.url : Pokemon.shinyurl}
          alt={Pokemon.identifier}
          width={130}
          height={130}
        ></Image>
        <button onClick={() => setShiny(!shiny)}>Next</button>
      </div>
      <h1 className="font-extrabold">{Pokemon.identifier}</h1>
    </div>
  );
};
export default Card2;
