var LOAD = [];
load();
function addTodo(){
  var inputText = document.getElementById('input').value;
  LOAD.push(inputText);
  showHTML();
}
function showHTML(){
  var add = document.getElementById('add');
  var inputText = document.getElementById('input').value;
    add.innerHTML="";
  for(var i in LOAD){
    add.innerHTML +=LOAD[i]+"<br>";
  }
  inputText= "";
  save();
}
function save()
{
  localStorage.mylist = JSON.stringify(LOAD);
}
function load()
{
  LOAD = JSON.parse(localStorage.mylist);
  showHTML();
}
function cleared()
{
  var add = document.getElementById('add');
  add.innerHTML = "";
  localStorage.clear();
}
