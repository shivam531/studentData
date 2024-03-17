const mongoose = require("mongoose");

const studentRecord = new mongoose.Schema({
  
     Course_Id : Number,
     task_Name : String,
     DueDate : String
  
})

const courseRecord = new mongoose.model('courseRecord',studentRecord);
module.exports=courseRecord;