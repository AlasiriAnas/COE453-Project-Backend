import express from 'express';
const router = express.Router();

import axios from 'axios';
// import regisrty from './registry.json' assert { type: "json" };
//'http://localhost:5001/Tasks'

//Routing(Forwarding) requests from API gateway to Microservices 
router.all('/MC1/:apiName', (req,res)=>{
  console.log(req.params.apiName);
  //url should be replaced with Container Url
  axios({
    method:req.method,
    url:'http://localhost:5001/'+ req.params.apiName,
    headers: req.header,
    data: req.body
    }).then((response)=>{

    res.send(response.data)

  })
    
});


router.all('/MC1/:apiName/:id', (req,res)=> {
  console.log(req.params.id);
  axios({
    method:req.method,
    url:'http://localhost:5001/' + req.params.apiName + 
    '/' + req.params.id,
    headers: req.header,
    data: req.body}).then((response)=>{

    res.send(response.data)

  })
});


router.all('/MC1/:apiName/:path/:id', (req,res)=> {
  console.log(req.params.id);
  axios({
    method:req.method,
    url:'http://localhost:5001/' + req.params.apiName + 
    '/' + req.params.path + '/' + req.params.id,
    headers: req.header,
    data: req.body}).then((response)=>{

    res.send(response.data)

  })
});



//Routing for Microservice2

router.all('/MC2/:apiName', (req,res)=>{
  console.log(req.params.apiName);
  //url should be replaced with Container Url
  axios({
    method:req.method,
    url:'http://localhost:5002/'+ req.params.apiName,
    headers: req.header,
    data: req.body
    }).then((response)=>{

    res.send(response.data)

  })
    
});


router.all('/MC2/:apiName/:id', (req,res)=> {
  console.log(req.params.id);
  axios({
    method:req.method,
    url:'http://localhost:5002/' + req.params.apiName + 
    '/' + req.params.id,
    headers: req.header,
    data: req.body}).then((response)=>{

    res.send(response.data)

  })
});



export default router; 