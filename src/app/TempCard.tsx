import Image from "next/image";

interface Props {
  name: string;
}

const TempCard = ({ name }: Props) => {
  return (
    <div className="Card grid place-content-evenly text-center border-solid border-black border-2">
      <div className="cardimage grid grid-cols-3 place-content-evenly">
        <button>Prev</button>
        <Image
          src="https://img.freepik.com/free-vector/loading-circles-blue-gradient_78370-2646.jpg?size=338&ext=jpg&ga=GA1.1.1222169770.1702252800&semt=sph}"
          alt={name}
          width={130}
          height={130}
        ></Image>
        <button>Next</button>
        <h1></h1>
        <h1 className="font-extrabold">{name}</h1>
      </div>
    </div>
  );
};
export default TempCard;
