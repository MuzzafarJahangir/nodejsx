//now it load express module with `require` directive
var express = require('express')
var app = express()
//Define request response in root URL (/) and response with text Hello World!
app.get('/', function (req, res) {
  res.send('Hello World! Deploying this into azure cloud. for DEMO only')
})
//Launch listening server on port 8080 and consoles the log.
app.listen(80, function () {
  console.log('app listening on port 8080!')
})