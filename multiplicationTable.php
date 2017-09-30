<?php
	echo "<table border=\"5\">";
	
	//multiply elements and print out each row
	for($i = 1; $i<=100; $i++)
	{
		//print each column
		echo('<tr>');
		for($j =1; $j<=100; $j++)
		{
			echo('<td>'. $i*$j. '</td>');
		}
		echo'</tr>';
	}

	echo "</table>";

?>
