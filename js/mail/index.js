const url_mail="https://digital-trace-mgtu.ru/api/v1/mail/user";
let class_sign="u-border-1 u-border-active-palette-2-base u-border-hover-palette-1-base u-border-no-left u-border-no-right u-border-no-top u-btn u-button-style u-login-control u-login-forgot-password u-none u-text-palette-1-light-1 u-btn-2";
function getQueryStringValue(key) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(key);
}
// Пример использования:
const myVar = getQueryStringValue('accept_token');
console.log(myVar);
$.ajax({
    type: 'get',
    data: {accept_token:myVar},
    contentType: 'application/json',
    url: url_mail,
    dataProcess: false,
    success: function(data) {
        console.log(data.user_id);
        $.cookie('user_id',data.user_id,{expires:30,path:'/'});
        $("#message").append('Вы успешно подтвердили почту. Авторизуйтесь используя данные, указанные при регистрации.');
    var linkObject = $('<a>', {
        class: class_sign,
        href: '../../sign_in.html',
        text: 'Авторизоваться' // Добавление текста внутрь тега
    });
    $('.success').append(linkObject);
    },
    error: function(error) {
        $("#message").append('Вы уже подтвердили почту. Авторизуйтесь используя данные, указанные при регистрации.');
        var linkObject = $('<a>', {
            class: class_sign,
            href: '../../sign_in.html',
            text: 'Авторизоваться' // Добавление текста внутрь тега
        });
        $('.success').append(linkObject);
    }
});