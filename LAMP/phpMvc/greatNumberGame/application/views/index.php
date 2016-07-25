<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>Indeed a number</title>
</head>
<style type="text/css">
	#container{
		margin:0 auto;
		width: 960px;
		text-align: center;
	}

</style>
<body>
	<div id="container">
		<?= $this->session->
		<h1>Welcome to the Great Number Game!</h1>
		<p>I am thinking of a number between 1 and 100!</p>
		<p>Take a guess!</p>
		<form action="index.php" action="post">
			<input type="text" name="guess">
			<input type="submit" value="submit">
		</form>
	</div>
	
</body>
</html>