function Login(){
var username = document.getElementById("username").value;
var password = document.getElementById("password").value;
var message;

if(username == "mimin" && password == "mimin123"){
	message = "Selamat Datang Mimin, Anda Administrator";
}
else if (username == "budi" && password == "budi123"){
	message = "Selamat Datang Budi, Anda Operator";
} else {
	message = "Maaf Anda Gagal Login";
}

alert(message);
}