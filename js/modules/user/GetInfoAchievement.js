export function GetInfoAchievement(url_info,access_token){ //получает все ачивки пользователя
    $.ajax({
      type: 'get',
      headers:{
        'Authorization':access_token
      },
      contentType: 'application/json',
      url: url_info,
      dataType: 'json',
      success: function(response) {          
          $.cookie('achieve',JSON.stringify(response),{expires: 7, path: '/'});
      },
      error: function(jqXHR,exception) {
        if(JSON.parse(jqXHR.responseText).message == "Authorization in header is required"){
          document.location.href = 'https://digital-trace-mgtu.ru/sign_in.html'
        }
        if(jqXHR.status==500){
          document.location.href = 'https://digital-trace-mgtu.ru/sign_in.html'
        }
      }
  });
  }