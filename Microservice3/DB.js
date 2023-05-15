import express from 'express'; 
import mongoose from 'mongoose';
import Todo from '../Microservice3/modules/Todo.js' 
import * as dotenv from 'dotenv' 
dotenv.config();



const app = express();
const Port = 5003;//will be mapped to 8003 
app.use(express.json());



//For MC1
app.post('/Tasks', (req,res)=>{
    const todo = new Todo({
        text: req.body.text,
        complete:req.body.complete
    });
    todo.save();//save the todo to the collection
    res.json(todo);
   
})

app.delete('/Tasks/:id', async  (req,res)=>{

    const result = await Todo.findByIdAndDelete(req.params.id);
  
    res.json(result);

    console.log("Deleted")
} )

//update the text 
app.put('/Tasks/:id', async(req,res)=>{
    const result = await Todo.findByIdAndUpdate(req.params.id,{
        text:req.body.text
    },
     {new:true});     
    result.save();
    res.json(result);
})

//update the checkbox complete
app.put('/Tasks/complete/:id', async(req,res)=>{
    const result = await Todo.findById(req.params.id);     
    result.complete = !result.complete
    result.save();
    res.json(result);
})
 

 //For MC2
app.get('/DisplayTasks', async (req, res) => {

    const Tasks = await Todo.find();
    res.json(Tasks);
   
})

//connecting to the database
mongoose.set('strictQuery', false);
const connectDB = async () => {
    try {
        await mongoose.connect(process.env.db_URI)
        console.log("Connected to database")
        //listen to forwarded requests from Microservices APIs if Connection succeed 
        app.listen(Port,()=>{
        console.log('Mircoservice3 API is running on port:http://localhost:5003')
});

    } catch (error) {
        console.log("Error connecting to the database")
    }
};


connectDB();



export default connectDB; 