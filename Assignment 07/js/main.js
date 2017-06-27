var database = firebase.database();
var firstname;
var lastname;
var username;
var pass;
var enterpassword;
var repeatpassword;
var autogenerate;
var checkusernamepassword;
var usernamecheck;
var passwordcheck;
function newUser()
{
    firstname = document.getElementById('firstname').value;
    lastname = document.getElementById('lastname').value;
    enterpassword = document.getElementById('enterpassword').value;
    repeatpassword = document.getElementById('repeatpassword').value;
    autogenerate = document.getElementById('autogenerate');
    if(firstname=="" || lastname=="" || enterpassword=="" || repeatpassword=="")
    {
      autogenerate.value = "Please enter username or password";
    }
    else {
      if(enterpassword==repeatpassword)
      {
      autogenerate.value = String(firstname+lastname+Math.floor(Math.random()*1000,1));
      alert('Please note your username '+ autogenerate.value);
      post();
    }
    else {
      autogenerate.value = "Please enter correct password";
    }
    }
}
function post()
{
  database.ref('user/'+autogenerate.value).set({
    //provide id for each of the seperate user
      fn: firstname,
      ln: lastname,
      p : enterpassword,
      u : autogenerate.value
    });
    window.location="dashboard.html#"+autogenerate.value;
  }
function load()
{
  checkusernamepassword = document.getElementById('checkusernamepassword');
  username =document.getElementById('username').value;
  pass = document.getElementById('pass').value;
  database.ref('user/'+username).once('value').then(function(snapshot) {
  usernamecheck = snapshot.val().u;
  passwordcheck = snapshot.val().p;
  if (usernamecheck==username && passwordcheck==pass) {
  window.location="dashboard.html#"+username;
  }
  else {
    alert('please enter correct username or password');
  }
});
}
