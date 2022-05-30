<?php
header("Access-Control-Allow-Origin:*");
header("Access-Control-Allow-Methods:GET,POST");
header("Access-Control-Allow-Headers:*");
$con=mysqli_connect("127.0.0.1","root","","crued");
$request=file_get_contents("php://input");
$data=json_decode($request);
if (is_object($data)) {
$data = get_object_vars($data);
}
if(isset($data['Name'])){
    $name=$data['Name'];
    $email=$data['Email'];
    $psw=$data['Password'];
    $query="UPDATE sample SET  Name='$name',Mail='$email',Password='$psw'  where Password='$psw'";
    $res=mysqli_query($con,$query);
    echo json_encode(array("alert"=>"Sucess"));
}
?>