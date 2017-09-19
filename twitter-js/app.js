const express = require( 'express' );
const app = express(); // creates an instance of an express application

app.get('/', function (req, res) {
    res.send('Hello World!')
  })

app.use(function (req, res, next) {
    console.log(req.method, req.originalUrl);
    next();
})

app.listen(3000, function(){
    console.log("server listening");
})