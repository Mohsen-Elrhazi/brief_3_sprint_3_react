<?php
try{
    $servername="localhost";
    $username="root";
    $dbname="db_banque";
    $password="";
    
    $dns="mysql:host".$servername.",dbname".$dbname;
    $pdo =new PDO($dns,$username,$password);
}catch(PDOException $ex){
    die("error:".$ex->getMessage());
}
?>