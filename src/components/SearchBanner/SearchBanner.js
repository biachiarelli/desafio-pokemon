import { useState } from "react";
import image from "../../assets/images/search-banner/pokemons.png";

function SearchBanner(props) {
  const [filterInput, setFilterInput] = useState("");
  const [showButton, setShowButton] = useState(false);

  function onChange(e) {
    const value = e.target.value;
    if (value !== "") {
      setShowButton(true);
    } else {
      setShowButton(false);
    }
    props.setFilter(value);
  }

  function cleanSearch() {
    props.setFilter("");
    setFilterInput("");
    setShowButton(false);
  }

  return (
    <section className="SearchBanner" id={props.id}>
      <div>
        <h1 className="SearchBanner__title">{props.title}</h1>
        <label className="SearchBanner__label" for="pokemon">
          Busque pelo o nome ou número
        </label>
        <div className="SearchBanner__input-group">
          <div class="input-group mb-3">
            <input
              type="text"
              class="form-control"
              aria-label="pokemon"
              id="pokemon"
              name="pokemon"
              value={filterInput}
              onInput={(e) => setFilterInput(e.target.value)}
              onChange={onChange}
            />
          </div>
          {showButton && (
            <button
              type="submit"
              class="btn SearchBanner__button"
              onClick={cleanSearch}
            >
              Limpar
            </button>
          )}
        </div>
      </div>
      <div className="SearchBanner__image">
        <img
          className="SearchBanner__image-img"
          src={image}
          alt="imagem ilustrativa com pokemons"
        />
      </div>
    </section>
  );
}

export default SearchBanner;
