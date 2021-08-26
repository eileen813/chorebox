import axios from "axios";
import { Link } from "react-router-dom";
import { baseURL, config } from "../services";
import React from "react";

export default function Detail(props) {
  const { setToggleComponent, setPreview } = props;
  const { description } = props.preview.fields;

  const handleDelete = async () => {
    await axios.delete(`${baseURL}/${props.preview.id}`, config);
    setToggleComponent((toggleComponent) => !toggleComponent);
    setPreview({});
  };

  return (
    <>
      <>
        <h1>{description}</h1>
        <button className="deleteButton" onClick={handleDelete}>
          Delete Chore
          <br />✅
        </button>
        <Link to={`/edit/${props.preview.id}`}>
          <button className="editButton">
            Edit Chore
            <br /> 📝
          </button>
        </Link>
      </>
    </>
  );
}
