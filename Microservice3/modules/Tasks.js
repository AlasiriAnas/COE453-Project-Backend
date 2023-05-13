import mongoose from 'mongoose';
const Schema  = mongoose.Schema;

const  TodoListSchema = new Schema({

    text:{
        type:String,
        require:true
    },
    complete:{
        type:Boolean,
        default:false
    },
    timestamp:{
        type:String,
        default:Date.now()
    }
})


export default mongoose.model('Todo', TodoListSchema)