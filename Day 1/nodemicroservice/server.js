// getting the dependencis of standard express module
const express = require('express');
const fs = require('fs');
// Initialize the app - server side app
const app = express();

// Start serving the whole folder using my webserver
app.use(express.static('webapp'));

// register the end point
app.get('/', function (req, res){
    res.send('Hello World');
});

// add the endpoint to return the employee data
// app.get('/employees', function(req, res) {
//     let contentFile = fs.readFileSync(__dirname + "/webapp/emp.json", "utf-8");
//     res.send(contentFile);
// });

// Listen to a port and start the web app
let nPort = process.env.PORT || 3000;
console.log(`server started at http://localhost:${nPort}`);
app.listen(nPort);