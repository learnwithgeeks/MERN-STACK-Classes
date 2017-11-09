const Guid = require('guid');
const Request  = require('request');
const Querystring  = require('querystring');
const express = require('express');//Using Module express for building web application
const next = require('next');//Using Module next for server-side rendering
const bodyParser = require('body-parser');//Using Module body-parser for specify the type of the data server use

var csrf_guid = Guid.raw();
const account_kit_api_version = 'v1.0';
const app_id = '115882382405015';
const app_secret = '983e94cc99c5871e045f785ddcdaf8df';
const me_endpoint_base_url = 'https://graph.accountkit.com/v1.0/me';
const token_exchange_base_url = 'https://graph.accountkit.com/v1.0/access_token'; 
var information = [];

const dev = process.env.NODE_ENV !== 'production' //This means that node environment is in development mode
const app = next({ dev }) //this will call the node pages in developement mode
const handle = app.getRequestHandler()//this will handle request all the pages of next


//When App prepares
app.prepare()//when app prepare do something
.then(() => {
const server = express() // Invoke methods of express in server constant

//MIDDLEWARE
server.use(bodyParser.json())//Calling the data in json format
server.use(bodyParser.urlencoded({extended: false}))//no url encoded representation



server.get('/view',(req,res)=>{
    var view = {
        appId: app_id,
        csrf: csrf_guid,
        version: account_kit_api_version,
      };
      res.send(view);

})

server.post('/login_success',(req,res) => {
    // CSRF check
  if (req.body.csrf === csrf_guid) {
    var app_access_token = ['AA', app_id, app_secret].join('|');
    var params = {
      grant_type: 'authorization_code',
      code: req.body.code,
      access_token: app_access_token
    };
    // exchange tokens
    var token_exchange_url = token_exchange_base_url + '?' + Querystring.stringify(params);
    Request.get(token_exchange_url, function(err,resp,body) {
      var view = JSON.parse(body);
      // get account details at /me endpoint
      var me_endpoint_url = me_endpoint_base_url + '?access_token=' + view.access_token;
      Request.get(me_endpoint_url, function(err,resp,body) {
        information = JSON.parse(body);
      });
      res.redirect('/loggedIn')
    });   
  }
  else {
    res.send('Sorry Something Went Wrong ');
  }
})

server.get('/login_success', (req, res) =>
{
res.send(information);
})
//Click logout will delete session of user
server.post('/logout', (req, res) =>
{
req.logout();//delete session of user
res.redirect('/');
})

//getting all the pages and handle there req and res
server.get('*', (req, res) => {
return handle(req, res)
})


//Server local port
server.listen(3000, (err) => {
if (err) throw err
console.log('> Ready on http://localhost:'+3000)
})
})
