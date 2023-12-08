import NavBar from "../NavBar";
import CardList from "../CardList";

const Gen1 = () => {
  return (
    <main>
      <NavBar></NavBar>
      <CardList offset={251} limit={135}></CardList>
    </main>
  );
};
export default Gen1;
