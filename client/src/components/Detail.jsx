import axios from "axios";
import { Link } from "react-router-dom";
import { baseURL, config } from "../services";
import React from "react";

export default function Detail(props) {
  const { setToggleComponent, setPreview } = props;
  const { description } = props.preview.fields;

  const handleDelete = async () => {
    // Must specify which item you're deleting.
    await axios.delete(`${baseURL}/${props.preview.id}`, config);
    // setToggleFetch((prevToggleFetch) => !prevToggleFetch);
    setToggleComponent((toggleComponent) => !toggleComponent);
    setPreview({});
  };

  return (
    <>
      {/* {toggleComponent === true ? ( */}
      <>
        <h1>{description}</h1>
        <button className="deleteButton" onClick={handleDelete}>
          Delete Chore
        </button>
        {/* the link below routes to new page to edit specific chore.
              using props for this. */}
        <Link to={`/edit/${props.preview.id}`}>
          <button className="editButton">Edit Chore</button>
        </Link>
      </>
      {/* ) : (
        <></>
      )} */}
    </>
  );
}
