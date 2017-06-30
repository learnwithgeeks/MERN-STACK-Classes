var database = firebase.database();
var x = location.hash;
var z = x.substring(1);
var user = localStorage.getItem("username");
var c = document.getElementById('jumb');
var container;
var b;
var comment ;
var myVar = setInterval(load, 10000);
checkuser();
load();
function checkuser()
{
  database.ref('topics/').once('value').then(function(snapshot) {
    for (var i in snapshot.val()) {
  if(z == snapshot.val()[i].topic)
{
  c.innerHTML=z+ "<h2><span class='label label-warning'> Topic By : "+ snapshot.val()[i].by+"</span></h2>";
  document.getElementById('user').innerHTML +="<h2><span class='label label-danger'> Current User : "+ user+"</span></h2><br>";
}
}});
}

function back()
{
  window.location="dashboard.html#"+user;
}
function logout()
{
  window.location="index.html#"+user;
}
function addComment()
{
  container = document.getElementById('containerdo');
  comment = document.getElementById('commentinformation').value;
  if(comment!='')
  {
  save();
  load();
}
}
function save()
{
  b=database.ref('comment/'+z).push(
      {comment,
        by: user}
  );
}
function load()
{
  var container = document.getElementById('containerdo');
  database.ref('comment/'+z).once('value').then(function(snapshot) {
    for (var i in snapshot.val()) {
    container.innerHTML += "<div id="+i+"><img src='./img/arrow.png' width='23px' id='img'><h4 id='topi'>"+snapshot.val()[i].comment+"</h4> <h6> by "+snapshot.val()[i].by+"</h6></div>";
}});
    container.innerHTML='';
}
