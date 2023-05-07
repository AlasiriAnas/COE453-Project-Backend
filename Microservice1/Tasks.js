import express from 'express'
const app = express();

const Port = 8001;
app.use(express.json());



app.get('/Tasks', (req,res,next)=>{

    console.log('Hello from Mircoservice1 API')

});


//listen to forwarded requests from API gateway 
app.listen(Port,()=>{
    
    console.log(`Mircoservice1 API is running on port:http://localhost:${Port}`)
});