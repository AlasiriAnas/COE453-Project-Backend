import express from 'express';
import taskRoutes from './routes/Tasks.js';
import displayTaskRoutes from './routes/DisplayTasks.js';

//express app 
const app = express();
const Port = 8000;

//Data format (json)
app.use(express.json());

app.use('/Tasks', taskRoutes);
app.use('/DisplayTasks', displayTaskRoutes);


//listen for requests 
app.listen(Port,() => 
    console.log(`Server running on port:http://localhost:${Port}`));

