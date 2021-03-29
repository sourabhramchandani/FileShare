require('dotenv').config();
const mongoose = require('mongoose');

function connectDB(){

    mongoose.connect(process.env.MONGOOSE_CONNECTION_URL,{useNewUrlParser: true,useCreateIndex:true,useUnifiedTopology: true , useFindAndModify: true});
    const connection = mongoose.connection;

    connection.once('open',()=>{
        console.log("connected");
    }).catch(err =>{
        console.log("not connected");
    });

}
module.exports = connectDB;