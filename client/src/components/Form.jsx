import { useEffect, useState } from "react";
import axios from "axios";
import { baseURL, config } from "../services";
import { useParams, useHistory } from "react-router-dom";

export default function Form(props) {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const params = useParams();
  const history = useHistory();

  useEffect(() => {
    if (params.id && props.chores.length > 0) {
      const choreToEdit = props.chores.find((chore) => params.id === chore.id);
      if (choreToEdit) {
        setName(choreToEdit.fields.name);
        setDescription(choreToEdit.fields.description);
      }
    }
  }, [params.id, props.chores]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const newChore = {
      name,
      description,
    };
    if (params.id) {
      await axios.put(`${baseURL}/${params.id}`, { fields: newChore }, config);
      const foundChore = props.chores.find((chore) => params.id === chore.id);
      foundChore.fields = newChore;
      props.setPreview(foundChore);
    } else {
      await axios.post(baseURL, { fields: newChore }, config);
    }
    props.setToggleFetch((prevToggleFetch) => !prevToggleFetch);
    history.push("/");
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Add or edit your chore below:</h2>
      <div className="input-container">
        <label className="nameLabel" htmlFor="name">
          Chore Name:
          <br />
        </label>
        <input
          id="name"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div className="input-container">
        <label className="descriptionLabel" htmlFor="description">
          Description:
          <br />
        </label>
        <textarea
          id="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
}
