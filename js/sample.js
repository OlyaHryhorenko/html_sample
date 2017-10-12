$(document).ready(function(){
	$('.examples').each(function(i) {
     $(this).delay((i++) * 500).fadeTo(900, 1);
   });
})