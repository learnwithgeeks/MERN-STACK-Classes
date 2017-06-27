var database = firebase.database();
var x = location.hash;
var z = x.substring(1);
var c = document.getElementById('jumb');
c.innerHTML=z;
var container;
var myVar = setInterval(load, 10000);
var topicinformation ;
load();
function logout()
{
  window.location="index.html#"+z;
}
function addTopic()
{
  container = document.getElementById('containerdo');
  topicinformation = document.getElementById('topicinformation').value;
  if(topicinformation!='')
  {
  save();
  load();
}
}
function save()
{
  database.ref('topics/').push(
      { topic:topicinformation,
         by:z
       }
  );
}
function load()
{
  var container = document.getElementById('containerdo');
  database.ref('topics/').once('value').then(function(snapshot) {
    for (var i in snapshot.val()) {
  container.innerHTML += "<div id="+i+"><img src='./img/arrow.png' width='25px' id='img'><h4 id='topic'>&nbsp&nbsp&nbsp<a href='comment.html#"+snapshot.val()[i].topic+"'>"+snapshot.val()[i].topic+"</a> by "+snapshot.val()[i].by+" </h4></div>";
}});
container.innerHTML='';
}
