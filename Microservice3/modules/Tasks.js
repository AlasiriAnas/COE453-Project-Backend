import mongoose, { Schema as _Schema, model } from 'mongoose';
const Schema   = _Schema;

const  TodoListSchema = new Schema({

    text:{
        type:String,
        require:true
    }
})

module.exports = mongoose.model('Todo', TodoListSchema)