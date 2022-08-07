import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App(){
    const [notes, setnotes] = React.useState([]);

    function addnote(note){
        !(note.title==="" && note.content==="") && setnotes((prevnotes) => { return [...prevnotes,note];});
    }

    function deletenote(id){
        setnotes(prevnotes => {
            return prevnotes.filter((note,index)=>{
                return index !==id;
            })})
        } 

    return (
        <div>
            <Header/>
            <CreateArea onadd={addnote}/>
            {notes.map((note,index)=>{
                return <Note 
                key={index}
                id={index}
                title={note.title}
                content={note.content}
                ondelete={deletenote} />
            }
            )}
            <Footer/>
        </div>
    );
}

export default App;