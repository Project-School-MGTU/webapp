import { UserInfo } from './../modules/user/user.js';
import { GetAvatar } from '../modules/user/SendAvatar.js';

const access_token=$.cookie("access_token");
const user_email=$.cookie("user_email");

let result_klimov = $.cookie("result");


if(result_klimov){
    $('.prof_empty').css('display', 'none');
    $('.prof_info').css('display', 'block');
}
    if(access_token && user_email){
         UserInfo(user_email);
         GetAvatar();
    }
    // else{
    //     document.location.href = '../../sign_in.html?need=true';
    // }

  
