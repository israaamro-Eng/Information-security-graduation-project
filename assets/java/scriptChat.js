//..........btn back to home page............
function backToHome(){
    window.location.href = 'home.html';
}

//.......action menu........................
$(document).ready(function(){
	$('#action_menu_btn').click(function(){
		$('.action_menu').toggle();
	});
});