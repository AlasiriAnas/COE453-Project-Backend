import express from 'express';
// import connectDB from '../Microservice3/DB';


const app = express();
const Port = 5001;//mapped to 8001
app.use(express.json());



app.get('/Tasks', (req,res,next)=>{
    // connect();
    console.log('Hello from Mircoservice1 API')

});


//listen to forwarded requests from API gateway 
app.listen(Port,()=>{
    
    console.log('Mircoservice1 API is running on port:http://localhost:8001')
});