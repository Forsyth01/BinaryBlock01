<?php 


$set = false;

$servername = "localhost";
$username = "root";
$password = "";
$dbname = "binarydb";

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);
// Check connection
if ($conn->connect_error) {
  die("Connection failed: " . $conn->connect_error);
}
git
// $binary = $_POST['binareq'];
// $bloz = $_POST['BLOZ'];
// $bibk = $_POST['BIBK'];
// $binz = $_POST['BINZ'];

    if (isset($_POST['submitNftId'])){
        $decimal = (int) $_POST['decimal'];
        if (empty($decimal) || $decimal == '' || !is_int($decimal)){
            if (empty($decimal) || $decimal == ''){
                echo json_encode(['eset' => $set, 'msg' => "Cannot be empty"]);
            }else if(!is_int($decimal)){
                echo json_encode(['eset' => $set, 'msg' => "Enter a valid ID"]);
            }        
            // $ans = is_int($_POST['decimal']);
            exit;//['eset' => $set,
        } else{
            $xvy = $_POST['decimal'];
            $res = decbin($xvy); //converting decimal to binary
            $var = (string) $res; //converting number to string
                
            // echo "$var <br>";
            $array = str_split($var, 2);
            if (strlen($array[sizeof($array) - 1]) == 1) {
                $array[sizeof($array) - 1] = "0" . $array[sizeof($array) - 1];
            }
            $bibk = [];
            $result = bigCheck($array, $bibk);

            $bloz = arraySumSplit($result['binz']);
            $bibk = array_sum($result['bibk']);
            $binz = array_sum($result['binz']);
            $insert = insertDB($conn, $decimal, $bloz, $bibk, $binz);
            if($insert){
                $set = true;
                echo json_encode(['eset' => $set, 'bloz' => $bloz, 'bibk' => $bibk, 'binz' => $binz, 'dcml' => $xvy, 'bnry' => $var]);
                exit;
            }else{
                echo json_encode(['eset' => $set, 'msg' => "Something went wrong, try again"]);
                exit;
            }
        }
    }
    

    function getLast($num){
        return str_split($num,1)[1];
    }
    
    function arraySumSplit($arr){
        $sum = 0;
        foreach($arr as $el){
            $split = str_split($el, 1);
            $sum += $split[0] + $split[1];
        }
        return $sum;
    }
    
    function bigCheck($binz, $bibk){
        foreach ($binz as $key => $value) {
            if ($key === 0) {
                $bibk[$key] = 100;
            }
            else if($key === 1){
                $bibk[$key] = 111;
            }
            else if($key === 2){
                $bibk[$key] = 10;
            }
            else if($key === 3){
                $bibk[$key] = 11;
            }
            else{
                if($key%2 == 0){
                    $bibk[$key] = (getLast($binz[$key]) == 0) ? 1 : 10;
                }
                else{
                    $bibk[$key] = (getLast($binz[$key]) == 0) ? 0 : 11;
                }
            }
        }
        return ['binz' => $binz, 'bibk' => $bibk];
    }


function insertDB($conn, $deci, $bloz, $bibk, $binz){
    $sql = "INSERT INTO codeblock (deci, BLOZ, BIBK, BINZ) VALUES ('$deci', '$bloz', '$bibk', '$binz')";
    if ($conn->query($sql) === TRUE) {
        return true;       
        $conn->close();
    } else {
        echo "Error: " . $sql . "<br>" . $conn->error;
        $conn->close();
    }
}

?>