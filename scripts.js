var submitButton; var loadButton;

function addClasses() {
	
}

function openWindow(link) {
	dialog = $('#dialog').html('Loading...').data('dialog');
	dialog.open();
	$('#dialog').load(link,function(d){
		dialog.close();
		dialog.open();
	});
}

$( function() {
	performLoads();
})

function performLoads() {
	addClasses();
	processForms();
}

function triggerError(msg) {
	
	resetSubmit();
}

function triggerMessage(msg) {
	
}

function submitForm() {
	storePOST($(this).closest('form').serialize());
	route = $(this).attr('action');
	redirect(route);
	
	submitButton = $('.submit');
	if (submitButton.hasClass('pull-right')) var otherClass = 'pull-right'; else var otherClass = '';
	submitButton.hide();

	button = '<button onclick="return false;" class="btn btn-warning '+otherClass+'">Loading</button>';
	loadButton = $(button).insertAfter(submitButton);

	loadPage();
}

function resetSubmit() {
	loadButton.remove();
	submitButton.show();
}

function processForms() {
	$('form').on('submit',submitForm);
}