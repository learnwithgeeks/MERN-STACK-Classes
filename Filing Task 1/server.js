const express = require('express')
const next = require('next')
const mongoose = require('mongoose');
const fs = require('fs');
const NodeRSA = require('node-rsa');
const key = new NodeRSA({b: 512});
const port = parseInt(process.env.PORT, 10) || 3000
const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()
var encrypted;
var decrypted;
//Connect to database
mongoose.connect('mongodb://Vivek Sharma:u2canB$$@ds127983.mlab.com:27983/mernstackcourse',(err)=>{
    if(err){throw Error("Database connection failed")}
    else{console.log("Database connected")}
})

var superheromodels = mongoose.model('superheromodels',{
    heroID: String,
    superheroName: String,
    originalName: String
})

//Read Contents from Db
superheromodels.find({},(err,superHero) =>{
    if(err) throw Error("Cannot fetch super hero data");
    encrypted = key.encrypt(superHero, 'base64');
    fs.writeFileSync('./config/data.info',encrypted);
})


app.prepare()
.then(() => {
  const server = express()

  server.get('/getdata',(req,res)=>{
      decrypted = key.decrypt(encrypted, 'utf8');
      res.json(decrypted);
  })

  server.get('*', (req, res) => {
    return handle(req, res)
  })

  server.listen(port, (err) => {
    if (err) throw err
    console.log(`> Ready on http://localhost:${port}`)
  })
})
