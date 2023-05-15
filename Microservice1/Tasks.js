import express from 'express';
import Todo from '../Microservice3/modules/Todo.js' 
import cors from 'cors'

const app = express();
const Port = 5001;//mapped to 8001
app.use(express.json());
app.use(cors());



// app.get('/Tasks', async (req,res)=>{
//     fetch('http://localhost:5003/Tasks', {
//       method: 'GET',
//       body: JSON.stringify({
        
//         "text":req.body.text,
//         "complete":req.body.complete
        
//       }),
//       headers: {
//         'Content-type': 'application/json; charset=UTF-8',
//       },
//     }).then((response) => response.json()).then((json) => console.log(json))});


app.post('/Tasks', async (req,res)=>{
  let resp = await fetch('http://localhost:5003/Tasks', {
    method: 'POST',
    body: JSON.stringify({
      
      "text":req.body.text,
      "complete":req.body.complete

    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  },);
  let body = await resp.json();
  console.log(body);
  res.json(body);
},);


app.delete('/Tasks/:id', async (req,res)=>{
    const url = "http://localhost:5003/Tasks/" + req.params.id 
    try {
		let response = await fetch(url, {method: 'DELETE', headers: {
            'Access-Control-Allow-Origin': '*'
        }});
		response = await response.json();
		res.status(200).json(response);
	} catch (err) {
		console.log(err);
		res.status(500).json({msg: `Internal Server Error.`});
	}
    
})


app.put('/Tasks/:id', async (req,res)=>{
    const url = "http://localhost:5003/Tasks/" + req.params.id 
    try {
		let response = await fetch(url, {method: 'PUT', headers: {
            'Access-Control-Allow-Origin': '*'
        }});
		response = await response.json();
		res.status(200).json(response);
	} catch (err) {
		console.log(err);
		res.status(500).json({msg: `Internal Server Error.`});
	}
    
})



app.put('/Tasks/:path/:id', async (req,res)=>{
    const url = "http://localhost:5003/Tasks/" + req.params.path + '/' +req.params.id 
    try {
		let response = await fetch(url, {method: 'PUT', headers: {
            'Access-Control-Allow-Origin': '*'
        }});
		response = await response.json();
		res.status(200).json(response);
	} catch (err) {
		console.log(err);
		res.status(500).json({msg: `Internal Server Error.`});
	}
    
})







//listen to forwarded requests from API gateway 
app.listen(Port,()=>{
    console.log('Mircoservice1 API is running on port:http://localhost:'+Port);
});