import { ImgToB64_Send } from './../modules/img/img.js';

let user_id=$.cookie("id");
let url = "https://digital-trace-mgtu.ru/api/v1/user/achievement";
let selector = 'images';



$("#uploadForm").on("submit",function(event){ //id кнопки
event.preventDefault();
var achive = [129,120,110];
var object_data = {
    "achive_types":[]
};
achive.forEach( function(item,ind){

    object_data.achive_types[ind] = item;
});
ImgToB64_Send(selector,object_data,url);
});
