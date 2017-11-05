var express = require('express');
var app = express();
var bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(express.static(__dirname + '/'));

app.get("*", function(request, response) {
    response.sendFile(__dirname + "/src/views/index.html");
});

app.listen(8000, function () {  
    console.log("Listening at PORT : 8000");
});