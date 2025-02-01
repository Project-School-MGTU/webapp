import { SendImgtoServer } from '../user/sendimg.js';

export function ImgToB64_Send(selector,object_data,url){
    var fileInput = document.getElementById(selector); //id input
    var files = fileInput.files;
    var file = files[0];
            if (file) {
                var reader = new FileReader();
                reader.onload = function (e) {
                    var img = new Image();
                    img.onload = function() {};
                    img.src = e.target.result;
                    object_data.image=e.target.result;
                    SendImgtoServer(object_data,url);
                };
                reader.readAsDataURL(file);
            }
}

export function ImgToB64(selector,callback){
    var object_data = {
        image:""
    }
    var fileInput = document.getElementById(selector); //id input
    var files = fileInput.files;
    var file = files[0];
            if (file) {
                var reader = new FileReader();
                reader.onload = function (e) {
                    var img = new Image();
                    img.onload = function() {};
                    img.src = e.target.result;
                    object_data.image=e.target.result;
                    callback(object_data)
                };
                reader.readAsDataURL(file);
            }
}
