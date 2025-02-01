export function SendAvatar(image,prefix){
    var data = {
        image_base64: image,
        prefix: prefix
    }
    $.ajax({
        url: 'https://digital-trace-mgtu.ru/api/v1/user/avatar',
        headers:{
            'Authorization':$.cookie('access_token')
        },
        contentType: "application/json",
        method: 'PUT',
        data: JSON.stringify(data),
        processData:false,
        success: function(jqXHR){
            if(jqXHR===200){
                console.log("Отправили объект:");
            }
        },
        error: function(jqXHR,exception) {
           /*  if(JSON.parse(jqXHR.responseText).message == "Authorization in header is required"){
              document.location.href = 'https://digital-trace-mgtu.ru/sign_in.html'
            } */
           /*  if(jqXHR.status==500){
              document.location.href = 'https://digital-trace-mgtu.ru/sign_in.html'
            } */
          }
    });
}
export function GetAvatar(){
    $.ajax({
        url: 'https://digital-trace-mgtu.ru/api/v1/user/avatar',
        headers:{
            'Authorization':$.cookie('access_token')
        },
        contentType: "text/html",
        method: 'GET',
        processData:false,
        success: function(data){
            $(".img").html("<img src="+data+"alt=аватарка>")
        },
        error: function(jqXHR,exception) {
           /*  if(JSON.parse(jqXHR.responseText).message == "Authorization in header is required"){
              document.location.href = 'https://digital-trace-mgtu.ru/sign_in.html'
            } */
           /*  if(jqXHR.status==500){
              document.location.href = 'https://digital-trace-mgtu.ru/sign_in.html'
            } */
          }
    });
}