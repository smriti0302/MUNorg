<?php include('server.php') ?>
<!DOCTYPE html>
<html>
<head>
  <title>MUNorg</title>
  <link rel="stylesheet" type="text/css" href="style.css">
</head>
<body>
	<h1 id="heading">MUNorg</h1>
  <div class="header">
  	<h2>LOGIN</h2>
  </div>
	 
  <form method="post" action="login.php">
  	<?php include('errors.php'); ?>
  	<div class="input-group">
  		<label>Username</label>
  		<input type="text" name="username" >
  	</div>
  	<div class="input-group">
  		<label>Password</label>
  		<input type="password" name="password">
  	</div>
  	<div class="input-group">
  		<button type="submit" class="btn" name="login_user">LOGIN</button>
  	</div>
  	<p>
  		Not yet a member? <a href="register.php">SIGN UP</a>
  	</p>
  </form>
</body>
</html>