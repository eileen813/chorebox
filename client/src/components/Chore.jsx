export default function Chore(props) {
  //each chore is displayed from fields object.  Using props to access it.
  const { name } = props.chore.fields;

  return (
    <div>
      <h3 id={props.chore.id} onClick={props.handleClick}>
        {name}
      </h3>
    </div>
  );
}
