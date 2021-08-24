import axios from "axios"
import { Link } from "react-router-dom"
import { baseURL, config } from "../services"
import { useParams } from "react-router-dom"

export default function Detail(props) {
  // const { description } = props.chore.fields
  // const {description} =useParams
  const params = useParams()
  const details = props.chores.find(chore => params.id === chore.id)
  

    const handleDelete = async () => {
      // Must specify which item you're deleting.
      await axios.delete(`${baseURL}/${props.chore.id}`, config)
      props.setToggleFetch(prevToggleFetch => !prevToggleFetch)
  }

  return (
    <>
      <div className="descriptionContainer">
        <p>{details.description}</p>
        <button onClick={handleDelete}>Delete Chore</button>
        {/* the link below routes to new page to edit specific chore.
        using props for this. */}
        <Link to={`/edit/${props.chore.id}`}><button className="editButton">Edit Chore</button></Link>
      </div>
    </>
  )
} 