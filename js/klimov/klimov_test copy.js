import { searchQuestion, getQuestion, getAnswer, sendAnswer, updateQuestion, Get_Attempt } from '../modules/test/klimov.js'

const user_id = Number($.cookie("id"));
const attempt_id = Number($.cookie("attempt_id"));
const redirect = 'klimov.html';
const test_id = 1;

$('.result').css('display', 'none');

if(!$.cookie("attempt_id")){
  Get_Attempt(user_id,test_id);
  location.reload();
}else{
        $(".but").text("");
        getQuestion(test_id,function(test_data){
            if($.cookie("question_id")){
                searchQuestion($.cookie("question_id"),test_data,function(i){
                    $('result').css('display', 'none');
                    // values
        let type = test_data;
        console.log(type);
        let count_q=Object.keys(type).length;
        console.log(count_q);
        //main
        $(".but").on("click","#sigma",function(){
                    getAnswer(type[i].button_type, function(msg){
                    console.log(msg);
                    sendAnswer(msg,user_id,$.cookie("question_id"));
                    console.log(count_q);
                    console.log(i);
                    console.log(i>count_q);
                    if(i==count_q-1){
                        $(".but").text("");
                        $(".kl").text("");
                        $('.sigmaform').css('display', 'none');
                        $('.result').css('display', 'flex');
                        $('.result').css('flex-direction', 'column');
                        $('.result').css('align-content', 'center');
                        $('.result').css('width', 'fit-content');
                        $('.result').css('color', 'white');
                        $('.result_human').css('font-size', '32px');
                        $("#result_h1").text("Результаты тестирования");
                        $.cookie("result_klimov",true,{expires:7,path:"/"});
                        return false;
                    } 
                    $.cookie("question_id",type[i].question_id); 
                    i++;
                    console.log(count_q);
                    console.log(i);
                    console.log(i>count_q);
                });
                console.log('in buuton')
                updateQuestion(type,i,type[i].button_type);
                $.cookie("question_id",type[i].question_id); 
            });
            console.log('out buuton')
            console.log(i)
            updateQuestion(type,i,type[i].button_type);    
        });
            }else{
                let i = 0;
                $.cookie("question_id",test_data[i].question_id);
                    // values
        
        let type = test_data;
        console.log(type);
        let count_q=Object.keys(type).length;
        console.log(count_q);
        //main
        $(".but").on("click","#sigma",function(){
                    getAnswer(type[i].button_type, function(msg){
                    console.log(msg);
                    sendAnswer(msg,$.cookie("user_id"),$.cookie("question_id"));
                    console.log(count_q);
                    console.log(i);
                    console.log(i>count_q);
                    if(i==count_q-1){
                        $(".but").text("");
                        $(".kl").text("");
                        $('.sigmaform').css('display', 'none');
                        $('result').css('display', 'flex');
                        $('result').css('flex-direction', 'column');
                        $('result').css('align-content', 'center');
                        $('result').css('width:', 'fit-content');
                        $("#result_h1").text("Результаты тестирования");
                        $(".img_result").html("<img src=../../images/gfg.jpg width=350 height=350>");
                        return false;
                    } 
                    $.cookie("question_id",type[i].question_id); 
                    i++;
                    console.log(count_q);
                    console.log(i);
                    console.log(i>count_q);
                });
                console.log('in buuton')
                updateQuestion(type,i,type[i].button_type);
            });
            console.log('out buuton')
            console.log(i)
            updateQuestion(type,i,type[i].button_type);
            }
            
            })
           
                    
}
