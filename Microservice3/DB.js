import express from 'express'; 
import mongoose from 'mongoose';
// import * as dotenv from 'dotenv' 
// dotenv.config();



const app = express();
const Port = 5003;//will be mapped to 8003 
app.use(express.json());



//connecting to the database
mongoose.set('strictQuery', false);
const connectDB = async () => {
    try {
        await mongoose.connect("mongodb+srv://TODO:TODO4321@to-do-cluster.ejyegps.mongodb.net/?retryWrites=true&w=majority")
        console.log("Connected to database")
        //listen to forwarded requests from Microservices APIs if Connection succeed 
        app.listen(Port,()=>{
        console.log(`Mircoservice3 API is running on port:http://localhost:${Port}`)
});

    } catch (error) {
        console.log("Error connecting to the database")
    }
};





export default connectDB; 