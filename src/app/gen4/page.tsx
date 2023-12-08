import NavBar from "../NavBar";
import CardList from "../CardList";

const Gen1 = () => {
  return (
    <main>
      <NavBar></NavBar>
      <CardList offset={386} limit={107}></CardList>
    </main>
  );
};
export default Gen1;
