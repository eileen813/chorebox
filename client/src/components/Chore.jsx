export default function Chore(props) {
  const { name } = props.chore.fields;

  return (
    <div>
      <h3 id={props.chore.id} onClick={props.handleClick}>
        {name}
      </h3>
    </div>
  );
}
