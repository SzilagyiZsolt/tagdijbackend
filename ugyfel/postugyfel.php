<?php
$nev=$_POST["nev"];	
$szuldatum =$_POST["szuldatum"];
$irszam=$_POST["irszam"];	
$orsz=$_POST["orsz"];
require_once './databaseconnect.php';
$sql = "INSERT INTO ugyfel (azon, nev, szuldatum, irszam, orsz) VALUES (NULL, ?, ?, ?, ?)";
$stmt = $connection->prepare($sql);
$stmt->bind_param("siis", $nev, $szuldatum, $irszam, $orsz);  
if ($stmt->execute()) {
    http_response_code(201);
    echo 'Sikeresen hozzáadva';
} else {
    http_response_code(404);
    echo 'Nem sikerült hozzáadni';
}