var express = require('express'),
	http = require('http');

var app = express();

app.configure(function() {
	app.use(express.static(__dirname + '/public'));
	app.set('views', __dirname + '/templates');
	app.engine('html', require('ejs').renderFile);
	app.set('port', 8080);
});

//Routes
app.get('/', function(req, res){
	res.render("index.html");
});
app.get('/team', function(req, res){
	res.render("team.html");
});
app.get('/rankings', function(req, res){
	res.render("matchups.html");
});
app.get('/standings', function(req, res){
	res.render("rankings.html");
});

http.createServer(app).listen(app.get('port'), function(){
    console.log("Express server listening on port " + app.get('port'));
});

