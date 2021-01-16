import React from 'react';
import Button from '@material-ui/core/Button';
import DeleteIcon from '@material-ui/icons/Delete';


const Note=(props)=>{
    
    const deleteNote=()=>{
        props.deleteItem(props.id);

    }
    return(
        <>
        
            <div className="note">
                <h2> {props.title} </h2>
                <br />
                <p> {props.content} </p>
                <Button className="del_btn" onClick={deleteNote}>
                <DeleteIcon className="del_icon" />
                </Button>
            </div>
        
        </>
    );

};
export default Note;