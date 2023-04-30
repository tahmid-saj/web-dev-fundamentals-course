const express = require("express");
const bodyParser = require("body-parser");

const app = express();

// app.use((req, res, next) => {
//     console.log("<h1>Hellloo</h1>");
//     next();
// });

// app.use(bodyParser.urlencoded({extended: false}));
// app.use(bodyParser.json());

// app.get('/:id', (req, res) => {
//     console.log(req.query);
//     console.log(req.header);
//     console.log(req.params);

//     res.status(404).send("not found");
// });

app.use(express.static(__dirname + '/public'));

app.listen(3000);
