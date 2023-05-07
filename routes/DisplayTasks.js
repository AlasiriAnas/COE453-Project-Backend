import express from 'express';
const router = express.Router();


router.all('/:DisplayTasks', (req,res)=>{

  console.log(req.params.DisplayTasks);
  res.send(req.params.DisplayTasks + '\n');

});



export default router; 