import axios from "axios"
import { Link } from "react-router-dom"
import { baseURL, config } from "../services"

export default function Chore(props) {
  //each chore is displayed from fields object.  Using props to access it.
  const { name, description } = props.chore.fields


    const handleDelete = async () => {
      // Must specify which item you're deleting.
      await axios.delete(`${baseURL}/${props.chore.id}`, config)
        props.setToggleFetch(prevToggleFetch => !prevToggleFetch)
  }
  
  return (
    <>
      <div className="sidebar">
        <div className="nameContainer">
        <h3>{name}</h3>
      </div>
      <div className="descriptionContainer">
        <p>{description}</p>
        <button onClick={handleDelete}>Delete Chore</button>
        {/* the link below routes to new page to edit specific chore.
        using props for this. */}
        <Link to={`/edit/${props.chore.id}`}>Edit Chore</Link>
      </div>
    </div>
      </>
  )
} 