"use client";

import { Suspense, useEffect, useState } from "react";
import CardList from "./CardList";
import NavBar from "./NavBar";
import Image from "next/image";
import Card2 from "./Card2";
const papa = require("papaparse");

interface Props {
  searchParams?: {
    query?: string;
    page?: string;
  };
}

// pokemon id == image name
export default function Home({ searchParams }: Props) {
  const query = searchParams?.query || ``;
  const [pokeNames, setPokeNames] = useState();
  const [pokeForms, setPokeForms] = useState();
  useEffect(() => {
    async function getNames() {
      papa.parse(
        "https://raw.githubusercontent.com/PokeAPI/pokeapi/master/data/v2/csv/pokemon.csv",
        {
          header: true,
          download: true,
          complete: (results: any) => {
            setPokeNames(results.data);
          },
        }
      );
    }
    async function getForms() {
      papa.parse(
        "https://raw.githubusercontent.com/PokeAPI/pokeapi/master/data/v2/csv/pokemon_forms.csv",
        {
          header: true,
          download: true,
          complete: (results: any) => {
            const formsWithUrl = results.data.map((p) => ({
              ...p,
              url: `https://raw.githubusercontent.com/PokeAPI/sprites/ca5a7886c10753144e6fae3b69d45a4d42a449b4/sprites/pokemon/${p.pokemon_id}.png`,
              shinyurl: `https://raw.githubusercontent.com/PokeAPI/sprites/ca5a7886c10753144e6fae3b69d45a4d42a449b4/sprites/pokemon/shiny/${p.pokemon_id}.png`,
              // why is url undefined?
            }));
            setPokeForms(formsWithUrl);
          },
        }
      );
    }
    getNames();
    getForms();
  }, []);

  return (
    <div className="CardList grid grid-cols-3 grid-gap4 center place-content-evenly">
      {pokeForms ? (
        pokeForms.map((p) => (
          <Suspense fallback={<p>{p.identifier}</p>}>
            <Card2 Pokemon={p}></Card2>
          </Suspense>
        ))
      ) : (
        <p>nope</p>
      )}
    </div>
  );
  /*   return (
    <main>
      <NavBar></NavBar>
      <CardList filter={query} offset={0} limit={9}></CardList>
    </main>
  ); */
}
