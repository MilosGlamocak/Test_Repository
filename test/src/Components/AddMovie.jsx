import React from "react";
import {TextField} from '@mui/material';
import './AddMovie.css'


function AddMovie() {
    console.log(true)
    return (
        <>
            <TextField id="outlined-basic" label="Movie name" variant="outlined" className="inputMovieName"/>
        </>
    )
}

export default AddMovie