// Dependencies

const express = require('express');
const apiroutes = require('./routes/apiroutes');
const htmlroutes = require('./routes/htmlroutes');


const app = express();

const PORT = process.env.PORT || 3000;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));
app.use("/api", apiroutes);
app.use("/", htmlroutes);



app.listen(PORT, () => console.log(`PORT is active on local host ${PORT}`), console.error());