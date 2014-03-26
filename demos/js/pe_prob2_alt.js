;(function(){
	function doWork(){
 		var fib = loadFib(), sum = 0, work = '', evenWork = '';

		for(var i = 1; i < fib.length; i++) {
			if (fib[i] < 4000000) {
				work += fib[i] + ', ';
				if (fib[i] % 2 == 0){
					sum += fib[i];
					evenWork += fib[i] + ', ';
				}
			}
		}

		document.getElementById('Work').innerHTML = '<p>Fibinacci numbers below 4 million:</p><p>' 
												+ work.substring(0, work.length - 2) + '</p><p>Even Fibinacci numbers below 4 million:</p>' 
												+ evenWork.substring(0, evenWork.length - 2);
		document.getElementById('Answer').innerHTML = sum;
	}

	function loadFib(){
		var run = true, fib = [];
		
		fib.push(1);
		fib.push(1);
		
		do{
			fib.push(fib[fib.length - 1] + fib[fib.length - 2]);

			if (fib[fib.length - 1] > 4000000){
				run = false;
			}
		}
		while(run);

		return fib;
	}

	doWork();	
})();