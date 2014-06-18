$(window).resize(function() {
	if ($(window).width() >= 1200) {
		$('.title').show()
	};
	if ($(window).width() <= 1200) {
		$('.title').hide()
	};
});