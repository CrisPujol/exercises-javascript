
function User ( name, username, password) {

	this.name = name;
    this.username = username;
    this.password = User.encrypt(password);

}

User.encrypt = function( text ){
	passSecret = text;
	var encrypt = text.replace(/a/g, "2");
	encrypt =  encrypt.replace(/e/g, "4");
	encrypt =  encrypt.replace(/i/g, "0");
	encrypt =  encrypt.replace(/o/g, "1");
	encrypt =  encrypt.replace(/u/g, "3");
	return encrypt
}

User.prototype.decryptPassword = function () {

	// more magic
	return student.password = passSecret
}


var student  = new User("juanma", "Guitar", "aaakkkkeeekkikokkukkuuu");





/*

function User ( name, username, password) {

	this.name = name;
    this.username = username;
    this.password = User.encrypt(password);

}

User.encrypt = function( text ){
	passSecret = text;
	var encrypt = text.replace("/\a/g", "2");
	encrypt =  encrypt.replace(/\e/g, "4");
	encrypt =  encrypt.replace(/\i/g, "0");
	encrypt =  encrypt.replace(/\o/g, "1");
	encrypt =  encrypt.replace(/\u/g, "3");
	return encrypt
}

User.prototype.decryptPassword = function () {

	// more magic
	return student.password = passSecret
}


var student  = new User("juanma", "Guitar", "aaakkkkeeekkikokkukkuuu");





*/