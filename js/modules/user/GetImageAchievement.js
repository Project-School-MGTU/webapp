export function GetImageAchievement(url,callback){
    $.ajax({
        type: 'GET',
        url: url,
        headers:{
            'Authorization':$.cookie('access_token')
        },
        dataType:'text',
        contentType: 'application/json',
        dataProcess: false,
        success: function(data) {
            callback(data)
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