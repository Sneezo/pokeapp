import NavBar from "../NavBar";
import CardList from "../CardList";

const Gen1 = () => {
  return (
    <main>
      <NavBar></NavBar>
      <CardList offset={493} limit={156}></CardList>
    </main>
  );
};
export default Gen1;
