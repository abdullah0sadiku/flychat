<?php 

function connection(){
    return $conn = new mysqli("localhost", "root", "12345678", "shkolla");
};


echo(connection());