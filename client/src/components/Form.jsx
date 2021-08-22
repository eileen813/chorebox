import { useEffect, useState } from "react"
import axios from "axios"
import { baseURL, config } from "../services"
import { useParams } from "react-router-dom"

  export default function Form (props) {
  const [name, setName] = useState("")
  const [description, setDescription] = useState("")

  //I now have access to chores from app.js.
  // In order to pre-populate with chore to edit, need to take chores
  // state and use find method to find a snack to edit. useParams for this.
  //const params gives me access to URL parameters.
    const params = useParams()

  useEffect(() => {
    if (params.id && props.chores.length > 0) {
      // gives access to specific chore to edit
      const choreToEdit = props.chores.find(chore => params.id === chore.id)
      if (choreToEdit) {
      // update state with that chore
        setName(choreToEdit.fields.name)
        setDescription(choreToEdit.fields.description)
      }
    }
    // when chores state changes in app.js, this useEffect gets triggered by props.chores
  }, [params.id, props.chores])

  const handleSubmit = async (event) => {
    event.preventDefault()
    // axios post to create new chore request
    const newChore = {
      name,
      description
    }
    // if there's a URL to edit, PUT request here.
    // Must specify which item you're editing.
    // Does one thing to edit(put) a chore, and
    // another to create(post) new chore.
    if (params.id) {
      await axios.put(`${baseURL}/${params.id}`, { fields: newChore }, config)
    } else {
      // send it as axios post request.  Fields holds an object.
      await axios.post(baseURL, { fields: newChore }, config)
    }
  }

  return (
    //this is generic form component here:
    <form onSubmit={handleSubmit}>
      <label htmlFor="name">Chore Name:</label>
      <input id="name"
        type="text"
        value={name}
        onChange={e => setName(e.target.value)}
      />
      <label htmlFor="description">Description:</label>
      <textarea id="description"
        value={description}
        onChange={e => setDescription(e.target.value)}
      />
      <button type="submit">Submit</button>
    </form>
  )
}