$(document).ready(function(){
	

	/*for active menu*/
		$(function () {
			var width = $(window).width();
	  	$('.header-cont a').each(function () { // проходим по нужным нам ссылками
	  	var location = window.location.href; // переменная с адресом страницы
	  	var link = this.href; // переменная с url ссылки
	  	var result = location.match(link); // результат возвращает объект если совпадение найдено и null при обратном
		
	  	if(result != null && width > 992) { // если НЕ равно null
	  	  $('.flag').removeClass('active'); // сначала удаляем класс с индексной страницы
	  	  $('.flag', this).addClass('active'); // добавляем класс
	  	}
		});

		$('header a').hover(function(event){
			var width = $(window).width();
			if(!$('.flag', this).hasClass('active') && width > 992)
		$('.flag', this).slideDown(120);
		},
			function(event){
				var width = $(window).width();
				if(!$('.flag',this).hasClass('active') && width > 992)
			$('.flag', this).slideUp(120);
		});	  

	});

});