<?php include('server.php') ?>
<!DOCTYPE html>
<html>
<head>
  <title>MUNorg</title>
  <link rel="stylesheet" type="text/css" href="style.css">
</head>
<body>
  <div class="header">
  	<h2>REGISTER</h2>
  </div>
  <form method="post" action="register.php">
  	<?php include('errors.php'); ?>
  	<div class="input-group">
  	  <label>Username</label>
  	  <input type="text" name="username" value="<?php echo $username; ?>">
  	</div>
  	<div class="input-group">
  	  <label>Email</label>
  	  <input type="email" name="email" value="<?php echo $email; ?>">
  	</div>
  	<div class="input-group">
  	  <label>Password</label>
  	  <input type="password" name="password_1">
  	</div>
  	<div class="input-group">
  	  <label>Confirm password</label>
  	  <input type="password" name="password_2">
  	</div>
	<div class="input-group">
	  <label>Role</label>
	  EB Member<input type="radio" name="profession" value='other'/>                                            
	  Delegate<input type="radio" name="profession" value='delegate'/>                                            
	</div>
  	<div class="input-group">
  	  <button type="submit" class="btn" name="reg_user">REGISTER</button>
  	</div>
  	<p>
  		Already a member? <a href="login.php">SIGN IN</a>
  	</p>
  </form>
</body>
</html>