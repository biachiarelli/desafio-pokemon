import Card from "../Card/Card";

function GridCards(props) {
  return (
    <section className="GridCards" id={props.id}>
      <h2 className="GridCards__title">{props.title}</h2>
      <div className="GridCards__grid">
        {props.items
          .filter((item) =>
            props.filter.match(/\d/g)
              ? item.num.toLowerCase().includes(props.filter.toLowerCase())
              : item.name.toLowerCase().includes(props.filter.toLowerCase())
          )
          .map((item) => (
            <Card key={item.id} item={item} />
          ))}
      </div>
    </section>
  );
}

export default GridCards;
