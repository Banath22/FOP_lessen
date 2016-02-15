$('.menu').each(function(){
	var thisButton = $(this);
	var activeButton = thisButton.find('li.active');
	var link = activeButton.find('a');
	var activePannel = $(link.attr('href'));

	thisButton.on('click', 'a', function(e) {
		e.preventDefault();
		var link = $(this);

		var wantedId = this.hash;


		if (wantedId && !link.parent().is('.active')){
			activePannel.removeClass('active');
			activeButton.removeClass('active');

			activePannel = $(wantedId).addClass('active');
			activeButton = link.parent().addClass('active');
		}

	})

});