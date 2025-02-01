import { SignIn } from '../modules/user/user.js';

function getQueryStringValue(key) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(key);
}

// Пример использования:
const myVar = getQueryStringValue('need');

if(myVar){
    $("#error").text("Для доступа авторизуйтесь");
}

$('#sign_in').on('click', function() {
    
    var email = $("#email").val().trim();
    var pass = $("#password").val().trim();
    console.log(email)
    if(email==""){
      $("#error").text("");
      $("#error").append('Введите почту');
      return false;
    }else if(pass==""){
      $("#error").text("");
      $("#error").append('Введите пароль');
      return false;
    }

    $("#error").text("");

    var data_body = {
      email: email,
      password: pass
    };

SignIn(data_body);
    
    
    });
    