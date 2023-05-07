import express from 'express'; 
import mongoose from 'mongoose';
import * as dotenv from 'dotenv' 
dotenv.config();



const app = express();
const Port = 8003;
app.use(express.json());



//connecting to the database
mongoose.set('strictQuery', false);
const connectDB = async () => {
    try {
        await mongoose.connect(process.env.db_URI)
        console.log("Connected to database")
    } catch (error) {
        console.log("Error connecting to the database")
    }
};



//listen to forwarded requests from Microservices APIs 
app.listen(Port,()=>{
    
    console.log(`Mircoservice3 API is running on port:http://localhost:${Port}`)
});


export default connectDB; 