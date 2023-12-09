"use client";
import Image from "next/image";
import { useState } from "react";

interface Props {
  sprites: any;
  width: number;
  height: number;
}

const CardImage = ({ sprites, width, height }: Props) => {
  const [spriteIndex, setSpriteIndex] = useState(0);
  function previous() {
    if (spriteIndex > 0) setSpriteIndex(spriteIndex - 1);
    else setSpriteIndex(sprites.length - 1);
  }
  function next() {
    if (spriteIndex < sprites.length - 1) setSpriteIndex(spriteIndex + 1);
    else setSpriteIndex(0);
  }
  return (
    <div className="cardimage grid grid-cols-3 place-content-evenly">
      <button onClick={() => previous()}>Prev</button>
      <Image
        src={sprites[spriteIndex].url}
        alt={sprites[spriteIndex].name}
        width={width}
        height={height}
      ></Image>
      <button onClick={() => next()}>Next</button>
      <h1></h1>
      <h1 className="font-extrabold">
        {sprites[spriteIndex].name
          .toString()
          .replace(
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/",
            ""
          )}
      </h1>
    </div>
  );
};
export default CardImage;
