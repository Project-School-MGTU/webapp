export function SendImgtoServer(object_data,url) {
    $.ajax({
                type: 'POST',
                headers:{
                    'Authorization':$.cookie('access_token')
                },
                data: JSON.stringify(object_data),
                contentType: 'application/json',
                url: url,
                dataProcess: false,
                success: function(response) {
                    console.log('Изображение загружено', response);
                },
                error: function(error) {
                    alert('Ошибка при отправке на сервер', error);
                }
            });
    };