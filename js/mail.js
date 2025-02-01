import { SignUp } from './modules/user/user.js';

$('#sign_up').on('click', function() {

var email = $("#email").val().trim();
var name = $("#name").val().trim();
var surname = $("#surname").val().trim();
var pass = $("#pass").val().trim();
var pass2 = $("#pass2").val().trim();

if(name==""){
  $("#error").text("");
  $("#error").append('Введите имя');
  return false;
}else if(surname==""){
  $("#error").text("");
  $("#error").append('Введите фамилию');
  return false;
}else if(email==""){
  $("#error").text("");
  $("#error").append('Введите почту');
  return false;
}else if(pass==""){
  $("#error").text("");
  $("#error").append('Введите пароль');
  return false;
}else if(pass2==""){
  $("#error").text("");
  $("#error").append('Повторите пароль');
  return false;
}else if(pass!=pass2){
  $("#error").text("");
  $("#error").append('Пароли не совпадают');
  return false;
}

$("#error").text("");

  var data_body = {
  email: email,
  login: email,
  name: name,
  password: pass,
  role: 'user',
  surname: surname
};

SignUp(data_body,"#sign_up","#success");

});
