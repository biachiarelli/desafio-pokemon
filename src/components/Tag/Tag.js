function Tag(props) {
  return <div className={`Tag ` + props.color}>{props.label}</div>;
}

export default Tag;
