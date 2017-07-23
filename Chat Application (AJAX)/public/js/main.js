var DATA = [];
var NAMELIST = [];
var MALEFEMALE = [];
var name ;
var interval;
var gender;
var request = new XMLHttpRequest();
var reque = new XMLHttpRequest();
var req = new XMLHttpRequest();
load();
function newUser()
{
  name = prompt("Please Enter Your Name Here :" );
  if(name==null || name==undefined || !name || name==''){
    name = "Guest"+String(Math.floor(Math.random()*1000),5);
  }
  else{
    //nothing to do here
}
  gender = confirm("Press ok to select gender female\nPress cancel to select gender male !");
       addChat();
  }
function value()
{
  var inputText = document.getElementById('input');
  inputText.focus;
}
function addChat(){
  var navbar = document.getElementById('navbar');
  var inputText = document.getElementById('input');
  if(name==null || name==undefined || !name || name=='')
  {
  newUser();
  }
  else{
    if (inputText.value=='') {
      value();
    }
    else{
  DATA.push(inputText.value);
  NAMELIST.push(name);
  MALEFEMALE.push(gender);
}
navbar.innerHTML = "<div class='wall-sm' style='margin-top:-12px;'><h2>User : <small>"+String(name)+"</small></h2></div>";
}
var inputText = document.getElementById('input');
inputText.value = '';
  showHTML();
}
function showHTML(){
  var container = document.getElementById('container');
  container.innerHTML = '';
    for(var i=DATA.length-1 ; i>=0 ; i--){
      if(MALEFEMALE[i]==true)
      {container.innerHTML += "<div id="+i+" style='border-bottom:3px inset rgba(11,11,11,0.1);padding:10px;'><div class='media'><div class='media-left'><img src='img/2.png' class='media-object' style='width:60px'></div><div class='media-body'><h4 class='media-heading'>"+NAMELIST[i]+"</h4><p>"+DATA[i]+"</p></div></div>";}
      else
      {container.innerHTML += "<div id="+i+" style='border-bottom:3px inset rgba(11,11,11,0.1);padding:10px;'><div class='media'><div class='media-body'><h4 class='media-heading'>"+NAMELIST[i]+"</h4><p>"+DATA[i]+"</p></div><div class='media-right'><img src='img/1.png' class='media-object' style='width:60px;'></div></div>";}
    }
  save();
}
function save(){
localStorage.myList = JSON.stringify(DATA);
localStorage.my = JSON.stringify(NAMELIST);
localStorage.List = JSON.stringify(MALEFEMALE);
request.open("POST","https://nodedatastore.herokuapp.com/chatapplicationdata");
request.setRequestHeader("Content-Type","application/json");
request.send(localStorage.myList);
reque.open("POST","https://nodedatastore.herokuapp.com/chatapplicationname");
reque.setRequestHeader("Content-Type","application/json");
reque.send(localStorage.my);
req.open("POST","https://nodedatastore.herokuapp.com/chatapplicationgender");
req.setRequestHeader("Content-Type","application/json");
req.send(localStorage.List);
}
function load(){
  inter();
  DATA = JSON.parse(localStorage.myList);
  NAMELIST = JSON.parse(localStorage.my);
  MALEFEMALE = JSON.parse(localStorage.List);
  request.open("GET","https://nodedatastore.herokuapp.com/chatapplicationdata");
  window.onload = function()
{
  if(DATA=='')
{
  DATA = JSON.parse(request.responseText);
}
}
  request.send();
  reque.open("GET","https://nodedatastore.herokuapp.com/chatapplicationname");
  window.onload = function()
{
  if(NAMELIST=='')
{
  NAMELIST = JSON.parse(reque.responseText);
}
}
  reque.send();
  req.open("GET","https://nodedatastore.herokuapp.com/chatapplicationgender");
  window.onload = function()
{
  if(NAMELIST=='')
{
  NAMELIST = JSON.parse(req.responseText);
}
}
  req.send();
  name="";
  showHTML();
}
function inter()
{
  var interval=setInterval(showHTML, 1000);
}
