import axios from "axios";
import { Link } from "react-router-dom";
import { baseURL, config } from "../services";
import React from "react";
import { useState } from "react";

export default function Detail(props) {
  const { toggleComponent, setToggleComponent } = props;
  const { description } = props.preview.fields;

  const handleDelete = async () => {
    // Must specify which item you're deleting.
    await axios.delete(`${baseURL}/${props.preview.id}`, config);
    props.setToggleFetch((prevToggleFetch) => !prevToggleFetch);
    setToggleComponent(!toggleComponent);
  };

  return (
    <>
      {toggleComponent === true ? (
        <>
          <h1>{description}</h1>
          <button onClick={handleDelete}>Delete Chore</button>
          {/* the link below routes to new page to edit specific chore.
              using props for this. */}
          <Link to={`/edit/${props.preview.id}`}>
            <button className="editButton">Edit Chore</button>
          </Link>
        </>
      ) : (
        <></>
      )}
    </>
  );
}
