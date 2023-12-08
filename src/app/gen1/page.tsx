import NavBar from "../NavBar";
import CardList from "../CardList";

const Gen1 = () => {
  return (
    <main>
      <NavBar></NavBar>
      <CardList offset={0} limit={151}></CardList>
    </main>
  );
};
export default Gen1;
