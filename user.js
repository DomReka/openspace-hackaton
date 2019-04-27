var attempt = 3;
var login = "Louis"
var pwd = "12345";
function validate(){
  //récupère les valeurs entrée dans le form de panneau.html
  var username = document.getElementById('username').value;
  var password = document.getElementById('password').value;

  if(username == login && password == pwd){
    alert('login succesfully');
    window.location = "name file of julien";//redirecte à l'interface de l'user
    return false;
  }
  else{
    attempt --;
    alert ('You have left');
    //Impossible de se log après 3 essais
    if(attempt === 0){
      document.getElementById('username').disabled = true;
      document.getElementById('password').disabled = true;
      document.getElementById('submit').disabled = true;
      window.location = "404Page.html"
      return false;
    }
  }
}
