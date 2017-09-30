<?php
//correct solutions
$q1 = $_POST["q1"];
$a1 = "b";

$q2 = $_POST["q2"];
$a2 = "a";

$q3 = $_POST["q3"];
$a3 = "c";

$q4 = $_POST["q4"];
$a4 = "d";

$q5 = $_POST["q5"];
$a5 = "d";

//calculate total score
$score = 0;
$total = 5;
$percentage = 0;
if($q1 == $a1)
{
  $score += 1;
}
if($q2 == $a2)
{
  $score += 1;
}
if($q3 == $a3)
{
  $score += 1;
}
if($q4 == $a4)
{
  $score += 1;
}
if($q5 == $a5)
{
  $score += 1;
}

//Output solutions
echo "<h3>Question 1: A person having their limbs stretched by ropes, under the control of a torturer who adjusted the tension by means of a crank, was known as what?</h3>";
echo "Your Answer: $q1<br>";
echo "Correct Answer: $a1<br>";

echo "<h3>Question 2: A wooden pyramid which the victim was forced to sit upon was called what?</h3>";
echo "Your Answer: $q2<br>";
echo "Correct Answer: $a2<br>";

echo "<h3>Question 3: What was the Brazen Bull?</h3>";
echo "Your Answer: $q3<br>";
echo "Correct Answer: $a3<br>";

echo "<h3>Question 4: A device which was the opposite of the infamous Rack, this implement compressed the body.</h3>";
echo "Your Answer: $q4<br>";
echo "Correct Answer: $a4<br>";

echo "<h3>Question 5: This instrument involved taking a victim's arms and legs and shattering them by weaving them through it.</h3>";
echo "Your Answer: $q5<br>";
echo "Correct Answer: $a5<br>";

//Output Score
$percentage = ($score/$total)*100;
echo "<h2> You got $score out of $total correct</h2>";
echo "<h3>You got $percentage%</h3>";
?>