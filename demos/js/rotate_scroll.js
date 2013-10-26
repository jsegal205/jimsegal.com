;(function($){

		var _deg = 0;
		var _degToRotate = 10;
		var _fullCircle = 360;

	$(document).on('click', '#rotate_reset', function(){
		_deg = _fullCircle;
		rotate();
	});

	$(document).on('mousewheel DOMMouseScroll', '#rotate_scroll_demo', function(evt){

		if (extractDelta(evt) / 120 > 0){
			//scroll up
			_deg -= _degToRotate;
		}	else {
			//scroll down
			_deg += _degToRotate;
		}
		rotate(_deg);
		evt.preventDefault();
	});

		function extractDelta(evt)
		{
		    if (evt.wheelDelta){
		    	return evt.wheelDelta;
		    }
		    if (evt.originalEvent && evt.originalEvent.detail){
		    	return evt.originalEvent.detail * -40;
		    }       
		    if (evt.originalEvent && evt.originalEvent.wheelDelta){
		    	return evt.originalEvent.wheelDelta;
		    }
		}
		function rotate(){
			if (_deg === _fullCircle){
				_deg = 0;	
			} 
			if (_deg === -_degToRotate){
				_deg = _fullCircle - _degToRotate;
			}
			
			$('#rotate').css('transform','rotate(' + _deg + 'deg)');
		};
})(jQuery);