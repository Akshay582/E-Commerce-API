const express = require('express');
const app = express();
const PORT = 8000;

const mongoDB = require('./config/mongoose');

app.use(express.urlencoded({extended: true}));

app.get('/', function(req, res){
    res.send("<h2 style='color:blue;'>E Commerce API prototype.</h2>")
});

app.use('/api', require('./api/routes'));

app.listen(PORT, function(err){
    if(err) console.log(err);
    console.log(`Port: ${PORT}`);
})
