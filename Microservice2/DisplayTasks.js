import express from 'express';
import connectDB from '../Microservice3/DB';



const app = express();
const Port = 8002;
app.use(express.json());


//listen to forwarded requests from API gateway
app.get('/DisplayTasks', (req,res,next)=>{

    console.log('Hello from Mircoservice2 API')

});


app.listen(Port, ()=>{
    console.log(`Microservice2 API is running on: http://localhost:${Port}`)
});