/**
 * @author Jeffrey
 */

var main = function() {
	$('.dummy-box').slimScroll({
		height: '97%'
	});
	var curActiveContent;
	$('.mainbtn').click(function() {
		if($('.content-box').is(':hidden')) {
			$('.jumbotron').removeClass('jumbotron-reduce');
			$('.unclipped').toggleClass('clipped');
			$('.content-box').delay(200).fadeIn(1000);	
		}
		if(curActiveContent !== $(this).attr('id')) {
			$('.content-page').fadeOut(500);	
		}
		if($(this).is('#bio')) {
			$('#bio-content').delay(500).fadeIn(500);
		}
		else if($(this).is('#photo')) {
			$('#photo-content').delay(500).fadeIn(500);
		}
		else if($(this).is('#project')) {
			$('#project-content').delay(500).fadeIn(500);
		}
		else if($(this).is('#course')) {
			$('#course-content').delay(500).fadeIn(500);
		}
		curActiveContent = $(this).attr('id');
	});
	
	$('.return').click(function() {
		$('.content-box').fadeOut(1000);
		$('.jumbotron').delay(700).addClass('jumbotron-reduce');
		$('.clipped').toggleClass('clipped');
	});
};

$(document).ready(main);	
