$(document).ready(function() {

	$('img').click(function() {
		if (!$(this).hasClass('enlarged')) {
			$(this).addClass('enlarged');
	    	$(this).css('width', '40%');
		} else {
			$(this).removeClass('enlarged');
			$(this).css('width','20%');
	    }
   	});
});



