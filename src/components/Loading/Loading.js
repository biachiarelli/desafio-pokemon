import gif from "../../assets/images/loading/loading.gif";

function Loading(props) {
  return (
    <div className="Loading">
      <img
        className="Loading__img"
        src={gif}
        alt="imagem ilustrativa com pokemons"
      />
    </div>
  );
}

export default Loading;
