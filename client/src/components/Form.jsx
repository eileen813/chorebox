import { useState } from "react"
import axios from "axios"
import { baseURL, config } from "../services"

export default function (props) {
  const [name, setName] = useState("")
  const [description, setDescription] = useState("")

  const handleSubmit = async (event) => {
    event.preventDefault()
    // axios post to create new chore request
    const newChore = {
      name,
      description
    }
    // send it as axios post request.  Fields holds an object.
    await axios.post(baseURL, { fields: newChore }, config)
    
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