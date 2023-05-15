import express from 'express';
import taskRoutes from './routes/Tasks.js';
// import displayTaskRoutes from './routes/DisplayTasks.js';
import cors from 'cors'
// import expressGrapghQL from 'express-graphql';



//express app 
const app = express();
const Port = 8000;

//Data format (json)
app.use(express.json());
app.use(cors());


app.use('/', taskRoutes);



// app.use('/graphql', expressGrapghQL({
//     graphql:true
// }))

//listen for requests 
app.listen(Port,() => 
    console.log(`Server running on port:http://localhost:${Port}`));

