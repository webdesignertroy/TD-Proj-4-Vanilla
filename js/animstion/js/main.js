var emailUs;

$(".animsition").animsition({
  inClass: 'fade-in-right-lg',
  outClass: 'fade-out-right-lg',
  linkElement: 'header a',
  inDuration: 1000,
  outDuration: 500
});

$(".header").sticky({
	getWidthFrom: '.container',
	responsiveWidth: true
});

$(".header").on('sticky-start',function(){
	$('.description').html('We build <strong>great</strong> apps');
}).on('sticky-end', function(){
	$('.description').html('We build apps');
});

$emailUs = "<a href='mail:help@agency.com'>Email Us</a>";

$(".grid-full h5").sticky({
	getWidthFrom: '.container',
	responsiveWidth: true,
	topSpacing:64
});
$(".grid-full h5").css('background-color', 'rbga(255,255,255, 0.85)');
$(".grid-full h5").on('sticky-start',function(){
	$('.grid-full h5').html('Want us to work on your project? ' + $emailUs);
}).on('sticky-end', function(){
	$('.grid-full h5').html('Want us to work on your project?');
});