import Tag from "../Tag/Tag";

function Card(props) {
  const item = props.item;

  function getColorType(type) {
    let color = "";

    switch (type) {
      case "Fire":
        color = "yellow";
        break;
      case "Poison":
        color = "red";
        break;
      case "Grass":
        color = "green";
        break;
      case "Water":
        color = "blue";
        break;
      case "Flying":
        color = "purple";
        break;
      case "Normal":
        color = "yellow";
        break;
      case "Bug":
        color = "red";
        break;
      case "Electric":
        color = "green";
        break;
      case "Ground":
        color = "blue";
        break;

      default:
        color = "yellow";
    }
    return color;
  }

  return (
    <div className="Card">
      <div className="Card__header">
        <span className="Card__number">{item.num}</span>
        <p className="Card__title">{item.name}</p>
      </div>
      <img className="Card__img" src={item.img} alt={item.name} />
      <div className="Card__tag-group">
        {item.type.map((type) => (
          <Tag label={type} color={getColorType(type)} />
        ))}
      </div>

      <p className="Card__text">
        <b>Altura: </b>
        {item.height}
      </p>

      <p className="Card__text">
        <b>Peso: </b>
        {item.weight}
      </p>
    </div>
  );
}

export default Card;
