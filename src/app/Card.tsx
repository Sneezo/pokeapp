import Image from "next/image";
import CardImage from "./CardImage";
import Par from "./Par";

interface Props {
  name: string;
}
async function listFetch(formUrls: []) {
  const result = [];
  for (let i = 0; i <= formUrls.length - 1; i++) {
    const response = await fetch(`${formUrls[i]}`); // waits for the response
    const data = await response.json();
    result.push(...data);
  }

  return result;
}
const Card = async ({ name }: Props) => {
  //Get pokemon by name
  const rawPokemon = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
  const pokemon = await rawPokemon.json();
  //state sprites in an array
  const sprites = [];
  //Get list of forms
  const rawForms = await fetch(
    `https://pokeapi.co/api/v2/pokemon-form?offset=0&limit=1500`
  );
  const formsList = await rawForms.json();
  const allForms = formsList.results;
  //Filter forms by name of current pokemon
  // Returns list of objects like {
  //                                "name": "pikachu-rock-star",
  //                                "url": "https://pokeapi.co/api/v2/pokemon-form/10182/"
  //                              }
  const pFormObjects = allForms.filter((obj: any) => obj.name.includes(name));
  // for each object in pFormObjects use the url property to fetch a new object on this form:
  /*   
    {
    "form_name": "rock-star",
    "form_names": [],
    "form_order": 3,
    "id": 10182,
    "is_battle_only": false,
    "is_default": true,
    "is_mega": false,
    "name": "pikachu-rock-star",
    "names": [],
    "order": 38,
    "pokemon": {},
    "sprites": {},
    "types": [],
    "version_group": {}
    } 
    */
  const pFormImageRequests = pFormObjects.map(
    async (obj: any) => await fetch(obj.url).then((res) => res.json())
  );
  const pFormImages = await Promise.all(pFormImageRequests);
  pFormImages.map((obj) => sprites.push(obj.sprites.front_default));
  sprites.push(pokemon.sprites.front_shiny);

  return (
    <div className="Card grid place-content-evenly text-center border-solid border-black border-2">
      <CardImage sprites={sprites} width={130} height={130}></CardImage>
      <h1 className="font-extrabold">
        {name[0].toUpperCase() + name.slice(1)}
      </h1>
    </div>
  );
};
export default Card;
