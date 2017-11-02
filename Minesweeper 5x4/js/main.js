  var MINE = [];
  var correct= [];
  let gameover=false;
  let minelength ;
  let counter=0;
  function beg()
  {
    for(var i =0 ; i<2; i++){
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
  }
  function int()
  {
    for(var i =0 ; i<6; i++){
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
  }
  function adv()
  {
    for(var i =0 ; i<10; i++){
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
  }
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
          function donecontinues(td)
          { 
            if(counter<3)
            {
                if(MINE.indexOf(parseInt(td.id)+counter)==-1)
                {
    isOpened(document.getElementById(parseInt(td.id)+counter));
    correct.pop();
    var a = new String(parseInt(td.id)+counter)
    $("#"+a).unbind('click');
    console.log(correct);
    counter++;
    donecontinues(document.getElementById(parseInt(td.id)+counter));
          }
          else{
          }
        }
          }
          counter=0;
    donecontinues(document.getElementById(td.id))
    if(correct.length==0)
    {
      $('#winner').css('visibility','visible');
      $('a').css('visibility','visible');
      $('td').unbind('click');
      ticall(td);
      addBackMine()
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
      $('#'+i).css('background-image','url(../static/mine.png)');
    } 
    }
    function isOpened(td)
    {
      $(td).css('background-color','rgba(11,11,11,0.6)');
      $(td).css('background-image','url(../static/correct.png)');
    }
    function ticall(td)
    {
      for(var i=0 ; i<20 ; i++)
      {
        $('#'+i).css('background-color','rgba(11,11,11,0.6)');
        $('#'+i).css('background-image','url(../static/correct.png)');
      }
    }
  });
