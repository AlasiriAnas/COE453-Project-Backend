import express from 'express';
import connectDB from '../Microservice3/DB.js';
import Todo from '../Microservice3/modules/Tasks.js' 



const app = express();
const Port = 5002;//mapped to 8002
app.use(express.json());


//listen to forwarded requests from API gateway
app.get('/DisplayTasks', (req,res,next)=>{
     connectDB()
    console.log('Hello from Mircoservice2 API')

});


app.listen(Port, ()=>{
    console.log('Microservice2 API is running on: http://localhost:8002')
});