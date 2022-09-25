
var controller;
var action;
var viewPath = 'views/';
var controllerPath = 'controllers/';
var POST = [];

if (!controller) controller = 'home';
if (!action) action = 'home';

var username = sessionStorage.getItem('username');
if ( !username ) {
	controller = 'authenticate';
	action = 'login';
}

loadPage();

function getParameters(url){
	var params = url.split("/");
	controller = params[1];
	action = params[2];
};

function storePOST(data){
	var vars = data.split("&");
	for (var i=0;i<vars.length;i++) {
		var pair = vars[i].split("=");
		POST[pair[0]] = pair[1];
	}
}

function loadTemplate(filename) {
	$('#content').load(viewPath+filename, function(){
		performLoads();
	});
}

function redirect(route) {
	var pageRedirect = searchForRoute(route);
	console.log(pageRedirect);
	controller = pageRedirect.controller;
	action = pageRedirect.action;
	loadPage();
}

function loadPage() {
	// console.log(controllerPath+controller+'.js')
	$.ajax({
		url: controllerPath+controller+'.js',
		dataType: 'script',
		success: function (response) {
			// triggerMessage('loaded');
		},
		error: function (xhr, ajaxOptions, thrownError) {
			console.log(xhr.status+': '+thrownError);
		}
	});
}