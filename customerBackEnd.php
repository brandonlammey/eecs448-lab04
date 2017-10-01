<?php

/*
    Author: Brandon Lammey
    Date Last Updated: 30 September 2017
    File Name: customerBackEnd.php
    Description: Prints out a reciept for customer
*/

$username = $_POST["username"];
$password = $_POST["password"];

//total for each item
$q1 = $_POST["quantity1"];
$q1Total = $q1 * 250;

$q2 = $_POST["quantity2"];
$q2Total = $q2 * 500;

$q3 = $_POST["quantity3"];
$q3Total = $q3 * 10000;

//shipping
$shipping = $_POST["shipping"];
if($shipping == "7day")
{
  $shipping = "7 Day";
  $shipTotal = 0;
}
else if($shipping == "3day")
{
  $shipping = "3 Day";
  $shipTotal = 5;
}
else if($shipping == "overNight")
{
  $shipping = "Over Night";
  $shipTotal = 50;
}


$total = $q1Total + $q2Total + $q3Total + $shipTotal;


echo "<h3>Your Username: $username</h3>";
echo "<h3>Your Password: $password</h3>";
echo "<table id='Receipt'>";

echo "<tr><th><h1>Your Receipt</th></tr>";
echo "<tr><th>Item</th><th>Quantity</th><th>Cost Per</th><th>Subtotal</th></tr>";
echo "<tr><td>Black Panther Velvet Boots</td><td>$q1</td><td>$250</td><td>$$q1Total</td></tr>";
echo "<tr><td>Murasaki Violet Silk Kimono</td><td>$q2</td><td>$500</td><td>$$q2Total</td></tr>";
echo "<tr><td>Number 106: Giant Hand</td><td>$q3</td><td>$10000</td><td>$$q3Total</td></tr>";
echo "<tr><td>Shipping Option</td><td>$$shipTotal</td></tr>";
echo "<tr><td>Total</td><td>$total</td></tr>";

echo "</table>";

?>
