import express = require('express');
var app = express();

function serve(req: any, res: any): void
{
    res.send('Sup Man!');
}

app.use('/', serve
);

app.listen(8000, function()
{
    console.log('Server Running....');
});
