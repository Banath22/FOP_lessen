$(document).ready(function(){
	var wallOneContext = $('#wall1').detach();
	var wallTwoContext = $('#wall2').detach();
	var wallThreeContext = $('#wall3').detach();

	$('#wallp1').on('click', function(){
		screenObj.open({context: wallOneContext, width: 700});
	});
	$('#wallp2').on('click', function(){
		screenObj.open({context: wallTwoContext, width: 700});
	});
	$('#wallp3').on('click', function(){
		screenObj.open({context: wallThreeContext, width: 700});
	});
});