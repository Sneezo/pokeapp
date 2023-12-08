"use client";
import Link from "next/link";

import CardList from "./CardList";
import { useState } from "react";
import NavBar from "./NavBar";

export default function Home() {
  const [offset, setOffset] = useState(0);
  const [limit, setLimit] = useState(151);
  function handleClick(offset: number, limit: number) {
    setOffset(offset);
    setLimit(limit);
  }
  return (
    <main>
      <NavBar></NavBar>
      <CardList offset={0} limit={9}></CardList>
    </main>
  );
}
