var database = firebase.database();
var name ;
var NAME = [];
var chat;
var CHAT = [];
var gender;
var GENDER = [];
var date;
var DATE = [];
var Id=0 ;
var interval=setInterval(myMethod, 1000);
myMethod();
function newUser()
  {
    var male =document.getElementById('male');
    var female = document.getElementById('female');
    var other = document.getElementById('other');
    var getname = document.getElementById('name');
    name = getname.value.charAt(0).toUpperCase()+getname.value.slice(1).toLowerCase();
  if (name!='') {
    if(male.checked==true)
    {
      gender = male.value;
    var navbar = document.getElementById('navbar');
    navbar.innerHTML = "<div class='wall-sm' style='margin-top:-12px;'><h2>User : <small>"+ name+"</small></h2></div>";
  }
  else if(female.checked==true)
  {
    gender = female.value;
  var navbar = document.getElementById('navbar');
  navbar.innerHTML = "<div class='wall-sm' style='margin-top:-12px;'><h2>User : <small>"+ name+"</small></h2></div>";
}
else
{
  gender = other.value;
var navbar = document.getElementById('navbar');
navbar.innerHTML = "<div class='wall-sm' style='margin-top:-12px;'><h2>User : <small>"+ name+"</small></h2></div>";
}
}
}
function addChat(){
  var inputText = document.getElementById('input');
    if (inputText.value=='') {
      alert('Please Enter Your Message');
    }
    else{
      chat = inputText.value.charAt(0).toUpperCase()+inputText.value.slice(1).toLowerCase();
      date = Date();
}
  save();
  inputText.value = '';
}
function myMethod(){
  database.ref('chatapplicationdata/').once('value').then(function(snapshot) {
    for(var i in snapshot.val()){
      NAME[Id]= snapshot.val()[i].name;
      CHAT[Id]= snapshot.val()[i].chat;
      GENDER[Id]= snapshot.val()[i].gender;
      DATE[Id]= snapshot.val()[i].date;
      Id++;
}});
render();
}
function render()
{
  var container = document.getElementById('container');
  container.innerHTML = '';
  for(var j=Id-1; j>=0 ; j--)
  {
  if(GENDER[j]=="female")
  {container.innerHTML += "<div id="+j+" style='border-bottom:3px inset rgba(11,11,11,0.1);padding:10px;'><div class='media'><div class='media-left'><img src='img/2.png' class='media-object' style='width:60px;padding-bottom:30px;'></div><div class='media-body'><h4 class='media-heading'>"+NAME[j]+"</h4><p>"+CHAT[j]+"</p></div>"+DATE[j]+"</div>";}
  else
  {container.innerHTML += "<div id="+j+" style='border-bottom:3px inset rgba(11,11,11,0.1);padding:10px;'><div class='media'><div class='media-left'><img src='img/1.png' class='media-object' style='width:60px;padding-bottom:30px;'></div><div class='media-body'><h4 class='media-heading'>"+NAME[j]+"</h4><p>"+CHAT[j]+"</p></div>"+DATE[j]+"</div>";}
  }
  Id=0;
}
function save()
{
database.ref('chatapplicationdata/').push({
  chat,
  name,
  gender,
  date
  });
  myMethod();
}
