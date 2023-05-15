import express from 'express';
import cors from 'cors'


const app = express();
const Port = 5002;//mapped to 8002
app.use(express.json());
app.use(cors());



app.get('/DisplayTasks', async (req,res)=>{
    const url = "http://localhost:5003/DisplayTasks"
    try {
		let response = await fetch(url, {method: 'GET', headers: {
            'Access-Control-Allow-Origin': '*'
        }});
		response = await response.json();
		res.status(200).json(response);
	} catch (err) {
		console.log(err);
		res.status(500).json({msg: `Internal Server Error.`});
	}
  
})


// app.get('/DisplayTasks', async (req,res)=>{
    
//     const Tasks = await Todo.find();
//     res.json(Tasks);
//     console.log('Get all')
// })




//listen to forwarded requests from API gateway
// app.get('/DisplayTasks', (req,res,next)=>{
     
//      const todo = new Todo({
//         text:req.body.text
//     })
//         todo.save();//save the todo to the collection
//         res.json(todo)
    

// });


app.listen(Port, ()=>{
    
    console.log('Microservice2 API is running on: http://localhost:'+Port)
});