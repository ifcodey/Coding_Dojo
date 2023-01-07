import React from "react";
import axios from "axios";
import Button from "@mui/material/Button";

const DeleteButton = (props) => {
    const { id, removeFromDom } = props;

    const handleDelete = (e) => {
        let answer = window.confirm("You are sure Delete this player?");
        if (answer) {
            axios

                .delete(`http://localhost:8000/api/competitions/${id}/delete`)
                .then((res) => {
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