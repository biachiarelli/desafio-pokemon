import image from "../../assets/images/search-banner/pokemons.png";

function Error(props) {
  return (
    <section className="Error">
      <img
        className="Error__img"
        src={image}
        alt="imagem ilustrativa com pokemons"
      />
      <h1 className="Error__title">{props.message}</h1>
    </section>
  );
}

export default Error;
