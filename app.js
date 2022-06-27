const express=require('express')
const app=express()
const routes=require('./routes')
const bodyParser=require('body-parser')

app.use(bodyParser.json())
app.use("/",routes)
app.listen(5300,()=>{console.log("Server Started")})