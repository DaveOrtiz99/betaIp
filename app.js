
const express = require('express');
require('dotenv').config();
const app = express();
const port = process.env.PORT || 3000;
var bodyParser = require('body-parser');

// parse application/json
app.use(bodyParser.json())

app.set('trust proxy', true)


app.get('/', (req, res) => {

    var ip = req.header('x-forwarded-for') || req.connection.remoteAddress;
    console.log(ip);
    res.status(200).send(ip);
});

app.listen(port, (error) => {
    if (!error)
        console.log("Server is Successfully Running, and App is listening on port " + port)
    else
        console.log("Error occurred, server can't start", error);
}
);