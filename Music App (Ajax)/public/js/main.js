var DATA = {};
load();
function render()
{
  var container = document.getElementById('container');
  var image = document.getElementById('image');
  for(var i in DATA)
  {
  container.innerHTML += "<div id=album"+i+"><br><img id="+i+" class='imgtumb' onclick='songlist(this.id)' src="+DATA[i].image+" width='150px'><div id='description'><div class='abc'>Song : <label class='info'>"+DATA[i].title+"</label>"+"<br> Artist : <label class='info'>"+DATA[i].artist+"</label><br> <button type='button' class='btn btn-primary btn-group-justified' id="+i+" onclick='buynow(this.id)'>Buy Now</button></div></div></div><hr>";
}
}
function songlist(Id)
{
window.location = 'songs.html#'+Id;
}
function buynow(Id)
{
  window.location.assign(DATA[Id].url);
}
function load(){
  $.get('https://nodedatastore.herokuapp.com/sada',function(response){
    DATA = response;
    render();
  });
}
