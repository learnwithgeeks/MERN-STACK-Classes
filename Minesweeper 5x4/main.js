$(document).ready(function() {
  var MINE = [];
  var correct= [];
  let gameover=false;
  for(var i =0 ; i<Math.round(Math.random()*15); i++){
    MINE.push(Math.round(Math.random()*19));
  }
  if(MINE.length==0)
  {
    MINE.push(Math.round(Math.random()*5));
  }
  
  var z = 20-MINE.length;
  for(var i=0 ; i<z;i++)
  {
    correct.push(i);
  }
  console.log(MINE);
  $(".cell").click(function() 
  {  
    check(this);
    function check(td)
    {
      for(var i in MINE)
      {
      if(td.id==MINE[i])
      {
        checkHasMine(td);
        $("#over").css('visibility','visible');
        break;
      }
  }
    if(gameover==false)
    {
    isOpened(td);
    correct.pop();
    $(td).unbind('click')
    console.log(correct);
    if(correct.length==0)
    {
      $('#winner').css('visibility','visible');
      $('a').css('visibility','visible');
    }
}
}
    function checkHasMine(td)
    { 
      gameover=true;
      $('a').css('visibility','visible');
      addBackMine(td);
    }
    function addBackMine(td)
    {
      for(var i of MINE)
      {
      $('#'+i).css('background-color','rgba(11,11,11,0.6)');
      $('#'+i).css('background-image','url(mine.png)');
    } 
    }
    function isOpened(td)
    {
      $(td).css('background-color','rgba(11,11,11,0.6)');
      $(td).css('background-image','url(correct.png)');
    }
  });
});