var nav = $('.navHero');

$(document).ready(function(){
	$('#nav-icon1,#nav-icon2,#nav-icon3,#nav-icon4').click(function(){
		var classList = nav.attr('class').split(/\s+/);
		$(this).toggleClass('open');
		nav.toggleClass('display');
		$.each(classList, function(index, item) {
		    if (item === 'animate') {
		        nav.toggleClass('no-animate');
		    }else if(item === 'no-animate'){
		    	nav.toggleClass('no-animate');
		    }
		});
		nav.toggleClass('animate');
	});
});