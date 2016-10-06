

var mouseInteractions = function(){
	var $interactiveElement = $('.js-mouse-interaction');

	var $mousePositionElement = $('.js-mouse-coord');
	var $fadeImage = $('.js-fade-in');

	
	$interactiveElement.mousemove(mouseMoved);

	
	var textFieldElement = document.getElementById('avoidIDs');
	
	function mouseMoved(event) {
		$mousePositionElement.text('mouse position' + event.pageX + ", " + event.pageY);
		

		$fadeImage.css('opacity', event.pageY * 0.001);
		
	}
};


$(document).ready(function(){
	mouseInteractions();
});