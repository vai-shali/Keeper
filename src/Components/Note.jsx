import React from "react";
// npm install @mui/material @emotion/react @emotion/styled --legacy-peer-deps
// npm install @mui/icons-material --legacy-peer-deps
import DeleteIcon from '@mui/icons-material/Delete';

function Note(props){
    return (
        <div className="note">
            <h1>{props.title}</h1>
            <p>{props.content}</p>
            <button onClick={() => props.ondelete(props.id)}>
                <DeleteIcon />
            </button>
        </div>
    )
}

export default Note;