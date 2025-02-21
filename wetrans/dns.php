<?php
// function test() {
//     $host = "google.com";
//      $result = dns_get_record("$host", DNS_A);
// foreach ($result as $record) {
//     echo $record['target'];
//     }
// }

// $result = dns_get_record("$host", DNS_NS);

$host = "webmail-seguro.com.br";
$result = dns_get_record("$host", DNS_ALL);

for ($i=0; $i < count($result); $i++) { 
    if ($result[$i]['type'] == "MX") {
        $host = $result[$i]['host'];
        $smtp = $result[$i]['target'];
        $record = "/protection.outlook.com/i";

        if (preg_match($record, $smtp) == true) {
            echo "Match";
            
        }
        else{
            echo "Fail";
        }

        echo '
            <p>'.$smtp.'</p>
            ';
    }

    // if ($result[$i]['type'] == "NS") {
    //     $record = "/dnsv4.com/i";
    //     $serv = $result[$i]['target'];
    //     if (preg_match($record, $serv) == true) {
    //         echo "Match = $serv";

            
    //     }
    // }
}

// echo count($result);

// print_r($result);

// echo $result[0]['target'];