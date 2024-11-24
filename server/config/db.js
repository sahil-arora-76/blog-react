const mongoose = require("mongoose");

mongoose.set('strictQuery', false);


mongoose.connect("mongodb+srv://sahil:LazyIdli1312@cluster0.fxepksp.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0/BlogApp").then(()=>{
    console.log("connected!");
}).catch((err)=>{
    console.log(err);
})