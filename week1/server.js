var express = require('express');
var app = express();

app.use('/', 
    function(req, res)
    {
        res.send('Hello Dude.');
    }
);

app.listen(8000, function()
{
    console.log('Server Running....');
});
