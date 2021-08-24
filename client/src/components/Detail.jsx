import axios from "axios"
import { Link } from "react-router-dom"
import { baseURL, config } from "../services"

export default function Detail(props) {
  const { description } = props.chore.fields
  

    const handleDelete = async () => {
      // Must specify which item you're deleting.
      await axios.delete(`${baseURL}/${props.chore.id}`, config)
      props.setToggleFetch(prevToggleFetch => !prevToggleFetch)
  }

  return (
    <>
      <div className="descriptionContainer">
        <p>{description}</p>
        <button onClick={handleDelete}>Delete Chore</button>
        {/* the link below routes to new page to edit specific chore.
        using props for this. */}
        <Link to={`/edit/${props.chore.id}`}><button className="editButton">Edit Chore</button></Link>
      </div>
    </>
  )
} 