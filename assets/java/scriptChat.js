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


//........delete btn from action menu........

function deleteMessages() {
	var messages = document.getElementsByClassName('message');

	while (messages.length > 0) {
	  messages[0].remove();
	}
  }
  var deleteBtn = document.getElementById('deleteMessagesBtn');
  deleteBtn.addEventListener('click', deleteMessages);



  //..............up laode picture....................

  document.querySelector('#feed-pic-upload').addEventListener('change',()=>{
    document.querySelector('#postIMG').src = URL.createObjectURL(document.querySelector('#feed-pic-upload').files[0]);
})


document.getElementById('zoomImage').addEventListener('click', function() {
    this.classList.toggle('zoomed');
});


//..........btn back to home page............
function backToAskPage(){
  window.location.href = 'ask.html';
}