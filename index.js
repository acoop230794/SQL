const express = require("express")

const app = express();
//INITIALIZE EXPRESS

const routes = require("./routes");
//SET UP ROUTES TO KEEP INDEX.JS CLEAN

app.use('/', routes);

app.listen(process.env.PORT || 3005, () => {
    console.log("Server is listening");
})