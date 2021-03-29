const express = require('express');
const app = express();
bodyParser = require('body-parser');
const dbConnect = require('./config/db');
dbConnect();
const PORT = process.env.PORT || 3000 ;
app.use(bodyParser.json()); 
//routes
app.use('/api/file',require('./routes/file'));
//app.use('/api/user',require('./routes/user'));
app.use('/api/createuser',require('./routes/createuser'));
//app.use('/api/files',require('./routes/files'));
 
app.listen(PORT,()=>{
    console.log("Listening on "+ PORT);
});