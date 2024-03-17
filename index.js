const express = require("express");
const app = express();
const cors = require('cors');
const studentRecord_api = require("./src/models/record");
require("./src/db/conn");
app.use(express.json());
app.use(cors())
app.get("/studentdata", async (req, res) => {
  try {
    const formData = await studentRecord_api.find({});
    res.status(201).send(formData);
  } catch (e) {
    console.log(e);
  }
});

app.get("/", async (req, res) => {
  try {
    const formData = await studentRecord_api.find({});
    res.sendfile('./studentData.html',{root:__dirname});
  } catch (e) {
    console.log(e);
  }
});

app.post('/studentdata', async(req , res) => {
     try{
         const studentData = new studentRecord_api(req.body)
         const insertData = await studentData.save();
         console.log(insertData);
         res.status(201).send(insertData) 
         }
        catch(e){
            console.log(e);
        }
});

app.post("/taskdata",async(req,res) => {
    console.log(req.body);
})

// app.post('/sendData',async (req,res)=> {
    
//      const msg = req.body
//      await courseRecord.insertMany([{msg}])
//      res.send('send');

// })
const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Server at http://localhost:${port}`);
});
