import React, { useState } from 'react'
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';

const CreateNote=(props)=>{

    const [note, setNote]=useState({
        title: '',
        content: '',
    });
    
    const [expand, setExpand]=useState(false)

    const inputEvent=(event)=>{
        const {name, value}=event.target;
        
        setNote((prevData)=>{
            return {
                ...prevData,
                [name] : value,
            };
        });
    
    };

    const addEvent=()=>{
        if(note.content!==""){
        props.passNote(note);
        setNote({
            title: "",
            content: "",
        })
    }
    }
    return(
        <>
            <div className="main_note">
            <div className="add_note">
                <form>
               { expand?
                    <input type="text" name="title" value={note.title} onChange={ inputEvent } placeholder="Title" autoComplete="off" />: null }
                    <textarea rows="4" column="" name="content" value={note.content} onChange={ inputEvent }  placeholder="Write a note..."
                     onClick={()=>{
                         setExpand(true);
                     }} />
                     {
                         expand?
                    <Button className="add_btn" onClick={addEvent}>
                            <AddIcon className="add_icon"/>
                    </Button>:null}

                   
                </form>
                </div>
            </div>

        </>
    );
}
export default CreateNote;
