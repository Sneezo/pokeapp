import Card from "./Card";

interface Pokemon {
  name: string;
}
interface Props {
  offset: number;
  limit: number;
}
const CardList = async ({ offset, limit }: Props) => {
  //get pokemon names
  const req = await fetch(
    `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`
  );
  const res = await req.json();
  const pokemonNames = res.results;

  return (
    <div className="CardList grid grid-cols-3 grid-gap4 center place-content-evenly">
      {pokemonNames.map((p: Pokemon) => (
        <Card name={p.name}></Card>
      ))}
    </div>
  );
};
export default CardList;
