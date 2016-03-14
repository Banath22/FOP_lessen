var screenObj = (function(){

	$screenOverlay = $('<div class="screen-overlay"/>');
	$screenContext = $('<div class="screen-context"/>');
	$close = $('<span class="close">&#10005;</span>');

	$screenOverlay.append($screenContext);

	return{
		center: function(){

		},
		open: function(settings){
			$screenContext.append(settings.context, $close);
			$screenContext.css('width', settings.width+'px');
			$screenOverlay.appendTo('body');
			$close.on('click', screenObj.close);
		},
		close: function(){
			$screenContext.empty();
			$screenOverlay.detach();
		}
	}
}());