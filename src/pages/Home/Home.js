import { useState } from "react";
import GridCards from "../../components/GridCards/GridCards";
import Navbar from "../../components/Navbar/Navbar";
import SearchBanner from "../../components/SearchBanner/SearchBanner";

function Home(props) {
  const navList = [
    { label: "Buscar Pokémons", link: "#search-banner" },
    { label: "Lista de Pokémons", link: "#grid-cards" },
  ];
  let items = props.items;
  const [filter, setFilter] = useState("");

  return (
    <div className="Home">
      <Navbar list={navList} />
      <div className="container">
        <SearchBanner
          id="search-banner"
          items={items}
          setFilter={setFilter}
          title="Ache o seu Pokémon favorito!"
        />
        <GridCards
          id="grid-cards"
          items={items}
          filter={filter}
          title="Lista de Pokémons"
        />
      </div>
    </div>
  );
}

export default Home;
