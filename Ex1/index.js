const express = require('express')
const { readFile } = require('fs');
const app = express()

app.get('/', function (req,res){
    readFile('./index.html','utf8', (err, html)=>{
        if(err)
                res.status(500).send("Error");
                
        res.send(html)        
    })
});

app.get('/detail', function (req, res) {  
   // res.send(" detail page");
    readFile('./detail.html', 'utf8', (err, html)=>{
        if(err)
            res.status(600).send("Error");
        res.send(html)
    })
});


app.listen(3000 ,()=>{
    console.log("Inside your app is Run  http://localhost:3000");
});