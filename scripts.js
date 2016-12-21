var textWithBkg = 'bg-darkCyan fg-white';
var submitBtn; var loadBtn;

function addClasses() {
	$('.table th,input:button,input:submit,.button').addClass(textWithBkg);
	$('.sp_button').removeClass(textWithBkg);
}

function createCalenders() {
	$(".datepicker").datepicker({
		format: "yyyy-mm-dd", // set output format
		effect: "fade", // none, slide, fade
		position: "bottom", // top or bottom,
	});
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
	createCalenders();
	processForms();
}

function triggerError(msg) {
	$.Notify({
		content: msg,
		style: {background:'#ff2d19',color:'white'}
	});	
	resetSubmit();
}

function triggerMessage(msg) {
	$.Notify({
		content: msg,
		style: {background:'#7ad61d',color:'white'}
	});
}

function submitForm() {
	storePOST($(this).closest('form').serialize());
	url = $(this).attr('action');
	getParameters(url);
	
	submitBtn = $('.submit');
	if (submitBtn.hasClass('place-right')) var oclass = 'place-right'; else var oclass = '';
	btn = '<button onclick="return false;" class="button '+oclass+' warning"><span class="mif-spinner2 mif-ani-spin"></span> Loading</button>';
	submitBtn.hide();
	loadBtn = $(btn).insertAfter(submitBtn);
	loadPage();
}

function resetSubmit() {
	loadBtn.remove();
	submitBtn.show();
}

function processForms() {
	$('form').on('submit',submitForm);
}

function loadTemplate(filename) {
	$('#content').load(viewpath+filename, function(){
		performLoads();
	});
}

function redirect(newctrl,newaction) {
	ctrl = newctrl;
	action = newaction;
	loadPage();
}