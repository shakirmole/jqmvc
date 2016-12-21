var app = angular.module('app',[]);

app.controller('MainController', ['$scope', function($scope) {
	
}]);

var ctrl = 'home';
var action = 'index';
var viewpath = 'views/';
var ctrlpath = 'controllers/';
var POST = [];

var username = sessionStorage.getItem('username');
if ( !username ) {
	ctrl = 'authenticate';
	action = 'login';
}

loadPage();

function getParameters(url){
	var params = url.split("/");
	ctrl = params[1];
	action = params[2];
};

function storePOST(data){
	var vars = data.split("&");
	for (var i=0;i<vars.length;i++) {
		var pair = vars[i].split("=");
		POST[pair[0]] = pair[1];
	}
}

function loadPage() {
	$.ajax({
		url: ctrlpath+ctrl+'.js',
		dataType: 'script',
		success: function (response) {
			// triggerMessage('loaded');
		},
		error: function (xhr, ajaxOptions, thrownError) {
			console.log(xhr.status+': '+thrownError);
		}
	});
}