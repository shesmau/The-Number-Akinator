
const express = require("express")

const app = express()

//Port number the team has chosen 
const port = 9000

//localhost:9000
app.get("/ping", function(request, response){
    response.send("Hello")
    response.json({
        ping:"pong"
    })

})



app.listen(9000)