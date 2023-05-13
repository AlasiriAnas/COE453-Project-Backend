import express from 'express';
const router = express.Router();
import axios from 'axios';


//'http://localhost:5001/Tasks'

//Routing(Forwarding) requests from API gateway to Microservices 
router.all('/', (req,res)=>{
    
  console.log(req.params.Tasks);
  //url should be replaced with Container Url
  axios({
    method:req.method,
    url:'http://localhost:5001/Tasks',
    headers: req.header,
    data: req.body}).then((response)=>{

    res.send(response.data)

  })

});



export default router; 