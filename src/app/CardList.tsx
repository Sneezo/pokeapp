import { Suspense, useEffect, useState } from "react";
import Card from "./Card";
import TempCard from "./TempCard";

interface Pokemon {
  name: string;
  url: string;
}
interface Props {
  searchParams?: {
    query?: string;
    page?: string;
  };
  offset: number;
  limit: number;
  filter?: string;
}
const CardList = async ({ offset, limit, searchParams, filter }: Props) => {
  //get pokemon names and filter by name & search value
  /*   const [pokemonList, setPokemonList] = useState(null);
  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`)
      .then((res) => res.json())
      .then((data) =>
        setPokemonList(data.results.filter((p: any) => p.name.includes(filter)))
      );
  }); */
  const query = searchParams?.query || ``;

  const req = await fetch(
    `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`
  );
  const res = await req.json();
  const tempPokemonNames = res.results;
  const allPokemonNames = tempPokemonNames.map((p: any) =>
    p.name.includes("-") ? p.name.split("-")[0] : p.name
  );
  const pokemonNames = allPokemonNames.filter((p: Pokemon) =>
    p.name.includes(filter!)
  );

  return (
    <div className="CardList grid grid-cols-3 grid-gap4 center place-content-evenly">
      {pokemonNames.map((p: Pokemon) => (
        <Suspense key={p.name} fallback={<h1> Loading..</h1>}>
          <Card key={p.name} name={p.name}></Card>
        </Suspense>
      ))}
    </div>
  );
};
export default CardList;
