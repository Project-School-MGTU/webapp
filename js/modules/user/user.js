export function SignUp(data_body,button,success){
    $.ajax({
        url: 'https://digital-trace-mgtu.ru/api/v1/mail/user',
        contentType: "application/json",
        method: 'POST',
        dataType: 'json',
        data: JSON.stringify(data_body),
        processData:false,
        before: $(button).prop('disabled',true),
        success: function(data){
          $(button).prop('disabled',false)
          $(success).html('Перейдите по ссылке отправленной на вашу почту');
      },
      error: function (jqXHR, exception) {
        $("#send_mail").prop('disabled',false)
          if (jqXHR.status === 0) {
              alert('Not connect. Verify Network.');
          } else if (jqXHR.status == 404) {
              alert('Requested page not found (404).');
          } else if (jqXHR.status == 500) {
              alert('Internal Server Error (500).');
          } else if (exception === 'parsererror') {
              alert('Requested JSON parse failed.');
          } else if (exception === 'timeout') {
              alert('Time out error.');
          } else if (exception === 'abort') {
              alert('Ajax request aborted.');
          } else {
              alert('Uncaught Error. ' + jqXHR.responseText);
          }
          }
      })
}

export function SignIn(data_body){
    let redirect = '../../../lk/';
    $.ajax({
        url: 'https://digital-trace-mgtu.ru/api/v1/auth',
        contentType: "application/json",
        method: 'POST',
        dataType: 'json',
        data: JSON.stringify(data_body),
        processData:false,
        before: $("#sign_in").prop('disabled',true),
        success: function(data){
          $("#sign_in").prop('disabled',false)
          $.cookie('access_token',data.access_token,{exception: 7});
          $.cookie('refresh_token',data.refresh_token,{exception: 7});
          $.cookie('user_email',data_body.email,{exception: 7});
          document.location.href = redirect;
      },
      error: function (jqXHR, exception,data) {
          if (jqXHR.status === 0) {
              alert('Not connect. Verify Network.');
          } else if (jqXHR.status == 404) {
              alert('Requested page not found (404).');
          } else if (jqXHR.status == 500) {
              alert('Internal Server Error (500).');
          } else if (exception === 'parsererror') {
              alert('Requested JSON parse failed.');
          } else if (exception === 'timeout') {
              alert('Time out error.');
          } else if (exception === 'abort') {
              alert('Ajax request aborted.');
          } else {
              alert('Uncaught Error. ' + jqXHR.responseText);
          }
          if(!data.user_id){
              $("#sign_in").prop('disabled',false);
              $("#error").text('Введённые данные неверны');
          }
          }
      })
}

export function UserInfo(user_email){
    $.ajax({
        url: 'https://digital-trace-mgtu.ru/api/v1/user',
        contentType: "application/json",
        method: 'GET',
        dataType: 'json',
        data: {email:user_email},
        before: $("#sign_in").prop('disabled',true),
        success: function(data){
          $("#user_info").text(data[0].name);
          $("#user_info").append("<br>"+data[0].surname);
          $.cookie("name",data[0].name);
          $.cookie("surname",data[0].surname);
      },
      error: function (jqXHR, exception,data) {
          if (jqXHR.status === 0) {
              alert('Not connect. Verify Network.');
          } else if (jqXHR.status == 404) {
              alert('Requested page not found (404).');
          } else if (jqXHR.status == 500) {
              alert('Internal Server Error (500).');
          } else if (exception === 'parsererror') {
              alert('Requested JSON parse failed.');
          } else if (exception === 'timeout') {
              alert('Time out error.');
          } else if (exception === 'abort') {
              alert('Ajax request aborted.');
          } else {
              alert('Uncaught Error. ' + jqXHR.responseText);
          }
          }
      })
}