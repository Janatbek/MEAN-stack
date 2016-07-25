<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>Counter Demo</title>
</head>
<style type="text/css">
	body{
		text-align: center;
	}
	.border{
		border:1px solid black;
		width: 50px;
		padding: 20px;
		margin: 15px auto;
		font-size: 24px;
	}
	button{
		width: 50px;
		height: 20px;
		background: blue;
	}


</style>
<body>
	<p>You visited the site 
	<div class="border"><?= $counter ?></div>
	 times</p>
	<a href="main/reset"><button>Reset</button></a>
	
</body>
</html>