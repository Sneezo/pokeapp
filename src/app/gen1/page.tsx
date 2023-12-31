"use client";

import CardList from "../CardList";
import NavBar from "../NavBar";

interface Props {
  searchParams?: {
    query?: string;
    page?: string;
  };
}

export default function Home({ searchParams }: Props) {
  const query = searchParams?.query || ``;
  return (
    <main>
      <NavBar></NavBar>
      <CardList filter={query} offset={0} limit={151}></CardList>
    </main>
  );
}
