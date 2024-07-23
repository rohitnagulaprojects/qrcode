const express = require("express");
const cors = require("cors");


const app = express();
app.use(cors());
app.use(express.json());
app.post("/save",(req,res)=>{
    let workurl = req.body.url;
    console.log(workurl);
    let result = "https://api.qrserver.com/v1/create-qr-code/?data="+encodeURIComponent(workurl);
    res.json({ url: result }); // Send as JSON object});
});



app.listen(7003,()=>{console.log("Server ready at http://localhost:7003");});