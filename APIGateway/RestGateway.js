import express from 'express';
import userRoutes from './routes/Tasks.js';

//express app 
const app = express();
const Port = 8000;

//Data format (json)
app.use(express.json());

app.use('/', userRoutes);

// app.get('/',(req,res) =>{

//     console.log("Testing")

//     res.send('Hello Form HomePage');
// })



//listen for requests 
app.listen(Port,() => 
    console.log(`Server running on port:http://localhost:${Port}`));

