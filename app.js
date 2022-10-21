const express = require("express")
const app = express()
var port = 8080
app.get("/", (request, response)=> {
    response.send("server is workig fine")
})

app.listen(port, () => {
    console.log("server is running on port 8080")
})