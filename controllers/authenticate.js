if (action == 'login') {
	loadTemplate('login.html');
}

if (action == 'sign_in') {	
	var username = POST['username'];
	var password = POST['password'];

	if ( !username || !password ) {
		triggerError('Invalid Username/Password');
	} else {
		var hash = Sha256.hash(password);
		var sql = "select * from users where username = '"+username+"' and password ='"+hash+"'";
		
		data = Users.fetchRows(sql);
		
		if (!data || data[0].password != hash) {
			triggerError('Invalid Username/Password');
			resetSubmit();
		} else {
			if (data[0]['status']) {
				triggerMessage('Successfully Logged In');
				sessionStorage.setItem('username',data[0].username);
				redirect('home');
			} else {
				triggerError('Your account has been deactivated');
			}
		}
	}
}

if (action == 'logout') {
	sessionStorage.clear();
	triggerMessage('Successfully Logged Out');
	redirect('home');
}