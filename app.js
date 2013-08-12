//Scoreboard.js
//John Heenan <j@johnheenan.org>

//Include express
var express = require('express');
var qs = require('querystring');
var app = express();

//Game variables
//We don't need a fancy database for this
var p1score = 0;
var p2score = 0;

var p1name = 'Player 1';
var p2name = 'Player 2';

app.set('views', __dirname + '/views');
app.set('view engine', 'jade');
app.use(express.logger('dev')); //Verbose logging
app.use(express.static(__dirname + '/public'));
app.use(express.bodyParser());

//Home
app.get('/', function(req, res) {
	res.render('index',
		{ title : 'Home'}
		);
});

//Scoreboard view
app.get('/board', function(req, res) {
	res.render('board',
		{ title : 'Scoreboard',
		n1 : p1name,
		n2 : p2name
	});
});

//Control view
app.get('/admin', function(req, res) {
	res.render('admin',
		{title : 'Admin',
		n1 : p1name,
		n2 : p2name
	});
});

//JSON 'API' for the score
app.get('/score', function(req, res) {
	var t = new Object();
	t.p1 = p1score;
	t.p2 = p2score;
	t.n1 = p1name;
	t.n2 = p2name;
	res.json(t);
});

//A request here will increment p1's score, and so on
app.get('/plus-p1', function(req, res) {
	p1score++;
	res.redirect('/admin');
});

app.get('/plus-p2', function(req, res) {
	p2score++;
	res.redirect('/admin');
});

//Decrement a score, in case of a double tap
app.get('/minus-p1', function(req, res) {
	p1score--;
	res.redirect('/admin');
});

app.get('/minus-p2', function(req, res) {
	p2score--;
	res.redirect('/admin');
});

//Use a GET request to update player names
app.get('/name', function(req, res) {
	p1name = req.query.p1;
	p2name = req.query.p2;
	res.redirect('/admin');
});

//Reset the game parameters
app.get('/reset', function(req, res) {
	p1name = 'Player 1';
	p2name = 'Player 2';
	p1score = 0;
	p2score = 0;
	res.redirect('/admin');
});

//Run the server
app.listen(8000);
console.log('Server started.');
