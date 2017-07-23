var DATA = [];
var database = firebase.database();
load();
function load(){
  database.ref('Data/').once('value').then(function(snapshot){
    DATA = snapshot.val().data;
    var id = window.location.hash.substring(1);
    var container = document.getElementById('container');
      container.innerHTML = "<center><div id=album"+id+"><br><img id="+id+" class='imglarge' src="+DATA[id].image+" width='500px'><div id='description'><div class='infosong'><label class='info'>"+DATA[id].title+"</label>"+"<br><label class='info'>"+DATA[id].artist+"</label><br> <button type='button' class='btn btn-primary btn-group-justified' id="+id+" onclick='buynow(this.id)'>Buy Now</button></div></div></div><button onclick='album()' class='btn btn-success' id='buttonspecial'>Go Back</button></center>";
      });
}
function buynow(Id)
{
  window.location.assign(DATA[Id].url);
}
function album()
{
  window.location.assign("index.html");
}
