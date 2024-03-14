import React, { useState } from "react";
import {TextField, Button} from '@mui/material';
import './AddMovie.css'


function AddMovie() {

    const [movieName, setMovieName] = useState(null)

    function handleGetMovieName(event) {
        setMovieName(event.target.value);
        
    }

    return (
        <>
            <TextField id="outlined-basic" label="Movie name" variant="outlined" className="inputMovieName" onChange={handleGetMovieName}/>
            <Button onClick={() => console.log(movieName)}>Add Movie</Button>
        </>
    )
}

export default AddMovie