import { Link } from "react-router-dom"

export default function Chore(props) {
  //each chore is displayed from fields object.  Using props to access it.
  const { name } = props.chore.fields
  
  return (
    <>
      <div className="sidebar">
        <div className="nameContainer">
        <Link to="/detail"><h3>{name}</h3></Link>
      </div>
    </div>
      </>
  )
} 