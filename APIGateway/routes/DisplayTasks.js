import express from 'express';
const router = express.Router();
import axios from 'axios';


router.all('/:DisplayTasks', (req,res)=>{
    
  console.log(req.params.DisplayTasks);
  //url should be replaced with Container Url
  axios.get('http://localhost:5002/DisplayTasks').then((response)=>{

    res.send(response.data)

  })

});



export default router; 