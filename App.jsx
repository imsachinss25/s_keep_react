import React, { useState } from 'react';
import Header from './Header'
import CreateNote from './CreateNote'
import Note from './Note'
import './index2.css'

const App2=()=>{
    const[addItem, setAddItem]=useState([]);
    const addNote=(note)=>{
        
        setAddItem((prevData)=>{
            return [...prevData, note]
        });
    
    };
    const onDelete=(id)=>{
        setAddItem((oldData)=>oldData.filter((currData, index)=>{
            return index!==id;
        }))

    }
    return(
        <>
            <Header />
            <CreateNote passNote ={addNote} />
           
            {
                addItem.map((value, index)=>{
                    return <Note
                    key={index}
                    id={index}
                    title={value.title}
                    content={value.content}
                    deleteItem={onDelete} />
                })
            }
        </>
    );

};
export default App2;
