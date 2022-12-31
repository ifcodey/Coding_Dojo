import React from "react";
import axios from "axios";
import Button from "@mui/material/Button";

const DeleteButton = (props) => {
    const { id, removeFromDom } = props;
  
    const handleDelete = (e) => {
      let msg = window.confirm("You are sure Delete this project?");
      if (msg) {
        axios
          .delete(`http://localhost:8000/projects/${id}/delete`)
          .then((res) => {
            // delete from DOM.
            removeFromDom(id);
          })
          .catch((err) => console.log(err));
      }
    };
  
    return (
      <div>
        {" "}
        <Button
          variant="outlined"
          color="error"
          disableElevation
          onClick={handleDelete}
        >
          {" "}
          Delete
        </Button>
      </div>
    );
  };
  
  export default DeleteButton;