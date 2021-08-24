import axios from "axios"
import { Link } from "react-router-dom"
import { baseURL, config } from "../services"
import React from "react"

export default function Detail(props) {
const{description} = props.preview.fields

  const handleDelete = async () => {
    // Must specify which item you're deleting.
    // await axios.delete(`${baseURL}/${props.chore.id}`, config)
    // props.setToggleFetch(prevToggleFetch => !prevToggleFetch)
  }

  return (
    <>
      <h1>{description}</h1>
      <button onClick={handleDelete}>Delete Chore</button>
      {/* the link below routes to new page to edit specific chore.
        using props for this. */}
      <Link to={`/edit/${props.preview.id}`}><button className="editButton">Edit Chore</button></Link>
    </>
  )
}
  
  
  
  // const { description } = props.chore.fields
  // const {description} =useParams
  // const params = useParams()
  // const details = props.chores.find(chore => params.id === chore.id)
  

  //   const handleDelete = async () => {
  //     // Must specify which item you're deleting.
  //     await axios.delete(`${baseURL}/${props.chore.id}`, config)
  //     props.setToggleFetch(prevToggleFetch => !prevToggleFetch)
  // }

  // return (
  //   <>
  //     <div className="descriptionContainer">
  //       <p>{details}</p>
  //       <button onClick={handleDelete}>Delete Chore</button>
  //       {/* the link below routes to new page to edit specific chore.
  //       using props for this. */}
  //       <Link to={`/edit/${props.chore.id}`}><button className="editButton">Edit Chore</button></Link>
  //     </div>
  //   </>
  // )