import { searchQuestion, getQuestion, getAnswer, sendAnswer, closeAttempt, updateQuestion, Get_Attempt } from '../modules/test/klimov.js'


const attempt_id = Number($.cookie("attempt_id"));
const redirect = "test/klimov/klimov.html";
const test_id = 1;

if(!$.cookie("attempt_id")){
  Get_Attempt(test_id,true);
//   location.reload();
}else{
        $(".but").text("");
        getQuestion(test_id,function(test_data){
            if($.cookie("question_id")){
                var min = searchQuestion($.cookie("question_id"),test_data);
            }else{
                var min = JSON.parse($.cookie('criticPoint')).min;
            }
            const max = JSON.parse($.cookie('criticPoint')).max;
            var i = min;

            $(".but").on("click","#sigma",function(){//клик на отправить
                getAnswer(test_data[i].button_type,function(button_id){
                    sendAnswer(button_id,test_data[i].question_id,false);
                    console.log(test_data[i].question_id)
                })

                    if(i==max){
                        closeAttempt()
                        $.cookie("question_id",test_data[i++].question_id);
                        $.cookie("result",true,{path:'/'});
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
                        return false;
                    }
                    $.cookie("question_id",test_data[i++].question_id);
                    updateQuestion(test_data,i,test_data[i].button_type);    
                   
            });
            console.log(min)
            $.cookie("question_id",test_data[min].question_id);
            updateQuestion(test_data,min,test_data[min].button_type); //1 вопрос
        });
    }
