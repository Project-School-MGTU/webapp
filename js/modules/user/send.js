import { ImgToB64 } from '../img/img.js';
import { SendAvatar } from './SendAvatar.js';

const selector = "images";


$("#uploadForm").on("click",function(){
    ImgToB64(selector,function(object){
        let pre_prefix = object.image.split(';');
        console.log(pre_prefix)
        let prefix = pre_prefix[0].split('/')
        console.log(prefix[1]);
        let pre_image = object.image.split(',');
        let image = pre_image[1];
        SendAvatar(image,prefix[1])
    });
})