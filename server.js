var express = require('express');
var multer  = require('multer');

var app = express();
var upload = multer();

app.get('/', function (req, res) {
  res.sendFile(__dirname + '/views/index.html');
});

app.post('/api/getFileSize', upload.single('file'), function(req, res){
    res.json({
        size: req.file.size   
    }); 
});

app.listen(process.env.PORT || 8080, function(){
    console.log("file meta data app listening to 8080 || process.env.PORT");
});