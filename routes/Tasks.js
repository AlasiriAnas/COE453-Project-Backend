import express from 'express';
const router = express.Router();
import axios from 'axios';


router.all('/:Tasks', (req,res)=>{
    
  console.log(req.params.Tasks);
  //url should be replaced with Container Url
  axios.get('http://localhost:8001/Tasks').then((response)=>{

    res.send(response.data)

  })

});



export default router; 