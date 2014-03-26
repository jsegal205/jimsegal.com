;(function(){
	function doWork(){
		var answer = '', fib = '', current = 1, prev = 0, evenFib = '', evenFibSum = 0, running = true;
		
		do {
			answer = prev + current;

			if (answer < 4000000) {
				fib += answer + ', ';
				prev = current;
				current = answer;

				if (current % 2 == 0) {
					evenFib += current + ', ';
					evenFibSum += current;
				}
			}
			else {
				running = false;
			}
			
		} while (running)
		
		fib = removeComma(fib);
		evenFib = removeComma(evenFib);

		document.getElementById('Work').innerHTML = '<p>Fibinacci numbers below 4 million:</p><p>' 
													+ fib + '</p><p>Even Fibinacci numbers below 4 million:</p>' 
													+ evenFib ;
		document.getElementById('Answer').innerHTML = evenFibSum;
	}

	function removeComma(str){
		return str.substring(0, str.length - 2);
	}

	doWork();

})();