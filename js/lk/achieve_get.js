import { GetInfoAchievement } from './../modules/user/GetInfoAchievement.js';
import { GetImageAchievement } from './../modules/user/GetImageAchievement.js';


let access_token=$.cookie('access_token')

let url_get = 'https://digital-trace-mgtu.ru/api/v1/user';
let url_info = 'https://digital-trace-mgtu.ru/api/v1/user/achievement';

GetInfoAchievement(url_info,access_token);



JSON.parse($.cookie('achieve')).forEach(function(elem,ind){
GetImageAchievement(url_get+'/achievement/'+Number(elem.achievement_id)+'/image',function(img){
  $('.u-section-1 .u-image-'+Number(ind+6)).css('background-image', 'url(' + img + ')');
})
})
  


