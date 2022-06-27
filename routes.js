const express = require("express");
const sdk=require('matrix-js-sdk')
const router = express.Router();
const {startClient,sendMessage}=require('./server')
const client=require('./client')

var msglist=[]

router.post('/Login',async(req,res)=>{
    startClient(req.body.username,req.body.password)
    return res.send("Done")
})

router.post('/sendchat',(req,res)=>{

      sendMessage(req.body.message)
})


router.get('/getchats',async(req,res)=>{
    client.startClient()
    client.on("Room.timeline", function(event, room, toStartOfTimeline) {
        if (event.getType() !== "m.room.message") {
            res.send(msglist)
            return; 
          }
          console.log(msglist)
          msglist.push(event.event.content.body)
    });
})

module.exports=router