const express = require('express');
const dotenv = require('dotenv').config();
const bodyParser = require('body-parser');
const mySqlPool = require('./config/db')
const studentRouter = require('./routes/studentRouter')
const PORT = process.env.PORT || 5000

let app = express();
app.use(bodyParser.json());


app.use("/api/student",studentRouter)
app.get("/", (req, res) => {
    res.status(200).json({
        message: "successful."
    })
})

mySqlPool.query("SELECT 1").then(()=>{
    console.log("db başarı ile bağlandı.")
    app.listen(5002, () => {
        console.log(`server is 5002 is running.`);
    })
}).catch((err)=>{
    console.log("db bağlanırken hata oluştu",err);
})


