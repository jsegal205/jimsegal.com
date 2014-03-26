;(function(){
	var sum = 0, work = '';
	
	for (var i = 1; i<1000; i++){
		if ((i%3==0) || (i%5==0)){
			sum += i;
			work += i.toString() + " + ";
		}
	}

	work = work.substring(0, work.length - 2);
	
	document.getElementById('Work').innerHTML = work;
	document.getElementById('Answer').innerHTML = sum;
})();