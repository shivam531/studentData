const mongoose = require('mongoose')
mongoose.connect('mongodb://127.0.0.1:27017/StudentRecord')
.then(() => console.log("connected"))
.catch(() => console.log("NOt Connected"));