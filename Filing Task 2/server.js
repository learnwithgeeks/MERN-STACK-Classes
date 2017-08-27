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
app.prepare()
.then(() => {
  const server = express()

  server.get('/getdata',(req,res)=>{
    var model = fs.readFileSync('./config/license.json','UTF-8');
    encrypted = key.encrypt(model, 'base64');
    console.log(encrypted);
    fs.writeFileSync('./config/data.info',encrypted);
    decrypted = key.decrypt(encrypted, 'utf8');
    console.log(decrypted);
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
