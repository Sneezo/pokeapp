import NavBar from "../NavBar";
import CardList from "../CardList";

const Gen1 = () => {
  return (
    <main>
      <NavBar></NavBar>
      <CardList offset={151} limit={100}></CardList>
    </main>
  );
};
export default Gen1;
