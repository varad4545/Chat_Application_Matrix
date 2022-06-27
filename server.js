const sdk=require('matrix-js-sdk')

const client=sdk.createClient({
    baseUrl:"https://matrix.org",
    accessToken: "syt_dmFyYWQ0NTQ2_vtPeXzqmWUrHHsJZMDSa_2yRWUF",
    userId: "@varad4546:matrix.org"

})

function startClient(username,password)
{
  
    client.login("m.login.password", {"user": username, "password": password}).then((response) => {
        token=response.access_token
        console.log("Succcessful Login");
    });
    
    client.startClient();
    
    client.once('sync', function(state, prevState, res) {
        console.log(state); 
    });
    
    client.on("event", function(event){
        console.log(event.getType());
        console.log(event);
    })
    
    client.on("Room.timeline", function(event, room, toStartOfTimeline) {
        console.log(event.event);
    });
}

function sendMessage(message)
{
     var testRoomId = "!cYWQINcUTqGHDdSDlL:matrix.org";
     var content = {
       "body": message,
       "msgtype": "m.text"
     };

     client.sendEvent(testRoomId, "m.room.message", content, "").then((res) => {
          console.log("Message sent successfully")
    }).catch((err) => {
     console.log("Message not sent");
    })

}



module.exports={startClient,sendMessage}
