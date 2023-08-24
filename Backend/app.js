const host = "localhost"
const port = 3000;

const fs = require('fs')
const path = require("path")
const cors = require('cors');
const morgan = require('morgan')
const express = require("express"),
    app = express();

app.use(cors({
    origin: '*'
}));

// buat accesslog
const accessLogStream = fs.createWriteStream(path.join(__dirname, 'access.log'), { flags: 'a' })

// setup 
app.use(morgan('combined', { stream: accessLogStream }))
app.use(morgan("dev"))

app.use(express.json());

const router = require("./data/routes");

// router
app.use("/api", router);

// node app.js
app.listen(port, function () {
    console.log(`Server is running on http://${host}:${port}`);
});