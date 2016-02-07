var express = require('express');
var http = require('http');
var app = express();

var Firebase = require("firebase");
var ref = new Firebase("https://pixsnap.firebaseio.com/");

var bodyParser = require('body-parser');
app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies
//Specify a port
var port = process.env.port || 3000;


app.get("/", function(req, res){
	res.sendFile(__dirname + "/views/home.html");
});

//Serve up files in public folder
app.use(express.static('public/'));	

app.get("/login", function(req,res){

	// console.log(req.body);

	ref.authWithPassword({
		"email": req.query.email,
		"password": req.query.password
	}, function(error, authData) {
		if (error) {
			console.log("Login Failed!", error);
		} else {
			console.log("Authenticated successfully with payload:", authData);
		}
	});


});

app.get("/register", function(req, res){
	ref.createUser({
		email: req.query.email,
		password: req.query.password
	}, function(error, userData) {
		if (error) {
			switch (error.code) {
				case "EMAIL_TAKEN":
				console.log("The new user account cannot be created because the email is already in use.");
				break;
				case "INVALID_EMAIL":
				console.log("The specified email is not a valid email.");
				break;
				default:
				console.log("Error creating user:", error);
			}
		} else {
			console.log("Successfully created user account with uid:", userData.uid);
			// ref.child("userdata").set(req.query.username);
			ref.child("userdata").child(req.query.username).set({
				email: req.query.email,
				firstname: req.query.first,
				lastname: req.query.last,
				username: req.query.username
			})
		}
	});
	
});




//Start up the website
app.listen(port);
console.log('Listening on port: ', port);
