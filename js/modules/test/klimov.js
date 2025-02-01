import { CriticPoint } from '../array/CriticPoint.js'

export function Get_QuesionId(attempt_id,redirect){
    $.ajax({
        url: 'https://digital-trace-mgtu.ru/api/v1/user/attempt/'+attempt_id+'/answer',
        headers:{
            'Authorization':$.cookie('access_token')
        },
        contentType: "application/json",
        method: 'GET',
        dataType: "json",
        processData:false,
        success: function(data){
                if(data[0]){
                    console.log(data);
                    let lastElement = data[data.length - 1].question_id;
                    $.cookie("question_id",lastElement);
                     window.location.href = redirect; 
                }else{
                    window.location.href = redirect; 
                }
        },
        error: function(jqXHR,exception) {
            if(JSON.parse(jqXHR.responseText).message == "Authorization in header is required"){
              document.location.href = 'https://digital-trace-mgtu.ru/sign_in.html'
            }
            if(jqXHR.status==500){
              document.location.href = 'https://digital-trace-mgtu.ru/sign_in.html'
            }
          }
    })
}

export function Post_NewAttempt(test_id,redirect){
    var data_body={
        test_id:test_id,
    };
    $.ajax({
        url: 'https://digital-trace-mgtu.ru/api/v1/attempt',
        headers:{
            'Authorization':$.cookie('access_token')
        },
        contentType: "application/json",
        method: 'POST',
        processData:false,
        data: JSON.stringify(data_body),
        success: function(data, textStatus, jqXHR){
            if (jqXHR.status === 200) {
                window.location.href= redirect;
            }
            
        },
        error: function (jqXHR, exception) {
            if (jqXHR.status === 0) {
                alert('Not connect. Verify Network.');
            } else if (jqXHR.status == 404) {
                alert('Requested page not found (404).');
            } else if (jqXHR.status == 500) {
                alert('Internal Server Error (500).');
            } else if (exception === 'parsererror') {
                alert('Requested JSON parse failed.');
            } else if (exception === 'timeout') {
                alert('Time out error.');
            } else if (exception === 'abort') {
                alert('Ajax request aborted.');
            } else {
                alert('Uncaught Error. ' + jqXHR.responseText);
            }
            }
    })
}

export function Get_Attempt_Button(test_id,redirect){
    $.ajax({
        url: 'https://digital-trace-mgtu.ru/api/v1/user/attempt',
        headers:{
            'Authorization':$.cookie('access_token')
        },
        contentType: "application/json",
        method: 'GET',
        dataType: 'json',
        data: {test_id: test_id,status_id: 1},
        success: function(data){
            if(data[0]){
                $.cookie("attempt_id",JSON.stringify(data[0].attempt_id))
                window.location.href = redirect; 
            }else{
                $(".but").html("<h3 style=color:white>Мы не нашли ваших попыток.Приступим?</h3><br>");
                $(".but").append("<button class=sigma id=start>Начать</button>");
            }
        },
        error: function(jqXHR,exception) {
            if(JSON.parse(jqXHR.responseText).message == "Authorization in header is required"){
              document.location.href = 'https://digital-trace-mgtu.ru/sign_in.html'
            }
            if(jqXHR.status==500){
              document.location.href = 'https://digital-trace-mgtu.ru/sign_in.html'
            }
          }
    });
}

export function Get_Attempt(test_id,reload){
    $.ajax({
        url: 'https://digital-trace-mgtu.ru/api/v1/user/attempt',
        headers:{
            'Authorization':$.cookie('access_token')
        },
        contentType: "application/json",
        method: 'GET',
        dataType: 'json',
        data: {test_id: test_id,status_id: 1},
        success: function(data){
                console.log(data)
                $.cookie("attempt_id",JSON.stringify(data[0].attempt_id));
                $.cookie("test_id",JSON.stringify(data[0].test_id));
                if(reload){
                    location.reload();
                }
        },
        error: function(jqXHR,exception) {
            if(JSON.parse(jqXHR.responseText).message == "Authorization in header is required"){
              document.location.href = 'https://digital-trace-mgtu.ru/sign_in.html'
            }
            if(jqXHR.status==500){
              document.location.href = 'https://digital-trace-mgtu.ru/sign_in.html'
            }
          }
    });
}

export function searchQuestion(key,test_data){
    let i = 0;
                test_data.forEach((elem,ind) =>{
                    console.log(key==elem.question_id);
                    if(key==elem.question_id){
                        i=ind;
                    }
                })
    console.log(i)
    return i;
}

export function getQuestion(test_id,callback){
    $.ajax({
        url: 'https://digital-trace-mgtu.ru/api/v1/test/'+test_id+'/questions',
        contentType: "application/json",
        method: 'GET',
        dataType: 'json',
        success: function(data){
            $.cookie("criticPoint",JSON.stringify(CriticPoint(data)));
            callback(data);
        },
        error: function (jqXHR, exception) {
            if (jqXHR.status === 0) {
                alert('Not connect. Verify Network.');
            } else if (jqXHR.status == 404) {
                alert('Requested page not found (404).');
            } else if (jqXHR.status == 500) {
                alert('Internal Server Error (500).');
            } else if (exception === 'parsererror') {
                alert('Requested JSON parse failed.');
            } else if (exception === 'timeout') {
                alert('Time out error.');
            } else if (exception === 'abort') {
                alert('Ajax request aborted.');
            } else {
                alert('Uncaught Error. ' + jqXHR.responseText);
            }
            }
    });
}

export function getAnswer(name,callback){
    if(name=="1"){
        var msg = $('input[type="radio"]:checked').attr('id');
        callback(msg);
    }else{
        var msg = [];
        // Используем метод :checked для выбора всех отмеченных чекбоксов
        // Затем используем метод .map() для извлечения id каждого чекбокса
        $('input[type="checkbox"]:checked').map(function() {
            msg.push($(this).attr('id'));
        });
        callback(msg);
    }
}

export function sendAnswer(selectedId,question_id,close){
    let attempt_id = $.cookie('attempt_id');
    var data = {
        question_id:Number(question_id),
        user_answer: [Number(selectedId)],
    };
    $.ajax({
        url: 'https://digital-trace-mgtu.ru/api/v1/user/attempt/'+attempt_id+'/answer',
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
                if(close){closeAttempt()}
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

export function closeAttempt(){
    let attempt_id = $.cookie('attempt_id');
    $.ajax({
        url: 'https://digital-trace-mgtu.ru/api/v1/attempt/'+attempt_id+'/close',
        contentType: "application/json",
        method: 'PATCH',
        processData:false,
        success: function(jqXHR){
            if(jqXHR===200){
                console.log("Попытка закрыта.");
            }
        },
        error: function (jqXHR, exception) {
            if (jqXHR.status === 0) {
                alert('Not connect. Verify Network.');
            } else if (jqXHR.status == 404) {
                alert('Requested page not found (404).');
            } else if (jqXHR.status == 500) {
                alert('Internal Server Error (500).');
            } else if (exception === 'parsererror') {
                alert('Requested JSON parse failed.');
            } else if (exception === 'timeout') {
                alert('Time out error.');
            } else if (exception === 'abort') {
                alert('Ajax request aborted.');
            } else {
                alert('Uncaught Error. ' + jqXHR.responseText);
            }
            }
    });
}

export function updateQuestion(data, currentQuestionIndex, type) {
    $("#answers").text("");
    // Получаем текущий вопрос из массива вопросов
    $("#que").html("<h3>Вопрос №" + Number(currentQuestionIndex+1) + " " + data[currentQuestionIndex].content + "</h3>");   
    let count = Object.keys(data[currentQuestionIndex].answers).length;
    console.log(type);
    if (type == "1") {
        for (let c = 0; c < count; c++) {
            $("#answers").append("<input type=radio id=" + c + " name=radio value=louie> </input><label for=" + c + ">" + data[currentQuestionIndex].answers[c].content + "</label>");
            
        }
    } else if (type == "2") {
        for (let c = 0; c < count; c++) {
            $("#answers").append("<input type=checkbox id=" + c + " name=checkbox value=louie> <label for=" + c + ">" + data[currentQuestionIndex].answers[c].content + "</label></input>");
        }
    }
    $(".but").html("<button type=submit class=sigma id=sigma>Отправить</button>");
    }