import { useState } from "react"

export default function (props) {
  const [name, setName] = useState("")
  const [description, setDescription] = useState("")

  const handleSubmit = event => {
    event.preventDefault()
    // axios post request here:
  }

  return (
    //this is generic form component here:
    <form onSubmit={handleSubmit}>
      <label htmlFor="name">Chore Name:</label>
      <input id="name"
        type="text"
        value={name}
        onChange={e => setName(e.target.name)}
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