import React from 'react'
// import { University } from '../pages/University'
import '../styling/Datacard.css'
import { Link} from "react-router-dom";
import Button from '@mui/material/Button';

function Datacard({title, logo, name}) {
//   const newLink =  "/"+name
  return (
    <div className = "datacard">
        <h1>{title}</h1>
        <img src = {logo} alt=""/>
<<<<<<< HEAD
=======
        <Button component={Link} to={name} variant = "contained" color="success">Check admisssion requirements</Button>
>>>>>>> origin

    </div>
  )
}

export default Datacard