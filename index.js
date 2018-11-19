var express = require('express');
var app = express();


app.get("/", function(request, response){
    response.sendFile(__dirname + "/index.html")
});

var PORT = process.env.PORT || 8080;

app.listen(PORT,  function(request, response){
    console.log("Listening On port :" + PORT);
});
