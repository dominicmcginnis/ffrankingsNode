//params: page, element
//response: json { template, showNav, pageData }
function MyApp() { 
	this.loadContent('home', '.container');
}

MyApp.prototype.loadContent = function(page, el) {
	var url = this.getUrl(page);
	$.get(url, function(data) {

	});
};

MyApp.prototype.getUrl = function(page) {
	var url = '/';
	switch(page) {
		case 'home':
			url = '/';
			break;
		case 'team':
			url = '/team';
			break;
		case 'standings':
			url = '/standings';
			break;
		case 'matchup':
			url = '/matchups';
			break;
		default:
			url = '/';
			break;
	}
	return url;
};
