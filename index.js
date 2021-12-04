require("dotenv").config();

const express = require('express')
const app = express()
app.use(express.json())
const port = 5000




const product=require("./product")
const company=require("./company")
const seller= require("./seller")
const mongoose = require("mongoose")

mongoose
    .connect(process.env.MONGOURL)
    .then(() => console.log("Moongo db connect"))
app.get('/', (req, res) => res.send('Welcome to Product Management System'))

app.use("/product",product);
app.use("/company",company);
app.use("/seller",seller);



app.listen(port, () => console.log(`Example app listening on port ${port}!`))
