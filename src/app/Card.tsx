import Image from "next/image";
import CardImage from "./CardImage";

interface Props {
  name: string;
}

const Card = async ({ name }: Props) => {
  const rawPokemon = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
  const pokemon = await rawPokemon.json();
  const sprites = [pokemon.sprites.front_default, pokemon.sprites.front_shiny];
  return (
    <div className="Card grid place-content-evenly text-center border-solid border-black border-2">
      {/*}<Image src={sprites.default} alt={name} width={130} height={130}></Image>{*/}
      <CardImage sprites={sprites} width={130} height={130}></CardImage>
      <h1 className="font-extrabold">
        {name[0].toUpperCase() + name.slice(1)}
      </h1>
    </div>
  );
};
export default Card;
