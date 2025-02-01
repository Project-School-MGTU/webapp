import { Get_QuesionId, Post_NewAttempt, Get_Attempt_Button } from './../modules/test/klimov.js';


const attempt_id = Number($.cookie("attempt_id"));
const redirect = 'klimov.html';
const test_id = 1;

function getQueryStringValue(key) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(key);
}
// Пример использования:
const myVar = getQueryStringValue('accept_token');

$(".but").on("click","#continue",function(){
    console.log(attempt_id)
    Get_QuesionId(attempt_id,redirect);
});
$(".but").on("click","#start",function(){
    Post_NewAttempt(test_id,redirect);
})
$(".but").on("click","#show_att",function(){
    Get_Attempt_Button(test_id,redirect);

})
