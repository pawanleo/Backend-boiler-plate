const express =require('express');

const app=express();

const cors=require('cors')
const authroutes=require('./routes/authroutes')

app.use(cors());
app.use(express.json());// json post body data
app.use(express.urlencoded({extended:true})) // www /urlencoded data

app.use("/authroutes",authroutes)


module.exports=app;//bcoz we want to make our app testing friendly
