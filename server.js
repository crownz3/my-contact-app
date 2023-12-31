const express = require("express");
const errorHandler = require("./middleware/errorHandler");
const dotenv = require("dotenv").config();
const app = express();

const port = process.env.PORT || 3200 ;

app.use(express.json());
app.use("/api/contacts",require("./routes/contactRoute"));
app.use(errorHandler);
 
app.listen(port , () =>{
    console.log(`listenning the port ${port}`);
});
