import React from "react";
import AddIcon from '@mui/icons-material/Add';
import Fab from '@mui/material/Fab';
import { createTheme } from '@mui/material/styles';
import { ThemeProvider } from "@mui/system";
import Zoom from '@mui/material/Zoom';

const theme = createTheme({
  palette: {
    primary: {
      main: '#9e9e9e',
    }
  }
});

function CreateArea(props){

    const [isexpanded, setexpanded]=React.useState(false);

    const [note, setnote] =React.useState(
        {title:"",
        content:""}
    );

    function handlechange(event){
        const {name,value} = event.target;
        setnote(prevNote => {
            return {
                ...prevNote,
                [name]:value
            }
        });
    }

    function handleclick(event){
        props.onadd(note);
        setnote({
            title:"",
            content:""
        })
        event.preventDefault();
    }

    function expand(){
        setexpanded(true);
    }

    return (
        <div>
            <form className="create-note">
            {isexpanded &&
                <input 
                name="title" 
                onChange={handlechange} 
                value={note.title} 
                placeholder="Title" />

            }
                <textarea 
                name="content" 
                onClick={expand}
                onChange={handlechange} 
                value={note.content} 
                placeholder="Take a note..." 
                rows={isexpanded ? 3 : 1} />
                <ThemeProvider theme={theme}>
                    <Zoom in={isexpanded} >
                        <Fab color="primary" onClick={handleclick} >
                            <AddIcon />
                        </Fab>
                    </Zoom>
                </ThemeProvider>
            </form>
        </div>
    );
}

export default CreateArea;