import Link from "next/link";

export default function NavBar() {
  return (
    <div className="">
      <Link href={"/gen1"}>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
          Gen 1
        </button>
      </Link>
      <Link href={"/gen2"}>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
          Gen 2
        </button>
      </Link>
      <Link href={"/gen3"}>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
          Gen 3
        </button>
      </Link>
      <Link href={"/gen4"}>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
          Gen 4
        </button>
      </Link>
      <Link href={"/gen5"}>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
          Gen 5
        </button>
      </Link>
    </div>
  );
}
